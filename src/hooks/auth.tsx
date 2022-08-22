import { createContext, useCallback, useContext, ReactNode, useState } from "react";
import api from "../services/api";

interface SignInCredentials {
  login: string;
  senha: string;
}

interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  token: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  
  const [token, setToken] = useState("");

  const signIn = useCallback(async ({ login, senha }) => {
    const response = await api.post('/login', {
      login,
      senha
    });

    const token = response.data;

    if(token === "") {
      throw new Error('Invalid credentials');
    } else {
      localStorage.setItem('@GetOrganized:TOKEN', token);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      setToken(token);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GetOrganized:TOKEN');
    setToken("");
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        signIn,
        signOut,
        token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };