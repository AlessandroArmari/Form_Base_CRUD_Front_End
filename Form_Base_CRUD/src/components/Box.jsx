import { useState } from "react";
import { Card } from "./Card";

const Box = () => {
  const [error, setError] = useState(null);
  const [list, setList] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const fetchHandler = async () => {
    //AGGIUNGERE IS LOADING

    try {
      const response = await fetch(
        "https://905a6ba0-55f9-41ae-bf28-69396d483ab3.mock.pstmn.io/form"
      );
      if (!response.ok)
        throw new Error("Something went wrong! Probably wrong URL!");
      console.log(response);

      const data = await response.json();
      console.log(data);

      const transformedData = data.list.map((elem, index) => {
        return {
          username: elem.username,
          email: elem.email,
        };
      });
      setList(transformedData);
      console.log(transformedData);

      console.log(list);
      setButtonDisabled(true);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  let final = list;

  return (
    <section>
      <h2>Username</h2>
      <h2>Email</h2>

      <button onClick={fetchHandler} disabled={buttonDisabled}>
        Show Contacts
      </button>

      {fakeList.list.map((elem, index) => {
        return <Card key={index} username={elem.username} email={elem.email} />;
      })}
    </section>
  );
};

{
  /* <section>
            <span>{elem.username}</span>
            <span>{elem.email}</span> 
          </section>*/
}

const fakeList = {
  list: [
    {
      username: "Giulix",
      email: "giulia@gmail.it",
    },
    {
      username: "Alessandrx",
      email: "alessandro@libero.it",
    },
  ],
};

export { Box };
