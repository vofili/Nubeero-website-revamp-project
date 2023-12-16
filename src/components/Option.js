import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Option() {
  const [individual, setIndividual] = useState(false);
  const [business, setBusiness] = useState(false);

  return (
    <>
      {/* LARGE SCREENS */}
      <div className=" max-w-full phone:hidden md:flex mt-[11rem] h-full pb-10  lg:flex justify-center items-center ">
        <div className=" w-[40%] max-w-[40%]   ">
          <div className=" text-center ">
            <h1 className=" font-semibold text-[35px] text-[#00325c] ">What best describes you ?</h1>
            <p className="" style={{ color: "#0098db", fontSize: "18px" }}>
              Please let us know what type of business describes you
            </p>
            <h3 className=" w-full border-[0.5px] mb-[40px] border-solid border-[#bbbec2] mt-[15px] ">{/* intentional */}</h3>
          </div>
          <div className="">
            <div
              onClick={() => {
                setBusiness(false);
                setIndividual(true);
              }}
              className={`mt-[20px] ${individual === true ? "border border-[#0098db] text-[#0098db]" : "border-[#b5b5b5] text-[#b5b5b5] "} w-full h-[100px]  rounded-[5px]  pl-[40px] cursor-pointer mt-[10px] text-[14px] border-solid border-[1px] `}
            >
              <div className="flex justify-between items-center md:w-[57%] lg:w-[45%] h-full">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 18.75C17.5888 18.75 19.6875 16.6513 19.6875 14.0625C19.6875 11.4737 17.5888 9.375 15 9.375C12.4112 9.375 10.3125 11.4737 10.3125 14.0625C10.3125 16.6513 12.4112 18.75 15 18.75Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.375 4.6875H5.625C5.10723 4.6875 4.6875 5.10723 4.6875 5.625V24.375C4.6875 24.8928 5.10723 25.3125 5.625 25.3125H24.375C24.8928 25.3125 25.3125 24.8928 25.3125 24.375V5.625C25.3125 5.10723 24.8928 4.6875 24.375 4.6875Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.77161 25.3125C7.19694 23.4483 8.24269 21.7838 9.73759 20.5915C11.2325 19.3993 13.0879 18.75 15 18.75C16.9121 18.75 18.7676 19.3993 20.2625 20.5915C21.7574 21.7838 22.8031 23.4483 23.2284 25.3125"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="">
                  <h2>Individual</h2>
                  <p>Less than 2 in number</p>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setIndividual(false);
                setBusiness(true);
              }}
              className={`mt-[20px] ${business === true ? "border border-[#0098db] text-[#0098db]" : "border-[#b5b5b5] text-[#b5b5b5] "} w-full h-[100px] rounded-[5px]   pl-[40px] cursor-pointer text-[14px]  border-solid border-[1px] `}
            >
              <div className="flex justify-between items-center md:w-[75%]  lg:w-[60%] h-full">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.3125 8.4375H4.6875C4.16973 8.4375 3.75 8.85723 3.75 9.375V24.375C3.75 24.8928 4.16973 25.3125 4.6875 25.3125H25.3125C25.8303 25.3125 26.25 24.8928 26.25 24.375V9.375C26.25 8.85723 25.8303 8.4375 25.3125 8.4375Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.6875 8.4375V6.5625C19.6875 6.06522 19.49 5.58831 19.1383 5.23667C18.7867 4.88504 18.3098 4.6875 17.8125 4.6875H12.1875C11.6902 4.6875 11.2133 4.88504 10.8617 5.23667C10.51 5.58831 10.3125 6.06522 10.3125 6.5625V8.4375"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M3.75 20.625H26.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.75 13.125H26.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="">
                  <h2>Business or Company</h2>
                  <p>A group more than 2 in number</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-between mt-[40px] items-center">
            <Link className="w-fit h-fit" to="/home">
              <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg cursor-pointer ">BACK</div>
            </Link>
            <Link className="w-fit h-fit" to="/basic">
              <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg cursor-pointer ">NEXT STEP</div>
            </Link>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" h-screen w-full max-w-full mt-[10rem] flex justify-center items-center phone:block md:hidden ">
        <div className="flex justify-center items-center">
          <div className=" max-w-[65%]   ">
            <div className=" text-center ">
              <h1 className=" font-semibold text-[28px] text-[#00325c] ">What best describes you ?</h1>
              <p className="" style={{ color: "#0098db", fontSize: "14px" }}>
                Please let us know what type of business describes you
              </p>
              <h3 className=" w-full border-[0.5px] mb-[40px] border-solid border-[#bbbec2] mt-[15px] ">{/* intentional */}</h3>
            </div>
            <div
              onClick={() => {
                setBusiness(false);
                setIndividual(true);
              }}
              className={`mt-[20px] ${
                individual === true ? "border border-[#0098db] text-[#0098db]" : "border-[#b5b5b5] text-[#b5b5b5] "
              } w-full h-[70px]  rounded-[5px] ipad:pl-[30px]  phone:pl-[15px] cursor-pointer mt-[10px] text-[12px] border-solid border-[1px] `}
            >
              <div className="flex justify-between items-center max-w-[75%] phone:w-3/4 ipad:w-[60%]  h-full">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 18.75C17.5888 18.75 19.6875 16.6513 19.6875 14.0625C19.6875 11.4737 17.5888 9.375 15 9.375C12.4112 9.375 10.3125 11.4737 10.3125 14.0625C10.3125 16.6513 12.4112 18.75 15 18.75Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.375 4.6875H5.625C5.10723 4.6875 4.6875 5.10723 4.6875 5.625V24.375C4.6875 24.8928 5.10723 25.3125 5.625 25.3125H24.375C24.8928 25.3125 25.3125 24.8928 25.3125 24.375V5.625C25.3125 5.10723 24.8928 4.6875 24.375 4.6875Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.77161 25.3125C7.19694 23.4483 8.24269 21.7838 9.73759 20.5915C11.2325 19.3993 13.0879 18.75 15 18.75C16.9121 18.75 18.7676 19.3993 20.2625 20.5915C21.7574 21.7838 22.8031 23.4483 23.2284 25.3125"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="">
                  <h2>Individual</h2>
                  <p>Less than 2 in number</p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setIndividual(false);
                setBusiness(true);
              }}
              className={`mt-[20px] ${
                business === true ? "border border-[#0098db] text-[#0098db]" : "border-[#b5b5b5] text-[#b5b5b5] "
              } w-full h-[70px] pr-[10px] rounded-[5px]  ipad:pl-[30px]  phone:pl-[15px] cursor-pointer mt-[10px] text-[12px] border-solid border-[1px] `}
            >
              <div className="flex justify-between items-center phone:w-full ipad:w-[80%]  h-full">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.3125 8.4375H4.6875C4.16973 8.4375 3.75 8.85723 3.75 9.375V24.375C3.75 24.8928 4.16973 25.3125 4.6875 25.3125H25.3125C25.8303 25.3125 26.25 24.8928 26.25 24.375V9.375C26.25 8.85723 25.8303 8.4375 25.3125 8.4375Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.6875 8.4375V6.5625C19.6875 6.06522 19.49 5.58831 19.1383 5.23667C18.7867 4.88504 18.3098 4.6875 17.8125 4.6875H12.1875C11.6902 4.6875 11.2133 4.88504 10.8617 5.23667C10.51 5.58831 10.3125 6.06522 10.3125 6.5625V8.4375"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M3.75 20.625H26.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.75 13.125H26.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="">
                  <h2>Business or Company</h2>
                  <p>A group more than 2 in number</p>
                </div>
              </div>
            </div>
            <div className=" flex justify-between mt-[40px] items-center">
              <Link onClick={() => window.scrollTo(0, 0)} className="w-fit h-fit" to="/home">
                <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[11px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg cursor-pointer ">BACK</div>
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} className="w-fit h-fit" to="/basic">
                <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[11px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg cursor-pointer ">NEXT STEP</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Option;
