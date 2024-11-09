const saudacao = (nome: string): string => {
    return `Olá, ${nome}! Aprendendo TypeScript!`;    
};

const somaFunction = (numero1: number, numero2: number): number => {
    let total = numero1 + numero2;
    return total;
}

const functionArray = (): string[] => {
    let array: string[] = [
        'João',
        'Maria',
        'Guilerme'
    ]    
    return array;    
}

const functionArray2 = (): any[] => {   

    let array2: any[] = [
        false,        
        'Maria',
        'Guilerme'
    ]   
    return array2;
}

const functionArrayDiverso = (): any[] => {   

    let array3: any[] = [
        false,        
        'Maria',
        'Guilerme'
    ]   
    return array3;
}

interface Person {
nome: string,
idade: number,
isStudent: boolean,
}

const people = (person: Person) => {
    return `A pessoa cadastrada tem nome ${person.nome} e a idade ${person.idade}`
}

var pessoaCadastrada = {
    nome: 'Márcio',
    idade: 56,
    isStudent: false
}

console.log(people(pessoaCadastrada));

// console.log(saudacao("Márcio"));

// console.log(somaFunction(15,20));

// console.log(functionArray());
// console.log(functionArray2());