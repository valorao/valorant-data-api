import axios from "axios";

export class GetWeapons {
    storefront = async (language?: string, uuid?: string) => {
        const url = uuid
        ? `https://valorant-api.com/v1/weapons/skinlevels/${uuid}`
        : 'https://valorant-api.com/v1/weapons/skinlevels/';
        const params: any = {};
        if (language) {
            params.language = language;
        }

        const response = await axios.get(url, { params }).catch((error) => {
            return error;
        });
        return response;
    }
    weapons = async (language?: string, uuid?: string) => {
        const url = uuid
        ? `https://valorant-api.com/v1/weapons/${uuid}`
        : 'https://valorant-api.com/v1/weapons/';
        const params: any = {};
        if (language) {
            params.language = language;
        }

        const response = await axios.get(url, { params }).catch((error) => {
            return error;
        });
        return response;
    }
    skins = async (language?: string, uuid?: string) => {
        const url = uuid
        ? `https://valorant-api.com/v1/weapons/skins/${uuid}`
        : 'https://valorant-api.com/v1/weapons/skins/';
        const params: any = {};
        if (language) {
            params.language = language;
        }

        const response = await axios.get(url, { params }).catch((error) => {
            return error;
        });
        return response;
    }
    levels = async (language?: string, uuid?: string) => {
        const url = uuid
        ? `https://valorant-api.com/v1/weapons/skinslevels/${uuid}`
        : 'https://valorant-api.com/v1/weapons/skinslevels/';
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
