export const getRegExp = (type: string): RegExp | null => {
    switch (type) {
      case "email":
        return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g;
      case "password":
        return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;
      default:
        return null;
    }
  };
  
  export const getSentenceFromCamelCase = (message: string): string => {
    const pattern = /[A-Za-z]/g;
    const matches = message.match(pattern);
    if (!matches) return message;
    return matches
      .map((char, index) =>
        char === char.toUpperCase() && index !== 0 ? ` ${char.toLowerCase()}` : char
      )
      .join("");
  };
  
  interface Data {
    [key: string]: any;
  }
  
  interface Errors {
    [key: string]: string;
  }
  
  const checkFormValidation = (errors: Errors, data: Data): Errors => {
    const finalErrors: Errors = {};
    Object.keys(data).forEach((key) => {
      if (
        data[key] === "" ||
        data[key] === false ||
        data[key] === undefined ||
        data[key] === null
      ) {
        finalErrors[key] = `Please enter ${getSentenceFromCamelCase(key)}.`;
      }
    });
    Object.keys(errors).forEach((key) => {
      if (errors[key] !== "") {
        finalErrors[key] = errors[key];
      }
    });
    return finalErrors;
  };
  
  export default checkFormValidation;