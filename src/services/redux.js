import {configureStore, createSlice} from "@reduxjs/toolkit";


//Creation de l'état actuel -  reducer : sert pour les interactions avec l'etat actuel
const infoSlice = createSlice({
    name: "user",

    initialState: {
        token:null,
        userName: localStorage.getItem('userName'),
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),

    },

    reducers: {
        LoginSuccess : (state, action) =>{
           // type: user/LoginSuccess
           state.token = action.payload;
        },
        LoginFailure : (state, action) =>{
            // type: user/LoginFailure
            state.token = null;
        },
        LogOut : (state, action) => {
            // type: user/LogOut
            state.token = null;
        },
        EditUser : (state, action) =>{
            //type: user/EditUser
            state.userName = action.payload.userName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
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

export const {LoginSuccess, LogOut} = infoSlice.actions;