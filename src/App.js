import Classroom from "./components/Classroom";
import LineLeader from './components/LineLeader' 
import LineMonitor from "./components/LineMonitor";
import ErrandRunner from "./components/ErrandRunner";
import WorkMonitor from './components/WorkMonitor';
import TicketHelper from './components/TicketHelper';
import PaperPasser from './components/PaperPasser';
import Greeter from './components/Greeter';
import Lights from './components/Lights';
import { Route } from "react-router-dom";


function App() {
  return (
      <div>
      <Classroom />
      <LineLeader/>
      <LineMonitor />
      <ErrandRunner/>
      <WorkMonitor/>
      <TicketHelper/>
      <PaperPasser/>
      <Greeter/>
      <Lights/>
    </div>    
  );
}

export default App;
