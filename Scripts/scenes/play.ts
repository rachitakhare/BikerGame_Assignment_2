module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _bike:objects.bike;
        private _road:objects.road;
        private _powerup:objects.powerup;
        private _cactuss:objects.cactus[];
        private _cactusNum:number;
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildcactuss():void {
            for (let count = 0; count < this._cactusNum; count++) {
                this._cactuss.push(new objects.cactus());
                //this._cactuss[count] = new objects.cactus();
            }
        }

        // public methods
        public Start():void {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;


            this._bike = new objects.bike();
            this._road = new objects.road();
            this._powerup = new objects.powerup();

            // creates an empty array of type cactus
            this._cactuss = new Array<objects.cactus>();
            this._cactusNum = 3;

            this._buildcactuss();
           
            this.Main();
        }

        public Update():void {
            this._bike.Update();
            this._road.Update();
            this._powerup.Update();

            managers.Collision.check(this._bike, this._powerup);

            this._cactuss.forEach(cactus => {
                cactus.Update();
                managers.Collision.check(this._bike, cactus);
            });
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the road to the scene
            this.addChild(this._road);

            // adding the powerup to the scene
            this.addChild(this._powerup);

            // adding the bike to the scene
            this.addChild(this._bike);

            // adding the cactus to the scene
            for (const cactus of this._cactuss) {
                this.addChild(cactus);
            }
        }
    }
}