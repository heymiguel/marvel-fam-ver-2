import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class DateSelector extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onDateSelect = this.onDateSelect.bind(this);
        this.state = {
            startDate: moment(),
            // have to start with a moment!!
            // then grab what you need
            selectedDate: ""
        };
    }

    handleChange(date) {
        // let convertedDate = date.format();
        // console.log(date.format().toString());
        this.setState({
            selectedDate: date.format().toString()
        })
    }

    onDateSelect() {
        this.props.selectDate(this.state.selectedDate);
    }

    render() {
        // console.log(this.state.startDate);
        // console.log(this.state.startDate._d);
        // can use moment.js methods to pull data
        return (
            <div>
                <DatePicker selected={this.state.startDate} onChange={this.handleChange}></DatePicker>
                <button onClick={this.onDateSelect}>click to throw the date</button>
            </div>
        )
    }
}
export default DateSelector;

