import axios from "axios";

export class GetContentTiers {
    handle = async (language?: string, uuid?: string) => {
        const url = uuid
        ? `https://valorant-api.com/v1/contenttiers/${uuid}`
        : 'https://valorant-api.com/v1/contenttiers/';
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