import { Link } from "react-router-dom";
import Man from "./Man";
import "../App.css";

function Home() {
  return (
    <>
      {/* MEDIUM SCREENS - LARGE SCREENS */}
      <div className=" flex  w-full h-auto pr-[40px] phone:hidden md:flex  items-center  justify-between mt-[8rem] lg:ml-[4rem] md:ml-[2rem]    ">
        <div className="mt-[5rem] w-2/4 ">
          <h1 className="  font-semibold text-[44px] text-[#00325c] ">Intermediation, Tech Solutions & Consulting</h1>
          <p className=" font-normal  w-[80%]  text-[#0098db]  mt-[13px] text-[18px] ">Nubeero is a consultancy and technology intermediation service provider that also offers services in software developement</p>
          <Link onClick={() => window.scrollTo(0, 0)} className="w-[180px] h-[50px]" to="/option">
            <div className="bg-[#00325c] hover:bg-black w-[180px] h-[50px] rounded-[3px] text-[#fff] text-center items-center flex justify-center text-[12px] mt-[4rem] shadow-md ">GET STARTED</div>
          </Link>
        </div>
        <Man />
      </div>
      {/* SMALL SCREENS */}
      <div className="flex h-fit phone:flex md:hidden w-full mt-[9rem] justify-center items-center ">
        <div className=" w-3/4 flex flex-col justify-between  ">
          <h1 className=" mb-[50px]  font-semibold  text-[40px] text-[#00325c] ">Intermediation, Tech Solutions & Consulting</h1>
          <Man />
          <p className=" font-normal   text-[#0098db]  mt-[15px] text-[18px] ">Nubeero is a consultancy and technology intermediation service provider that also offers services in software developement</p>
          <Link onClick={() => window.scrollTo(0, 0)} className=" w-[180px] h-fit " to="/option">
            <div className="bg-[#00325c] hover:bg-black w-[180px] h-[50px] rounded-[3px] text-[#fff] text-center items-center flex justify-center text-[12px] mt-[30px] shadow-md ">GET STARTED</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
