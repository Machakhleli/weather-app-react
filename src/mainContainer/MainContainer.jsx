import MainSection from "./main-section/MainSection";
import Aside from "./aside/Aside";
import "./MainContainer.css";

function MainContainer() {
  return (
    <main id="main-cntainer">
      <MainSection />
      <Aside />
    </main>
  );
}

export default MainContainer;
