'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {  } from 'react-bootstrap'

var style = {
  scoreDiv: {
    position: 'absolute',
    zIndex: 2,
    marginTop: 0,
    marginLeft: '38%'
  }
};

var ScoreKeeper = function (_React$Component) {
  _inherits(ScoreKeeper, _React$Component);

  function ScoreKeeper(props) {
    _classCallCheck(this, ScoreKeeper);

    var _this = _possibleConstructorReturn(this, (ScoreKeeper.__proto__ || Object.getPrototypeOf(ScoreKeeper)).call(this, props));

    _this.state = {
      continent: null,
      remain: null
    };
    return _this;
  }

  _createClass(ScoreKeeper, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        continent: this.props.continent,
        remain: this.props.placesArray.length
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var remaining = nextProps.placesArray.length;
      if (this.state.continent === nextProps.continent) {
        // the continent has not changed
        // check for updates to found and remaining
        this.setState({
          remain: remaining
        });
      } else {
        // the continent has changed, must reset state
        this.setState({
          continent: nextProps.continent,
          remain: remaining
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: style.scoreDiv },
        _react2.default.createElement(
          'h5',
          null,
          this.state.remain
        )
      );
    }
  }]);

  return ScoreKeeper;
}(_react2.default.Component);

exports.default = ScoreKeeper;


ScoreKeeper.propTypes = {
  continent: _propTypes2.default.string.isRequired,
  placesArray: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci9pbnB1dHNjb3JldGltZS9zY29yZWtlZXBlci5qc3giXSwibmFtZXMiOlsic3R5bGUiLCJzY29yZURpdiIsInBvc2l0aW9uIiwiekluZGV4IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIlNjb3JlS2VlcGVyIiwicHJvcHMiLCJzdGF0ZSIsImNvbnRpbmVudCIsInJlbWFpbiIsInNldFN0YXRlIiwicGxhY2VzQXJyYXkiLCJsZW5ndGgiLCJuZXh0UHJvcHMiLCJyZW1haW5pbmciLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQSxJQUFNQSxRQUFRO0FBQ1pDLFlBQVU7QUFDUkMsY0FBVSxVQURGO0FBRVJDLFlBQVEsQ0FGQTtBQUdSQyxlQUFXLENBSEg7QUFJUkMsZ0JBQVk7QUFKSjtBQURFLENBQWQ7O0lBU3FCQyxXOzs7QUFDbkIsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXLElBREE7QUFFWEMsY0FBUTtBQUZHLEtBQWI7QUFGaUI7QUFNbEI7Ozs7eUNBRW9CO0FBQ25CLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixtQkFBVyxLQUFLRixLQUFMLENBQVdFLFNBRFY7QUFFWkMsZ0JBQVEsS0FBS0gsS0FBTCxDQUFXSyxXQUFYLENBQXVCQztBQUZuQixPQUFkO0FBSUQ7Ozs4Q0FFeUJDLFMsRUFBVztBQUNuQyxVQUFNQyxZQUFZRCxVQUFVRixXQUFWLENBQXNCQyxNQUF4QztBQUNBLFVBQUksS0FBS0wsS0FBTCxDQUFXQyxTQUFYLEtBQXlCSyxVQUFVTCxTQUF2QyxFQUFrRDtBQUNoRDtBQUNBO0FBQ0EsYUFBS0UsUUFBTCxDQUFjO0FBQ1pELGtCQUFRSztBQURJLFNBQWQ7QUFHRCxPQU5ELE1BTU87QUFDTDtBQUNBLGFBQUtKLFFBQUwsQ0FBYztBQUNaRixxQkFBV0ssVUFBVUwsU0FEVDtBQUVaQyxrQkFBUUs7QUFGSSxTQUFkO0FBSUQ7QUFDRjs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxPQUFPZixNQUFNQyxRQUFsQjtBQUNFO0FBQUE7QUFBQTtBQUFLLGVBQUtPLEtBQUwsQ0FBV0U7QUFBaEI7QUFERixPQURGO0FBS0Q7Ozs7RUF2Q3NDLGdCQUFNTSxTOztrQkFBMUJWLFc7OztBQTBDckJBLFlBQVlXLFNBQVosR0FBd0I7QUFDdEJSLGFBQVcsb0JBQVVTLE1BQVYsQ0FBaUJDLFVBRE47QUFFdEJQLGVBQWEsb0JBQVVRLE9BQVYsQ0FBa0Isb0JBQVVDLE1BQTVCLEVBQW9DRjtBQUYzQixDQUF4QiIsImZpbGUiOiJzY29yZWtlZXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbi8vIGltcG9ydCB7ICB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHNjb3JlRGl2OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgekluZGV4OiAyLFxuICAgIG1hcmdpblRvcDogMCxcbiAgICBtYXJnaW5MZWZ0OiAnMzglJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVLZWVwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb250aW5lbnQ6IG51bGwsXG4gICAgICByZW1haW46IG51bGwsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGluZW50OiB0aGlzLnByb3BzLmNvbnRpbmVudCxcbiAgICAgIHJlbWFpbjogdGhpcy5wcm9wcy5wbGFjZXNBcnJheS5sZW5ndGgsXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgcmVtYWluaW5nID0gbmV4dFByb3BzLnBsYWNlc0FycmF5Lmxlbmd0aFxuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRpbmVudCA9PT0gbmV4dFByb3BzLmNvbnRpbmVudCkge1xuICAgICAgLy8gdGhlIGNvbnRpbmVudCBoYXMgbm90IGNoYW5nZWRcbiAgICAgIC8vIGNoZWNrIGZvciB1cGRhdGVzIHRvIGZvdW5kIGFuZCByZW1haW5pbmdcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByZW1haW46IHJlbWFpbmluZyxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoZSBjb250aW5lbnQgaGFzIGNoYW5nZWQsIG11c3QgcmVzZXQgc3RhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250aW5lbnQ6IG5leHRQcm9wcy5jb250aW5lbnQsXG4gICAgICAgIHJlbWFpbjogcmVtYWluaW5nLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLnNjb3JlRGl2fT5cbiAgICAgICAgPGg1Pnt0aGlzLnN0YXRlLnJlbWFpbn08L2g1PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblNjb3JlS2VlcGVyLnByb3BUeXBlcyA9IHtcbiAgY29udGluZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBsYWNlc0FycmF5OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxufVxuIl19
