import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface habitState {
  habits: Habit[];
}

const initialState: habitState = {
  habits: [],
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (
      state,
      action: PayloadAction<{ name: string; frequency: "daily" | " weekly" }>
    ) => {
        const newHabit:Habit = {id:Date.now().toString(),
            name: action.payload.name,
            frequency: action.payload.frequency,
            completedDates: [],
            createdAt: new Date.toISOstringt,}
    },
  },
});

export const { addHabit } = habitSlice.actions;
export default habitSlice.reducer;
