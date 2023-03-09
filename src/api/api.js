import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const responce = await axios.post('/users/signup/', credentials);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      toast.error(`wrong data, try again`, {
        duration: 4000,
        position: 'top-center',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};


export const getTtns = () => {
    console.log("get")
}

export const postTtns = () => {
    console.log("post")
}