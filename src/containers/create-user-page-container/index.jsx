import styles from "./styles.module.css";

import CreateUserForm from "../../components/create-user/form";
import User from "../../components/create-user/user";

import { useEffect } from "react";
import { getUsers } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function CreateUserContainer() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { organizationId } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getUsers(organizationId));
  }, []);

  return (
    <div className={styles.createUserContainer}>
      <div className={styles.usersWrapper}>
        {users.map((user, index) => (
          <User key={index} {...user} />
        ))}
      </div>
      <div className={styles.createUserFormWrapper}>
        <CreateUserForm />
      </div>
    </div>
  );
}

export default CreateUserContainer;
