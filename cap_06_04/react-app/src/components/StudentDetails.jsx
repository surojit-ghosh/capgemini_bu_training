const StudentDetails = (props) => {
  if (props.isSelected) {
    return (
      <div className="container mx-auto my-4 bg-sky-200 p-4 text-center">
        <h1>Congratulations</h1>
        <h2>Student Name: {props.studentName}</h2>
        <h3>Organization: {props.orgName}</h3>
      </div>
    );
  }
  return (
    <div>
        <h1>Next Round Scheduled</h1>
      <h2>Student Name: {props.studentName}</h2>
      <h3>Organization: {props.orgName}</h3>
    </div>
  );
};

export default StudentDetails;
