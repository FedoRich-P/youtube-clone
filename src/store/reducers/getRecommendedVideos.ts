import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../index.ts';
import axios from 'axios';
import { API_KEY, YOUTUBE_API_URL } from '../../utils/constants.ts';
import { parseRecommendedData } from '../../utils/parseRecommendedData.ts';

export const getRecommendedVideos = createAsyncThunk(
  'yotubeApp/getRecommendedVideos',
  async (videoId: string, { getState }) => {
    const { currentPlaying } = (getState() as RootState).youtubeApp;

    if (!currentPlaying) throw new Error('No currently playing video');

    const channelId = currentPlaying.channelInfo.id;

    const {
      data: { items },
    } = await axios.get(
      `${YOUTUBE_API_URL}/activities?key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=video&videoId=${videoId}`
    );

    const parsedData = (await parseRecommendedData(items, videoId)) ?? [];

    return { parsedData };
  }
);