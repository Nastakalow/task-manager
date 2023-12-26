import {
  email_validation,
  username_validation,
  password_validation,
} from "../../utils/validations";

export const LOGIN_FORM_FIELDS = [
  {
    id: "email",
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Email",
    validation: email_validation,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
    validation: password_validation,
  },
];
