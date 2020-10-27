"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var BlueButton = function (props) {
    var handleClick = function () {
        alert("Hello world");
    };
    return (react_1["default"].createElement("button", { className: "blueButton", onClick: handleClick }, "I am blue"));
};
exports["default"] = BlueButton;
