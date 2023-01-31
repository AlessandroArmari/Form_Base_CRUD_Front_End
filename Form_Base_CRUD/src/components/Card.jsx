//REMEMBER: do not forget {} for the props.

const Card = ({ username, email }) => {
  return (
    <>
      <li className="container p-0 ">
        <div className="row  align-items-center">
          <div className="col-3">{username}</div>

          <div className="col-4">{email}</div>

          <button className="col-2 m-1">Edit</button>
          <button className="col-2 m-1">Delete</button>
        </div>
      </li>
    </>
  );
};

export { Card };
