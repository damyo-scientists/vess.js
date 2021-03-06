import {observable} from 'mobx';

class GameStore {
  @observable characterPosition = {x: 0, y: 0};

  setCharacterPosition(position) {
    this.characterPosition = position;
  }
}

export default new GameStore();