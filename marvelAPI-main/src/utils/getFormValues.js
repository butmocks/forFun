export const getFormValues = (target) => {
  const formData = new FormData(target);
  const formDataObj = {};
  formData.forEach((value, key) => (formDataObj[key] = value));

  return formDataObj;
};
