import React from 'react';
import TimelineItem from './TimelineItem';
import { timelineData, timelineInterface } from '../data';

const Timeline = () => {
    const timelineList = timelineData.map((timeline: timelineInterface, i: any) =>  <div className="timeline-container">
    <TimelineItem data={timeline} /> </div>)
    return (<>{timelineList}</>);
  }
export default Timeline;