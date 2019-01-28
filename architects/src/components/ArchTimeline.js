import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'react-material-timeline';

class ArchTimeline extends Component {
  render() {
    const { timeline } = this.props;
    const events = timeline.map(timelineItem => (
      {
        title: timelineItem.event,
        subheader: timelineItem.date,
      }
    ));
    return <Timeline events={events} />;
  }
}

export default connect(
  store => ({
    language: store.page.language,
    timeline: store.architects.currentArchitect.biography.timeline,
  }),
)(ArchTimeline);
