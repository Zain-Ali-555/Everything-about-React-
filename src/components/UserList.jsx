const UserList = () => {
  const users = [
    { id: 1, name: "Zain", age: 19 },
    { id: 2, name: "Waseem Bhai", age: 22 },
    { id: 3, name: "Najaf Bhai", age: 25 },
  ];
  return (
    <>
      <div>
        <h1>Users</h1>
        {users.map(
          (
            user // use map without destructuring
          ) => (
            <li style={{ listStyle: "none", padding: "1rem" }} key={user.id}>
              Name: {user.name} <br />
              Age: {user.age}
            </li>
          )
        )}
      </div>
    </>
  );
};

export default UserList;
