import { useCallback, useState } from "react";

function oldSchoolCopy(text: string) {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
}

export function useCopyToClipboard() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = useCallback((text: string) => {
    if (!navigator.clipboard) {
      oldSchoolCopy(text);
      setCopied(text);
      return;
    }
    navigator.clipboard.writeText(text).then(() => setCopied(text));
  }, []);

  return [copied, copyToClipboard];
}
