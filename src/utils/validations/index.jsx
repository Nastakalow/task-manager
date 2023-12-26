const REQUIRED_MESSAGE = "This field is required!";
const MAX_LENGTH_MESSAGE = "Max length is 30!";
const MIN_LENGTH_MESSAGE = "Min length is 3!";
const EMAIL_MESSAGE = "Invalid email!";
const PASSWORD_MESSAGE =
  "Only allow passwords with 6 or more alphanumeric characters!";

export const organizationName_validation = {
  required: {
    value: true,
    message: REQUIRED_MESSAGE,
  },
  maxLength: {
    value: 30,
    message: MAX_LENGTH_MESSAGE,
  },
  minLength: {
    value: 3,
    message: MIN_LENGTH_MESSAGE,
  },
};

export const phone_validation = {
  required: {
    value: true,
    message: REQUIRED_MESSAGE,
  },
};

export const address_validation = {
  required: {
    value: true,
    message: REQUIRED_MESSAGE,
  },
  maxLength: {
    value: 30,
    message: MAX_LENGTH_MESSAGE,
  },
  minLength: {
    value: 3,
    message: MIN_LENGTH_MESSAGE,
  },
};

export const username_validation = {
  required: {
    value: true,
    message: REQUIRED_MESSAGE,
  },
  maxLength: {
    value: 30,
    message: MAX_LENGTH_MESSAGE,
  },
  minLength: {
    value: 3,
    message: MIN_LENGTH_MESSAGE,
  },
};

export const email_validation = {
  required: {
    value: true,
    message: REQUIRED_MESSAGE,
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: EMAIL_MESSAGE,
  },
};

export const password_validation = {
  required: {
    value: true,
    message: REQUIRED_MESSAGE,
  },
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
    message: PASSWORD_MESSAGE,
  },
};
