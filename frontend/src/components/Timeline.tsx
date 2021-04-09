import React from 'react';
import TimelineItem from './TimelineItem';
import { FOIA, timelineData } from '../data';

const Timeline = () => {
    const timelineList = timelineData.map(( _data: FOIA, i: any) =>  
    <div className="timeline-container">
      <TimelineItem data={timelineData[0]} /> 
    </div>
    )
    return (<>{timelineList}</>);
  }
export default Timeline;