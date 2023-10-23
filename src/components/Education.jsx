import { useState } from "react";

function Education() {
  const [eduList, setEduList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const [school, setSchool] = useState("School");
  const [course, setCourse] = useState("Course");
  const [startDate, setStartDate] = useState("Start Date");
  const [endDate, setEndDate] = useState("End Date");

  const handleAdd = () => {
    const newEducation = {
      school,
      course,
      startDate,
      endDate,
    };
    setEduList([...eduList, newEducation]);
  };

  const handleEditField = (e, index, field) => {
    const updatedEduList = [...eduList];
    updatedEduList[index][field] = e.target.value;
    setEduList(updatedEduList);
  };

  const handleDelete = (index) => {
    const updatedEduList = [...eduList];
    updatedEduList.splice(index, 1);
    setEduList(updatedEduList);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = () => {
    setEditIndex(-1);
  };

  const handleCancel = () => {
    setEditIndex(-1);
  };

  return (
    <div>
      <h1>Education</h1>
      {eduList.map((education, index) => (
        <div key={index}>
          {editIndex == index ? (
            <div>
              <input
                type="text"
                value={education.school}
                onChange={(e) => handleEditField(e, index, "school")}
              />
              <input
                type="text"
                value={education.course}
                onChange={(e) => handleEditField(e, index, "course")}
              />
              <input
                type="text"
                value={education.startDate}
                onChange={(e) => handleEditField(e, index, "startDate")}
              />
              <input
                type="text"
                value={education.endDate}
                onChange={(e) => handleEditField(e, index, "endDate")}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>
                {education.school} • {education.course}
              </p>
              <p>
                {education.startDate} - {education.endDate}
              </p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          )}
        </div>
      ))}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Education;
