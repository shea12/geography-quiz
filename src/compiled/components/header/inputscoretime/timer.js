'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  time: {
    position: 'absolute',
    zIndex: 3,
    marginTop: 0,
    marginLeft: '42%'
  }
};

function convertTime(s) {
  // let sec = seconds
  // const numerator = (sec - (sec %= 60))
  // // LINT: expected literal to be on the right side of <
  // /* eslint-disable */
  // const denominator = 60 + (9 < sec ? ':' : ':0') + sec
  // /* eslint-enable */
  // return numerator / denominator
  /* eslint-disable */
  return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  /* eslint-enable */
}

var Timer = function (_React$Component) {
  _inherits(Timer, _React$Component);

  function Timer() {
    _classCallCheck(this, Timer);

    var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this));

    _this.state = {
      time: 0,
      timing: false
    };
    _this.ticktock = _this.ticktock.bind(_this);
    return _this;
  }

  _createClass(Timer, [{
    key: 'getInitialState',
    value: function getInitialState() {
      this.setState({ time: 0 });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.state.timing && nextProps.timing) {
        this.setState({
          timing: true,
          time: 0,
          start: new Date()
        });
        this.timer = setInterval(this.ticktock, 1000);
      } else if (this.state.timing && !nextProps.timing) {
        this.setState({ timing: false });
        clearInterval(this.timer);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // need to report back the final time
      var seconds = (Math.round(this.state.time / 100) / 10).toFixed(0);
      var finalTime = convertTime(seconds);
      this.props.getFinalTime(finalTime);
      clearInterval(this.timer);
    }
  }, {
    key: 'ticktock',
    value: function ticktock() {
      this.setState({ time: new Date() - this.state.start });
    }
  }, {
    key: 'render',
    value: function render() {
      var timerComponent = null;
      var elapsed = Math.round(this.state.time / 100);
      var seconds = (elapsed / 10).toFixed(0);
      timerComponent = _react2.default.createElement(
        'p',
        null,
        'Time: ',
        convertTime(seconds)
      );
      return _react2.default.createElement(
        'div',
        { style: style.time },
        timerComponent
      );
    }
  }]);

  return Timer;
}(_react2.default.Component);

Timer.propTypes = {
  timing: _propTypes2.default.bool.isRequired,
  getFinalTime: _propTypes2.default.func.isRequired
};

module.exports = Timer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci9pbnB1dHNjb3JldGltZS90aW1lci5qc3giXSwibmFtZXMiOlsic3R5bGUiLCJ0aW1lIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiY29udmVydFRpbWUiLCJzIiwiVGltZXIiLCJzdGF0ZSIsInRpbWluZyIsInRpY2t0b2NrIiwiYmluZCIsInNldFN0YXRlIiwibmV4dFByb3BzIiwic3RhcnQiLCJEYXRlIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZWNvbmRzIiwiTWF0aCIsInJvdW5kIiwidG9GaXhlZCIsImZpbmFsVGltZSIsInByb3BzIiwiZ2V0RmluYWxUaW1lIiwidGltZXJDb21wb25lbnQiLCJlbGFwc2VkIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJmdW5jIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVE7QUFDWkMsUUFBTTtBQUNKQyxjQUFVLFVBRE47QUFFSkMsWUFBUSxDQUZKO0FBR0pDLGVBQVcsQ0FIUDtBQUlKQyxnQkFBWTtBQUpSO0FBRE0sQ0FBZDs7QUFTQSxTQUFTQyxXQUFULENBQXFCQyxDQUFyQixFQUF3QjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBTyxDQUFDQSxLQUFHQSxLQUFHLEVBQU4sQ0FBRCxJQUFZLEVBQVosSUFBZ0IsSUFBRUEsQ0FBRixHQUFJLEdBQUosR0FBUSxJQUF4QixJQUE4QkEsQ0FBckM7QUFDQTtBQUNEOztJQUVLQyxLOzs7QUFDSixtQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYUixZQUFNLENBREs7QUFFWFMsY0FBUTtBQUZHLEtBQWI7QUFJQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQU5ZO0FBT2I7Ozs7c0NBRWlCO0FBQ2hCLFdBQUtDLFFBQUwsQ0FBYyxFQUFFWixNQUFNLENBQVIsRUFBZDtBQUNEOzs7OENBRXlCYSxTLEVBQVc7QUFDbkMsVUFBSyxDQUFDLEtBQUtMLEtBQUwsQ0FBV0MsTUFBYixJQUF5QkksVUFBVUosTUFBdkMsRUFBZ0Q7QUFDOUMsYUFBS0csUUFBTCxDQUFjO0FBQ1pILGtCQUFRLElBREk7QUFFWlQsZ0JBQU0sQ0FGTTtBQUdaYyxpQkFBTyxJQUFJQyxJQUFKO0FBSEssU0FBZDtBQUtBLGFBQUtDLEtBQUwsR0FBYUMsWUFBWSxLQUFLUCxRQUFqQixFQUEyQixJQUEzQixDQUFiO0FBQ0QsT0FQRCxNQU9PLElBQUssS0FBS0YsS0FBTCxDQUFXQyxNQUFaLElBQXdCLENBQUNJLFVBQVVKLE1BQXZDLEVBQWdEO0FBQ3JELGFBQUtHLFFBQUwsQ0FBYyxFQUFFSCxRQUFRLEtBQVYsRUFBZDtBQUNBUyxzQkFBYyxLQUFLRixLQUFuQjtBQUNEO0FBQ0Y7OzsyQ0FFc0I7QUFDckI7QUFDQSxVQUFNRyxVQUFVLENBQUVDLEtBQUtDLEtBQUwsQ0FBVyxLQUFLYixLQUFMLENBQVdSLElBQVgsR0FBa0IsR0FBN0IsQ0FBRCxHQUFzQyxFQUF2QyxFQUEyQ3NCLE9BQTNDLENBQW1ELENBQW5ELENBQWhCO0FBQ0EsVUFBTUMsWUFBWWxCLFlBQVljLE9BQVosQ0FBbEI7QUFDQSxXQUFLSyxLQUFMLENBQVdDLFlBQVgsQ0FBd0JGLFNBQXhCO0FBQ0FMLG9CQUFjLEtBQUtGLEtBQW5CO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtKLFFBQUwsQ0FBYyxFQUFFWixNQUFNLElBQUllLElBQUosS0FBYSxLQUFLUCxLQUFMLENBQVdNLEtBQWhDLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBSVksaUJBQWlCLElBQXJCO0FBQ0EsVUFBTUMsVUFBVVAsS0FBS0MsS0FBTCxDQUFXLEtBQUtiLEtBQUwsQ0FBV1IsSUFBWCxHQUFrQixHQUE3QixDQUFoQjtBQUNBLFVBQU1tQixVQUFVLENBQUNRLFVBQVUsRUFBWCxFQUFlTCxPQUFmLENBQXVCLENBQXZCLENBQWhCO0FBQ0FJLHVCQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFVckIsb0JBQVljLE9BQVo7QUFBVixPQUFsQjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssT0FBT3BCLE1BQU1DLElBQWxCO0FBQ0cwQjtBQURILE9BREY7QUFLRDs7OztFQWxEaUIsZ0JBQU1FLFM7O0FBcUQxQnJCLE1BQU1zQixTQUFOLEdBQWtCO0FBQ2hCcEIsVUFBUSxvQkFBVXFCLElBQVYsQ0FBZUMsVUFEUDtBQUVoQk4sZ0JBQWMsb0JBQVVPLElBQVYsQ0FBZUQ7QUFGYixDQUFsQjs7QUFLQUUsT0FBT0MsT0FBUCxHQUFpQjNCLEtBQWpCIiwiZmlsZSI6InRpbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgdGltZToge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHpJbmRleDogMyxcbiAgICBtYXJnaW5Ub3A6IDAsXG4gICAgbWFyZ2luTGVmdDogJzQyJScsXG4gIH0sXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUaW1lKHMpIHtcbiAgLy8gbGV0IHNlYyA9IHNlY29uZHNcbiAgLy8gY29uc3QgbnVtZXJhdG9yID0gKHNlYyAtIChzZWMgJT0gNjApKVxuICAvLyAvLyBMSU5UOiBleHBlY3RlZCBsaXRlcmFsIHRvIGJlIG9uIHRoZSByaWdodCBzaWRlIG9mIDxcbiAgLy8gLyogZXNsaW50LWRpc2FibGUgKi9cbiAgLy8gY29uc3QgZGVub21pbmF0b3IgPSA2MCArICg5IDwgc2VjID8gJzonIDogJzowJykgKyBzZWNcbiAgLy8gLyogZXNsaW50LWVuYWJsZSAqL1xuICAvLyByZXR1cm4gbnVtZXJhdG9yIC8gZGVub21pbmF0b3JcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgcmV0dXJuIChzLShzJT02MCkpLzYwKyg5PHM/JzonOic6MCcpK3NcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xufVxuXG5jbGFzcyBUaW1lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZTogMCxcbiAgICAgIHRpbWluZzogZmFsc2UsXG4gICAgfVxuICAgIHRoaXMudGlja3RvY2sgPSB0aGlzLnRpY2t0b2NrLmJpbmQodGhpcylcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGltZTogMCB9KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoKCF0aGlzLnN0YXRlLnRpbWluZykgJiYgKG5leHRQcm9wcy50aW1pbmcpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGltaW5nOiB0cnVlLFxuICAgICAgICB0aW1lOiAwLFxuICAgICAgICBzdGFydDogbmV3IERhdGUoKSxcbiAgICAgIH0pXG4gICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrdG9jaywgMTAwMClcbiAgICB9IGVsc2UgaWYgKCh0aGlzLnN0YXRlLnRpbWluZykgJiYgKCFuZXh0UHJvcHMudGltaW5nKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWluZzogZmFsc2UgfSlcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBuZWVkIHRvIHJlcG9ydCBiYWNrIHRoZSBmaW5hbCB0aW1lXG4gICAgY29uc3Qgc2Vjb25kcyA9ICgoTWF0aC5yb3VuZCh0aGlzLnN0YXRlLnRpbWUgLyAxMDApKSAvIDEwKS50b0ZpeGVkKDApXG4gICAgY29uc3QgZmluYWxUaW1lID0gY29udmVydFRpbWUoc2Vjb25kcylcbiAgICB0aGlzLnByb3BzLmdldEZpbmFsVGltZShmaW5hbFRpbWUpXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICB9XG5cbiAgdGlja3RvY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWU6IG5ldyBEYXRlKCkgLSB0aGlzLnN0YXRlLnN0YXJ0IH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHRpbWVyQ29tcG9uZW50ID0gbnVsbFxuICAgIGNvbnN0IGVsYXBzZWQgPSBNYXRoLnJvdW5kKHRoaXMuc3RhdGUudGltZSAvIDEwMClcbiAgICBjb25zdCBzZWNvbmRzID0gKGVsYXBzZWQgLyAxMCkudG9GaXhlZCgwKVxuICAgIHRpbWVyQ29tcG9uZW50ID0gKDxwPlRpbWU6IHtjb252ZXJ0VGltZShzZWNvbmRzKX08L3A+KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZS50aW1lfT5cbiAgICAgICAge3RpbWVyQ29tcG9uZW50fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblRpbWVyLnByb3BUeXBlcyA9IHtcbiAgdGltaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBnZXRGaW5hbFRpbWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZXJcbiJdfQ==
