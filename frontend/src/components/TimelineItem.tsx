import React from 'react';
import { timeLineItems } from '../data';

const TimelineItem = ( {data}: timeLineItems) => <div className="timeline-item">
<div className="timeline-item-content">
    <span className="tag" style={{ background: "#00FF00" }}>
        {data.category.tag}
    </span>
    <time>{data.date}</time>
    <p>{data.text}</p>
    {data.link && (
        <a
            href= "https://www.muckrock.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
            {data.link.text}
        </a>
    )}
    <span className="circle" />
</div>
</div>

export default TimelineItem;