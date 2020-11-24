import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput((input) => event.target.value);
  };
  const handleReset = () => {
    setInput("");
  };

  return { input, handleChange, handleReset };
}

export default useInput;
