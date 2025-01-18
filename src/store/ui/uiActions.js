import { uiActions } from "./uiSlice";
const { setTheme, toggleTheme, openAuthDropdown, closeAuthDropdown, isValidAge, openSuccessNot, closeSuccessNot } = uiActions;


export const initTheme = (theme) => {
    return (dispatch) => {
dispatch(setTheme(theme))
    }
}

export const toggleMode = () => {
    return (dispatch) => {
dispatch(toggleTheme())
    }
}

export const openAuthUi = () => {
    return dispatch => {
        dispatch(openAuthDropdown())
    }
}

export const closeAuthUi = () => {
    return dispatch => {
        dispatch(closeAuthDropdown())
    }
}

export const onIsValidAge = () => {
    return dispatch => {
        dispatch(isValidAge())
    }
} 

export const onOpenSuccessNot = () => {
    return dispatch => {
        dispatch(openSuccessNot())
    }
} 
export const onCloseSuccessNot = () => {
    return dispatch => {
        dispatch(closeSuccessNot())
    }
} 