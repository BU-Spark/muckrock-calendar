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

    selectTag(task) {
        try {
            var date_initial = ""
            var date_final = new Date(task.date_due).getTime()
            var date_current = new Date().getTime()
            var percentage = 0
            if (task.datetime_submitted == null) {
                date_initial = task.date_followup
            } else {
                date_initial = task.datetime_submitted.substring(0,10)
            }
            date_initial = new Date(date_initial).getTime()
            percentage = (date_current - date_initial)/(date_final - date_initial)

            switch (true) {
                case percentage < 0.5: 
                    return <img src={Blue}/>
                case percentage < 0.75:
                    return <img src={Yellow}/>
                case percentage < 1:
                    return <img src={Red}/>
                case percentage > 1:
                    return <img src={Green}/>
                default:
                    return <img src={Blue}/>
            }
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        return(
            <div>
                {
                    this.state.isToday===null && this.state.tasks=== null && this.state.day === null && this.state.date === null ?
                    null :
                    <div className="day-group">
                    {this.state.isToday ? <p className={"day day-today " + this.state.day}>{this.state.day}</p> : <p className={"day day-other " + this.state.day}>{this.state.day}</p>}
                        <div className="task-group">
                            {this.state.isToday ? <p className="date date-today">{this.state.date}</p> : <p className="date date-other">{this.state.date}</p>}
                            <div className="day-group">
                                {   this.state.tasks.map((task) => {
                                        return (
                                            <div className="task-group" key={task.id}>
                                                <div className="tag">{this.selectTag(task)}</div>
                                                <div className="task">{task.title}</div>
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