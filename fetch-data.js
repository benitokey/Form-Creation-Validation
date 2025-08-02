// Step 1: Create async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Step 2
    const dataContainer = document.getElementById('api-data');   // Step 3

    try {
        const response = await fetch(apiUrl);                    // Step 4: Fetch data
        const users = await response.json();

        dataContainer.innerHTML = '';                            // Step 5: Clear loading text

        const userList = document.createElement('ul');           // Step 6: Create <ul>

        users.forEach(user => {
            const listItem = document.createElement('li');       // Create <li>
            listItem.textContent = user.name;                    // Set user name
            userList.appendChild(listItem);                      // Add <li> to <ul>
        });

        dataContainer.appendChild(userList);                     // Add list to container
    } catch (error) {
        dataContainer.innerHTML = '';                            // Step 7: Handle errors
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching users:', error);
    }
}

// Step 8: Run fetchUserData when page loads
document.addEventListener('DOMContentLoaded', fetchUserData);
