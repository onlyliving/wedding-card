import axios from "axios";

export const deleteGuestBook = async (id: number) => {
    const response = await axios({
        url: "/api/delete/guestbook",
        baseURL:
            window.location.hostname === "localhost" || window.location.hostname === "192.168.10.131"
                ? "http://127.0.0.1:8000"
                : "https://greensohee.com",
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
