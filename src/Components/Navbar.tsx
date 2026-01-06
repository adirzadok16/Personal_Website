export function Navbar() {
  const aElementCSS = "text-gray-900 hover:text-gray-600 transition-colors cursor-pointer";

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className='flex justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-50 shadow-sm py-4'>
      <h2 className='text-xl font-bold pl-10'>AZ</h2>
      <ul className='flex items-center gap-10 pr-10'>
        <li>
          <button onClick={() => handleScroll("home")} className={aElementCSS} >
            Home
          </button>
        </li>
        <li>
          <button onClick={() => handleScroll("about")} className={aElementCSS}>
            About
          </button>
        </li>
        <li>
          <button onClick={() => handleScroll("projects")} className={aElementCSS}>
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => handleScroll("contact")} className={aElementCSS}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
