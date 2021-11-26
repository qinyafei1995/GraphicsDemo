System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, UITransform, v3, color, Prefab, instantiate, GraphicsItem, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GraphicsCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGraphicsItem(extras) {
    _reporterNs.report("GraphicsItem", "./graphicsItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLineData(extras) {
    _reporterNs.report("LineData", "./graphicsItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecoverLineData(extras) {
    _reporterNs.report("RecoverLineData", "./graphicsItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      color = _cc.color;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      GraphicsItem = _unresolved_2.GraphicsItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54ffdJM/xhNgJSbxQrL9gs4", "graphicsCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("GraphicsCtrl", GraphicsCtrl = (_dec = ccclass('GraphicsCtrl'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class GraphicsCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "touchNode", _descriptor, this);

          _initializerDefineProperty(this, "linePfb", _descriptor2, this);

          _initializerDefineProperty(this, "lineMng", _descriptor3, this);

          _defineProperty(this, "actionID", 0);

          _defineProperty(this, "actionIDList", []);

          _defineProperty(this, "curActionID", null);

          _defineProperty(this, "curColor", color(255, 255, 0));

          _defineProperty(this, "curWidth", 6);

          _defineProperty(this, "curGpItem", null);

          _defineProperty(this, "allRecoverLineData", []);

          _defineProperty(this, "selfTransform", null);
        }

        start() {
          this.init();
          this.initEvent();
        }

        init() {
          this.selfTransform = this.node.getComponent(UITransform);
        }

        initEvent() {
          this.touchNode.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.touchNode.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
        } //#region 触摸逻辑


        touchStart(event) {
          const uiPos = event.getUILocation();
          const locPos = this.selfTransform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y));
          this.addActionIdToList();
          this.addLine();
          this.curGpItem.startLine(locPos);
        }

        touchMove(event) {
          const uiPos = event.getUILocation();
          const locPos = this.selfTransform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y));
          this.curGpItem.drawLine(locPos);
        } //#endregion
        //#region 


        addActionIdToList() {
          this.curActionID = new Date().getTime();
          this.actionIDList.push(this.curActionID);
        } //#endregion

        /**
         * 添加线段
         */


        addLine() {
          const data = {
            strokeColor: this.curColor,
            width: this.curWidth,
            id: this.curActionID
          };
          const nd = instantiate(this.linePfb);
          this.lineMng.addChild(nd);
          this.curGpItem = nd.getComponent(_crd && GraphicsItem === void 0 ? (_reportPossibleCrUseOfGraphicsItem({
            error: Error()
          }), GraphicsItem) : GraphicsItem);
          this.curGpItem.init(data);
        }
        /**
         * 设置线条宽度 
         * @param num 
         */


        setLineWidth(num) {
          this.curWidth = num;
        }
        /**
         * 设置线条颜色
         * @param clr 颜色
         */


        setLineColor(clr) {
          this.curColor = clr;
        }
        /**
         * 清除上一条线
         */


        removeOneLine() {
          const lastID = this.actionIDList.pop();
          this.lineMng.children.forEach(nd => {
            const itemCom = nd.getComponent(_crd && GraphicsItem === void 0 ? (_reportPossibleCrUseOfGraphicsItem({
              error: Error()
            }), GraphicsItem) : GraphicsItem);
            console.log("last id", lastID, "get action id", itemCom.getActionId());

            if (itemCom.getActionId() === lastID) {
              this.allRecoverLineData.push(itemCom.getRecoverLineData());
              itemCom.clearline();
              nd.destroy();
            }
          });
        }
        /**
         * 清除所有线段, 不可进行数据恢复
         */


        removeAllLine() {
          this.actionIDList = [];
          this.lineMng.children.forEach(nd => {
            const itemCom = nd.getComponent(_crd && GraphicsItem === void 0 ? (_reportPossibleCrUseOfGraphicsItem({
              error: Error()
            }), GraphicsItem) : GraphicsItem);
            this.allRecoverLineData.unshift(itemCom.getRecoverLineData());
            itemCom.clearline();
            nd.destroy();
          });
        }
        /**
         * 恢复一条线段
         */


        recoverOneLine() {
          if (this.allRecoverLineData.length >= 1) {
            const rData = this.allRecoverLineData.pop();
            this.actionIDList.push(rData.id);
            this.addLine();
            this.curGpItem.recoverLine(rData);
          } else {
            console.log("没有恢复的数据了");
          }
        }
        /**
         * 恢复所有线段
         */


        recoverAllLine() {
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


        claerAllRecoverList() {
          this.allRecoverLineData = [];
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "touchNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "linePfb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lineMng", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=graphicsCtrl.js.map