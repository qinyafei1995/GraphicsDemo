
import { _decorator, Component, Node, color, Color } from 'cc';
import { GraphicsCtrl } from './graphicsCtrl';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = NewComponent
 * DateTime = Thu Nov 25 2021 16:30:10 GMT+0800 (中国标准时间)
 * Author = ChinaQin
 * FileBasename = NewComponent.ts
 * FileBasenameNoExtension = NewComponent
 * URL = db://assets/script/NewComponent.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('drowPanel')
export class drowPanel extends Component {
    public static gpCtrl: GraphicsCtrl = null;
    private touchMngNode: Node = null;
    private widthMngNode: Node = null;
    start() {
        drowPanel.gpCtrl = this.node.getChildByName("gpCtrl").getComponent(GraphicsCtrl);

        this.touchMngNode = this.node.getChildByName("menu").getChildByName("colorCtrl").getChildByName("touchMng");
        this.widthMngNode = this.node.getChildByName("menu").getChildByName("widthCtrl").getChildByName("touchMng");
        this.initEvent();

        drowPanel.gpCtrl.setLineWidth(6);
        drowPanel.gpCtrl.setLineColor(new Color(250, 174, 132));
    }

    initEvent(): void {
        this.touchMngNode.children.forEach((nd: Node, i: number) => {
            nd.on(Node.EventType.TOUCH_START, () => {
                nd.parent.parent.getChildByName("select").position = nd.position;
                let colorData = null;
                switch (i) {
                    case 0:
                        colorData = new Color(250, 174, 132);
                        break;

                    case 1:
                        colorData = new Color(245, 255, 0);
                        break;

                    case 2:
                        colorData = new Color(118, 255, 65);
                        break;

                    case 3:
                        colorData = new Color(247, 39, 39);
                        break;
                    default:
                        break;
                }
                drowPanel.gpCtrl.setLineColor(colorData);
            }, this)
        })

        this.widthMngNode.children.forEach((nd: Node, i: number) => {
            nd.on(Node.EventType.TOUCH_START, () => {
                nd.parent.parent.getChildByName("select").position = nd.position;
                let widthNum = 10;
                switch (i) {
                    case 0:
                        widthNum = 6;
                        break;

                    case 1:
                        widthNum = 8;
                        break;

                    case 2:
                        widthNum = 10;
                        break;

                    case 3:
                        widthNum = 12;
                        break;
                    default:
                        break;
                }
                drowPanel.gpCtrl.setLineWidth(widthNum);
            }, this)
        })
    }

    close() {
        // 清空线段
        drowPanel.gpCtrl.removeAllLine();
        // 清空恢复数据
        drowPanel.gpCtrl.claerAllRecoverList();
        this.node.active = false
    }
}

