import News from '../pages/news';
import Cep from '../pages/cep';
import Home from '../pages/home';
import { Routes, Route } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cep" element={<Cep/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
}