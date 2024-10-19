export default function Navbar() {
  return (
    <nav className="flex sticky top-4 z-10">
      <ul className="border border-zinc-800 flex justify-between mx-auto  rounded-3xl w-auto backdrop-blur-md">
        <li className="bg-zinc-800 px-12 py-2 m-1 rounded-3xl cursor-pointer text-zinc-200">
          Home
        </li>
        <li className="px-12 py-2 m-1 rounded-3xl cursor-pointer text-zinc-400">
          About
        </li>
        <li className="px-12 py-2 m-1 rounded-3xl cursor-pointer text-zinc-400">
          Projects
        </li>
        <li className="px-12 py-2 m-1 rounded-3xl cursor-pointer text-zinc-400">
          Contact
        </li>
      </ul>
    </nav>
  );
}
