const addCommentHandler = async (event) => {
    event.preventDefault();
    console.log('form submitted');
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(event.target);
      const content = document.querySelector('#comment-content').value.trim();
      console.log("content", content);
      console.log("id", id);
      if (content) {
        const response = await fetch(`/api/comments/singlepost/${id}`, {
          method: 'POST',
          body: JSON.stringify({ content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace(`/singlepost/${id}`);
          alert('Comment added')
        } else {
          alert('Failed to add comment');
        }
      }
    }
  };

  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', addCommentHandler);