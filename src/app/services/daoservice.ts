import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestApiService } from "./restService";
import { User } from "../models/user";
import { Results } from "../models/results";

@Injectable()
export class DaoService {
  baseURL: string;
  results: Observable<any>;
  test: string;
  constructor(private restService: RestApiService) {
    this.baseURL = "java_server_url";
  }

  getUsers(param: any): Observable<Results> {
    return this.restService.invokeAPI('GET', this.baseURL + 'relative_url', param.type + '/', param);
  }
}