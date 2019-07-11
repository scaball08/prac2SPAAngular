import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from "../../servicios/heroes.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {
  heroes:any []=[];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,private _heroesService:HeroesService, private router:Router ) {
     this.activatedRoute.params.subscribe(params=>{
      console.log("componentes buscar:" + params['heroes']);
      this.termino = params['heroes'];
      this.heroes = this._heroesService.buscarHeroes(params['heroes']);
      console.log("tamaño de arreglo heroes" + this.heroes.length);
    });

  }

  ngOnInit() {

  }

  verHeroe(idx:number){
    console.log(idx);
    // let arraHero :Heroe[]= this._heroesService.getHeroes();
    // let valor =  this.heroes[idx];
    // let fun = (elemnt,index?,arr?)=>elemnt;
    //  this.indice = arraHero.findIndex(fun(valor,idx),this.heroes);
    // console.log(this.indice);
    this.router.navigate(['/heroe',idx ]);


   }

}
