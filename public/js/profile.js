document.addEventListener('DOMContentLoaded', () => {
  const createNewPost = async (event) => {
    event.preventDefault();
    
    const createPost = document.querySelector('.new-project-form');
    
    createPost.classList.remove("hide");
  }
  
  const newFormHandler = async (event) => {
    event.preventDefault();
    
    // Check if the form is visible
    const createPost = document.querySelector('.new-project-form');
    if (!createPost.classList.contains("hide")) {
      const title = document.querySelector('#project-title').value.trim();
      const description = document.querySelector('#project-blog_content').value.trim();
  
      if (title && description) {
        const response = await fetch(`/api/projects`, {
          method: 'POST',
          body: JSON.stringify({ title, description }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const responseBody = await response.text(); // This will give you the full response body.
        console.log(responseBody); // Log the response body to the console.
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to create project');
        }
      }
    }
  };  
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  document
    .querySelector('.create-post')
    .addEventListener('click', createNewPost);
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);

    document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
});


