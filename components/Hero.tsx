export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24">
      
      <div className="mx-auto w-full max-w-7xl">
        
        <div className="max-w-3xl">
          
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-500">
            Frontend Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building modern web experiences with
            <span className="text-blue-500"> React.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            I build responsive, user-friendly and high-performance
            web applications using React, JavaScript, Next.js and
            modern frontend technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-700 px-6 py-3 font-medium text-white transition hover:border-gray-500"
            >
              Let's Work Together
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}