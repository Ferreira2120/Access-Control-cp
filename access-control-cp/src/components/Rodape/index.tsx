export default function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-800 text-white text-center p-4 fixed bottom-0">
      <p>&copy; {anoAtual} Access Control. Todos os direitos reservados.</p>
    </footer>
  );
}