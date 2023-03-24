import axios from "axios";

export const deleteGuestBook = async (id: number) => {
    const response = await axios({
        url: "/api/delete/guestbook",
        baseURL: "http://127.0.0.1:8000",
        method: "post",
        headers: {
            "content-Type": "application/json",
        },
        maxRedirects: 2,
        data: {
            id,
        },
    });

    return response;
};
