import React from 'react';
import { FOIAItems } from '../data';

const TimelineItem = ( {data}: FOIAItems) => <div className="timeline-item">
<div className="timeline-item-content">
    <span className="tag" style={{ background: "#00FF00" }}>
        {data.status}
    </span>
    <time>{data.datetime_submitted}</time>
    <p>{data.title}</p>
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