import { useState } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";

function Experience() {
  const [editIndex, setEditIndex] = useState(-1);
  const [expList, setExpList] = useState([]);

  const company = "Company";
  const position = "Position";
  const startDate = "Start Date";
  const endDate = "End Date";
  const workDesc =
    "Some stuff about the work that you’ve done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don’t make it too long, keep it short but meaningful. Maximum 10 lines.";

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
    <div className="py-4">
      <h1 className="text-2xl font-bold mb-4">Experience</h1>
      {expList.map((experience, index) => (
        <div key={index} className="mb-4 p-4 bg-white rounded shadow">
          {editIndex === index ? (
            <div>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => handleEditField(e, index, "company")}
                className="mb-2 p-2 border rounded"
              />
              <input
                type="text"
                value={experience.position}
                onChange={(e) => handleEditField(e, index, "position")}
                className="mb-2 p-2 border rounded"
              />
              <input
                type="text"
                value={experience.startDate}
                onChange={(e) => handleEditField(e, index, "startDate")}
                className="mb-2 p-2 border rounded"
              />
              <input
                type="text"
                value={experience.endDate}
                onChange={(e) => handleEditField(e, index, "endDate")}
                className="mb-2 p-2 border rounded"
              />
              <input
                type="text"
                value={experience.workDesc}
                onChange={(e) => handleEditField(e, index, "workDesc")}
                className="mb-2 p-2 border rounded"
              />
              <button
                onClick={handleSave}
                className="bg-green-500 text-white p-2 rounded mr-2"
              >
                <FaSave />
              </button>
              <button
                onClick={handleCancel}
                className="bg-red-500 text-white p-2 rounded"
              >
                <FaTimes />
              </button>
            </div>
          ) : (
            <div>
              <p className="mb-2 p-2 text-xl font-thin">
                {experience.company} • {experience.position}
              </p>
              <p className="mb-2 p-2">
                {experience.startDate} - {experience.endDate}
              </p>
              <p className="mb-2 p-2">{experience.workDesc}</p>
              <div className="mt-4">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-blue-500 text-white p-2 rounded mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="mb-4">
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Experience;
