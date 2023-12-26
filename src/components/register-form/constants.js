import {
  organizationName_validation,
  phone_validation,
  address_validation,
  username_validation,
  email_validation,
  password_validation,
} from "../../utils/validations";

export const REGISTER_FORM_FIELDS = [
  {
    id: "organizationName",
    label: "Organization Name",
    type: "text",
    name: "organizationName",
    placeholder: "Organization Name",
    validation: organizationName_validation,
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    type: "tel",
    name: "phoneNumber",
    placeholder: "Phone Number",
    validation: phone_validation,
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    name: "address",
    placeholder: "Address",
    validation: address_validation,
  },
  {
    id: "username",
    label: "Username",
    type: "text",
    name: "username",
    placeholder: "Username",
    // validation: username_validation,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Email",
    // validation: email_validation,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
    // validation: password_validation,
  },
];
