import './App.css';
import Home from "./Components/Home";
import Input from "./Components/Input.js"
import Picture from "./Components/Picture.js"
import WaferData from "./Components/WaferData.js"
import { Helmet } from 'react-helmet';

function App() {
  return (
    <main className = "" >
      <Helmet>
        <title>Wafer Defect Detection</title>
      </Helmet>
      <Input className="Input"/>
      <Picture className="Picture"/>
      <WaferData className="WaferData"/>
    </main>
  );
}

export default App;
