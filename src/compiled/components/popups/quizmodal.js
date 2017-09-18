'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuizModal = function (_React$Component) {
  _inherits(QuizModal, _React$Component);

  function QuizModal(props) {
    _classCallCheck(this, QuizModal);

    var _this = _possibleConstructorReturn(this, (QuizModal.__proto__ || Object.getPrototypeOf(QuizModal)).call(this, props));

    _this.state = {
      open: true
    };

    _this.close = _this.close.bind(_this);
    return _this;
  }

  // LINT: do not use setState in componentDidMount
  /* eslint-disable */


  _createClass(QuizModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ showModal: true });
    }
    /* eslint-enable */

  }, {
    key: 'open',
    value: function open() {
      this.setState({ open: true });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ open: false });
      this.props.onClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var actions = [];
      var time = this.props.time;
      var title = 'Great Job!';
      var dialogue = 'You completed ' + this.props.quizTitle + ' quiz in ' + time;
      if (this.props.gaveUp) {
        title = 'Keep Studying';
        dialogue = 'Nice try, you identified ' + (this.props.placesNumber - this.props.placesRemaining) + ' out of ' + this.props.placesNumber + ' places in ' + time;
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Dialog2.default,
          {
            title: title,
            actions: actions,
            modal: false,
            open: this.state.open,
            onRequestClose: this.close
          },
          dialogue
        )
      );
    }
  }]);

  return QuizModal;
}(_react2.default.Component);

exports.default = QuizModal;


QuizModal.propTypes = {
  onClose: _propTypes2.default.func.isRequired,
  time: _propTypes2.default.number.isRequired,
  quizTitle: _propTypes2.default.string.isRequired,
  gaveUp: _propTypes2.default.bool.isRequired,
  placesNumber: _propTypes2.default.number.isRequired,
  placesRemaining: _propTypes2.default.number.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL3BvcHVwcy9xdWl6bW9kYWwuanN4Il0sIm5hbWVzIjpbIlF1aXpNb2RhbCIsInByb3BzIiwic3RhdGUiLCJvcGVuIiwiY2xvc2UiLCJiaW5kIiwic2V0U3RhdGUiLCJzaG93TW9kYWwiLCJvbkNsb3NlIiwiYWN0aW9ucyIsInRpbWUiLCJ0aXRsZSIsImRpYWxvZ3VlIiwicXVpelRpdGxlIiwiZ2F2ZVVwIiwicGxhY2VzTnVtYmVyIiwicGxhY2VzUmVtYWluaW5nIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFDbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU07QUFESyxLQUFiOztBQUlBLFVBQUtDLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdDLElBQVgsT0FBYjtBQU5pQjtBQU9sQjs7QUFFRDtBQUNBOzs7Ozt3Q0FDb0I7QUFDbEIsV0FBS0MsUUFBTCxDQUFjLEVBQUVDLFdBQVcsSUFBYixFQUFkO0FBQ0Q7QUFDRDs7OzsyQkFFTztBQUNMLFdBQUtELFFBQUwsQ0FBYyxFQUFFSCxNQUFNLElBQVIsRUFBZDtBQUNEOzs7NEJBRU87QUFDTixXQUFLRyxRQUFMLENBQWMsRUFBRUgsTUFBTSxLQUFSLEVBQWQ7QUFDQSxXQUFLRixLQUFMLENBQVdPLE9BQVg7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsVUFBVSxFQUFoQjtBQUNBLFVBQU1DLE9BQU8sS0FBS1QsS0FBTCxDQUFXUyxJQUF4QjtBQUNBLFVBQUlDLFFBQVEsWUFBWjtBQUNBLFVBQUlDLDhCQUE0QixLQUFLWCxLQUFMLENBQVdZLFNBQXZDLGlCQUE0REgsSUFBaEU7QUFDQSxVQUFJLEtBQUtULEtBQUwsQ0FBV2EsTUFBZixFQUF1QjtBQUNyQkgsZ0JBQVEsZUFBUjtBQUNBQyxrREFBd0MsS0FBS1gsS0FBTCxDQUFXYyxZQUFYLEdBQTBCLEtBQUtkLEtBQUwsQ0FBV2UsZUFBN0UsaUJBQXdHLEtBQUtmLEtBQUwsQ0FBV2MsWUFBbkgsbUJBQTZJTCxJQUE3STtBQUNEO0FBQ0QsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxtQkFBT0MsS0FEVDtBQUVFLHFCQUFTRixPQUZYO0FBR0UsbUJBQU8sS0FIVDtBQUlFLGtCQUFNLEtBQUtQLEtBQUwsQ0FBV0MsSUFKbkI7QUFLRSw0QkFBZ0IsS0FBS0M7QUFMdkI7QUFPR1E7QUFQSDtBQURGLE9BREY7QUFhRDs7OztFQWhEb0MsZ0JBQU1LLFM7O2tCQUF4QmpCLFM7OztBQW1EckJBLFVBQVVrQixTQUFWLEdBQXNCO0FBQ3BCVixXQUFTLG9CQUFVVyxJQUFWLENBQWVDLFVBREo7QUFFcEJWLFFBQU0sb0JBQVVXLE1BQVYsQ0FBaUJELFVBRkg7QUFHcEJQLGFBQVcsb0JBQVVTLE1BQVYsQ0FBaUJGLFVBSFI7QUFJcEJOLFVBQVEsb0JBQVVTLElBQVYsQ0FBZUgsVUFKSDtBQUtwQkwsZ0JBQWMsb0JBQVVNLE1BQVYsQ0FBaUJELFVBTFg7QUFNcEJKLG1CQUFpQixvQkFBVUssTUFBVixDQUFpQkQ7QUFOZCxDQUF0QiIsImZpbGUiOiJxdWl6bW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRGlhbG9nIGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpek1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogdHJ1ZSxcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpXG4gIH1cblxuICAvLyBMSU5UOiBkbyBub3QgdXNlIHNldFN0YXRlIGluIGNvbXBvbmVudERpZE1vdW50XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSlcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gW11cbiAgICBjb25zdCB0aW1lID0gdGhpcy5wcm9wcy50aW1lXG4gICAgbGV0IHRpdGxlID0gJ0dyZWF0IEpvYiEnXG4gICAgbGV0IGRpYWxvZ3VlID0gYFlvdSBjb21wbGV0ZWQgJHt0aGlzLnByb3BzLnF1aXpUaXRsZX0gcXVpeiBpbiAke3RpbWV9YFxuICAgIGlmICh0aGlzLnByb3BzLmdhdmVVcCkge1xuICAgICAgdGl0bGUgPSAnS2VlcCBTdHVkeWluZydcbiAgICAgIGRpYWxvZ3VlID0gYE5pY2UgdHJ5LCB5b3UgaWRlbnRpZmllZCAkeyh0aGlzLnByb3BzLnBsYWNlc051bWJlciAtIHRoaXMucHJvcHMucGxhY2VzUmVtYWluaW5nKX0gb3V0IG9mICR7dGhpcy5wcm9wcy5wbGFjZXNOdW1iZXJ9IHBsYWNlcyBpbiAke3RpbWV9YFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERpYWxvZ1xuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICAgIG1vZGFsPXtmYWxzZX1cbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2V9XG4gICAgICAgID5cbiAgICAgICAgICB7ZGlhbG9ndWV9XG4gICAgICAgIDwvRGlhbG9nPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblF1aXpNb2RhbC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRpbWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcXVpelRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGdhdmVVcDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgcGxhY2VzTnVtYmVyOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHBsYWNlc1JlbWFpbmluZzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufVxuIl19
