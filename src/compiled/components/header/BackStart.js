'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _startbutton = require('./buttons/startbutton');

var _startbutton2 = _interopRequireDefault(_startbutton);

var _backbutton = require('./buttons/backbutton');

var _backbutton2 = _interopRequireDefault(_backbutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// LINT: component should be written as a pure function
var BackStart = function (_React$Component) {
  _inherits(BackStart, _React$Component);

  function BackStart() {
    _classCallCheck(this, BackStart);

    return _possibleConstructorReturn(this, (BackStart.__proto__ || Object.getPrototypeOf(BackStart)).apply(this, arguments));
  }

  _createClass(BackStart, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_startbutton2.default, { handleStart: this.props.handleStart }),
        _react2.default.createElement(_backbutton2.default, { handleBack: this.props.handleBack })
      );
    }
  }]);

  return BackStart;
}(_react2.default.Component);

exports.default = BackStart;


BackStart.propTypes = {
  handleStart: _propTypes2.default.func.isRequired,
  handleBack: _propTypes2.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci9CYWNrU3RhcnQuanN4Il0sIm5hbWVzIjpbIkJhY2tTdGFydCIsInByb3BzIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVCYWNrIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs2QkFDVjtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsK0RBQWEsYUFBYSxLQUFLQyxLQUFMLENBQVdDLFdBQXJDLEdBREY7QUFFRSw4REFBWSxZQUFZLEtBQUtELEtBQUwsQ0FBV0UsVUFBbkM7QUFGRixPQURGO0FBTUQ7Ozs7RUFSb0MsZ0JBQU1DLFM7O2tCQUF4QkosUzs7O0FBV3JCQSxVQUFVSyxTQUFWLEdBQXNCO0FBQ3BCSCxlQUFhLG9CQUFVSSxJQUFWLENBQWVDLFVBRFI7QUFFcEJKLGNBQVksb0JBQVVHLElBQVYsQ0FBZUM7QUFGUCxDQUF0QiIsImZpbGUiOiJCYWNrU3RhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgU3RhcnRCdXR0b24gZnJvbSAnLi9idXR0b25zL3N0YXJ0YnV0dG9uJ1xuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSAnLi9idXR0b25zL2JhY2tidXR0b24nXG5cbi8vIExJTlQ6IGNvbXBvbmVudCBzaG91bGQgYmUgd3JpdHRlbiBhcyBhIHB1cmUgZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tTdGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFN0YXJ0QnV0dG9uIGhhbmRsZVN0YXJ0PXt0aGlzLnByb3BzLmhhbmRsZVN0YXJ0fSAvPlxuICAgICAgICA8QmFja0J1dHRvbiBoYW5kbGVCYWNrPXt0aGlzLnByb3BzLmhhbmRsZUJhY2t9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuQmFja1N0YXJ0LnByb3BUeXBlcyA9IHtcbiAgaGFuZGxlU3RhcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUJhY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0=
