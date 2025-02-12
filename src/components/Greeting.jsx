const Greeting = () => {
  const greet = "Welcome to My Website";
  const name = "Zain Ali";
  const date = new Date();
  return (
    <>
      <h1>{greet}</h1>
      <p>My Name is = {name}</p>
      <p>Date = {date.getDate()}</p>
    </>
  );
};

export default Greeting;
