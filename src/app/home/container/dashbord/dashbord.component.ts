import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import {CrudService} from './../../../services/crud.service';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
  providers:[CrudService]
})
export class DashbordComponent implements OnInit {
 listProduits:any=[];

  constructor(private http:HttpClient,private route:Router , private crud:CrudService) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/produits').subscribe(data =>{
      this.listProduits = data;
    })
    
  }
  getall() {
    this.crud.getAllProducts().subscribe(data=>{this.listProduits=data})
   // this.http.get('http://localhost:3000/produits').subscribe(data =>{
     // this.listProduits = data;
    //})
    
  }
  getDetail(id){
    this.route.navigate(['detail',id]);
  }

  delete(id)
  {

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: [true,true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
       this.crud.deleteProduct(id).subscribe(data=>{
        console.log(data) ;
        this.getall()
       
       });

      //  this.http.delete('http://localhost:3000/produits/'+id).subscribe(data=>{
     //console.log(data) ;
     //this.getall()
    
   // });
      } else {
        swal("Your imaginary file is safe!");
      }
   
    
    
    })

}
}