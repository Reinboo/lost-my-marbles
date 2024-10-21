import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MarbleBox {
  id: number;
  marbles: number;
}

interface MarblesState {
  boxes: MarbleBox[];
  marblesCount: number;
  boxesCount: number;
}

const initialState: MarblesState = {
  boxes: [],
  marblesCount: 0,
  boxesCount: 0,
};

const marblesSlice = createSlice({
  name: 'marbles',
  initialState,
  reducers: {
    addMarbleBox: (state, action: PayloadAction<number>) => {
      const newBox: MarbleBox = { id: Date.now(), marbles: action.payload };
      state.boxes.push(newBox);
      state.boxesCount += 1;
      state.marblesCount += action.payload;
    },
    removeMarbleBox: (state, action: PayloadAction<number>) => {
      const boxToRemove = state.boxes.find(box => box.id === action.payload);
      if (boxToRemove) {
        state.marblesCount -= boxToRemove.marbles;
        state.boxesCount -= 1;
      }
      state.boxes = state.boxes.filter(box => box.id !== action.payload);
    },
    incrementMarbles: (state, action: PayloadAction<number>) => {
      const box = state.boxes.find(box => box.id === action.payload);
      if (box) {
        box.marbles += 1;
        state.marblesCount += 1;
      }
    },
    decrementMarbles: (state, action: PayloadAction<number>) => {
      const box = state.boxes.find(box => box.id === action.payload);
      if (box && box.marbles > 0) {
        box.marbles -= 1;
        state.marblesCount -= 1;
      }
    },
  },
});

export const { addMarbleBox, removeMarbleBox, incrementMarbles, decrementMarbles } = marblesSlice.actions;
export default marblesSlice.reducer;
