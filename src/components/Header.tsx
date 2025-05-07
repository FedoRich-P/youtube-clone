import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from '../hooks/useDebounce';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation, useNavigate } from 'react-router';
import { BsBell, BsCameraVideo, BsYoutube } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { TiMicrophone } from 'react-icons/ti';
import { IoAppsSharp } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeSearchTerm, clearVideos } from '../store/youtubeSlice';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';

type FormData = {
  searchTerm: string;
};

type Props = {
  className?: string;
};

export const Header: React.FC<Props> = ({ className }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>({
    defaultValues: { searchTerm },
  });

  const inputValue = watch('searchTerm', searchTerm);

  const debouncedSearchTerm = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debouncedSearchTerm !== searchTerm) {
      dispatch(changeSearchTerm(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm, dispatch, searchTerm]);

  function handleReset() {
    reset({ searchTerm: '' });
    reset();
  }

  function handleSearch() {
    if (location.pathname !== '/search') {
      navigate('/search');
    } else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
    handleReset();
  }

  function onSubmit(data: FormData) {
    console.log('submit', data);
    handleSearch();
  }

  return (
    <header
      className={`${className} flex justify-between items-center px-14 py-4 bg-navbar-bg opacity-95 sticky top-0 z-100 shadow-[var(--shadow-white)]`}>
      <button className="cursor-pointer p-2 rounded-xl bg-transparent transition-all duration-400 hover:bg-main-bg">
        <GiHamburgerMenu className="text-3xl" />
      </button>

      <Link
        to="/"
        className="flex gap-2 items-center justify-center border-b-2 border-transparent transition-all duration-400 hover:border-soft">
        <BsYoutube className="text-3xl text-red-600" />
        <span>YouTube</span>
      </Link>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-11 flex gap-4 bg-zinc-900 items-center rounded-xl shadow-[var(--shadow-white)]">
        <input
          type="text"
          placeholder="Search ..."
          {...register('searchTerm')}
          className="w-full px-3 bg-zinc-900 focus:outline-none"
        />
        <AiOutlineClose
          className={`text-3xl cursor-pointer ${!searchTerm ? 'invisible' : 'visible'}`}
          onClick={handleReset}
        />
        <button className="search-btn" disabled={isSubmitting}>
          <AiOutlineSearch className="text-2xl" />
        </button>
      </form>

      <button className="nav-btn">
        <TiMicrophone className="text-3xl" />
      </button>

      <ul className="flex gap-5 items-center text-2xl">
        <li>
          <button className="nav-btn">
            <BsCameraVideo />
          </button>
        </li>
        <li>
          <button className="nav-btn">
            <IoAppsSharp />
          </button>
        </li>
        <li className="relative">
          <button className="nav-btn">
            <BsBell />
            <span className="absolute top-1 right-1 px-1 text-xs bg-red-600 rounded-full">7+</span>
          </button>
        </li>
      </ul>
    </header>
  );
};
