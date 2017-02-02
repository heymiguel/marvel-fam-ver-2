import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
// css declaration goes here
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class DateSelector extends Component {
    constructor( props ) {
        super( props );
        this.handleDateChange = this.handleDateChange.bind( this );
        this.onDateSelect = this.onDateSelect.bind( this );
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

    handleDateChange( date ) {
        let convertedDate = this.state.selectedDate;
        let convertedDateStart = date.format( "YYYY-MM-DD" );
        let convertedDateEnd = date.add( 1, 'days' ).format( "YYYY-MM-DD" );
        convertedDate.start = convertedDateStart;
        convertedDate.end = convertedDateEnd;
        this.setState( { selectedDate: convertedDate });
        this.props.selectDate( this.state.selectedDate );
    }

    onDateSelect() {

    }

    render() {
        return (
            <div>
                <DatePicker selected={this.state.startDate} onChange={this.handleDateChange}></DatePicker>
            </div>
        )
    }
}
export default DateSelector;



