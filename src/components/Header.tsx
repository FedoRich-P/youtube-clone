import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router';
import { BsBell, BsCameraVideo, BsYoutube } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { TiMicrophone } from 'react-icons/ti';
import { IoAppsSharp } from 'react-icons/io5';

type Props = {
  className?: string;
}

export function Header({className}: Props) {
  return (
    <header
      className={
        `${className} flex justify-between items-center px-14 py-3 bg-navbar-bg opacity-95 sticky top-0 z-100 shadow-[var(--shadow-red)]`
      }>
      <button
        className={
          'cursor-pointer p-2 rounded-xl bg-transparent transition-all duration-400 hover:bg-main-bg'
        }>
        <GiHamburgerMenu className={'text-3xl'} />
      </button>
      <Link
        to={'/'}
        className={
          'flex gap-2 items-center justify-center border-b-2 border-transparent transition-all duration-400 hover:border-soft'
        }>
        <BsYoutube className={'text-3xl text-red-600'} />
        <span>YouTube</span>
      </Link>
      <form className={' h-11 flex gap-4 bg-zinc-900 items-center rounded-xl shadow-[var(--shadow-red)]'}>
        <input type="text" placeholder={'Search ...'} className={'w-full px-3 bg-zinc-900'} />
        <AiOutlineClose className={'text-2xl cursor-pointer'} />
        <button
          type={'button'}
          className={
            'h-full px-5 flex items-center justify-center bg-zinc-800 cursor-pointer rounded-e-xl shadow-lg transition-all duration-400 hover:opacity-90'
          }>
          <AiOutlineSearch className={'text-2xl'} />
        </button>
      </form>
      <button className={'nav-btn'}>
        <TiMicrophone className={'text-3xl'} />
      </button>
      <ul className={'flex gap-5 items-center text-2xl'}>
        <li>
          <button className={'nav-btn'}>
            <BsCameraVideo />
          </button>
        </li>{' '}
        <li>
          <button className={'nav-btn'}>
            <IoAppsSharp />
          </button>
        </li>
        <li className={'relative'}>
          <button className={'nav-btn'}>
            <BsBell />
            <span className={'absolute top-1 right-1 px-1 text-xs bg-red-600 rounded-full'}>7+</span>
          </button>
        </li>
      </ul>
    </header>
  );
}
