import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit {
  [x: string]: any;
  racas: string[] = [];
  racasFiltradas: string[] = [];
  filtro: string = '';
  racaSelecionada: string | null = null;
  subracas: string[] = [];

  constructor(private dogsService: DogsService, private router: Router) { }

  ngOnInit() {
    this.dogsService.listar().subscribe(data => {
      this.racas = Object.keys(data.message); // Obtém as raças do serviço
      this.racasFiltradas = this.racas; // Inicialmente, todas as raças são exibidas
    });
  }

  // Método para filtrar as raças com base no texto do filtro
  filtrarRacas() {
    if (this.filtro) {
      // Se o filtro não estiver vazio, filtra as raças
      this.racasFiltradas = this.racas.filter(raca =>
        raca.toLowerCase().includes(this.filtro.toLowerCase())
      );
    } else {
      // Se o filtro estiver vazio, exibe todas as raças
      this.racasFiltradas = this.racas;
    }
  }

  // Método chamado quando o usuário seleciona uma raça
  selecionarRaca(raca: string) {
    this.racaSelecionada = raca; // Armazena a raça selecionada
    this.subracas = this.getSubracas(raca); // Obtém as subraças da raça selecionada
  }

  // Método para abrir uma raça aleatória
  abrirRacaAleatoria() {
    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * this.racas.length);
    // Seleciona uma raça aleatória com base no índice gerado
    const racaAleatoria = this.racas[indiceAleatorio];
    // this.selecionarRaca(racaAleatoria); // Seleciona a raça aleatória
    this.router.navigate(['/fotos', racaAleatoria])

  }

  // Método para voltar e desmarcar a raça selecionada
  voltar() {
    this.racaSelecionada = null; // Limpa a seleção da raça
  }

  // Método para obter subraças de uma raça específica (exemplo)
  getSubracas(raca: string): string[] {
    return ['Subraça 1', 'Subraça 2']; // Retorna um exemplo de subraças
  }
}
