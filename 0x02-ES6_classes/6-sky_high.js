import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number') throw new Error('sqft must be a number');
    else if (typeof floors !== 'number') throw new Error('floors must be a number');

    super(sqft);
    this._floors = floors;
  }

  get floors() { return this._floors; }

  evacuationWarningMessage() {
    return `Evacuate slowly ${this._floors} floors`;
  }
}
