module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _bike:objects.bike;
        private _road:objects.road;
        private _powerup:objects.powerup;
        private _clouds:objects.cloud[];
        private _cloudNum:number;
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildclouds():void {
            for (let count = 0; count < this._cloudNum; count++) {
                this._clouds.push(new objects.cloud());
                //this._clouds[count] = new objects.cloud();
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

            // creates an empty array of type cloud
            this._clouds = new Array<objects.cloud>();
            this._cloudNum = 3;

            this._buildclouds();
           
            this.Main();
        }

        public Update():void {
            this._bike.Update();
            this._road.Update();
            this._powerup.Update();

            managers.Collision.check(this._bike, this._powerup);

            this._clouds.forEach(cloud => {
                cloud.Update();
                managers.Collision.check(this._bike, cloud);
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

            // adding the cloud to the scene
            for (const cloud of this._clouds) {
                this.addChild(cloud);
            }
        }
    }
}