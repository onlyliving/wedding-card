import styled from "styled-components";

const Content = styled.section`
    padding: 36px 16px;
    display: flex;
    align-items: center;
    flex-direction: column;

    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;
    background-color:#fff;
`;

const Title = styled.h2`
    font-size: 22px;
    padding: 0 0 10px 0
`;

const Video = styled.video` 
    width: 100%;
    border-radius: 8px;
`;

export default () => {

    return (
        <Content data-scroll>
            <Title>오리역에서 분당앤스퀘어 가는길</Title>
            <Video controls>
                <source src="assets/videos/contact.mp4" type="video/mp4" />
            </Video>
        </Content>
    )
};