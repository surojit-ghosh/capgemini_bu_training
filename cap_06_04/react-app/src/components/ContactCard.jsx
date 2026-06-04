const ContactCard = ({ email, linkedIn }) => {
  return (
    <div className="container m3 border border-success-subtle border-3">
      <p>Email: {email}</p>
      <p>
        LinkedIn:{" "}
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          Visit LinkedIn
        </a>
      </p>
    </div>
  );
};

export default ContactCard;
