import { useState } from "react";

function Education() {
  const [edit, setEdit] = useState(false);
  const [school, setSchool] = useState("School");
  const [course, setCourse] = useState("Course");
  const [startDate, setStartDate] = useState("Start Date");
  const [endDate, setEndDate] = useState("End Date");

  const handleAdd = () => {
    setEdit(true);
  };
  const handleSave = () => {
    setEdit(false);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  return (
    <div>
      <h1>Education</h1>
      <div>
        {edit ? (
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        ) : (
          school
        )}
        {edit ? (
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        ) : (
          course
        )}
      </div>
      <div>
        {edit ? (
          <input
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        ) : (
          startDate
        )}
        {edit ? (
          <input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        ) : (
          endDate
        )}
      </div>
      {edit ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleAdd}>Edit</button>
      )}
      {edit && <button onClick={handleCancel}>Cancel</button>}
    </div>
  );
}

export default Education;
