import * as Yup from "yup";

export const FormRegisterSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your first name."),

  surname: Yup.string().required("Please enter your last name."),

  age: Yup.number()
    .typeError("Age must be a valid number.")
    .integer("Age must be a whole number.")
    .positive("Age must be a positive value.")
    .required("Age is required."),

  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required."),

  password: Yup.string()
    .required("Password is required.")
    .min(6, "Password must be at least 6 characters long.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/[0-9]/, "Password must contain at least one number.")
    .matches(
      /[@$!%*?&#._-]/,
      "Password must contain at least one special character."
    ),

  confirmPassword: Yup.string()
    .required("Please confirm your password.")
    .oneOf([Yup.ref("password"), null], "Passwords do not match."),
});

export const formLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required."),

  password: Yup.string().required("Password is required."),
});
