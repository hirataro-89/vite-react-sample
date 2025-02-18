import { VFC } from 'react';

import './UserCard.css';
import { UserProfile } from '../types/userProfile';

type Props = {
  user: UserProfile;
};

export const UserCard: VFC<Props> = ({ user }) => {
  return (
    <li className="user-card">
      <h3 className="user-card__id">userid: {user.id}</h3>
      <p className="user-card__name">name: {user.name}</p>
      <p className="user-card__email">email: {user.email}</p>
      <p className="user-card__address">address: {user.address}</p>
    </li>
  );
};
