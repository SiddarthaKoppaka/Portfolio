import CRTOverlay from './components/CRTOverlay';
import ChannelSwitch from './components/ChannelSwitch';
import { AudioProvider } from './contexts/AudioContext';
import './index.css';

function App() {
  return (
    <AudioProvider>
      <div className="app-container relative w-full h-full bg-[#101014] text-[#EFE8D0] overflow-hidden">
        {/* The purely visual overlay */}
        <CRTOverlay />

        {/* The interactive content */}
        <ChannelSwitch />
      </div>
    </AudioProvider>
  );
}

export default App;
