import {Dispatch} from "redux"
import {InfoAction, InfoActionTypes} from "../../types/info"

export const changeLanguageToEn = () => {

    return async (dispatch: Dispatch<InfoAction>) => {
        try {
            dispatch({type: InfoActionTypes.CHANGE_LANGUAGE, language: "EN"})
            dispatch({type: InfoActionTypes.FETCH_SUCCESS, language: "EN", payload: "CHANGED_LANGUAGE_TO_EN"})
        } catch (e) {
            dispatch({
                type: InfoActionTypes.FETCH_ERROR,
                payload: "Error while parsing data",
                language: "EN"
            })
        }
    }
}