"use client";

export const Header = () => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#hero"
          className="nav-item"
          onClick={(e) => handleNavClick(e, "hero")}
        >
          Home
        </a>
        <a
          href="#projects"
          className="nav-item"
          onClick={(e) => handleNavClick(e, "projects")}
        >
          Projects
        </a>
        <a
          href="#about"
          className="nav-item"
          onClick={(e) => handleNavClick(e, "about")}
        >
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          onClick={(e) => handleNavClick(e, "contact")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
