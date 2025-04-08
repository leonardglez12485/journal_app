import { signWithGoogle } from "../../firebase";
import { checkingCredentials, login, logout } from "./authSlice"

export const startCheckingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}    