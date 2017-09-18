'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _input = require('./inputscoretime/input');

var _input2 = _interopRequireDefault(_input);

var _scorekeeper = require('./inputscoretime/scorekeeper');

var _scorekeeper2 = _interopRequireDefault(_scorekeeper);

var _timer = require('./inputscoretime/timer');

var _timer2 = _interopRequireDefault(_timer);

var _backbutton = require('./buttons/backbutton');

var _backbutton2 = _interopRequireDefault(_backbutton);

var _giveupbutton = require('./buttons/giveupbutton');

var _giveupbutton2 = _interopRequireDefault(_giveupbutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// LINT: component should be written as a pure function
var InputScoreTime = function (_React$Component) {
  _inherits(InputScoreTime, _React$Component);

  function InputScoreTime() {
    _classCallCheck(this, InputScoreTime);

    return _possibleConstructorReturn(this, (InputScoreTime.__proto__ || Object.getPrototypeOf(InputScoreTime)).apply(this, arguments));
  }

  _createClass(InputScoreTime, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_input2.default, {
          placesArray: this.props.placesArray,
          capitals: this.props.capitals,
          handleNamedPlace: this.props.handleNamedPlace,
          handleTimer: this.props.handleTimer
        }),
        _react2.default.createElement(_scorekeeper2.default, {
          placesArray: this.props.placesArray,
          continent: this.props.continent
        }),
        _react2.default.createElement(_timer2.default, {
          timing: this.props.timing,
          getFinalTime: this.props.getFinalTime
        }),
        _react2.default.createElement(_backbutton2.default, { handleBack: this.props.handleBack }),
        _react2.default.createElement(_giveupbutton2.default, { handleGiveUp: this.props.handleGiveUp })
      );
    }
  }]);

  return InputScoreTime;
}(_react2.default.Component);

exports.default = InputScoreTime;


InputScoreTime.propTypes = {
  placesArray: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  continent: _propTypes2.default.string.isRequired,
  capitals: _propTypes2.default.bool.isRequired,
  timing: _propTypes2.default.bool.isRequired,
  handleNamedPlace: _propTypes2.default.func.isRequired,
  handleTimer: _propTypes2.default.func.isRequired,
  handleBack: _propTypes2.default.func.isRequired,
  getFinalTime: _propTypes2.default.func.isRequired,
  handleGiveUp: _propTypes2.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci9JbnB1dFNjb3JlVGltZS5qc3giXSwibmFtZXMiOlsiSW5wdXRTY29yZVRpbWUiLCJwcm9wcyIsInBsYWNlc0FycmF5IiwiY2FwaXRhbHMiLCJoYW5kbGVOYW1lZFBsYWNlIiwiaGFuZGxlVGltZXIiLCJjb250aW5lbnQiLCJ0aW1pbmciLCJnZXRGaW5hbFRpbWUiLCJoYW5kbGVCYWNrIiwiaGFuZGxlR2l2ZVVwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7SUFDcUJBLGM7Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUNFLHVCQUFhLEtBQUtDLEtBQUwsQ0FBV0MsV0FEMUI7QUFFRSxvQkFBVSxLQUFLRCxLQUFMLENBQVdFLFFBRnZCO0FBR0UsNEJBQWtCLEtBQUtGLEtBQUwsQ0FBV0csZ0JBSC9CO0FBSUUsdUJBQWEsS0FBS0gsS0FBTCxDQUFXSTtBQUoxQixVQURGO0FBT0U7QUFDRSx1QkFBYSxLQUFLSixLQUFMLENBQVdDLFdBRDFCO0FBRUUscUJBQVcsS0FBS0QsS0FBTCxDQUFXSztBQUZ4QixVQVBGO0FBV0U7QUFDRSxrQkFBUSxLQUFLTCxLQUFMLENBQVdNLE1BRHJCO0FBRUUsd0JBQWMsS0FBS04sS0FBTCxDQUFXTztBQUYzQixVQVhGO0FBZUUsOERBQVksWUFBWSxLQUFLUCxLQUFMLENBQVdRLFVBQW5DLEdBZkY7QUFpQkUsZ0VBQWMsY0FBYyxLQUFLUixLQUFMLENBQVdTLFlBQXZDO0FBakJGLE9BREY7QUFxQkQ7Ozs7RUF2QnlDLGdCQUFNQyxTOztrQkFBN0JYLGM7OztBQTBCckJBLGVBQWVZLFNBQWYsR0FBMkI7QUFDekJWLGVBQWEsb0JBQVVXLE9BQVYsQ0FBa0Isb0JBQVVDLE1BQTVCLEVBQW9DQyxVQUR4QjtBQUV6QlQsYUFBVyxvQkFBVVUsTUFBVixDQUFpQkQsVUFGSDtBQUd6QlosWUFBVSxvQkFBVWMsSUFBVixDQUFlRixVQUhBO0FBSXpCUixVQUFRLG9CQUFVVSxJQUFWLENBQWVGLFVBSkU7QUFLekJYLG9CQUFrQixvQkFBVWMsSUFBVixDQUFlSCxVQUxSO0FBTXpCVixlQUFhLG9CQUFVYSxJQUFWLENBQWVILFVBTkg7QUFPekJOLGNBQVksb0JBQVVTLElBQVYsQ0FBZUgsVUFQRjtBQVF6QlAsZ0JBQWMsb0JBQVVVLElBQVYsQ0FBZUgsVUFSSjtBQVN6QkwsZ0JBQWMsb0JBQVVRLElBQVYsQ0FBZUg7QUFUSixDQUEzQiIsImZpbGUiOiJJbnB1dFNjb3JlVGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0c2NvcmV0aW1lL2lucHV0J1xuaW1wb3J0IFNjb3JlS2VlcGVyIGZyb20gJy4vaW5wdXRzY29yZXRpbWUvc2NvcmVrZWVwZXInXG5pbXBvcnQgVGltZXIgZnJvbSAnLi9pbnB1dHNjb3JldGltZS90aW1lcidcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gJy4vYnV0dG9ucy9iYWNrYnV0dG9uJ1xuaW1wb3J0IEdpdmVVcEJ1dHRvbiBmcm9tICcuL2J1dHRvbnMvZ2l2ZXVwYnV0dG9uJ1xuXG4vLyBMSU5UOiBjb21wb25lbnQgc2hvdWxkIGJlIHdyaXR0ZW4gYXMgYSBwdXJlIGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFNjb3JlVGltZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcGxhY2VzQXJyYXk9e3RoaXMucHJvcHMucGxhY2VzQXJyYXl9XG4gICAgICAgICAgY2FwaXRhbHM9e3RoaXMucHJvcHMuY2FwaXRhbHN9XG4gICAgICAgICAgaGFuZGxlTmFtZWRQbGFjZT17dGhpcy5wcm9wcy5oYW5kbGVOYW1lZFBsYWNlfVxuICAgICAgICAgIGhhbmRsZVRpbWVyPXt0aGlzLnByb3BzLmhhbmRsZVRpbWVyfVxuICAgICAgICAvPlxuICAgICAgICA8U2NvcmVLZWVwZXJcbiAgICAgICAgICBwbGFjZXNBcnJheT17dGhpcy5wcm9wcy5wbGFjZXNBcnJheX1cbiAgICAgICAgICBjb250aW5lbnQ9e3RoaXMucHJvcHMuY29udGluZW50fVxuICAgICAgICAvPlxuICAgICAgICA8VGltZXJcbiAgICAgICAgICB0aW1pbmc9e3RoaXMucHJvcHMudGltaW5nfVxuICAgICAgICAgIGdldEZpbmFsVGltZT17dGhpcy5wcm9wcy5nZXRGaW5hbFRpbWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxCYWNrQnV0dG9uIGhhbmRsZUJhY2s9e3RoaXMucHJvcHMuaGFuZGxlQmFja30gLz5cblxuICAgICAgICA8R2l2ZVVwQnV0dG9uIGhhbmRsZUdpdmVVcD17dGhpcy5wcm9wcy5oYW5kbGVHaXZlVXB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuSW5wdXRTY29yZVRpbWUucHJvcFR5cGVzID0ge1xuICBwbGFjZXNBcnJheTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcbiAgY29udGluZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNhcGl0YWxzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB0aW1pbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGhhbmRsZU5hbWVkUGxhY2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZVRpbWVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVCYWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRGaW5hbFRpbWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUdpdmVVcDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ==
