import {configureStore, createSlice} from "@reduxjs/toolkit";


//Creation de l'état actuel -  reducer : sert pour les interactions avec l'etat actuel
const infoSlice = createSlice({
    name: "user",
    initialState: {
      userInfo: {
        token: null,
        userName: localStorage.getItem('userName'),
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
      }
    },
    reducers: {
      LoginSuccess: (state, action) => {
        state.userInfo.token = action.payload.token;
        state.userInfo.userName = action.payload.userName;
        state.userInfo.firstName = action.payload.firstName;
        state.userInfo.lastName = action.payload.lastName;
      },
      LoginFailure: (state) => {
        state.userInfo.token = null;
      },
      LogOut: (state) => {
        state.userInfo = {
          token: null,
          userName: null,
          firstName: null,
          lastName: null,
        };
      },
      EditUser: (state, action) => {
        if (action.payload.userName) {
          state.userInfo.userName = action.payload.userName;
        }
        if (action.payload.firstName) {
          state.userInfo.firstName = action.payload.firstName;
        }
        if (action.payload.lastName) {
          state.userInfo.lastName = action.payload.lastName;
        }
      },
    },
  });
/**J'englobe tous mes reducers("slices"/"actions") dans mon store , 
 et je met le store au provider pour 
 qu'il soit accessible a l'ensemble de mes composants
**/
export const store = configureStore({
    reducer: {
        user : infoSlice.reducer,
    },
});

export const {LoginSuccess, LoginFailure, LogOut, EditUser} = infoSlice.actions;
