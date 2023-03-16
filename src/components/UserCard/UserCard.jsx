import { BoxCard } from './UserCard.style';

export const CardUser = user => {
    // const {id, user, tweets, followers, avatar} = user;
    return (
        <li key={user.id}>
            <BoxCard>{user.name}</BoxCard>
        </li>
    );
};
