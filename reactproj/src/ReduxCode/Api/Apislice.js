import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL="http://localhost:8888/products";

export const fetchData=createAsyncThunk("api/fetchdata",async()=>{
        let response=await axios.get(API_URL);
        return response.data;

});
export const deleteData=createAsyncThunk("api/deletedata",async(id)=>{
        await axios.delete(`${API_URL}/${id}`);
    return id;

});
export const AddData=createAsyncThunk("api/adddata",async(newuser)=>{
    let response=await axios.post(API_URL,newuser);
    return response.data;

});

const apislice =createSlice({

      name:"api",
      initialState:{
        data:[],
        status:"idle",
        error:null
      } ,
      reducers:{},
      extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state)=>{
            state.status="loading"
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.status="sucess";
            state.data=action.payload;
        })
        .addCase(fetchData.rejected,(state,action)=>{
         state.status="failed"
         state.data= action.error.message;

        })
      }


})
export default apislice.reducer;

