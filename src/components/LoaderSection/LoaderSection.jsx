import "./LoaderSection.css";

const LoaderSection = () => {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-[#212121]  top-0 right-0 left-0 bottom-0 z-[-1] relative ">
        <div class="ui-abstergo">
          <div class="abstergo-loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="ui-text">
            Loading
            <div class="ui-dot"></div>
            <div class="ui-dot"></div>
            <div class="ui-dot"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoaderSection;
