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
var BackButton = function (_React$Component) {
  _inherits(BackButton, _React$Component);

  function BackButton() {
    _classCallCheck(this, BackButton);

    return _possibleConstructorReturn(this, (BackButton.__proto__ || Object.getPrototypeOf(BackButton)).apply(this, arguments));
  }

  _createClass(BackButton, [{
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
            marginLeft: 20
          },
          onClick: function onClick() {
            return _this2.props.handleBack();
          }
        },
        'Back'
      );
    }
  }]);

  return BackButton;
}(_react2.default.Component);

exports.default = BackButton;


BackButton.propTypes = {
  handleBack: _propTypes2.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci9idXR0b25zL2JhY2tidXR0b24uanN4Il0sIm5hbWVzIjpbIkJhY2tCdXR0b24iLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsInpJbmRleCIsIm1hcmdpbkxlZnQiLCJwcm9wcyIsImhhbmRsZUJhY2siLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs2QkFDVjtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQU87QUFDTEMsc0JBQVUsVUFETDtBQUVMQyx1QkFBVyxDQUZOO0FBR0xDLG9CQUFRLENBSEg7QUFJTEMsd0JBQVk7QUFKUCxXQURUO0FBT0UsbUJBQ0U7QUFBQSxtQkFBTSxPQUFLQyxLQUFMLENBQVdDLFVBQVgsRUFBTjtBQUFBO0FBUko7QUFBQTtBQUFBLE9BREY7QUFlRDs7OztFQWpCcUMsZ0JBQU1DLFM7O2tCQUF6QlAsVTs7O0FBb0JyQkEsV0FBV1EsU0FBWCxHQUF1QjtBQUNyQkYsY0FBWSxvQkFBVUcsSUFBVixDQUFlQztBQUROLENBQXZCIiwiZmlsZSI6ImJhY2tidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuLy8gTElOVDogY29tcG9uZW50IHNob3VsZCBiZSB3cml0dGVuIGFzIGEgcHVyZSBmdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja0J1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIG1hcmdpblRvcDogOCxcbiAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgICAgbWFyZ2luTGVmdDogMjAsXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICgpID0+IHRoaXMucHJvcHMuaGFuZGxlQmFjaygpXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgQmFja1xuICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgKVxuICB9XG59XG5cbkJhY2tCdXR0b24ucHJvcFR5cGVzID0ge1xuICBoYW5kbGVCYWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19
