import React from 'react'

class MonthView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date().toISOString()
        }
    }

    render() {
        console.log(this.state.date)
        return(
            <div>
                he
            </div>
        )
    }
}

export default MonthView;