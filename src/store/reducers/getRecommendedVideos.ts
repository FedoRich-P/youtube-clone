import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../index.ts';
import axios from 'axios';
import type { RecommendedVideos } from '../../Types.ts';
import { YOUTUBE_API_URL } from '../../utils/constants.ts';

export const getRecommendedVideos = createAsyncThunk(
  // "yotubeApp/getRecommendedVideos",
  // async (videoId: string, { getState }) => {
  //   const {
  //     youtubeApp: {
  //       currentPlaying: {
  //         channelInfo: { id: channelId },
  //       },
  //     },
  //   } = getState() as RootState;
  //
  //   const {
  //     data: { items },
  //   } = await axios.get(
  //     `${YOUTUBE_API_URL}/activities?key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=video&videoId=${videoId}`
  //   );
  //
  //   const parsedData: RecommendedVideos[] = await parseRecommendedData(
  //     items,
  //     videoId
  //   );
  //
  //   return { parsedData };
  // }
);