import { CardUser } from '../UserCard/UserCard';

export const CardsUsersList = ({ users }) => {
    return (
        <ul>
            {users.map(user => (
                <CardUser key={user.id} user={user} />
            ))}
        </ul>
    );
};
