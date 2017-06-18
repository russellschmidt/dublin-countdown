import React, { Component } from 'react';
import moment from 'moment';

class Countdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      secondsLeft: moment('2017-07-27 16:20:00') - moment(),
    }
  }
  componentDidMount() {
    this.setState({ secondsLeft: this.state.secondsLeft });
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick = () => {
    this.setState({ secondsLeft: this.state.secondsLeft - 1 });
    if (this.state.secondsLeft <= 0) {
      clearInterval(this.interval);
    }
  }
  timeLeft = () => {
    const now = moment();
    const dublinDay = moment("2017-07-27");
    const tl = {
      daysLeft: dublinDay.diff(now, 'days'),
      hoursLeft: dublinDay.diff(now, 'hours') % (dublinDay.diff(now, 'days') * 24),
      minutesLeft: dublinDay.diff(now, 'minutes') % (dublinDay.diff(now, 'hours') * 60),
      secondsLeft: this.state.secondsLeft % 60
    }
    return tl;
  }
  render() {
    return (
      <div className='countdownContainer'>
        <p>{this.timeLeft().daysLeft}:{this.timeLeft().hoursLeft}:{this.timeLeft().minutesLeft}:{this.timeLeft().secondsLeft}</p>
        <p>Day:Hr:Min:Sec</p>
      </div>
    )
  }
}

export default Countdown;
