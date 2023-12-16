import { useState } from "react";
import { Link } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndCondition from "./TermsAndCondition";
import SecondSideBar from "./SecondSideBar";
import "../App.css";

function ResourcesModal() {
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
      <div className="flex phone:hidden md:hidden h-fit pb-[40px] lg:flex mt-[8rem] w-full justify-start items-start ">
        <div className=" flex justify-between   max-w-[80%] ">
          <SecondSideBar />

          <div className=" ml-[23rem]  mt-[1rem] ">
            <h1 className=" font-semibold text-[30px] text-[#00325c] mb-[5px] ">Kindly fill in the details</h1>

            <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mb-[1px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>

            <form className=" mt-[40px]" action="mailto:info@nubeero.com">
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
                What is your job role
              </label>
              <br />
              <input
                className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none "
                autoComplete="on"
                type="text"
                placeholder="Enter the role would you like to be hired ?"
                required
              />
              <br />
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
                What is your expertise level
              </label>
              <br />
              <input
                className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none "
                autoComplete="on"
                type="text"
                placeholder="Select your expertise level"
                required
              />
              <br />
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
                How many years of experience do you have in this field ?
              </label>
              <br />
              <input
                className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] px-[15px] bg-transparent outline-none "
                autoComplete="on"
                type="number"
                placeholder="Enter years of experience"
                required
              />
              <br />
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
                Give a brief description about yourself
              </label>
              <br />
              <input
                className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none "
                autoComplete="on"
                type="text"
                placeholder="Describe your top skills, strengths, and experiences."
                required
              />
              <br />
              <br />
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
                Please share your cv and any relevant document
              </label>
              <br />
              <p className=" text-[#0098db]  text-[14px] mt-1 ">You can share attach up to 5 files, preferably in PDF</p>
              <div className="flex  justify-between items-center w-2/4 text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[17px] mb-[25px] pl-[15px] bg-transparent ">
                <span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.04688 5.76485L9 2.8125L11.9531 5.76485" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 10.6874V2.81445" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M15.1875 10.6875V14.625C15.1875 14.7742 15.1282 14.9173 15.0227 15.0227C14.9173 15.1282 14.7742 15.1875 14.625 15.1875H3.375C3.22582 15.1875 3.08274 15.1282 2.97725 15.0227C2.87176 14.9173 2.8125 14.7742 2.8125 14.625V10.6875"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <input className=" file:bg-transparent cursor-pointer file:border-none outline-none text-white  w-[80%] " type="file" name="file[]" id="attachment" accept=".doc,.xml,.xls,.pdf,.ppt" multiple required />
              </div>
            </form>
            <div className=" mt-7  flex justify-between items-center  ">
              <label className="text-[#00325c] gap-1  flex w-[380px]  text-[14px]  " htmlFor="privacy and Terms">
                <input className="w-[20px] h-[20px] " type="checkbox" required />
                <span onClick={() => setTermsClick(true)} className="ml-[10px] hover:underline cursor-pointer hover:text-[#0098db]">
                  Terms and Conditions
                </span>
                ,
                <span onClick={() => setPrivacyClick(true)} className=" hover:underline cursor-pointer hover:text-[#0098db]">
                  {"  "}
                  Privacy Agreement{" "}
                </span>
                <span className="ml-[5px]"> polices</span>
              </label>
            </div>
            <div className="flex items-center w-full mt-[40px]  justify-between">
              <Link to="/resourcedetails/resourcemodal">
                <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">BACK</div>
              </Link>
              <Link to="/resourcedetails">
                <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">SUBMIT</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS -  MEDIUM SCREENS */}
      <div className=" w-full phone:flex lg:hidden h-fit pb-[50px] mt-[8rem] flex justify-center items-center ">
        <div className=" phone:w-[80%] md:max-w-[70%] flex justify-between flex-col ">
          <h1 className=" font-semibold text-[30px] text-[#00325c] mb-[5px] ">Kindly fill in the details</h1>

          <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mb-[1px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>

          <form className=" mt-[40px]" action="mailto:info@nubeero.com">
            <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
              What is your job role
            </label>
            <br />
            <input
              className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none "
              autoComplete="on"
              type="text"
              placeholder="Enter the role would you like to be hired ?"
              required
            />
            <br />
            <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
              What is your expertise level
            </label>
            <br />
            <input
              className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none "
              autoComplete="on"
              type="text"
              placeholder="Select your expertise level"
              required
            />
            <br />
            <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
              How many years of experience do you have in this field ?
            </label>
            <br />
            <input
              className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] px-[15px] bg-transparent outline-none "
              autoComplete="on"
              type="number"
              placeholder="Enter years of experience"
              required
            />
            <br />
            <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
              Give a brief description about yourself
            </label>
            <br />
            <input
              className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none "
              autoComplete="on"
              type="text"
              placeholder="Describe your top skills, strengths, and experiences."
              required
            />
            <br />
            <br />
            <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
              Please share your cv and any relevant document
            </label>
            <br />
            <p className=" text-[#0098db]  text-[14px] mt-1 ">You can share attach up to 5 files, preferably in PDF</p>
            <div className="flex  justify-between items-center w-2/4 text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[17px] mb-[25px] pl-[15px] bg-transparent ">
              <span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.04688 5.76485L9 2.8125L11.9531 5.76485" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 10.6874V2.81445" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M15.1875 10.6875V14.625C15.1875 14.7742 15.1282 14.9173 15.0227 15.0227C14.9173 15.1282 14.7742 15.1875 14.625 15.1875H3.375C3.22582 15.1875 3.08274 15.1282 2.97725 15.0227C2.87176 14.9173 2.8125 14.7742 2.8125 14.625V10.6875"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <input className=" file:bg-transparent cursor-pointer file:border-none outline-none text-white  w-[80%] " type="file" name="file[]" id="attachment" accept=".doc,.xml,.xls,.pdf,.ppt" multiple required />
            </div>
          </form>
          <div className=" mt-7  flex justify-between items-center  ">
            <label className="text-[#00325c] gap-1  flex w-[380px]  text-[14px]  " htmlFor="privacy and Terms">
              <input className="w-[20px] h-[20px] " type="checkbox" required />
              <span onClick={() => setTermsClick(true)} className="ml-[10px] hover:underline cursor-pointer hover:text-[#0098db]">
                Terms and Conditions
              </span>
              ,
              <span onClick={() => setPrivacyClick(true)} className=" hover:underline cursor-pointer hover:text-[#0098db]">
                {"  "}
                Privacy Agreement{" "}
              </span>
              <span className="ml-[5px]"> polices</span>
            </label>
          </div>
          <div className="flex items-center w-full mt-[40px]  justify-between">
            <Link to="/resourcedetails/resourcemodal">
              <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">BACK</div>
            </Link>
            <Link to="/resourcedetails">
              <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">SUBMIT</div>
            </Link>
          </div>
        </div>
      </div>
      {termsClick && <TermsAndCondition handleTermsClose={handleTermsClose} />}
      {privacyClick && <PrivacyPolicy handlePolicyClose={handlePolicyClose} />}
    </>
  );
}

export default ResourcesModal;
