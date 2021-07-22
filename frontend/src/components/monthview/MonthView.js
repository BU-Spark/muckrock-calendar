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
            }]
        }
        this.getRequestInformation = this.getRequestInformation.bind(this);
    }

    async componentDidMount() {
        await this.getRequestInformation()
    }

    getRequestInformation() {
        // axios({
        //     url: `https://www.muckrock.com/api_v1/foia/?user=`,
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json;charset=UTF-8',
        //     }
        // }).then((res) => {
        //     console.log(res)
        // }).catch((err) => {
        //     console.log(err)
        // })
        const results = testData[0].results
        const month = new Date().toISOString().substring(0,7)
        const events = results.filter((event) => event.date_due.substring(0,7) == month)
        var schedules = []
        var index = 0;
        for (const event of events) {
            schedules.push({
                id: index,
                calendarId: '1',
                isVisible: true,
                category: 'allday',
                title: event.title,
                body: "Website: " + event.absolute_url,
                start: event.date_due,
                end: event.date_due,
                isReadOnly: true
            })
            index+=1;
        }
        this.setState({schedules: schedules})
    }

    render() {
        return(
            <div className="calendar-month">
                <TuiCalendar
                    view='month'
                    schedules={this.state.schedules}
                    calendars={this.state.calendar}
                />
            </div>
        )
    }
}

export default MonthView;