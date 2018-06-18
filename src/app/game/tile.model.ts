export class Tile {
  private _visible: boolean;
  private _isMine: boolean;
  private _mineCounter: number;

  constructor(isMine: boolean) {
    this._isMine = isMine;
    this._mineCounter = 0;
    this._visible = false;
  }

  get mineCounter(): number {
    return this._mineCounter;
  }

  set mineCounter(value: number) {
    this._mineCounter = value;
  }

  get isMine(): boolean {
    return this._isMine;
  }

  set isMine(value: boolean) {
    this._isMine = value;
  }

  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
  }
}
