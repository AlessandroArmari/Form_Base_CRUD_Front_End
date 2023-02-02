//REMEMBER: do not forget {} for the props.

const Card = ({ username, email }) => {
  return (
    <>
      <li className="container p-0 ">
        <div className="row  align-items-center ">
          <div className="col-3">{username}</div>
          {/* 7 this props are filled with contents */}
          <div className="col-4">{email}</div>

          <button className="col-2 m-1 p-1 rounded btn btn-primary ">
            Edit
          </button>
          <button className="col-2 m-1 p-1 rounded btn btn-primary ">
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export { Card };
