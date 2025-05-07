import { Card } from '../components/Card.tsx';
import { Layout } from '../components/Layout.tsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from '../components/Spinner.tsx';
import { clearVideos } from '../store/youtubeSlice.ts';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos.ts';

export function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <Layout>
      {videos.length ? (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => dispatch(getHomePageVideos(true))}
          hasMore={videos.length < 500}
          loader={<Spinner />}
          height={750}>
          <ul className="grid gap-8 p-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {videos.map((video) => (
              <Card data={video} key={video.videoId} />
            ))}
          </ul>
        </InfiniteScroll>
      ) : (
        <Spinner />
      )}
    </Layout>
  );
}
