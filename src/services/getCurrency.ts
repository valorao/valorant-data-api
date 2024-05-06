import axios from 'axios';

export class GetCurrency {
    handle = async (language?: string, uuid?: string) => {
        const url = uuid
        ? `https://valorant-api.com/v1/currencies/${uuid}`
        : 'https://valorant-api.com/v1/currencies/';
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