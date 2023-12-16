import { Link } from "react-router-dom";
import Header from "./Header";
import game from "./round.svg";
import PartnerIcon from "./PartnerIcon";
import ContactUs from "./ContactUs";
import "../App.css";
import RRPage from "./RRPage";

function Processing() {
  return (
    <>
      <Header />
      {/* MD - LARGE SCREENS */}
      <div className=" phone:hidden md:flex  w-full h-auto md:pr-[40px] phone:pr-[0px] items-center  justify-between mt-[8rem] lg:ml-[4rem] md:ml-[2rem]  phone:pl-[2rem]  ">
        <div className="mt-[5rem] w-2/4 ">
          <h1 className="  font-semibold text-[44px] text-[#00325c] ">Resource Outsourcing & Resource Placement</h1>
          <p className=" font-normal  w-[80%]  text-[#0098db] mt-[13px] text-[18px] ">
            Outsource and place top talent for your organization to meet your business needs efficiently. Our team will help you find the right resources, whether it be short-term projects or long-term engagements.
          </p>

          <Link onClick={() => window.scrollTo(0, 0)} to="/rrpage">
            <div className="bg-[#00325c] hover:bg-black  w-[180px] h-[50px] rounded-[3px] text-[#fff] text-center items-center flex justify-center text-[12px] mt-[4rem] shadow-md ">GET STARTED</div>
          </Link>
        </div>
        <div className=" w-2/4 h-fit pr-[40px] ">
          <img src={game} className="w-full h-[400px] " alt="running man" />
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" lg:hidden mt-[8rem] phone:flex ipad:flex md:hidden  w-full justify-center items-center ">
        <div className=" w-[80%] flex flex-col justify-between ">
          <h1 className="  font-semibold text-[42px] text-[#00325c] ">Resource Outsourcing & Resource Placement</h1>
          <div className=" w-[70%] h-[300px] mt-[5px]  ">
            <img src={game} className="w-full h-full " alt="running man" />
          </div>
          <p className=" font-normal mt-[40px]   text-[#0098db]  text-[18px] ">
            Outsource and place top talent for your organization to meet your business needs efficiently. Our team will help you find the right resources, whether it be short-term projects or long-term engagements.
          </p>
          <Link onClick={() => window.scrollTo(0, 0)} to="/rrpage">
            <div className="bg-[#00325c] hover:bg-black  w-[180px] h-[50px] rounded-[3px] text-[#fff] text-center items-center flex justify-center text-[12px] mt-[40px]  shadow-md ">GET STARTED</div>
          </Link>
        </div>
      </div>
      <PartnerIcon />
      <RRPage />
      <ContactUs />
    </>
  );
}

export default Processing;
