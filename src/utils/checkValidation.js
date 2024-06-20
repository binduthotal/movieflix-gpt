export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isNameValid =
    /^[a-zA-Z0-9 '.-]*[A-Za-z0-9][^$&+,:;=?@#|'<>.^*()%!-]$/.test(name);

  if (!isEmailValid)
    return "Please enter a valid email address, Missing '@' symbol or Invalid domain name.";
  if (!isPasswordValid)
    return "The password should be at least 8 characters long. The password should contain at least one uppercase letter, one lowercase letter, and one number.";
  if (!isNameValid)
    return "No special symbols or numbers at the end of the Full Name";

  return null;
};
