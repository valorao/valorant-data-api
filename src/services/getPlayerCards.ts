import axios from 'axios';

export class GetPlayerCards {
    handle = async (language?: string, uuid?: string) => {
        const url = uuid
        ? `https://valorant-api.com/v1/playercards/${uuid}`
        : 'https://valorant-api.com/v1/playercards/';
        const params: any = {};
        if (language) {
            params.language = language;
        }

        const response = await axios.get(url, { params }).catch((error) => {
            return error;
        });
        return response;
    }
}