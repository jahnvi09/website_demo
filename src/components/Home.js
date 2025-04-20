// import React, { useState } from 'react'; 
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './Home.css';

// function Home() {
//   // --- DUMMY DATA ---
//   const initialAssignments = [
//     { taskName: 'Wireframe Project', details: 'Create wireframes for homepage', subject: 'UI Design', dueDate: '2025-04-22', done: false },
//     { taskName: 'Quiz 3', details: 'Chapters 5-7', subject: 'UI Design', dueDate: '2025-04-25', done: false },
//     { taskName: 'Research Paper', details: 'Initial draft', subject: 'HCI', dueDate: '2025-04-28', done: false }
//   ];
//   const initialCourses = [
//     { name: 'User Interface Design', code: 'SWE-632', term: 'Spring' },
//     { name: 'Human-Computer Interaction', code: 'CS-540', term: 'Spring' }
//   ];

//   const [assignments, setAssignments] = useState(initialAssignments);
//   const [taskName, setTaskName] = useState('');
//   const [details, setDetails] = useState('');
//   const [subject, setSubject] = useState('');
//   const [dueDate, setDueDate] = useState('');

//   const [courses, setCourses] = useState(initialCourses);
//   const [courseName, setCourseName] = useState('');
//   const [courseCode, setCourseCode] = useState('');
//   const [term, setTerm] = useState('');
//   const [editingCourseIndex, setEditingCourseIndex] = useState(null);

//   // ...All your handler functions remain unchanged...

//   const addAssignment = () => {
//     if (taskName && details && subject && dueDate) {
//       const isDuplicate = assignments.some(
//         (assignment) => assignment.taskName === taskName && assignment.dueDate === dueDate
//       );
//       if (isDuplicate) {
//         alert('This assignment already exists.');
//         return;
//       }
//       setAssignments([...assignments, { taskName, details, subject, dueDate, done: false }]);
//       setTaskName('');
//       setDetails('');
//       setSubject('');
//       setDueDate('');
//     } else {
//       alert('Please fill in all fields before adding a task.');
//     }
//   };

//   const deleteAssignment = (index) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this task?");
//     if (confirmDelete) {
//       setAssignments(assignments.filter((_, i) => i !== index));
//     }
//   };

//   const markAsDone = (index) => {
//     setAssignments(assignments.map((assignment, i) =>
//       i === index ? { ...assignment, done: true } : assignment
//     ));
//   };

//   const undoCompleted = (index) => {
//     setAssignments(assignments.map((assignment, i) =>
//       i === index ? { ...assignment, done: false } : assignment
//     ));
//   };

//   const tileContent = ({ date, view }) => {
//     if (view === 'month') {
//       const formattedDate = date.toISOString().split('T')[0];
//       const tasksOnDate = assignments.filter(assignment => assignment.dueDate === formattedDate);
//       return tasksOnDate.length > 0 ? (
//         <div className="calendar-tasks">
//           {tasksOnDate.map((task, index) => (
//             <div key={index} className="calendar-task">{task.taskName}</div>
//           ))}
//         </div>
//       ) : null;
//     }
//     return null;
//   };

//   const tileClassName = ({ date, view }) => {
//     if (view === 'month') {
//       const formattedDate = date.toISOString().split('T')[0];
//       const taskDates = assignments.map(assignment => assignment.dueDate);
//       if (taskDates.includes(formattedDate)) {
//         return 'highlight-date';
//       }
//     }
//     return null;
//   };

//   const addOrEditCourse = () => {
//     if (courseName && courseCode && term) {
//       if (editingCourseIndex !== null) {
//         const updatedCourses = [...courses];
//         updatedCourses[editingCourseIndex] = { name: courseName, code: courseCode, term };
//         setCourses(updatedCourses);
//         setEditingCourseIndex(null);
//       } else {
//         const isDuplicate = courses.some(
//           (course) => course.name === courseName && course.code === courseCode
//         );
//         if (isDuplicate) {
//           alert('This course already exists.');
//           return;
//         }
//         setCourses([...courses, { name: courseName, code: courseCode, term }]);
//       }
//       setCourseName('');
//       setCourseCode('');
//       setTerm('');
//     } else {
//       alert('Please fill in all fields before adding or editing a course.');
//     }
//   };

//   const startEditingCourse = (index) => {
//     setEditingCourseIndex(index);
//     const courseToEdit = courses[index];
//     setCourseName(courseToEdit.name);
//     setCourseCode(courseToEdit.code);
//     setTerm(courseToEdit.term);
//   };

//   const deleteCourse = (index) => {
//     if (window.confirm("Are you sure you want to delete this course?")) {
//       setCourses(courses.filter((_, i) => i !== index));
//     }
//   };

//   const getRemainingDays = (dueDate) => {
//     const today = new Date();
//     const due = new Date(dueDate);
//     const diffTime = due - today;
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays > 0 ? diffDays : 0;
//   };

//   const sortedAssignments = [...assignments].sort((a, b) => 
//     new Date(a.dueDate) - new Date(b.dueDate)
//   );

//   return (
//     <div className="home">
//       {/* Dashboard Banner */}
//       <div className="dashboard-banner">
//         <h1>Student Dashboard</h1>
//       </div>

//       {/* --- TASKS SECTION --- */}
//       <div className="section-stack">
//         <div className="card-wrapper">
//           <div className="card-banner">
//             <h2>Add Task</h2>
//           </div>
//           <p className="section-desc">Add a new assignment, quiz, or project you need to complete. Fill in the details and due date to keep track of your tasks.</p>
//           <div className="add-task">
//             <input type="text" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
//             <input type="text" placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} />
//             <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
//             <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
//             <button onClick={addAssignment}>Add Task</button>
//           </div>
//         </div>
//         <div className="card-wrapper">
//           <div className="card-banner">
//             <h2>Assignments</h2>
//           </div>
//           <p className="section-desc">View all your current tasks and assignments. Mark them as done or delete them as needed.</p>
//           <table className="assignment-table">
//             <thead>
//               <tr>
//                 <th>Task</th>
//                 <th>Details</th>
//                 <th>Course</th>
//                 <th>Due Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {assignments.map((assignment, index) => (
//                 <tr key={index}>
//                   <td>{assignment.taskName}</td>
//                   <td>{assignment.details}</td>
//                   <td>{assignment.subject}</td>
//                   <td>{assignment.dueDate}</td>
//                   <td>
//                     <button onClick={() => deleteAssignment(index)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* --- COURSES SECTION --- */}
//       <div className="section-stack">
//         <div className="card-wrapper">
//           <div className="card-banner">
//             <h2>{editingCourseIndex !== null ? 'Edit Course' : 'Add a Course'}</h2>
//           </div>
//           <p className="section-desc">Add your current courses here. You can edit or remove courses at any time.</p>
//           <div className="add-course">
//             <input type="text" placeholder="Course Name" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
//             <input type="text" placeholder="Course Code" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
//             <select value={term} onChange={(e) => setTerm(e.target.value)}>
//               <option value="">Select Term</option>
//               <option value="Fall">Fall 2025</option>
//               <option value="Spring">Spring 2025</option>
//               <option value="Summer">Summer 2025</option>
//             </select>
//             <button onClick={addOrEditCourse}>
//               {editingCourseIndex !== null ? 'Save Changes' : 'Add Course'}
//             </button>
//             {editingCourseIndex !== null && (
//               <button onClick={() => setEditingCourseIndex(null)}>Cancel</button>
//             )}
//           </div>
//         </div>
//         <div className="card-wrapper">
//           <div className="card-banner">
//             <h2>Current Courses</h2>
//           </div>
//           <p className="section-desc">A list of all your enrolled courses for the selected term.</p>
//           <table className="courses-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Course Code</th>
//                 <th>Term</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {courses.map((course, index) => (
//                 <tr key={index}>
//                   <td>{course.name}</td>
//                   <td>{course.code}</td>
//                   <td><span className={`badge badge-${course.term.toLowerCase()}`}>{course.term}</span></td>
//                   <td>
//                     <button onClick={() => startEditingCourse(index)}>Edit</button>
//                     <button onClick={() => deleteCourse(index)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* --- CALENDAR & DEADLINES SECTION --- */}
//       <div className="calendar-deadline-row">
//         <div className="calendar-section card-wrapper">
//           <div className="card-banner">
//             <h2>Calendar</h2>
//           </div>
//           <p className="section-desc">See all your tasks and deadlines on a monthly calendar. Dates with assignments are highlighted.</p>
//           <Calendar tileClassName={tileClassName} tileContent={tileContent} />
//         </div>
//         <div className="deadline-widget card-wrapper">
//           <div className="card-banner">
//             <h2>Upcoming Deadlines</h2>
//           </div>
//           <p className="section-desc">Quickly view which tasks are due soon and how many days you have left.</p>
//           {sortedAssignments.length > 0 ? (
//             <ul>
//               {sortedAssignments.map((assignment, index) => (
//                 <li key={index} className={assignment.done ? 'completed-task' : ''}>
//                   <strong>{assignment.taskName}</strong> - {assignment.subject}
//                   <span className={`days-left ${getRemainingDays(assignment.dueDate) <= 2 ? 'urgent' : ''}`}>
//                     {getRemainingDays(assignment.dueDate)} days left
//                   </span>
//                   {assignment.done ? (
//                     <button className="undo-button" onClick={() => undoCompleted(index)}>
//                       Undo
//                     </button>
//                   ) : (
//                     <button className="done-button" onClick={() => markAsDone(index)}>
//                       Done
//                     </button>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No upcoming deadlines.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;



import React, { useState } from 'react'; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Home.css';

function Home() {
  // Dummy data for demonstration
  const [assignments, setAssignments] = useState([
    { taskName: 'Wireframe Project', details: 'Create wireframes for homepage', subject: 'UI Design', dueDate: '2025-04-22', done: false },
    { taskName: 'Quiz 3', details: 'Chapters 5-7', subject: 'UI Design', dueDate: '2025-04-25', done: false },
    { taskName: 'Research Paper', details: 'Initial draft', subject: 'HCI', dueDate: '2025-04-28', done: false }
  ]);
  const [taskName, setTaskName] = useState('');
  const [details, setDetails] = useState('');
  const [subject, setSubject] = useState('');
  const [dueDate, setDueDate] = useState('');

  const [courses, setCourses] = useState([
    { name: 'User Interface Design', code: 'SWE-632', term: 'Spring' },
    { name: 'Human-Computer Interaction', code: 'CS-540', term: 'Spring' }
  ]);
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [term, setTerm] = useState('');
  const [editingCourseIndex, setEditingCourseIndex] = useState(null);

  const addAssignment = () => {
    if (taskName && details && subject && dueDate) {
      const isDuplicate = assignments.some(
        (assignment) => assignment.taskName === taskName && assignment.dueDate === dueDate
      );
      if (isDuplicate) {
        alert('This assignment already exists.');
        return;
      }
      setAssignments([...assignments, { taskName, details, subject, dueDate, done: false }]);
      setTaskName('');
      setDetails('');
      setSubject('');
      setDueDate('');
    } else {
      alert('Please fill in all fields before adding a task.');
    }
  };

  const deleteAssignment = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      setAssignments(assignments.filter((_, i) => i !== index));
    }
  };

  const markAsDone = (index) => {
    setAssignments(assignments.map((assignment, i) =>
      i === index ? { ...assignment, done: true } : assignment
    ));
  };

  const undoCompleted = (index) => {
    setAssignments(assignments.map((assignment, i) =>
      i === index ? { ...assignment, done: false } : assignment
    ));
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = date.toISOString().split('T')[0];
      const tasksOnDate = assignments.filter(assignment => assignment.dueDate === formattedDate);
      return tasksOnDate.length > 0 ? (
        <div className="calendar-tasks">
          {tasksOnDate.map((task, index) => (
            <div key={index} className="calendar-task">{task.taskName}</div>
          ))}
        </div>
      ) : null;
    }
    return null;
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = date.toISOString().split('T')[0];
      const taskDates = assignments.map(assignment => assignment.dueDate);
      if (taskDates.includes(formattedDate)) {
        return 'highlight-date';
      }
    }
    return null;
  };

  const addOrEditCourse = () => {
    if (courseName && courseCode && term) {
      if (editingCourseIndex !== null) {
        const updatedCourses = [...courses];
        updatedCourses[editingCourseIndex] = { name: courseName, code: courseCode, term };
        setCourses(updatedCourses);
        setEditingCourseIndex(null);
      } else {
        const isDuplicate = courses.some(
          (course) => course.name === courseName && course.code === courseCode
        );
        if (isDuplicate) {
          alert('This course already exists.');
          return;
        }
        setCourses([...courses, { name: courseName, code: courseCode, term }]);
      }
      setCourseName('');
      setCourseCode('');
      setTerm('');
    } else {
      alert('Please fill in all fields before adding or editing a course.');
    }
  };

  const startEditingCourse = (index) => {
    setEditingCourseIndex(index);
    const courseToEdit = courses[index];
    setCourseName(courseToEdit.name);
    setCourseCode(courseToEdit.code);
    setTerm(courseToEdit.term);
  };

  const deleteCourse = (index) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter((_, i) => i !== index));
    }
  };

  const getRemainingDays = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const sortedAssignments = [...assignments].sort((a, b) => 
    new Date(a.dueDate) - new Date(b.dueDate)
  );

  return (
    <div className="home">
      {/* Dashboard Banner */}
      <div className="dashboard-banner">
        <h1>Student Dashboard</h1>
      </div>

      {/* --- CALENDAR & DEADLINES SECTION AT THE TOP --- */}
      <div className="calendar-deadline-row">
        <div className="calendar-section card-wrapper">
          <div className="card-banner">
            <h2>Calendar</h2>
          </div>
          <p className="section-desc">
            See all your tasks and deadlines on a monthly calendar. Dates with assignments are highlighted.
          </p>
          <Calendar tileClassName={tileClassName} tileContent={tileContent} />
        </div>
        <div className="deadline-widget card-wrapper">
          <div className="card-banner">
            <h2>Upcoming Deadlines</h2>
          </div>
          <p className="section-desc">
            Quickly view which tasks are due soon and how many days you have left.
          </p>
          {sortedAssignments.length > 0 ? (
            <ul>
              {sortedAssignments.map((assignment, index) => (
                <li key={index} className={assignment.done ? 'completed-task' : ''}>
                  <strong>{assignment.taskName}</strong>
                  <span className="subject">- {assignment.subject}</span>
                  <span className={`days-left ${getRemainingDays(assignment.dueDate) <= 2 ? 'urgent' : ''}`}>
                    {getRemainingDays(assignment.dueDate)} days left
                  </span>
                  {assignment.done ? (
                    <button className="undo-button" onClick={() => undoCompleted(index)}>
                      Undo
                    </button>
                  ) : (
                    <button className="done-button" onClick={() => markAsDone(index)}>
                      Done
                    </button>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming deadlines.</p>
          )}
        </div>
      </div>

     {/* --- TASKS & ASSIGNMENTS SIDE BY SIDE --- */}
<div className="side-by-side-row">
  <div className="card-wrapper">
    <div className="card-banner">
      <h2>Add Task</h2>
    </div>
    {/* <div className="add-task">
      <input type="text" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <input type="text" placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} />
      <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <button onClick={addAssignment}>Add Task</button>
    </div> */}
    <form className="form-vertical" onSubmit={e => { e.preventDefault(); addAssignment(); }}>
  <label>
    Task Name
    <input type="text" placeholder="Task Name" value={taskName} onChange={e => setTaskName(e.target.value)} />
  </label>
  <label>
    Details
    <input type="text" placeholder="Details" value={details} onChange={e => setDetails(e.target.value)} />
  </label>
  <label>
    Subject
    <input type="text" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
  </label>
  <label>
    Due Date
    <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
  </label>
  <button type="submit" className="form-action">Add Task</button>
</form>

  </div>
  <div className="card-wrapper">
    <div className="card-banner">
      <h2>Assignments</h2>
    </div>
    <table className="assignment-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Details</th>
          <th>Course</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {assignments.map((assignment, index) => (
          <tr key={index}>
            <td>{assignment.taskName}</td>
            <td>{assignment.details}</td>
            <td>{assignment.subject}</td>
            <td>{assignment.dueDate}</td>
            <td>
              <button onClick={() => deleteAssignment(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

{/* --- COURSES SIDE BY SIDE --- */}
<div className="side-by-side-row">
  <div className="card-wrapper">
    <div className="card-banner">
      <h2>{editingCourseIndex !== null ? 'Edit Course' : 'Add a Course'}</h2>
    </div>
    {/* <div className="add-course">
      <input type="text" placeholder="Course Name" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
      <input type="text" placeholder="Course Code" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
      <select value={term} onChange={(e) => setTerm(e.target.value)}>
        <option value="">Select Term</option>
        <option value="Fall">Fall 2025</option>
        <option value="Spring">Spring 2025</option>
        <option value="Summer">Summer 2025</option>
      </select>
      <button onClick={addOrEditCourse}>
        {editingCourseIndex !== null ? 'Save Changes' : 'Add Course'}
      </button>
      {editingCourseIndex !== null && (
        <button onClick={() => setEditingCourseIndex(null)}>Cancel</button>
      )}
    </div> */}
    <form className="form-vertical" onSubmit={e => { e.preventDefault(); addOrEditCourse(); }}>
  <label>
    Course Name
    <input type="text" placeholder="Course Name" value={courseName} onChange={e => setCourseName(e.target.value)} />
  </label>
  <label>
    Course Code
    <input type="text" placeholder="Course Code" value={courseCode} onChange={e => setCourseCode(e.target.value)} />
  </label>
  <label>
    Term
    <select value={term} onChange={e => setTerm(e.target.value)}>
      <option value="">Select Term</option>
      <option value="Fall">Fall 2025</option>
      <option value="Spring">Spring 2025</option>
      <option value="Summer">Summer 2025</option>
    </select>
  </label>
  <button type="submit" className="form-action">
    {editingCourseIndex !== null ? 'Save Changes' : 'Add Course'}
  </button>
  {editingCourseIndex !== null && (
    <button type="button" className="form-cancel" onClick={() => setEditingCourseIndex(null)}>Cancel</button>
  )}
</form>

  </div>
  <div className="card-wrapper">
    <div className="card-banner">
      <h2>Current Courses</h2>
    </div>
    <table className="courses-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Course Code</th>
          <th>Term</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>{course.name}</td>
            <td>{course.code}</td>
            <td><span className={`badge badge-${course.term.toLowerCase()}`}>{course.term}</span></td>
            <td>
              <button onClick={() => startEditingCourse(index)}>Edit</button>
              <button onClick={() => deleteCourse(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>
  );}
export default Home;
