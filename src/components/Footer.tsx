import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full min-h-[120px] flex flex-col sm:flex-row items-center justify-between bg-gradient-to-b from-white via-yellow-100 to-yellow-300 text-black py-10 px-6 sm:px-24 text-center sm:text-left">
      <p className="mb-4 sm:mb-0">© 2023 . Nativo | nativo.estudiodesign@gmail.com</p>

      <nav className="w-full sm:w-auto flex justify-center sm:justify-end mt-4 sm:mt-0">
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
    </footer>

  );
};

export default Footer;
