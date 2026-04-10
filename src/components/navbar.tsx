"use client";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center justify-center md:justify-start">
          <Link
            href="/"
            className="text-[#52b44b] text-3xl font-bold text-center md:text-left"
          >
            Roll Back Sufferikom's MYONEAPP
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#my-safaricom"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-green-600">
                MY SAFARICOM APP
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#mpesa"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-green-600">
                M-PESA APP
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
