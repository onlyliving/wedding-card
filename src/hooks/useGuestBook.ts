import { ChangeEvent, useEffect, useState, useRef } from "react";

import { GuestBookProps, GuestBookApiReturns } from "../api/index";
import { postGuestBook } from "../api/postGuestBook";
import { getGuestBook } from "../api/getGuestBook";
import { deleteGuestBook } from "../api/deleteGuestBook";
import bcrypt from "bcryptjs";

const defaultData = {
    id: 1,
    name: "홍길동",
    content: "신랑, 신부에게 축하의 메세지를 남겨주세요 :)",
    password: "",
};

const initialData = {
    name: "",
    content: "",
    password: "",
};

export const useGuestBook = () => {
    const [guestBooks, setGuestBooks] = useState<GuestBookApiReturns[]>([defaultData]);
    const [inputDatas, setInputDatas] = useState<GuestBookProps>(initialData);
    const [isSubmitEnter, setIsSubmitEnter] = useState(false);
    const [isPass, setIsPass] = useState(false);

    const nameRef = useRef(null);

    const loadGuestBook = () => getGuestBook().then((res) => setGuestBooks(res.data.data));

    const onClickDeleteBtn = (id: number) => {
        const inputPassword = prompt("내용을 삭제하시겠습니까? 아래 입력창에 비밀번호를 입력해주세요.");
        if (!inputPassword) return false;

        const targetData = guestBooks.filter((item) => item.id === id);
        if (bcrypt.compareSync(inputPassword, targetData[0].password)) {
            alert("내용이 삭제되었습니다.");
            deleteGuestBook(id);
            loadGuestBook();
        } else if (inputPassword) {
            alert("비밀번호가 맞지 않습니다 :(\n비밀번호가 기억나지 않으시면, 신부 김소희한테 문의주세요.");
        }
    };

    useEffect(() => {
        loadGuestBook();
    }, []);

    // useEffect(() => {
    //     document.documentElement.scrollTop = document.documentElement.offsetHeight;
    // }, [guestBooks]);

    useEffect(() => {
        const { name, content, password } = inputDatas;

        if (name && content && password) {
            setIsPass(true);
        } else {
            setIsPass(false);
        }
    }, [inputDatas]);

    const handleChange = (event: React.ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        const name = target.name;

        setInputDatas({ ...inputDatas, [name]: value });
    };

    const updateGuestBook = () => {
        // initial
        setInputDatas(initialData);
        setIsSubmitEnter(false);

        // focus
        if (nameRef.current) (nameRef.current as HTMLInputElement).focus();

        // load
        loadGuestBook();
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitEnter(true);

        if (isPass) {
            const pwHash = bcrypt.hashSync(inputDatas.password, bcrypt.genSaltSync(10));
            const reqData = { ...inputDatas, password: pwHash };
            postGuestBook(reqData).then((res) => {
                if (res.data.result) {
                    alert("정상적으로 입력이 완료되었습니다.");
                    updateGuestBook();
                }
            });
        }
    };

    return {
        handleSubmit,
        handleChange,
        isSubmitEnter,
        inputDatas,
        guestBooks,
        nameRef,
        onClickDeleteBtn,
    };
};
