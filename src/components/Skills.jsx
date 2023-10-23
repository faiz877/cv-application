import { useState } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";

function Skills() {
  const [editIndex, setEditIndex] = useState(-1);
  const [skillList, setSkillList] = useState([]);

  const skills = "Your-skills";

  const handleAdd = () => {
    const updatedSkillList = {
      skills,
    };
    setSkillList([...skillList, updatedSkillList]);
  };

  const handleDelete = (index) => {
    const updatedSkillList = [...skillList];
    updatedSkillList.splice(index, 1);
    setSkillList(updatedSkillList);
  };

  const handleEditField = (e, index, field) => {
    const updatedSkillList = [...skillList];
    updatedSkillList[index][field] = e.target.value;
    setSkillList(updatedSkillList);
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
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
      {skillList.map((skill, index) => (
        <div key={index} className="mb-4 p-4 bg-white rounded shadow">
          {editIndex === index ? (
            <div>
              <input
                type="text"
                value={skill.skills}
                onChange={(e) => handleEditField(e, index, "skills")}
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
              <p className="text-lg mb-2 p-2">{skill.skills}</p>
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
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default Skills;
