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
    type: "text",
    name: "firstName",
    placeholder: "John",
    validation: firstName_validation,
  },
  {
    id: "lastName",
    type: "text",
    name: "lastName",
    placeholder: "Doe",
    validation: lastName_validation,
  },
  {
    id: "username",
    type: "text",
    name: "username",
    placeholder: "johndoe",
    validation: username_validation,
  },
  {
    id: "email",
    type: "email",
    name: "email",
    placeholder: "you@example.com",
    validation: email_validation,
  },
  {
    id: "password",
    type: "text",
    name: "password",
    placeholder: "********",
    validation: password_validation,
  },
];
