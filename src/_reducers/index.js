function userReducer(state = {}, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        user: action.user
      }
    default:
      return state;
  }
}

export default userReducer;
