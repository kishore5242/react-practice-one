import { useCallback, useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredVAlue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueChange = (event) => {
    setEnteredVAlue(event.target.value);
  };

  const reset = useCallback(() => {
    setEnteredVAlue("");
  }, []);

  const touch = useCallback((event) => {
    setIsTouched(true);
  }, []);

  const isValid = validate(enteredValue) || !isTouched;
  console.log(enteredValue + " is " + isValid);

  return {
    value: enteredValue,
    isValid,
    valueChange,
    reset,
    touch,
  };
};

export default useInput;
