import {
  taskDeadline_validation,
  taskTitle_validation,
} from "../../../utils/validations";

export const CREATE_TASK_FORM_FIELDS = [
  {
    id: "title",
    label: "Title",
    type: "text",
    name: "title",
    placeholder: "Enter title",
    validation: taskTitle_validation,
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    name: "description",
    placeholder: "Enter description",
  },
  {
    id: "deadline",
    label: "Deadline",
    type: "date",
    name: "deadline",
    validation: taskDeadline_validation,
  },
];
