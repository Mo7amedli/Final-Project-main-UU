import React, { useState } from 'react';
import './Edit.css'; // Import the CSS file for styling

const LanguageList = () => {
  const [languages, setLanguages] = useState([
    { id: 1, name: 'Language 1' },
    { id: 2, name: 'Language 2' },
    { id: 3, name: 'Language 3' }
  ]);
  const [editingLanguageId, setEditingLanguageId] = useState(null);
  const [editedLanguageName, setEditedLanguageName] = useState('');

  const handleEditLanguage = (id, name) => {
    setEditingLanguageId(id);
    setEditedLanguageName(name);
  };

  const handleSaveLanguage = (id) => {
    const updatedLanguages = languages.map(language =>
      language.id === id ? { ...language, name: editedLanguageName } : language
    );
    setLanguages(updatedLanguages);
    setEditingLanguageId(null);
  };

  const handleCancelEdit = () => {
    setEditingLanguageId(null);
    setEditedLanguageName('');
  };
  const handleDeleteLanguage = (id) => {
    setLanguages(languages.filter(language => language.id !== id));
  };

  return (
    <div className="languages-list-container">
      <h2 className="languages-list-heading">Languages List</h2>
      <table className="languages-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Language Name</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {languages.map((language, index) => (
            <tr key={language.id}>
              <td>{index + 1}</td>
              <td>
                {editingLanguageId === language.id ? (
                  <input
                    type="text"
                    value={editedLanguageName}
                    onChange={(e) => setEditedLanguageName(e.target.value)}
                  />
                ) : (
                  language.name
                )}
              </td>
              <td>{language.id}</td>
              <td>
                {editingLanguageId === language.id ? (
                  <>
                    <button className="save-button" onClick={() => handleSaveLanguage(language.id)}>Save</button>
                    <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
                  
                  </>
                ) : (
                  <button className="edit-button" onClick={() => handleEditLanguage(language.id, language.name)}>Edit</button>
                  
                )}
                <button onClick={() => handleDeleteLanguage(language.id)} className='delete-button'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LanguageList;
