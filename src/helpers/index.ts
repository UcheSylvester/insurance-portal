import { toast } from "react-toastify";
import { TypeOptions } from "react-toastify/dist/types";

export const notify = (message: string, type: TypeOptions = "info") =>
  toast(message, { type });
