import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import SecondBasicSideBar from "./SecondBasicSideBar";
import TermsAndCondition from "./TermsAndCondition";
import PrivacyPolicy from "./PrivacyPolicy";
import "../App.css";

const options = [
  { value: "Software Dev Engineer ", label: "Software Dev Engineer (Artificial Intelligence, Machine Learning, and Blockchain)" },
  { value: "Sre", label: "Site Reliability Engineer (SRE's)" },
  { value: "data", label: "Data Engineers/Analysis" },
  { value: "cloud", label: "Cloud/Data Architects" },
  { value: "developers", label: "Full Stack Developers" },
  { value: "ce", label: "Cloud Engineers" },
  { value: "DE", label: "Data Engineers" },
  { value: "security", label: "Security Architects/Cyber Security Analyist" },
  { value: "Db", label: "Database Administrators" },
  { value: "BA", label: "Business Analysis" },
  { value: "ST", label: "Software Testers" },
  { value: "devops", label: "Devops Engineer" },
  { value: "PM", label: "Product Manager" },
  { value: "ui/ux", label: "User Interface (UI)/User Experience (UX) Designer" },
];
const years = [
  { value: "oneYear", label: " Less than 1 year" },
  { value: "two", label: "1 year but less than 2 years" },
  { value: "three", label: "2 years but less than 3 years" },
  { value: "four", label: "3 years but less than 4 years" },
  { value: "five", label: "4 years but less than 5 years" },
  { value: "six", label: "5 years but less than 10 years" },
  { value: "seven", label: "10 years and above" },
];
const jobType = [
  { value: "full", label: " Full Time (On-site)" },
  {
    value: "fulltime",
    label: " Full Time (Remote)",
  },
  { value: "part", label: " Part Time (On-site)" },
  { value: "part-remote", label: " Part Time (Remote)" },
];
const jobRole = [
  { value: "entry", label: "Entry Level" },
  { value: "junior", label: "Junior Level" },
  { value: "inter", label: "Intermediate Level" },
  { value: "senior", label: "Senior Level" },
];
const customStyles = {
  control: (base) => ({
    ...base,
    height: 59,
    minHeight: 59,
  }),
};
function ResourcesForBasicInfo() {
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
          <SecondBasicSideBar />

          <div className=" ml-[23rem]  mt-[1rem] ">
            <h1 className=" font-semibold text-[30px] text-[#00325c] mb-[5px] ">Confirm the resource</h1>
            <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mb-[1px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>
            <form className="mt-[40px]" action="mailto:info@nubeero.com">
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
                What role would you like to hire ?
              </label>
              <br />
              <Select placeholder="Select the role you would like to hire" styles={customStyles} className=" mt-[10px] text-[#00325c] w-full  " options={jobRole} />
              <br />
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="address">
                What skill are you looking out for ?
              </label>
              <br />
              <Select placeholder="Select the skills required" styles={customStyles} className=" mt-[10px] text-[#00325c] outline-none w-full " options={options} />
              <br />
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="text">
                What job type ?
              </label>
              <br />
              <Select placeholder="Select the job type" styles={customStyles} className="   mt-[10px] text-[#00325c] outline-non w-full " options={jobType} />
              <br />
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="text">
                What level of experience are you looking for ?
              </label>
              <br />
              <Select placeholder="Select the experience level you need" styles={customStyles} className=" mt-[10px] text-[#00325c] outline-none w-full" options={years} />
            </form>
            <div className=" mt-7  flex justify-between items-center  ">
              <label className="text-[#00325c] gap-1  flex phone:w-full ipad:w-[380px]  text-[14px]  " htmlFor="privacy and Terms">
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
            <div className="flex justify-between items-center w-full mt-[40px]">
              <Link to="/secondbasic">
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
          <h1 className=" font-semibold text-[30px] text-[#00325c] mb-[5px] ">Confirm the resource</h1>
          <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mb-[1px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>
          <form className="mt-[40px]" action="mailto:info@nubeero.com">
            <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
              What role would you like to hire ?
            </label>
            <br />
            <Select placeholder="Select the role you would like to hire" styles={customStyles} className=" mt-[10px] text-[#00325c] w-full  " options={jobRole} />
            <br />
            <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="address">
              What skill are you looking out for ?
            </label>
            <br />
            <Select placeholder="Select the skills required" styles={customStyles} className=" mt-[10px] text-[#00325c] outline-none w-full " options={options} />
            <br />
            <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="text">
              What job type ?
            </label>
            <br />
            <Select placeholder="Select the job type" styles={customStyles} className="   mt-[10px] text-[#00325c] outline-non w-full " options={jobType} />
            <br />
            <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="text">
              What level of experience are you looking for ?
            </label>
            <br />
            <Select placeholder="Select the experience level you need" styles={customStyles} className=" mt-[10px] text-[#00325c] outline-none w-full" options={years} />
          </form>
          <div className=" mt-7  flex justify-between items-center  ">
            <label className="text-[#00325c] gap-1  flex phone:w-full ipad:w-[380px]  text-[14px]  " htmlFor="privacy and Terms">
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
          <div className="flex justify-between items-center w-full mt-[40px]">
            <Link to="/secondbasic">
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

export default ResourcesForBasicInfo;
