import { ChangeEvent, useEffect, useState, useRef } from "react";

import { GuestBookProps, GuestBookApiReturns } from "../api/index";
import { postGuestBook } from "../api/postGuestBook";
import { getGuestBook } from "../api/getGuestBook";
import { deleteGuestBook } from "../api/deleteGuestBook";

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
        const inputPassword = prompt("내용을 삭제하시려면, 비밀번호를 입력해주세요.");
        const targetData = guestBooks.filter((item) => item.id === id);
        if (inputPassword === targetData[0].password) {
            alert("내용이 삭제되었습니다.");
            deleteGuestBook(id);
            loadGuestBook();
        } else if (inputPassword) {
            alert("비밀번호가 맞지 않습니다 :(");
        }
    };

    useEffect(() => {
        loadGuestBook();
        console.log("guestBooks => ", guestBooks);
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
            postGuestBook(inputDatas).then((res) => {
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
