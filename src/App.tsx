import './App.css';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import MainLayout from './layouts/MainLayout';
import Page1 from './screens/Page1'; 
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';
import Page5 from './screens/Page5';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route index path="/home" element={<Home />} />
          <Route index path="/spletni-razvoj" element={<Page1 />} />
          <Route index path="/graficna-podoba" element={<Page2/>} />
          <Route index path="/oglasevanje" element={<Page3 />} />
          <Route index path="/o-nas" element={<Page4 />} />
          <Route index path="/kontakt" element={<Page5 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
