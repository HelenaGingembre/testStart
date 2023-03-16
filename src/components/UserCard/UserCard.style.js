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
