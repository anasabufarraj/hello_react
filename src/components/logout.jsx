//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
function Logout() {
  localStorage.removeItem('token');
  window.location = '/';
  return null;
}

export default Logout;
