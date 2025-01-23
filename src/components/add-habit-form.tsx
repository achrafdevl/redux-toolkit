import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddDispatch } from "../store/store";
import { addHabit } from "../store/habit-slice";
const AddHabitForm: React.FC = () => {
  const [name, SetName] = useState<string>("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

  const dispatch = useDispatch<AddDispatch>();

  const handeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(
        addHabit({
          name,
          frequency,
        })
      );
      SetName("");
    }
  };

  return (
    <form onSubmit={handeSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="habits Name"
          value={name}
          onChange={(e) => SetName(e.target.value)}
          placeholder="Enter habit name"
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Frequenvy</InputLabel>
          <Select
            value={frequency}
            onChange={(e) =>
              setFrequency(e.target.value as "daily" | " weekly")
            }
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
      </Box>
    </form>
  );
};

export default AddHabitForm;
