type Props = {
  fixed?: boolean;
};

export function Spinner({ fixed}: Props) {
  return (
    <div
      className={`${fixed ? 'fixed' : ''} top-0 left-0 h-full flex items-center w-full justify-center`}>
      <div
        className={`w-10 h-10 border-4 border-red-600 border-solid rounded-full animate-spin border-t-transparent`}></div>
    </div>
  );
}
