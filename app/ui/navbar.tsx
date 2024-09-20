export default function Navbar() {
  return (
    <div className="sticky top-0 py-8">
      <nav className="flex  justify-between align-middle border border-gray-600  w-screen py-4 px-8 rounded-3xl mx-auto lg:w-3/4 backdrop-blur-2xl">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-lime-400 rounded-full mx-2"></div>
          <div className="text-2xl p-0">Kenna</div>
        </div>
        <ul className="flex items-center">
          <li className="mx-8 text-lime-400 cursor-pointer">Home</li>
          <li className="mx-8 hover:text-lime-400 cursor-pointer">About</li>
          <li className="mx-8 hover:text-lime-400 cursor-pointer">Contact</li>
          <li className="hover:text-lime-400 cursor-pointer">Hire Me</li>
        </ul>
      </nav>
    </div>
  );
}
