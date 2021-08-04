import React from 'react'
import TuiCalendar from '@toast-ui/react-calendar';
import { ISchedule, ICalendarInfo } from "tui-calendar";
import axios from 'axios';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import {testData} from '../../testData';
import './MonthView.css'

class MonthView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            schedules: [],
            calendar: [{
                id: "1",
                name: "Muckrock Calendar",
                color: "#ffffff",
                bgColor: "#3E80FF",
                borderColor: "#3E80FF",
            }],
            month: "",
            year: ""
        }
        this.calendarRef = React.createRef();
        this.getRequestInformation = this.getRequestInformation.bind(this);
        this.handleClickNextButton = this.handleClickNextButton.bind(this);
        this.handleClickPrevButton = this.handleClickPrevButton.bind(this);
    }

    async componentDidMount() {
        await this.getRequestInformation()
    }

    getRequestInformation() {
        // retrieve information from api, use when access granted from muckrock
        // axios({
        //     url: `https://www.muckrock.com/api_v1/foia/?user=`,
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json;charset=UTF-8',
        //     }
        // }).then((res) => {
        //     this.setState(res[0].results)
        // }).catch((err) => {
        //     console.log(err)
        // })
        const results = testData[0].results
        var schedules = []
        var index = 0;
        for (const event of results) {
            schedules.push({
                id: index,
                calendarId: '1',
                isVisible: true,
                category: 'allday',
                title: event.title,
                body: `Status: ${event.status} | 
                ${event.absolute_url}`,
                start: event.date_due,
                end: event.date_due,
                isReadOnly: true
            })
            index+=1;
        }

        // set month and year
        const today = new Date().toString()
        const month = today.substring(4,7)
        const year = today.substring(11,15)

        this.setState({schedules: schedules, month: month, year: year})
    }

    handleClickNextButton = () => {
        // set new date
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        var newDate = new Date(this.state.year, months.indexOf(this.state.month)+1).toString()
        const month = newDate.substring(4,7)
        const year = newDate.substring(11,15)
        this.setState({month: month, year: year})

        // change calendar month
        const calendarInstance = this.calendarRef.current.getInstance();
        calendarInstance.next()
    }

    handleClickPrevButton = () => {
        // set new date
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        var newDate = new Date(this.state.year, months.indexOf(this.state.month)-1).toString()
        const month = newDate.substring(4,7)
        const year = newDate.substring(11,15)
        this.setState({month: month, year: year})

        // change calendar month
        const calendarInstance = this.calendarRef.current.getInstance();
        calendarInstance.prev()
    }

    render() {
        return(
            <div className="calendar-month">
                <div className="calendar-details">
                    <div className="cal-date">{this.state.month} {this.state.year}</div>
                    <button className="cal-button" onClick={this.handleClickPrevButton}>Prev</button>
                    <button className="cal-button" onClick={this.handleClickNextButton}>Next</button>
                </div>
                <div className="tui-cal">
                    <TuiCalendar
                        view='month'
                        schedules={this.state.schedules}
                        calendars={this.state.calendar}
                        ref={this.calendarRef}
                        height="650px"
                        disableClick={true}
                        useDetailPopup
                    />
                </div>
            </div>
        )
    }
}

export default MonthView;