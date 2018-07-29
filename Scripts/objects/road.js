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
    var road = /** @class */ (function (_super) {
        __extends(road, _super);
        /**
         * Creates an instance of road.
         * @memberof road
         */
        function road() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("road")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        road.prototype._checkBounds = function () {
            // check top boundary
            if (this.y >= 0) {
                this.Reset();
            }
        };
        // public methods
        road.prototype.Start = function () {
            this._verticalSpeed = 5; // 5 pixels per frame
            this.Reset();
        };
        road.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        road.prototype.Reset = function () {
            this.y = -960;
        };
        return road;
    }(createjs.Bitmap));
    objects.road = road;
})(objects || (objects = {}));
//# sourceMappingURL=road.js.map