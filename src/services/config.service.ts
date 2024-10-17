import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ConfigModel {
  apiUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: ConfigModel | undefined = undefined;

  get apiUrl(): string {
    return this.config ? this.config.apiUrl : '';
  }

  constructor(private http: HttpClient) {
  }

  loadConfig() {
    return this.http
      .get<ConfigModel>('./assets/config.json')
      .toPromise()
      .then(config => {
        this.config = config;
      });
  }
}
