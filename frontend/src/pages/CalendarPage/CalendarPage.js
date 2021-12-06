import React from 'react'
import './CalendarPage.css'
import DayView from '../../components/DayView/DayView'
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
                <div className="header">
                    <div className="title">Your Calendar</div>
                </div>
                { this.state.onDayView ? 
                    <React.Fragment>
                        <div className="buttons">
                            <button className="calendar-button selected" onClick={this.onDayClick}>Day</button>
                            <button className="calendar-button" onClick={this.onMonthClick}>Month</button>
                        </div>
                        <DayView />
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <div className="buttons">
                            <button className="calendar-button" onClick={this.onDayClick}>Day</button>
                            <button className="calendar-button selected" onClick={this.onMonthClick}>Month</button>
                        </div>
                        <MonthView />
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default Calendar;