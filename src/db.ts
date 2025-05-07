import type { HomePageVideos } from './Types.ts';

export const videos: HomePageVideos[] = Array.from({ length: 20 }, (_, i) => ({
  videoId: `video-${i + 1}`,
  videoTitle: `Интересное видео #${i + 1}`,
  videoViews: `${Math.floor(Math.random() * 1000)}K`,
  videoAge: `${Math.floor(Math.random() * 12) + 1} месяцев назад`,
  videoDescription: `Описание к видео номер ${i + 1}, в котором рассказывается о чём-то важном.`,
  videoLink: `https://www.youtube.com/watch?v=video-${i + 1}`,
  videoThumbnail: `https://img.youtube.com/vi/video-${i + 1}/hqdefault.jpg`,
  videoDuration: `${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 60)
    .toString()
    .padStart(2, '0')}`,
  channelInfo: {
    id: `channel-${i + 1}`,
    image: `https://via.placeholder.com/48x48?text=C${i + 1}`,
    name: `Канал ${i + 1}`,
  },
}));