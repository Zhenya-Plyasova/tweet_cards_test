import css from "./UserCard.module.css";
import Logo from '../../img/Logo.svg';
import picture from '../../img/picture.png'
import { useDispatch } from "react-redux";
import { toggleFolowing } from "../../redux/operations";

export const UserCard = ({ user }) => {

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleFolowing(user))
  }

  return (
    <section className={css.card}>
      <div className={css.card__wrapper}>
        <img className={css.card__logo} src={Logo} alt="logo go-it"></img>
        <img className={css.card__picture} src={picture} alt="decoration"></img>
        <span className={css.card__line}></span>
        <div className={css.card__picture_border} r="31"></div>
        <img alt="" class={css.card__picture_wrapper} src={user.avatar}></img>
        <div className={css.card__infoblock}>
          <ul className={css.card__textList}>
            <li className={css.card__textItem}>{user.tweets} tweets</li>
            <li className={css.card__textItem}>{user.followers} followers</li>
          </ul>
          <button
            className={
              user.isFollowing ? css.card__button_following : css.card__button
            }
            onClick={handleToggle}
          >
            {user.isFollowing ? "following" : "follow"}
          </button>
        </div>
      </div>
    </section>
  );
}