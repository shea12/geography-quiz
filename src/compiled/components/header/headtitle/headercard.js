'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  headerStyle: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    backgroundColor: 'rgba(140, 140, 140, 0.5)'
  }
};

function HeaderCard() {
  return _react2.default.createElement(
    _Card.Card,
    null,
    _react2.default.createElement(_Card.CardHeader, {
      style: style.headerStyle,
      className: 'small'
    })
  );
}

module.exports = HeaderCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci9oZWFkdGl0bGUvaGVhZGVyY2FyZC5qc3giXSwibmFtZXMiOlsic3R5bGUiLCJoZWFkZXJTdHlsZSIsInBvc2l0aW9uIiwiekluZGV4Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJIZWFkZXJDYXJkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsUUFBUTtBQUNaQyxlQUFhO0FBQ1hDLGNBQVUsVUFEQztBQUVYQyxZQUFRLENBRkc7QUFHWEMsV0FBTyxNQUhJO0FBSVhDLHFCQUFpQjtBQUpOO0FBREQsQ0FBZDs7QUFTQSxTQUFTQyxVQUFULEdBQXNCO0FBQ3BCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFDRSxhQUFPTixNQUFNQyxXQURmO0FBRUUsaUJBQVU7QUFGWjtBQURGLEdBREY7QUFRRDs7QUFFRE0sT0FBT0MsT0FBUCxHQUFpQkYsVUFBakIiLCJmaWxlIjoiaGVhZGVyY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQsIENhcmRIZWFkZXIgfSBmcm9tICdtYXRlcmlhbC11aS9DYXJkJ1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgaGVhZGVyU3R5bGU6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB6SW5kZXg6IDIsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE0MCwgMTQwLCAxNDAsIDAuNSknLFxuICB9LFxufVxuXG5mdW5jdGlvbiBIZWFkZXJDYXJkKCkge1xuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgc3R5bGU9e3N0eWxlLmhlYWRlclN0eWxlfVxuICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXG4gICAgICAvPlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlckNhcmRcbiJdfQ==
