import {api} from "@/lib/axios";

export const getUser = async () => {
    const response = await api.get(`/package`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });

    console.log(response);

    return response;
}
