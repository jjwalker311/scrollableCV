import React from 'react';
import classNames from 'classnames';
import singleCloud from '../images/background/singleCloud.png';

const _isItDaytimeNow = ()=> {
  const nowHours = new Date().getHours();
  if (nowHours>6 && nowHours<18){
    //It's between 6am and 6pm, it's daytime
    return true
  } else {
    //It's night time
    return false
  }
},

_initialiseClouds = ()=>{
  let _arrayOfClouds = [];

  if (_isItDaytimeNow()){
    _arrayOfClouds.push(<div className="singleCloud startingPosition0"   style={{backgroundImage: `url(${singleCloud})`}} key='1000'/> );
    _arrayOfClouds.push(<div className="singleCloud startingPosition1"   style={{backgroundImage: `url(${singleCloud})`}} key='1001'/>);
    _arrayOfClouds.push(<div className="singleCloud startingPosition2"   style={{backgroundImage: `url(${singleCloud})`}} key='1002'/>);
  } 

  return _arrayOfClouds;
};

const Sky = () => (
  <div className={classNames({
    sky : true,
    dayTime : !!_isItDaytimeNow(),
    nightTime : !_isItDaytimeNow(),
  })}>
  
    {/* To ONLY be shown at night   */}
    <div className="stars"/>
    <div className="twinkling"/>
    <div className="clouds"/>

    {/* To ONLY be shown during the day */}
    <div className="blueSky"/>
    {_initialiseClouds()}
  </div>
)

export default Sky;

