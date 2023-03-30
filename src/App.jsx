import { useSelector } from "react-redux"
import Settings from './compenets/Setting/Settings'
import SwitchTime from './compenets/SwitchTime/SwitchTime'
import Timer from "./compenets/Timer/Timer"
import "./style/app.css"


function App() {
  const stateFont = useSelector(state => state.style.font);

  console.log(stateFont);

  return (
    <div style={{fontFamily:stateFont.kod}} className="App">
      <SwitchTime/>
      <Timer/>
      <Settings/>
    </div>
  )
}

export default App
