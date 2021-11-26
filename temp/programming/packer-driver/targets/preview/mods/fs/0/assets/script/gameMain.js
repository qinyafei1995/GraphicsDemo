System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, GameMain;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a6489a2fOpKUYN/5vSjWTcp", "gameMain", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
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

      _export("GameMain", GameMain = (_dec = ccclass('GameMain'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameMain, _Component);

        function GameMain() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = GameMain.prototype;

        _proto.openDrowPanel = function openDrowPanel() {
          this.node.getChildByName("drowPanel").active = true;
        };

        return GameMain;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=gameMain.js.map