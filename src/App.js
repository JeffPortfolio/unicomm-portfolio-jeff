import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Home from './components/Home';
import PersistLogin from './components/PersistLogin';
import RequireAuth from './components/RequireAuth';

const ROLES = {
  'User': 1971
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PersistLogin />} >
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />} >
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
        <Route path="landing" element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default App;

