import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Usuario {
  nome: string;
  email: string;
}

export default function Cabecalho() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {

    const usuarioLogado = sessionStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
    }
  }, []);

  const handleLogout = () => {

    sessionStorage.removeItem('usuarioLogado');
    setUsuario(null);
    window.location.reload();
  };

  return (
    <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/login" className="text-xl font-bold hover:text-indigo-400 transition-colors">
        Access Control
      </Link>

      {usuario ? (
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-semibold">{usuario.nome}</p>
            <p className="text-sm text-gray-400">{usuario.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
            <Link to="/login" className="font-medium hover:text-indigo-400 transition-colors">Login</Link>
            <Link to="/cadastro" className="font-medium hover:text-indigo-400 transition-colors">Cadastro</Link>
        </div>
      )}
    </header>
  );
}