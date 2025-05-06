import { helpLinks, mainLinks, secondaryLinks, subscriptionLinks } from './sidebarData.tsx';

type Props = {
  className?: string;
};

export function Sidebar({ className }: Props) {
  return (
    <aside className={`${className} py-2 w-2/12 bg-[#212121] overflow-auto pb-8 sidebar`}>
      <ul className="mb-1 flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`sidebar-link`}>
              <a href="#" className="flex text-xl items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="mb-1 flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`sidebar-link`}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="mb-1 flex flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`sidebar-link`}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`sidebar-link`}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}