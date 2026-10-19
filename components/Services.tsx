const services = [
  {
    number: "01",
    title: "Responsive Website Development",
    description:
      "I build responsive websites that work smoothly across desktops, tablets and mobile devices.",
  },
  {
    number: "02",
    title: "React & Next.js Development",
    description:
      "I develop modern frontend applications using React and Next.js with clean and reusable components.",
  },
  {
    number: "03",
    title: "UI Implementation",
    description:
      "I convert designs and ideas into clean, responsive and user-friendly web interfaces.",
  },
  {
    number: "04",
    title: "Website Optimization",
    description:
      "I improve website structure, responsiveness and frontend performance to create a better user experience.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gray-900 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}

        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
            Services
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            How I can help
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            I help businesses and individuals build modern, responsive and
            user-friendly web experiences.
          </p>
        </div>

        {/* Services grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-gray-800 bg-gray-950 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50"
            >

              <span className="text-sm font-medium text-blue-500">
                {service.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>

              <div className="mt-6 h-px w-12 bg-gray-700 transition-all duration-300 group-hover:w-20 group-hover:bg-blue-500" />

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}