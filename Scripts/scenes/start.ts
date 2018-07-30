module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _background : objects.road;
        private _bike : objects.bike;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._welcomeLabel = new objects.Label("Begin Race", "60px", "Consolas", "#000000", 320, 240, true);
            this._startButton = new objects.Button("StartButton", 320, 360, true);
            this._background = new objects.road;
            this._bike = new objects.bike;

            this.Main();
        }

        public Update():void {

        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - START SCENE`);
            this.addChild(this._background);
            this.addChild(this._bike);
            this.addChild(this._welcomeLabel);           
            this.addChild(this._startButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}