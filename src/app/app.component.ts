import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista de Tarefas';
  tarefas = [];
  tarefa = '';
  idTarefa = 1;

  adicionarTarefa(): void {
    if (this.tarefa) {
      const tarefa = { id: this.idTarefa, descricao: this.tarefa };
      this.idTarefa++;
      this.tarefas.push(tarefa);
      this.tarefa = '';
    }
  }

  // concluida(item): void {
  //   this.tarefas.forEach((element , i) => {
  //     if (element.id === item.id) {
  //       this.tarefas[i].completa = true;
  //       // this.tarefas.splice(i, 1);
  //       return ;
  //     }
  //   });
  // }
  concluirTarefa(indice): void {
    this.tarefas[indice].completa = true;
  }
  removerTarefa(indice): void {
    this.tarefas.splice(indice, 1);
  }
  desmarcarTarefa(indice): void{
    this.tarefas[indice].completa = false;
  }
}
