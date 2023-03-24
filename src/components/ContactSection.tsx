import styled from "styled-components";

import phoneIcon from "../assets/images/icon-phone-call.png";
import msgIcon from "../assets/images/icon-message.png";

const Content = styled.section`
    // min-height: 640px;
    padding: 36px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    text-align: center;
`;

const MsgLink = styled.a`
    position:relative;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    &:before {
        content: "";
        width: 18px;
        height: 18px;
        background: url(${msgIcon}) no-repeat center/cover;
    }
`;

const TelLink = styled.a`
    position:relative;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    &:before {
        content: "";
        width: 16px;
        height: 16px;
        background: url(${phoneIcon}) no-repeat center/cover;
    }
`;

const Cell = styled.li`
    // border-bottom: 1px dotted #aeaeae;
    padding: 8px 0;
`;

const TwoColumnWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 36px;
`

const ContactWrap = styled.div`
    width: 100%;
    margin: 36px auto;
`;

const SubTitle = styled.h3`
    display: block;
    font-size: 14px;
    font-weight: normal;
`;

const BlockSpan = styled.span`
    display: block;
`;
const Name = styled.span`
    margin-right: 8px;
`;

const Title = styled.h2`
    font-size: 22px;
    padding: 0 0 10px 0
`;

export default () => {
    const data = {
        bridegroom: "김우준",
        bride: "김소희",
        place: "분당앤스퀘어 4층 컨벤션홀",
        date: "2023-06-10 12:00", // format :  YYYY-MM-DD HH:MM 
        introduce: "우리 결혼합니다\n준비된 자세로 배우며 살아가겠습니다\n\n소중한 사람과\n희로애락을 함께 하겠습니다.",
        contact: {
            bridegroom: {
                tel: "tel:+82 10-5101-2659",
                parents: {
                    father: {
                        name: "김동필",
                        tel: "tel:+82 10-4321-0987"
                    },
                    mother: {
                        name: "백숙현",
                        tel: "tel:+82 10-2287-9852"
                    },
                }
            },
            bride: {
                tel: "tel:+82 10-8900-2019",
                parents: {
                    father: {
                        name: "김상현",
                        tel: "tel:+82 10-5141-8109"
                    },
                    mother: {
                        name: "김나현",
                        tel: "tel:+82 10-2251-4026"
                    },
                }
            },
        }
    };

    return (
        <Content>
            <Title>축하 연락처</Title>
            <ContactWrap>
                <ul>
                    <Cell>
                        <Name>신랑 김우준</Name>

                        <TelLink href={data.contact.bridegroom.tel}></TelLink>
                        <MsgLink></MsgLink>
                    </Cell>
                    <Cell>
                        <Name>신부 김소희</Name>
                        <TelLink href={data.contact.bride.tel}></TelLink>
                        <MsgLink></MsgLink>
                    </Cell>
                </ul>
                <TwoColumnWrap>
                    <ul>
                        <li>
                            <SubTitle>신랑측 혼주</SubTitle>
                            <ul>
                                <Cell>
                                    <BlockSpan>혼주 김동필</BlockSpan>
                                    <TelLink href={data.contact.bridegroom.parents.father.tel}></TelLink>
                                    <MsgLink></MsgLink>
                                </Cell>

                                <Cell>
                                    <BlockSpan>혼주 백숙현</BlockSpan>
                                    <TelLink href={data.contact.bridegroom.parents.mother.tel}></TelLink>
                                    <MsgLink></MsgLink>
                                </Cell>
                            </ul>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <SubTitle>신부측 혼주</SubTitle>
                            <ul>
                                <Cell>
                                    <BlockSpan>혼주 김상현</BlockSpan>
                                    <TelLink href={data.contact.bride.parents.father.tel}></TelLink>
                                    <MsgLink></MsgLink>
                                </Cell>

                                <Cell>
                                    <BlockSpan>혼주 김나현</BlockSpan>
                                    <TelLink href={data.contact.bride.parents.mother.tel}></TelLink>
                                    <MsgLink></MsgLink>
                                </Cell>
                            </ul>
                        </li>
                    </ul>
                </TwoColumnWrap>
            </ContactWrap>
        </Content>
    )
}