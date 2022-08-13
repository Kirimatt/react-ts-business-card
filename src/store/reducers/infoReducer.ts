import {InfoAction, InfoActionTypes, InfoState} from "../../types/info"

const initialState: InfoState = {
    info: "PREVIEW",
    language: "RU",
    loading: false,
    error: null
}

export const infoReducer = (state = initialState, action: InfoAction): InfoState => {
    switch (action.type) {
        case InfoActionTypes.FETCH_PREVIEW:
            return {info: null, language: action.language, loading: true, error: null}
        case InfoActionTypes.FETCH_EXPERIENCE:
            return {info: null, language: action.language, loading: true, error: null}
        case InfoActionTypes.FETCH_SKILLS:
            return {info: null, language: action.language, loading: true, error: null}
        case InfoActionTypes.FETCH_EDUCATION:
            return {info: null, language: action.language, loading: true, error: null}
        case InfoActionTypes.CHANGE_LANGUAGE:
            return {info: null, language: action.language, loading: true, error: null}
        case InfoActionTypes.FETCH_SUCCESS:
            return {info: action.payload, language: action.language, loading: false, error: null}
        case InfoActionTypes.FETCH_ERROR:
            return {info: null, language: action.language, loading: false, error: action.payload}
        default:
            return state
    }
}