function DashboardPageContainer() {
  const { username } = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div>
      <h1>Welcome {username}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        perspiciatis! Eveniet amet doloribus architecto illum aliquid. Sint,
        animi quis consequatur explicabo reprehenderit est facilis, quos
        recusandae possimus unde cupiditate aspernatur.
      </p>
    </div>
  );
}

export default DashboardPageContainer;
