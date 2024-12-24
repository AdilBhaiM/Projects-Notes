"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import path from 'path';

var app = (0, _express["default"])();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Hello 7667676776');
});
app.listen(port, function () {
  console.log("Example app is listening at localhost:".concat(port));
});