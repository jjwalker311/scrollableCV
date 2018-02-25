//eslint-disable-next-line 
import React from 'react';
// import { connect } from 'react-redux';
import Scene from '../container/Scene';
//import {constantValues} from '../constants';
import text from '../constants/text';
import Ribbon from './ribbon';
import MeImage from '../images/me/me.jpg'
//import Skrollr from 'skrollr';
export default  class WelcomeScene extends Scene {
    render (){
        const lang = text['welcomeScene'],
            introAttr = {
             'data-0':"left:300px; bottom: calc(0.9*100vh);",
             'data-1000':"left:0px",
             'data-2000': "left:-300px"
            };


        return (
            <div className='welcomeScene'>
                <div className='skrollrFixed' {...introAttr}>
                    <Ribbon caption={lang.ribbon}/>
                    <div className='meImage' style={{backgroundImage: `url(${MeImage})`}}/>
                </div>
            </div>
        )
    }
}

