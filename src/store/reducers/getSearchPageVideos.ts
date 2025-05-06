import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../index.ts';
import axios from 'axios';
import { API_KEY, YOUTUBE_API_URL } from '../../utils/constants.ts';
import type { HomePageVideos } from '../../Types.ts';

export const getSearchPageVideos = createAsyncThunk(
  "youtubeApp/serachPageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos, searchTerm },
    } = getState() as RootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );
    const parsedData: HomePageVideos[] = await parseData(items);
    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);