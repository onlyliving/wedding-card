import styled from "styled-components";
import { useState } from "react";

import AccountPopup from "./AccountPopup";

const Content = styled.section`
    // min-height: 640px;
    padding: 36px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;
    background-color:#fff;
`;

const Title = styled.h2`
    font-size: 22px;
    padding: 0 0 10px 0
`;

const Div = styled.div`
    width: 100%;
`;

const BoxWrap = styled.ul`
    width: 100%;
    position:relative;
    margin-top: 16px;
    border: 1px solid #e0e0e0;
    text-align: left;
    border-radius: 8px;
    & > li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e0e0e0;
        &:last-child {
            border-bottom: 0;
        }
        & > span,
        & > button{
            padding: 10px 12px;
        }
    }
`;

const Button = styled.button`
    border-left: 1px solid #e0e0e0;
    cursor: pointer;
    min-width: 90px;
`;

export default () => {
    const [isShow, setIsShow] = useState(false);
    const [value, setValue] = useState("");
    const handleBtnClick = (event: React.MouseEvent) => {
        const getValue = (event.target as HTMLButtonElement).getAttribute("data-value");
        console.log("getValue =>", getValue);
        if (getValue) {
            setValue(getValue);
            setIsShow(true);
        }
    };

    return (
        <Content>
            <Title>축하의 마음 전하기</Title>
            <Div>
                <BoxWrap>
                    <li>
                        <span>김우준</span>
                        <Button
                            type="button"
                            data-value="김우준,신랑,국민은행 95101265964"
                            onClick={handleBtnClick}
                        >
                            계좌
                        </Button>
                    </li>
                    <li>
                        <span>김동필</span>
                        <Button
                            type="button"
                            data-value="김동필,신랑,SC제일은행 43320089765"
                            onClick={handleBtnClick}
                        >
                            계좌
                        </Button>
                    </li>
                    <li>
                        <span>백숙현</span>
                        <Button
                            type="button"
                            data-value="백숙현,신랑,농협은행 10502330024"
                            onClick={handleBtnClick}
                        >
                            계좌
                        </Button>
                    </li>
                </BoxWrap>
                <BoxWrap>
                    <li>
                        <span>김소희</span>
                        <Button
                            type="button"
                            data-value="김소희,신부,신한은행 110411955765"
                            onClick={handleBtnClick}
                        >
                            계좌
                        </Button>
                    </li>
                    <li>
                        <span>김상현</span>
                        <Button
                            type="button"
                            data-value="김상현,신부,국민은행 284210052682"
                            onClick={handleBtnClick}
                        >
                            계좌
                        </Button>
                    </li>
                    <li>
                        <span>김나현</span>
                        <Button
                            type="button"
                            data-value="김나현,신부,국민은행 284240015077"
                            onClick={handleBtnClick}
                        >
                            계좌
                        </Button>
                    </li>
                </BoxWrap>
            </Div>
            <AccountPopup
                isShow={isShow}
                setIsShow={setIsShow}
                data={value}
            />
        </Content>
    )
}