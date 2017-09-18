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
var CategoryButton = function (_React$Component) {
  _inherits(CategoryButton, _React$Component);

  function CategoryButton() {
    _classCallCheck(this, CategoryButton);

    return _possibleConstructorReturn(this, (CategoryButton.__proto__ || Object.getPrototypeOf(CategoryButton)).apply(this, arguments));
  }

  _createClass(CategoryButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _RaisedButton2.default,
        {
          style: {
            margin: 8,
            marginRight: 20,
            zIndex: 2,
            width: 120
          },
          onClick: function onClick() {
            return _this2.props.handleCategorySelection(_this2.props.code);
          }
        },
        this.props.title
      );
    }
  }]);

  return CategoryButton;
}(_react2.default.Component);

exports.default = CategoryButton;


CategoryButton.propTypes = {
  handleCategorySelection: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string.isRequired,
  code: _propTypes2.default.string.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci9idXR0b25zL2NhdGVnb3J5YnV0dG9uLmpzeCJdLCJuYW1lcyI6WyJDYXRlZ29yeUJ1dHRvbiIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwiekluZGV4Iiwid2lkdGgiLCJwcm9wcyIsImhhbmRsZUNhdGVnb3J5U2VsZWN0aW9uIiwiY29kZSIsInRpdGxlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtJQUNxQkEsYzs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFPO0FBQ0xDLG9CQUFRLENBREg7QUFFTEMseUJBQWEsRUFGUjtBQUdMQyxvQkFBUSxDQUhIO0FBSUxDLG1CQUFPO0FBSkYsV0FEVDtBQU9FLG1CQUNFO0FBQUEsbUJBQU0sT0FBS0MsS0FBTCxDQUFXQyx1QkFBWCxDQUFtQyxPQUFLRCxLQUFMLENBQVdFLElBQTlDLENBQU47QUFBQTtBQVJKO0FBV0csYUFBS0YsS0FBTCxDQUFXRztBQVhkLE9BREY7QUFlRDs7OztFQWpCeUMsZ0JBQU1DLFM7O2tCQUE3QlQsYzs7O0FBb0JyQkEsZUFBZVUsU0FBZixHQUEyQjtBQUN6QkosMkJBQXlCLG9CQUFVSyxJQUFWLENBQWVDLFVBRGY7QUFFekJKLFNBQU8sb0JBQVVLLE1BQVYsQ0FBaUJELFVBRkM7QUFHekJMLFFBQU0sb0JBQVVNLE1BQVYsQ0FBaUJEO0FBSEUsQ0FBM0IiLCJmaWxlIjoiY2F0ZWdvcnlidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuLy8gTElOVDogY29tcG9uZW50IHNob3VsZCBiZSB3cml0dGVuIGFzIGEgcHVyZSBmdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnlCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW46IDgsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICB9fVxuICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAoKSA9PiB0aGlzLnByb3BzLmhhbmRsZUNhdGVnb3J5U2VsZWN0aW9uKHRoaXMucHJvcHMuY29kZSlcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgIDwvUmFpc2VkQnV0dG9uPlxuICAgIClcbiAgfVxufVxuXG5DYXRlZ29yeUJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGhhbmRsZUNhdGVnb3J5U2VsZWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb2RlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG4iXX0=
