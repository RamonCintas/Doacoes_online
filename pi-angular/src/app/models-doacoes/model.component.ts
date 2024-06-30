export class Doacao {
    id: number = 0;
    nome: string = "";
    descricao: string = "";
    meta: number = 0;

    constructor(id:number,nome:string,descricao: string,meta: number){
        this.id = id;
        this.nome= nome;
        this.descricao = descricao;
        this.meta = meta;
    }
}

