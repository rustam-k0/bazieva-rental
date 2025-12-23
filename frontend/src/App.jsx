import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import ApartmentDetails from './pages/ApartmentDetails';
import Contacts from './pages/Contacts';
import Services from './pages/Services';
import FAQ from './pages/FAQ';

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

        {/* НОВОЕ ПРАВИЛО: Если путь index.html, перекинуть на главную */}
        <Route path="index.html" element={<Navigate to="/" replace />} />

        <Route path="apartments" element={<Apartments />} />
        <Route path="apartments/:id" element={<ApartmentDetails />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="services" element={<Services />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;