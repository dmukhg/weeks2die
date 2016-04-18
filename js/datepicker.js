window.DatePicker = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    
    var year = this._year.value;
    var month = this._month.value;
    var day = this._day.value;

    if (year > 0 && year < 9999 
      && month > 0 && month < 13
      && day > 0 && day < 32) {
      this.props.setDate(new Date(year, month, day, 0, 0, 0, 0));
    }
  },

  getInitialState: function () {
    return {
      year: this.props.year,
      month: this.props.month,
      day: this.props.day
    };
  },

  handleChange: function (e) {
    var year = this._year.value;
    var month = this._month.value;
    var day = this._day.value;

    this.setState({
      year: year,
      month: month,
      day: day
    });
  },

  render: function () {
    return <div className='wd-datepicker'>
        <form>
          <input 
            value={this.state.year}
            ref={(c) => this._year = c}
            id='year' onChange={this.handleChange}/>
          <input 
            value={this.state.month}
            ref={(c) => this._month = c}
            id='month' onChange={this.handleChange}/>
          <input 
            value={this.state.day}
            ref={(c) => this._day = c}
            id='day' onChange={this.handleChange}/>
          <input type='submit' onClick={this.handleSubmit}/>
        </form>
    </div>
  }
});