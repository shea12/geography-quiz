'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _af = require('./continents/af');

var _af2 = _interopRequireDefault(_af);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  buttonGrouping: {
    position: 'absolute',
    padding: 0,
    marginLeft: '28%',
    marginTop: 8,
    display: 'inline-block'
  }
};

var Continents = function (_React$Component) {
  _inherits(Continents, _React$Component);

  function Continents(props) {
    _classCallCheck(this, Continents);

    var _this = _possibleConstructorReturn(this, (Continents.__proto__ || Object.getPrototypeOf(Continents)).call(this, props));

    _this.state = {
      visible: true
    };

    _this.onButtonClick = _this.onButtonClick.bind(_this);
    return _this;
  }

  /* PARAMS: 
      selContinent: string: 2 Letter Continent Abbreviation,
      countryCaps: boolean: Country capitals quiz,
      selCountry: string: 2 Letter Country Abbreviation
      stateCaps: boolean: State capitals quiz
  */


  _createClass(Continents, [{
    key: 'onButtonClick',
    value: function onButtonClick(selContinent, countryCaps, selCountry, stateCaps) {
      if (stateCaps) {
        // user selects state capitals quiz
        this.props.handleLocation(selContinent, selCountry, true);
      } else if (!stateCaps && !countryCaps) {
        // user selects states quiz
        this.props.handleLocation(selContinent, selCountry, false);
      } else if (countryCaps) {
        // user selects country capitals quiz
        // console.log('country caps')
        this.props.handleLocation(selContinent, null, true);
      } else {
        // user selects countries of continent quiz
        this.props.handleLocation(selContinent, null, false);
      }
      this.setVisibilityOfButtons(false);
    }
  }, {
    key: 'setVisibilityOfButtons',
    value: function setVisibilityOfButtons(visibility) {
      this.setState({ visible: visibility });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: style.buttonGrouping },
        _react2.default.createElement(_af2.default, { continent: 'N. America', onButtonClick: this.onButtonClick, showOrHide: this.state.visible }),
        _react2.default.createElement(_af2.default, { continent: 'S. America', onButtonClick: this.onButtonClick, showOrHide: this.state.visible }),
        _react2.default.createElement(_af2.default, { continent: 'Africa', onButtonClick: this.onButtonClick, showOrHide: this.state.visible }),
        _react2.default.createElement(_af2.default, { continent: 'Asia', onButtonClick: this.onButtonClick, showOrHide: this.state.visible }),
        _react2.default.createElement(_af2.default, { continent: 'Europe', onButtonClick: this.onButtonClick, showOrHide: this.state.visible }),
        _react2.default.createElement(_af2.default, { continent: 'Oceania', onButtonClick: this.onButtonClick, showOrHide: this.state.visible })
      );
    }
  }]);

  return Continents;
}(_react2.default.Component);

exports.default = Continents;


Continents.propTypes = {
  handleLocation: _propTypes2.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci9Db250aW5lbnRzLmpzeCJdLCJuYW1lcyI6WyJzdHlsZSIsImJ1dHRvbkdyb3VwaW5nIiwicG9zaXRpb24iLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJDb250aW5lbnRzIiwicHJvcHMiLCJzdGF0ZSIsInZpc2libGUiLCJvbkJ1dHRvbkNsaWNrIiwiYmluZCIsInNlbENvbnRpbmVudCIsImNvdW50cnlDYXBzIiwic2VsQ291bnRyeSIsInN0YXRlQ2FwcyIsImhhbmRsZUxvY2F0aW9uIiwic2V0VmlzaWJpbGl0eU9mQnV0dG9ucyIsInZpc2liaWxpdHkiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUTtBQUNaQyxrQkFBZ0I7QUFDZEMsY0FBVSxVQURJO0FBRWRDLGFBQVMsQ0FGSztBQUdkQyxnQkFBWSxLQUhFO0FBSWRDLGVBQVcsQ0FKRztBQUtkQyxhQUFTO0FBTEs7QUFESixDQUFkOztJQVVxQkMsVTs7O0FBQ25CLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTO0FBREUsS0FBYjs7QUFJQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCO0FBTmlCO0FBT2xCOztBQUVEOzs7Ozs7Ozs7O2tDQU1jQyxZLEVBQWNDLFcsRUFBYUMsVSxFQUFZQyxTLEVBQVc7QUFDOUQsVUFBSUEsU0FBSixFQUFlO0FBQ2I7QUFDQSxhQUFLUixLQUFMLENBQVdTLGNBQVgsQ0FBMEJKLFlBQTFCLEVBQXdDRSxVQUF4QyxFQUFvRCxJQUFwRDtBQUNELE9BSEQsTUFHTyxJQUFJLENBQUNDLFNBQUQsSUFBYyxDQUFDRixXQUFuQixFQUFnQztBQUNyQztBQUNBLGFBQUtOLEtBQUwsQ0FBV1MsY0FBWCxDQUEwQkosWUFBMUIsRUFBd0NFLFVBQXhDLEVBQW9ELEtBQXBEO0FBQ0QsT0FITSxNQUdBLElBQUlELFdBQUosRUFBaUI7QUFDdEI7QUFDQTtBQUNBLGFBQUtOLEtBQUwsQ0FBV1MsY0FBWCxDQUEwQkosWUFBMUIsRUFBd0MsSUFBeEMsRUFBOEMsSUFBOUM7QUFDRCxPQUpNLE1BSUE7QUFDTDtBQUNBLGFBQUtMLEtBQUwsQ0FBV1MsY0FBWCxDQUEwQkosWUFBMUIsRUFBd0MsSUFBeEMsRUFBOEMsS0FBOUM7QUFDRDtBQUNELFdBQUtLLHNCQUFMLENBQTRCLEtBQTVCO0FBQ0Q7OzsyQ0FFc0JDLFUsRUFBWTtBQUNqQyxXQUFLQyxRQUFMLENBQWMsRUFBRVYsU0FBU1MsVUFBWCxFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssT0FBT25CLE1BQU1DLGNBQWxCO0FBQ0Usc0RBQWlCLFdBQVUsWUFBM0IsRUFBd0MsZUFBZSxLQUFLVSxhQUE1RCxFQUEyRSxZQUFZLEtBQUtGLEtBQUwsQ0FBV0MsT0FBbEcsR0FERjtBQUVFLHNEQUFpQixXQUFVLFlBQTNCLEVBQXdDLGVBQWUsS0FBS0MsYUFBNUQsRUFBMkUsWUFBWSxLQUFLRixLQUFMLENBQVdDLE9BQWxHLEdBRkY7QUFHRSxzREFBaUIsV0FBVSxRQUEzQixFQUFvQyxlQUFlLEtBQUtDLGFBQXhELEVBQXVFLFlBQVksS0FBS0YsS0FBTCxDQUFXQyxPQUE5RixHQUhGO0FBSUUsc0RBQWlCLFdBQVUsTUFBM0IsRUFBa0MsZUFBZSxLQUFLQyxhQUF0RCxFQUFxRSxZQUFZLEtBQUtGLEtBQUwsQ0FBV0MsT0FBNUYsR0FKRjtBQUtFLHNEQUFpQixXQUFVLFFBQTNCLEVBQW9DLGVBQWUsS0FBS0MsYUFBeEQsRUFBdUUsWUFBWSxLQUFLRixLQUFMLENBQVdDLE9BQTlGLEdBTEY7QUFNRSxzREFBaUIsV0FBVSxTQUEzQixFQUFxQyxlQUFlLEtBQUtDLGFBQXpELEVBQXdFLFlBQVksS0FBS0YsS0FBTCxDQUFXQyxPQUEvRjtBQU5GLE9BREY7QUFVRDs7OztFQWpEcUMsZ0JBQU1XLFM7O2tCQUF6QmQsVTs7O0FBb0RyQkEsV0FBV2UsU0FBWCxHQUF1QjtBQUNyQkwsa0JBQWdCLG9CQUFVTSxJQUFWLENBQWVDO0FBRFYsQ0FBdkIiLCJmaWxlIjoiQ29udGluZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBDb250aW5lbnRCdXR0b24gZnJvbSAnLi9jb250aW5lbnRzL2FmJ1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgYnV0dG9uR3JvdXBpbmc6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbkxlZnQ6ICcyOCUnLFxuICAgIG1hcmdpblRvcDogOCxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGluZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgfVxuXG4gICAgdGhpcy5vbkJ1dHRvbkNsaWNrID0gdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIC8qIFBBUkFNUzogXG4gICAgICBzZWxDb250aW5lbnQ6IHN0cmluZzogMiBMZXR0ZXIgQ29udGluZW50IEFiYnJldmlhdGlvbixcbiAgICAgIGNvdW50cnlDYXBzOiBib29sZWFuOiBDb3VudHJ5IGNhcGl0YWxzIHF1aXosXG4gICAgICBzZWxDb3VudHJ5OiBzdHJpbmc6IDIgTGV0dGVyIENvdW50cnkgQWJicmV2aWF0aW9uXG4gICAgICBzdGF0ZUNhcHM6IGJvb2xlYW46IFN0YXRlIGNhcGl0YWxzIHF1aXpcbiAgKi9cbiAgb25CdXR0b25DbGljayhzZWxDb250aW5lbnQsIGNvdW50cnlDYXBzLCBzZWxDb3VudHJ5LCBzdGF0ZUNhcHMpIHtcbiAgICBpZiAoc3RhdGVDYXBzKSB7XG4gICAgICAvLyB1c2VyIHNlbGVjdHMgc3RhdGUgY2FwaXRhbHMgcXVpelxuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVMb2NhdGlvbihzZWxDb250aW5lbnQsIHNlbENvdW50cnksIHRydWUpXG4gICAgfSBlbHNlIGlmICghc3RhdGVDYXBzICYmICFjb3VudHJ5Q2Fwcykge1xuICAgICAgLy8gdXNlciBzZWxlY3RzIHN0YXRlcyBxdWl6XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUxvY2F0aW9uKHNlbENvbnRpbmVudCwgc2VsQ291bnRyeSwgZmFsc2UpXG4gICAgfSBlbHNlIGlmIChjb3VudHJ5Q2Fwcykge1xuICAgICAgLy8gdXNlciBzZWxlY3RzIGNvdW50cnkgY2FwaXRhbHMgcXVpelxuICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50cnkgY2FwcycpXG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUxvY2F0aW9uKHNlbENvbnRpbmVudCwgbnVsbCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdXNlciBzZWxlY3RzIGNvdW50cmllcyBvZiBjb250aW5lbnQgcXVpelxuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVMb2NhdGlvbihzZWxDb250aW5lbnQsIG51bGwsIGZhbHNlKVxuICAgIH1cbiAgICB0aGlzLnNldFZpc2liaWxpdHlPZkJ1dHRvbnMoZmFsc2UpXG4gIH1cblxuICBzZXRWaXNpYmlsaXR5T2ZCdXR0b25zKHZpc2liaWxpdHkpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogdmlzaWJpbGl0eSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZS5idXR0b25Hcm91cGluZ30+XG4gICAgICAgIDxDb250aW5lbnRCdXR0b24gY29udGluZW50PVwiTi4gQW1lcmljYVwiIG9uQnV0dG9uQ2xpY2s9e3RoaXMub25CdXR0b25DbGlja30gc2hvd09ySGlkZT17dGhpcy5zdGF0ZS52aXNpYmxlfSAvPlxuICAgICAgICA8Q29udGluZW50QnV0dG9uIGNvbnRpbmVudD1cIlMuIEFtZXJpY2FcIiBvbkJ1dHRvbkNsaWNrPXt0aGlzLm9uQnV0dG9uQ2xpY2t9IHNob3dPckhpZGU9e3RoaXMuc3RhdGUudmlzaWJsZX0gLz5cbiAgICAgICAgPENvbnRpbmVudEJ1dHRvbiBjb250aW5lbnQ9XCJBZnJpY2FcIiBvbkJ1dHRvbkNsaWNrPXt0aGlzLm9uQnV0dG9uQ2xpY2t9IHNob3dPckhpZGU9e3RoaXMuc3RhdGUudmlzaWJsZX0gLz5cbiAgICAgICAgPENvbnRpbmVudEJ1dHRvbiBjb250aW5lbnQ9XCJBc2lhXCIgb25CdXR0b25DbGljaz17dGhpcy5vbkJ1dHRvbkNsaWNrfSBzaG93T3JIaWRlPXt0aGlzLnN0YXRlLnZpc2libGV9IC8+XG4gICAgICAgIDxDb250aW5lbnRCdXR0b24gY29udGluZW50PVwiRXVyb3BlXCIgb25CdXR0b25DbGljaz17dGhpcy5vbkJ1dHRvbkNsaWNrfSBzaG93T3JIaWRlPXt0aGlzLnN0YXRlLnZpc2libGV9IC8+XG4gICAgICAgIDxDb250aW5lbnRCdXR0b24gY29udGluZW50PVwiT2NlYW5pYVwiIG9uQnV0dG9uQ2xpY2s9e3RoaXMub25CdXR0b25DbGlja30gc2hvd09ySGlkZT17dGhpcy5zdGF0ZS52aXNpYmxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkNvbnRpbmVudHMucHJvcFR5cGVzID0ge1xuICBoYW5kbGVMb2NhdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ==
