System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Color, GraphicsCtrl, _dec, _class, _class2, _temp, _crd, ccclass, property, drowPanel;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGraphicsCtrl(extras) {
    _reporterNs.report("GraphicsCtrl", "./graphicsCtrl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      GraphicsCtrl = _unresolved_2.GraphicsCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "45fb3PRlLFCIpQfHx4F6ls+", "drowPanel", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("drowPanel", drowPanel = (_dec = ccclass('drowPanel'), _dec(_class = (_temp = _class2 = class drowPanel extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "touchMngNode", null);

          _defineProperty(this, "widthMngNode", null);
        }

        start() {
          drowPanel.gpCtrl = this.node.getChildByName("gpCtrl").getComponent(_crd && GraphicsCtrl === void 0 ? (_reportPossibleCrUseOfGraphicsCtrl({
            error: Error()
          }), GraphicsCtrl) : GraphicsCtrl);
          this.touchMngNode = this.node.getChildByName("menu").getChildByName("colorCtrl").getChildByName("touchMng");
          this.widthMngNode = this.node.getChildByName("menu").getChildByName("widthCtrl").getChildByName("touchMng");
          this.initEvent();
          drowPanel.gpCtrl.setLineWidth(6);
          drowPanel.gpCtrl.setLineColor(new Color(250, 174, 132));
        }

        initEvent() {
          this.touchMngNode.children.forEach((nd, i) => {
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
            }, this);
          });
          this.widthMngNode.children.forEach((nd, i) => {
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
            }, this);
          });
        }

        close() {
          // 清空线段
          drowPanel.gpCtrl.removeAllLine(); // 清空恢复数据

          drowPanel.gpCtrl.claerAllRecoverList();
          this.node.active = false;
        }

      }, _defineProperty(_class2, "gpCtrl", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=drowPanel.js.map