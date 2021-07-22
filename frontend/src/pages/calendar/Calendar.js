import React from 'react'
import './calendar.css'
import DayView from '../../components/dayview/DayView'
import MonthView from '../../components/monthview/MonthView'

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            onDayView: true,
            month: '',
            year: ''
        }
        this.onDayClick = this.onDayClick.bind(this);
        this.onMonthClick = this.onMonthClick.bind(this);
    }

    componentDidMount(){
        var currentDay = new Date().toString()
        const month = currentDay.substring(4,7)
        const year = currentDay.substring(11,15)
        this.setState({month: month, year: year})
    }

    onDayClick() {
        this.setState({onDayView: true})
    }

    onMonthClick(){
        this.setState({onDayView: false})
    }

    render() {
        return(
            <div>
                {/* <div className="header">
                    <div className="title">Your Calendar</div>
                    <div className="current-month">{this.state.month} {this.state.year}</div>
                </div>
                <div className="button">
                    <button className="calendar-view-select" onClick={this.onDayClick}>Day</button>
                    <button className="calendar-view-select" onClick={this.onMonthClick}>Month</button>
                </div>
                { this.state.onDayView ? 
                  <DayView />:
                  <MonthView />
                } */}
                <MonthView />

            </div>
        )
    }
}

export default Calendar;