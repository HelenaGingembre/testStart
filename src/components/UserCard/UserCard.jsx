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
    ImgTop,
    Ellipse,
    TweetsBtn,
} from './UserCard.style';

import logo from '../../assets/images/Logo.png';
import bkgTop from '../../assets/images/picture2_1.png';
import ellipse from '../../assets/images/ellipseStroke.png';

export const CardUser = ({ user }) => {
    const { id, user_name, tweets, followers, avatar } = user;

    console.log('user____>', user);
    return (
        <BoxItem key={id}>
            <BoxCard>
                <CardTop>
                    <LoqoIcon>
                        <img src={logo} alt="GoIT" />
                    </LoqoIcon>

                    <ImgTop src={bkgTop} alt="Image massage" />
                </CardTop>
                <Linear>
                    <Avatar>
                        <Ellipse src={ellipse} alt="Ellipse border"></Ellipse>
                        <ImgUser src={avatar} alt={user_name} />
                    </Avatar>
                </Linear>
                <CardInfo>
                    <TweetsStats> {tweets} Tweets</TweetsStats>
                    <TweetsStats> {followers} Followers</TweetsStats>
                    <TweetsBtn>Following</TweetsBtn>
                </CardInfo>
            </BoxCard>
        </BoxItem>
    );
};
