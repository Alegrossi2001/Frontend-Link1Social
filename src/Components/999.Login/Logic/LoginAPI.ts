export class LoginAPI{
    handleSubmit = async (event: React.FormEvent<HTMLFormElement>, username:string, password:string) => {
        event.preventDefault();
    
        // Replace with your backend API endpoint
        const loginEndpoint = 'https://your-backend-api.com/login';
    
        try {
          const response = await fetch(loginEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          });
    
          if (!response.ok) {
            throw new Error('Login failed');
          }
    
          const data = await response.json();
          console.log('Login successful', data);
    
          // Handle successful login, e.g., redirect to dashboard
        } catch (error) {
          console.error('Error during login', error);
          // Handle login error, e.g., show error message
        }
      };
}