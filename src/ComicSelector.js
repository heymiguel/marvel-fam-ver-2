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
export default ComicSelector;


// refresher for the flow of your old application
// take a date
// proper format being: 2013-01-01,2013-01-02 ()
// API CALL  return comics released on that date
// if there is nothing on that day then expand the search to include the month. That normally does it. 
// go through those comics and find a list of characters
// make another call to find those characters
// API CALL to get the images related to those characters
// output the character names and their corresponding images to the page. 
