import { NavLink } from 'react-router-dom';

export const BackLink = () => {
  return (
    <NavLink type='button'
      style={{
        marginLeft: '35px',
      }}
      to="/"
    >
      back
    </NavLink>
  );
};
