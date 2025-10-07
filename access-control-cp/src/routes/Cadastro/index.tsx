import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Cadastro() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Crie sua Conta</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome Completo</label>
            <input
              id="nome"
              type="text"
              
              {...register('nome', { required: 'O nome é obrigatório' })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            
            {errors.nome && <p className="mt-2 text-sm text-red-600">{String(errors.nome.message)}</p>}
          </div>
          <div>
            <label htmlFor="nomeUsuario" className="block text-sm font-medium text-gray-700">Nome de Usuário</label>
            <input
              id="nomeUsuario"
              type="text"
              {...register('nomeUsuario', { required: 'O nome de usuário é obrigatório' })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.nomeUsuario && <p className="mt-2 text-sm text-red-600">{String(errors.nomeUsuario.message)}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'O email é obrigatório',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Por favor, insira um endereço de email válido',
                },
              })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <p className="mt-2 text-sm text-red-600">{String(errors.email.message)}</p>}
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Cadastrar
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Já tem uma conta?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Faça login
          </Link>
        </p>
      </div>
    </main>
  );
}