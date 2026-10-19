import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            A little about me
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">

          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-2xl border border-gray-800">
              <Image
                src="/images/profile.jpg"
                alt="Rohit Ramteke"
                width={500}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">
              I'm Rohit Ramteke, a Frontend Developer.
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              I am a frontend-focused developer interested in
              building modern, responsive and user-friendly web
              applications.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              I work with HTML, CSS, JavaScript and React, and I am
              expanding my skills with modern technologies such as
              Next.js and TypeScript.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              I enjoy turning ideas and designs into functional
              interfaces and solving frontend problems through
              clean and maintainable code.
            </p>

            <div className="mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Download Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}