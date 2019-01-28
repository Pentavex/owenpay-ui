
function login(user) {
  return {
    type: 'USER_LOGIN',
    user
  };
}

function logout() {
  return {
    type: 'USER_LOGGED_OUT'
  };
}


const userActions = {
  login,
  logout
};

export default userActions;
