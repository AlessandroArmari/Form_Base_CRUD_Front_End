import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Box } from "./components/Box";
import { Form } from "./components/Form";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [listOfContacts, setListOfContacts] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [secondPhase, setSecondPhase] = useState(false);

  const fetchHandler = async () => {
    //AGGIUNGERE IS LOADING
    setIsLoading(true);
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
      setSecondPhase(true);
      setListOfContacts(transformedData);
      console.log(transformedData);
      console.log(listOfContacts);
      setButtonDisabled(true);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
    setIsLoading(false);
  };

  let content = <p>No content yet</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (listOfContacts.length > 0) {
    content = <Box contacts={listOfContacts} />;
  }

  return (
    <>
      <div className="container">
        <div className="row mt-4 ">
          {/*this 2 classNames "activates" bootstrap grid System 
          The col width is in Form and in Box*/}
          <Form />
          {!buttonDisabled && ( //GIULIA
            <button onClick={fetchHandler} className="mt-4 ml-3 ">
              Show Contacts
            </button>
          )}

          {content}
        </div>
      </div>
    </>
  );
}

export default App;
