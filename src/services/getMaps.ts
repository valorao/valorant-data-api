import axios from 'axios';

export class GetMaps {
    handle = async (language?: string, uuid?: string) => {
        const url = uuid
        ? `https://valorant-api.com/v1/maps/${uuid}`
        : 'https://valorant-api.com/v1/maps/';
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