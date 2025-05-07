import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../index.ts';
import type { HomePageVideos } from '../../Types.ts';
import { API_KEY, YOUTUBE_API_URL } from '../../utils/constants.ts';
import { parseData } from '../../utils/parseData.ts';

export const getHomePageVideos = createAsyncThunk(
  'youtubeApp/homePageVidoes',
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as RootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ''
      }`
    );
    const parsedData: HomePageVideos[] | undefined = await parseData(items);
    if(!parsedData) return
    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);
