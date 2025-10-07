import { useEffect } from 'react';
import { useForm, type SubmitHandler } from "react-hook-form"
import { Link} from 'react-router-dom'
import { Usuario } from '../../types/tipoUsuario';


type Form = {
    nomeUsuario: string;
    email: string;
}


export default function Login(){
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    useEffect(() => {
        document.title = "Login";
    },[]);


    const logar = async (data: Form) => {
        try{
            const endereco = await fetch("http://localhost:5001/usuarios");
            const usuarios: Usuario[] = await endereco.json();

            const usuario = usuarios.find(u => u.nomeUsuario === data.nomeUsuario && u.email === data.email)

            if(usuario){
                alert(`Bem vindo, ${usuario.nome}`);
                reset();
            } else{
                alert("Usuário não foi encontrado")
            }
        }catch{
            alert("Erro ao buscar usuário")
        }
    }


    return(
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="nomeUsuario" className="block text-sm font-medium text-gray-700">Nome de Usuário</label>
            <input
                placeholder="Digite seu nome de usuário"
                type="text"
                {...register("nomeUsuario", {required: true})}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.nomeUsuario}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Logar
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Não tem conta?{' '}
          <Link to="/cadastro" className="font-medium text-blue-600 hover:text-blue-500">
            Faça seu cadastro
          </Link>
        </p>
      </div>
    </main>
    );
}