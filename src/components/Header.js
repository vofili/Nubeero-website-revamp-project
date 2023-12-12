import { NavLink } from "react-router-dom";
import image from "./nubeero logo.png";
import "../App.css";
import { useCallback, useEffect, useState } from "react";

function Header({ children }) {
  const [hamBurgerMenu, setHamBurgerMenu] = useState(false);
  const menuItem = [
    {
      path: "/home",
      name: "HOME",
      id: "home",
    },
    {
      path: "/what",
      name: "WHAT WE DO",
      id: "what",
    },
    {
      path: "/service",
      name: "RESOURCING",
      id: "service",
    },
    {
      path: "/research",
      name: "RESEARCH",
      id: "research",
    },
    {
      path: "/contact",
      name: "CONTACT US",
      id: "contact",
    },
  ];
  function handleHamBurgerMenu() {
    setHamBurgerMenu(!hamBurgerMenu);
  }
  const handleHamBurgerClose = () => {
    setHamBurgerMenu(false);
  };
  const handleScroll = useCallback(() => {
    if (hamBurgerMenu) {
      handleHamBurgerClose();
    }
    return hamBurgerMenu;
  }, [hamBurgerMenu]);
  useEffect(
    function () {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [hamBurgerMenu, handleScroll]
  );
  return (
    <>
      <div className="flex bg-white bg-opacity-60 justify-between h-[100px] pr-[60px] pl-[40px] top-0 left-0 z-50  fixed items-center w-[100%]  ">
        <div className=" w-[30%] h-[90px] ">
          <img className="w-[250px] pt-[8px]" src={image} alt="Nubeero Logo" />
        </div>

        <div className=" ml-[20px] w-[40%] justify-between items-center md:flex phone:hidden">
          {menuItem.map((item, index) => (
            <NavLink onClick={() => window.scrollTo(0, 0)} className=" hover:underline hover:text-[#00325c] text-[12px] font-normal  text-[#000] " to={item.path} key={index}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className=" w-[20%]  h-[100px] md:hidden phone:block">
          <svg className="ml-[70px] " onClick={handleHamBurgerMenu} width="40" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 17.5H47.5" stroke="#0C0310" strokeWidth="5" strokeLinecap="round" />
            <path d="M12.5 42.5H47.5" stroke="#0C0310" strokeWidth="5" strokeLinecap="round" />
            <path d="M12.5 30H47.5" stroke="#0C0310" strokeWidth="5" strokeLinecap="round" />
          </svg>
          {hamBurgerMenu && (
            <div className=" w-[200px] h-[250px]  flex justify-center pt-4 pb-3  bg-black bg-opacity-10">
              <div className=" grid flex-col justify-between text-left ">
                {menuItem.map((item, index) => (
                  <NavLink onClick={() => window.scrollTo(0, 0)} classNam="" to={item.path} key={index}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <main>{children}</main>
    </>
  );
}

export default Header;
