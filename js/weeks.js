var WEEKS_IN_A_YEAR = 52;
var LIFE_SPAN_YEARS = 90;
var MS_IN_A_DAY = 24 * 60 * 60 * 1000;

var MS_IN_LIFE_SPAN = LIFE_SPAN_YEARS * WEEKS_IN_A_YEAR * 7 * MS_IN_A_DAY;

function getIntervals(start, end, intervalSize) {
  var intervals = [];
  while (start < end) {
    intervals.push({start: start, end: start+intervalSize});
    start = start + intervalSize;
  }

  return intervals;
}

window.WeekCalendar = React.createClass({
  getWeeks: function (start, end) {
    return getIntervals(start, end, 7 * MS_IN_A_DAY);
  },

  getYears: function () {
    var start = this.props.startDate.getTime();
    var end = start + MS_IN_LIFE_SPAN;

    return getIntervals(start, end, WEEKS_IN_A_YEAR * 7 * MS_IN_A_DAY);
  },

  render: function () {
    var renderedRows = [];
    var now = this.props.pivotDate.getTime();

    var years = this.getYears();
    for (var year of years) {
      var renderedWeeks = [];

      var weeks = this.getWeeks(year.start, year.end);
      for (var week of weeks) {
        let classes = 'wd-week';

        if (week.start < now && week.end > now) {
          // Current week
          classes = classes + ' wd-week-current';
        } else if (week.start < now) {
          // expired week
          classes = classes + ' wd-week-expired';
        }

        renderedWeeks.push(
          <span className={classes}>&nbsp;</span>
        );
      }

      renderedRows.push(
        <div className='wd-year'>{renderedWeeks}</div>
      );
    }

    return (
      <div className="wd-calendar">
        { renderedRows }
      </div>
    );
  }
});