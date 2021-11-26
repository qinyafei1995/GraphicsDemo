
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GameMain
 * DateTime = Thu Nov 25 2021 15:44:18 GMT+0800 (中国标准时间)
 * Author = ChinaQin
 * FileBasename = gameMain.ts
 * FileBasenameNoExtension = gameMain
 * URL = db://assets/script/gameMain.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 */
 
@ccclass('GameMain')
export class GameMain extends Component {

    openDrowPanel(): void {
        this.node.getChildByName("drowPanel").active = true;
    }
}
