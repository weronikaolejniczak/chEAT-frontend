import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from 'firebase';

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    import.meta.env.DEV && console.error(err);
    // TODO: show error toast
  }
};
