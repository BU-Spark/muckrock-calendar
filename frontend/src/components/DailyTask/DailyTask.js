import React from 'react'
import './DailyTask.css'
import Blue from '../../images/blue.png';
import Grey from '../../images/grey.png';
import Green from '../../images/green.png';
import Red from '../../images/red.png';
import Yellow from '../../images/yellow.png';

class DailyTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            day: "Fri",
            date: "15",
            tasks: [
                {
                    detail: 'Submit request X',
                    urgency: 'med'
                },
                {
                    detail: 'Submit request Y',
                    urgency: 'low'
                },
                {
                    detail: 'Submit request Z',
                    urgency: 'high'
                },                
            ]
        }

        this.selectTag = this.selectTag.bind(this);
    }

    selectTag(urgency) {
        switch(urgency) {
            case 'low':
                return <img src={Blue}/>
            case 'med':
                return <img src={Yellow}/>
            case 'high':
                return <img src={Red}/>
            case 'done':
                return <img src={Green}/>
            default:
                return <img src={Grey}/>
        }    
    }

    render() {
        return(
            <div className="day-group">
                <p className="day">{this.state.day}</p>
                <div className="task-group">
                    <div className="date">{this.state.date}</div>
                    <div className="day-group">
                        {
                            this.state.tasks.map((task) => {
                                return (
                                    <div className="task-group">
                                        <div className="tag">{this.selectTag(task.urgency)}</div>
                                        <div className="task">{task.detail}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default DailyTask;