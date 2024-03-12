import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import AllCourses from './Pages/AllCourses';
import FullStackDevelopment from './Pages/FullStackDevelopment';
import FullStackProjectPage from './Pages/FullStackProjectPage';
import DataScience from './Pages/DataScience';
import DataScienceProject from './Pages/DataScienceProject';
import CyberSecurity from './Pages/CyberSecurity';
import CyberSecurityProject from './Pages/CyberSecurityProject';
import CareerAs from './Pages/CareerAs';
import CareerAsProject from './Pages/CareerAsProject';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/full-stack-development/project" element={<FullStackProjectPage />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/data-science/project" element={<DataScienceProject />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/cyber-security/project" element={<CyberSecurityProject />} />
        <Route path="/career-as" element={<CareerAs />} />
        <Route path="/career-as/project" element={<CareerAsProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;