import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        userData:null
    },
    reducers:{
        setUserData:(state,action)=>{
            state.userData = action.payload

        },
        updateCredits:(state,action)=>{
            if(state.userData){
                state.userData.credits = action.payload
            }
        }
    }
})

export const {setUserData , updateCredits} = userSlice.actions

export default userSlice.reducer
//We have created a user slice to manage the user data in our application. We have defined two actions, setUserData and updateCredits, to update the user data and credits respectively. The reducer will handle these actions and update the state accordingly.