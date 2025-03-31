const HomePage = () => {
  const currentUser = JSON.parse(localStorage.getItem("selectedUser") || "{}");
  return (
    <div>
      <h1>{currentUser?.name}</h1>
    </div>
  );
};

export default HomePage;
