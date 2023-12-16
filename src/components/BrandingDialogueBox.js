import "../App.css";

function BrandingDialogueBox() {
  return (
    <>
      <div className=" w-full mt-[20px]">
        <label className=" font-normal text-[18px] text-[#00325c] " htmlFor="message">
          Message:
        </label>
        <br />
        <textarea className=" w-full text-[#00325c] h-[100px] border-solid border-[1px] border-[#bbbec2] rounded-[5px] mt-[7px] mb-[15px] pt-[10px] pl-[15px] bg-transparent outline-none " placeholder="type of services" />
      </div>
    </>
  );
}

export default BrandingDialogueBox;
