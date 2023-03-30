import { useRef } from "react";
import styled from "styled-components";

import { useGuestBook } from "../hooks/useGuestBook";

const Content = styled.section`
    padding: 36px 16px;
    font-size: 16px;

    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;
    background-color:#fff;
`;

const FixedInputBox = styled.div`
    // position: fixed;
    // bottom: 0;
    // padding: 16px;
    // margin-left: -16px;
    margin: 16px auto;
    width: 100%;
    max-width: 500px;
    background: #fff;
`;

const InputName = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border-bottom: 1px solid #000;
    border-radius: 0px;
    box-sizing: border-box;
`;

const Textarea = styled.textarea`
    width: 100%;
    resize: none;
    padding: 8px;
    font-size: 16px;
    border: 0;
    border-bottom: 1px solid #000;
    border-radius: 0px;
    box-sizing: border-box;
`;

const InputPw = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border-bottom: 1px solid #000;
    border-radius: 0px;
    box-sizing: border-box;
`;

const SubmitWrap = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`;

const Button = styled.button`
    height: 41px;
    background: #000;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;


const Title = styled.h2`
    font-size: 22px;
    padding-bottom: 10px;
    text-align: center;
`;

const Note = styled.div`
    font-size: 15px;
    padding: 0 4px 8px 4px;
    word-break: keep-all;
`;

const ListBox = styled.div`
    position:relative;
    border: 1px solid #e7e7e7;
    background: #fff;
    padding: 8px;
    margin-top: 8px;
`;

const List = styled.ul`
    & > li {
        position: relative;
        padding-left: 10px;
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
        &:before {
            content: '-';
            position:absolute;
            left:0;
        }
    }
`;

const DeleteBtn = styled.button`
    width: 30px;
    height: 30px;
    padding: 0;
    position: absolute;
    right: 8px;
    top: 8px;
    text-indent: -9999px;
    &:before,
    &:after {
        content: '';
        width: 13px;
        height 1px;
        background: #000;
        position:absolute;
        left: 50%;
        top: 50%;
        
    }
    &:before {
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;


const MESSAGE = {
    name: "이름을 입력해주세요.",
    content: "내용을 입력해주세요.",
    password: "비밀번호를 입력해주세요. (메세지 삭제할 때 필요)"
};

export default () => {
    const {
        handleSubmit,
        handleChange,
        isSubmitEnter,
        inputDatas,
        guestBooks,
        nameRef,
        onClickDeleteBtn
    } = useGuestBook();


    const observeTarget = useRef(null);

    return (
        <Content data-scroll ref={observeTarget}>
            <Title >게스트 북</Title>
            <FixedInputBox>
                <form onSubmit={handleSubmit}>
                    <div>
                        <InputName name="name" type="text" placeholder="이름" onChange={handleChange} value={inputDatas.name} ref={nameRef} />
                        <Note>{isSubmitEnter && inputDatas.name === "" ? MESSAGE.name : ""}</Note>
                    </div>
                    <div>
                        <Textarea name="content" rows={2} placeholder="축하 내용을 입력해주세요!" onChange={handleChange} value={inputDatas.content} />
                        <Note>{isSubmitEnter && inputDatas.content === "" ? MESSAGE.content : ""}</Note>
                    </div>
                    <SubmitWrap>
                        <div>
                            <InputPw name="password" type="password" placeholder="비밀번호 입력" onChange={handleChange} value={inputDatas.password} />
                            <Note>{isSubmitEnter && inputDatas.password === "" ? MESSAGE.password : ""}</Note>
                        </div>
                        <Button type="submit">입력</Button>
                    </SubmitWrap>
                </form>

            </FixedInputBox>
            <section>
                {guestBooks.map((guestData, guestIndex) => (
                    <ListBox key={`guest-${guestIndex}`}>
                        <List>
                            <li>이름 : {guestData.name}</li>
                            <li>{guestData.content}</li>
                        </List>

                        {
                            (guestData.id === 1) ? <></> :
                                <DeleteBtn type="button" onClick={() => onClickDeleteBtn(guestData.id)}>삭제</DeleteBtn>
                        }

                    </ListBox>
                ))}
            </section>


        </Content>
    )
};