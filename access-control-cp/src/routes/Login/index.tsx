import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface InputsLogin {
  nomeUsuario: string;
  email: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsLogin>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<InputsLogin> = async (data) => {
    try {
      const response = await fetch(
        `http://localhost:5001/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`
      );
      if (!response.ok) {
        throw new Error("Erro na rede ou o servidor não está respondendo.");
      }

      const users = await response.json();

      if (users.length > 0) {
        const user = users[0]; 
        sessionStorage.setItem("usuarioLogado", JSON.stringify(user));
        alert(`Login bem-sucedido! Bem-vindo, ${user.nome}.`);
        navigate("/");
        window.location.reload();
      } else {
        alert("Nome de usuário ou email inválidos.");
      }
    } catch (error) {
      console.error("Erro ao tentar fazer login:", error);
      alert(
        "Ocorreu um erro ao tentar fazer login. Verifique se o servidor backend está rodando."
      );
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Acessar Conta
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="nomeUsuario"
              className="block text-sm font-medium text-gray-700"
            >
              Nome de Usuário
            </label>
            <input
              id="nomeUsuario"
              type="text"
              {...register("nomeUsuario", {
                required: "O nome de usuário é obrigatório",
              })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.nomeUsuario && (
              <p className="mt-2 text-sm text-red-600">
                {errors.nomeUsuario.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "O email é obrigatório",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Por favor, insira um endereço de email válido",
                },
              })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Entrar
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Não tem uma conta?{" "}
          <Link
            to="/cadastro"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </main>
  );
}
