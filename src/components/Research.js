import graph from "./graph.png";
import group from "./group.png";

function Research() {
  return (
    <>
      {/* LARGE SCREENS */}
      <div className=" hidden w-full mt-[9rem] md:flex justify-center items-center ">
        <div className=" w-[70%]">
          {/* FEATURES BOX 1 */}
          <div className="flex  w-full justify-between items-center  ">
            <div className=" w-[45%] ">
              <h3 className=" h-[31px] w-[170px] bg-opacity-5 tracking-[0.05em] text-[12px] text-center text-[#00325c] pt-[5px] font-normal rounded-[70px] border-[1px]  bg-[#4BA0FE0D] ">RESEARCH & ANALYTICS</h3>
              <h2 className=" font-normal text-[#F2994A] text-[38px]">
                AI <span style={{ color: "#00325c" }}>Powered Platform</span>
              </h2>
              <p className=" font-normal text-[#0098db] text-[14px]">
                Our research also focuses on engineering our AI platform to address the need to build the public trust in the local insurance landscape by providing simplified consumer education and gather feedback from customers for continuous
                improvement.{" "}
              </p>
            </div>
            <img className=" w-[50%] h-[399.56px]  " src={graph} alt="request" />
          </div>
          {/* FEATURES BOX 2 */}
          <div className="flex mt-[6rem] w-full justify-between items-center  ">
            <img className=" w-[45%] h-[399.56px]  " src={group} alt="stakeholders" />
            <div className=" w-[40%]  ">
              <h2 className=" font-normal text-[#00325c] mb-[10px] text-[38px]">Insurtech </h2>
              <p className=" font-normal text-[#0098db] text-[14px]">
                Our Insurtech product is an easy to use platform for getting various types of insurance cover ranging from Motor, Accident, Health, Life insurance and other types. We choose the best available insurance products from various trusted
                Insurance partners and provide the avenue to book new Policies, Cancel existing Policies, renew expired policies and view general policy information.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" hidden phone:flex mt-[6rem]  md:hidden w-full justify-center items-center ">
        <div className=" flex mt-[4rem] flex-col w-full justify-between items-center ">
          <img className="  w-[60%] " src={graph} alt="request" />
          <div className="mt-[4rem] w-[65%] ">
            <h2 className=" font-medium mb-[10px] text-[#F2994A] text-[16px]">
              {" "}
              AI <span style={{ color: "#00325c" }}>Powered Platform</span>
            </h2>
            <p className=" font-normal text-[#0098db] text-[13px]">
              Our research also focuses on engineering our AI platform to address the need to build the public trust in the local insurance landscape by providing simplified consumer education and gather feedback from customers for continuous
              improvement.{" "}
            </p>
          </div>
          <img className=" mt-[6rem]  w-[60%] " src={group} alt="stakeholders" />
          <div className="mt-[3rem] w-[65%] ">
            <h2 className=" font-medium mb-[10px] text-[#00325c] text-[16px]">Insurtech </h2>
            <p className=" font-normal text-[#0098db] text-[13px]">
              Our Insurtech product is an easy to use platform for getting various types of insurance cover ranging from Motor, Accident, Health, Life insurance and other types. We choose the best available insurance products from various trusted
              Insurance partners and provide the avenue to book new Policies, Cancel existing Policies, renew expired policies and view general policy information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Research;
