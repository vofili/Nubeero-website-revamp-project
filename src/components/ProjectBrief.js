import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import product from "../components/Content/images/product.png";
import "../App.css";

function ProjectBrief() {
  return (
    <>
      {/* LARGE SCREENS */}
      <div className="flex phone:hidden md:hidden lg:flex mt-[8rem] h-fit pb-[50px] w-full justify-start items-start ">
        <div className=" flex justify-between   max-w-[80%] ">
          <SideBar />

          <div className=" ml-[23rem] mt-[1rem] ">
            <h1 className=" font-semibold text-[30px] text-[#00325c] mb-[5px] ">Project Brief</h1>
            <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mb-[1px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>
            <h2 className=" font-medium text-[20px] mt-[60px] text-[#00325c] ">Which phase of the product development process have you fulfilled?</h2>
            <img className=" w-[400px] h-[260px] mt-[20px] " src={product} alt="product" />
            <form autoComplete="on" className=" mt-[40px]" action="mailto:info@nubeero.com">
              <span className="flex w-[75%] h-[25px] mb-[50px] items-center justify-between">
                <input className=" w-[20px] h-full " type="checkbox" />

                <p className=" font-normal  h-full  w-[90%] text-[16px] text-[#0098db]  mb-[22px] ">Product Ideation/Definition 💡 (I am/We are still fleshing things out; ie. research is on going or just completed)</p>
              </span>
              <span className="flex w-[75%] h-[25px] mb-[50px] items-center justify-between">
                <input className=" w-[20px] h-full " type="checkbox" />

                <p className=" font-normal  h-full  w-[90%] text-[16px] text-[#0098db]  mb-[22px] ">Business model validation 💼 (I/We have tested my idea with an MVP) </p>
              </span>
              <span className="flex w-[75%] h-[25px] mb-[50px] items-center justify-between">
                <input className=" w-[20px] h-full " type="checkbox" />

                <p className=" font-normal  h-full  w-[90%] text-[16px] text-[#0098db]  mb-[22px] ">Product Conceptualisation 📱 (I am/We are ready to release a working version of my product to the market)</p>
              </span>
              <span className="flex w-[75%] h-[25px] mb-[60px] items-center justify-between">
                <input className=" w-[20px] h-full " type="checkbox" />

                <p className=" font-normal  h-full  w-[90%] text-[16px] text-[#0098db]  mb-[22px] ">Product Branding & Identity 🎨 (I/We have a working solution that I/we want to market, but it needs a name, logo, identity etc)</p>
              </span>
              <span className="flex w-[75%] h-[25px] mb-[50px] items-center justify-between">
                <input className=" w-[20px] h-full " type="checkbox" />

                <p className=" font-normal  h-full  w-[90%] text-[16px] text-[#0098db]  mb-[22px] ">Product Launch 🚀 (I am/We are confident in our solution and it's time to release it to the world)</p>
              </span>

              <h3 className=" font-medium text-[20px] mt-[60px] text-[#00325c] ">Are there any branding guidelines to respect? </h3>
              <p className="font-normal  mt-[4px] text-[14px] text-[#0098db]">This is usually a brand book covering things like colors and fonts</p>
              <div className=" mt-[15px] ">
                <label className="font-normal w-[43px] flex justify-between items-center  mt-[4px] text-[14px] text-[#8476aa]" htmlFor="yes">
                  <input id="yes" name="options" value="Yes" type="radio" />
                  Yes
                </label>
                <br />
                <label className="font-normal  w-[43px] flex justify-between items-center mt-[4px] text-[14px] text-[#8476aa]" htmlFor="no">
                  <input id="no" name="options" value="No" type="radio" />
                  No
                </label>
                <br />
              </div>
              <br />

              <label style={{ fontweight: "500", fontSize: "20px", color: "#00325c" }} htmlFor="project">
                Please share any available relevant brand book/elements
              </label>
              <br />
              <p style={{ fontWeight: "400", fontSize: "14px", color: "#0098db", paddingTop: "4px", marginBottom: "3px" }}>You can share attach up to 5 files, preferably in PDF</p>

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
                  className=" file:text-[14px] file:text-[#00325c] file:bg-transparent cursor-pointer file:border-none outline-none text-white  w-[80%] "
                  type="file"
                  name="file[]"
                  id="attachment"
                  accept=".doc,.xml,.xls,.pdf,.ppt"
                  multiple
                  required
                />
              </div>
              <h2 className=" font-medium text-[20px] mt-[60px] text-[#00325c] ">How important is it for you to build a relationship with your product and its existing or potential customers/users? </h2>
              <p className="font-normal  mb-[10px] mt-[4px] text-[14px] text-[#0098db]">This helps us to understand how user-centered your product aims to be.</p>

              <div className=" mt-[50px] flex w-3/4 justify-between  ">
                <h4 className="font-normal  text-[14px] text-[#0098db]">Not Important</h4>
                <div className=" w-[45%] text-[#00325c] text-[14px]  flex justify-between">
                  <div className=" flex  flex-col justify-between items-center ">
                    <label className=" mb-[7px]" htmlFor="number">
                      1
                    </label>
                    <input id="1" name="1" value="1" type="radio" />
                  </div>
                  <div className=" flex flex-col justify-between items-center ">
                    <label className=" mb-[7px]" htmlFor="number">
                      2
                    </label>
                    <input id="1" name="1" value="1" type="radio" />
                  </div>{" "}
                  <div className=" flex flex-col justify-between items-center ">
                    <label className=" mb-[7px]" htmlFor="number">
                      3
                    </label>
                    <input id="1" name="1" value="1" type="radio" />
                  </div>{" "}
                  <div className=" flex flex-col justify-between items-center ">
                    <label className=" mb-[7px]" htmlFor="number">
                      4
                    </label>
                    <input id="1" name="1" value="1" type="radio" />
                  </div>{" "}
                  <div className=" flex flex-col justify-between items-center ">
                    <label className=" mb-[7px]" htmlFor="number">
                      5
                    </label>
                    <input id="1" name="1" value="1" type="radio" />
                  </div>
                </div>
                <h4 className="font-normal  text-[14px] text-[#0098db]">Very Important</h4>
              </div>
            </form>
            <div className=" flex w-full items-center justify-between mt-[50px] ">
              <Link onClick={() => window.scrollTo(0, 0)} to="/onboarding">
                <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">BACK</div>
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/branding">
                <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">NEXT STEP</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" w-full h-fit pb-[40px] phone:flex lg:hidden mt-[8rem] flex justify-center items-center ">
        <div className=" phone:w-[80%] md:max-w-[70%] flex justify-between flex-col ">
          <div className="  mt-[1rem] ">
            <h1 className=" font-semibold text-[30px] text-[#00325c] mb-[5px] ">Project Brief</h1>
            <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mb-[1px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>
            <h2 className=" font-medium text-[20px] mt-[60px] text-[#00325c] ">Which phase of the product development process have you fulfilled?</h2>
            <img className=" ipad:max-w-[70%] w-full h-[260px] mt-[20px] " src={product} alt="product" />
            <form autoComplete="on" className=" mt-[40px]" action="mailto:info@nubeero.com">
              <span className="flex  mb-[20px] items-start justify-between">
                <input className=" w-[20px] mt-[5px] h-[20px] " type="checkbox" />

                <p className=" font-normal  h-full  w-[90%] text-[16px] text-[#0098db]  mb-[22px] ">Product Ideation/Definition 💡 (I am/We are still fleshing things out; ie. research is on going or just completed)</p>
              </span>
              <span className="flex  mb-[20px] items-start justify-between">
                <input className=" w-[20px] mt-[5px] h-[20px] " type="checkbox" />

                <p className=" font-normal  h-full  w-[90%] text-[16px] text-[#0098db]  mb-[22px] ">Business model validation 💼 (I/We have tested my idea with an MVP) </p>
              </span>
              <span className="flex  mb-[20px] items-start justify-between">
                <input className=" w-[20px] mt-[5px] h-[20px] " type="checkbox" />

                <p className=" font-normal  h-full  w-[90%] text-[16px] text-[#0098db]  mb-[22px] ">Product Conceptualisation 📱 (I am/We are ready to release a working version of my product to the market)</p>
              </span>
              <span className="flex  mb-[20px] items-start justify-between">
                <input className=" w-[20px] mt-[5px] h-[20px] " type="checkbox" />

                <p className=" font-normal  h-full  w-[90%] text-[16px] text-[#0098db]  mb-[22px] ">Product Branding & Identity 🎨 (I/We have a working solution that I/we want to market, but it needs a name, logo, identity etc)</p>
              </span>
              <span className="flex  mb-[20px] items-start justify-between">
                <input className=" w-[20px] mt-[5px] h-[20px] " type="checkbox" />

                <p className=" font-normal  h-full  w-[90%] text-[16px] text-[#0098db]  mb-[22px] ">Product Launch 🚀 (I am/We are confident in our solution and it's time to release it to the world)</p>
              </span>

              <h3 className=" font-medium text-[20px] mt-[60px] text-[#00325c] ">Are there any branding guidelines to respect? </h3>
              <p className="font-normal  mt-[4px] text-[14px] text-[#0098db]">This is usually a brand book covering things like colors and fonts</p>
              <div className=" mt-[15px] ">
                <label className="font-normal w-[43px] flex justify-between items-center  mt-[4px] text-[14px] text-[#8476aa]" htmlFor="yes">
                  <input id="yes" name="options" value="Yes" type="radio" />
                  Yes
                </label>
                <br />
                <label className="font-normal  w-[43px] flex justify-between items-center mt-[4px] text-[14px] text-[#8476aa]" htmlFor="no">
                  <input id="no" name="options" value="No" type="radio" />
                  No
                </label>
                <br />
              </div>
              <br />

              <label style={{ fontweight: "500", fontSize: "20px", color: "#00325c" }} htmlFor="project">
                Please share any available relevant brand book/elements
              </label>
              <br />
              <p style={{ fontWeight: "400", fontSize: "14px", color: "#0098db", paddingTop: "4px", marginBottom: "3px" }}>You can share attach up to 5 files, preferably in PDF</p>

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
                  className=" file:text-[14px] file:text-[#00325c] file:bg-transparent cursor-pointer file:border-none outline-none text-white  w-[80%] "
                  type="file"
                  name="file[]"
                  id="attachment"
                  accept=".doc,.xml,.xls,.pdf,.ppt"
                  multiple
                  required
                />
              </div>
              <h2 className=" font-medium text-[20px] mt-[60px] text-[#00325c] ">How important is it for you to build a relationship with your product and its existing or potential customers/users? </h2>
              <p className="font-normal  mb-[10px] mt-[4px] text-[14px] text-[#0098db]">This helps us to understand how user-centered your product aims to be.</p>

              <div className=" mt-[50px] flex   justify-between  ">
                <h4 className="font-normal phone:w-[25%] text-[14px] text-[#0098db]">Not Important</h4>
                <div className=" ipad:w-[40%] phone:w-[35%] text-[#00325c] text-[14px]  flex justify-between">
                  <div className=" flex  flex-col justify-between items-center ">
                    <label className=" mb-[7px]" htmlFor="number">
                      1
                    </label>
                    <input id="1" name="1" value="1" type="radio" />
                  </div>
                  <div className=" flex flex-col justify-between items-center ">
                    <label className=" mb-[7px]" htmlFor="number">
                      2
                    </label>
                    <input id="1" name="1" value="1" type="radio" />
                  </div>{" "}
                  <div className=" flex flex-col justify-between items-center ">
                    <label className=" mb-[7px]" htmlFor="number">
                      3
                    </label>
                    <input id="1" name="1" value="1" type="radio" />
                  </div>{" "}
                  <div className=" flex flex-col justify-between items-center ">
                    <label className=" mb-[7px]" htmlFor="number">
                      4
                    </label>
                    <input id="1" name="1" value="1" type="radio" />
                  </div>{" "}
                  <div className=" flex flex-col justify-between items-center ">
                    <label className=" mb-[7px]" htmlFor="number">
                      5
                    </label>
                    <input id="1" name="1" value="1" type="radio" />
                  </div>
                </div>
                <h4 className="font-normal phone:w-[25%] text-[14px] text-[#0098db]">Very Important</h4>
              </div>
            </form>
            <div className=" flex w-full items-center justify-between mt-[50px] ">
              <Link onClick={() => window.scrollTo(0, 0)} to="/onboarding">
                <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">BACK</div>
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/branding">
                <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">NEXT STEP</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectBrief;
