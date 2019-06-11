import * as types from '../constants/actionTypes';

const initialState = {
  userNameStr : '',
  passwordStr : '',
  isLoggedIn : false,
  isSignUp : false,
  email: '',
  error: null,
  firstVarVal: ''
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case types.FIRST_ACTION:
      return{
        ...state,
        firstVarVal: action.payload
      }
  }


  
}






