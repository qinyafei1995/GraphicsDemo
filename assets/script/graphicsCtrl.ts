
import { _decorator, Component, Node, Graphics, EventTouch, Vec3, Color, UITransform, Vec2, v3, color, Prefab, instantiate, sp } from 'cc';
import { GraphicsItem, LineData, RecoverLineData } from './graphicsItem';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Graphics
 * DateTime = Wed Nov 24 2021 16:25:20 GMT+0800 (中国标准时间)
 * Author = ChinaQin
 * FileBasename = graphics.ts
 * FileBasenameNoExtension = graphics
 * URL = db://assets/script/graphics.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('GraphicsCtrl')
export class GraphicsCtrl extends Component {
    @property(Node)
    touchNode: Node = null;

    @property(Prefab)
    linePfb: Prefab = null;

    @property(Node)
    lineMng: Node = null;

    /**
     * 动作id. 用于判定是第几次画图
     */
    private actionID: number = 0;
    private actionIDList: number[] = [];
    private curActionID: number = null;
    /**
     * 当前颜色
     */
    private curColor: Color = color(255, 255, 0);

    /**
     * 当前画笔宽度
     */
    private curWidth: number = 6;

    /**
     * 当前划线节点组件
     */
    private curGpItem: GraphicsItem = null;

    private allRecoverLineData: RecoverLineData[] = [];

    selfTransform: UITransform = null;
    start() {
        this.init();
        this.initEvent();
    }

    private init(): void {
        this.selfTransform = this.node.getComponent(UITransform);
    }

    private initEvent(): void {
        this.touchNode.on(Node.EventType.TOUCH_START, this.touchStart, this);
        this.touchNode.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
    }

    //#region 触摸逻辑
    private touchStart(event: EventTouch): void {
        const uiPos: Vec2 = event.getUILocation();
        const locPos: Vec3 = this.selfTransform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y));
        this.addActionIdToList();
        this.addLine();
        this.curGpItem.startLine(locPos);
    }

    private touchMove(event: EventTouch): void {
        const uiPos: Vec2 = event.getUILocation();
        const locPos: Vec3 = this.selfTransform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y));
        this.curGpItem.drawLine(locPos);
    }
    //#endregion

    //#region 
    private addActionIdToList(): void {
        this.curActionID = new Date().getTime();
        this.actionIDList.push(this.curActionID);
    }
    //#endregion

    /**
     * 添加线段
     */
    private addLine(): void {   
        const data: LineData = {
            strokeColor: this.curColor,
            width: this.curWidth,
            id: this.curActionID
        }
        const nd = instantiate(this.linePfb);

        this.lineMng.addChild(nd);
        this.curGpItem = nd.getComponent(GraphicsItem);
        this.curGpItem.init(data);
    }

    /**
     * 设置线条宽度 
     * @param num 
     */
    public setLineWidth(num: number): void {
        this.curWidth = num;
    }

    /**
     * 设置线条颜色
     * @param clr 颜色
     */
    public setLineColor(clr: Color): void {
        this.curColor = clr;
    }

    /**
     * 清除上一条线
     */
    public removeOneLine(): void {
        const lastID = this.actionIDList.pop();
        
        this.lineMng.children.forEach((nd: Node) => {
            const itemCom: GraphicsItem = nd.getComponent(GraphicsItem);
            console.log("last id", lastID, "get action id", itemCom.getActionId());
            if (itemCom.getActionId() === lastID) {
                this.allRecoverLineData.push(itemCom.getRecoverLineData());
                itemCom.clearline();
                nd.destroy();
            }
        })
    }

    /**
     * 清除所有线段, 不可进行数据恢复
     */
    public removeAllLine(): void {
        this.actionIDList = [];
        this.lineMng.children.forEach((nd: Node) => {
            const itemCom: GraphicsItem = nd.getComponent(GraphicsItem);
            this.allRecoverLineData.unshift(itemCom.getRecoverLineData());
            itemCom.clearline();
            nd.destroy();
        })
    }

    /**
     * 恢复一条线段
     */
    public recoverOneLine(): void {
        if (this.allRecoverLineData.length >= 1) {
            const rData = this.allRecoverLineData.pop();
            this.actionIDList.push(rData.id);
            this.addLine();
            this.curGpItem.recoverLine(rData);
        } else {
            console.log("没有恢复的数据了")
        }
    }

    /**
     * 恢复所有线段
     */
    public recoverAllLine(): void {
        if (this.allRecoverLineData.length >= 1) {
            const rData = this.allRecoverLineData.pop();
            this.actionIDList.push(rData.id);
            this.addLine();
            this.curGpItem.recoverLine(rData);

            this.recoverAllLine();
        } else {
            return;
        }
    }

    /**
     * 清空恢复数据, 关闭页面, 重新打开时调用
     */
    public claerAllRecoverList(): void {
        this.allRecoverLineData = [];
    }
}