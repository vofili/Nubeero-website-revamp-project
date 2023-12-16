import { useState } from "react";
import BrandingDialogueBox from "./BrandingDialogueBox";
import "../App.css";

function BrandingComponent({ closeModal }) {
  const [others, setOthers] = useState(false);

  function handleOthers() {
    setOthers((current) => !current);
  }

  return (
    <>
      <div className=" w-full  mt-[10px]">
        <h2 className=" font-medium text-[20px]  text-[#00325c] ">Which of the following best applies to you? </h2>
        <div className="mt-[20px]">
          <label className="font-normal phone:w-full ipad:w-[320px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="">
            <input className=" phone:mr-[10px] md:mr-0 " id="product" name="options" value="startup" type="radio" />I am a startup looking to build a new product
          </label>
        </div>
        <div className="mt-[20px]">
          <label className="font-normal phone:w-full ipad:w-[390px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="">
            <input className=" phone:mr-[10px] md:mr-0 " id="business" name="options" value="business" type="radio" />I am an existing business looking to build a new product
          </label>
        </div>
        <div className="mt-[20px]">
          <label className="font-normal phone:w-full ipad:w-[449px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="">
            <input className=" phone:mr-[10px] md:mr-0 " id="existing" name="options" value="existing" type="radio" />I am an existing business looking to enhance an existing product
          </label>
        </div>
        <h2 className=" font-medium text-[20px] mt-[40px]  text-[#00325c] ">Which of these services are you in need of?</h2>
        <p className="font-normal  mt-[4px] text-[14px] text-[#0098db]">Kindly select one or more services you want us to provide.</p>
        <div className="mt-[20px]">
          <label className="font-normal phone:w-full ipad:w-[390px] flex justify-between items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="">
            <input className="phone:mr-[10px] md:mr-0" type="checkbox" />I am an existing business looking to build a new product
          </label>
        </div>
        <div className="mt-[20px]">
          <label className="font-normal phone:w-full ipad:w-[355px] flex justify-between items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="">
            <input className="phone:mr-[10px] md:mr-0" type="checkbox" />
            Branding Service (Design, Identity and Awareness)
          </label>
        </div>
        <div className="mt-[20px]">
          <label className="font-normal w-[280px] flex justify-between items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="">
            <input type="checkbox" />
            Mobile App (Design and Development)
          </label>
        </div>
        <div className="mt-[20px]">
          <label className="font-normal phone:w-full ipad:w-full md:w-[620px] flex justify-between items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="">
            <input className="phone:mr-[10px] md:mr-0" type="checkbox" />
            Digital Marketing or Social Media Management (Service and Graphic Design Retainership)
          </label>
        </div>
        <div className="mt-[20px]">
          <label className="font-normal phone:w-full ipad:w-full md:w-[585px] flex justify-between items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="">
            <input className="phone:mr-[10px] md:mr-0" type="checkbox" />
            Graphic Design For Promotional Campaigns, App Store Assets etc (One-time Service)
          </label>
        </div>
        <div className="mt-[20px]">
          <label className="font-normal phone:w-full ipad:w-[305px] flex justify-between items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="">
            <input className="phone:mr-[10px] md:mr-0" type="checkbox" />
            UI/UX Only ( User Story, Plan and Design )
          </label>
        </div>
        <div className="mt-[20px]">
          <label className="font-normal phone:w-full ipad:w-[335px] flex justify-between items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="content creation">
            <input className="phone:mr-[10px] md:mr-0" type="checkbox" />
            Content Creation (Audio, Visual), Copy Writing
          </label>
        </div>
        <div className="mt-[20px]">
          <label className="font-normal phone:w-full ipad:w-[430px] flex justify-between items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="content creation">
            <input className="phone:mr-[10px] md:mr-0" type="checkbox" />
            Software Development (Improving, Rebuilding, Maintenance)
          </label>
        </div>{" "}
        <div className="mt-[20px]">
          <label className="font-normal phone:w-full ipad:w-full md:w-[769px] flex justify-between items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="content creation">
            <input className=" phone:mr-[10px] md:mr-0 " type="checkbox" />
            <span className="w-[95%]">Product Branding, Strategy & Management ( Kindly select if you don't already have a a brand or a team for this)</span>
          </label>
        </div>
        <div className="mt-[20px]">
          <label className="text-[14px] w-[69px]   flex justify-between items-center text-[#00325c] font-normal " htmlFor="other">
            <input onClick={handleOthers} type="checkbox" />
            Others:
          </label>
        </div>
        <br />
      </div>

      {others && <BrandingDialogueBox />}
    </>
  );
}

export default BrandingComponent;
