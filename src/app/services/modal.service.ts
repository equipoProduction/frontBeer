import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  public saveData (key: string, value: string): void {

    localStorage.setItem(key, value);
  }
  public getData (key: string):string{
    const p=localStorage.getItem(key)!;
    return p;
  }
  public removeData(key: string){
    localStorage.removeItem(key);
  }
  public clearData(){
    localStorage.clear();
  }
}
