import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import Event from './event'


class WalleLog extends React.Component {
    constructor(props) {
        super(props);
    };

    componentWillMount() {        
        this.props.doLoadEvents();
    }

    render() {

        let eventLogs = this.props.wallelog.eventList.map((event) => <Event event={event}> </Event>);
        return (
            <div>
                <h1> Event logbook </h1>
                <Grid fluid={true}>
                    {eventLogs}
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        wallelog: state.wallelog,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        doLoadEvents: () => {
            dispatch({
                type: "CHANGE_PAGE",
                page: "WALLELOG"
            }
            )
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WalleLog);