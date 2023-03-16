import { CardUser } from '../UserCard/UserCard';
import { ListGrid } from './CardsUsersList.style';

export const CardsUsersList = ({ users }) => {
    return (
        <ListGrid>
            {users.map(user => (
                <CardUser key={user.id} user={user} />
            ))}
        </ListGrid>
    );
};
