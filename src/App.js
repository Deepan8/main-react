
import Content from './components/dashboard/landindpage';
import Drug from '../src/components/dashboard/drug/drug'
import Pharmacies from './components/dashboard/pharmacies/pharmacies';
import Pro from './components/dashboard/provides/providers';
import Errorpage from './components/dashboard/pharmacies/errorpage/err';
import PharmacyNames from './components/dashboard/pharmacies/PharmacyName';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
        <Route path="/main-react" element={<Content />}/>
        <Route path="/Drug" element={<Drug/>}/> 
        <Route path="/Pharmacies" element={<Pharmacies/>}><Route path="PharmacyNames" element={<PharmacyNames/>}/>  </Route>
        <Route path="/Pro" element={<Pro/>}/> 
        <Route path="/Errorpage" element={<Errorpage/>}/> 
    </Routes>
      </>
  );
}

export default App;
