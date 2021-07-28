import React from 'react'
import DailyTask from '../dailytask/DailyTask'
import './DayView.css'
import {testData} from '../../testData';

class DayView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            differentMonths: false,
            // currentDate: '',
            tasks: testData,
            currentMonth: '',
            nextMonth: '',
            group_one: [],
            group_two: [] // not referenced when differentMonths is false
        }
    }

    async componentDidMount() {
        // setup weekly structure
        var week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        var currentDate = new Date()
        const today = currentDate.toISOString().substring(0,10)
        const day = String(currentDate).substring(0,3)
        week = week.slice(week.indexOf(day), 7).concat(week.slice(0, week.indexOf(day)))

        // retrieve dates for entire next week
        var dates = []
        var currentMonth = currentDate.getMonth()+1
        for (let i = 0; i < 7; i++) {
            dates.push(currentDate.toISOString().substring(0,10))
            currentDate.setDate(currentDate.getDate() + 1);
        }

        // set relevant months
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const month_one = months[currentMonth]
        const month_two = months[currentMonth+1]


        // filter tasks by dates and create DailyTask components
        var tasks = this.state.tasks[0].results
        var group_one = []
        var group_two = []
        var current = new Date()
        for (let i=0; i<dates.length; i++) {
            const compareDate = current.toISOString().substring(8,10)
            if (dates[i].substring(5,7) == today.substring(5,7)) {
                group_one.push(<DailyTask key={i} isToday={today==dates[i]} date={parseInt(dates[i].substring(8,10))} day={week[i]} tasks={tasks.filter(task => parseInt(task.date_due.substring(8,10)) === parseInt(compareDate))} />)
            } else {
                group_two.push(<DailyTask key={i} isToday={today==dates[i]} date={parseInt(dates[i].substring(8,10))} day={week[i]} tasks={tasks.filter(task => parseInt(task.date_due.substring(8,10)) === parseInt(compareDate))} />)
            }
            current.setDate(current.getDate() + 1)
        }

        if (group_two.length > 0) {
            this.setState({differentMonths: true})
        }

        this.setState({loading: false, group_one: group_one, group_two: group_two, currentMonth: month_one, nextMonth: month_two})
    }

    render() {
        return(
            <React.Fragment>
                {this.state.loading ? 
                    <div>
                        Loading
                    </div>
                    :
                    this.state.differentMonths ? 
                    <div>
                        <div className="month-title">{this.state.currentMonth}</div>
                        <div className="daily-group">{this.state.group_one}</div>
                        <div className="month-title">{this.state.nextMonth}</div>
                        <div className="daily-group">{this.state.group_two}</div>
                    </div>
                    :
                    <div>
                        <div className="month-title">{this.state.nextMonth}</div>
                        <div className="daily-group">{this.state.group_one}</div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default DayView;