import BgLayer from "../src/background/BgLayer";
import Spinner from "../src/spinner/Spinner";
import MainContainer from "../src/mainContainer/MainContainer";

function App() {
  return (
    <div className="App">
      <BgLayer />
      <Spinner />
      <MainContainer />
      {/* Other components can be added here */}
    </div>
  );
}

export default App;
