import { combineReducers } from 'redux';
import { namespaced } from 'redux-subspace';
import tableReducer from './tableReducer';
import authReducer from './authReducer';

export default combineReducers({
  //A withspouse core reducer
  AwithspouseAge: namespaced('AwithspouseAge')(tableReducer),
  AwithspouseEdu: namespaced('AwithspouseEdu')(tableReducer),
  AwithspouseLangFirst: namespaced('AwithspouseLangFirst')(tableReducer),
  AwithspouseLangSecond: namespaced('AwithspouseLangSecond')(tableReducer),
  AwithspouseWork: namespaced('AwithspouseWork')(tableReducer),
  //B withspouse Spouse factor reducer
  BwithspouseEdu: namespaced('BwithspouseEdu')(tableReducer),
  BwithspouseLang: namespaced('BwithspouseLang')(tableReducer),
  BwithspouseWork: namespaced('BwithspouseWork')(tableReducer),
  //C withspouse skill transferability factors
  CwithspouseEdu_1: namespaced('CwithspouseEdu_1')(tableReducer),
  CwithspouseEdu_2: namespaced('CwithspouseEdu_2')(tableReducer),
  CwithspouseForeignLang_1: namespaced('CwithspouseForeignLang_1')(
    tableReducer
  ),
  CwithspouseForeignLang_2: namespaced('CwithspouseForeignLang_2')(
    tableReducer
  ),
  CwithspouseCertificate: namespaced('CwithspouseCertificate')(tableReducer),
  //D withspouse Additional
  DwithspouseAdditional: namespaced('DwithspouseAdditional')(tableReducer),

  //A core withoutSpouse reducer
  AwithoutspouseAge: namespaced('AwithoutspouseAge')(tableReducer),
  AwithoutspouseEdu: namespaced('AwithoutspouseEdu')(tableReducer),
  AwithoutspouseLangFirst: namespaced('AwithoutspouseLangFirst')(tableReducer),
  AwithoutspouseLangSecond: namespaced('AwithoutspouseLangSecond')(
    tableReducer
  ),
  AwithoutspouseWork: namespaced('AwithoutspouseWork')(tableReducer),
  //C withspouse skill transferability factors
  CwithoutspouseEdu_1: namespaced('CwithoutspouseEdu_1')(tableReducer),
  CwithoutspouseEdu_2: namespaced('CwithoutspouseEdu_2')(tableReducer),
  CwithoutspouseForeignLang_1: namespaced('CwithoutspouseForeignLang_1')(
    tableReducer
  ),
  CwithoutspouseForeignLang_2: namespaced('CwithoutspouseForeignLang_2')(
    tableReducer
  ),
  CwithoutspouseCertificate: namespaced('CwithoutspouseCertificate')(
    tableReducer
  ),
  //D withspouse Additional
  DwithoutspouseAdditional: namespaced('DwithoutspouseAdditional')(
    tableReducer
  ),
  auth: authReducer
});
