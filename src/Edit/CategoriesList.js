import React, { useState } from 'react';
import './Edit.css'; // Import the CSS file for styling

const CategoriesList = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' }
  ]);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState('');

  const handleEditCategory = (id, name) => {
    setEditingCategoryId(id);
    setEditedCategoryName(name);
  };

  const handleSaveCategory = (id) => {
    const updatedCategories = categories.map(category =>
      category.id === id ? { ...category, name: editedCategoryName } : category
    );
    setCategories(updatedCategories);
    setEditingCategoryId(null);
  };

  const handleCancelEdit = () => {
    setEditingCategoryId(null);
    setEditedCategoryName('');
  };
  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  return (
    <div className="categories-list-container">
      <h2 className="categories-list-heading">Categories List</h2>
      <table className="categories-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>category Name</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>
                {editingCategoryId === category.id ? (
                  <input
                    type="text"
                    value={editedCategoryName}
                    onChange={(e) => setEditedCategoryName(e.target.value)}
                  />
                ) : (
                  category.name
                )}
              </td>
              <td>{category.id}</td>
              <td>
                {editingCategoryId === category.id ? (
                  <>
                    <button className="save-button" onClick={() => handleSaveCategory(category.id)}>Save</button>
                    <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
                  
                  </>
                ) : (
                  <button className="edit-button" onClick={() => handleEditCategory(category.id, category.name)}>Edit</button>
                  
                )}
                <button onClick={() => handleDeleteCategory(category.id)} className='delete-button'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesList;
