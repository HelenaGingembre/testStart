import styled from 'styled-components';

export const BoxItem = styled.li`
    outline: #4caf50 solid 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    @media screen and (min-width: 768px) and (max-width: 1239px) {
        flex-basis: calc((100% - 8px) / 2);
    }
    &:not(:nth-child(3n)) {
        @media screen and (min-width: 1240px) {
            margin-right: 40px;
        }
    }
    @media screen and (min-width: 1240px) {
        flex-basis: calc((100% - 100px) / 3);
        min-width: 380px;
    }
`;

export const BoxCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 380px;
    height: 460px;
    justify-content: center;

    background: linear-gradient(
        114.99deg,
        #471ca9 -0.99%,
        #5736a3 54.28%,
        #4b2a99 78.99%
    );
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
`;

export const CardTop = styled.div`
    position: relative;
    width: 100%;
    height: 214px;
    background-image: url('../../assets/images/picture2_1.png');
`;
export const LoqoIcon = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 76px;
    height: 22px;
    fill: rgba(255, 255, 255, 0.3);
`;

export const Linear = styled.div`
    position: relative;
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
        inset 0px -1.71846px 3.43693px #ae7be3,
        inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Avatar = styled.div`
    position: absolute;
    top: -36px;
    left: 150px;
    width: 80px;
    height: 80px;
    padding: 8px;
    border-radius: 50%;
    background-image: url('../../assets/images/ellipseStroke.png');
`;

export const ImgUser = styled.img`
    width: 62px;
    height: 62px;
    border-radius: 50%;
`;

export const CardInfo = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 62px;
    padding-bottom: 36px;
`;
export const TweetsStats = styled.p`
    margin: 0px auto 16px auto;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color: #ebd8ff;
`;
