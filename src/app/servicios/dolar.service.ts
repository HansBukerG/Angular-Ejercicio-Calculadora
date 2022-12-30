import { HttpClient } from '@angular/common/http';
import { getHtmlTagDefinition } from '@angular/compiler';
import { Injectable } from '@angular/core';

const g_url:string = 'https://mindicador.cl/api'

@Injectable()
export class DolarService {
  formatoDolar = {};
  constructor(
    private httpClient:HttpClient
  ) {
   }

   getApi(){
      return this.httpClient.get(g_url);
   }

}
