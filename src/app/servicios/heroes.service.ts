import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class HeroesService {

  private heroesURL:string = "http://localhost:8080/v1/heroes";
  private heroes:any []=[];


    constructor(private http:HttpClient){
      this.getHeroes().subscribe((resp:any[])=>{
        if (resp) {
         this.heroes = resp;
        } else {
          console.error(resp);
        }
      });

    }

    public getHeroes(){
      console.log("retornar Heroe");
       console.log(this.heroes);
      return this.http.get(this.heroesURL).pipe(map(res=>res));
    }


    public getHeroe(idx:string){
      return this.heroes[idx];
    }

    buscarHeroes(termino:string){
      let heroeArr:Heroe[] = [];

      termino = termino.toLowerCase();

      for(let i = 0; i< this.heroes.length;i++){

        let heroe = this.heroes[i];
        let nombre = heroe.nombre.toLowerCase();

        if(nombre.indexOf(termino)>=0){
          heroe.idx= i;
          heroeArr.push(heroe);
        }

      }

      return heroeArr;
    }
}

export interface Heroe {
  nombre: string,
      bio:string,
      img: string,
      aparicion: string,
      casa: string,
      idx?:number

}
