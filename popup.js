document.addEventListener('DOMContentLoaded', () => {
  const tasksContainer = document.getElementById('tasks-container');

  const fetchTasks = async () => {
    try {
      const listId = 'YOUR_LIST'; // Replace with your actual list ID
      const apiKey = 'YOUR_API_KEY'; // Replace with your actual ClickUp API key

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

      tasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.name;

        const addButton = document.createElement('button');
        addButton.textContent = 'Add Comment';
        addButton.addEventListener('click', () => {
          handleAddComment(task.id);
        });

        listItem.appendChild(addButton);
        tasksContainer.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddComment = (taskId) => {
    // Logic to add comment to task
    // Replace with your own implementation
    console.log(`Adding comment to task ${taskId}`);
  };

  fetchTasks();
});
