import {Dispatch} from "redux"
import {InfoAction, InfoActionTypes} from "../../types/info"

export const changeLanguageToRu = () => {

    return async (dispatch: Dispatch<InfoAction>) => {
        try {
            dispatch({type: InfoActionTypes.CHANGE_LANGUAGE, language: "RU"})
            dispatch({type: InfoActionTypes.FETCH_SUCCESS, language: "RU", payload: "CHANGED_LANGUAGE_TO_RU"})
        } catch (e) {
            dispatch({
                type: InfoActionTypes.FETCH_ERROR,
                payload: "Произошла ошибка при загрузке информации",
                language: "RU"
            })
        }
    }
}