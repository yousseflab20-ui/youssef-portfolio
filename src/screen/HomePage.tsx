import "./index.css";
import Navbar from "../components/Navbar";
export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="bg-black text-white scroll-smooth">

      <section id="home" className="min-h-screen flex items-start justify-center pt-60">
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
              scalable web applications and high-performance mobile apps.
              I transform ideas into modern, efficient, and user-focused digital solutions.
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

      <section id="about" className="min-h-screen flex items-center justify-center py-32">
        <div className="w-[70%] max-w-5xl text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a Full Stack Mobile & Web Developer specialized in building scalable
            web applications and high-performance mobile apps.
            I focus on writing clean, maintainable code and delivering modern user experiences.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            I enjoy solving real-world problems and helping companies turn ideas
            into reliable digital products that create real business value.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <div className="border border-green-500 px-6 py-3 rounded-lg">
              React / TypeScript
            </div>
            <div className="border border-green-500 px-6 py-3 rounded-lg">
              Node.js / Express
            </div>
            <div className="border border-green-500 px-6 py-3 rounded-lg">
              MongoDB / PostgreSQL
            </div>
            <div className="border border-green-500 px-6 py-3 rounded-lg">
              React Native
            </div>
          </div>

        </div>
      </section>
</div>
    </div>
  );
}
