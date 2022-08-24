import {MouseEventHandler} from "react";

export interface HeaderType {
    lang: string,
    handleChangeLanguage: MouseEventHandler<HTMLButtonElement> | undefined
}