import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Box } from "./components/Box";
import { Form } from "./components/Form";
//funzione callBack--->
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [listOfContacts, setListOfContacts] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  {
    /*2--->async Function*/
  }
  const fetchHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/contacts/all");
      if (!response.ok)
        throw new Error("Something went wrong! Probably wrong URL!");
      console.log(response);

      const data = await response.json();
      console.log(data);

      const transformedData = data.map((elem, index) => {
        return {
          username: elem.username,
          email: elem.email,
        };
      });
      setListOfContacts(transformedData);
      console.log(transformedData);
      console.log(listOfContacts); //this console.log doesn't work! At this point it is filled!
      setButtonDisabled(true);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
    setIsLoading(false);
  };

  let content = <p>Empty</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  /*3--->contents changes value again!
  {content} is inside the html in return*/
  if (listOfContacts.length > 0) {
    content = <Box contacts={listOfContacts} />;
    /*4--->Go to Box*/
  }

  if (error) {
    content = <h2>Something Went Wrong</h2>;
  }

  return (
    <>
      <div className="container">
        <div className="row mt-4 ">
          {/*this 2 classNames "activates" bootstrap grid System 
          The col width is in Form and in Box*/}
          <Form />
          {/*1--->onClik Button*/}
          {!buttonDisabled && (
            <button onClick={fetchHandler} className="mt-4 ml-3">
              Show Contacts
            </button>
          )}

          {/* I can use Ternary Operator instead!--->(<condizione> ? <istruzione1> : <istruzione2>)
          {buttonDisabled && <div>Sono visibile solo dopo il click</div>} 
          */}

          {content}
        </div>
      </div>
    </>
  );
}

// POSTMAN Get All: http://localhost:8080/contacts/all

/*Remember: The JSON list of objects, can be an object itself with a property
When you do .map() to check that*/
export default App;
