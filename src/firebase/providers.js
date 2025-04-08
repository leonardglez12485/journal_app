import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

// const googleProvider = new GoogleAuthProvider ();

// export const signWithGoogle = async () => {
//     try {
//         const result = await signInWithPopup(firebaseAuth, googleProvider);
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const user = result.user;
//         console.log({token, user});
//     } catch (error) {
//         console.log(error)
//     }
// }

export const signWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(firebaseAuth, provider);
        const { displayName, email, photoURL, uid } = result.user;
        return { ok: true, displayName, email, photoURL, uid };
    } catch (error) {
        return { ok: false, errorMessage: error.message };
    }
};