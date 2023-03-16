import { useState, useEffect } from 'react';
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
    TweetsBtnActive,
} from './UserCard.style';

import logo from '../../assets/images/Logo.png';
import bkgTop from '../../assets/images/picture2_1.png';
import ellipse from '../../assets/images/ellipseStroke.png';

export const CardUser = ({ user }) => {
    const { id, user_name, tweets, followers, avatar } = user;

    const follow = `isFollowers${id}`;
    const activeBtn = `disabled${id}`;

    const useLocalStorage = initialState => {
        const [state, setState] = useState(initialState);
        const storage = () => {
            setState(!state);
        };
        return [state, storage];
    };

    const [isFollowers, setIsFollowers] = useState(() => {
        return JSON.parse(window.localStorage.getItem(follow)) ?? followers;
    });

    const [disabled, setDisabledStorage] = useLocalStorage(() => {
        return JSON.parse(window.localStorage.getItem(activeBtn)) ?? true;
    });

    useEffect(() => {
        window.localStorage.setItem(follow, JSON.stringify(isFollowers));
        window.localStorage.setItem(activeBtn, JSON.stringify(disabled));
    }, [isFollowers, follow, disabled, activeBtn]);

    const clickBtn = () => {
        if (disabled) {
            setDisabledStorage(!disabled);
            setIsFollowers(prevState => prevState + 1);
        } else {
            setDisabledStorage(!disabled);
            setIsFollowers(prevState => prevState - 1);
        }
    };

    // console.log('user____>', user);
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
                    <TweetsStats>
                        {followers} {isFollowers} Followers
                    </TweetsStats>
                    {disabled ? (
                        <TweetsBtn
                            type="button"
                            onClick={() => clickBtn({ isFollowers })}
                        >
                            Follow
                        </TweetsBtn>
                    ) : (
                        <TweetsBtnActive
                            type="button"
                            onClick={() => clickBtn({ isFollowers })}
                        >
                            Following
                        </TweetsBtnActive>
                    )}
                </CardInfo>
            </BoxCard>
        </BoxItem>
    );
};
