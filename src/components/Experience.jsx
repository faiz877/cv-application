import { useState } from "react";

function Experience() {
  const [editIndex, setEditIndex] = useState(-1);
  const [expList, setExpList] = useState([]);
  const [company, setCompany] = useState("Company");
  const [position, setPosition] = useState("Position");
  const [startDate, setStartDate] = useState("Start Date");
  const [endDate, setEndDate] = useState("End Date");
  const [workDesc, setWorkDesc] = useState(
    "Some stuff about the work that you’ve done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don’t make it too long, keep it short but meaningful. Maximum 10 lines."
  );

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = () => {
    setEditIndex(-1);
  };

  const handleCancel = () => {
    setEditIndex(-1);
  };

  const handleAdd = () => {
    const newExperience = {
      company,
      position,
      startDate,
      endDate,
      workDesc,
    };
    setExpList([...expList, newExperience]);
  };

  const handleDelete = (index) => {
    const updatedExpList = [...expList];
    updatedExpList.splice(index, 1);
    setExpList(updatedExpList);
  };

  const handleEditField = (e, index, field) => {
    const updatedExpList = [...expList];
    updatedExpList[index][field] = e.target.value;
    setExpList(updatedExpList);
  };

  return (
    <div>
      <h1>Experience</h1>
      {expList.map((experience, index) => (
        <div key={index}>
          {editIndex === index ? (
            <div>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => handleEditField(e, index, "company")}
              />
              <input
                type="text"
                value={experience.position}
                onChange={(e) => handleEditField(e, index, "position")}
              />
              <input
                type="text"
                value={experience.startDate}
                onChange={(e) => handleEditField(e, index, "startDate")}
              />
              <input
                type="text"
                value={experience.endDate}
                onChange={(e) => handleEditField(e, index, "endDate")}
              />
              <input
                type="text"
                value={experience.workDesc}
                onChange={(e) => handleEditField(e, index, "workDesc")}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>
                {experience.company} • {experience.position}
              </p>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
              <p>{experience.workDesc}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          )}
        </div>
      ))}
      <div>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default Experience;
