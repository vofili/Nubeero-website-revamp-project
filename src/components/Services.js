import { Link } from "react-router-dom";
import image from "../components/Content/images/overview.png";
import group from "../components/Content/images/group.png";
import "../App.css";

function Services() {
  return (
    <>
      {/* LARGE SCREENS */}
      <div className=" hidden w-full mt-[9rem] md:flex justify-center items-center ">
        <div className=" w-[70%]">
          <div className=" text-center  ">
            <h1 className=" font-normal text-[#00325c] text-[42px]">Innovative solutions for Insurtech</h1>
            <p className=" w-[70%] ml-[14%] mt-[12px] font-normal text-[18px] text-[#0098db]  ">Our AI powered platform manages the insurance portfolio of average citizens in these countries based on environmental risk factors</p>
          </div>
          {/* FEATURES BOX 1 */}
          <div className="flex mt-[5rem] w-full justify-between items-center  ">
            <div className=" w-[45%] ">
              <h2 className=" font-normal text-[#00325c] text-[38px]">Resource Outsourcing</h2>
              <p className=" font-normal text-[#0098db] text-[14px]">
                Discover the benefits of resource outsourcing with our expert team. Our service provides businesses with access to a diverse range of highly skilled professionals, enabling you to tap into expertise you may not have in-house. From IT
                support to marketing, financial management, and more, our outsourcing solutions are designed to meet your unique business needs.
              </p>
              <Link onClick={() => window.scrollTo(0, 0)} className="  " to="/processing">
                <div className="w-32 mt-4 text-[#00325c] hover:underline  items-center justify-between flex">
                  Learn More
                  <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <img className=" w-[50%] h-[399.56px]  " src={group} alt="overview" />
          </div>
          {/* FEATURES BOX 2 */}
          <div className="flex mt-[6rem] w-full justify-between items-center  ">
            <img className=" w-[45%] h-[399.56px]  " src={image} alt="overview" />
            <div className=" w-[40%]  ">
              <h2 className=" font-normal text-[#00325c] mb-[10px] text-[38px]">
                Omini Platform <span style={{ color: "#00325c" }}>to Manage Policies</span>
              </h2>
              <p className=" font-normal text-[#0098db] text-[14px]">
                We pull disparate policies into one platform for management and monitoring, creating on-demand insurance for micro-events like borrowing a friend's car, and the adoption of the peer-to-peer model to both create customized group
                coverage and incentivize positive choices through group rebates.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" hidden phone:flex mt-[6rem]  md:hidden w-full justify-center items-center ">
        <div>
          <div className=" text-center  ">
            <h1 className=" font-normal text-[#00325c] text-[22px]">Innovative solutions for Insurtech</h1>
            <p className=" w-[70%] ml-[14%] mt-[12px] font-normal text-[14px] text-[#0098db]  ">Our AI powered platform manages the insurance portfolio of average citizens in these countries based on environmental risk factors</p>
          </div>
          <div className=" flex mt-[4rem] flex-col w-full justify-between items-center ">
            <img className="  w-[60%] " src={group} alt="overview" />
            <div className="mt-[4rem] w-[65%] ">
              <h2 className=" font-medium mb-[10px] text-[#00325c] text-[16px]">Resource Outsourcing</h2>
              <p className=" font-normal text-[#0098db] text-[13px]">
                Discover the benefits of resource outsourcing with our expert team. Our service provides businesses with access to a diverse range of highly skilled professionals, enabling you to tap into expertise you may not have in-house. From IT
                support to marketing, financial management, and more, our outsourcing solutions are designed to meet your unique business needs.
              </p>
              <Link onClick={() => window.scrollTo(0, 0)} className="  " to="/processing">
                <div className="w-32 mt-4 text-[#00325c] hover:underline  items-center justify-between flex">
                  Learn More
                  <svg width="18" height="14" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <img className=" mt-[6rem]  w-[60%] " src={image} alt="overview" />
            <div className="mt-[3rem] w-[65%] ">
              <h2 className=" font-medium mb-[10px] text-[#00325c] text-[16px]">
                {" "}
                Omini Platform <span style={{ color: "#00325c" }}>to Manage Policies</span>
              </h2>
              <p className=" font-normal text-[#0098db] text-[13px]">
                We pull disparate policies into one platform for management and monitoring, creating on-demand insurance for micro-events like borrowing a friend's car, and the adoption of the peer-to-peer model to both create customized group
                coverage and incentivize positive choices through group rebates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
