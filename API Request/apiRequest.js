
async function fetchData() {
    const inputElement = document.getElementById('requestID');
    const id = inputElement.value;

    if (!id) {
        alert('Please enter a valid ID.');
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            console.log(response);
        console.log(`response.ok: ${response.ok}, status code: ${response.status}`);

        if (!response.ok) {
            throw new Error('Failed to fetch data.');
        }
        
        const todo = await response.json();

        const todoOutput = document.getElementById('todoOutput');
        todoOutput.innerHTML = `<p><strong>UserID:</strong> ${todo.userId}</p>
                                <p><strong>ID:</strong> ${todo.id}</p>
                                <p><strong>Title:</strong> ${todo.title}</p>
                                <p><strong>Completed:</strong> ${todo.completed}</p>`;
    } catch (error) {
        console.error('Error fetching data:', error);
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        
        const todoOutput = document.getElementById('todoOutput');
        todoOutput.textContent = `${response.status} Please try again.`;
    }
}
