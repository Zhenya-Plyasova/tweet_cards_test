import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div
      className={css.mainWrapper}
      style={{ width: '100%', margin: '0 auto', padding: '0 16px' }}
    >
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
