import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceCenterModel } from './servicecentermodel';

@Injectable({
  providedIn: 'root'
})
export class ServiceCenterService {

  constructor(private http:HttpClient) { }

  readonly baseURL ='https://8080-dffafdafebcfacbdcbaeaceadebfeffeb.project.examly.io/api/ServiceCenter/';

  list!:ServiceCenterModel[];

  
  update(Obj:any){
    
    return this.http.put<any>(this.baseURL+Obj.serviceCenterID,Obj);
   }

   deletecenter(id:number){
    return this.http.delete(this.baseURL+id);
  }



  getList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list=res as ServiceCenterModel[]);
  }
}
