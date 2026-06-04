import ContactCard from "./ContactCard";

function UserCard(props) {
  return (
    <div className="card p-3 mb-3">
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>

      <ContactCard email={props.email} linkedIn={props.linkedIn} />

      {/* {props.email ? (
        <ContactCard email={props.email} linkedIn={props.linkedIn} />
      ) : (
        <p className="text-danger">No contact information available.</p>
      )} */}

      {/* {props.email && (
        <ContactCard email={props.email} linkedIn={props.linkedIn} />
      )} */}
    </div>
  );
}

export default UserCard;
