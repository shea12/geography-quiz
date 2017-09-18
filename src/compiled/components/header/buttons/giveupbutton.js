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
var GiveUpButton = function (_React$Component) {
  _inherits(GiveUpButton, _React$Component);

  function GiveUpButton() {
    _classCallCheck(this, GiveUpButton);

    return _possibleConstructorReturn(this, (GiveUpButton.__proto__ || Object.getPrototypeOf(GiveUpButton)).apply(this, arguments));
  }

  _createClass(GiveUpButton, [{
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
            marginLeft: 140
          },
          onClick: function onClick() {
            return _this2.props.handleGiveUp();
          }
        },
        'Give Up'
      );
    }
  }]);

  return GiveUpButton;
}(_react2.default.Component);

exports.default = GiveUpButton;


GiveUpButton.propTypes = {
  handleGiveUp: _propTypes2.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci9idXR0b25zL2dpdmV1cGJ1dHRvbi5qc3giXSwibmFtZXMiOlsiR2l2ZVVwQnV0dG9uIiwicG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJ6SW5kZXgiLCJtYXJnaW5MZWZ0IiwicHJvcHMiLCJoYW5kbGVHaXZlVXAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0lBQ3FCQSxZOzs7Ozs7Ozs7Ozs2QkFDVjtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQU87QUFDTEMsc0JBQVUsVUFETDtBQUVMQyx1QkFBVyxDQUZOO0FBR0xDLG9CQUFRLENBSEg7QUFJTEMsd0JBQVk7QUFKUCxXQURUO0FBT0UsbUJBQ0U7QUFBQSxtQkFBTSxPQUFLQyxLQUFMLENBQVdDLFlBQVgsRUFBTjtBQUFBO0FBUko7QUFBQTtBQUFBLE9BREY7QUFlRDs7OztFQWpCdUMsZ0JBQU1DLFM7O2tCQUEzQlAsWTs7O0FBb0JyQkEsYUFBYVEsU0FBYixHQUF5QjtBQUN2QkYsZ0JBQWMsb0JBQVVHLElBQVYsQ0FBZUM7QUFETixDQUF6QiIsImZpbGUiOiJnaXZldXBidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuLy8gTElOVDogY29tcG9uZW50IHNob3VsZCBiZSB3cml0dGVuIGFzIGEgcHVyZSBmdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l2ZVVwQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgbWFyZ2luVG9wOiA4LFxuICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAxNDAsXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICgpID0+IHRoaXMucHJvcHMuaGFuZGxlR2l2ZVVwKClcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICBHaXZlIFVwXG4gICAgICA8L1JhaXNlZEJ1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuR2l2ZVVwQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgaGFuZGxlR2l2ZVVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19
