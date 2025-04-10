import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full min-h-[120px] bg-gradient-to-b from-white via-yellow-100 to-yellow-300 text-black py-10 text-center sm:text-left">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-screen-xl px-5">
        <p className="mb-4 sm:mb-0 text-xs lg:text-sm tracking-wider">© 2025 . Nativo | nativo.estudiodesign@gmail.com</p>

        <nav className="w-full sm:w-auto flex justify-center sm:justify-end mt-2 sm:mt-0">
          <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <li>
              <a href="/" className="text-black hover:text-gray-900 transition">
                <FaInstagram className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="/" className="text-black hover:text-gray-900 transition">
                <FaLinkedin className="text-2xl" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>

  );
};

export default Footer;
