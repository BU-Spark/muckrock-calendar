import React from 'react'
import DailyTask from '../dailytask/DailyTask'

class DayView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            month: '',
            date: 0,
            week: [],
            loading: true,
            tasks: [
                {
                    day: 'Fri',
                    date: '15',
                    detail: 'Submit request X',
                    urgency: 'med'
                },
                {
                    day: 'Fri',
                    date: '15',
                    detail: 'Submit request Y',
                    urgency: 'low'
                },
                {
                    day: 'Fri',
                    date: '15',
                    detail: 'Submit request Z',
                    urgency: 'high'
                },
                {
                    day: 'Sat',
                    date: '16',
                    detail: 'Submit request X',
                    urgency: 'med'
                },
                {
                    day: 'Sat',
                    date: '16',
                    detail: 'Submit request Y',
                    urgency: 'low'
                },
                {
                    day: 'Sat',
                    date: '16',
                    detail: 'Submit request Z',
                    urgency: 'high'
                },
                {
                    day: 'Sun',
                    date: '17',
                    detail: 'None',
                    urgency: 'none'
                }
            ]
        }
        this.setTime = this.setTime.bind(this);
        this.getTasks = this.getTasks.bind(this);
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
        this.setState({month: month, date: date, week: week, loading: false})
    }

    getTasks() {
        return (<DailyTask isToday={true} date={this.state.date} day="Wed" tasks={this.state.tasks.filter(task => task.date === this.state.date)}/>)
    }

    render() {
        const dailytasks = []
        for (let i=0; i<7; i++) {
            dailytasks.push(<DailyTask isToday={i===0} date={parseInt(this.state.date)+i} day={this.state.week[i]} tasks={this.state.tasks.filter(task => parseInt(task.date) === parseInt(this.state.date)+i)}/>)
        }

        return(
            <div>
                { this.state.loading ? <div>Loading</div> : dailytasks}
            </div>
        )
    }
}

export default DayView;