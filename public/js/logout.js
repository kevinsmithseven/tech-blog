const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    document.location.replace('/');
    alert('Logged out')
  } else {
    alert('Failed to log out.');
  }
};

document.querySelector('#logout').addEventListener('click', async (event) => {
  event.preventDefault();
  logout();
});

