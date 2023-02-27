import { useState } from "react";

function useForm(initialValue) {
  const [formData, setFormData] = useState(initialValue);

  const handleInput = (type, value) => {
    const copyFormData = { ...formData };
    copyFormData[type] = value;
    setFormData(copyFormData);
  };

  const handleCheckBox = (type, value, isChecked) => {
    const copyFormData = { ...formData };
    if (isChecked) {
      copyFormData[type].push(value);
    } else {
      const index = copyFormData[type].findIndex((item) => item === value);
      copyFormData[type].splice(index, 1);
    }
    setFormData(copyFormData);
  };

  return {
    formData,
    handleInput,
    handleCheckBox,
  };
}

export default useForm;
