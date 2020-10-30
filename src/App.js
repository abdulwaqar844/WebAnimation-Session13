import React from "react";
import useWebAnimations,{rubberBand} from "@wellyshen/use-web-animations";
import "./App.css"
function App() {

  const { ref, playState,getAnimation } = useWebAnimations({
  ...rubberBand});
  return (
    <div >
      <div className="target" ref={ref}></div>
Current Animation Status {playState}
<button onClick={()=>getAnimation().pause()}>Pause</button>
<button onClick={()=>getAnimation().play()}>Play</button>

    </div>
  );
}

export default App;
