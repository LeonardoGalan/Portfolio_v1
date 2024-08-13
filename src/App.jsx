import './App.css'
import About_Me from './Components/About_me'
import ExperiencePlus from './Components/Experience_Education'
import Sidebar from './Components/Sidebar'
import './styles/Global.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import Projects from './Components/Projects'
import Footer from "./Components/Footer";


function App() {

  return (
    <>
      <MantineProvider>
        <div className="App">
          <Sidebar></Sidebar>
          <div id="content">
            <About_Me></About_Me>
            <ExperiencePlus></ExperiencePlus>
            <Projects></Projects>
            <Footer></Footer>
          </div>
        </div>
      </MantineProvider>
    </>
  );
}

export default App
