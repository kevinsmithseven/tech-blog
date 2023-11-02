const updateFormHandler = async (event) => {
    event.preventDefault();
    
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(event.target);
      const title = document.querySelector('#blogpost-title').value.trim();
      const content = document.querySelector('#blogpost-content').value.trim();
  
      if (title && content) {
        const response = await fetch(`/api/blogpost/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to update blogpost');
        }
      }
    }
  };

  document
  .querySelector('.update-blogpost-form')
  .addEventListener('submit', updateFormHandler);