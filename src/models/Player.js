export default class Player {
  constructor(name = "player"){
    this._name = name;
    this._winCount = 0;
    this._loseCount = 0;
    this._drawCount = 0;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get winCount(){
    return this._winCount;
  }
  get loseCount(){
    return this._loseCount;
  }
  get drawCount(){
    return this._drawCount;
  }
  win(){
    this._winCount++;
  }
  lose(){
    this._loseCount++
  }
  draw(){
    this._drawCount++;
  }
  getStatistic(){
    return `${this._winCount} : ${this._drawCount} : ${this._loseCount}`
  }
}