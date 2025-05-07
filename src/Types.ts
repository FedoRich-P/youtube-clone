export interface InitialState {
  videos: HomePageVideos[];
  currentPlaying: CurrentPlaying | null;
  searchTerm: string;
  searchResults: [];
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
}

type BaseVideo = {
  videoId: string;
  videoTitle: string;
  videoViews: string;
  videoAge: string;
}

type ChannelInfo = {
  id: string;
  image: string;
  name: string;
  subscribers: string;
};

export type HomePageVideos = {
  videoDescription: string;
  videoLink: string;
  videoThumbnail: string;
  videoDuration: string;
  channelInfo: Omit<ChannelInfo, 'subscribers'>
} & BaseVideo

export type CurrentPlaying = {
  videoDescription: string;
  videoLikes: string;
  channelInfo: ChannelInfo;
} & BaseVideo

export type RecommendedVideos = {
  videoThumbnail: string;
  videoDuration: string;
  channelInfo: Omit<ChannelInfo, 'subscribers' | 'image'>;
} & BaseVideo

type Snippets = {
  title: string;
  thumbnails: { medium: { url: string } };
  publishedAt: string;
  channelTitle: string;
  channelId: string;
  description: string;
}

export type Item = {
  snippet: Omit<Snippets, 'description'>;
  contentDetails: { upload: { videoId: string } };
}

export type YouTubeSearchItem = {
  id: { videoId: string };
  snippet: Snippets;
};