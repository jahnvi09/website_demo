// import React, { useState } from 'react';
// import './Upload.css';

// function Upload() {
//   const [files, setFiles] = useState([]);
//   const [semester, setSemester] = useState('');
//   const [uploadedFiles, setUploadedFiles] = useState({});
//   const [editingIndex, setEditingIndex] = useState(null); // Track which file is being edited

//   const handleFileChange = (event) => {
//     const newFiles = Array.from(event.target.files);

//     if (editingIndex !== null) {
//       // If editing, replace the file at the given index
//       setFiles((prevFiles) => {
//         const updatedFiles = [...prevFiles];
//         updatedFiles[editingIndex] = newFiles[0]; // Replace only the edited file
//         return updatedFiles;
//       });
//       setEditingIndex(null); // Reset edit index after change
//     } else {
//       setFiles((prevFiles) => [...prevFiles, ...newFiles]); // Add new files
//     }

//     event.target.value = ""; // Clear file input for future selections
//   };

//   const handleUpload = () => {
//     if (!semester) {
//       alert('Please select a semester.');
//       return;
//     }

//     if (files.length === 0) {
//       alert('Please select files to upload.');
//       return;
//     }

//     setUploadedFiles((prev) => ({
//       ...prev,
//       [semester]: [...(prev[semester] || []), ...files],
//     }));

//     setFiles([]);
//     setSemester('');
//     alert('Files uploaded successfully!');
//   };

//   const removeFile = (index) => {
//     setFiles(files.filter((_, i) => i !== index));
//   };

//   const handlePreview = (file) => {
//     const fileURL = URL.createObjectURL(file);
//     window.open(fileURL, '_blank');
//   };

//   const handleEdit = (index) => {
//     setEditingIndex(index); // Store the index of the file being edited
//     document.getElementById('file-upload').click(); // Open file input dialog
//   };

//   return (
//     <div className="upload-page">
//       <h1>Upload Files</h1>

//       {/* Semester Selection */}
//       <div className="form-group">
//         <label htmlFor="semester">Select Semester:</label>
//         <select
//           id="semester"
//           value={semester}
//           onChange={(e) => setSemester(e.target.value)}
//         >
//           <option value="">-- Select --</option>
//           <option value="Fall 2025">Fall 2025</option>
//           <option value="Spring 2025">Spring 2025</option>
//           <option value="Summer 2025">Summer 2025</option>
//         </select>
//       </div>

//       {/* File Input */}
//       <div className="form-group">
//         <label htmlFor="file-upload">Select Files:</label>
//         <input
//           type="file"
//           id="file-upload"
//           multiple
//           onChange={handleFileChange}
//         />
//       </div>

//       {/* Show Selected Files Before Upload */}
//       {files.length > 0 && (
//         <div className="selected-files">
//           <h3>Selected Files:</h3>
//           <ul>
//             {files.map((file, index) => (
//               <li key={index}>
//                 <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
//                   {file.name}
//                 </a>
//                 <button className="preview-btn" onClick={() => handlePreview(file)}>Preview</button>
//                 <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
//                 <button className="remove-btn" onClick={() => removeFile(index)}> Remove</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Upload Button */}
//       <button className="btn-primary" onClick={handleUpload}>
//         Upload Files
//       </button>

//       {/* Display Uploaded Files */}
//       {Object.keys(uploadedFiles).length > 0 && (
//         <div className="uploaded-files">
//           <h2>Uploaded Files</h2>
//           {Object.entries(uploadedFiles).map(([sem, files]) => (
//             <div key={sem}>
//               <h3>{sem}</h3>
//               <ul>
//                 {files.map((file, index) => (
//                   <li key={index}>
//                     <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
//                       {file.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Upload;


import React, { useState } from 'react';
import './Upload.css';

function Upload() {
  const [files, setFiles] = useState([]);
  const [semester, setSemester] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingSemester, setEditingSemester] = useState(null); // Track semester for editing uploaded files

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);

    if (editingIndex !== null) {
      // If editing a selected file before upload
      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        updatedFiles[editingIndex] = newFiles[0];
        return updatedFiles;
      });
      setEditingIndex(null);
    } else if (editingSemester !== null) {
      // If editing an uploaded file
      setUploadedFiles((prev) => {
        const updatedFiles = { ...prev };
        updatedFiles[editingSemester][editingIndex] = newFiles[0];
        return updatedFiles;
      });
      setEditingSemester(null);
      setEditingIndex(null);
    } else {
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }

    event.target.value = ""; // Clear file input
  };

  const handleUpload = () => {
    if (!semester) {
      alert('Please select a semester.');
      return;
    }

    if (files.length === 0) {
      alert('Please select files to upload.');
      return;
    }

    setUploadedFiles((prev) => ({
      ...prev,
      [semester]: [...(prev[semester] || []), ...files],
    }));

    setFiles([]);
    setSemester('');
    alert('Files uploaded successfully!');
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const removeUploadedFile = (sem, index) => {
    setUploadedFiles((prev) => {
      const updatedFiles = { ...prev };
      updatedFiles[sem].splice(index, 1);
      if (updatedFiles[sem].length === 0) {
        delete updatedFiles[sem];
      }
      return updatedFiles;
    });
  };

  const handlePreview = (file) => {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank');
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    document.getElementById('file-upload').click();
  };

  const handleEditUploaded = (sem, index) => {
    setEditingSemester(sem);
    setEditingIndex(index);
    document.getElementById('file-upload').click();
  };

  return (
    <div className="upload-page">
      <h1>Upload Files</h1>

      {/* Semester Selection */}
      <div className="form-group">
        <label htmlFor="semester">Select Semester:</label>
        <select
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="Fall 2025">Fall 2025</option>
          <option value="Spring 2025">Spring 2025</option>
          <option value="Summer 2025">Summer 2025</option>
        </select>
      </div>

      {/* File Input */}
      <div className="form-group">
        <label htmlFor="file-upload">Select Files:</label>
        <input
          type="file"
          id="file-upload"
          multiple
          onChange={handleFileChange}
        />
      </div>

      {/* Show Selected Files Before Upload */}
      {files.length > 0 && (
        <div className="selected-files">
          <h3>Selected Files:</h3>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
                <button className="preview-btn" onClick={() => handlePreview(file)}>Preview</button>
                <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                <button className="remove-btn" onClick={() => removeFile(index)}> Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Upload Button */}
      <button className="btn-primary" onClick={handleUpload}>
        Upload Files
      </button>

      {/* Display Uploaded Files */}
      {Object.keys(uploadedFiles).length > 0 && (
        <div className="uploaded-files">
          <h2>Uploaded Files</h2>
          {Object.entries(uploadedFiles).map(([sem, files]) => (
            <div key={sem}>
              <h3>{sem}</h3>
              <ul>
                {files.map((file, index) => (
                  <li key={index}>
                    <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
                      {file.name}
                    </a>
                    <button className="preview-btn" onClick={() => handlePreview(file)}>Preview</button>
                    <button className="edit-btn" onClick={() => handleEditUploaded(sem, index)}>Edit</button>
                    <button className="remove-btn" onClick={() => removeUploadedFile(sem, index)}>Remove</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Upload;
