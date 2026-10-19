export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a
          href="#"
          className="text-xl font-bold text-white"
        >
          Rohit<span className="text-blue-500">.</span>
        </a>

        <div className="flex items-center gap-8">
          <a
            href="#about"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#services"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Services
          </a>

          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Hire Me
          </a>
        </div>

      </div>
    </nav>
  );
}