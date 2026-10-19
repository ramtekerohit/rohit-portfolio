
const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand and description */}

          <div>
            <a
              href="#home"
              className="text-xl font-bold text-white transition hover:text-blue-400"
            >
              Rohit<span className="text-blue-500">.</span>
            </a>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-400">
              Building responsive, user-friendly web experiences
              with modern frontend technologies.
            </p>
          </div>

          {/* Footer navigation */}

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Bottom row */}

        <div className="mt-8 flex flex-col gap-3 border-t border-gray-800 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {currentYear} Rohit Ramteke. All rights reserved.
          </p>

          <a
            href="https://github.com/ramtekerohit"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            View my GitHub
          </a>

        </div>

      </div>
    </footer>
  );
}