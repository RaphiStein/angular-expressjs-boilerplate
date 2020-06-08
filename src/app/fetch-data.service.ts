import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay } from "rxjs/internal/operators";

@Injectable({ providedIn: "root" })
export class FetchDataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get("/api/public/simple").pipe(delay(2000));
  }
}
