import { Link, NavLink } from "react-router-dom";
import image from "./nubeero logo.png";
import { useCallback, useEffect, useState } from "react";
import "../App.css";

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
      {/* LARGE SCREENS */}
      <div className=" lg:flex phone:hidden bg-white bg-opacity-60 justify-between h-[100px] px-[40px] top-0 left-0 z-50  fixed items-center w-full  ">
        <Link className="  " to="/">
          <div className="w-[40%] h-[90px]">
            <img className=" pt-[8px]" src={image} alt="Nubeero Logo" />
          </div>
        </Link>

        <div className=" ml-[20px] w-[40%] justify-between items-center flex">
          {menuItem.map((item, index) => (
            <NavLink onClick={() => window.scrollTo(0, 0)} className=" hover:underline hover:text-[#00325c] text-[12px] font-normal   text-[#000] " to={item.path} key={index}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" w-full z-10 lg:hidden  bg-white bg-opacity-60 hidden h-[100px] md:flex top-0 left-0 fixed px-[40px] phone:flex justify-between  items-center ">
        <Link className="  " to="/">
          <div className="w-[40%] ">
            <img className=" " src={image} alt="Nubeero Logo" />
          </div>
        </Link>
        <div className="   ">
          <svg className="ml-[70px] " onClick={handleHamBurgerMenu} width="30" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 17.5H47.5" stroke="#0C0310" strokeWidth="5" strokeLinecap="round" />
            <path d="M12.5 42.5H47.5" stroke="#0C0310" strokeWidth="5" strokeLinecap="round" />
            <path d="M12.5 30H47.5" stroke="#0C0310" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      {hamBurgerMenu && (
        <div className=" w-full z-[222]   top-0 h-[100%] fixed text-center  pt-4 pb-3  bg-black bg-opacity-70">
          <div className=" float-right mr-[40px] mt-3 mb-[60px] ">
            <svg onClick={() => setHamBurgerMenu(false)} width="40" height="40" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.2023 14.5891L46.6523 11.0391L30.9273 26.7891L15.2023 11.0391L11.6523 14.5891L27.4023 30.3141L11.6523 46.0391L15.2023 49.5891L30.9273 33.8391L46.6523 49.5891L50.2023 46.0391L34.4523 30.3141L50.2023 14.5891Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="items-center place-content-center place-items-center  flex justify-center w-full ">
            <div className="   text-white font-semibold  ">
              {menuItem.map((item, index) => (
                <NavLink onClick={() => window.scrollTo(0, 0)} className="grid items-center h-[70px]  hover:underline  justify-between " to={item.path} key={index}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
      <main>{children}</main>
    </>
  );
}

export default Header;
