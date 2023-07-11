export default abstract class Races {
  // readonly _name: string;
  // readonly _dexterity: number;

  constructor(private _name: string, private _dexterity: number) {
  }

  get name() : string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
  
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract maxLifePoints(): number;
}
