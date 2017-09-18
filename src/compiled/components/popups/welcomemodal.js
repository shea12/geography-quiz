'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import PropTypes from 'prop-types'

var style = {
  modalTitle: {
    textAlign: 'center'
  },
  modalInner: {
    height: '400px'
  },
  byLine: {
    fontSize: '12px'
  }
};

var WelcomeModal = function (_React$Component) {
  _inherits(WelcomeModal, _React$Component);

  function WelcomeModal(props) {
    _classCallCheck(this, WelcomeModal);

    var _this = _possibleConstructorReturn(this, (WelcomeModal.__proto__ || Object.getPrototypeOf(WelcomeModal)).call(this, props));

    _this.state = {
      open: true
    };
    _this.close = _this.close.bind(_this);
    return _this;
  }

  // LINT: do not use setState in componentDidMount
  /* eslint-disable */


  _createClass(WelcomeModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ showModal: true });
    }
    /* eslint-enable */

  }, {
    key: 'close',
    value: function close() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var actions = [];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Dialog2.default,
          {
            style: style.modalTitle,
            title: 'Welcome to the Geography Quiz',
            actions: actions,
            modal: false,
            open: this.state.open,
            onRequestClose: this.close
          },
          _react2.default.createElement(
            'div',
            { style: style.modalInner },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'This site is for geography nerds to test their knowledge on a wide array of administrative, political, and geographic features around the world. All quizzes are timed so you can keep track of your progress. Current quizzes include countries, capitals, and states.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'Quizzes coming soon: bodies of water, landforms, cities, and world leaders',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'Feel free to explore the map and when you are ready, get started with the quiz categories above.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'Some categories are not live yet but check back soon, I am always creating more quizzes.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'Please ',
              _react2.default.createElement(
                'u',
                null,
                'leave a comment'
              ),
              ' if you have any suggestions; feedback is welcome.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              { style: style.byLine },
              'This project was created by Garol. Learn more',
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/shea12/geography-quiz', target: '_blank', rel: 'noopener noreferrer' },
                ' here'
              ),
              '.'
            )
          )
        )
      );
    }
  }]);

  return WelcomeModal;
}(_react2.default.Component);

// WelcomeModal.propTypes = {}


exports.default = WelcomeModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL3BvcHVwcy93ZWxjb21lbW9kYWwuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwibW9kYWxUaXRsZSIsInRleHRBbGlnbiIsIm1vZGFsSW5uZXIiLCJoZWlnaHQiLCJieUxpbmUiLCJmb250U2l6ZSIsIldlbGNvbWVNb2RhbCIsInByb3BzIiwic3RhdGUiLCJvcGVuIiwiY2xvc2UiLCJiaW5kIiwic2V0U3RhdGUiLCJzaG93TW9kYWwiLCJhY3Rpb25zIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLElBQU1BLFFBQVE7QUFDWkMsY0FBWTtBQUNWQyxlQUFXO0FBREQsR0FEQTtBQUlaQyxjQUFZO0FBQ1ZDLFlBQVE7QUFERSxHQUpBO0FBT1pDLFVBQVE7QUFDTkMsY0FBVTtBQURKO0FBUEksQ0FBZDs7SUFZcUJDLFk7OztBQUNuQix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTTtBQURLLEtBQWI7QUFHQSxVQUFLQyxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXQyxJQUFYLE9BQWI7QUFMaUI7QUFNbEI7O0FBRUQ7QUFDQTs7Ozs7d0NBQ29CO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFFQyxXQUFXLElBQWIsRUFBZDtBQUNEO0FBQ0Q7Ozs7NEJBRVE7QUFDTixXQUFLRCxRQUFMLENBQWMsRUFBRUgsTUFBTSxLQUFSLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUssVUFBVSxFQUFoQjs7QUFFQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFPZixNQUFNQyxVQURmO0FBRUUsbUJBQU0sK0JBRlI7QUFHRSxxQkFBU2MsT0FIWDtBQUlFLG1CQUFPLEtBSlQ7QUFLRSxrQkFBTSxLQUFLTixLQUFMLENBQVdDLElBTG5CO0FBTUUsNEJBQWdCLEtBQUtDO0FBTnZCO0FBUUU7QUFBQTtBQUFBLGNBQUssT0FBT1gsTUFBTUcsVUFBbEI7QUFDRTtBQUFBO0FBQUE7QUFDRSx1REFERjtBQUNRLHVEQURSO0FBQUE7QUFNRSx1REFORjtBQU1RLHVEQU5SO0FBQUE7QUFRRSx1REFSRjtBQVFRLHVEQVJSO0FBQUE7QUFXRSx1REFYRjtBQVdRLHVEQVhSO0FBQUE7QUFjRSx1REFkRjtBQWNRLHVEQWRSO0FBQUE7QUFlUztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZlQ7QUFBQTtBQUFBO0FBREYsV0FSRjtBQTJCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsT0FBT0gsTUFBTUssTUFBaEI7QUFBQTtBQUVFO0FBQUE7QUFBQSxrQkFBRyxNQUFLLDBDQUFSLEVBQW1ELFFBQU8sUUFBMUQsRUFBbUUsS0FBSSxxQkFBdkU7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBREY7QUEzQkY7QUFERixPQURGO0FBdUNEOzs7O0VBOUR1QyxnQkFBTVcsUzs7QUFpRWhEOzs7a0JBakVxQlQsWSIsImZpbGUiOiJ3ZWxjb21lbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRGlhbG9nIGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZydcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3Qgc3R5bGUgPSB7XG4gIG1vZGFsVGl0bGU6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB9LFxuICBtb2RhbElubmVyOiB7XG4gICAgaGVpZ2h0OiAnNDAwcHgnLFxuICB9LFxuICBieUxpbmU6IHtcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWxjb21lTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiB0cnVlLFxuICAgIH1cbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpXG4gIH1cblxuICAvLyBMSU5UOiBkbyBub3QgdXNlIHNldFN0YXRlIGluIGNvbXBvbmVudERpZE1vdW50XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSlcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERpYWxvZ1xuICAgICAgICAgIHN0eWxlPXtzdHlsZS5tb2RhbFRpdGxlfVxuICAgICAgICAgIHRpdGxlPVwiV2VsY29tZSB0byB0aGUgR2VvZ3JhcGh5IFF1aXpcIlxuICAgICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5jbG9zZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLm1vZGFsSW5uZXJ9PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICBUaGlzIHNpdGUgaXMgZm9yIGdlb2dyYXBoeSBuZXJkcyB0byB0ZXN0IHRoZWlyIGtub3dsZWRnZSBvbiBhIHdpZGVcbiAgICAgICAgICAgICAgYXJyYXkgb2YgYWRtaW5pc3RyYXRpdmUsIHBvbGl0aWNhbCwgYW5kIGdlb2dyYXBoaWMgZmVhdHVyZXMgYXJvdW5kIHRoZSB3b3JsZC5cbiAgICAgICAgICAgICAgQWxsIHF1aXp6ZXMgYXJlIHRpbWVkIHNvIHlvdSBjYW4ga2VlcCB0cmFjayBvZiB5b3VyIHByb2dyZXNzLlxuICAgICAgICAgICAgICBDdXJyZW50IHF1aXp6ZXMgaW5jbHVkZSBjb3VudHJpZXMsIGNhcGl0YWxzLCBhbmQgc3RhdGVzLlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgUXVpenplcyBjb21pbmcgc29vbjogYm9kaWVzIG9mIHdhdGVyLCBsYW5kZm9ybXMsIGNpdGllcywgYW5kIHdvcmxkIGxlYWRlcnNcbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIEZlZWwgZnJlZSB0byBleHBsb3JlIHRoZSBtYXAgYW5kIHdoZW4geW91IGFyZSByZWFkeSxcbiAgICAgICAgICAgICAgZ2V0IHN0YXJ0ZWQgd2l0aCB0aGUgcXVpeiBjYXRlZ29yaWVzIGFib3ZlLlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgU29tZSBjYXRlZ29yaWVzIGFyZSBub3QgbGl2ZSB5ZXQgYnV0IGNoZWNrIGJhY2sgc29vbixcbiAgICAgICAgICAgICAgSSBhbSBhbHdheXMgY3JlYXRpbmcgbW9yZSBxdWl6emVzLlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgUGxlYXNlIDx1PmxlYXZlIGEgY29tbWVudDwvdT4gaWYgeW91IGhhdmUgYW55IHN1Z2dlc3Rpb25zOyBmZWVkYmFjayBpcyB3ZWxjb21lLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGUuYnlMaW5lfT5cbiAgICAgICAgICAgICAgVGhpcyBwcm9qZWN0IHdhcyBjcmVhdGVkIGJ5IEdhcm9sLiBMZWFybiBtb3JlXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2hlYTEyL2dlb2dyYXBoeS1xdWl6XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBoZXJlXG4gICAgICAgICAgICAgIDwvYT4uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGlhbG9nPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vIFdlbGNvbWVNb2RhbC5wcm9wVHlwZXMgPSB7fVxuIl19
