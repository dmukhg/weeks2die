window.App = React.createClass({
  getInitialState: function () {
    return {
      startDate: new Date(1991, 8, 28, 0, 0, 0 , 0),
      pivotDate: new Date()
    };
  },

  setDate: function (date) {
    this.setState({
      startDate: date
    });
  },

  render: function () {
    var state = this.state;

    return <div>
      <DatePicker 
        year={state.startDate.getFullYear()}
        month={state.startDate.getMonth()}
        day={state.startDate.getDate()}
        setDate={this.setDate}/>
      <WeekCalendar startDate={ state.startDate } 
        pivotDate={ state.pivotDate }/>,
    </div>
  }
})