export interface Tecnico {
    id?: any; // id pode ser String ou Integer e pode ser chumbado ou não
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    perfis: string[];
    dataCriacao: any;    
}