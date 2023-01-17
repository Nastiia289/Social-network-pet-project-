import {configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const store = configureStore({
    reducer:{
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer

    }
  })
window.store=store;
export default store;