import { NavLink } from "react-router-dom";
import "../App.css";

function SecondSideBar() {
  const secondMenu = [
    {
      path: "/secondbasic",
      name: "Basic Info",
      icon: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18.75C19.1421 18.75 22.5 15.3921 22.5 11.25C22.5 7.10786 19.1421 3.75 15 3.75C10.8579 3.75 7.5 7.10786 7.5 11.25C7.5 15.3921 10.8579 18.75 15 18.75Z" stroke="currentColor" strokeWidth="1.4" strokeMiterlimit="10" />
          <path
            d="M3.63159 25.3114C4.7842 23.3164 6.44153 21.6598 8.43708 20.508C10.4326 19.3563 12.6961 18.75 15.0002 18.75C17.3043 18.75 19.5678 19.3564 21.5633 20.5082C23.5588 21.6599 25.2161 23.3166 26.3687 25.3116"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      path: "/resourcedetails",
      name: "Resource Details",
      icon: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.125 13.125H20.625" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.125 16.875H20.625" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M24.375 4.6875H5.625C5.10723 4.6875 4.6875 5.10723 4.6875 5.625V24.375C4.6875 24.8928 5.10723 25.3125 5.625 25.3125H24.375C24.8928 25.3125 25.3125 24.8928 25.3125 24.375V5.625C25.3125 5.10723 24.8928 4.6875 24.375 4.6875Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9.375 4.6875V25.3125" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];
  return (
    <>
      <div className=" phone:hidden md:hidden lg:flex w-[300px]  h-[460px] ml-[20px] fixed mt-[40px] border-r-[1px] flex flex-col pl-[30px] border-solid border-r-[#bbbec2] ">
        <div className="w-3/4 text-left">
          {secondMenu.map((item, index) => (
            <NavLink
              onClick={() => window.scrollTo(0, 0)}
              to={item.path}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? " flex justify-between items-center w-full  text-left font-normal text-[18px] text-[#0098db] h-[80px] "
                  : "flex h-[80px] w-full justify-between hover:text-[rgb(0,152,219)] items-center text-left font-normal  text-[18px] text-[#00325c] "
              }
            >
              <span>{item.icon}</span>
              <h2 className=" w-[80%] pl-[20px] ">{item.name}</h2>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default SecondSideBar;
