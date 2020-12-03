import { Inject } from "../decorators/inject";
import { Injectable } from "../decorators/injectable";

export interface User {
  firstName: string;
  lastName: string;
}

@Injectable('dataService')
export class DataService {
  public getAllUsers(): User[] {
    const users = [
      {
        firstName: 'Jaxo',
        lastName: 'Natarajan'
      },
      {
        firstName: 'Ashika',
        lastName: 'Vellanki'
      },
      {
        firstName: 'Ashmika',
        lastName: 'Vellanki'
      }
    ];
    return users;
  }
}