export interface InfoState {
    info: null | string;
    language: string;
    loading: boolean;
    error: null | string;
}

export enum InfoActionTypes {
    FETCH_PREVIEW = "FETCH_PREVIEW",
    FETCH_EXPERIENCE = "FETCH_EXPERIENCE",
    FETCH_SKILLS = "FETCH_SKILLS",
    FETCH_EDUCATION = "FETCH_EDUCATION",
    CHANGE_LANGUAGE = "CHANGE_LANGUAGE",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_ERROR = "FETCH_ERROR",
}

interface FetchPreview {
    type: InfoActionTypes.FETCH_PREVIEW;
    language: string;
}

interface FetchExperience {
    type: InfoActionTypes.FETCH_EXPERIENCE;
    language: string;
}

interface FetchSkills {
    type: InfoActionTypes.FETCH_SKILLS;
    language: string;
}

interface FetchEducation {
    type: InfoActionTypes.FETCH_EDUCATION;
    language: string;
}

interface ChangeLanguage {
    type: InfoActionTypes.CHANGE_LANGUAGE;
    language: string;
}

interface FetchSuccess {
    type: InfoActionTypes.FETCH_SUCCESS;
    language: string;
    payload: string;
}

interface FetchError {
    type: InfoActionTypes.FETCH_ERROR;
    payload: string;
    language: string;
}

export type InfoAction = FetchPreview | FetchExperience | FetchSkills
    | FetchEducation | ChangeLanguage | FetchSuccess | FetchError
