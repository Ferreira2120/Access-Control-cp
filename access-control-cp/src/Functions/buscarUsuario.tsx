import type { Usuario } from "../types/tipoUsuario";

export async function buscarUsuarios(): Promise<Usuario[]> {
    const request = await fetch("http://localhost:5001/usuarios");
    if(!request.ok) throw new Error("Erro ao buscar usuários");
    return request.json();
}