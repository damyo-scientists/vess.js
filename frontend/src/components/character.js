import React, {Component} from 'react';
import girl_main from '../assets/character/girl_main.png';
import {observer} from 'mobx-react';

import {Body, Sprite} from 'react-game-kit'
import {PropTypes} from "prop-types";

export default @observer

class Character extends Component {
  static propTypes = {
    keys: PropTypes.object,
    onEnterBuilding: PropTypes.func,
    store: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  getWrapperStyles() {
    const {characterPosition} = this.props.store;
    const {x, y} = characterPosition;
    return {
      position: 'absolute',
      transform: `translate(${x}px, ${y}px)`,
      transformOrigin: 'left top'
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 38) {

    }
  }

  update() {
    const {store} = this.props;
    const {body} = this.body;
    body.position.x += 1;
    store.setCharacterPosition(body.position);
  }

  render() {
    return (
      <div style={this.getWrapperStyles()}>
        <Body args={[0, 0, 75, 75]} ref={b => this.body = b}>
        <Sprite src={girl_main} onKeyPress={this.handleKeyDown}/>
        </Body>
      </div>
    )
  }
}