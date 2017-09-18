'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _welcomemodal = require('./components/popups/welcomemodal');

var _welcomemodal2 = _interopRequireDefault(_welcomemodal);

var _map = require('./components/basemap/map');

var _map2 = _interopRequireDefault(_map);

var _Header = require('./components/header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _quizmodal = require('./components/popups/quizmodal');

var _quizmodal2 = _interopRequireDefault(_quizmodal);

var _continentContents = require('./assets/continentContents');

var _continentContents2 = _interopRequireDefault(_continentContents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Axios 
// const axios = require('axios'); 
// var instance = axios.create({
//   baseURL: 'localhost:8080'
// })

var style = {
  container: {
    margin: 0,
    padding: 0
  }
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      lonlat: [0.2, 20.6],
      zoom: 2,
      selectedCategory: '',
      selectedContinent: '',
      placesArray: [],
      placesNumber: 0,
      placesRemaining: 0,
      quizTitle: null,
      capitals: false,
      states: false,
      timing: false,
      namedPlace: '',
      showquizModal: false,
      gaveUp: false,
      finalTime: 0
    };

    _this.handleCategorySelection = _this.handleCategorySelection.bind(_this);
    _this.handleLocation = _this.handleLocation.bind(_this);
    _this.handleNamedPlace = _this.handleNamedPlace.bind(_this);
    _this.handleStart = _this.handleStart.bind(_this);
    _this.handleBack = _this.handleBack.bind(_this);
    _this.handleTimer = _this.handleTimer.bind(_this);
    _this.getFinalTime = _this.getFinalTime.bind(_this);
    _this.handleGiveUp = _this.handleGiveUp.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'getFinalTime',
    value: function getFinalTime(time) {
      this.setState({ finalTime: time });
    }

    /* PARAMS: 
        selContinent: string: 2 Letter Continent Abbreviation,
        selCountry: string: 2 Letter Country Abbreviation
        capitals: boolean: capitals quiz
    */

  }, {
    key: 'handleLocation',
    value: function handleLocation(selContinent, selCountry, capitals) {
      this.setState({
        selectedContinent: selContinent
      });
      var quizDesc = '';
      var placeName = '';
      var countryArrayCopy = _continentContents2.default[selContinent].countries.slice();

      if (selCountry) {
        for (var i = 0; i < countryArrayCopy.length; i += 1) {
          if (countryArrayCopy[i].abbrv === selCountry) {
            var statesArrayCopy = countryArrayCopy[i].states.slice();
            placeName = countryArrayCopy[i].name;
            this.setState({
              placesArray: statesArrayCopy,
              states: true,
              lonlat: countryArrayCopy[i].lonlat,
              zoom: countryArrayCopy[i].zoom,
              placesNumber: statesArrayCopy.length,
              placesRemaining: statesArrayCopy.length
            });
          }
        }
        if (capitals) {
          // user selected a state capitals quiz
          quizDesc = 'capitals of ' + placeName;
          this.setState({ capitals: true, quizTitle: quizDesc });
        } else {
          // user selected states quiz
          quizDesc = 'states of ' + placeName;
          this.setState({ capitals: false, quizTitle: quizDesc });
        }
      } else if (!selCountry) {
        this.setState({
          placesArray: countryArrayCopy,
          states: false,
          lonlat: _continentContents2.default[selContinent].lonlat,
          zoom: _continentContents2.default[selContinent].zoom,
          placesNumber: _continentContents2.default[selContinent].length,
          placesRemaining: _continentContents2.default[selContinent].length
        });
        placeName = _continentContents2.default[selContinent].name;
        if (capitals) {
          // user selected countries capitals quiz
          quizDesc = 'country capitals of ' + placeName;
          this.setState({ capitals: true, quizTitle: quizDesc });
        } else {
          // user selected countries quiz
          quizDesc = 'countries of ' + placeName;
          this.setState({ capitals: false, quizTitle: quizDesc });
        }
      }
    }
  }, {
    key: 'handleStart',
    value: function handleStart() {
      this.setState({
        timing: true
      });
      // console.log('calling axios at: ', instance.baseURL)
      // const continent = 'NA'

      // instance.get(`/${continent}/get-number-countries`)
      // .then((result) => {
      //   console.log('result: ', result)
      // })
      // .catch((error) =>{
      //   console.log('assxios error bruh')
      // })
    }
  }, {
    key: 'handleBack',
    value: function handleBack() {
      this.setState({
        selectedCategory: '',
        selectedContinent: '',
        timing: false,
        lonlat: [0.2, 20.6],
        zoom: 2,
        showquizModal: false
      });
    }
  }, {
    key: 'handleNamedPlace',
    value: function handleNamedPlace(place) {
      var remaining = this.state.placesRemaining - 1;
      this.setState({ namedPlace: place, placesRemaining: remaining });
    }
  }, {
    key: 'handleTimer',
    value: function handleTimer(startStop, complete) {
      if (startStop && !complete) {
        // setState of timer to true
        this.setState({ timing: true });
      } else if (!startStop && complete) {
        // user entered all contries setState of timer to false
        // show quizmodal, turn off timer, reset selection
        // need to record total countries, continent name, and final time
        this.setState({
          timing: false,
          selectedCategory: '',
          selectedContinent: '',
          showquizModal: true,
          gaveUp: false
        });
      }
    }
  }, {
    key: 'handleCategorySelection',
    value: function handleCategorySelection(selCategory) {
      this.setState({ selectedCategory: selCategory });
    }
  }, {
    key: 'handleGiveUp',
    value: function handleGiveUp() {
      this.setState({
        timing: false,
        showquizModal: true,
        gaveUp: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var quizmodal = _react2.default.createElement('div', null);

      if (!this.state.timing && this.state.showquizModal) {
        quizmodal = _react2.default.createElement(_quizmodal2.default, {
          onClose: this.handleBack,
          time: this.state.finalTime,
          selectedContinent: this.state.selectedContinent,
          quizTitle: this.state.quizTitle,
          capital: this.state.capitals,
          states: this.state.states,
          gaveUp: this.state.gaveUp,
          placesNumber: this.state.placesNumber,
          placesRemaining: this.state.placesRemaining
        });
      } else {
        quizmodal = _react2.default.createElement('div', null);
      }

      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(
          'div',
          { style: style.container },
          _react2.default.createElement(_welcomemodal2.default, null),
          _react2.default.createElement(_Header2.default, {
            placesArray: this.state.placesArray,
            selectedContinent: this.state.selectedContinent,
            timing: this.state.timing,
            capitals: this.state.capitals,
            quizTitle: this.state.quizTitle,
            selectedCategory: this.state.selectedCategory,
            handleCategorySelection: this.handleCategorySelection,

            handleLocation: this.handleLocation,
            handleNamedPlace: this.handleNamedPlace,
            handleBack: this.handleBack,
            handleStart: this.handleStart,
            handleTimer: this.handleTimer,
            getFinalTime: this.getFinalTime,
            handleGiveUp: this.handleGiveUp
          }),
          _react2.default.createElement(_map2.default, {
            lonlat: this.state.lonlat,
            zoom: this.state.zoom,
            namedPlace: this.state.namedPlace,
            selectedContinent: this.state.selectedContinent,
            capitals: this.state.capitals,
            states: this.state.states
          }),
          quizmodal
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9BcHAuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiY29udGFpbmVyIiwibWFyZ2luIiwicGFkZGluZyIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJsb25sYXQiLCJ6b29tIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkQ29udGluZW50IiwicGxhY2VzQXJyYXkiLCJwbGFjZXNOdW1iZXIiLCJwbGFjZXNSZW1haW5pbmciLCJxdWl6VGl0bGUiLCJjYXBpdGFscyIsInN0YXRlcyIsInRpbWluZyIsIm5hbWVkUGxhY2UiLCJzaG93cXVpek1vZGFsIiwiZ2F2ZVVwIiwiZmluYWxUaW1lIiwiaGFuZGxlQ2F0ZWdvcnlTZWxlY3Rpb24iLCJiaW5kIiwiaGFuZGxlTG9jYXRpb24iLCJoYW5kbGVOYW1lZFBsYWNlIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVCYWNrIiwiaGFuZGxlVGltZXIiLCJnZXRGaW5hbFRpbWUiLCJoYW5kbGVHaXZlVXAiLCJ0aW1lIiwic2V0U3RhdGUiLCJzZWxDb250aW5lbnQiLCJzZWxDb3VudHJ5IiwicXVpekRlc2MiLCJwbGFjZU5hbWUiLCJjb3VudHJ5QXJyYXlDb3B5IiwiY291bnRyaWVzIiwic2xpY2UiLCJpIiwibGVuZ3RoIiwiYWJicnYiLCJzdGF0ZXNBcnJheUNvcHkiLCJuYW1lIiwicGxhY2UiLCJyZW1haW5pbmciLCJzdGFydFN0b3AiLCJjb21wbGV0ZSIsInNlbENhdGVnb3J5IiwicXVpem1vZGFsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVE7QUFDWkMsYUFBVztBQUNUQyxZQUFRLENBREM7QUFFVEMsYUFBUztBQUZBO0FBREMsQ0FBZDs7SUFPcUJDLEc7OztBQUNuQixlQUFZQyxLQUFaLEVBQW1CO0FB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Q0U7QUFBQTtBQUFBLFlBQUssT0FBT2xELE1BQU1DLFNBQWxCO0FBQ0UscUVBREY7QUFFRTtBQUNFLHlCQUFhLEtBQUtLLEtBQUwsQ0FBV0ssV0FEMUI7QUFFRSwrQkFBbUIsS0FBS0wsS0FBTCxDQUFXSSxpQkFGaEM7QUFHRSxvQkFBUSxLQUFLSixLQUFMLENBQVdXLE1BSHJCO0FBSUUsc0JBQVUsS0FBS1gsS0FBTCxDQUFXUyxRQUp2QjtBQUtFLHVCQUFXLEtBQUtULEtBQUwsQ0FBV1EsU0FMeEI7QUFNRSw4QkFBa0IsS0FBS1IsS0FBTCxDQUFXRyxnQkFOL0I7QUFPRSxxQ0FBeUIsS0FBS2EsdUJBUGhDOztBQVNFLDRCQUFnQixLQUFLRSxjQVR2QjtBQVVFLDhCQUFrQixLQUFLQyxnQkFWekI7QUFXRSx3QkFBWSxLQUFLRSxVQVhuQjtBQVlFLHlCQUFhLEtBQUtELFdBWnBCO0FBYUUseUJBQWEsS0FBS0UsV0FicEI7QUFjRSwwQkFBYyxLQUFLQyxZQWRyQjtBQWVFLDBCQUFjLEtBQUtDO0FBZnJCLFlBRkY7QUFtQkU7QUFDRSxvQkFBUSxLQUFLeEIsS0FBTCxDQUFXQyxNQURyQjtBQUVFLGtCQUFNLEtBQUtELEtBQUwsQ0FBV0UsSUFGbkI7QUFHRSx3QkFBWSxLQUFLRixLQUFMLENBQVdZLFVBSHpCO0FBSUUsK0JBQW1CLEtBQUtaLEtBQUwsQ0FBV0ksaUJBSmhDO0FBS0Usc0JBQVUsS0FBS0osS0FBTCxDQUFXUyxRQUx2QjtBQU1FLG9CQUFRLEtBQUtULEtBQUwsQ0FBV1U7QUFOckIsWUFuQkY7QUEyQkdrQztBQTNCSDtBQURGLE9BREY7QUFpQ0Q7Ozs7RUFoTjhCLGdCQUFNQyxTOztrQkFBbEIvQyxHIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJ1xuaW1wb3J0IFdlbGNvbWVNb2RhbCBmcm9tICcuL2NvbXBvbmVudHMvcG9wdXBzL3dlbGNvbWVtb2RhbCdcbmltcG9ydCBNYXBzIGZyb20gJy4vY29tcG9uZW50cy9iYXNlbWFwL21hcCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXInXG5pbXBvcnQgUXVpek1vZGFsIGZyb20gJy4vY29tcG9uZW50cy9wb3B1cHMvcXVpem1vZGFsJ1xuaW1wb3J0IFdPUkxEIGZyb20gJy4vYXNzZXRzL2NvbnRpbmVudENvbnRlbnRzJ1xuXG4vLyBBeGlvcyBcbi8vIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTsgXG4vLyB2YXIgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuLy8gICBiYXNlVVJMOiAnbG9jYWxob3N0OjgwODAnXG4vLyB9KVxuXG5jb25zdCBzdHlsZSA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvbmxhdDogWzAuMiwgMjAuNl0sXG4gICAgICB6b29tOiAyLFxuICAgICAgc2VsZWN0ZWRDYXRlZ29yeTogJycsXG4gICAgICBzZWxlY3RlZENvbnRpbmVudDogJycsXG4gICAgICBwbGFjZXNBcnJheTogW10sXG4gICAgICBwbGFjZXNOdW1iZXI6IDAsXG4gICAgICBwbGFjZXNSZW1haW5pbmc6IDAsXG4gICAgICBxdWl6VGl0bGU6IG51bGwsXG4gICAgICBjYXBpdGFsczogZmFsc2UsXG4gICAgICBzdGF0ZXM6IGZhbHNlLFxuICAgICAgdGltaW5nOiBmYWxzZSxcbiAgICAgIG5hbWVkUGxhY2U6ICcnLFxuICAgICAgc2hvd3F1aXpNb2RhbDogZmFsc2UsXG4gICAgICBnYXZlVXA6IGZhbHNlLFxuICAgICAgZmluYWxUaW1lOiAwLFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2F0ZWdvcnlTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZUNhdGVnb3J5U2VsZWN0aW9uLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUxvY2F0aW9uID0gdGhpcy5oYW5kbGVMb2NhdGlvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVOYW1lZFBsYWNlID0gdGhpcy5oYW5kbGVOYW1lZFBsYWNlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVN0YXJ0ID0gdGhpcy5oYW5kbGVTdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVCYWNrID0gdGhpcy5oYW5kbGVCYWNrLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVRpbWVyID0gdGhpcy5oYW5kbGVUaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRGaW5hbFRpbWUgPSB0aGlzLmdldEZpbmFsVGltZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVHaXZlVXAgPSB0aGlzLmhhbmRsZUdpdmVVcC5iaW5kKHRoaXMpXG4gIH1cblxuICBnZXRGaW5hbFRpbWUodGltZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaW5hbFRpbWU6IHRpbWUgfSlcbiAgfVxuICBcbiAgLyogUEFSQU1TOiBcbiAgICAgIHNlbENvbnRpbmVudDogc3RyaW5nOiAyIExldHRlciBDb250aW5lbnQgQWJicmV2aWF0aW9uLFxuICAgICAgc2VsQ291bnRyeTogc3RyaW5nOiAyIExldHRlciBDb3VudHJ5IEFiYnJldmlhdGlvblxuICAgICAgY2FwaXRhbHM6IGJvb2xlYW46IGNhcGl0YWxzIHF1aXpcbiAgKi9cbiAgaGFuZGxlTG9jYXRpb24oc2VsQ29udGluZW50LCBzZWxDb3VudHJ5LCBjYXBpdGFscykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRDb250aW5lbnQ6IHNlbENvbnRpbmVudCxcbiAgICB9KVxuICAgIGxldCBxdWl6RGVzYyA9ICcnXG4gICAgbGV0IHBsYWNlTmFtZSA9ICcnXG4gICAgY29uc3QgY291bnRyeUFycmF5Q29weSA9IFdPUkxEW3NlbENvbnRpbmVudF0uY291bnRyaWVzLnNsaWNlKClcblxuICAgIGlmIChzZWxDb3VudHJ5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50cnlBcnJheUNvcHkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGNvdW50cnlBcnJheUNvcHlbaV0uYWJicnYgPT09IHNlbENvdW50cnkpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZXNBcnJheUNvcHkgPSBjb3VudHJ5QXJyYXlDb3B5W2ldLnN0YXRlcy5zbGljZSgpXG4gICAgICAgICAgcGxhY2VOYW1lID0gY291bnRyeUFycmF5Q29weVtpXS5uYW1lXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwbGFjZXNBcnJheTogc3RhdGVzQXJyYXlDb3B5LFxuICAgICAgICAgICAgc3RhdGVzOiB0cnVlLFxuICAgICAgICAgICAgbG9ubGF0OiBjb3VudHJ5QXJyYXlDb3B5W2ldLmxvbmxhdCxcbiAgICAgICAgICAgIHpvb206IGNvdW50cnlBcnJheUNvcHlbaV0uem9vbSxcbiAgICAgICAgICAgIHBsYWNlc051bWJlcjogc3RhdGVzQXJyYXlDb3B5Lmxlbmd0aCxcbiAgICAgICAgICAgIHBsYWNlc1JlbWFpbmluZzogc3RhdGVzQXJyYXlDb3B5Lmxlbmd0aCxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2FwaXRhbHMpIHtcbiAgICAgICAgLy8gdXNlciBzZWxlY3RlZCBhIHN0YXRlIGNhcGl0YWxzIHF1aXpcbiAgICAgICAgcXVpekRlc2MgPSBgY2FwaXRhbHMgb2YgJHtwbGFjZU5hbWV9YFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2FwaXRhbHM6IHRydWUsIHF1aXpUaXRsZTogcXVpekRlc2MgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZXIgc2VsZWN0ZWQgc3RhdGVzIHF1aXpcbiAgICAgICAgcXVpekRlc2MgPSBgc3RhdGVzIG9mICR7cGxhY2VOYW1lfWBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcGl0YWxzOiBmYWxzZSwgcXVpelRpdGxlOiBxdWl6RGVzYyB9KVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXNlbENvdW50cnkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwbGFjZXNBcnJheTogY291bnRyeUFycmF5Q29weSxcbiAgICAgICAgc3RhdGVzOiBmYWxzZSxcbiAgICAgICAgbG9ubGF0OiBXT1JMRFtzZWxDb250aW5lbnRdLmxvbmxhdCxcbiAgICAgICAgem9vbTogV09STERbc2VsQ29udGluZW50XS56b29tLFxuICAgICAgICBwbGFjZXNOdW1iZXI6IFdPUkxEW3NlbENvbnRpbmVudF0ubGVuZ3RoLFxuICAgICAgICBwbGFjZXNSZW1haW5pbmc6IFdPUkxEW3NlbENvbnRpbmVudF0ubGVuZ3RoLFxuICAgICAgfSlcbiAgICAgIHBsYWNlTmFtZSA9IFdPUkxEW3NlbENvbnRpbmVudF0ubmFtZVxuICAgICAgaWYgKGNhcGl0YWxzKSB7XG4gICAgICAgIC8vIHVzZXIgc2VsZWN0ZWQgY291bnRyaWVzIGNhcGl0YWxzIHF1aXpcbiAgICAgICAgcXVpekRlc2MgPSBgY291bnRyeSBjYXBpdGFscyBvZiAke3BsYWNlTmFtZX1gXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXBpdGFsczogdHJ1ZSwgcXVpelRpdGxlOiBxdWl6RGVzYyB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlciBzZWxlY3RlZCBjb3VudHJpZXMgcXVpelxuICAgICAgICBxdWl6RGVzYyA9IGBjb3VudHJpZXMgb2YgJHtwbGFjZU5hbWV9YFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2FwaXRhbHM6IGZhbHNlLCBxdWl6VGl0bGU6IHF1aXpEZXNjIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3RhcnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aW1pbmc6IHRydWUsXG4gICAgfSlcbiAgICAvLyBjb25zb2xlLmxvZygnY2FsbGluZyBheGlvcyBhdDogJywgaW5zdGFuY2UuYmFzZVVSTClcbiAgICAvLyBjb25zdCBjb250aW5lbnQgPSAnTkEnXG5cbiAgICAvLyBpbnN0YW5jZS5nZXQoYC8ke2NvbnRpbmVudH0vZ2V0LW51bWJlci1jb3VudHJpZXNgKVxuICAgIC8vIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcsIHJlc3VsdClcbiAgICAvLyB9KVxuICAgIC8vIC5jYXRjaCgoZXJyb3IpID0+e1xuICAgIC8vICAgY29uc29sZS5sb2coJ2Fzc3hpb3MgZXJyb3IgYnJ1aCcpXG4gICAgLy8gfSlcbiAgfVxuXG4gIGhhbmRsZUJhY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZENhdGVnb3J5OiAnJyxcbiAgICAgIHNlbGVjdGVkQ29udGluZW50OiAnJyxcbiAgICAgIHRpbWluZzogZmFsc2UsXG4gICAgICBsb25sYXQ6IFswLjIsIDIwLjZdLFxuICAgICAgem9vbTogMixcbiAgICAgIHNob3dxdWl6TW9kYWw6IGZhbHNlLFxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVOYW1lZFBsYWNlKHBsYWNlKSB7XG4gICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5zdGF0ZS5wbGFjZXNSZW1haW5pbmcgLSAxXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWVkUGxhY2U6IHBsYWNlLCBwbGFjZXNSZW1haW5pbmc6IHJlbWFpbmluZyB9KVxuICB9XG5cbiAgaGFuZGxlVGltZXIoc3RhcnRTdG9wLCBjb21wbGV0ZSkge1xuICAgIGlmIChzdGFydFN0b3AgJiYgIWNvbXBsZXRlKSB7XG4gICAgICAvLyBzZXRTdGF0ZSBvZiB0aW1lciB0byB0cnVlXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGltaW5nOiB0cnVlIH0pXG4gICAgfSBlbHNlIGlmICghc3RhcnRTdG9wICYmIGNvbXBsZXRlKSB7XG4gICAgICAvLyB1c2VyIGVudGVyZWQgYWxsIGNvbnRyaWVzIHNldFN0YXRlIG9mIHRpbWVyIHRvIGZhbHNlXG4gICAgICAvLyBzaG93IHF1aXptb2RhbCwgdHVybiBvZmYgdGltZXIsIHJlc2V0IHNlbGVjdGlvblxuICAgICAgLy8gbmVlZCB0byByZWNvcmQgdG90YWwgY291bnRyaWVzLCBjb250aW5lbnQgbmFtZSwgYW5kIGZpbmFsIHRpbWVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0aW1pbmc6IGZhbHNlLFxuICAgICAgICBzZWxlY3RlZENhdGVnb3J5OiAnJyxcbiAgICAgICAgc2VsZWN0ZWRDb250aW5lbnQ6ICcnLFxuICAgICAgICBzaG93cXVpek1vZGFsOiB0cnVlLFxuICAgICAgICBnYXZlVXA6IGZhbHNlLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDYXRlZ29yeVNlbGVjdGlvbihzZWxDYXRlZ29yeSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENhdGVnb3J5OiBzZWxDYXRlZ29yeSB9KVxuICB9XG5cbiAgaGFuZGxlR2l2ZVVwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGltaW5nOiBmYWxzZSxcbiAgICAgIHNob3dxdWl6TW9kYWw6IHRydWUsXG4gICAgICBnYXZlVXA6IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcXVpem1vZGFsID0gPGRpdiAvPlxuXG4gICAgaWYgKCF0aGlzLnN0YXRlLnRpbWluZyAmJiB0aGlzLnN0YXRlLnNob3dxdWl6TW9kYWwpIHtcbiAgICAgIHF1aXptb2RhbCA9ICg8UXVpek1vZGFsXG4gICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQmFja31cbiAgICAgICAgdGltZT17dGhpcy5zdGF0ZS5maW5hbFRpbWV9XG4gICAgICAgIHNlbGVjdGVkQ29udGluZW50PXt0aGlzLnN0YXRlLnNlbGVjdGVkQ29udGluZW50fVxuICAgICAgICBxdWl6VGl0bGU9e3RoaXMuc3RhdGUucXVpelRpdGxlfVxuICAgICAgICBjYXBpdGFsPXt0aGlzLnN0YXRlLmNhcGl0YWxzfVxuICAgICAgICBzdGF0ZXM9e3RoaXMuc3RhdGUuc3RhdGVzfVxuICAgICAgICBnYXZlVXA9e3RoaXMuc3RhdGUuZ2F2ZVVwfVxuICAgICAgICBwbGFjZXNOdW1iZXI9e3RoaXMuc3RhdGUucGxhY2VzTnVtYmVyfVxuICAgICAgICBwbGFjZXNSZW1haW5pbmc9e3RoaXMuc3RhdGUucGxhY2VzUmVtYWluaW5nfVxuICAgICAgLz4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1aXptb2RhbCA9IDxkaXYgLz5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPFdlbGNvbWVNb2RhbCAvPlxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIHBsYWNlc0FycmF5PXt0aGlzLnN0YXRlLnBsYWNlc0FycmF5fVxuICAgICAgICAgICAgc2VsZWN0ZWRDb250aW5lbnQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb250aW5lbnR9XG4gICAgICAgICAgICB0aW1pbmc9e3RoaXMuc3RhdGUudGltaW5nfVxuICAgICAgICAgICAgY2FwaXRhbHM9e3RoaXMuc3RhdGUuY2FwaXRhbHN9XG4gICAgICAgICAgICBxdWl6VGl0bGU9e3RoaXMuc3RhdGUucXVpelRpdGxlfVxuICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeT17dGhpcy5zdGF0ZS5zZWxlY3RlZENhdGVnb3J5fVxuICAgICAgICAgICAgaGFuZGxlQ2F0ZWdvcnlTZWxlY3Rpb249e3RoaXMuaGFuZGxlQ2F0ZWdvcnlTZWxlY3Rpb259XG5cbiAgICAgICAgICAgIGhhbmRsZUxvY2F0aW9uPXt0aGlzLmhhbmRsZUxvY2F0aW9ufVxuICAgICAgICAgICAgaGFuZGxlTmFtZWRQbGFjZT17dGhpcy5oYW5kbGVOYW1lZFBsYWNlfVxuICAgICAgICAgICAgaGFuZGxlQmFjaz17dGhpcy5oYW5kbGVCYWNrfVxuICAgICAgICAgICAgaGFuZGxlU3RhcnQ9e3RoaXMuaGFuZGxlU3RhcnR9XG4gICAgICAgICAgICBoYW5kbGVUaW1lcj17dGhpcy5oYW5kbGVUaW1lcn1cbiAgICAgICAgICAgIGdldEZpbmFsVGltZT17dGhpcy5nZXRGaW5hbFRpbWV9XG4gICAgICAgICAgICBoYW5kbGVHaXZlVXA9e3RoaXMuaGFuZGxlR2l2ZVVwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1hcHNcbiAgICAgICAgICAgIGxvbmxhdD17dGhpcy5zdGF0ZS5sb25sYXR9XG4gICAgICAgICAgICB6b29tPXt0aGlzLnN0YXRlLnpvb219XG4gICAgICAgICAgICBuYW1lZFBsYWNlPXt0aGlzLnN0YXRlLm5hbWVkUGxhY2V9XG4gICAgICAgICAgICBzZWxlY3RlZENvbnRpbmVudD17dGhpcy5zdGF0ZS5zZWxlY3RlZENvbnRpbmVudH1cbiAgICAgICAgICAgIGNhcGl0YWxzPXt0aGlzLnN0YXRlLmNhcGl0YWxzfVxuICAgICAgICAgICAgc3RhdGVzPXt0aGlzLnN0YXRlLnN0YXRlc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtxdWl6bW9kYWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuIl19
