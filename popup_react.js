import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Popup = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const listId = 'LISTNAME'; // Replace with your actual list ID
      const apiKey = 'API_KEY'; // Replace with your actual ClickUp API key

      const url = `https://api.clickup.com/api/v2/list/${listId}/task`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': apiKey,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      const tasks = data.tasks;
      setTasks(tasks);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddComment = (taskId) => {
    // Logic to add comment to task
    // Replace with your own implementation
    console.log(`Adding comment to task ${taskId}`);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-list-item">
            {task.name}
            <button onClick={() => handleAddComment(task.id)}>Add Comment</button>
          </li>
                ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<Popup />, document.getElementById('root'));
