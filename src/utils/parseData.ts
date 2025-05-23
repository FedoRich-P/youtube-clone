import axios from 'axios';

import { API_KEY, YOUTUBE_API_URL } from './constants';
import type { HomePageVideos, YouTubeSearchItem } from '../Types.ts';
import { parseVideoDuration } from './parseVideoDuration.ts';
import { convertRawViewsToString } from './convertRawViewstoString.ts';
import { timeSince } from './timeSince.ts';

export const parseData = async (
  items: YouTubeSearchItem[]
): Promise<HomePageVideos[] | undefined> => {
  try {
    const videoIds: string[] = [];
    const channelIds: string[] = [];
    items.forEach((item: { snippet: { channelId: string }; id: { videoId: string } }) => {
      channelIds.push(item.snippet.channelId);
      videoIds.push(item.id.videoId);
    });

    const {
      data: { items: channelsData },
    } = await axios.get(
      `${YOUTUBE_API_URL}/channels?part=snippet,contentDetails&id=${channelIds.join(
        ','
      )}&key=${API_KEY}`
    );

    const parsedChannelsData: { id: string; image: string }[] = [];
    channelsData.forEach(
      (channel: { id: string; snippet: { thumbnails: { default: { url: string } } } }) =>
        parsedChannelsData.push({
          id: channel.id,
          image: channel.snippet.thumbnails.default.url,
        })
    );

    const {
      data: { items: videosData },
    } = await axios.get(
      `${YOUTUBE_API_URL}/videos?part=contentDetails,statistics&id=${videoIds.join(
        ','
      )}&key=${API_KEY}`
    );
    const parsedData: HomePageVideos[] = [];
    items.forEach((item, index) => {
      const channelData = parsedChannelsData.find(data => data.id === item.snippet.channelId);
      if (!channelData) return;
      const { image: channelImage } = channelData
      if (channelImage)
        parsedData.push({
          videoId: item.id.videoId,
          videoTitle: item.snippet.title,
          videoDescription: item.snippet.description,
          videoThumbnail: item.snippet.thumbnails.medium.url,
          videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          videoDuration: parseVideoDuration(videosData[index].contentDetails.duration),
          videoViews: convertRawViewsToString(videosData[index].statistics.viewCount),
          videoAge: timeSince(new Date(item.snippet.publishedAt)),
          channelInfo: {
            id: item.snippet.channelId,
            image: channelImage,
            name: item.snippet.channelTitle,
          },
        });
    });

    return parsedData;
  } catch (err) {
    console.log(err);
  }
};
