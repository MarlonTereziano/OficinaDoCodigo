//React Imports
import {
  createContext,
  useCallback,
  useContext,
  ReactNode,
} from "react";

//API Imports
import api from "../services/api";

//Antd Imports
import {message} from 'antd';

import {IUserData} from '../interfaces/auth';



interface AuthContextData {
  signIn: (id: Number) => Promise<void>;
  signOut: () => void;
  signUp(credentials: IUserData): Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {

  const signIn = useCallback(async (id:Number) => {
    const response = await api.get(`/users/${id}`);
    console.log(response.data);
    localStorage.setItem("@mbLabs:Login", response.data.firstName);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@mbLabs:Login");
    window.location.reload();
  }, []);

  const signUp = useCallback(
    async (data: IUserData) => {
      console.log("entrou aqui");
      await api.post(`/users`, {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email.trim(),
          password: data.password,
        })
        .then(async () => {
          message.success('Cadastro realizado com sucesso!');
          try {
            const response = await api.get(`/users`);
            let aux = parseInt(response.data.length);
            await signIn(aux).then(() => {
              message.success('Login realizado com sucesso!');
            });
          } catch (error) {
            message.error(
              'Ocorreu um erro no login automático. Tente fazer manualmente!'
            );
          }
        });
  }, [signIn]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth};
