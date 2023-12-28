import styles from "./styles.module.css";

import CreateUserForm from "../../components/create-user/form";
import User from "../../components/create-user/user";

import { useEffect } from "react";
import { getUsers } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading";

function CreateUserContainer() {
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { organizationId } = JSON.parse(localStorage.getItem("user"));
  let UserListContent;

  useEffect(() => {
    dispatch(getUsers(organizationId));
  }, []);

  if (loading) {
    return <Loading />;
  } else if (users.length) {
    UserListContent = users.map((user, index) => (
      <User key={index} {...user} />
    ));
  } else {
    UserListContent = (
      <div className={styles.noUsersMessage}>
        <p>No users found</p>
      </div>
    );
  }

  return (
    <div className={styles.createUserContainer}>
      <div className={styles.usersWrapper}>
        <h1 className={styles.title}>Users</h1>
        <div className={styles.usersList}>{UserListContent}</div>
      </div>
      <div className={styles.createUserFormWrapper}>
        <CreateUserForm />
      </div>
    </div>
  );
}

export default CreateUserContainer;
