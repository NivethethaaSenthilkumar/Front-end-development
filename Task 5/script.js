document.addEventListener('DOMContentLoaded', () => {
    const postContainer = document.getElementById('post-container');

    // Fetch data from the JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            // Clear the container (if there's any previous content)
            postContainer.innerHTML = '';

            // Loop through the data and create elements to display the posts
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');

                const titleElement = document.createElement('h2');
                titleElement.textContent = post.title;

                const bodyElement = document.createElement('p');
                bodyElement.textContent = post.body;

                postElement.appendChild(titleElement);
                postElement.appendChild(bodyElement);

                postContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            postContainer.textContent = 'Failed to load posts.';
        });
});
