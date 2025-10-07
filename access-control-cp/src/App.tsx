import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";

export default function App(){
  return(
    <div className="bg-[#8b8b8b] w-full flex flex-col">
        <Cabecalho/>
        <Outlet/>
        <Rodape/>
    </div>
  );
}