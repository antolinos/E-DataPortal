import React from 'react'
import { Row, Col, Button, Panel } from 'react-bootstrap'
import EventHistoryItem from './eventHistoryItem';
import Moment from 'moment';

/*
* This class manage the complete history of a given event
*/
class EventHistory extends React.Component {
  constructor(props) {
    super(props);
    this.paddingStep = 20;

    this.state = {
      sortedHistory: this.props.event.history,
    }
  }





  //Sort the history
  // TO DO

  agofromNow(date) {
    let updatedOn = Moment(date); //a moment object
    let now = Moment();

    let daydeltaFromNow = now.diff(updatedOn, 'days');
    if (daydeltaFromNow <= 25) {
      return "Updated " + updatedOn.fromNow().toString();
    } else {
      return Moment(date).format("MMM DD, HH:MM").toString();
    }
  }
  render() {
    let olderHistoryItems = this.state.sortedHistory.map(
      (item, index) => {
        let dateMsg = this.agofromNow(item.updatedOn);
        if (index > 0) {
          return (<EventHistoryItem expanded={true} item={item} paddingLeft={index * this.paddingStep} dateMsg={dateMsg}> </EventHistoryItem>)
        }
      }
    )

    return (
      <div className="grayBackground padding-top-10 padding-right-10 padding-left-10 padding-bottom-10">
        <EventHistoryItem
          expanded={true}
          dateMsg={this.agofromNow(this.state.sortedHistory[0].updatedOn)}
          item={this.state.sortedHistory[0]}
          quitHistoryButton={true}
          toggleHistory={this.props.toggleHistory}
        >
        </EventHistoryItem>
        {olderHistoryItems}
      </div >
    )
  }
}

export default EventHistory