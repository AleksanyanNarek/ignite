import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAIL",
    });

    const datailData = await axios.get(gameDetailsURL(id));
    const screenshotData = await axios.get(gameScreenshotURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: datailData.data,
            screen: screenshotData.data,
        },
    });
};