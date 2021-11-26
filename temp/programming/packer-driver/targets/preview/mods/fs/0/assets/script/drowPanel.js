System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Color, GraphicsCtrl, _dec, _class, _class2, _temp, _crd, ccclass, property, drowPanel;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;
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

      _export("drowPanel", drowPanel = (_dec = ccclass('drowPanel'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(drowPanel, _Component);

        function drowPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "touchMngNode", null);

          _defineProperty(_assertThisInitialized(_this), "widthMngNode", null);

          return _this;
        }

        var _proto = drowPanel.prototype;

        _proto.start = function start() {
          drowPanel.gpCtrl = this.node.getChildByName("gpCtrl").getComponent(_crd && GraphicsCtrl === void 0 ? (_reportPossibleCrUseOfGraphicsCtrl({
            error: Error()
          }), GraphicsCtrl) : GraphicsCtrl);
          this.touchMngNode = this.node.getChildByName("menu").getChildByName("colorCtrl").getChildByName("touchMng");
          this.widthMngNode = this.node.getChildByName("menu").getChildByName("widthCtrl").getChildByName("touchMng");
          this.initEvent();
          drowPanel.gpCtrl.setLineWidth(6);
          drowPanel.gpCtrl.setLineColor(new Color(250, 174, 132));
        };

        _proto.initEvent = function initEvent() {
          var _this2 = this;

          this.touchMngNode.children.forEach(function (nd, i) {
            nd.on(Node.EventType.TOUCH_START, function () {
              nd.parent.parent.getChildByName("select").position = nd.position;
              var colorData = null;

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
            }, _this2);
          });
          this.widthMngNode.children.forEach(function (nd, i) {
            nd.on(Node.EventType.TOUCH_START, function () {
              nd.parent.parent.getChildByName("select").position = nd.position;
              var widthNum = 10;

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
            }, _this2);
          });
        };

        _proto.close = function close() {
          // 清空线段
          drowPanel.gpCtrl.removeAllLine(); // 清空恢复数据

          drowPanel.gpCtrl.claerAllRecoverList();
          this.node.active = false;
        };

        return drowPanel;
      }(Component), _defineProperty(_class2, "gpCtrl", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=drowPanel.js.map