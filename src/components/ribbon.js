import React from 'react';
import ribbonLeft from '../images/ribbon-left.png';
import ribbonRight from '../images/ribbon-right.png';

const Ribbon = (props) => (
     <div className='ribbonContainer'>
            <div className='ribbonLeft' style={{backgroundImage: `url(${ribbonLeft})`}}/>
            <div className='ribbonText'>{props.caption}</div>
            <div className='ribbonRight' style={{backgroundImage: `url(${ribbonRight})`}}/>
        </div>
)

export default Ribbon;
