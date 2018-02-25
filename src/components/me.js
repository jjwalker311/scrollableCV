import React from 'react'
import {spriteActions, constantValues} from '../constants'
import meSprite from '../images/me/me.png';
import classNames from 'classnames';

const _getStyle = (meObj = {}) => {

  const delayTime = (constantValues.moveMS/1000).toFixed(2);

  return {
    backgroundImage: `url(${meSprite})`,
    'backgroundPositionY' : spriteActions[meObj.direction][meObj.motion].y,
    'backgroundPositionX' : spriteActions[meObj.direction][meObj.motion].x,
    'bottom' : meObj.bottom,
    'transition' : `left ${delayTime}s, bottom  ${delayTime}s`,
    'WebkitTransition' : `left ${delayTime}s, bottom  ${delayTime}s`,
    'transitionTimingFunction' : 'linear'
  }
},

_getClasses = (meObj = {}) => {   
  return classNames({
    me : true,
    jump : !!meObj.jump,
    banana : !meObj.jump
  });   
};  

const Me = ({me}) => (
  <div style={_getStyle(me)} className={_getClasses(me)} alt="me"/>
)

export default Me
