import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

beforeEach(() => render(<App />));

describe('Home', () => {
  it('Renderiza o h1 "Welcome"', () => {
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
  });
  
  it('Link "Login" redireciona para página de Login', async () => {
    const login = screen.getByRole('link', { name: 'Login' });
    userEvent.click(login);
    const loginH1 = await screen.findByRole('heading', { level: 1, name: 'Login' });
    expect(loginH1).toBeInTheDocument();
  });

  it('Link "Register" redireciona para página de Register', async () => {
    const register = screen.getByRole('link', { name: 'Register' });
    userEvent.click(register);
    const registerH1 = await screen.findByRole('heading', { level: 1, name: 'Register' });
    expect(registerH1).toBeInTheDocument();
  });
});
