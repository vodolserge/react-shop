import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {Shop} from "./components/Shop"

/**
 * Main App component.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
      <>
          <Header/>
          <Shop/>
          <Footer/>
      </>
  );
}

export default App;
