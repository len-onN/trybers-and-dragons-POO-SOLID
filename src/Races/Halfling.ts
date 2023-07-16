// 60
import Race from './Race';

export default class Halfling extends Race {    
  _maxLifePoints: number;
  static entitiesCreated = 0;
  constructor(name: string, dex: number) {
    super(name, dex);
    this._maxLifePoints = 60;
    Halfling.entitiesCreated += 1;    
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.entitiesCreated;
  }
}