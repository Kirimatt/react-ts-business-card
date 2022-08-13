import {useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import {changeLanguageToEn} from '../store/action-creator/changeLanguageToEn'
import {changeLanguageToRu} from "../store/action-creator/changeLanguageToRu";
import {fetchInfo} from "../store/action-creator/preview";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(Object.assign({
        changeLanguageToRu,
        changeLanguageToEn,
        fetchInfo
    }), dispatch)
}