import {
  email_validation,
  firstName_validation,
  lastName_validation,
  password_validation,
  username_validation,
} from "../../../utils/validations";

export const CREATE_USER_FORM_FIELDS = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    name: "firstName",
    placeholder: "John",
    validation: firstName_validation,
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    name: "lastName",
    placeholder: "Doe",
    validation: lastName_validation,
  },
  {
    id: "username",
    label: "Username",
    type: "text",
    name: "username",
    placeholder: "johndoe",
    validation: username_validation,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "you@example.com",
    validation: email_validation,
  },
  {
    id: "password",
    label: "Password",
    type: "text",
    name: "password",
    placeholder: "********",
    validation: password_validation,
  },
];
