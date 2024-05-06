import axios from "axios";

export class GetCompetitiveTiers {
    handle = async (language?: string, tier?: string) => {
        const url =`https://valorant-api.com/v1/competitivetiers/`
        const params: any = {};
        if (language) {
            params.language = language;
        }

        const response = await axios.get(url, { params }).catch((error) => {
            return error;
        });
        const status = response.status;
        let latestepisode;
        latestepisode = response.data.data;

        if (latestepisode) {
            latestepisode = latestepisode.filter((episode: any) => episode.assetObjectName === "Episode5_CompetitiveTierDataTable");
        }

        if (tier !== undefined && latestepisode) {
            const tierNumber = Number(tier);
            latestepisode = latestepisode.map((episode: any) => {
                if (episode.tiers) {
                    episode.tiers = episode.tiers.filter((tierData: any) => tierData.tier === tierNumber);
                }
                return episode;
            });
        }
        return { latestepisode, status };
    }
}