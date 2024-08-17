import { Livro } from "../livro/livro.model";
import { Usuario } from "../usuario/usuarios.model";
import { EmprestimoStatus } from "./status-emprestimo.enum";

export interface Emprestimo {
  id?: number,
  usuario: Usuario,
  livro: Livro,
  dataEmprestimo: string,
  dataDevolucao: string,
  status: EmprestimoStatus
}
