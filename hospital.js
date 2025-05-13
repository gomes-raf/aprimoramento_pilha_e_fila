//Criação da classe Fila
class Fila {
    constructor () {
        this.itens = [] //Inicia a fila vazia
    }

    //Cria a função enfileirar
    enfileirar(item) {
        this.itens.push(item) //Adiciona um item à fila
        console.log(`\n${item} entrou na fila`) //Imprime a mensagem de que o item foi adicionado
    }

    //Cria a função de atendimento
    atendimento() {
        var atendido = this.itens.shift() //Retira o item da lista e o nomeia como "atendido"
        console.log(`\nO paciente ${atendido} foi atendido`) //Imprime a mensagem de que o paciente foi atendido
        return atendido; //Retorna o atendido
    }

    frente() {
        console.log(`\nA frente da fila é ${this.itens[0]}`) //Imprime a frente da fila
    }

    proximo() {
        console.log(`\nDepois do ${this.itens[0]} o próximo a ser atendido é ${this.itens[1]}`) //Imprime o próximo da fila
    }

    imprimir() {
        console.log(`\nA fila atual é ${this.itens}`) //Imprime a fila toda
    }
}


//Cria a calsse Pilha
class Pilha{
    constructor() {
        this.itens2 = [] //Inicia a pilha vazia
    }
    
    empilhar(atendido) {
        this.itens2.push(atendido) //Adiciona um elemento à pilha
        console.log(`${atendido} foi adicionado à pilha`) 
    }

    imprimirPilha() {
        console.log(`\nA pilha de prontuários atual é ${this.itens2}`) //Imprime a pilha atual
    }
}

//Cria uma fila
const fila = new Fila ()

//Adiciona os nomes
fila.enfileirar("Rafael")
fila.enfileirar("Christian")
fila.enfileirar("João")
fila.enfileirar("Yan")
fila.enfileirar("Bruno")

//Cria uma fila
const pilha = new Pilha ()

//Identifica o atendido como "atendido1" e o imprime na pilha
let atendido1 = fila.atendimento()
pilha.empilhar(atendido1)

//Identifica o atendido como "atendido2" e o imprime na pilha
let atendido2 = fila.atendimento()
pilha.empilhar(atendido2)

fila.frente() //Chama a função de saber quem está na frente
fila.proximo() //Chama a função de saber quem serão os próximos

fila.imprimir() //Imprime a fila
pilha.imprimirPilha() //Imprime a pilha
