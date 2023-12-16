import { Link } from "react-router-dom";
import SideBar from "./SideBar";

function Onboarding() {
  return (
    <>
      {/* LARGE SCREENS */}
      <div className="flex phone:hidden md:hidden lg:flex mt-[8rem] w-full justify-start items-start ">
        <div className=" flex justify-between  max-w-[80%] ">
          <SideBar />

          <div className=" ml-[23rem] mt-[1rem] ">
            <h1 className=" font-semibold text-[30px] text-[#00325c] mb-[5px] ">Onboarding</h1>
            <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mb-[1px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>
            <div className="mt-[3rem] mb-[2rem] ">
              <form autoComplete="on" action="mailto:info@nubeero.com">
                <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="product">
                  Project/Product Name
                </label>
                <br />
                <p className=" font-normal text-[14px] mt-[2px] text-[#0098db] ">What do we refer your project as? E.g. "Beto App"</p>
                <br />
                <input className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none " type="text" placeholder="Enter here" required />
                <br />
                <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="summary">
                  Project Summary
                </label>
                <br />
                <p className=" font-normal text-[14px] mt-[2px] text-[#0098db] ">
                  General review or summary of what your project entails. E.g. "The Motivv App is aimed to bridge the gap between clients and designers" or " Uber but for bikes" or "Something like Facebook"
                </p>
                <br />
                <input className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none " type="text" placeholder="Enter here" required />
                <br />
                <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="brief">
                  Project Brief
                </label>
                <br />
                <p className=" font-normal text-[14px] mt-[2px] text-[#0098db] ">Upload a more detailed documentation of your project if you have one. (You can add multiple files).</p>

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
                <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="summary">
                  Project Brief & Features
                </label>
                <br />
                <p className=" font-normal text-[14px] mt-[2px] text-[#0098db] ">In the event of no file, kindly write your project brief.</p>
                <br />
                <input className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none " type="text" placeholder="Enter here" required />
                <br />
              </form>
              <div className=" w-full mt-[50px] flex justify-between items-center ">
                <Link onClick={() => window.scrollTo(0, 0)} className="w-fit h-fit " to="/basic">
                  <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">BACK</div>
                </Link>
                <Link onClick={() => window.scrollTo(0, 0)} className="w-fit h-fit " to="/project">
                  <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">NEXT STEP</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" w-full h-fit pb-[40px] phone:flex lg:hidden mt-[8rem] flex justify-center items-center ">
        <div className=" phone:w-[80%] md:max-w-[70%] flex justify-between flex-col ">
          <h1 className=" font-semibold text-[30px] text-[#00325c] mb-[5px] ">Onboarding</h1>
          <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mb-[1px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>
          <div className="mt-[3rem] mb-[2rem] ">
            <form autoComplete="on" action="mailto:info@nubeero.com">
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="product">
                Project/Product Name
              </label>
              <br />
              <p className=" font-normal text-[14px] mt-[2px] text-[#0098db] ">What do we refer your project as? E.g. "Beto App"</p>
              <br />
              <input className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none " type="text" placeholder="Enter here" required />
              <br />
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="summary">
                Project Summary
              </label>
              <br />
              <p className=" font-normal text-[14px] mt-[2px] text-[#0098db] ">
                General review or summary of what your project entails. E.g. "The Motivv App is aimed to bridge the gap between clients and designers" or " Uber but for bikes" or "Something like Facebook"
              </p>
              <br />
              <input className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none " type="text" placeholder="Enter here" required />
              <br />
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="brief">
                Project Brief
              </label>
              <br />
              <p className=" font-normal text-[14px] mt-[2px] text-[#0098db] ">Upload a more detailed documentation of your project if you have one. (You can add multiple files).</p>

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

                <input
                  className="file:text-[14px] file:text-[#00325c] file:bg-transparent cursor-pointer file:border-none outline-none text-white  w-[80%] "
                  type="file"
                  name="file[]"
                  id="attachment"
                  accept=".doc,.xml,.xls,.pdf,.ppt"
                  multiple
                  required
                />
              </div>
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="summary">
                Project Brief & Features
              </label>
              <br />
              <p className=" font-normal text-[14px] mt-[2px] text-[#0098db] ">In the event of no file, kindly write your project brief.</p>
              <br />
              <input className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none " type="text" placeholder="Enter here" required />
              <br />
            </form>
            <div className=" w-full mt-[50px] flex justify-between items-center ">
              <Link onClick={() => window.scrollTo(0, 0)} className="w-fit h-fit " to="/basic">
                <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">BACK</div>
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} className="w-fit h-fit " to="/project">
                <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">NEXT STEP</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Onboarding;
