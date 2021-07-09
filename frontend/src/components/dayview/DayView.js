import React from 'react'
import DailyTask from '../dailytask/DailyTask'

class DayView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            month: '',
            date: '',
            week: [],
            tasks: []
        }
        this.setTime = this.setTime.bind(this);
    }

    componentDidMount() {
        this.setTime()
    }

    setTime() {
        var week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        const today = String(new Date())
        // Setting date information
        const day = today.substring(0,3)
        const month = today.substring(4,7)
        const date = today.substring(8,10)
        // Setting up week structure
        week = week.slice(week.indexOf(day), 7).concat(week.slice(0, week.indexOf(day)))
        this.setState({month: month, date: date, week: week})
    }

    render() {
        return(
            <div>
                {}
                <DailyTask isToday={true} day="Fri" date="15" tasks={[
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
                }                
                ]}/>
                <DailyTask isToday={false} day="Sat" date="16" tasks={[
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
                }                
                ]}/>
                <DailyTask isToday={false} day="Sun" date="17" tasks={[
                    {
                        detail: 'None',
                        urgency: 'none'
                    }
                ]}/>
            </div>
        )
    }
}

export default DayView;