import { createSlice } from "@reduxjs/toolkit";

export interface Habit {
    id:string;
    title:string;
    frequency:"daily" | "weekly";
    completedDates:string[];
    createdAt:string;
}

interface HabitState{
    habits:Habit[];
}

const initialState:HabitState = {
    habits:[],
}

const habitSlice = createSlice({
    name:"habit",
    initialState,
    reducers:{
        addHabit:()=>{},
    },
});

export const {addHabit} = habitSlice.actions;

export default habitSlice.reducer;