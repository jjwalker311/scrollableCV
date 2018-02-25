import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sky from '../components/sky';
//import Skrollr from 'skrollr';

class BackgroundElements extends Component {

  render() {
    return (
      <div className='backgroundElements'>
        <div className='grass'/>
        <Sky/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundElements)

