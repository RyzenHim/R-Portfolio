import NavContent from "./NavContent";
import MainLogo from "./Mainlogo";
import HamSection from "../HamSection/HamSection.jsx";

function Nav() {
  return (
    <>
      <div className="flex h-12 items-center justify-between gap-16 mt-4 fixed z-[45] w-[100%] pr-10">
        <div className="flex h-12">
          <MainLogo />
        </div>
        <div>
          <HamSection />
        </div>
      </div>
      <NavContent />
    </>
  );
}
export default Nav;
