
"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:rohitramteke15399@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="bg-gray-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Let's work together
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            Have a project in mind or need help with a website?
            Send me a message and let's discuss how I can help.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact information */}

          <div>
            <h3 className="text-xl font-semibold text-white">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I'm interested in frontend development projects,
              website creation and freelance opportunities.
            </p>

            <div className="mt-8 space-y-5">

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:rohitramteke15399@gmail.com"
                  className="mt-1 inline-block text-white transition hover:text-blue-400"
                >
                  rohitramteke15399@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <a
                  href="https://github.com/ramtekerohit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-white transition hover:text-blue-400"
                >
                  github.com/ramtekerohit
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-white transition hover:text-blue-400"
                >
                  www.linkedin.com/in/rohit-ramteke-b5914018a
                </a>
              </div>

            </div>
          </div>

          {/* Contact form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-gray-800 bg-gray-900 p-6 sm:p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your name
              </label>

              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your email
              </label>

              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Project details
              </label>

              <textarea
                id="message"
                rows={5}
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me a little about your project..."
                className="w-full resize-y rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Send Message
            </button>

            <p className="text-xs leading-5 text-gray-500">
              This form opens your default email application with your
              message prepared. It does not send the email automatically.
            </p>
          </form>

        </div>
      </div>
    </section>
  );
}