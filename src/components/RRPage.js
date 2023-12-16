import { Link } from "react-router-dom";
import img from "../components/Content/images/group.png";
import group from "../components/Content/images/groupofwomen.png";
import "../App.css";

function RRPage() {
  return (
    <>
      {/* LARGE SCREENS */}
      <div className=" mt-[7rem] phone:hidden md:flex h-fit  pb-[3rem] flex justify-center items-center  lg:block w-full max-w-full  mr-[90px]">
        <div className=" items-center w-full flex justify-center   ">
          <div className=" max-w-[70%] ">
            <div className="flex justify-center items-center">
              <div className=" text-center w-[70%] ">
                <h1 className=" text-[#00325c] text-[42px] font-normal  ">Innovative solutions for Resourcing</h1>
                <p className=" text-[#0098db]   mt-[12px] text-[16px] font-normal  ">
                  Unlock the potential of your organization with innovative solutions for resourcing. Our team offers cutting-edge approaches to meet your unique business needs and drive success.
                </p>
              </div>
            </div>
            <div className="flex justify-between text-left items-center my-[80px]  ">
              <div className=" w-[45%]">
                <p className=" h-[31px] w-[170px] bg-opacity-5 tracking-[0.05em] text-[12px] text-center text-[#00325c] pt-[5px] font-normal rounded-[70px] border-[1px]  bg-[#4BA0FE0D] ">For Recruiters</p>
                <h2 className=" font-normal text-[#00325c] mb-[10px] text-[38px]">Build Amazing Teams</h2>
                <p className=" font-normal text-[#0098db] text-[14px]">
                  Enhance the capabilities of your organization with top talent from the tech industry. Our team specializes in tech outsourcing, providing innovative solutions to help you build amazing teams that drive success and achieve your
                  business goals. Whether you need resources for short-term projects or long-term engagements, we have the expertise to help you find the right fit and build a team that exceeds expectations.{" "}
                </p>
                <Link className="w-32" to="/secondbasic">
                  <div className="w-32 hover:underline mt-4 items-center justify-between flex text-[#00325c]  ">
                    Get Started
                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
              <img className="  w-[40%] " src={group} alt="overview" />
            </div>
            <div className="flex justify-between text-left items-center mt-[70px]  ">
              <img className="  w-[45%] " src={img} alt="overview" />
              <div className=" w-[45%] ">
                <p className=" h-[31px] w-[170px] bg-opacity-5 tracking-[0.05em] text-[12px] text-center text-[#00325c] pt-[5px] font-normal rounded-[70px] border-[1px]  bg-[#4BA0FE0D] ">For Resources</p>
                <h2 className=" font-normal text-[#00325c] mb-[10px] text-[38px]">Get Job Placement Without Stress</h2>
                <p className=" font-normal text-[#0098db] text-[14px]">
                  Simplify your job search with our tech outsourcing services. Our team takes the stress out of finding your next job by providing you with personalized support and innovative solutions to get you placed in your dream role. Whether
                  you're looking for short-term projects or long-term engagements, we have the resources and expertise to help you reach your goals.{" "}
                </p>
                <Link className=" items-center justify-between flex processing-company" to="/resourcedetails">
                  <div className="w-32 hover:underline mt-4 items-center justify-between flex text-[#00325c]  ">
                    Get Started
                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" md:hidden phone:flex w-full mt-[4rem] flex justify-center items-center ">
        <div className=" w-[80%] flex flex-col justify-between  ">
          <div className=" text-left  ">
            <h1 className=" text-[#00325c] text-[42px] font-normal  ">Innovative solutions for Resourcing</h1>
            <p className=" text-[#0098db]   mt-[12px] text-[16px] font-normal  ">
              Unlock the potential of your organization with innovative solutions for resourcing. Our team offers cutting-edge approaches to meet your unique business needs and drive success.
            </p>
          </div>
          <div className=" mt-[40px] ipad:h-[500px] w-[95%] h-[290px] ">
            <img className=" ipad:h-full ipad:w-full " src={group} alt="overview" />
          </div>
          <div className=" text-left mt-[40px] ">
            <p className=" h-[31px] mb-[10px] w-[170px] bg-opacity-5 tracking-[0.05em] text-[12px] text-center text-[#00325c] pt-[5px] font-normal rounded-[70px] border-[1px]  bg-[#4BA0FE0D] ">For Recruiters</p>
            <h2 className=" font-normal text-[#00325c] mb-[10px] text-[38px]">Build Amazing Teams</h2>
            <p className=" font-normal text-[#0098db] text-[14px]">
              Enhance the capabilities of your organization with top talent from the tech industry. Our team specializes in tech outsourcing, providing innovative solutions to help you build amazing teams that drive success and achieve your business
              goals. Whether you need resources for short-term projects or long-term engagements, we have the expertise to help you find the right fit and build a team that exceeds expectations.{" "}
            </p>
            <Link className="w-32" to="/secondbasic">
              <div className="w-32 hover:underline mt-[40px] items-center justify-between flex text-[#00325c]  ">
                Get Started
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className=" mt-[40px] ipad:h-[500px] w-[95%] h-[290px] ">
            <img className=" ipad:h-full ipad:w-full " src={img} alt="overview" />
          </div>
          <div className=" text-left mt-[40px] ">
            <p className=" h-[31px] mb-[10px] w-[170px] bg-opacity-5 tracking-[0.05em] text-[12px] text-center text-[#00325c] pt-[5px] font-normal rounded-[70px] border-[1px]  bg-[#4BA0FE0D] ">For Resources</p>
            <h2 className=" font-normal text-[#00325c] mb-[10px] text-[38px]">Get Job Placement Without Stress</h2>
            <p className=" font-normal text-[#0098db] text-[14px]">
              Simplify your job search with our tech outsourcing services. Our team takes the stress out of finding your next job by providing you with personalized support and innovative solutions to get you placed in your dream role. Whether you're
              looking for short-term projects or long-term engagements, we have the resources and expertise to help you reach your goals.{" "}
            </p>
            <Link className=" items-center justify-between flex processing-company" to="/resourcedetails">
              <div className="w-32 hover:underline mt-[40px] items-center justify-between flex text-[#00325c]  ">
                Get Started
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RRPage;
