System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Graphics, _dec, _class, _temp, _crd, ccclass, property, GraphicsItem;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4fc9aAuudBAMZxU0jTuqGKo", "graphicsItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 线的数据类型,包含以下数据: 
       */

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
      _export("GraphicsItem", GraphicsItem = (_dec = ccclass('GraphicsItem'), _dec(_class = (_temp = class GraphicsItem extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "actionId", -1);

          _defineProperty(this, "selfGP", null);

          _defineProperty(this, "linesPaths", []);
        }

        /**
         * 初始化
         * @param data 
         */
        init(data) {
          this.clearPaths();
          this.selfGP = this.node.getComponent(Graphics);
          this.actionId = data.id;
          this.selfGP.lineWidth = data.width;
          this.selfGP.strokeColor = data.strokeColor;
        }
        /**
         * 清空路径
         */


        clearPaths() {
          this.linesPaths = [];
        }
        /**
         * 触摸开始时调用
         * @param pos 
         */


        startLine(pos) {
          this.selfGP.moveTo(pos.x, pos.y);
          this.linesPaths.push(pos);
        }
        /**
         * 划线
         * @param pos 
         */


        drawLine(pos) {
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


        clearline() {
          this.selfGP.clear();
        }
        /**
         * actionId 获取动作id
         * @returns 
         */


        getActionId() {
          return this.actionId;
        }
        /**
         * 获取恢复线段数据
         * @returns 
         */


        getRecoverLineData() {
          const rData = {
            strokeColor: this.selfGP.strokeColor,
            paths: this.linesPaths,
            siblingIndex: this.node.getSiblingIndex(),
            id: this.actionId,
            width: this.selfGP.lineWidth
          };
          return rData;
        }
        /**
         * 恢复线段
         * @param rData 
         */


        recoverLine(rData) {
          this.actionId = rData.id;
          this.selfGP.strokeColor = rData.strokeColor;
          this.selfGP.lineWidth = rData.width; // this.linesPaths = rData.paths;

          this.node.setSiblingIndex(rData.siblingIndex);
          rData.paths.forEach((pos, index) => {
            if (index === 0) {
              this.startLine(pos);
            } else {
              this.drawLine(pos);
            }
          });
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=graphicsItem.js.map