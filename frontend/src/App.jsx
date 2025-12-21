import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import ApartmentDetails from './pages/ApartmentDetails';

const NotFound = () => (
    <div className="min-h-[60vh] flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold text-slate-900">404</h1>
        <p className="text-slate-500">Страница не найдена</p>
    </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="apartments" element={<Apartments />} />
        <Route path="apartments/:id" element={<ApartmentDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;