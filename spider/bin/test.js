"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Spider_1 = __importDefault(require("./Spider"));
new Spider_1.default({
    url: 'http://www.itcast.cn/newsvideo/newslist.html'
});
