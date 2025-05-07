import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { clearVideos } from '../store/youtubeSlice.ts';
import { Spinner } from '../components/Spinner.tsx';
import { Layout } from '../components/Layout.tsx';
import { useNavigate } from 'react-router';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos.ts';
import { SearchCard } from '../components/SearchCard.tsx';

export function Search() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === '') navigate('/');
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

  return (
    <Layout>
      {videos.length ? (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => dispatch(getSearchPageVideos(true))}
          hasMore={videos.length < 500}
          loader={<Spinner />}
          height={750}>
          <ul className="grid grid-cols-1 auto-rows-[250px] gap-8 p-8">
            {videos.map((video) => (
              <SearchCard data={video} key={video.videoId} />
            ))}
          </ul>
        </InfiniteScroll>
      ) : (
        <Spinner />
      )}
    </Layout>
  );
}