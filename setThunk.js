const axios = require('axios').default;

const setPoints=(data)=>{
  return {
    type: 'LOGIN',
		payload: data
  };
}

//this is the thunk for middleware
export function fetchPoints() {
  return function(dispatch) {
    return axios.get('')
      .then(({ data }) => {
      dispatch(setPoints(data));
    });
  };
}
