import { useState } from "react";

export const useToast = () => {
  const [message, setMessage] = useState<string | null>(null);

  const toast = (msg: { title: string; description?: string }, duration = 3000) => {
    console.log(`${msg.title}: ${msg.description}`);
    setMessage(msg.title);
    setTimeout(() => setMessage(null), duration);
  };

  return { message, toast };
};
