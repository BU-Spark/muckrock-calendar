import React from 'react';
import { FOIAItems } from '../../data';

/**
 * This is a timeline item class, that builds the entire timeline
 * @param: a single foia request
 * @returns 
 * 
 * TODO: 1. Change the tag color based on the status of each case
 *       2. Items need in each timelineItem: title? status? date submitted? etc
 */

const TimelineItem = ( {data}: FOIAItems) => 
<div className="timeline-item">
<div className="timeline-item-content">
    <span className="tag" style={{ background: "#00FF00" }}>
        {data.status}
    </span>
    {/* <time>{data.datetime_submitted}</time> */}
    <p> Case Title: {data.title}</p>
    {data.absolute_url && (
        <a
            href= {data.absolute_url}
            target="_blank"
            rel="noopener noreferrer"
        >
            Link
        </a>
    )}
    <span className="circle" />
</div>
</div>

export default TimelineItem;