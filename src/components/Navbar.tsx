export default function Navbar() {
  return (
    <nav className="w-[80%] mx-auto flex justify-between items-center py-6 text-white">
      <h1 className="text-2xl font-bold tracking-wide">
        YOUSSEF LABNINE
      </h1>

      <ul className="hidden md:flex gap-8 text-gray-300 items-center">
        <li>
          <a href="#home" className="hover:text-green-400 transition">
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-green-400 transition">
            About Me
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-green-400 transition">
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 transition px-5 py-2 rounded-full text-black font-semibold"
          >
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  )
}
