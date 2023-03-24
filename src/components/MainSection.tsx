import styled from "styled-components";

import bgImg from "../assets/images/bg.jpg";

const Content = styled.section`
    min-height: 640px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background: url(${bgImg}) no-repeat center/cover;
`;

const Strong = styled.strong`
    font-size: 20px;
`;

const SubText = styled.span`
    margin: 0 5px;
    font-size: 14px;
    font-weight: normal;
`;

const Info = styled.p`
    margin: 16px auto;
`;

const Dday = styled.p`
    font-style: italic;
`;

const HideTitle = styled.h2`
    position: absolute;
    left: -9999px;
    top: -9999px;
`;


export default () => {

    const data = {
        bridegroom: "김우준",
        bride: "김소희",
        place: "분당앤스퀘어 4층 컨벤션홀",
        date: "2023-06-10 12:00" // format :  YYYY-MM-DD HH:MM 
    };

    const getDDay = () => {
        const goalDay = new Date(data["date"]);
        const today = new Date();
        const diff: number = goalDay.getTime() - today.getTime();
        const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));

        const setAmPm = goalDay.getHours() < 12 ? "오전" : "오후";
        const setMinutes = goalDay.getMinutes() ? `${goalDay.getMinutes()}분` : "";
        const setTime = `${setAmPm} ${goalDay.getHours()}시 ${setMinutes}`

        return {
            weddingDay: `${goalDay.getFullYear()}년 ${goalDay.getMonth() + 1}월 ${goalDay.getDate()}일 ${setTime}`,
            dday: diffDay
        };
    };

    return (
        <Content>
            <HideTitle>메인페이지</HideTitle>
            <Strong>
                우준<SubText>and</SubText>소희
            </Strong>
            <Info>
                {getDDay().weddingDay}<br />
                {data["place"]}
            </Info>
            <Dday>D - {getDDay().dday}</Dday>
        </Content>
    )
}