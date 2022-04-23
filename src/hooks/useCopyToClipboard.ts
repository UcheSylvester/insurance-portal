import { useState } from "react";

const useCopyToClipBoard = (
  text: string,
  callback?: (copied: boolean) => void
) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(text);
      setCopied(true);
      callback?.(copied);
    } catch (error) {
      console.error(error);
    }
  };

  return { copied, copyToClipboard };
};

export default useCopyToClipBoard;
