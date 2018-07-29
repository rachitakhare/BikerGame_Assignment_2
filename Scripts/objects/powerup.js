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
var objects;
(function (objects) {
    var powerup = /** @class */ (function (_super) {
        __extends(powerup, _super);
        /**
         * Creates an instance of bike.
         * @memberof bike
         */
        function powerup() {
            var _this = _super.call(this, "powerup") || this;
            _this.Start();
            return _this;
        }
        // private methods
        powerup.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
            }
        };
        // public methods
        powerup.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = 5;
            this.Reset();
        };
        powerup.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        powerup.prototype.Reset = function () {
            this.y = -this.height;
            this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
        };
        return powerup;
    }(objects.GameObject));
    objects.powerup = powerup;
})(objects || (objects = {}));
//# sourceMappingURL=powerup.js.map