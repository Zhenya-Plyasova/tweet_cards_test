import { useSelector } from 'react-redux';
import css from './UserList.module.css';
import { getError, isLoading } from '../../redux/selectors';
import { UserCard } from '../UserCard/UserCard';

export const UserList = ({ users }) => {

    const loading = useSelector(isLoading);
    const error = useSelector(getError);

    return (
      <>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {users.length > 0 && (
          <div className={css.list__wrapper}>
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