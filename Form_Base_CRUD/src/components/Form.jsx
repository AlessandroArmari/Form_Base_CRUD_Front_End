import { useState } from "react";

const Form = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [usernameIsInvalid, setUsernameIsInvalid] = useState(true);
  const [emailIsInvalid, setEmailIsInvalid] = useState(true);

  const [errorUsernameBorder, setErrorUsernameBorder] = useState(false);
  const [errorEmailBorder, setErrorEmailBorder] = useState(false);
  const [error, setError] = useState(null);
  const usernameIsValid = usernameValue.trim() !== "";
  const emailIsValid = emailValue.trim() !== "";
  //--->if username and email input field is empty

  //4
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!usernameIsValid && !emailIsValid) {
      setErrorUsernameBorder(true);
      setErrorEmailBorder(true);
      console.log("Username and Email must not be empty!");
      return;
    }
    if (!usernameIsValid) {
      console.log("Username must not be empty!");
      setErrorUsernameBorder(true);
      return;
    }
    console.log("You've entered this username: " + usernameValue);
    if (!emailIsValid) {
      console.log("Email must not be empty!");
      setErrorEmailBorder(true);
      return;
    }
    console.log("You've entered this email: " + emailValue);

    //POST-FETCH-ZONE
    //Now WE send an input data to My SQL/Back End
    const myNewContact = { username: usernameValue, email: emailValue };
    //HERE WE CREATED AN OBJECT USING BOTH INPUT VALUES!
    console.log(myNewContact);

    //Because we need an URL and a "Body" to send, fetch() will have more than one parameters!

    fetch("http://localhost:8080/contacts/create", {
      method: "POST", //--->when doing GET, we do not nned to type method! Here we have to!
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(myNewContact), //---> converts a JavaScript value to a JSON string
    })
      .then((response) => response.json()) //--->fetch returns a Promise<response> that can be handled by .then()
      .then((myNewContact) => {
        console.log("Success, you've sent this object ", myNewContact);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });

    fetchHandler;
  };
  //2
  const usernameInputChangeHandler = (event) => {
    setUsernameValue(event.target.value); //---> il valore dell'elemento dove si trova l'evento (onChange)
  };
  const emailInputChangeHandler = (event) => {
    setEmailValue(event.target.value);
  };

  //this first "col-4" is the "prosecution" of a bootstrap grid-system!
  return (
    <section className="col-5 d-flex flex-wrap ">
      <label htmlFor="form">Add User</label>
      <form
        //3
        onSubmit={formSubmissionHandler}
        id="form"
        className="d-flex flex-wrap"
      >
        <label htmlFor="username" className="m-2 ">
          Username:
        </label>
        <input
          type="text"
          //1
          value={usernameValue}
          onChange={usernameInputChangeHandler}
          id="username"
          className={
            errorUsernameBorder
              ? "w-100 border border-2 border-danger rounded"
              : "w-100"
          }
        />
        <label htmlFor="email" className="m-2">
          Email:
        </label>
        <input
          type="text"
          value={emailValue}
          onChange={emailInputChangeHandler}
          id="email"
          className={
            errorEmailBorder
              ? "w-100 border border-2 border-danger rounded"
              : "w-100"
          }
        />
        <div className="mt-3">
          <button>Send</button>
        </div>
      </form>
    </section>
  );
};

//use effect
//callback
//on input

export { Form };
