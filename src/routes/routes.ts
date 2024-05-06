import express from "express";
import { GetCurrency } from "../services/getCurrency";
import { GetBundles } from "../services/getBundles";
import { GetCompetitiveTiers } from "../services/getCompetitiveTiers";
import { GetContentTiers } from "../services/getContentTiers";
import { GetMaps } from "../services/getMaps";
import { GetWeapons } from "../services/getWeapons";
import { GetPlayerCards } from "../services/getPlayerCards";

export const router = express.Router();
const getCurrency = new GetCurrency();
const getCompetitiveTiers = new GetCompetitiveTiers();
const getContentTiers = new GetContentTiers();
const getMaps = new GetMaps();
const getPlayerCards = new GetPlayerCards();
const getWeapons = new GetWeapons();
const getBundles = new GetBundles();

router.get("/bundles", async (req, res) => {
    const currency_uuid = req.query.uuid as string;
    const language = req.query.language as string;

    const response = await getBundles.handle(language, currency_uuid);
    res.status((response.status || 500)).json(response.data);
});

router.get("/competitive/tiers", async (req, res) => {
    const currency_uuid = req.query.tier as string;
    const language = req.query.language as string;

    const latestepisode = await getCompetitiveTiers.handle(language, currency_uuid);
    res.status((latestepisode.status || 500)).json(latestepisode);
});

router.get("/content/tiers", async (req, res) => {
    const currency_uuid = req.query.uuid as string;
    const language = req.query.language as string;

    const response = await getContentTiers.handle(language, currency_uuid);
    res.status((response.status || 500)).json(response.data);
});

router.get("/currency", async (req, res) => {
    const currency_uuid = req.query.uuid as string;
    const language = req.query.language as string;

    const response = await getCurrency.handle(language, currency_uuid);
    res.status((response.status || 500)).json(response.data);
});

router.get("/maps", async (req, res) => {
    const currency_uuid = req.query.uuid as string;
    const language = req.query.language as string;

    const response = await getMaps.handle(language, currency_uuid);
    res.status((response.status || 500)).json(response.data);
});

router.get('/player/cards', async (req, res) => {
    const currency_uuid = req.query.uuid as string;
    const language = req.query.language as string;

    const response = await getPlayerCards.handle(language, currency_uuid);
    res.status((response.status || 500)).json(response.data);
});

router.get("/weapons/storefront", async (req, res) => {
    const currency_uuid = req.query.uuid as string;
    const language = req.query.language as string;

    const response = await getWeapons.storefront(language, currency_uuid);
    res.status((response.status || 500)).json(response.data);
});

router.get("/weapons", async (req, res) => {
    const currency_uuid = req.query.uuid as string;
    const language = req.query.language as string;

    const response = await getWeapons.weapons(language, currency_uuid);
    res.status((response.status || 500)).json(response.data);
});

router.get("/weapons/skins", async (req, res) => {
    const currency_uuid = req.query.uuid as string;
    const language = req.query.language as string;

    const response = await getWeapons.skins(language, currency_uuid);
    res.status((response.status || 500)).json(response.data);
});

router.get("/weapons/skins/levels", async (req, res) => {
    const currency_uuid = req.query.uuid as string;
    const language = req.query.language as string;

    const response = await getWeapons.skins(language, currency_uuid);
    res.status((response.status || 500)).json(response.data);
});