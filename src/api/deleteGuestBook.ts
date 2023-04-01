import axios from "axios";

export const deleteGuestBook = async (id: number) => {
    const response = await axios({
        url: "/api/delete/guestbook",
        baseURL: window.location.hostname === "localhost" ? "http://127.0.0.1:8000" : "http://35.216.39.89",
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
