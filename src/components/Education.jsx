import { useState } from "react";

function Education() {
  const [eduList, setEduList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const course = "Course";
  const startDate = "Start Date";
  const endDate = "End Date";
  const school = "School";

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
    <div className="py-4">
      <h1 className="text-2xl font-bold mb-4">Education</h1>
      {eduList.map((education, index) => (
        <div key={index} className="mb-4 p-4 bg-white rounded shadow">
          {editIndex === index ? (
            <div>
              <input
                type="text"
                value={education.school}
                onChange={(e) => handleEditField(e, index, "school")}
                className="mb-2 p-2 border rounded "
              />
              <input
                type="text"
                value={education.course}
                onChange={(e) => handleEditField(e, index, "course")}
                className="mb-2 p-2 border rounded "
              />
              <div className="flex mb-2">
                <input
                  type="text"
                  value={education.startDate}
                  onChange={(e) => handleEditField(e, index, "startDate")}
                  className="p-2 border rounded flex-1 mr-2"
                />
                <input
                  type="text"
                  value={education.endDate}
                  onChange={(e) => handleEditField(e, index, "endDate")}
                  className="p-2 border rounded flex-1"
                />
              </div>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white p-2 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-red-500 text-white p-2 rounded"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <p className=" mb-2 text-xl font-thin">
                {education.school} • {education.course}
              </p>
              <p>
                {education.startDate} - {education.endDate}
              </p>
              <div className="mt-4">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-blue-500 text-white p-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default Education;
