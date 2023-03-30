import styled from "styled-components";
import Rellax from "rellax";

import bgImg from "../assets/images/bg.jpg";
import { useEffect, useRef } from "react";

const Content = styled.section`
    overflow: hidden;
    position: relative;
    min-height: calc(100vh - 20px);
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background: url(${bgImg}) no-repeat center/cover;

    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;

    @media(min-height: 640px) {
        min-height: calc(640px - 20px);
    }
`;

const Strong = styled.strong`
    z-index: 5;
    font-size: 20px;
`;

const SubText = styled.span`
    margin: 0 5px;
    font-size: 14px;
    font-weight: normal;
`;

const Info = styled.p`
    z-index: 5;
    margin: 16px auto;
`;

const Dday = styled.p`
    z-index: 2;
    position: absolute;
    right: 30px;
    bottom: 30px;
    padding-right: 6px;
    font-style: italic;
    font-size: 50px;
    font-weight: bold;
    color: #fff3ec;
`;

const HideTitle = styled.h2`
    position: absolute;
    left: -9999px;
    top: -9999px;
`;

export default () => {

    const rellaxRef = useRef<HTMLElement[] | SVGSVGElement[] | null[]>([]);

    useEffect(() => {
        if (rellaxRef.current) {
            rellaxRef.current.map(el => {
                const rellax = new Rellax((el as HTMLElement), {
                    speed: -2,
                    center: false,
                    // wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
            })

        }

    }, []);

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
            <Strong
                ref={el => rellaxRef.current[0] = el}
                data-rellax-speed="-3"
            >
                우준<SubText>and</SubText>소희
            </Strong>
            <Info
                ref={el => rellaxRef.current[1] = el}
                data-rellax-speed="-3"
            >
                {getDDay().weddingDay}<br />
                {data["place"]}
            </Info>
            <Dday
                ref={el => rellaxRef.current[2] = el}
                data-rellax-speed="1"
            >D-{getDDay().dday}</Dday>

        </Content>
    )
}