
import './App.css';
import TopHeader from './Component/Profile/Header'
import AboutMe from './Component/Profile/About';
import MyProjects from './Component/Profile/Projects'
import MyContact from './Component/Profile/Contact';
import MyFooter from './Component/Profile/Footer';

function App() {
  return (
  <>
  <TopHeader />
  <AboutMe />
  <MyProjects/>
  <MyContact />
  <MyFooter />
  </>
  );
}

export default App;
