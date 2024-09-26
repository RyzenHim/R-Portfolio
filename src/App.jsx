import React, { Suspense, lazy } from "react";

import { useState, useEffect } from "react";

const LoaderSection = lazy(() =>
  import("./components/LoaderSection/LoaderSection.jsx")
);
const HeroSection = lazy(() =>
  import("./components/HeroSection/HeroSection.jsx")
);
const Nav = lazy(() => import("./components/NavSection/nav.jsx"));
const AboutMeSection = lazy(() =>
  import("./components/AboutMeSection/AboutMeSection.jsx")
);
const SkillSection = lazy(() =>
  import("./components/SkillSection/SkillSection.jsx")
);
const MouseMoveSec = lazy(() =>
  import("./components/MouseMoveSec/MouseMoveSec.jsx")
);
const NavContent = lazy(() => import("./components/NavSection/NavContent.jsx"));
function App() {
  // const [lodng, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  //      {lodng ? (
  //       <LoaderSection />
  //     ) : (
  //       <>
  //         {" "}

  //       </>
  //     )}

  return (
    <>
      <Suspense fallback={<LoaderSection />}>
        <Nav />
        <NavContent />
        <HeroSection />
        <AboutMeSection />
        <SkillSection />
        <MouseMoveSec />
      </Suspense>
    </>
  );
}

export default App;
