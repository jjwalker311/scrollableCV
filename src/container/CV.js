import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Me from '../components/me';
import * as userActions from '../actions';
import {constantValues} from '../constants';
import BackgroundElements from './BackgroundElements';
import WelcomeScene from '../components/WelcomeScene';
import Skrollr from 'skrollr';

  /**
   * Returns MS of now
   */
  const _getNowMS = function(){
    return new Date().getTime();
  }

class CV extends Component {

  componentWillMount(){
    window.addEventListener("keydown", this._keyBoardAction.bind(this), false);
    window.addEventListener("scroll", this._keyBoardAction.bind(this), false);

    //Old date, so that next action will happen on first click
    this._lastAction = new Date('01/01/1900').getTime();

    //Variable to ignore the "scrollListener" following a button press
    //We only want to action on scroll following a mouse/keypad scroll
    this._justTriggerByButton = _getNowMS();

    //Var to calculate whether we're scrolling up or down
    this._lastScrollTop = 0
  } 

  componentWillUnmount(){
    window.removeEventListener("keydown", this._keyBoardAction.bind(this), false);
    window.removeEventListener("scroll", this._keyBoardAction.bind(this), false);
  }

  componentDidMount(){
    Skrollr.init();
  }

  triggerMeUpdate(e){
     //only care about arrow key press
     this.props.onKeyAction.arrowPress(e);
     
    //Set record of last action
    this._lastAction = _getNowMS();
  }

  /**
   * Function call when button is pressed when focused on the CV
   * We only care about the arrow buttons
   * @param {*} e 
   */
  _keyBoardAction(e){

    
    /**
     * Function to return time since the last scrolling button press
     * This is to further debase the store update after the scroll "bubbling" after up/down press
     */
    const _timeToLastButtonPress = () =>{
      return _getNowMS() - this._justTriggerByButton || 0;
    },
    
    /**
     * Function to determine whether we have scrolled up or down
     * Returns the appropriate event
     */
    calculateScrollUpOrDown = () => {
      //Getting the current scroll top
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      //Defaulting to scrolling up
      let upScroll = true;  
      //Have we gone up or down?
      if (currentScrollTop > this._lastScrollTop){
          // on downscroll
          upScroll = false;
      }    
      
      //Updating our cached current top
      this._lastScrollTop = currentScrollTop;

      //Returns appropriate action
      return `Arrow${upScroll ? 'Up' : 'Down'}`;
    }

    //Don't care about debouncing space functions 
    if (e.code === 'Space'){
      //On Space we want the character to Jump, not scroll the screen
      e.preventDefault();

      setTimeout(() => {
        this.triggerMeUpdate({code : 'InitialiseJump' });
      }, 1501);

      return  this.triggerMeUpdate({code : e.code});
    }


    if ((_getNowMS() - constantValues.actionMinimumTime) > this._lastAction){

      if (e.type === 'keydown' || e.type === 'keyup'){
        //Scroll has just been triggered by button, need to ignore the next scroll event that's triggered (next if statement)
        this._justTriggerByButton = new Date().getTime();
      }

      //more than minimum time has passed since the last action, go ahead
      if (e.type === 'keydown' || e.type === 'keyup' ||  ((e.type === 'scroll') && _timeToLastButtonPress() > 300)){
        
        this.triggerMeUpdate({code : e.code || calculateScrollUpOrDown()});
      } 
    }
    //else, user has pressed the button too quickly, ignore this action
  }

  render() {

    // const j1 = 'left:1000px; bottom: 0;';
    // const j2 = 'left:800px';
    // const j3 = 'left:600px';

    // const opts1 = {
    //   'data-0' : "left:0px;",
    //   'data-1000': "left:-500px"
    // }

    return (
      <div>
        <BackgroundElements/>
        <Me me={this.props.me}/>        
        <WelcomeScene/>

       
        {/* <div className='blueBackground'> */}
          {/* <div className = "slide1 s" {...opts1}/>
          <div className = "slide2 s" {...opts2}/>
          <div className = "slide3 s" data-0="left:1000px;"data-1000="left:500px"data-2000="left:0px"/>

          <div className = "slide3 s" data-0={j1} data-1000={j2} data-2000={j3}/> */}
        {/* </div> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    me: state.me
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onKeyAction: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CV)

