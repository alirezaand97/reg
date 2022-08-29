import { ToastOptions, toast } from "react-toastify";

export const showMessage = (message: string, toastOptions?: ToastOptions) =>
  toast(message, toastOptions);
