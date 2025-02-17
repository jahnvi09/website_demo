import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Home.css';


function Home() {
    
  const [assignments, setAssignments] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [details, setDetails] = useState('');
  const [subject, setSubject] = useState('');
  const [dueDate, setDueDate] = useState('');


  // Add a new task
  const addAssignment = () => {
    if (taskName && details && subject && dueDate) {
      setAssignments([
        ...assignments,
        { taskName, details, subject, dueDate },
      ]);
      setTaskName('');
      setDetails('');
      setSubject('');
      setDueDate('');
    } else {
      alert('Please fill in all fields before adding a task.');
    }
  };

  // Delete a task
  const deleteAssignment = (index) => {
    const updatedAssignments = assignments.filter((_, i) => i !== index);
    setAssignments(updatedAssignments);
  };

  // Highlight dates with tasks on the calendar
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const taskDates = assignments.map((assignment) =>
        new Date(assignment.dueDate).toDateString()
      );
      if (taskDates.includes(date.toDateString())) {
        return 'highlight';
      }
    }
    return null;
  };

  // Show task details on hover
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const tasksForDate = assignments.filter(
        (assignment) =>
          new Date(assignment.dueDate).toDateString() === date.toDateString()
      );
      if (tasksForDate.length > 0) {
        return (
          <div className="tooltip">
            {tasksForDate.map((task, index) => (
              <div key={index}>
                {task.taskName} - {task.subject}
              </div>
            ))}
          </div>
        );
      }
    }
    return null;
  };

  return (
    
    
    <div className="home">
      <h1>Home</h1>
      <p>This is your Home Page! Here, you can see all your assignments as well as a preview of your calendar.</p>

      {/* Add Task Form */}
      <div className="add-task">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={addAssignment}>Add Task</button>
      </div>

      {/* Assignment Table */}
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
                {/* Delete Button */}
                <button onClick={() => deleteAssignment(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Current Courses Section */}
      <h2>Current Courses</h2>
      <table className="courses-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course Code</th>
            <th>Term</th>
          </tr>
        </thead>
        <tbody>
          {/* Example static data */}
          <tr><td>Beginning Japanese II</td><td>JP-102-51</td><td>Spring 2021</td></tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>

      {/* Calendar Section */}
      <h2>Calendar</h2>
      <Calendar tileClassName={tileClassName} tileContent={tileContent} />
    </div>
    
  );
}

export default Home;
