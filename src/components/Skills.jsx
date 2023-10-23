import { useState } from "react";

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
    <div>
      <h1>Skills</h1>
      {skillList.map((skill, index) => (
        <div key={index}>
          {editIndex == index ? (
            <div>
              <input
                type="text"
                value={skill.skills}
                onChange={(e) => handleEditField(e, index, "skills")}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>{skill.skills}</p>
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

export default Skills;
