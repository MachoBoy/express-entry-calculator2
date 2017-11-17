import { combineReducers } from 'redux';
import { namespaced } from 'redux-subspace';
import tableReducer from './tableReducer';
import authReducer from './authReducer';
export default combineReducers({
  // core withSpouse reducer
  withspouseAge: namespaced('withSpouseAge')(tableReducer),
  withspouseEdu: namespaced('withspouseEdu')(tableReducer),
  withspouseLangFirst: namespaced('withspouseLangFirst')(tableReducer),
  withspouseLangSecond: namespaced('withspouseLangSecond')(tableReducer),
  withspouseWork: namespaced('withspouseWork')(tableReducer),
  // core withoutSpouse reducer
  withoutspouseAge: namespaced('withoutspouseAge')(tableReducer),
  withoutspouseEdu: namespaced('withoutspouseEdu')(tableReducer),
  withoutspouseLangFirst: namespaced('withoutspouseLangFirst')(tableReducer),
  withoutspouseLangSecond: namespaced('withoutspouseLangSecond')(tableReducer),
  withoutspouseWork: namespaced('withoutspouseWork')(tableReducer),
  // Spouse factor reducer
  BwithspouseEdu: namespaced('BwithspouseEdu')(tableReducer),
  BwithspouseLang: namespaced('BwithspouseLang')(tableReducer),
  BwithspouseWork: namespaced('BwithspouseWork')(tableReducer),
  // skill transferability factors
  CEdu_1: namespaced('skillEducation1')(tableReducer),
  CEdu_2: namespaced('skillEducation2')(tableReducer),
  CForeignLang_1: namespaced('skillFwe1')(tableReducer),
  CForeignLang_2: namespaced('skillFwe2')(tableReducer),
  certificate: namespaced('skillCertificate')(tableReducer),
  // Additional
  additional: namespaced('additional')(tableReducer),
  auth: authReducer
});
