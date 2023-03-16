import {
    Avatar,
    BoxCard,
    BoxItem,
    CardInfo,
    CardTop,
    Linear,
    ImgUser,
    LoqoIcon,
    TweetsStats,
} from './UserCard.style';

import logo from '../../assets/images/Logo.png';

export const CardUser = ({ user }) => {
    const { id, user_name, tweets, followers, avatar } = user;

    console.log('user____>', user);
    return (
        <BoxItem key={id}>
            <BoxCard>
                <CardTop>
                    <LoqoIcon>
                        {/* <svg class="icon" width="76" height="22">
                            <use href={logo}></use>
                        </svg> */}
                        <img src={logo} alt="GoIT" />
                    </LoqoIcon>
                </CardTop>
                <Linear>
                    <Avatar>
                        <ImgUser src={avatar} alt={user_name} />
                    </Avatar>
                </Linear>
                <CardInfo>
                    <TweetsStats> {tweets} Tweets</TweetsStats>
                    <TweetsStats> {followers} Followers</TweetsStats>
                    <button>Following</button>
                </CardInfo>
            </BoxCard>
        </BoxItem>
    );
};
