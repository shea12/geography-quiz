'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mapboxGl = require('mapbox-gl');

var _mapboxGl2 = _interopRequireDefault(_mapboxGl);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keys = require('../../assets/keys');

var _keys2 = _interopRequireDefault(_keys);

var _countryCodes = require('../../assets/countryCodes');

var _countryCodes2 = _interopRequireDefault(_countryCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    zIndex: 1
  }
};

var map = {};

var showHideAllCountryLabels = function showHideAllCountryLabels(countryCodeArray, status) {
  for (var i = 0; i < countryCodeArray.length; i += 1) {
    map.setLayoutProperty(countryCodeArray[i] + '_LABEL', 'visibility', status);
    map.setPaintProperty(countryCodeArray[i], 'fill-opacity', 0);
  }
};

var showHideAllStateLabels = function showHideAllStateLabels(stateCodeArray, status) {
  for (var i = 0; i < stateCodeArray.length; i += 1) {
    map.setLayoutProperty('USST_' + stateCodeArray[i], 'visibility', status);
    map.setLayoutProperty('USSTCAP_' + stateCodeArray[i], 'visibility', status);
  }
};

var Maps = function (_React$Component) {
  _inherits(Maps, _React$Component);

  function Maps() {
    _classCallCheck(this, Maps);

    return _possibleConstructorReturn(this, (Maps.__proto__ || Object.getPrototypeOf(Maps)).apply(this, arguments));
  }

  _createClass(Maps, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _mapboxGl2.default.accessToken = _keys2.default.access_token;
      // remember: mapbox uses [long, lat] not [lat, long]
      map = new _mapboxGl2.default.Map({
        container: 'map',
        style: _keys2.default.style_key,
        center: this.props.lonlat,
        zoom: this.props.zoom,
        pitchWithRotate: false,
        dragRotate: false,
        hash: true,
        minZoom: 2
      });

      // map.on('click', (e) => {
      //   // using e to pass = linting error
      //   return e
      //   // const features = map.queryRenderedFeatures(e.point)
      //   // console.log('features: ', features)
      // })
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // will be checking previous props against nextProps in order
      // to determine what action needs to be performed on the map

      // display country label, shade in country area after it is found
      if (this.props.namedPlace !== nextProps.namedPlace) {
        var placeCode = nextProps.namedPlace;

        if (nextProps.states && nextProps.capitals) {
          // show state and state capital name
          map.setLayoutProperty('USST_' + placeCode, 'visibility', 'visible');
          map.setLayoutProperty('USSTCAP_' + placeCode, 'visibility', 'visible');
        } else if (!nextProps.states && nextProps.capitals) {
          // need to add label layers for every country capital
          // map.setLayoutProperty(`${placeCode}_LABEL`, 'visibility', 'visible')
        } else if (nextProps.states && !nextProps.capitals) {
          // show state name
          map.setLayoutProperty('USST_' + placeCode, 'visibility', 'visible');
        } else {
          // show country name
          map.setLayoutProperty(placeCode + '_LABEL', 'visibility', 'visible');
        }

        // map.setPaintProperty(placeCode, 'fill-opacity', 1)
        // map.setPaintProperty(placeCode, 'fill-outline-color', 'rgb(41, 169, 45)')
      }

      // check if the map needs to pan to a new location
      if (this.props.lonlat !== nextProps.lonlat) {
        showHideAllCountryLabels(_countryCodes2.default.COUNTRIES, 'none');
        showHideAllStateLabels(_countryCodes2.default.US_STATES, 'none');
        map.flyTo({ center: nextProps.lonlat, zoom: nextProps.zoom, speed: 0.4 });
      }

      // check for the selected continent
      if (this.props.selectedContinent !== nextProps.selectedContinent) {
        map.flyTo({ center: nextProps.lonlat, zoom: nextProps.zoom, speed: 0.4 });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'map', style: style.map });
    }
  }]);

  return Maps;
}(_react2.default.Component);

exports.default = Maps;


Maps.propTypes = {
  lonlat: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
  zoom: _propTypes2.default.number.isRequired,
  namedPlace: _propTypes2.default.string.isRequired,
  selectedContinent: _propTypes2.default.string.isRequired,
  states: _propTypes2.default.bool.isRequired,
  capitals: _propTypes2.default.bool.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2Jhc2VtYXAvbWFwLmpzeCJdLCJuYW1lcyI6WyJzdHlsZSIsIm1hcCIsInBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwid2lkdGgiLCJ6SW5kZXgiLCJzaG93SGlkZUFsbENvdW50cnlMYWJlbHMiLCJjb3VudHJ5Q29kZUFycmF5Iiwic3RhdHVzIiwiaSIsImxlbmd0aCIsInNldExheW91dFByb3BlcnR5Iiwic2V0UGFpbnRQcm9wZXJ0eSIsInNob3dIaWRlQWxsU3RhdGVMYWJlbHMiLCJzdGF0ZUNvZGVBcnJheSIsIk1hcHMiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsIk1hcCIsImNvbnRhaW5lciIsInN0eWxlX2tleSIsImNlbnRlciIsInByb3BzIiwibG9ubGF0Iiwiem9vbSIsInBpdGNoV2l0aFJvdGF0ZSIsImRyYWdSb3RhdGUiLCJoYXNoIiwibWluWm9vbSIsIm5leHRQcm9wcyIsIm5hbWVkUGxhY2UiLCJwbGFjZUNvZGUiLCJzdGF0ZXMiLCJjYXBpdGFscyIsIkNPVU5UUklFUyIsIlVTX1NUQVRFUyIsImZseVRvIiwic3BlZWQiLCJzZWxlY3RlZENvbnRpbmVudCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFycmF5T2YiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRO0FBQ1pDLE9BQUs7QUFDSEMsY0FBVSxVQURQO0FBRUhDLFNBQUssQ0FGRjtBQUdIQyxZQUFRLENBSEw7QUFJSEMsV0FBTyxNQUpKO0FBS0hDLFlBQVE7QUFMTDtBQURPLENBQWQ7O0FBVUEsSUFBSUwsTUFBTSxFQUFWOztBQUVBLElBQU1NLDJCQUEyQixTQUEzQkEsd0JBQTJCLENBQUNDLGdCQUFELEVBQW1CQyxNQUFuQixFQUE4QjtBQUM3RCxP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LE1BQU1LLFVBQVVMLElBQTVDLEVBQWtEYSxPQUFPLEdBQXpELEVBQVY7QUFDRDtBQUNGOzs7NkJBRVE7QUFDUCxhQUNFLHVDQUFLLElBQUcsS0FBUixFQUFjLE9BQU90QyxNQUFNQyxHQUEzQixHQURGO0FBR0Q7Ozs7RUFuRStCLGdCQUFNdUMsUzs7a0JBQW5CeEIsSTs7O0FBc0VyQkEsS0FBS3lCLFNBQUwsR0FBaUI7QUFDZmpCLFVBQVEsb0JBQVVrQixPQUFWLENBQWtCLG9CQUFVQyxNQUE1QixFQUFvQ0MsVUFEN0I7QUFFZm5CLFFBQU0sb0JBQVVrQixNQUFWLENBQWlCQyxVQUZSO0FBR2ZiLGNBQVksb0JBQVVjLE1BQVYsQ0FBaUJELFVBSGQ7QUFJZkwscUJBQW1CLG9CQUFVTSxNQUFWLENBQWlCRCxVQUpyQjtBQUtmWCxVQUFRLG9CQUFVYSxJQUFWLENBQWVGLFVBTFI7QUFNZlYsWUFBVSxvQkFBVVksSUFBVixDQUFlRjtBQU5WLENBQWpCIiwiZmlsZSI6Im1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNYXBib3hHbCBmcm9tICdtYXBib3gtZ2wnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgS0VZUyBmcm9tICcuLi8uLi9hc3NldHMva2V5cydcbmltcG9ydCBDT0RFUyBmcm9tICcuLi8uLi9hc3NldHMvY291bnRyeUNvZGVzJ1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgbWFwOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHpJbmRleDogMSxcbiAgfSxcbn1cblxubGV0IG1hcCA9IHt9XG5cbmNvbnN0IHNob3dIaWRlQWxsQ291bnRyeUxhYmVscyA9IChjb3VudHJ5Q29kZUFycmF5LCBzdGF0dXMpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudHJ5Q29kZUFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgbWFwLnNldExheW91dFByb3BlcnR5KGAke2NvdW50cnlDb2RlQXJyYXlbaV19X0xBQkVMYCwgJ3Zpc2liaWxpdHknLCBzdGF0dXMpXG4gICAgbWFwLnNldFBhaW50UHJvcGVydHkoY291bnRyeUNvZGVBcnJheVtpXSwgJ2ZpbGwtb3BhY2l0eScsIDApXG4gIH1cbn1cblxuY29uc3Qgc2hvd0hpZGVBbGxTdGF0ZUxhYmVscyA9IChzdGF0ZUNvZGVBcnJheSwgc3RhdHVzKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVDb2RlQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBtYXAuc2V0TGF5b3V0UHJvcGVydHkoYFVTU1RfJHtzdGF0ZUNvZGVBcnJheVtpXX1gLCAndmlzaWJpbGl0eScsIHN0YXR1cylcbiAgICBtYXAuc2V0TGF5b3V0UHJvcGVydHkoYFVTU1RDQVBfJHtzdGF0ZUNvZGVBcnJheVtpXX1gLCAndmlzaWJpbGl0eScsIHN0YXR1cylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgTWFwYm94R2wuYWNjZXNzVG9rZW4gPSBLRVlTLmFjY2Vzc190b2tlblxuICAgIC8vIHJlbWVtYmVyOiBtYXBib3ggdXNlcyBbbG9uZywgbGF0XSBub3QgW2xhdCwgbG9uZ11cbiAgICBtYXAgPSBuZXcgTWFwYm94R2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogJ21hcCcsXG4gICAgICBzdHlsZTogS0VZUy5zdHlsZV9rZXksXG4gICAgICBjZW50ZXI6IHRoaXMucHJvcHMubG9ubGF0LFxuICAgICAgem9vbTogdGhpcy5wcm9wcy56b29tLFxuICAgICAgcGl0Y2hXaXRoUm90YXRlOiBmYWxzZSxcbiAgICAgIGRyYWdSb3RhdGU6IGZhbHNlLFxuICAgICAgaGFzaDogdHJ1ZSxcbiAgICAgIG1pblpvb206IDIsXG4gICAgfSlcblxuICAgIC8vIG1hcC5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vICAgLy8gdXNpbmcgZSB0byBwYXNzID0gbGludGluZyBlcnJvclxuICAgIC8vICAgcmV0dXJuIGVcbiAgICAvLyAgIC8vIGNvbnN0IGZlYXR1cmVzID0gbWFwLnF1ZXJ5UmVuZGVyZWRGZWF0dXJlcyhlLnBvaW50KVxuICAgIC8vICAgLy8gY29uc29sZS5sb2coJ2ZlYXR1cmVzOiAnLCBmZWF0dXJlcylcbiAgICAvLyB9KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAvLyB3aWxsIGJlIGNoZWNraW5nIHByZXZpb3VzIHByb3BzIGFnYWluc3QgbmV4dFByb3BzIGluIG9yZGVyXG4gICAgLy8gdG8gZGV0ZXJtaW5lIHdoYXQgYWN0aW9uIG5lZWRzIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbWFwXG5cbiAgICAvLyBkaXNwbGF5IGNvdW50cnkgbGFiZWwsIHNoYWRlIGluIGNvdW50cnkgYXJlYSBhZnRlciBpdCBpcyBmb3VuZFxuICAgIGlmICh0aGlzLnByb3BzLm5hbWVkUGxhY2UgIT09IG5leHRQcm9wcy5uYW1lZFBsYWNlKSB7XG4gICAgICBjb25zdCBwbGFjZUNvZGUgPSBuZXh0UHJvcHMubmFtZWRQbGFjZVxuXG4gICAgICBpZiAobmV4dFByb3BzLnN0YXRlcyAmJiBuZXh0UHJvcHMuY2FwaXRhbHMpIHtcbiAgICAgICAgLy8gc2hvdyBzdGF0ZSBhbmQgc3RhdGUgY2FwaXRhbCBuYW1lXG4gICAgICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShgVVNTVF8ke3BsYWNlQ29kZX1gLCAndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgbWFwLnNldExheW91dFByb3BlcnR5KGBVU1NUQ0FQXyR7cGxhY2VDb2RlfWAsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgfSBlbHNlIGlmICghbmV4dFByb3BzLnN0YXRlcyAmJiBuZXh0UHJvcHMuY2FwaXRhbHMpIHtcbiAgICAgICAgLy8gbmVlZCB0byBhZGQgbGFiZWwgbGF5ZXJzIGZvciBldmVyeSBjb3VudHJ5IGNhcGl0YWxcbiAgICAgICAgLy8gbWFwLnNldExheW91dFByb3BlcnR5KGAke3BsYWNlQ29kZX1fTEFCRUxgLCAndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLnN0YXRlcyAmJiAhbmV4dFByb3BzLmNhcGl0YWxzKSB7XG4gICAgICAgIC8vIHNob3cgc3RhdGUgbmFtZVxuICAgICAgICBtYXAuc2V0TGF5b3V0UHJvcGVydHkoYFVTU1RfJHtwbGFjZUNvZGV9YCwgJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzaG93IGNvdW50cnkgbmFtZVxuICAgICAgICBtYXAuc2V0TGF5b3V0UHJvcGVydHkoYCR7cGxhY2VDb2RlfV9MQUJFTGAsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgfVxuXG4gICAgICAvLyBtYXAuc2V0UGFpbnRQcm9wZXJ0eShwbGFjZUNvZGUsICdmaWxsLW9wYWNpdHknLCAxKVxuICAgICAgLy8gbWFwLnNldFBhaW50UHJvcGVydHkocGxhY2VDb2RlLCAnZmlsbC1vdXRsaW5lLWNvbG9yJywgJ3JnYig0MSwgMTY5LCA0NSknKVxuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIHRoZSBtYXAgbmVlZHMgdG8gcGFuIHRvIGEgbmV3IGxvY2F0aW9uXG4gICAgaWYgKHRoaXMucHJvcHMubG9ubGF0ICE9PSBuZXh0UHJvcHMubG9ubGF0KSB7XG4gICAgICBzaG93SGlkZUFsbENvdW50cnlMYWJlbHMoQ09ERVMuQ09VTlRSSUVTLCAnbm9uZScpXG4gICAgICBzaG93SGlkZUFsbFN0YXRlTGFiZWxzKENPREVTLlVTX1NUQVRFUywgJ25vbmUnKVxuICAgICAgbWFwLmZseVRvKHsgY2VudGVyOiBuZXh0UHJvcHMubG9ubGF0LCB6b29tOiBuZXh0UHJvcHMuem9vbSwgc3BlZWQ6IDAuNCB9KVxuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciB0aGUgc2VsZWN0ZWQgY29udGluZW50XG4gICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRDb250aW5lbnQgIT09IG5leHRQcm9wcy5zZWxlY3RlZENvbnRpbmVudCkge1xuICAgICAgbWFwLmZseVRvKHsgY2VudGVyOiBuZXh0UHJvcHMubG9ubGF0LCB6b29tOiBuZXh0UHJvcHMuem9vbSwgc3BlZWQ6IDAuNCB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXtzdHlsZS5tYXB9IC8+XG4gICAgKVxuICB9XG59XG5cbk1hcHMucHJvcFR5cGVzID0ge1xuICBsb25sYXQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gIHpvb206IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmFtZWRQbGFjZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZENvbnRpbmVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdGF0ZXM6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGNhcGl0YWxzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufVxuIl19
