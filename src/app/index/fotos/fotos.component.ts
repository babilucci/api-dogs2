import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogsService } from '../../dogs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css'
})
export class FotosComponent implements OnInit {
  fotos: string[] = []

  ngOnInit(): void {
    const racas = this.activerouter.snapshot.paramMap.get('raca')
    console.log(racas)
    if (racas !== null)
      this.dogsService.buscarFotos(racas).subscribe(data => {
        this.fotos = data.message
      })



  }

  constructor(private activerouter: ActivatedRoute, private dogsService: DogsService) {

  }



}
