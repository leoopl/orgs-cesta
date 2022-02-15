import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const mock : Object = {
    top:{
        title: 'Detalhes da Cesta de Verduras',
    },
    details: {
        name: 'Cesta de Verduras',
        farmLogo: logo,
        farmName: 'Jenny Jack Farm',
        description: 'Descrição aleatoria do texto aqui, pode imaginar qualquer coisa, FALA DELE',
        price: 'R$ 40,00',
        button: 'Comprar',
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Brócolis",
            imagem: brocolis,
          },
          {
            nome: "Batata",
            imagem: batata,
          },
          {
            nome: "Pepino",
            imagem: pepino,
          },
          {
            nome: "Abóbora",
            imagem: abobora,
          }
        ]
      }
    }

export default mock;