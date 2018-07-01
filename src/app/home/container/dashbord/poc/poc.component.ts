import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'},
    {id: 4, name:'Flash'}
    ];
    title:string="hello";
    logo:string="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"
    name :string;
    compteur:number=0;
    nom :string;
    email:string;
    phone:number;
    about:string;
    varb:boolean=false;

    posts:any=[];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(result=>{this.posts=result;})
  }

  callFunction(){
    alert(this.name);
  }
  decrement(){
    this.compteur--;
  }
  increment(){
    this.compteur++;
  }

  valider()
  {
    
    let data={
      Name:this.nom,
      Email:this.email,
      Phone:this.phone,
      About:this.about,
    }
    console.log(data);
    this.varb=true;
    alert(JSON.stringify(data));
    localStorage.setItem('user',JSON.stringify(data));
  }
  annuler(){
    this.nom=""
    this.email=""
    this.phone=null
    this.about=""
  }

}
