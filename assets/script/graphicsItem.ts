
import { _decorator, Component, Color, Vec3, Graphics, UITransform } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 线的数据类型,包含以下数据: 
 */
export interface LineData {
    /**
     * 画笔颜色
     */
    strokeColor: Color,

    /**
     * 宽度
     */
    width: number,

    /**
     * 笔画Id
     */
    id: number
}

/**
 * 恢复线段需要的数据
 */
export interface RecoverLineData extends LineData {
    /**
     * 划线路径
     */
    paths: Vec3[],

    /**
     * 在父节点下,显示位置,用于维护层级
     */
    siblingIndex: number
}


/**
 * Predefined variables
 * Name = GraphicsItem
 * DateTime = Wed Nov 24 2021 17:00:37 GMT+0800 (中国标准时间)
 * Author = ChinaQin
 * FileBasename = graphicsItem.ts
 * FileBasenameNoExtension = graphicsItem
 * URL = db://assets/script/graphicsItem.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('GraphicsItem')
export class GraphicsItem extends Component {
    actionId: number = -1;
    selfGP: Graphics = null;
    linesPaths: Vec3[] = [];

    /**
     * 初始化
     * @param data 
     */
    public init(data: LineData): void {
        this.clearPaths();

        this.selfGP = this.node.getComponent(Graphics);
        this.actionId = data.id;
        this.selfGP.lineWidth = data.width;
        this.selfGP.strokeColor = data.strokeColor;
    }

    /**
     * 清空路径
     */
    private clearPaths(): void {
        this.linesPaths = [];
    }

    /**
     * 触摸开始时调用
     * @param pos 
     */
    public startLine(pos: Vec3): void {
        this.selfGP.moveTo(pos.x, pos.y);
        this.linesPaths.push(pos);
    }

    /**
     * 划线
     * @param pos 
     */
    public drawLine(pos: Vec3): void {
        // 上一次划线的位置
        this.selfGP.lineTo(pos.x, pos.y);
        this.selfGP.stroke();
        this.selfGP.fill();
        this.selfGP.moveTo(pos.x, pos.y);
        this.linesPaths.push(pos);
    }

    /**
     * 清空绘制
     */
    public clearline(): void {
        this.selfGP.clear();
    }

    /**
     * actionId 获取动作id
     * @returns 
     */
    public getActionId(): number {
        return this.actionId;
    }

    /**
     * 获取恢复线段数据
     * @returns 
     */
    public getRecoverLineData(): RecoverLineData {
        const rData: RecoverLineData = {
            strokeColor: this.selfGP.strokeColor,
            paths: this.linesPaths,
            siblingIndex: this.node.getSiblingIndex(),
            id: this.actionId,
            width: this.selfGP.lineWidth
        }
         
        return rData;
    }

    /**
     * 恢复线段
     * @param rData 
     */
    public recoverLine(rData: RecoverLineData): void {
        this.actionId = rData.id;
        this.selfGP.strokeColor = rData.strokeColor;
        this.selfGP.lineWidth = rData.width;
        // this.linesPaths = rData.paths;
        this.node.setSiblingIndex(rData.siblingIndex);

        rData.paths.forEach((pos: Vec3, index: number) => {
            if (index === 0) {
                this.startLine(pos);
            } else {
                this.drawLine(pos)
            }
        }) 
    }
}