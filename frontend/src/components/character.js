import React, {Component} from 'react';
import girl_main from '../assets/character/girl_main.png';
import {observer} from 'mobx-react';
import Matter from "matter-js";

import {Sprite} from 'react-game-kit'
import {PropTypes} from "prop-types";

export default @observer

class Character extends Component {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    onUpdate: PropTypes.func
  };

  static defaultProps = {
    x: 0,
    y: 0
  };


  constructor(props) {
    super(props);
    this.state = {
      x: props.x,
      y: props.y
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if (e.keyCode === 38) {

    }
  }

  update() {
    const {onUpdate} = this.props;

    if (onUpdate && typeof onUpdate === "function") {
      const onUpdateResult = onUpdate(this.state);

      if (onUpdateResult) {
        this.setState((prevState) => {
          return {...prevState, ...onUpdateResult};
        });
      }
    }
    if (this.body.body) {
      Matter.Body.setVelocity(this.body.body, {x: this.state.x, y: this.state.y});
    }
  }

  getImageStyles() {
    const scaledWidth = Math.round(this.props.width * this.context.scale);

    return {
      width: scaledWidth,
      imageRendering: 'pixelated'
    };
  }

  render() {
    return (
      <div className="character">

        <img src={girl_main} style={{
          position: "absolute",
          left: this.state.x,
          top: this.state.y
        }}/>
      </div>
    )
  }
}