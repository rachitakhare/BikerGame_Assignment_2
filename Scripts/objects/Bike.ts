namespace objects {
  export class bike extends objects.GameObject {
    
    /**
     * Creates an instance of bike.
     * @memberof bike
     */
    constructor() {
      super("bike");

      this.Start();
    }

    // private methods
    private _checkBounds():void {
        // check right boundary
        if(this.x > config.Screen.WIDTH - this.halfWidth ) {
            this.x = config.Screen.WIDTH - this.halfWidth;
        }

        // check left boundary
        if(this.x < this.halfWidth) {
            this.x = this.halfWidth;
        }
    }

    // public methods
    public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this.y = 430;
    }

    public Update(): void {
        this.x = managers.Game.Stage.mouseX;
        this._checkBounds();
    }

    public Reset(): void {}
  }
}
