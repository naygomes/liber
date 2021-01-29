import { Component, OnInit } from '@angular/core';

class Livros {
  titulo: string;
  capa: string;
  autor: string;
  preco: number;
  isbn: string;
  ano: number;
  numeroDePaginas: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  livros: Livros[];
  iconeFavoritos: string = "heart-outline";
  constructor() { }

  ngOnInit() {
    this.livros = [
      {
        titulo: 'Box Harry Potter - Completo',
        capa: '../../../assets/hp.jpg',
        autor:  'J. K. Rowling',
        preco: 100,
        isbn: '876D57687293',
        ano: 2010,
        numeroDePaginas:1500
      },
      {
        titulo: 'Harry Potter e o cálice de fogo',
        autor:  'J. K. Rowling',
        capa: '../../../assets/hp.jpg',
        preco: 20,
        isbn: '876D68729355',
        ano: 2000,
        numeroDePaginas:250
      },
      {
        titulo: 'Harry Potter e a ordem da fênix',
        capa: '../../../assets/hp.jpg',
        autor:  'J. K. Rowling',
        preco: 30,
        isbn: '876D5765678',
        ano: 2002,
        numeroDePaginas:300
      }
    ]
  }

  selection = "usados";
  opcoes = ["usados","novos","seminovos"];
  
  pesquisa;
  

  adicionarFavorito(livro: string): string {
    if (this.iconeFavoritos === "heart-outline") {
      this.iconeFavoritos = "heart";
    } else if (this.iconeFavoritos === "heart") {
      this.iconeFavoritos = "heart-outline"
    }
    console.log(this.iconeFavoritos);
    return 'Livro adicionado com sucesso';
  }
  // preco;
  // corPromocao() {
  //   if (this.livros[0].preco < 20) {
  //     this.preco="promocao";
  //   } else {
  //     this.preco="normal";
  //   }
  // }

  // boxes: string[];

  // separaBox():void {
  //   let eBox:boolean = this.livros[0].eSerie;
    
  //   if (eBox) {
  //     this.boxes.push(this.livros[0].titulo);
  //   }
  // }

  calculaFrete(dist, peso) {
    const taxaFixa = 7.70;
    const taxaDist= 0.69;
    const taxaPeso = 3.05;

    return (taxaFixa + taxaDist*dist + taxaPeso*peso);
  }
}
