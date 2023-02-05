import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="rates">Rates</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Current exchanges</footer>
    </>
  );
};
