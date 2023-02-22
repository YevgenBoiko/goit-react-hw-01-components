import FrendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendList({ friends }) {
  return (
    <section className={css.friends}>
      <ul className={css.friend__list}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <FrendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
