import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';

import i18n from 'i18n';
import { auth } from 'firebase';

export const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    const successMessage = i18n.t('reset-password:request-success');
    toast.success(successMessage);
    return true;
  } catch (err) {
    import.meta.env.DEV && console.error(err);
    // TODO: show a toast
    return false;
  }
};
