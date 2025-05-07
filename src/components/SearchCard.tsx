import type { HomePageVideos } from '../Types.ts';
import { Link } from 'react-router';

type Props = {
  data: HomePageVideos;
};

export function SearchCard({ data }: Props) {
  return (
    <li className=" rounded-lg bg-navbar-bg hover:bg-transparent transition-colors duration-400">
      <article className={'flex w-full h-full gap-2'}>
        <div className="relative rounded-l-lg overflow-hidden mb-2 h-full">
          <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
            {data.videoDuration}
          </span>
          <Link to={`/watch/${data.videoId}`}>
            <img src={data.videoThumbnail} className="h-full w-full" alt="thumbnail" />
          </Link>
        </div>
        <div className="p-5 flex gap-1 flex-col">
          <h3 className="max-w-2xl mb-auto">
            <a href="#" className="line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>
          <div className="pb-2 grid grid-cols-2 items-end min-w-fit my-2 border-b border-gray-700">
            <a href="#" className="flex items-center gap-2 text-xs text-gray-400">
              <img src={data.channelInfo.image} alt="channel" className="h-9 w-9 rounded-full" />
              <span>{data.channelInfo.name}</span>
            </a>
            <div className="text-xs text-grap-400">
              <span className="after:content-['•'] after:mx-1">{data.videoViews} views</span>
              <span>{data.videoAge}</span>
            </div>
          </div>
          <div className="max-w-2xl line-clamp-2 text-sm text-gray-400">
            <p>{data.videoDescription}</p>
          </div>
        </div>
      </article>
    </li>
  );
}
