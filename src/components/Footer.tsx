import { textLinks } from './sidebar/sidebarData.tsx';

type Props = {
  className?: string;
};

export function Footer({ className }: Props) {
  return (
    <footer
      className={`${className} flex justify-between items-center px-14 py-3 bg-navbar-bg opacity-95]`}>
      <ul className="flex gap-3 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return <li key={name}><a href="#">{name}</a></li>;
        })}
      </ul>
      <ul className="flex gap-3 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[1].map((name) => {
          return <li key={name}><a href="#">{name}</a></li>;
        })}
      </ul>
      <div>
        <span className="px-4 text-sm text-zinc-400">&copy; 2025 Google</span>
        <p className="px-4 text-sm text-zinc-400">This clone is for educational purpose only.</p>
      </div>
    </footer>
  );
}
