import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

const Container = styled.div`
    z-index: 9999;
    overflow:hidden;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.section`
    z-index: 2;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 360px;
    margin: auto;
    background-color: #fff;
    border: 1px solid #000;
`;

const Bg = styled.div`
    position:absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.3);
    cursor: pointer;
`;

const ButtonWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-top: 1px solid #000;
    & > button {
        height: 60px;
        padding: 0;
        font-weight: bold;
        &:first-child {
            color: #fff;
            background-color: #000;
        }
    }
`;

const Title = styled.h3`
    margin: 30px 0 16px 0;
`;

const SubText = styled.p`
    font-size: 16px;
`;

const BoxWrap = styled.ul`
    width: 90%;
    max-width: 320px;
    position:relative;
    margin: 20px auto 40px auto;
    border: 1px solid #e0e0e0;
    text-align: left;
    border-radius: 8px;
    & > li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #e0e0e0;
        &:last-child {
            border-bottom: 0;
        }
    }
`;

const HideInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;s
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
`;

export default ({
    isShow,
    setIsShow,
    data
}: {
    isShow: boolean;
    setIsShow: any;
    data: string;
}) => {

    const [name, setName] = useState("");
    const [type, setType] = useState(""); // "신랑" | "신부"
    const [account, setAccount] = useState(""); // "신한 XXXXXX..."
    const [accountOnlyNumStr, setAccountOnlyNumStr] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        const splitValue = data.split(",");
        const [getName, getType, getAccount] = splitValue;
        setName(getName);
        setType(getType);
        setAccount(getAccount);

        if (getAccount) {
            setAccountOnlyNumStr(getAccount);
        }
    }, [data])

    const handleCopy = () => {
        if (inputRef && inputRef.current) {
            const targetInput = (inputRef.current as HTMLInputElement);
            targetInput.select();
            document.execCommand('copy');
            alert(`${targetInput.getAttribute("data-alert")} 복사되었습니다.`);
        }
    };

    const handleClose = () => setIsShow(false);

    return (
        !isShow ? <></> :
            <Container>
                <Content>
                    <Title><span>{type}</span>측 계좌번호</Title>
                    <SubText>복사 버튼 클릭하시면 계좌번호가 복사됩니다.</SubText>
                    <BoxWrap>
                        <li>
                            {name}
                        </li>
                        <li>
                            {account}
                            <HideInput type="input" ref={inputRef} value={accountOnlyNumStr || ""} data-alert={account} readOnly />
                        </li>
                    </BoxWrap>
                    <ButtonWrap>
                        <button type="button" onClick={handleCopy}>복사</button>
                        <button type="button" onClick={handleClose}>닫기</button>
                    </ButtonWrap>
                </Content>
                <Bg onClick={handleClose} />
            </Container>
    )
}