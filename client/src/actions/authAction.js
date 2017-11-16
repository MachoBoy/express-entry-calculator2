import { auth } from '../services/firebase';
import {
  GET_EMAIL,
  GET_PASSWORD,
  GET_USER,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS
} from './types';

export const getEmail = text => {
  return {
    type: GET_EMAIL,
    payload: text
  };
};

export const getPassword = text => {
  return {
    type: GET_PASSWORD,
    payload: text
  };
};

export const getUser = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: 'GET_USER',
        payload: user
      });
    });
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });

    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

export const logoutUser = () => {
  return dispatch => {
    auth.signOut();
  };
};
