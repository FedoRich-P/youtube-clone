import { Header } from '../components/Header.tsx';
import { Sidebar } from '../components/sidebar/Sidebar.tsx';
import { Footer } from '../components/Footer.tsx';
import { API_KEY } from '../utils/constants.ts';

export function Home() {
  return (
    <div className={'grid grid-rows-[65px_1fr_50px] h-screen'}>
      <Header className={''} />
      <Sidebar className={'overflow-auto'} />
      <Footer className={''} />
    </div>
  );
}
