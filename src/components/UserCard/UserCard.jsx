import { BoxCard, BoxItem } from './UserCard.style';

export const CardUser = ({ user }) => {
    const { id, user_name, tweets, followers, avatar } = user;
    return (
        <BoxItem key={id}>
            <BoxCard>
                <p> {user_name}</p>
                <p> {tweets}</p>
                <p> {followers}</p>
            </BoxCard>
        </BoxItem>
    );
};
