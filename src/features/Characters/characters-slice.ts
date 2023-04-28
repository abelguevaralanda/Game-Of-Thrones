import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Character from './characters-model';
import getAllCharacters from './characters-api';
import { RootState } from '../../app/store';

const STATE_NAME = 'characters';
export type CharacterState = 'idle' | 'succes' | 'error';

export enum APIStatus {
  LOADING = 'loading',
  IDLE = 'idle',
  ERROR = 'failed',
}

export interface CharactersState {
  characters: Character[];
  status: APIStatus;
  charactersState: CharacterState;
}

const INITIAL_STATE: CharactersState = {
  characters: [],
  status: APIStatus.IDLE,
  charactersState: 'idle',
};

export const getAllCharactersAsync = createAsyncThunk(
  `${STATE_NAME}/getAllCharacters`,
  async () => {
    const apiRes = await getAllCharacters();

    return apiRes;
  },
);

export const charactersSlice = createSlice({
  name: STATE_NAME,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllCharactersAsync.pending, state => {
        state.status = APIStatus.LOADING;
        state.charactersState = 'idle';
      })
      .addCase(getAllCharactersAsync.fulfilled, (state, action) => {
        state.status = APIStatus.IDLE;
        state.charactersState = 'succes';
        state.characters = action.payload.characters;
      })
      .addCase(getAllCharactersAsync.rejected, state => {
        state.status = APIStatus.ERROR;
        state.charactersState = 'error';
      });
  },
});

export const selectCharacters = (state: RootState) => state.characters;

export default charactersSlice.reducer;
