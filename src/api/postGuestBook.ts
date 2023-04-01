import axios from "axios";

import { GuestBookProps, GuestBookApiReturns } from "./index";

export const postGuestBook = async (requestData: GuestBookProps) => {
    const response = await axios({
        url: "/api/create/guestbook",
        baseURL: window.location.hostname === "localhost" ? "http://127.0.0.1:8000" : "http://35.216.39.89",
        method: "post",
        headers: {
            "content-Type": "application/json",
        },
        maxRedirects: 2,
        data: {
            ...requestData,
        },
    });

    return response;
};
