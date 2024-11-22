 const firebaseConfig = {
    appId: import.meta.env.VITE_FIREBASE_APP_ID
 }

 // Inicializar  Firebase
 const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app)

 // Login
 export const login = ({email, password}) => {
    return signInWithEmailAndPassword(auth, email, password);
 }

 // Registro
 export const register = ({email, password}) => {
    return createUserWithEmailAndPassword(auth, email, password);
 }

 // Logout
 export const logOut = () => signOut(auth)