import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class ComicSelector extends Component {
    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onDateSelect = this.onDateSelect.bind(this);
        this.state = {
            startDate: moment(),
            // have to start with a moment!!
            // then grab what you need
            selectedDate: ""
        };
    }

    handleDateChange(date) {
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
        return (
            <div>
              <DatePicker selected={ this.state.startDate } onChange={ this.handleDateChange }></DatePicker>
              <button onClick={ this.onDateSelect }>click to throw the date</button>
            </div>
        )
    }
}
export default ComicSelector;

