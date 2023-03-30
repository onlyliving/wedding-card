import styled from "styled-components";

const Content = styled.section`
    padding: 80px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #5e5e5e;

    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;
    background-color:#fff;
`;

const TextBox = styled.p`
    text-align: center;
    margin-bottom: 46px;
    line-height: 1.8;
`;

const FlexColumn = styled.ul`
    display:flex;
    flex-direction: column;
    color: #252525;
`

const TextAlignCenter = styled.p`
    display: flex;
    align-items: center;
    margin-left: 12px;
`;

const Name = styled.em`
    font-style: initial;
    margin-left: 8px;
    color: #252525;
`;

const FlexBox = styled.div`
    display: flex;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const PointText = styled.em`
    font-style: initial;
    font-weight: bold;
    color: #000;


    // @keyframes color {
    //     0% { color: #567792; }
    //     50% { color: #1997ff; }
    //     100% { color: #89c7fa; }
    // };
    // // animation: color 1s ease-in-out;
    // animation: color 3s ease-in-out infinite;
    // animation-direction: alternate;
`;

const HideTitle = styled.h2`
    position: absolute;
    left: -9999px;
    top: -9999px;
`;

export default () => {

    const data = [
        {
            name: "김우준",
            mother: "백숙현",
            father: "김동필",
            rank: "차남"
        },
        {
            name: "김소희",
            mother: "김나현",
            father: "김상현",
            rank: "장녀"
        },
    ];

    return (
        <Content data-scroll>
            <HideTitle>소개글</HideTitle>
            <TextBox>
                <PointText>우</PointText>리 결혼합니다.<br />
                <PointText>준</PointText>비된 자세로 배우며 살아가겠습니다.<br /><br />
                <PointText>소</PointText>중한 사람과<br />
                <PointText>희</PointText>로애락을 함께 하겠습니다.
            </TextBox>
            {
                data.map((item, idx) => (
                    <FlexBox key={idx}>
                        <FlexColumn>
                            <li>{item.father}</li>
                            <li>{item.mother}</li>
                        </FlexColumn>
                        <TextAlignCenter>의 {item.rank} <Name>{item.name}</Name></TextAlignCenter>
                    </FlexBox>
                ))
            }
        </Content>
    )
};