export default function Header() {
  return (
    <header className="rounded-tl-lg rounded-tr-lg bg-[#3e3e42] p-3">
      <div className="flex items-center space-x-2">
        <div className="flex h-3 w-3 cursor-pointer items-center justify-center rounded-full bg-red-500" />
        <div className="flex h-3 w-3 cursor-pointer items-center justify-center rounded-full bg-yellow-500" />
        <div className="flex h-3 w-3 cursor-pointer items-center justify-center rounded-full bg-green-500" />
      </div>
    </header>
  );
}
