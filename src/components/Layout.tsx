import { type ReactNode } from 'react';
import { Header } from './Header.tsx';
import { Sidebar } from './sidebar/Sidebar.tsx';
import { Footer } from './Footer.tsx';

type Props = {
  closedSideBar?: boolean;
  children: ReactNode;
};

export function Layout({ children, closedSideBar = false }: Props) {
  return (
    <div className="grid grid-rows-[70px_1fr_50px] h-screen overflow-hidden">
      <Header />
      <div
        className={`grid ${!closedSideBar ? 'grid-cols-[300px_1fr]' : ''} min-h-0 overflow-hidden`}>
        {!closedSideBar && <Sidebar />}
        <main id="scrollableDiv" className="overflow-y-auto h-full w-full p-4">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
