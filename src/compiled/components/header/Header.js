'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _title = require('./headtitle/title');

var _title2 = _interopRequireDefault(_title);

var _headercard = require('./headtitle/headercard');

var _headercard2 = _interopRequireDefault(_headercard);

var _categorybutton = require('./buttons/categorybutton');

var _categorybutton2 = _interopRequireDefault(_categorybutton);

var _Continents = require('./Continents');

var _Continents2 = _interopRequireDefault(_Continents);

var _InputScoreTime = require('./InputScoreTime');

var _InputScoreTime2 = _interopRequireDefault(_InputScoreTime);

var _BackStart = require('./BackStart');

var _BackStart2 = _interopRequireDefault(_BackStart);

var _backbutton = require('./buttons/backbutton');

var _backbutton2 = _interopRequireDefault(_backbutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


var style = {
  buttonGrouping: {
    position: 'absolute',
    zIndex: 2,
    display: 'inline-block',
    marginLeft: '24.5%'
  }

  // LINT: component should be written as a pure function
};
var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var categoryContinentButton = null;
      var categoryContinent = null;
      var categoryCityButton = null;
      var categoryCity = null;
      var categoryWaterButton = null;
      var categoryWater = null;
      var categoryLandformsButton = null;
      var categoryLandforms = null;
      var categoryLeadersButton = null;
      var categoryLeaders = null;

      var back = null;
      var backstart = null;
      var inscoretime = null;
      var quiztitle = null;

      if (this.props.selectedCategory === 'CTN') {
        // continents category has been selected, show subcategories
        if (this.props.selectedContinent !== '') {
          // user selected continent, show start & back buttons, hide continents, inscoretime
          categoryContinent = _react2.default.createElement('div', null);
          backstart = _react2.default.createElement(_BackStart2.default, {
            handleStart: this.props.handleStart,
            handleBack: this.props.handleBack
          });
          inscoretime = _react2.default.createElement('div', null);
          quiztitle = _react2.default.createElement(
            'p',
            { style: { position: 'absolute', zIndex: 2, marginLeft: '20%' } },
            'Can you name all ',
            this.props.placesArray.length,
            ' ',
            this.props.quizTitle,
            '?'
          );
        } else if (this.props.selectedContinent === '') {
          // hide inscoretime, backstart buttons when no continent is selected
          categoryContinent = _react2.default.createElement(_Continents2.default, { handleLocation: this.props.handleLocation });
          back = _react2.default.createElement(_backbutton2.default, { handleBack: this.props.handleBack });
          backstart = _react2.default.createElement('div', null);
          inscoretime = _react2.default.createElement('div', null);
        }

        if (this.props.timing) {
          // render timer, score, and input when start is clicked
          inscoretime = _react2.default.createElement(_InputScoreTime2.default, {
            placesArray: this.props.placesArray,
            continent: this.props.selectedContinent,
            timing: this.props.timing,
            capitals: this.props.capitals,
            handleBack: this.props.handleBack,
            handleNamedPlace: this.props.handleNamedPlace,
            handleTimer: this.props.handleTimer,
            getFinalTime: this.props.getFinalTime,
            handleGiveUp: this.props.handleGiveUp,
            quizTitle: this.props.quizTitle
          });
          backstart = _react2.default.createElement('div', null);
          quiztitle = _react2.default.createElement('div', null);
        } else {
          // need to make a stop button
        }
      } else if (this.props.selectedCategory === 'GTC') {
        // Guess the City feature is not ready yet
        back = _react2.default.createElement(_backbutton2.default, { handleBack: this.props.handleBack });
        categoryCity = _react2.default.createElement(
          'div',
          { style: { position: 'absolute', zIndex: 2, marginLeft: '24%' } },
          _react2.default.createElement(
            'p',
            null,
            'Sorry, this feature is not quite ready yet. It was inspired by @Mapbox users #spotted tweets, so in the meantime check those out!'
          )
        );
      } else if (this.props.selectedCategory === 'BOW') {
        // Bodies of water are not ready yet, need to create map layers
        back = _react2.default.createElement(_backbutton2.default, { handleBack: this.props.handleBack });
        categoryWater = _react2.default.createElement(
          'div',
          { style: { position: 'absolute', zIndex: 2, marginLeft: '26%' } },
          _react2.default.createElement(
            'p',
            null,
            'Sorry, quizzes about bodies of water are not ready yet. Hit the back button to choose another category.'
          )
        );
      } else if (this.props.selectedCategory === 'LDF') {
        // landforms are not ready yet, need to create map layers
        back = _react2.default.createElement(_backbutton2.default, { handleBack: this.props.handleBack });
        categoryLandforms = _react2.default.createElement(
          'div',
          { style: { position: 'absolute', zIndex: 2, marginLeft: '30%' } },
          _react2.default.createElement(
            'p',
            null,
            'Sorry, landform quizzes are not ready yet. Hit the back button to choose another category.'
          )
        );
      } else if (this.props.selectedCategory === 'LRS') {
        // landforms are not ready yet, need to create map layers
        back = _react2.default.createElement(_backbutton2.default, { handleBack: this.props.handleBack });
        categoryLeaders = _react2.default.createElement(
          'div',
          { style: { position: 'absolute', zIndex: 2, marginLeft: '30%' } },
          _react2.default.createElement(
            'p',
            null,
            'Sorry, world leader quizzes are not ready yet. Hit the back button to choose another category.'
          )
        );
      } else if (this.props.selectedCategory === '') {
        // category has NOT been selected, show category buttons
        categoryContinentButton = _react2.default.createElement(_categorybutton2.default, { title: 'Continents', code: 'CTN', handleCategorySelection: this.props.handleCategorySelection });
        categoryCityButton = _react2.default.createElement(_categorybutton2.default, { title: 'Guess the City', code: 'GTC', handleCategorySelection: this.props.handleCategorySelection });
        categoryWaterButton = _react2.default.createElement(_categorybutton2.default, { title: 'Bodies of Water', code: 'BOW', handleCategorySelection: this.props.handleCategorySelection });
        categoryLandformsButton = _react2.default.createElement(_categorybutton2.default, { title: 'Landforms', code: 'LDF', handleCategorySelection: this.props.handleCategorySelection });
        categoryLeadersButton = _react2.default.createElement(_categorybutton2.default, { title: 'Leaders', code: 'LRS', handleCategorySelection: this.props.handleCategorySelection });
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_title2.default, null),
        _react2.default.createElement(_headercard2.default, null),
        _react2.default.createElement(
          'div',
          { style: style.buttonGrouping },
          categoryContinentButton,
          categoryCityButton,
          categoryWaterButton,
          categoryLandformsButton,
          categoryLeadersButton
        ),
        back,
        categoryContinent,
        categoryCity,
        categoryWater,
        categoryLandforms,
        categoryLeaders,
        backstart,
        inscoretime,
        quiztitle
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;


Header.propTypes = {
  placesArray: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  selectedContinent: _propTypes2.default.string.isRequired,
  quizTitle: _propTypes2.default.string.isRequired,
  capitals: _propTypes2.default.bool.isRequired,
  timing: _propTypes2.default.bool.isRequired,
  selectedCategory: _propTypes2.default.string.isRequired,
  handleCategorySelection: _propTypes2.default.func.isRequired,
  handleLocation: _propTypes2.default.func.isRequired,
  handleNamedPlace: _propTypes2.default.func.isRequired,
  handleTimer: _propTypes2.default.func.isRequired,
  handleBack: _propTypes2.default.func.isRequired,
  handleStart: _propTypes2.default.func.isRequired,
  getFinalTime: _propTypes2.default.func.isRequired,
  handleGiveUp: _propTypes2.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiYnV0dG9uR3JvdXBpbmciLCJwb3NpdGlvbiIsInpJbmRleCIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwiSGVhZGVyIiwiY2F0ZWdvcnlDb250aW5lbnRCdXR0b24iLCJjYXRlZ29yeUNvbnRpbmVudCIsImNhdGVnb3J5Q2l0eUJ1dHRvbiIsImNhdGVnb3J5Q2l0eSIsImNhdGVnb3J5V2F0ZXJCdXR0b24iLCJjYXRlZ29yeVdhdGVyIiwiY2F0ZWdvcnlMYW5kZm9ybXNCdXR0b24iLCJjYXRlZ29yeUxhbmRmb3JtcyIsImNhdGVnb3J5TGVhZGVyc0J1dHRvbiIsImNhdGVnb3J5TGVhZGVycyIsImJhY2siLCJiYWNrc3RhcnQiLCJpbnNjb3JldGltZSIsInF1aXp0aXRsZSIsInByb3BzIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkQ29udGluZW50IiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVCYWNrIiwicGxhY2VzQXJyYXkiLCJsZW5ndGgiLCJxdWl6VGl0bGUiLCJoYW5kbGVMb2NhdGlvbiIsInRpbWluZyIsImNhcGl0YWxzIiwiaGFuZGxlTmFtZWRQbGFjZSIsImhhbmRsZVRpbWVyIiwiZ2V0RmluYWxUaW1lIiwiaGFuZGxlR2l2ZVVwIiwiaGFuZGxlQ2F0ZWdvcnlTZWxlY3Rpb24iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFSQTs7O0FBVUEsSUFBTUEsUUFBUTtBQUNaQyxrQkFBZ0I7QUFDZEMsY0FBVSxVQURJO0FBRWRDLFlBQVEsQ0FGTTtBQUdkQyxh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LFVBUHZCO0FBUWpCWixrQkFBZ0Isb0JBQVVlLElBQVYsQ0FBZUgsVUFSZDtBQVNqQlQsb0JBQWtCLG9CQUFVWSxJQUFWLENBQWVILFVBVGhCO0FBVWpCUixlQUFhLG9CQUFVVyxJQUFWLENBQWVILFVBVlg7QUFXakJoQixjQUFZLG9CQUFVbUIsSUFBVixDQUFlSCxVQVhWO0FBWWpCakIsZUFBYSxvQkFBVW9CLElBQVYsQ0FBZUgsVUFaWDtBQWFqQlAsZ0JBQWMsb0JBQVVVLElBQVYsQ0FBZUgsVUFiWjtBQWNqQk4sZ0JBQWMsb0JBQVVTLElBQVYsQ0FBZUg7QUFkWixDQUFuQiIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBUaXRsZSBmcm9tICcuL2hlYWR0aXRsZS90aXRsZSdcbmltcG9ydCBIZWFkZXJDYXJkIGZyb20gJy4vaGVhZHRpdGxlL2hlYWRlcmNhcmQnXG5pbXBvcnQgQ2F0ZWdvcnlCdXR0b24gZnJvbSAnLi9idXR0b25zL2NhdGVnb3J5YnV0dG9uJ1xuaW1wb3J0IENvbnRpbmVudHMgZnJvbSAnLi9Db250aW5lbnRzJ1xuaW1wb3J0IElucHV0U2NvcmVUaW1lIGZyb20gJy4vSW5wdXRTY29yZVRpbWUnXG5pbXBvcnQgQmFja1N0YXJ0IGZyb20gJy4vQmFja1N0YXJ0J1xuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSAnLi9idXR0b25zL2JhY2tidXR0b24nXG5cbmNvbnN0IHN0eWxlID0ge1xuICBidXR0b25Hcm91cGluZzoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHpJbmRleDogMixcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtYXJnaW5MZWZ0OiAnMjQuNSUnLFxuICB9LFxufVxuXG4vLyBMSU5UOiBjb21wb25lbnQgc2hvdWxkIGJlIHdyaXR0ZW4gYXMgYSBwdXJlIGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IGNhdGVnb3J5Q29udGluZW50QnV0dG9uID0gbnVsbFxuICAgIGxldCBjYXRlZ29yeUNvbnRpbmVudCA9IG51bGxcbiAgICBsZXQgY2F0ZWdvcnlDaXR5QnV0dG9uID0gbnVsbFxuICAgIGxldCBjYXRlZ29yeUNpdHkgPSBudWxsXG4gICAgbGV0IGNhdGVnb3J5V2F0ZXJCdXR0b24gPSBudWxsXG4gICAgbGV0IGNhdGVnb3J5V2F0ZXIgPSBudWxsXG4gICAgbGV0IGNhdGVnb3J5TGFuZGZvcm1zQnV0dG9uID0gbnVsbFxuICAgIGxldCBjYXRlZ29yeUxhbmRmb3JtcyA9IG51bGxcbiAgICBsZXQgY2F0ZWdvcnlMZWFkZXJzQnV0dG9uID0gbnVsbFxuICAgIGxldCBjYXRlZ29yeUxlYWRlcnMgPSBudWxsXG5cbiAgICBsZXQgYmFjayA9IG51bGxcbiAgICBsZXQgYmFja3N0YXJ0ID0gbnVsbFxuICAgIGxldCBpbnNjb3JldGltZSA9IG51bGxcbiAgICBsZXQgcXVpenRpdGxlID0gbnVsbFxuXG4gICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRDYXRlZ29yeSA9PT0gJ0NUTicpIHtcbiAgICAgIC8vIGNvbnRpbmVudHMgY2F0ZWdvcnkgaGFzIGJlZW4gc2VsZWN0ZWQsIHNob3cgc3ViY2F0ZWdvcmllc1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRDb250aW5lbnQgIT09ICcnKSB7XG4gICAgICAgIC8vIHVzZXIgc2VsZWN0ZWQgY29udGluZW50LCBzaG93IHN0YXJ0ICYgYmFjayBidXR0b25zLCBoaWRlIGNvbnRpbmVudHMsIGluc2NvcmV0aW1lXG4gICAgICAgIGNhdGVnb3J5Q29udGluZW50ID0gPGRpdiAvPlxuICAgICAgICBiYWNrc3RhcnQgPSAoXG4gICAgICAgICAgPEJhY2tTdGFydFxuICAgICAgICAgICAgaGFuZGxlU3RhcnQ9e3RoaXMucHJvcHMuaGFuZGxlU3RhcnR9XG4gICAgICAgICAgICBoYW5kbGVCYWNrPXt0aGlzLnByb3BzLmhhbmRsZUJhY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgICBpbnNjb3JldGltZSA9IDxkaXYgLz5cbiAgICAgICAgcXVpenRpdGxlID0gKFxuICAgICAgICAgIDxwIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB6SW5kZXg6IDIsIG1hcmdpbkxlZnQ6ICcyMCUnIH19PlxuICAgICAgICAgICAgQ2FuIHlvdSBuYW1lIGFsbCB7dGhpcy5wcm9wcy5wbGFjZXNBcnJheS5sZW5ndGh9IHt0aGlzLnByb3BzLnF1aXpUaXRsZX0/XG4gICAgICAgICAgPC9wPlxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRDb250aW5lbnQgPT09ICcnKSB7XG4gICAgICAgIC8vIGhpZGUgaW5zY29yZXRpbWUsIGJhY2tzdGFydCBidXR0b25zIHdoZW4gbm8gY29udGluZW50IGlzIHNlbGVjdGVkXG4gICAgICAgIGNhdGVnb3J5Q29udGluZW50ID0gPENvbnRpbmVudHMgaGFuZGxlTG9jYXRpb249e3RoaXMucHJvcHMuaGFuZGxlTG9jYXRpb259IC8+XG4gICAgICAgIGJhY2sgPSA8QmFja0J1dHRvbiBoYW5kbGVCYWNrPXt0aGlzLnByb3BzLmhhbmRsZUJhY2t9IC8+XG4gICAgICAgIGJhY2tzdGFydCA9IDxkaXYgLz5cbiAgICAgICAgaW5zY29yZXRpbWUgPSA8ZGl2IC8+XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnRpbWluZykge1xuICAgICAgICAvLyByZW5kZXIgdGltZXIsIHNjb3JlLCBhbmQgaW5wdXQgd2hlbiBzdGFydCBpcyBjbGlja2VkXG4gICAgICAgIGluc2NvcmV0aW1lID0gKDxJbnB1dFNjb3JlVGltZVxuICAgICAgICAgIHBsYWNlc0FycmF5PXt0aGlzLnByb3BzLnBsYWNlc0FycmF5fVxuICAgICAgICAgIGNvbnRpbmVudD17dGhpcy5wcm9wcy5zZWxlY3RlZENvbnRpbmVudH1cbiAgICAgICAgICB0aW1pbmc9e3RoaXMucHJvcHMudGltaW5nfVxuICAgICAgICAgIGNhcGl0YWxzPXt0aGlzLnByb3BzLmNhcGl0YWxzfVxuICAgICAgICAgIGhhbmRsZUJhY2s9e3RoaXMucHJvcHMuaGFuZGxlQmFja31cbiAgICAgICAgICBoYW5kbGVOYW1lZFBsYWNlPXt0aGlzLnByb3BzLmhhbmRsZU5hbWVkUGxhY2V9XG4gICAgICAgICAgaGFuZGxlVGltZXI9e3RoaXMucHJvcHMuaGFuZGxlVGltZXJ9XG4gICAgICAgICAgZ2V0RmluYWxUaW1lPXt0aGlzLnByb3BzLmdldEZpbmFsVGltZX1cbiAgICAgICAgICBoYW5kbGVHaXZlVXA9e3RoaXMucHJvcHMuaGFuZGxlR2l2ZVVwfVxuICAgICAgICAgIHF1aXpUaXRsZT17dGhpcy5wcm9wcy5xdWl6VGl0bGV9XG4gICAgICAgIC8+KVxuICAgICAgICBiYWNrc3RhcnQgPSA8ZGl2IC8+XG4gICAgICAgIHF1aXp0aXRsZSA9IDxkaXYgLz5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5lZWQgdG8gbWFrZSBhIHN0b3AgYnV0dG9uXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkQ2F0ZWdvcnkgPT09ICdHVEMnKSB7XG4gICAgICAvLyBHdWVzcyB0aGUgQ2l0eSBmZWF0dXJlIGlzIG5vdCByZWFkeSB5ZXRcbiAgICAgIGJhY2sgPSA8QmFja0J1dHRvbiBoYW5kbGVCYWNrPXt0aGlzLnByb3BzLmhhbmRsZUJhY2t9IC8+XG4gICAgICBjYXRlZ29yeUNpdHkgPSAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHpJbmRleDogMiwgbWFyZ2luTGVmdDogJzI0JScgfX0+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBTb3JyeSwgdGhpcyBmZWF0dXJlIGlzIG5vdCBxdWl0ZSByZWFkeSB5ZXQuXG4gICAgICAgICAgICBJdCB3YXMgaW5zcGlyZWQgYnkgQE1hcGJveCB1c2VycyAjc3BvdHRlZCB0d2VldHMsIHNvIGluIHRoZSBtZWFudGltZSBjaGVjayB0aG9zZSBvdXQhXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRDYXRlZ29yeSA9PT0gJ0JPVycpIHtcbiAgICAgIC8vIEJvZGllcyBvZiB3YXRlciBhcmUgbm90IHJlYWR5IHlldCwgbmVlZCB0byBjcmVhdGUgbWFwIGxheWVyc1xuICAgICAgYmFjayA9IDxCYWNrQnV0dG9uIGhhbmRsZUJhY2s9e3RoaXMucHJvcHMuaGFuZGxlQmFja30gLz5cbiAgICAgIGNhdGVnb3J5V2F0ZXIgPSAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHpJbmRleDogMiwgbWFyZ2luTGVmdDogJzI2JScgfX0+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBTb3JyeSwgcXVpenplcyBhYm91dCBib2RpZXMgb2Ygd2F0ZXIgYXJlIG5vdCByZWFkeSB5ZXQuXG4gICAgICAgICAgICBIaXQgdGhlIGJhY2sgYnV0dG9uIHRvIGNob29zZSBhbm90aGVyIGNhdGVnb3J5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkQ2F0ZWdvcnkgPT09ICdMREYnKSB7XG4gICAgICAvLyBsYW5kZm9ybXMgYXJlIG5vdCByZWFkeSB5ZXQsIG5lZWQgdG8gY3JlYXRlIG1hcCBsYXllcnNcbiAgICAgIGJhY2sgPSA8QmFja0J1dHRvbiBoYW5kbGVCYWNrPXt0aGlzLnByb3BzLmhhbmRsZUJhY2t9IC8+XG4gICAgICBjYXRlZ29yeUxhbmRmb3JtcyA9IChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgekluZGV4OiAyLCBtYXJnaW5MZWZ0OiAnMzAlJyB9fT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFNvcnJ5LCBsYW5kZm9ybSBxdWl6emVzIGFyZSBub3QgcmVhZHkgeWV0LlxuICAgICAgICAgICAgSGl0IHRoZSBiYWNrIGJ1dHRvbiB0byBjaG9vc2UgYW5vdGhlciBjYXRlZ29yeS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZENhdGVnb3J5ID09PSAnTFJTJykge1xuICAgICAgLy8gbGFuZGZvcm1zIGFyZSBub3QgcmVhZHkgeWV0LCBuZWVkIHRvIGNyZWF0ZSBtYXAgbGF5ZXJzXG4gICAgICBiYWNrID0gPEJhY2tCdXR0b24gaGFuZGxlQmFjaz17dGhpcy5wcm9wcy5oYW5kbGVCYWNrfSAvPlxuICAgICAgY2F0ZWdvcnlMZWFkZXJzID0gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB6SW5kZXg6IDIsIG1hcmdpbkxlZnQ6ICczMCUnIH19PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgU29ycnksIHdvcmxkIGxlYWRlciBxdWl6emVzIGFyZSBub3QgcmVhZHkgeWV0LlxuICAgICAgICAgICAgSGl0IHRoZSBiYWNrIGJ1dHRvbiB0byBjaG9vc2UgYW5vdGhlciBjYXRlZ29yeS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZENhdGVnb3J5ID09PSAnJykge1xuICAgICAgLy8gY2F0ZWdvcnkgaGFzIE5PVCBiZWVuIHNlbGVjdGVkLCBzaG93IGNhdGVnb3J5IGJ1dHRvbnNcbiAgICAgIGNhdGVnb3J5Q29udGluZW50QnV0dG9uID0gPENhdGVnb3J5QnV0dG9uIHRpdGxlPVwiQ29udGluZW50c1wiIGNvZGU9XCJDVE5cIiBoYW5kbGVDYXRlZ29yeVNlbGVjdGlvbj17dGhpcy5wcm9wcy5oYW5kbGVDYXRlZ29yeVNlbGVjdGlvbn0gLz5cbiAgICAgIGNhdGVnb3J5Q2l0eUJ1dHRvbiA9IDxDYXRlZ29yeUJ1dHRvbiB0aXRsZT1cIkd1ZXNzIHRoZSBDaXR5XCIgY29kZT1cIkdUQ1wiIGhhbmRsZUNhdGVnb3J5U2VsZWN0aW9uPXt0aGlzLnByb3BzLmhhbmRsZUNhdGVnb3J5U2VsZWN0aW9ufSAvPlxuICAgICAgY2F0ZWdvcnlXYXRlckJ1dHRvbiA9IDxDYXRlZ29yeUJ1dHRvbiB0aXRsZT1cIkJvZGllcyBvZiBXYXRlclwiIGNvZGU9XCJCT1dcIiBoYW5kbGVDYXRlZ29yeVNlbGVjdGlvbj17dGhpcy5wcm9wcy5oYW5kbGVDYXRlZ29yeVNlbGVjdGlvbn0gLz5cbiAgICAgIGNhdGVnb3J5TGFuZGZvcm1zQnV0dG9uID0gPENhdGVnb3J5QnV0dG9uIHRpdGxlPVwiTGFuZGZvcm1zXCIgY29kZT1cIkxERlwiIGhhbmRsZUNhdGVnb3J5U2VsZWN0aW9uPXt0aGlzLnByb3BzLmhhbmRsZUNhdGVnb3J5U2VsZWN0aW9ufSAvPlxuICAgICAgY2F0ZWdvcnlMZWFkZXJzQnV0dG9uID0gPENhdGVnb3J5QnV0dG9uIHRpdGxlPVwiTGVhZGVyc1wiIGNvZGU9XCJMUlNcIiBoYW5kbGVDYXRlZ29yeVNlbGVjdGlvbj17dGhpcy5wcm9wcy5oYW5kbGVDYXRlZ29yeVNlbGVjdGlvbn0gLz5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRpdGxlIC8+XG4gICAgICAgIDxIZWFkZXJDYXJkIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmJ1dHRvbkdyb3VwaW5nfT5cbiAgICAgICAgICB7Y2F0ZWdvcnlDb250aW5lbnRCdXR0b259XG4gICAgICAgICAge2NhdGVnb3J5Q2l0eUJ1dHRvbn1cbiAgICAgICAgICB7Y2F0ZWdvcnlXYXRlckJ1dHRvbn1cbiAgICAgICAgICB7Y2F0ZWdvcnlMYW5kZm9ybXNCdXR0b259XG4gICAgICAgICAge2NhdGVnb3J5TGVhZGVyc0J1dHRvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtiYWNrfVxuICAgICAgICB7Y2F0ZWdvcnlDb250aW5lbnR9XG4gICAgICAgIHtjYXRlZ29yeUNpdHl9XG4gICAgICAgIHtjYXRlZ29yeVdhdGVyfVxuICAgICAgICB7Y2F0ZWdvcnlMYW5kZm9ybXN9XG4gICAgICAgIHtjYXRlZ29yeUxlYWRlcnN9XG4gICAgICAgIHtiYWNrc3RhcnR9XG4gICAgICAgIHtpbnNjb3JldGltZX1cbiAgICAgICAge3F1aXp0aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBwbGFjZXNBcnJheTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRDb250aW5lbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcXVpelRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNhcGl0YWxzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB0aW1pbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkQ2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGFuZGxlQ2F0ZWdvcnlTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUxvY2F0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVOYW1lZFBsYWNlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVUaW1lcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlQmFjazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlU3RhcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldEZpbmFsVGltZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlR2l2ZVVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19
