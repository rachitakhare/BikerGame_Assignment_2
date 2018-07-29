var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play.prototype._buildcactuss = function () {
            for (var count = 0; count < this._cactusNum; count++) {
                this._cactuss.push(new objects.cactus());
                //this._cactuss[count] = new objects.cactus();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._bike = new objects.bike();
            this._road = new objects.road();
            this._powerup = new objects.powerup();
            // creates an empty array of type cactus
            this._cactuss = new Array();
            this._cactusNum = 3;
            this._buildcactuss();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._bike.Update();
            this._road.Update();
            this._powerup.Update();
            managers.Collision.check(this._bike, this._powerup);
            this._cactuss.forEach(function (cactus) {
                cactus.Update();
                managers.Collision.check(_this._bike, cactus);
            });
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the road to the scene
            this.addChild(this._road);
            // adding the powerup to the scene
            this.addChild(this._powerup);
            // adding the bike to the scene
            this.addChild(this._bike);
            // adding the cactus to the scene
            for (var _i = 0, _a = this._cactuss; _i < _a.length; _i++) {
                var cactus = _a[_i];
                this.addChild(cactus);
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map