import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import BrandingComponent from "./BrandingComponent";
import "../App.css";

function Branding() {
  const [page, setPage] = useState(false);
  return (
    <>
      {/* LARGE SCREENS */}
      <div className="flex phone:hidden md:hidden lg:flex mt-[8rem] h-fit pb-[50px] w-full justify-start items-start ">
        <div className=" flex justify-between   max-w-[80%] ">
          <SideBar />

          <div className=" ml-[23rem] mt-[1rem] ">
            <h1 className=" font-semibold text-[30px] text-[#00325c] mb-[5px] ">Branding</h1>
            <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mb-[1px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>

            <div className="mt-[4rem]">
              <form autoComplete="on" action="mailto:info@nubeero.com">
                <h2 className=" font-medium text-[20px] mt-[60px] text-[#00325c] ">Have you ever built a digital product/service before?</h2>
                <p className="font-normal  mt-[4px] text-[14px] text-[#0098db]">This consists of being actively involved in the design, development or launch process of any website/application.</p>

                <div className=" mt-[15px] ">
                  <label onClick={() => setPage(true)} type="radio" className="font-normal w-[43px] flex justify-between items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="yes">
                    <input id="yes" name="options" value="Yes" type="radio" />
                    Yes
                  </label>
                  <br />
                  <label onClick={() => setPage(false)} className="font-normal  w-[43px] flex justify-between items-center mt-[4px] text-[14px] text-[#00325c]" htmlFor="no">
                    <input id="no" name="options" value="No" type="radio" />
                    No
                  </label>
                  <br />
                </div>
              </form>
              {page && <BrandingComponent closeModal={setPage} />}
              <div className=" flex w-full items-center justify-between mt-[50px] ">
                <Link onClick={() => window.scrollTo(0, 0)} to="/project">
                  <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">BACK</div>
                </Link>
                <Link to="/funding">
                  <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">NEXT STEP</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" w-full h-fit pb-[40px] phone:flex lg:hidden mt-[8rem] flex justify-center items-center ">
        <div className="w-[80%] flex justify-between flex-col  ">
          <h1 className=" font-semibold text-[30px] text-[#00325c] mb-[5px] ">Branding</h1>
          <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mb-[1px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>
          <div className="mt-[2">
            <form autoComplete="on" action="mailto:info@nubeero.com">
              <h2 className=" font-medium text-[20px] mt-[60px] text-[#00325c] ">Have you ever built a digital product/service before?</h2>
              <p className="font-normal  mt-[4px] text-[14px] text-[#0098db]">This consists of being actively involved in the design, development or launch process of any website/application.</p>

              <div className=" mt-[15px] ">
                <label onClick={() => setPage(true)} type="radio" className="font-normal w-[43px] flex justify-between items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="yes">
                  <input id="yes" name="options" value="Yes" type="radio" />
                  Yes
                </label>
                <br />
                <label onClick={() => setPage(false)} className="font-normal  w-[43px] flex justify-between items-center mt-[4px] text-[14px] text-[#00325c]" htmlFor="no">
                  <input id="no" name="options" value="No" type="radio" />
                  No
                </label>
                <br />
              </div>
            </form>
            {page && <BrandingComponent closeModal={setPage} />}
            <div className=" flex w-full items-center justify-between mt-[50px] ">
              <Link onClick={() => window.scrollTo(0, 0)} to="/project">
                <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">BACK</div>
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/funding">
                <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">NEXT STEP</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Branding;
