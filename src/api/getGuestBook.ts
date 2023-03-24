import axios, { AxiosResponse } from "axios";

export interface GuestBookProps {
    id: number;
    name: string;
    content: string;
    password: string;
}

interface responseProps {
    result: boolean;
    data: GuestBookProps;
}

export const getGuestBook = async (): Promise<AxiosResponse<any, responseProps>> => {
    const response = await axios({
        url: "/api/read/guestbook",
        baseURL: "http://127.0.0.1:8000",
        method: "get",
        headers: {
            "content-Type": "application/json",
        },
        maxRedirects: 2,
    });

    return response;
};
