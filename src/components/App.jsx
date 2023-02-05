import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Rates } from '../pages/Rates';
import { HomePage } from 'pages/HomePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="rates" element={<Rates />} />
        </Route>
      </Routes>
    </>
  );
};
