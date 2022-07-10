import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Home from './components/Home';
import Users from './components/Users';
import Projects from './components/Projects';
import Roles from './components/Roles';
import Refresh from './components/Refresh';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/users" element={<Users />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/refresh" element={<Refresh />} />        
      </Route>
    </Routes>
  );
}

export default App;

