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
            isToday: this.props.isToday,
            day: this.props.day,
            date: this.props.date,
            tasks: this.props.tasks
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
            <div>
                {
                    this.state.isToday===null && this.state.tasks=== null && this.state.day === null && this.state.date === null ?
                    null :
                    <div className="day-group">
                    {this.state.isToday ? <p className="day day-today">{this.state.day}</p> : <p className="day day-other">{this.state.day}</p>}
                        <div className="task-group">
                            {this.state.isToday ? <p className="date date-today">{this.state.date}</p> : <p className="date date-other">{this.state.date}</p>}
                            <div className="day-group">
                                {   this.state.tasks.map((task) => {
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
                }
            </div>

            
        )
    }
}

export default DailyTask;