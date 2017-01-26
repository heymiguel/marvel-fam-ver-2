import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
// require('react-datepicker/dist/react-datepicker.css');

class DateSelector extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            startDate: moment()
        };
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    render() {
        console.log("hooked")
        return (
            <DatePicker selected={ this.state.startDate } onChange={ this.handleChange }></DatePicker>
        )
    }
}
export default DateSelector;

