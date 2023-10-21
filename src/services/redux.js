import { configureStore, createSlice } from '@reduxjs/toolkit';
//Se servir de Slice pour combiner createAction et createReducer en une seule action


//Etat initial 
const initialState = {
  userName: localStorage.getItem('userName'),
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName'),
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    Token: (state, action) => {
      state.token = action.payload;
    },
    UserName: (state, action) => {
      state.userName = action.payload;
    },
    FirstName: (state, action) => {
      state.firstName = action.payload;
    },
    LastName: (state, action) => {
      state.lastName = action.payload;
    },
    resetUser: (state) => initialState,
  },
});

//Action exportées pour être utiliser ailleurs 
export const {
  Token,
  UserName,
  FirstName,
  LastName,
  resetUser,
} = userSlice.actions;


//store creer pour gerer l'etat global et donne acces aux composants
export const redux = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});