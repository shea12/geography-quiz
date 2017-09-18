'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Popover = require('material-ui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  fontSize: '14px'
};

var ContinentButton = function (_React$Component) {
  _inherits(ContinentButton, _React$Component);

  function ContinentButton(props) {
    _classCallCheck(this, ContinentButton);

    var _this = _possibleConstructorReturn(this, (ContinentButton.__proto__ || Object.getPrototypeOf(ContinentButton)).call(this, props));

    _this.state = {
      visible: 2,
      open: false
    };

    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.handleTouchTap = _this.handleTouchTap.bind(_this);
    return _this;
  }

  // LINT: do not use setState in componentDidMount
  /* eslint-disable */


  _createClass(ContinentButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ visible: this.props.showOrHide });
    }
    /* eslint-enable */

  }, {
    key: 'handleTouchTap',
    value: function handleTouchTap(event) {
      event.preventDefault();
      this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({
        open: false
      });
    }

    // TODO: refactor to utilize filter function

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var showOrHide = this.state.visible ? 2 : 0;
      var menuItems = '';
      if (this.props.continent === 'N. America') {
        menuItems = _react2.default.createElement(
          _Menu2.default,
          null,
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Countries', onClick: function onClick() {
              return _this2.props.onButtonClick('NA', false, null, false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Capitals', onClick: function onClick() {
              return _this2.props.onButtonClick('NA', true, null, false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'States: USA', onClick: function onClick() {
              return _this2.props.onButtonClick('NA', false, 'US', false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Capitals: USA', onClick: function onClick() {
              return _this2.props.onButtonClick('NA', false, 'US', true);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'States: Mexico', onClick: function onClick() {
              return _this2.props.onButtonClick('NA', false, 'MX', false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Capitals: Mexico', onClick: function onClick() {
              return _this2.props.onButtonClick('NA', false, 'MX', true);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Provinces: Canada', onClick: function onClick() {
              return _this2.props.onButtonClick('NA', false, 'CA', false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Capitals: Canada', onClick: function onClick() {
              return _this2.props.onButtonClick('NA', false, 'CA', true);
            } })
        );
      } else if (this.props.continent === 'S. America') {
        menuItems = _react2.default.createElement(
          _Menu2.default,
          null,
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Countries', onClick: function onClick() {
              return _this2.props.onButtonClick('SA', false, null, false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Capitals', onClick: function onClick() {
              return _this2.props.onButtonClick('SA', true, null, false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'States: Brazil', onClick: function onClick() {
              return _this2.props.onButtonClick('SA', false, 'BR', false);
            } })
        );
      } else if (this.props.continent === 'Africa') {
        menuItems = _react2.default.createElement(
          _Menu2.default,
          null,
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Countries', onClick: function onClick() {
              return _this2.props.onButtonClick('AF', false, null, false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Capitals', onClick: function onClick() {
              return _this2.props.onButtonClick('AF', true, null, false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Provinces: South Africa', onClick: function onClick() {
              return _this2.props.onButtonClick('AF', false, 'ZA', false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Capitals: South Africa', onClick: function onClick() {
              return _this2.props.onButtonClick('AF', false, 'ZA', true);
            } })
        );
      } else if (this.props.continent === 'Europe') {
        menuItems = _react2.default.createElement(
          _Menu2.default,
          null,
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Countries', onClick: function onClick() {
              return _this2.props.onButtonClick('EU', false, null, false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Capitals', onClick: function onClick() {
              return _this2.props.onButtonClick('EU', true, null, false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Countries: United Kingdom', onClick: function onClick() {
              return _this2.props.onButtonClick('EU', false, 'GB', false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Capitals: United Kingdom', onClick: function onClick() {
              return _this2.props.onButtonClick('EU', false, 'GB', true);
            } })
        );
      } else if (this.props.continent === 'Asia') {
        menuItems = _react2.default.createElement(
          _Menu2.default,
          null,
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Countries', onClick: function onClick() {
              return _this2.props.onButtonClick('AS', false, null, false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Capitals', onClick: function onClick() {
              return _this2.props.onButtonClick('AS', true, null, false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'States: India', onClick: function onClick() {
              return _this2.props.onButtonClick('AS', false, 'IN', false);
            } })
        );
      } else if (this.props.continent === 'Oceania') {
        menuItems = _react2.default.createElement(
          _Menu2.default,
          null,
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Countries', onClick: function onClick() {
              return _this2.props.onButtonClick('OC', false, null, false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Capitals', onClick: function onClick() {
              return _this2.props.onButtonClick('OC', true, null, false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Provinces: Australia', onClick: function onClick() {
              return _this2.props.onButtonClick('OC', false, 'AU', false);
            } }),
          _react2.default.createElement(_MenuItem2.default, { style: style, primaryText: 'Capitals: Australia', onClick: function onClick() {
              return _this2.props.onButtonClick('OC', false, 'AU', true);
            } })
        );
      } else {
        // console.log('non valid continent name sent')
      }
      return _react2.default.createElement(
        'div',
        { style: { display: 'inline-block' } },
        _react2.default.createElement(
          _RaisedButton2.default,
          {
            className: 'waves-effect',
            style: { zIndex: showOrHide, marginRight: 20, backgroundColor: 'rgba(35, 121, 196, 0.9)' },
            onClick: this.handleTouchTap

          },
          this.props.continent
        ),
        _react2.default.createElement(
          _Popover2.default,
          {
            open: this.state.open,
            anchorEl: this.state.anchorEl,
            anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
            targetOrigin: { horizontal: 'left', vertical: 'top' },
            onRequestClose: this.handleRequestClose
          },
          menuItems
        )
      );
    }
  }]);

  return ContinentButton;
}(_react2.default.Component);

exports.default = ContinentButton;


ContinentButton.propTypes = {
  onButtonClick: _propTypes2.default.func.isRequired,
  showOrHide: _propTypes2.default.bool.isRequired,
  continent: _propTypes2.default.string.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci9jb250aW5lbnRzL2FmLmpzeCJdLCJuYW1lcyI6WyJzdHlsZSIsImZvbnRTaXplIiwiQ29udGluZW50QnV0dG9uIiwicHJvcHMiLCJzdGF0ZSIsInZpc2libGUiLCJvcGVuIiwiaGFuZGxlUmVxdWVzdENsb3NlIiwiYmluZCIsImhhbmRsZVRvdWNoVGFwIiwic2V0U3RhdGUiLCJzaG93T3JIaWRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFuY2hvckVsIiwiY3VycmVudFRhcmdldCIsIm1lbnVJdGVtcyIsImNvbnRpbmVudCIsIm9uQnV0dG9uQ2xpY2siLCJkaXNwbGF5IiwiekluZGV4IiwibWFyZ2luUmlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRO0FBQ1pDLFlBQVU7QUFERSxDQUFkOztJQUlxQkMsZTs7O0FBQ25CLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTLENBREU7QUFFWEMsWUFBTTtBQUZLLEtBQWI7O0FBS0EsVUFBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLE9BQTFCO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQixPQUF0QjtBQVJpQjtBQVNsQjs7QUFFRDtBQUNBOzs7Ozt3Q0FDb0I7QUFDbEIsV0FBS0UsUUFBTCxDQUFjLEVBQUVMLFNBQVMsS0FBS0YsS0FBTCxDQUFXUSxVQUF0QixFQUFkO0FBQ0Q7QUFD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QUFlRCxVQUZEO0FBRzFCWCxhQUFXLG9CQUFVYSxNQUFWLENBQWlCRjtBQUhGLENBQTVCIiwiZmlsZSI6ImFmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nXG5pbXBvcnQgUG9wb3ZlciBmcm9tICdtYXRlcmlhbC11aS9Qb3BvdmVyJ1xuaW1wb3J0IE1lbnUgZnJvbSAnbWF0ZXJpYWwtdWkvTWVudSdcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSdcblxuY29uc3Qgc3R5bGUgPSB7XG4gIGZvbnRTaXplOiAnMTRweCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRpbmVudEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGU6IDIsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSA9IHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVRvdWNoVGFwID0gdGhpcy5oYW5kbGVUb3VjaFRhcC5iaW5kKHRoaXMpXG4gIH1cblxuICAvLyBMSU5UOiBkbyBub3QgdXNlIHNldFN0YXRlIGluIGNvbXBvbmVudERpZE1vdW50XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiB0aGlzLnByb3BzLnNob3dPckhpZGUgfSlcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgaGFuZGxlVG91Y2hUYXAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVJlcXVlc3RDbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgIH0pXG4gIH1cblxuICAvLyBUT0RPOiByZWZhY3RvciB0byB1dGlsaXplIGZpbHRlciBmdW5jdGlvblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2hvd09ySGlkZSA9IHRoaXMuc3RhdGUudmlzaWJsZSA/IDIgOiAwXG4gICAgbGV0IG1lbnVJdGVtcyA9ICcnXG4gICAgaWYgKHRoaXMucHJvcHMuY29udGluZW50ID09PSAnTi4gQW1lcmljYScpIHtcbiAgICAgIG1lbnVJdGVtcyA9IChcbiAgICAgICAgPE1lbnU+XG4gICAgICAgICAgPE1lbnVJdGVtIHN0eWxlPXtzdHlsZX0gcHJpbWFyeVRleHQ9XCJDb3VudHJpZXNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQnV0dG9uQ2xpY2soJ05BJywgZmFsc2UsIG51bGwsIGZhbHNlKX0gLz5cbiAgICAgICAgICA8TWVudUl0ZW0gc3R5bGU9e3N0eWxlfSBwcmltYXJ5VGV4dD1cIkNhcGl0YWxzXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkJ1dHRvbkNsaWNrKCdOQScsIHRydWUsIG51bGwsIGZhbHNlKX0gLz5cbiAgICAgICAgICA8TWVudUl0ZW0gc3R5bGU9e3N0eWxlfSBwcmltYXJ5VGV4dD1cIlN0YXRlczogVVNBXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkJ1dHRvbkNsaWNrKCdOQScsIGZhbHNlLCAnVVMnLCBmYWxzZSl9IC8+XG4gICAgICAgICAgPE1lbnVJdGVtIHN0eWxlPXtzdHlsZX0gcHJpbWFyeVRleHQ9XCJDYXBpdGFsczogVVNBXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkJ1dHRvbkNsaWNrKCdOQScsIGZhbHNlLCAnVVMnLCB0cnVlKX0gLz5cbiAgICAgICAgICA8TWVudUl0ZW0gc3R5bGU9e3N0eWxlfSBwcmltYXJ5VGV4dD1cIlN0YXRlczogTWV4aWNvXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkJ1dHRvbkNsaWNrKCdOQScsIGZhbHNlLCAnTVgnLCBmYWxzZSl9IC8+XG4gICAgICAgICAgPE1lbnVJdGVtIHN0eWxlPXtzdHlsZX0gcHJpbWFyeVRleHQ9XCJDYXBpdGFsczogTWV4aWNvXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkJ1dHRvbkNsaWNrKCdOQScsIGZhbHNlLCAnTVgnLCB0cnVlKX0gLz5cbiAgICAgICAgICA8TWVudUl0ZW0gc3R5bGU9e3N0eWxlfSBwcmltYXJ5VGV4dD1cIlByb3ZpbmNlczogQ2FuYWRhXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkJ1dHRvbkNsaWNrKCdOQScsIGZhbHNlLCAnQ0EnLCBmYWxzZSl9IC8+XG4gICAgICAgICAgPE1lbnVJdGVtIHN0eWxlPXtzdHlsZX0gcHJpbWFyeVRleHQ9XCJDYXBpdGFsczogQ2FuYWRhXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkJ1dHRvbkNsaWNrKCdOQScsIGZhbHNlLCAnQ0EnLCB0cnVlKX0gLz5cbiAgICAgICAgPC9NZW51PlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5jb250aW5lbnQgPT09ICdTLiBBbWVyaWNhJykge1xuICAgICAgbWVudUl0ZW1zID0gKFxuICAgICAgICA8TWVudT5cbiAgICAgICAgICA8TWVudUl0ZW0gc3R5bGU9e3N0eWxlfSBwcmltYXJ5VGV4dD1cIkNvdW50cmllc1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25CdXR0b25DbGljaygnU0EnLCBmYWxzZSwgbnVsbCwgZmFsc2UpfSAvPlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17c3R5bGV9IHByaW1hcnlUZXh0PVwiQ2FwaXRhbHNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQnV0dG9uQ2xpY2soJ1NBJywgdHJ1ZSwgbnVsbCwgZmFsc2UpfSAvPlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17c3R5bGV9IHByaW1hcnlUZXh0PVwiU3RhdGVzOiBCcmF6aWxcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQnV0dG9uQ2xpY2soJ1NBJywgZmFsc2UsICdCUicsIGZhbHNlKX0gLz5cbiAgICAgICAgPC9NZW51PlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5jb250aW5lbnQgPT09ICdBZnJpY2EnKSB7XG4gICAgICBtZW51SXRlbXMgPSAoXG4gICAgICAgIDxNZW51PlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17c3R5bGV9IHByaW1hcnlUZXh0PVwiQ291bnRyaWVzXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkJ1dHRvbkNsaWNrKCdBRicsIGZhbHNlLCBudWxsLCBmYWxzZSl9IC8+XG4gICAgICAgICAgPE1lbnVJdGVtIHN0eWxlPXtzdHlsZX0gcHJpbWFyeVRleHQ9XCJDYXBpdGFsc1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25CdXR0b25DbGljaygnQUYnLCB0cnVlLCBudWxsLCBmYWxzZSl9IC8+XG4gICAgICAgICAgPE1lbnVJdGVtIHN0eWxlPXtzdHlsZX0gcHJpbWFyeVRleHQ9XCJQcm92aW5jZXM6IFNvdXRoIEFmcmljYVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25CdXR0b25DbGljaygnQUYnLCBmYWxzZSwgJ1pBJywgZmFsc2UpfSAvPlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17c3R5bGV9IHByaW1hcnlUZXh0PVwiQ2FwaXRhbHM6IFNvdXRoIEFmcmljYVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25CdXR0b25DbGljaygnQUYnLCBmYWxzZSwgJ1pBJywgdHJ1ZSl9IC8+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuY29udGluZW50ID09PSAnRXVyb3BlJykge1xuICAgICAgbWVudUl0ZW1zID0gKFxuICAgICAgICA8TWVudT5cbiAgICAgICAgICA8TWVudUl0ZW0gc3R5bGU9e3N0eWxlfSBwcmltYXJ5VGV4dD1cIkNvdW50cmllc1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25CdXR0b25DbGljaygnRVUnLCBmYWxzZSwgbnVsbCwgZmFsc2UpfSAvPlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17c3R5bGV9IHByaW1hcnlUZXh0PVwiQ2FwaXRhbHNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQnV0dG9uQ2xpY2soJ0VVJywgdHJ1ZSwgbnVsbCwgZmFsc2UpfSAvPlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17c3R5bGV9IHByaW1hcnlUZXh0PVwiQ291bnRyaWVzOiBVbml0ZWQgS2luZ2RvbVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25CdXR0b25DbGljaygnRVUnLCBmYWxzZSwgJ0dCJywgZmFsc2UpfSAvPlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17c3R5bGV9IHByaW1hcnlUZXh0PVwiQ2FwaXRhbHM6IFVuaXRlZCBLaW5nZG9tXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkJ1dHRvbkNsaWNrKCdFVScsIGZhbHNlLCAnR0InLCB0cnVlKX0gLz5cbiAgICAgICAgPC9NZW51PlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5jb250aW5lbnQgPT09ICdBc2lhJykge1xuICAgICAgbWVudUl0ZW1zID0gKFxuICAgICAgICA8TWVudT5cbiAgICAgICAgICA8TWVudUl0ZW0gc3R5bGU9e3N0eWxlfSBwcmltYXJ5VGV4dD1cIkNvdW50cmllc1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25CdXR0b25DbGljaygnQVMnLCBmYWxzZSwgbnVsbCwgZmFsc2UpfSAvPlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17c3R5bGV9IHByaW1hcnlUZXh0PVwiQ2FwaXRhbHNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQnV0dG9uQ2xpY2soJ0FTJywgdHJ1ZSwgbnVsbCwgZmFsc2UpfSAvPlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17c3R5bGV9IHByaW1hcnlUZXh0PVwiU3RhdGVzOiBJbmRpYVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25CdXR0b25DbGljaygnQVMnLCBmYWxzZSwgJ0lOJywgZmFsc2UpfSAvPlxuICAgICAgICA8L01lbnU+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmNvbnRpbmVudCA9PT0gJ09jZWFuaWEnKSB7XG4gICAgICBtZW51SXRlbXMgPSAoXG4gICAgICAgIDxNZW51PlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17c3R5bGV9IHByaW1hcnlUZXh0PVwiQ291bnRyaWVzXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkJ1dHRvbkNsaWNrKCdPQycsIGZhbHNlLCBudWxsLCBmYWxzZSl9IC8+XG4gICAgICAgICAgPE1lbnVJdGVtIHN0eWxlPXtzdHlsZX0gcHJpbWFyeVRleHQ9XCJDYXBpdGFsc1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25CdXR0b25DbGljaygnT0MnLCB0cnVlLCBudWxsLCBmYWxzZSl9IC8+XG4gICAgICAgICAgPE1lbnVJdGVtIHN0eWxlPXtzdHlsZX0gcHJpbWFyeVRleHQ9XCJQcm92aW5jZXM6IEF1c3RyYWxpYVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25CdXR0b25DbGljaygnT0MnLCBmYWxzZSwgJ0FVJywgZmFsc2UpfSAvPlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17c3R5bGV9IHByaW1hcnlUZXh0PVwiQ2FwaXRhbHM6IEF1c3RyYWxpYVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25CdXR0b25DbGljaygnT0MnLCBmYWxzZSwgJ0FVJywgdHJ1ZSl9IC8+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ25vbiB2YWxpZCBjb250aW5lbnQgbmFtZSBzZW50JylcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3RcIlxuICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogc2hvd09ySGlkZSwgbWFyZ2luUmlnaHQ6IDIwLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDM1LCAxMjEsIDE5NiwgMC45KScgfX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvdWNoVGFwfVxuXG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb250aW5lbnR9XG4gICAgICAgIDwvUmFpc2VkQnV0dG9uPlxuICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICBhbmNob3JFbD17dGhpcy5zdGF0ZS5hbmNob3JFbH1cbiAgICAgICAgICBhbmNob3JPcmlnaW49e3sgaG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ2JvdHRvbScgfX1cbiAgICAgICAgICB0YXJnZXRPcmlnaW49e3sgaG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCcgfX1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9XG4gICAgICAgID5cbiAgICAgICAgICB7bWVudUl0ZW1zfVxuICAgICAgICA8L1BvcG92ZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuQ29udGluZW50QnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgb25CdXR0b25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2hvd09ySGlkZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY29udGluZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG4iXX0=
