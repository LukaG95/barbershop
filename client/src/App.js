import styles from './App.module.scss';

import 'react-toastify/dist/ReactToastify.css';
import useWindowDimensions from './misc/WindowDimensions.js';
import { ToastContainer, createNotification } from "./misc/toast.js";
import FirstSection from './components/FirstSection.js';
import SecondSection from './components/SecondSection.js';
import ThirdSection from './components/ThirdSection.js';
import ForthSection from './components/ForthSection.js';
import FifthSection from './components/FifthSection.js';
import SixthSection from './components/SixthSection.js';
import Footer from './components/Footer.js';

function App() {
  const { s_width, s_height } = useWindowDimensions();

  if (s_width < 1650) return <div>Website not optimized for phone</div>
  return (
    <div className={styles.app}>
     {/*  <div className={styles.dimensions}>{s_width}</div>
      <div className={styles.dimensions} style={{top: "40px"}}>{s_height}</div> */}
      
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <Footer />

      <ToastContainer />
   </div>
  );
}

export default App;
