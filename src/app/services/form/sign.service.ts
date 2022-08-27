import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataService } from "../data.service";

@Injectable()
export class SignService extends DataService {
    constructor(http:HttpClient) {
        super("http://localhost:2000/sign", http);
    }
}