import { EmprestimoStatus } from "./status-emprestimo.enum";

export interface EmprestimoDTO {
  usuarioId: string,
  livroId: string,
  dataEmprestimo: string,
  dataDevolucao: string,
  status: string
}
