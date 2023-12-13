import runningMan from "./nubeero running man.png";

function Man() {
  return (
    <>
      <div className=" hidden phone:hidden md:block w-2/4 h-fit pr-[40px] ">
        <img src={runningMan} className="w-full h-auto " alt="running man" />
      </div>
      <div className=" hidden md:hidden phone:block w-2/4 ">
        <img src={runningMan} className="w-full  h-[300px]" alt="running man" />
      </div>
    </>
  );
}

export default Man;
