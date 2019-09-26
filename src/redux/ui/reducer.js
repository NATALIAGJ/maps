import actions from './actions';

const initState = {
  isAuth: false,
  perfil: {}
};

export default function authReducer(
  state = initState,
  action
) {
  switch (action.type) {
    case actions.PERFIL:
      return {
        ...state,
        isAuth: true,
        perfil: action.payload
      }
    case actions.LOGOUT:
      return initState;
    case actions.LOGOUT_SUCCESS:
      return initState;
    default:
      return state;
  }
}