import axios from "axios"
import {Dispatch} from "redux"
import {InfoAction, InfoActionTypes} from "../../types/info"

export const fetchInfo = () => {
    return async (dispatch: Dispatch<InfoAction>) => {
        try {
            dispatch({type: InfoActionTypes.FETCH_PREVIEW, language: "RU"})
            const response = await axios.get('') //TODO: fix

            dispatch({type: InfoActionTypes.FETCH_SUCCESS, language: "RU", payload: response.data})

        } catch (e) {
            dispatch({
                type: InfoActionTypes.FETCH_ERROR,
                payload: "Произошла ошибка при загрузке информации",
                language: "RU"
            })
        }
    }
}