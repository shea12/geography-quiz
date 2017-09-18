'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  inputField: {
    position: 'absolute',
    zIndex: 2,
    marginTop: 8,
    marginLeft: '19%',
    paddingBottom: 10,
    fontColor: 'black'
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingLeft: 10,
    width: 240,
    fontColor: 'black',
    height: 36
  }
};

var InputForm = function (_React$Component) {
  _inherits(InputForm, _React$Component);

  function InputForm(props) {
    _classCallCheck(this, InputForm);

    var _this = _possibleConstructorReturn(this, (InputForm.__proto__ || Object.getPrototypeOf(InputForm)).call(this, props));

    _this.state = {
      value: '',
      placesArray: [],
      inputCheck: null,
      modifier: null
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    return _this;
  }

  _createClass(InputForm, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var mod = null;
      if (this.props.capitals) {
        mod = 'cap';
      } else {
        mod = 'name';
      }
      this.setState({
        placesArray: this.props.placesArray,
        modifier: mod
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var mod = null;
      if (this.props.capitals) {
        mod = 'cap';
      } else {
        mod = 'name';
      }
      this.setState({
        placesArray: nextProps.placesArray,
        modifier: mod
      });
    }
  }, {
    key: 'checkUserInput',
    value: function checkUserInput(modifier) {
      for (var p = 0; p < this.state.placesArray.length; p += 1) {
        if (this.state.value.toLowerCase() === this.state.placesArray[p][modifier].toLowerCase()) {
          return p;
        }
      }
      return -1;
    }

    // TODO: this method is doing a lot, will refactor logic 

  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(target) {
      if (target.charCode === 13) {
        var foundIndex = this.checkUserInput(this.state.modifier);
        // foundIndex will be the index in the array where the match was found
        // or false if not found
        if (foundIndex >= 0) {
          this.setState({ inputCheck: 'success', value: '' });
          // call App's handleNamedPlace function with place abbrv to shade in area
          this.props.handleNamedPlace(this.state.placesArray[foundIndex].abbrv);
          // remove named palce from list
          this.state.placesArray.splice(foundIndex, 1);
          this.setState({ placesArray: this.state.placesArray });

          // check if user has places left to name
          if (this.state.placesArray.length === 0) {
            // parameters (endtimer, gotallcountries?)
            this.props.handleTimer(false, true);
          } else {
            // user still has names/capitals left to name, keep going
          }
        } else {
          // user input does not match any modifier (name/capital) in placesArray
          this.setState({ inputCheck: 'error' });
        }
      } else {
        // user hasn't pressed enter
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ value: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { autoComplete: 'off', style: style.inputField },
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          { validationState: this.state.inputCheck },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reactBootstrap.FormControl, {
              style: style.input,
              type: 'text',
              value: this.state.value,
              placeholder: 'Enter name of place',
              onChange: this.handleChange,
              onKeyPress: this.handleKeyPress
            })
          )
        )
      );
    }
  }]);

  return InputForm;
}(_react2.default.Component);

exports.default = InputForm;


InputForm.propTypes = {
  placesArray: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  handleNamedPlace: _propTypes2.default.func.isRequired,
  handleTimer: _propTypes2.default.func.isRequired,
  capitals: _propTypes2.default.bool.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci9pbnB1dHNjb3JldGltZS9pbnB1dC5qc3giXSwibmFtZXMiOlsic3R5bGUiLCJpbnB1dEZpZWxkIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0JvdHRvbSIsImZvbnRDb2xvciIsImlucHV0IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIklucHV0Rm9ybSIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsInBsYWNlc0FycmF5IiwiaW5wdXRDaGVjayIsIm1vZGlmaWVyIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZUtleVByZXNzIiwibW9kIiwiY2FwaXRhbHMiLCJzZXRTdGF0ZSIsIm5leHRQcm9wcyIsInAiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsInRhcmdldCIsImNoYXJDb2RlIiwiZm91bmRJbmRleCIsImNoZWNrVXNlcklucHV0IiwiaGFuZGxlTmFtZWRQbGFjZSIsImFiYnJ2Iiwic3BsaWNlIiwiaGFuZGxlVGltZXIiLCJlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRO0FBQ1pDLGNBQVk7QUFDVkMsY0FBVSxVQURBO0FBRVZDLFlBQVEsQ0FGRTtBQUdWQyxlQUFXLENBSEQ7QUFJVkMsZ0JBQVksS0FKRjtBQUtWQyxtQkFBZSxFQUxMO0FBTVZDLGVBQVc7QUFORCxHQURBO0FBU1pDLFNBQU87QUFDTEMscUJBQWlCLDBCQURaO0FBRUxDLGlCQUFhLEVBRlI7QUFHTEMsV0FBTyxHQUhGO0FBSUxKLGVBQVcsT0FKTjtBQUtMSyxZQUFRO0FBTEg7QUFUSyxDQUFkOztJQWtCcUJDLFM7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aEIsTUFBTUMsVUFBdEM7QUFDRTtBQUFBO0FBQUEsWUFBVyxpQkFBaUIsS0FBS2MsS0FBTCxDQUFXRyxVQUF2QztBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UscUJBQU9sQixNQUFNUSxLQURmO0FBRUUsb0JBQUssTUFGUDtBQUdFLHFCQUFPLEtBQUtPLEtBQUwsQ0FBV0MsS0FIcEI7QUFJRSwyQkFBWSxxQkFKZDtBQUtFLHdCQUFVLEtBQUtJLFlBTGpCO0FBTUUsMEJBQVksS0FBS0U7QUFObkI7QUFERjtBQURGO0FBREYsT0FERjtBQWdCRDs7OztFQXBHb0MsZ0JBQU1pQixTOztrQkFBeEIxQixTOzs7QUF1R3JCQSxVQUFVMkIsU0FBVixHQUFzQjtBQUNwQnZCLGVBQWEsb0JBQVV3QixPQUFWLENBQWtCLG9CQUFVQyxNQUE1QixFQUFvQ0MsVUFEN0I7QUFFcEJULG9CQUFrQixvQkFBVVUsSUFBVixDQUFlRCxVQUZiO0FBR3BCTixlQUFhLG9CQUFVTyxJQUFWLENBQWVELFVBSFI7QUFJcEJuQixZQUFVLG9CQUFVcUIsSUFBVixDQUFlRjtBQUpMLENBQXRCIiwiZmlsZSI6ImlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgZm9ybSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuY29uc3Qgc3R5bGUgPSB7XG4gIGlucHV0RmllbGQ6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB6SW5kZXg6IDIsXG4gICAgbWFyZ2luVG9wOiA4LFxuICAgIG1hcmdpbkxlZnQ6ICcxOSUnLFxuICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICAgIGZvbnRDb2xvcjogJ2JsYWNrJyxcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSknLFxuICAgIHBhZGRpbmdMZWZ0OiAxMCxcbiAgICB3aWR0aDogMjQwLFxuICAgIGZvbnRDb2xvcjogJ2JsYWNrJyxcbiAgICBoZWlnaHQ6IDM2LFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgICBwbGFjZXNBcnJheTogW10sXG4gICAgICBpbnB1dENoZWNrOiBudWxsLFxuICAgICAgbW9kaWZpZXI6IG51bGwsXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVLZXlQcmVzcyA9IHRoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGxldCBtb2QgPSBudWxsXG4gICAgaWYgKHRoaXMucHJvcHMuY2FwaXRhbHMpIHtcbiAgICAgIG1vZCA9ICdjYXAnXG4gICAgfSBlbHNlIHtcbiAgICAgIG1vZCA9ICduYW1lJ1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBsYWNlc0FycmF5OiB0aGlzLnByb3BzLnBsYWNlc0FycmF5LFxuICAgICAgbW9kaWZpZXI6IG1vZCxcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBsZXQgbW9kID0gbnVsbFxuICAgIGlmICh0aGlzLnByb3BzLmNhcGl0YWxzKSB7XG4gICAgICBtb2QgPSAnY2FwJ1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2QgPSAnbmFtZSdcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwbGFjZXNBcnJheTogbmV4dFByb3BzLnBsYWNlc0FycmF5LFxuICAgICAgbW9kaWZpZXI6IG1vZCxcbiAgICB9KVxuICB9XG5cbiAgY2hlY2tVc2VySW5wdXQobW9kaWZpZXIpIHtcbiAgICBmb3IgKGxldCBwID0gMDsgcCA8IHRoaXMuc3RhdGUucGxhY2VzQXJyYXkubGVuZ3RoOyBwICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuc3RhdGUucGxhY2VzQXJyYXlbcF1bbW9kaWZpZXJdLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgcmV0dXJuIHBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBUT0RPOiB0aGlzIG1ldGhvZCBpcyBkb2luZyBhIGxvdCwgd2lsbCByZWZhY3RvciBsb2dpYyBcbiAgaGFuZGxlS2V5UHJlc3ModGFyZ2V0KSB7XG4gICAgaWYgKHRhcmdldC5jaGFyQ29kZSA9PT0gMTMpIHtcbiAgICAgIGNvbnN0IGZvdW5kSW5kZXggPSB0aGlzLmNoZWNrVXNlcklucHV0KHRoaXMuc3RhdGUubW9kaWZpZXIpXG4gICAgICAvLyBmb3VuZEluZGV4IHdpbGwgYmUgdGhlIGluZGV4IGluIHRoZSBhcnJheSB3aGVyZSB0aGUgbWF0Y2ggd2FzIGZvdW5kXG4gICAgICAvLyBvciBmYWxzZSBpZiBub3QgZm91bmRcbiAgICAgIGlmIChmb3VuZEluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0Q2hlY2s6ICdzdWNjZXNzJywgdmFsdWU6ICcnIH0pXG4gICAgICAgIC8vIGNhbGwgQXBwJ3MgaGFuZGxlTmFtZWRQbGFjZSBmdW5jdGlvbiB3aXRoIHBsYWNlIGFiYnJ2IHRvIHNoYWRlIGluIGFyZWFcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVOYW1lZFBsYWNlKHRoaXMuc3RhdGUucGxhY2VzQXJyYXlbZm91bmRJbmRleF0uYWJicnYpXG4gICAgICAgIC8vIHJlbW92ZSBuYW1lZCBwYWxjZSBmcm9tIGxpc3RcbiAgICAgICAgdGhpcy5zdGF0ZS5wbGFjZXNBcnJheS5zcGxpY2UoZm91bmRJbmRleCwgMSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBsYWNlc0FycmF5OiB0aGlzLnN0YXRlLnBsYWNlc0FycmF5IH0pXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdXNlciBoYXMgcGxhY2VzIGxlZnQgdG8gbmFtZVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wbGFjZXNBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAvLyBwYXJhbWV0ZXJzIChlbmR0aW1lciwgZ290YWxsY291bnRyaWVzPylcbiAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZVRpbWVyKGZhbHNlLCB0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHVzZXIgc3RpbGwgaGFzIG5hbWVzL2NhcGl0YWxzIGxlZnQgdG8gbmFtZSwga2VlcCBnb2luZ1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2VyIGlucHV0IGRvZXMgbm90IG1hdGNoIGFueSBtb2RpZmllciAobmFtZS9jYXBpdGFsKSBpbiBwbGFjZXNBcnJheVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRDaGVjazogJ2Vycm9yJyB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1c2VyIGhhc24ndCBwcmVzc2VkIGVudGVyXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHN0eWxlPXtzdHlsZS5pbnB1dEZpZWxkfT5cbiAgICAgICAgPEZvcm1Hcm91cCB2YWxpZGF0aW9uU3RhdGU9e3RoaXMuc3RhdGUuaW5wdXRDaGVja30+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuaW5wdXR9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZSBvZiBwbGFjZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVLZXlQcmVzc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG5JbnB1dEZvcm0ucHJvcFR5cGVzID0ge1xuICBwbGFjZXNBcnJheTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcbiAgaGFuZGxlTmFtZWRQbGFjZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlVGltZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNhcGl0YWxzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufVxuIl19
