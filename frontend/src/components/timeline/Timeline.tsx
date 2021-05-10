import React from 'react';
import TimelineItem from './TimelineItem';
import { FOIA, timelineData } from '../../data';

import {getFOIA} from '../../service/foia'
import './Timeline.css'

/**
 * Timeline Class, that build up by TimelineItem
 * @returns 
 */

const Timeline = () => {
    const _foia = getFOIA();
    const timelineList = timelineData.map(( _data: FOIA, i: any) =>  
    <div className="timeline-container">
      <TimelineItem data={timelineData[0]} /> 
    </div>
    )
    return (<>{timelineList}</>);
  }

  
export default Timeline;