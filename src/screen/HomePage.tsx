import "./index.css";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <nav className="w-[80%] mx-auto flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold tracking-wide">YOUSSEF LABNINE</h1>
        <ul className="hidden md:flex gap-8 text-gray-300 items-center">
          <li className="hover:text-green-400 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-green-400 cursor-pointer transition">
            About Me
          </li>
          <li className="hover:text-green-400 cursor-pointer transition">
            Projects
          </li>
          <li>
            <button className="bg-green-500 hover:bg-green-600 transition px-5 py-2 rounded-full text-black font-semibold">
              Contact me
            </button>
          </li>
        </ul>
      </nav>
      <section className="flex-1 flex items-start justify-center pt-60">
        <div className="w-[70%] grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-gray-400 mb-2 tracking-widest">
              HELLO, I AM
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              YOUSSEF LABNINE
            </h1>
            <p className="text-green-400 font-semibold mb-3">
              I AM Full Stack Mobile & Web Developer
            </p>
            <p className="text-gray-400 max-w-md mb-6">
              I'm a Full Stack Mobile & Web Developer specialized in building
              scalable web applications and high-performance mobile apps. I
              transform ideas into modern, efficient, and user-focused digital
              solutions.
            </p>
            <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full font-semibold text-black">
              Contact
            </button>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute w-80 h-80 bg-green-500 rounded-full -z-10 blur-2xl opacity-70"></div>
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
              alt="profile"
              className="w-72 md:w-80 object-cover rounded-xl"
            />
            <div className="absolute -bottom-16 flex gap-6">
              <div className="bg-[#0f172a] border border-green-500 rounded-xl px-6 py-4 text-center">
                <h3 className="text-xl font-bold">1+</h3>
                <p className="text-sm text-gray-400">Years of Experience</p>
              </div>
              <div className="bg-[#0f172a] border border-green-500 rounded-xl px-6 py-4 text-center">
                <h3 className="text-xl font-bold">100+</h3>
                <p className="text-sm text-gray-400">Completed Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
