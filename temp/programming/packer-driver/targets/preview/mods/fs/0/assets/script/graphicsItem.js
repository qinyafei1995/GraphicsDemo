System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Graphics, _dec, _class, _temp, _crd, ccclass, property, GraphicsItem;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;
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
      _export("GraphicsItem", GraphicsItem = (_dec = ccclass('GraphicsItem'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GraphicsItem, _Component);

        function GraphicsItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "actionId", -1);

          _defineProperty(_assertThisInitialized(_this), "selfGP", null);

          _defineProperty(_assertThisInitialized(_this), "linesPaths", []);

          return _this;
        }

        var _proto = GraphicsItem.prototype;

        /**
         * 初始化
         * @param data 
         */
        _proto.init = function init(data) {
          this.clearPaths();
          this.selfGP = this.node.getComponent(Graphics);
          this.actionId = data.id;
          this.selfGP.lineWidth = data.width;
          this.selfGP.strokeColor = data.strokeColor;
        }
        /**
         * 清空路径
         */
        ;

        _proto.clearPaths = function clearPaths() {
          this.linesPaths = [];
        }
        /**
         * 触摸开始时调用
         * @param pos 
         */
        ;

        _proto.startLine = function startLine(pos) {
          this.selfGP.moveTo(pos.x, pos.y);
          this.linesPaths.push(pos);
        }
        /**
         * 划线
         * @param pos 
         */
        ;

        _proto.drawLine = function drawLine(pos) {
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
        ;

        _proto.clearline = function clearline() {
          this.selfGP.clear();
        }
        /**
         * actionId 获取动作id
         * @returns 
         */
        ;

        _proto.getActionId = function getActionId() {
          return this.actionId;
        }
        /**
         * 获取恢复线段数据
         * @returns 
         */
        ;

        _proto.getRecoverLineData = function getRecoverLineData() {
          var rData = {
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
        ;

        _proto.recoverLine = function recoverLine(rData) {
          var _this2 = this;

          this.actionId = rData.id;
          this.selfGP.strokeColor = rData.strokeColor;
          this.selfGP.lineWidth = rData.width; // this.linesPaths = rData.paths;

          this.node.setSiblingIndex(rData.siblingIndex);
          rData.paths.forEach(function (pos, index) {
            if (index === 0) {
              _this2.startLine(pos);
            } else {
              _this2.drawLine(pos);
            }
          });
        };

        return GraphicsItem;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=graphicsItem.js.map