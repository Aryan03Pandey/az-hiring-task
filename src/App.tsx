import { useState, createContext, } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';
import UpskillWindow from './components/upskill/UpskillWindow';
import DashboardWindow from './components/dashboard/dashboardWindow';
import LearnWindow from './components/learn/learnWindow';
import ForumsWindow from './components/forums/forumsWindow';
import ContestWindow from './components/contest/ContestWindow';
import LeaderboardWindow from './components/leaderboard/leaderboardWindow';

interface sidebarContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

export const SidebarContext = createContext<sidebarContextType>({
  open: true,
  setOpen: () => { },
  active: 'upskill',
  setActive: () => { },
});

function App() {

  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(window.location.pathname.split('/')[1])


  return (
    <SidebarContext.Provider value={{ open, setOpen, active, setActive }}>
      <Router>
        <div className='max-w-[1600px] mx-auto h-screen'>
          <div className='relative flex justify-end min-h-full overflow-auto'>
            <Sidebar />
            <div 
              className={`px-4 flex flex-col gap-4 overflow-auto ${open ? " w-[calc(100%_-267px)] " : " w-[calc(100%_-90px)] "} `}
            >
              <Navbar />
              <Routes>
                <Route path="/dashboard" element={<DashboardWindow />} />
                <Route path="/learn" element={<LearnWindow />} />
                <Route path="/forums" element={<ForumsWindow />} />
                <Route path="/upskill/*" element={<UpskillWindow />} />
                <Route path="/contest" element={<ContestWindow />} />
                <Route path="/leaderboard" element={<LeaderboardWindow />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </SidebarContext.Provider>
  );
}

export default App;
