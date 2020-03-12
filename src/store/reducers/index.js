import { combineReducers } from "redux";
import topHeadlines from './topHeadLines';
import user from './user';

export default combineReducers({
    topHeadlines,
    user
})