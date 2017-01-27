import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class DateSelector extends Component {
    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onDateSelect = this.onDateSelect.bind(this);
        this.state = {
            startDate: moment(),
            // selectedDate: ""
            // have to start with a moment!!
            // then grab what you need
            selectedDate: {
                start: "",
                end: "",
            }
        };
    }

    handleDateChange(date) {
        let convertedDateStart = date.format("YYYY-MM-DD");
        let convertedDateEnd = date.add(1, 'days').format("YYYY-MM-DD");
        console.log(convertedDateEnd, convertedDateStart);
        this.setState({
            startDate: date,
            selectedDate: {
                start: convertedDateStart,
                end: convertedDateEnd
            }
        })
    }

    onDateSelect() {
        this.props.selectDate(this.state.selectedDate);
    }

    render() {
        return (
            <div>
              <DatePicker selected={ this.state.startDate } onChange={ this.handleDateChange }></DatePicker>
              <button onClick={ this.onDateSelect }>click to throw the date</button>
            </div>
        )
    }
}
export default DateSelector;



