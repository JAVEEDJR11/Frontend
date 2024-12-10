import {configureStore} from '@reduxjs/toolkit';
import apiReducer from './Api/Apislice'
const store=configureStore({
     reducer:{
        api:apiReducer
     }


});
export default store;