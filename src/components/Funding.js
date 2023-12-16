import { Link } from "react-router-dom";
import "../App.css";
import SideBar from "./SideBar";

function Funding() {
  return (
    <>
      {/* LARGE SCREENS */}
      <div className="flex phone:hidden md:hidden lg:flex mt-[8rem] h-fit pb-[50px] w-full justify-start items-start ">
        <div className=" flex justify-between   max-w-[80%] ">
          <SideBar />

          <div className=" ml-[23rem]  ">
            <h1 className=" font-medium text-[30px] mt-[60px] text-[#00325c] ">Funding</h1>
            <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mt-[5px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>

            <div className="mt-[2rem]">
              <form autoComplete="on" action="mailto:info@nubeero.com">
                <h2 className=" font-medium text-[20px]  text-[#00325c] ">Have you acquired funding?</h2>
                <p className=" font-normal mt-[5px] text-[16px]  text-[#0098db] ">This implies that you currently have the funds readily available to pay for services you have made indication for</p>
                <div className=" mt-[15px] ">
                  <label type="radio" className="font-normal w-[43px] flex justify-between items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="yes">
                    <input id="yes" name="options" value="Yes" type="radio" />
                    Yes
                  </label>
                  <br />
                  <label className="font-normal  w-[43px] flex justify-between items-center mt-[4px] text-[14px] text-[#00325c]" htmlFor="no">
                    <input id="no" name="options" value="No" type="radio" />
                    No
                  </label>
                  <br />
                </div>
                <h2 className=" font-medium text-[20px] mb-[20px]  text-[#00325c] ">Which funding stage has your product gotten to ?</h2>
                <div className="mt-[20px]">
                  <label className="font-normal  lg:w-[79%] max-w-[79%] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="">
                    <input className=" phone:mr-[10px] md:mr-0 " id="pre" name="options2" value="pre" type="radio" />
                    Pre-Seed Capital: - This is the earliest source of investment for your startup.
                  </label>
                </div>
                <div className="mt-[20px]">
                  <label className="font-normal  lg:w-[57.5%] max-w-[57.5%] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="seed">
                    <input className=" phone:mr-[10px] md:mr-0 " id="seed" name="options2" value="Seed" type="radio" />
                    Seed, Startup Accelerators, or Angel Investor Funding{" "}
                  </label>
                </div>
                <div className="mt-[20px]">
                  <label className="font-normal  lg:w-[50.5%] max-w-[50.5%] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="series">
                    <input className=" phone:mr-[10px] md:mr-0 " id="series" name="options2" value="series" type="radio" />
                    Series A Funding or Venture Capital Financing.{" "}
                  </label>
                </div>
                <div className="mt-[20px]">
                  <label className="font-normal  lg:w-[41.5%] max-w-[41.5%] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="mezzanine">
                    <input className=" phone:mr-[10px] md:mr-0 " id="mezzanine" name="options2" value="mezzanine" type="radio" />
                    Mezzanine Financing & Bridge Loans.{" "}
                  </label>
                </div>
                <div className="mt-[20px]">
                  <label className="font-normal  lg:w-[30%] max-w-[30%] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="IPO">
                    <input className=" phone:mr-[10px] md:mr-0 " id="ipo" name="options2" value="ipo" type="radio" />
                    IPO (Initial Public Offering){" "}
                  </label>
                </div>

                <h2 className=" mt-[40px] font-medium text-[20px] mb-[20px]  text-[#00325c] ">What is your estimated budget for this project ? </h2>
                <div className="mt-[20px]">
                  <label className="font-normal  lg:w-[19%] max-w-[30%] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="amount">
                    <input className=" phone:mr-[10px] md:mr-0 " id="amount" name="options" value="Amount" type="radio" />
                    $500 Maximum.
                  </label>
                </div>
                <div className="mt-[20px]">
                  <label className="font-normal  lg:w-[20.5%] max-w-[20.5%] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="amount">
                    <input className=" phone:mr-[10px] md:mr-0 " id="amount" name="options" value="Amount" type="radio" />
                    $1,000 Maximum.
                  </label>
                </div>
                <div className="mt-[20px]">
                  <label className="font-normal  lg:w-[20.5%] max-w-[20.5%] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="amount">
                    <input className=" phone:mr-[10px] md:mr-0 " id="amount" name="options" value="Amount" type="radio" />
                    $1,500 Maximum.
                  </label>
                </div>
                <div className="mt-[20px]">
                  <label className="font-normal  lg:w-[20.5%] max-w-[20.5%] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="amount">
                    <input className=" phone:mr-[10px] md:mr-0 " id="amount" name="options" value="Amount" type="radio" />
                    $2,500 Maximum.
                  </label>
                </div>
                <div className="mt-[20px]">
                  <label className="font-normal  lg:w-[20.5%] max-w-[20.5%] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="amount">
                    <input className=" phone:mr-[10px] md:mr-0 " id="amount" name="options" value="Amount" type="radio" />
                    $3,000 Maximum.
                  </label>
                </div>
                <div className="mt-[20px]">
                  <label className="font-normal  lg:w-[16.5%] max-w-[16.5%] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="amount">
                    <input className=" phone:mr-[10px] md:mr-0 " id="amount" name="options" value="Amount" type="radio" />
                    Decide Later
                  </label>
                </div>
              </form>
              <div className="flex mt-[40px] justify-between items-center">
                <Link onClick={() => window.scrollTo(0, 0)} to="/branding">
                  <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">BACK</div>
                </Link>
                <Link onClick={() => window.scrollTo(0, 0)} to="/timeline">
                  <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">NEXT STEP</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" w-full h-fit pb-[40px] phone:flex lg:hidden mt-[7rem] flex justify-center items-center ">
        <div className="w-[80%] ipad:max-w-[80%] flex justify-between flex-col  ">
          <h1 className=" font-medium text-[30px] mt-[60px] text-[#00325c] ">Funding</h1>
          <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mt-[5px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>
          <form autoComplete="on" className="mt-[40px]" action="mailto:info@nubeero.com">
            <h2 className=" font-medium text-[20px]  text-[#00325c] ">Have you acquired funding?</h2>
            <p className=" font-normal mt-[5px] text-[16px]  text-[#0098db] ">This implies that you currently have the funds readily available to pay for services you have made indication for</p>
            <div className=" mt-[15px] ">
              <label type="radio" className="font-normal w-[43px] flex justify-between items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="yes">
                <input id="yes" name="options" value="Yes" type="radio" />
                Yes
              </label>
              <br />
              <label className="font-normal  w-[43px] flex justify-between items-center mt-[4px] text-[14px] text-[#00325c]" htmlFor="no">
                <input id="no" name="options" value="No" type="radio" />
                No
              </label>
              <br />
            </div>
            <h2 className=" font-medium text-[20px] mb-[20px]  text-[#00325c] ">Which funding stage has your product gotten to ?</h2>
            <div className="mt-[20px]">
              <label className="font-normal phone:w-full ipad:max-w-[450px] md:max-w-[515px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="Pre">
                <input className=" phone:mr-[10px] md:mr-0 " id="pre" name="options2" value="pre" type="radio" />
                Pre-Seed Capital: - This is the earliest source of investment for your startup.
              </label>
            </div>
            <div className="mt-[20px]">
              <label className="font-normal phone:w-full ipad:max-w-[375px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="seed">
                <input className=" phone:mr-[10px] md:mr-0 " id="seed" name="options2" value="Seed" type="radio" />
                Seed, Startup Accelerators, or Angel Investor Funding{" "}
              </label>
            </div>
            <div className="mt-[20px]">
              <label className="font-normal w-[330px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="series">
                <input className=" phone:mr-[10px] md:mr-0 " id="series" name="options2" value="series" type="radio" />
                Series A Funding or Venture Capital Financing.{" "}
              </label>
            </div>
            <div className="mt-[20px]">
              <label className="font-normal w-[270px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="mezzanine">
                <input className=" phone:mr-[10px] md:mr-0 " id="mezzanine" name="options2" value="mezzanine" type="radio" />
                Mezzanine Financing & Bridge Loans.{" "}
              </label>
            </div>
            <div className="mt-[20px]">
              <label className="font-normal w-[200px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="IPO">
                <input className=" phone:mr-[10px] md:mr-0 " id="ipo" name="options2" value="ipo" type="radio" />
                IPO (Initial Public Offering){" "}
              </label>
            </div>

            <h2 className=" mt-[40px] font-medium text-[20px] mb-[20px]  text-[#00325c] ">What is your estimated budget for this project ? </h2>
            <div className="mt-[20px]">
              <label className="font-normal w-[130px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="amount">
                <input className=" phone:mr-[10px] md:mr-0 " id="amount" name="options" value="Amount" type="radio" />
                $500 Maximum.
              </label>
            </div>
            <div className="mt-[20px]">
              <label className="font-normal w-[140px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="amount">
                <input className=" phone:mr-[10px] md:mr-0 " id="amount" name="options" value="Amount" type="radio" />
                $1,000 Maximum.
              </label>
            </div>
            <div className="mt-[20px]">
              <label className="font-normal w-[140px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="amount">
                <input className=" phone:mr-[10px] md:mr-0 " id="amount" name="options" value="Amount" type="radio" />
                $1,500 Maximum.
              </label>
            </div>
            <div className="mt-[20px]">
              <label className="font-normal w-[140px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="amount">
                <input className=" phone:mr-[10px] md:mr-0 " id="amount" name="options" value="Amount" type="radio" />
                $2,500 Maximum.
              </label>
            </div>
            <div className="mt-[20px]">
              <label className="font-normal w-[140px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="amount">
                <input className=" phone:mr-[10px] md:mr-0 " id="amount" name="options" value="Amount" type="radio" />
                $3,000 Maximum.
              </label>
            </div>
            <div className="mt-[20px]">
              <label className="font-normal w-[110px] flex justify-between md:items-center  mt-[4px] text-[14px] text-[#00325c]" htmlFor="amount">
                <input className=" phone:mr-[10px] md:mr-0 " id="amount" name="options" value="Amount" type="radio" />
                Decide Later
              </label>
            </div>
            <div className="flex mt-[40px] justify-between items-center">
              <Link onClick={() => window.scrollTo(0, 0)} to="/branding">
                <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">BACK</div>
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/timeline">
                <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">NEXT STEP</div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Funding;
