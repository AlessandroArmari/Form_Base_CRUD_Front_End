import { useState } from "react";
import { Card } from "./Card";

const Box = ({ contacts }) => {
  return (
    <section className="container mt-5 border border-2 border-dark rounded">
      <div className="row">
        <div className="col-3 mb-1">Username</div>
        <div className="col-3 mn-1">Email</div>
        <ul className="list-unstyled w-100 border-top border-2 border-dark">
          {/* 5  use .map() on "contacts" (which is listOfContacts) */}
          {contacts.map((elem, index) => {
            return (
              <Card key={index} username={elem.username} email={elem.email} /> // 6  go to Card
            );
          })}
        </ul>
      </div>
    </section>
  );
};

{
  /* <section>
            <span>{elem.username}</span>
            <span>{elem.email}</span> 
          </section>*/
}

/*
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
*/

export { Box };
