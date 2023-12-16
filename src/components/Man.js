import runningMan from "../components/Content/images/nubeero running man.png";

function Man() {
  return (
    <>
      <div className=" hidden phone:hidden md:block w-2/4 h-fit pr-[40px] ">
        <img src={runningMan} className="w-full h-auto " alt="running man" />
      </div>
      <div className=" hidden md:hidden phone:block w-full ">
        <img src={runningMan} className="w-full phone:h-[250px] ipad:h-[400px]" alt="running man" />
      </div>
    </>
  );
}

export default Man;
