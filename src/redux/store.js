import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import skillsReducer from './reducers/skills';
import servicesReducer from './reducers/services';
import {changeSearchEpic, searchSkillsEpic, servicesDownloadEpic} from './epics';

const reducer = combineReducers({
  skills: skillsReducer,
  services: servicesReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(changeSearchEpic, searchSkillsEpic, servicesDownloadEpic);
const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, composeEnhancers(applyMiddleware(epicMiddleware)));
epicMiddleware.run(epic);
export default store;
