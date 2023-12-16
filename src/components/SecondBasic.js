import SecondSideBar from "./SecondSideBar";
import { Link } from "react-router-dom";
import "../App.css";
// import SecondBasicSideBar from "./SecondBasicSideBar";

function SecondBasic() {
  return (
    <>
      {/* LARGE SCREENS */}
      <div className="flex phone:hidden md:hidden lg:flex mt-[8rem] w-full justify-start items-start ">
        <div className=" flex justify-between   max-w-[80%] ">
          <SecondSideBar />

          <div className=" ml-[23rem]  mt-[1rem] ">
            <h1 className=" font-semibold text-[30px] text-[#00325c] mb-[5px] ">Let's start with your information</h1>
            <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mb-[1px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>
            <form className="mt-[2rem]  " action="mailto:info@nubeero.com">
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
                Full Name
              </label>
              <br />
              <input className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none " autoComplete="on" type="text" placeholder="Enter Name" required />
              <br />
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="address">
                Email Address
              </label>
              <br />
              <input
                className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none "
                autoComplete="on"
                type="email"
                placeholder="ex:janedoe000@mail.com"
                required
              />
              <br />
              <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="number">
                Phone Number
              </label>
              <br />
              <input
                className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none "
                autoComplete="on"
                type="tel"
                placeholder="Enter Phone Number"
                required
              />
            </form>
            <div className=" w-full flex mt-[50px] justify-between items-center ">
              <Link onClick={() => window.scrollTo(0, 0)} className="w-fit h-fit " to="/processing">
                <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">BACK</div>
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/resoucesforbasicinfo">
                <div className=" hover:bg-black w-[157px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[14px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg  ">NEXT STEP</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS -  MEDIUM SCREENS */}
      <div className=" w-full phone:flex lg:hidden h-fit pb-[50px] mt-[8rem] flex justify-center items-center ">
        <div className=" phone:w-[80%] md:max-w-[70%] flex justify-between flex-col ">
          <h1 className=" font-semibold text-[30px] text-[#00325c] mb-[5px] ">Let's start with your information</h1>
          <p className=" font-normal text-[18px] text-[#0098db] border-solid border-b-[#bbbec2] border-b-[1px] mb-[1px] w-full pb-[15px] ">Please fill in the details below so we can get in touch with you</p>
          <form className="mt-[2rem]  " action="mailto:info@nubeero.com">
            <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="name">
              Full Name
            </label>
            <br />
            <input className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none " autoComplete="on" type="text" placeholder="Enter Name" required />
            <br />
            <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="address">
              Email Address
            </label>
            <br />
            <input
              className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none "
              autoComplete="on"
              type="email"
              placeholder="ex:janedoe000@mail.com"
              required
            />
            <br />
            <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="number">
              Phone Number
            </label>
            <br />
            <input
              className=" w-full text-[#00325c] h-[60px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pl-[15px] bg-transparent outline-none "
              autoComplete="on"
              type="tel"
              placeholder="Enter Phone Number"
              required
            />
          </form>
          <div className=" w-full mt-[40px] flex justify-between items-center ">
            <Link onClick={() => window.scrollTo(0, 0)} className="w-fit h-fit " to="/processing">
              <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[11px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg cursor-pointer ">BACK</div>
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} className="w-fit h-fit " to="/resoucesforbasicinfo">
              <div className=" hover:bg-black w-[100px] rounded-[3px] h-[49px] font-normal bg-[#00325c]  text-[11px] text-center flex justify-center items-center tracking-[2px] text-white shadow-lg cursor-pointer ">NEXT STEP</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondBasic;
