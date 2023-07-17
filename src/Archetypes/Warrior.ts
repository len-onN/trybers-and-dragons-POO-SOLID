import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  _energyType: EnergyType;
  static createdEntities = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.createdEntities += 1;
  }
  
  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number { return this.createdEntities; }
}