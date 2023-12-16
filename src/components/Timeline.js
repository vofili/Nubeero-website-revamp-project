import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import PrivacyPolicy from "./PrivacyPolicy";
import SideBar from "./SideBar";
import TermsAndCondition from "./TermsAndCondition";

function Timeline() {
  const [termsClick, setTermsClick] = useState(false);
  const [privacyClick, setPrivacyClick] = useState(false);

  function handleTermsClose() {
    setTermsClick(false);
  }
  function handlePolicyClose() {
    setPrivacyClick(false);
  }

  return (
    <>
      {/* LARGE SCREENS */}
      <div className="flex phone:hidden md:hidden lg:flex mt-[8rem] h-fit pb-[50px] w-full justify-start items-start ">
        <div className=" flex justify-between   max-w-[80%] ">
          <SideBar />

          <div className=" ml-[23rem]  ">
            <h1 className=" font-medium text-[30px] mt-[60px] text-[#00325c] ">Timeline</h1>

            <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mt-[5px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>

            <div className="mt-[2rem]">
              <form action="mailto:info@nubeero.com">
                <h2 className=" font-medium text-[20px]  text-[#00325c] ">How soon would you like this project to commence?</h2>
                <p className=" font-normal mt-[5px] text-[16px]  text-[#0098db] ">What is your expected start date?</p>

                <input className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] px-[15px] bg-transparent outline-none " type="date" placeholder="mm/dd/yyyy" required />

                <h2 className=" font-medium mt-[20px] text-[20px]  text-[#00325c] ">When would you like this project to be completed?</h2>
                <p className=" font-normal mt-[5px] text-[16px]  text-[#0098db] ">What is your expected end date?</p>

                <input className=" px-[15px] w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px]  bg-transparent outline-none " type="date" placeholder="mm/dd/yyyy" required />

                <div className=" mt-8 flex w-[350px] items-center justify-between">
                  <input className="w-[20px] h-[20px] " type="checkbox" required />
                  <label className="text-[#00325c] text-[14px]" htmlFor="privacy and Terms">
                    <span onClick={() => setTermsClick(true)} className=" hover:underline cursor-pointer hover:text-[#098db0]">
                      Terms and Conditions
                    </span>
                    ,
                    <span onClick={() => setPrivacyClick(true)} className=" hover:underline cursor-pointer hover:text-[#098db0]">
                      {"  "}
                      Privacy Agreement
                    </span>
                    {"  "}
                    polices
                  </label>
                </div>
              </form>
              <div className="flex justify-between w-full mt-[40px] ">
                <Link onClick={() => window.scrollTo(0, 0)} to="/funding">
                  <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">BACK</div>
                </Link>
                <Link onClick={() => window.scrollTo(0, 0)} to="/timeline">
                  <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">SUBMIT</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" w-full h-fit pb-[40px] phone:flex lg:hidden mt-[7rem] flex justify-center items-center ">
        <div className="w-[80%] ipad:max-w-[80%] flex justify-between flex-col  ">
          <h1 className=" font-medium text-[30px] mt-[60px] text-[#00325c] ">Timeline</h1>

          <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mt-[5px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>
          <div className="mt-[2rem]">
            <form action="mailto:info@nubeero.com">
              <h2 className=" font-medium text-[20px]  text-[#00325c] ">How soon would you like this project to commence?</h2>
              <p className=" font-normal mt-[5px] text-[16px]  text-[#0098db] ">What is your expected start date?</p>

              <input className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] px-[15px] bg-transparent outline-none " type="date" placeholder="mm/dd/yyyy" required />

              <h2 className=" font-medium mt-[20px] text-[20px]  text-[#00325c] ">When would you like this project to be completed?</h2>
              <p className=" font-normal mt-[5px] text-[16px]  text-[#0098db] ">What is your expected end date?</p>

              <input className=" px-[15px] w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px]  bg-transparent outline-none " type="date" placeholder="mm/dd/yyyy" required />

              <div className=" mt-8 flex w-[350px] items-center justify-between">
                <input className="w-[20px] h-[20px] " type="checkbox" required />
                <label className="text-[#00325c] text-[14px]" htmlFor="privacy and Terms">
                  <span onClick={() => setTermsClick(true)} className=" hover:underline cursor-pointer hover:text-[#098db0]">
                    Terms and Conditions
                  </span>
                  ,
                  <span onClick={() => setPrivacyClick(true)} className=" hover:underline cursor-pointer hover:text-[#098db0]">
                    {"  "}
                    Privacy Agreement
                  </span>
                  {"  "}
                  polices
                </label>
              </div>
            </form>
            <div className="flex justify-between w-full mt-[40px] ">
              <Link onClick={() => window.scrollTo(0, 0)} to="/funding">
                <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">BACK</div>
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/timeline">
                <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">SUBMIT</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {termsClick && <TermsAndCondition handleTermsClose={handleTermsClose} />}
      {privacyClick && <PrivacyPolicy handlePolicyClose={handlePolicyClose} />}
    </>
  );
}

export default Timeline;
