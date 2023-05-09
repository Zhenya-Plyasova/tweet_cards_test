// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import css from './UserList.module.css';
// import { fetchUsers } from '../../redux/operations';
import { getError, getUsers, isLoading } from '../../redux/selectors';
import { UserCard } from '../UserCard/UserCard';

export const UserList = () => {
    // const dispatch = useDispatch();
    const users = useSelector(getUsers);
    const loading = useSelector(isLoading);
    const error = useSelector(getError);

    // useEffect(dispatch(fetchUsers));

    return (
      <>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {users.length > 0 && (
          <div>
            <ul className={css.card__list}>
              {users.map((user) => (
                <li key={user.id}>
                  <UserCard user={user} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
}