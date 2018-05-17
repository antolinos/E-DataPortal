import React from 'react';
import Moment from 'react-moment';
import EventHistoryItem from './eventHistoryItem';
import EventHistory from './eventHistory';

import { Table } from 'react-bootstrap';


class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHistory: false,
    }
    this.toggleHistory = this.toggleHistory.bind(this);
  }

  toggleHistory() {
    this.setState({ showHistory: !this.state.showHistory });
  }

  render() {
    let toRender = () => {
      let createdAt = <Moment format="YYYY/MM/DD HH:MM" date={this.props.event.createdAt} />;
      let lastTimestamp = <Moment format="YYYY/MM/DD HH:MM" date={this.props.event.lastTimestamp} />;
      let typeImg = (type) => {
        if (type === 'Annotation') {
          return (<div className='glyphicon glyphicon-comment padding-top-10' style={{ fontSize: '40px' }}>  </div>)
        } else if (type === 'Command') {
          return (<div className=' glyphicon glyphicon-expand padding-top-10' style={{ fontSize: '40px' }}>  </div>)
        }
      }

      if (this.state.showHistory === false) {
        //retrieve the last event in the event history    
        let lastUpdatedItem = this.props.event.history.find(
          (item) => {
            if (item.updatedOn === this.props.event.lastTimestamp) {
              return item;
            }
          }
        );

        return (
          <div>
            <Table responsive style={{ marginBottom: '0' }}>
              <tbody>
                <tr>
                  <td style={{ 'border-style': 'none', 'width': '60px' }}>
                    {typeImg(this.props.event.type)}
                  </td>
                  <td style={{ 'border-style': 'none' }}>
                    <EventHistoryItem createdAt={createdAt} item={lastUpdatedItem} toggleHistory={this.toggleHistory} toggleHistoryButton={true}> </EventHistoryItem>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )
      }

      if (this.state.showHistory === true) {
        return (
          <div>
            <Table responsive style={{ marginBottom: '0' }}>
              <tbody>
                <tr>
                  <td style={{ 'border-style': 'none', 'width': '60px' }}>
                    {typeImg(this.props.event.type)}
                  </td>
                  <td style={{ 'border-style': 'none' }}>
                    <EventHistory event={this.props.event} toggleHistory={this.toggleHistory}> </EventHistory>
              </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )
      }
    }

    return toRender();
  }
}


export default Event;