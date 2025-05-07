import { Link } from 'react-router';
import type { HomePageVideos } from '../Types.ts';
import { BaseCardLayout } from './CardBase.tsx';

type Props = {
  data: HomePageVideos;
};

export function Card({ data }: Props) {
  return (
    <BaseCardLayout {...data}>
      <div className="flex gap-3 p-2">
        <Link to={`/channel/${data.channelInfo.id}`} className="shrink-0">
          <img
            src={data.channelInfo.image}
            alt="channel"
            className="h-9 w-9 rounded-full hover:brightness-110 transition"
          />
        </Link>

        <div className="flex flex-col text-sm">
          <Link
            to={`/watch/${data.videoId}`}
            className="font-medium text-white line-clamp-2 hover:text-red-500 transition-colors duration-300">
            {data.videoTitle}
          </Link>

          <div className="grid grid-rows-2 grid-cols-2 text-gray-400 text-xs mt-1">
            <Link
              to={`/channel/${data.channelInfo.id}`}
              className="hover:text-white transition duration-400 col-span-2">
              {data.channelInfo.name}
            </Link>
            <span className="after:content-['•'] after:mx-1 whitespace-nowrap col-span-1">
              {data.videoViews} views
            </span>
            <span className="whitespace-nowrap col-span-1">{data.videoAge}</span>
          </div>
        </div>
      </div>
    </BaseCardLayout>
  );
}

// export function Card({ data }: Props) {
//   return (
//     <li>
//       <article className="flex flex-col rounded-lg bg-navbar-bg hover:bg-transparent transition-colors duration-400">
//         <div className="relative rounded-t-lg overflow-hidden">
//           <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-2 py-0.5 rounded">
//             {data.videoDuration}
//           </span>
//           <Link to={`/watch/${data.videoId}`}>
//             <img src={data.videoThumbnail} alt="thumbnail" className="h-full w-full object-cover" />
//           </Link>
//         </div>
//
//         <div className="flex gap-3 p-2">
//           <Link to={`/channel/${data.channelInfo.id}`} className="shrink-0">
//             <img
//               src={data.channelInfo.image}
//               alt="channel"
//               className="h-9 w-9 rounded-full hover:brightness-110 transition"
//             />
//           </Link>
//
//           <div className="flex flex-col text-sm">
//             <Link
//               to={`/watch/${data.videoId}`}
//               className="font-medium text-white line-clamp-2 hover:text-red-500 transition-colors duration-300">
//               {data.videoTitle}
//             </Link>
//
//             <div className="grid grid-rows-2 grid-cols-2 text-gray-400 text-xs mt-1">
//               <Link
//                 to={`/channel/${data.channelInfo.id}`}
//                 className="hover:text-white transition duration-400 col-span-2">
//                 {data.channelInfo.name}
//               </Link>
//               <span className="after:content-['•'] after:mx-1 whitespace-nowrap col-span-1">
//                 {data.videoViews} views
//               </span>
//               <span className="whitespace-nowrap col-span-1">{data.videoAge}</span>
//             </div>
//           </div>
//         </div>
//       </article>
//     </li>
//   );
// }
