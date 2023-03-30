import styled from "styled-components";

import Map from "./Map";

const Content = styled.section`
    padding: 36px 0;

    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;
    background-color:#fff;
`;

const Title = styled.h2`
    font-size: 22px;
    padding-bottom: 10px;
    text-align: center;
`;

const List = styled.ul`
    & > li {
        position: relative;
        padding-left: 10px;
        margin-bottom: 10px;
        font-size: 16px;
        &:before {
            content: "-";
            position:absolute;
            left:0;
        }
    }
`;

const SubTitle = styled.h3`
    margin-bottom: 6px;
    font-size: 18px;
    font-weight: bold;
`;

const ContentBox = styled.div`
    margin-top: 20px;
`;

const ContentWrap = styled.div`
    padding: 16px;
`;

export default () => {
    return (
        <Content data-scroll>
            <Title>오시는 길</Title>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.1059634285725!2d127.10447265135012!3d37.33999997974192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b59eb77ad0e33%3A0x935499ac4503c9cb!2z67aE64u57JWk7Iqk7YCY7Ja0IOybqOuUqe2ZgA!5e0!3m2!1sko!2skr!4v1675404402944!5m2!1sko!2skr" width="800" height="600" style={{ border: 0, width: "100%" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
            <Map />
            <ContentWrap>
                <List>
                    <li>분당앤스퀘어 4층 컨벤션홀</li>
                    <li>경기 성남시 분당구 탄천상로151번길 20 4층</li>
                </List>

                <ContentBox>
                    <SubTitle>지하철</SubTitle>
                    <List>
                        <li>(수인분당) 오리역 6번 출구에서 도보 3분</li>
                    </List>
                </ContentBox>
                <ContentBox>
                    <SubTitle>자가용</SubTitle>
                    <List>
                        <li>내비게이션 이용 시 : "분당앤스퀘어" 를 입력해주세요.</li>
                        <li>신 주소 : 경기 성남시 분당구 탄천상로151번길 20</li>
                        <li>구 주소 : 경기 성남시 분당구 구미동 159</li>
                        <li>주차장 : 분당앤스퀘어 지하 3, 4층에 주차하시면 됩니다.</li>
                    </List>

                </ContentBox>
            </ContentWrap>
        </Content>
    )
}