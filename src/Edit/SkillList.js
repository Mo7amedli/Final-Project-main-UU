import React, { useState } from 'react';
import './Edit.css'; // Import the CSS file for styling

const SkillsList = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' }
  ]);
  const [editingSkillId, setEditingSkillId] = useState(null);
  const [editedSkillName, setEditedSkillName] = useState('');

  const handleEditSkill = (id, name) => {
    setEditingSkillId(id);
    setEditedSkillName(name);
  };

  const handleSaveSkill = (id) => {
    const updatedSkills = skills.map(skill =>
      skill.id === id ? { ...skill, name: editedSkillName } : skill
    );
    setSkills(updatedSkills);
    setEditingSkillId(null);
  };

  const handleCancelEdit = () => {
    setEditingSkillId(null);
    setEditedSkillName('');
  };
  const handleDeleteSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  return (
    <div className="skills-list-container">
      <h2 className="skills-list-heading">Skills List</h2>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Skill Name</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={skill.id}>
              <td>{index + 1}</td>
              <td>
                {editingSkillId === skill.id ? (
                  <input
                    type="text"
                    value={editedSkillName}
                    onChange={(e) => setEditedSkillName(e.target.value)}
                  />
                ) : (
                  skill.name
                )}
              </td>
              <td>{skill.id}</td>
              <td>
                {editingSkillId === skill.id ? (
                  <>
                    <button className="save-button" onClick={() => handleSaveSkill(skill.id)}>Save</button>
                    <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
                  
                  </>
                ) : (
                  <button className="edit-button" onClick={() => handleEditSkill(skill.id, skill.name)}>Edit</button>
                  
                )}
                <button onClick={() => handleDeleteSkill(skill.id)} className='delete-button'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsList;
