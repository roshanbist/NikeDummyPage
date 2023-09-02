import { useState, useEffect } from 'react';
import { headerLogo } from '../assets/images';
import { close, hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navOpenHandler = () => {
    setIsNavOpen(true);
  };

  const navCloseHandler = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth >= 1024) {
        setIsNavOpen(false);
        document.body.classList.remove('overflow-hidden');
      }
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isNavOpen]);

  const showMenuClass = isNavOpen
    ? `max-lg:visible max-lg:opacity-100`
    : `max-lg:opacity-0 max-lg:invisible`;

  return (
    <header className='py-8 absolute z-10 w-full max-lg:z-20'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/' className='z-50'>
          <img src={headerLogo} alt='Nike' width={130} height={29} />
        </a>
        <div
          className='hamburger-icon lg:hidden cursor-pointer'
          onClick={navOpenHandler}
        >
          <img src={hamburger} alt='hamburger' width={25} height={25} />
        </div>
        <div
          className={`lg:flex lg:flex-1 lg:flex-wrap lg:ml-5 mobile-nav lg:visible lg:opacity-100 ${showMenuClass}`}
        >
          <span
            className='lg:hidden block cursor-pointer absolute right-[12px] top-[34px]'
            onClick={navCloseHandler}
          >
            <img src={close} alt='close menu' width={25} height={25} />
          </span>
          <ul
            className={`flex-1 flex justify-center items-center gap-16 max-lg:block max-lg:mb-8`}
          >
            {navLinks.map((navItem) => (
              <li
                key={navItem.label}
                className={`max-lg:border-b-[1px] max-lg:border-b-[#707070]`}
              >
                <a
                  href={navItem.href}
                  className={`font-montserrat leading-normal text-lg text-slate-gray lg:hover:text-coral-red max-lg:block max-lg:p-3 max-lg:hover:bg-coral-red max-lg:hover:text-white
                  }`}
                >
                  {navItem.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat wide:mr-24'>
            <a href='/' className='hover:text-coral-red'>
              Sign in
            </a>
            <span>/</span>
            <a href='/' className='hover:text-coral-red'>
              Explore now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
