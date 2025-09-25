
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ExploreHomes from './pages/ExploreHomes';
import EntranceVideo from './pages/EntranceVideo.jsx';
import ExploreRockRidge from './pages/ExploreRockRidge';
import ExploreWalkThrough1 from './pages/ExploreWalkThrough1.jsx';
import EntrancePage from './pages/EntrancePage';
import TerraceAminities from './pages/TerraceAminities'
import Gallery from './pages/Gallery';
// Floors Components
import FloorA from "./Floors/Wing-A/Floor.jsx";
import FloorB from "./Floors/Wing-B/Floor.jsx";
import FloorC from "./Floors/Wing-C/Floor.jsx";
import FloorD from "./Floors/Wing-D/Floor.jsx";


// Not Found Page
import NotFound from './pages/NotFound';


// units2D  // Rooms Components
import UnitA from './Floors/Wing-A/Unit.jsx';
import UnitB from './Floors/Wing-B/unit.jsx';

function App() {
  return (
    <>

      <Router>
        <Routes>
          {/* Default Homepage */}
          <Route path="/" element={<EntrancePage />} />
          <Route path="/entrance-video" element={<EntranceVideo />} />

          <Route path="/masterplan" element={<ExploreRockRidge />} />

          <Route path="/terrace_aminities" element={<TerraceAminities />} />
          <Route path="/explore_homes" element={<ExploreHomes />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/explorewalkthrough" element={<ExploreWalkThrough1 />} />

          <Route path="/floora/:id" element={<FloorA />} />
          <Route path="/floorb/:id" element={<FloorB />} />
          <Route path="/floorc/:id" element={<FloorC />} />
          <Route path="/floord/:id" element={<FloorD />} />

          {/* Rooms */}

          <Route path="/unit_wingA/:id" element={<UnitA />} />
          <Route path="/unit_wingB/:id" element={<UnitB />} />

          {/* Catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </>
  )
}
export default App;
