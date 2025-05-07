import { Link } from 'react-router';
import type { ReactNode } from 'react';


type Props = {
  videoId: string;
  videoThumbnail: string;
  videoDuration: string;
  children: ReactNode;
  className?: string;
};

export function BaseCardLayout(props : Props) {
  const {
    videoId,
    videoThumbnail,
    videoDuration,
    children,
    className = '',
  } = props;

  return (
    <li className={`flex flex-col rounded-lg bg-navbar-bg hover:bg-transparent transition-colors duration-400 ${className}`}>
      <article>
        <div className="relative rounded-t-lg overflow-hidden">
          <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-2 py-0.5 rounded z-10">
            {videoDuration}
          </span>
          <Link to={`/watch/${videoId}`}>
            <img src={videoThumbnail} alt="thumbnail" className="w-full object-cover" />
          </Link>
        </div>
        {children}
      </article>
    </li>
  );
}