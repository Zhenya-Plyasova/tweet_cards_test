import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';

// import "./App.css";
import { Layout } from "components/Layout/Layout";

const HomePage = lazy(() => import('./pages/Home'));
const TweetsPage = lazy(() => import('./pages/Tweets'));

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
        </Route>
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
