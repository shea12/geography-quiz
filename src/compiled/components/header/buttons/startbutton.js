'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// LINT: component should be written as a pure function
var StartButton = function (_React$Component) {
  _inherits(StartButton, _React$Component);

  function StartButton() {
    _classCallCheck(this, StartButton);

    return _possibleConstructorReturn(this, (StartButton.__proto__ || Object.getPrototypeOf(StartButton)).apply(this, arguments));
  }

  _createClass(StartButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _RaisedButton2.default,
        {
          style: {
            position: 'absolute',
            marginTop: 8,
            zIndex: 2,
            marginLeft: '10%'
          },
          onClick: function onClick() {
            return _this2.props.handleStart();
          }
        },
        'Start Quiz'
      );
    }
  }]);

  return StartButton;
}(_react2.default.Component);

exports.default = StartButton;


StartButton.propTypes = {
  handleStart: _propTypes2.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci9idXR0b25zL3N0YXJ0YnV0dG9uLmpzeCJdLCJuYW1lcyI6WyJTdGFydEJ1dHRvbiIsInBvc2l0aW9uIiwibWFyZ2luVG9wIiwiekluZGV4IiwibWFyZ2luTGVmdCIsInByb3BzIiwiaGFuZGxlU3RhcnQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs2QkFDVjtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQU87QUFDTEMsc0JBQVUsVUFETDtBQUVMQyx1QkFBVyxDQUZOO0FBR0xDLG9CQUFRLENBSEg7QUFJTEMsd0JBQVk7QUFKUCxXQURUO0FBT0UsbUJBQ0U7QUFBQSxtQkFBTSxPQUFLQyxLQUFMLENBQVdDLFdBQVgsRUFBTjtBQUFBO0FBUko7QUFBQTtBQUFBLE9BREY7QUFlRDs7OztFQWpCc0MsZ0JBQU1DLFM7O2tCQUExQlAsVzs7O0FBb0JyQkEsWUFBWVEsU0FBWixHQUF3QjtBQUN0QkYsZUFBYSxvQkFBVUcsSUFBVixDQUFlQztBQUROLENBQXhCIiwiZmlsZSI6InN0YXJ0YnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbi8vIExJTlQ6IGNvbXBvbmVudCBzaG91bGQgYmUgd3JpdHRlbiBhcyBhIHB1cmUgZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgbWFyZ2luVG9wOiA4LFxuICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTAlJyxcbiAgICAgICAgfX1cbiAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgKCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVTdGFydCgpXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgU3RhcnQgUXVpelxuICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgKVxuICB9XG59XG5cblN0YXJ0QnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgaGFuZGxlU3RhcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0=
