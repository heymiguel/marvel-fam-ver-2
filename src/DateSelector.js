import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
// css declaration goes here
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class DateSelector extends Component {
    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.state = {
            startDate: moment(),
            // selectedDate: ""
            // have to start with a moment!!
            // then grab what you need
            selectedDate: {
                start: moment(),
                end: "",
            }
        };
    }

    handleDateChange(date) {
        let convertedDate = this.state.selectedDate;
        let convertedDateStart = date.format("YYYY-MM-DD");
        let convertedDateEnd = date.add(1, 'days').format("YYYY-MM-DD");
        convertedDate.start = convertedDateStart;
        convertedDate.end = convertedDateEnd;
        let rollBack = date.subtract(1, 'days');
        //mutate to display current date
        this.setState({
            selectedDate: convertedDate,
            startDate: date
        });
        this.props.selectDate(this.state.selectedDate);
    }

    render() {
        return (
            <div>
              <DatePicker selected={ this.state.startDate } onChange={ this.handleDateChange } showYearDropdown></DatePicker>
            </div>
        )
    }
}
export default DateSelector;



