// hello
const messagesFactory = (id, message) => {
    return {
        id,
        message
    }
};


const messages = ['Hey','oi', 'batatas', 'cebolas','Amor','pinar é bom', 'sexo é melhor', 'fazer amor também','sara queres pinar?'];

const random = () => messages [Math.floor (Math.random() * messages.length)];

const arr = [];
let id = 1;

while (arr.length < 15) {
    arr.push(messagesFactory(id ,random()));
    id++;
}

console.log (arr);