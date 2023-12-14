import { Link } from "react-router-dom";
import Man from "./Man";
import "../App.css";

function Home() {
  return (
    <>
      <div className=" flex  w-full h-auto md:pr-[40px] phone:pr-[0px] items-center  justify-between mt-[8rem] lg:ml-[4rem] md:ml-[2rem]  phone:pl-[2rem]  ">
        <div className="lg:mt-[5rem] w-2/4 ">
          <h1 className="  font-semibold  phone:text-[28px] ipad:text-[32px] md:text-[44px] text-[#00325c] ">Intermediation, Tech Solutions & Consulting</h1>
          <p className=" font-normal  w-[80%]  text-[#0098db] phone:mt-[10px] md:mt-[13px] phone:text-[14px] md:text-[18px] ">
            Nubeero is a consultancy and technology intermediation service provider that also offers services in software developement
          </p>
          <Link className="w-[180px] h-[50px]" to="/option">
            <div className="bg-[#00325c] hover:bg-black phone:w-[100px] phone:h-[30px] md:w-[180px] md:h-[50px] rounded-[3px] text-[#fff] text-center items-center flex justify-center text-[12px] phone:mt-[1.5rem] md:mt-[4rem] shadow-md ">
              GET STARTED
            </div>
          </Link>
        </div>
        <Man />
      </div>
    </>
  );
}

export default Home;
