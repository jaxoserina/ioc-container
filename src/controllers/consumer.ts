import { Inject } from "../decorators/inject";
import { Injectable } from "../decorators/injectable";
import { TimeService } from '../services/timeService';
import { DataService, User } from '../services/dataService';

@Injectable('consumer')
export class Consumer{
  @Inject('timeService') private timeService: TimeService;
  @Inject('dataService') private dataService: DataService;

  public currentDate: Date;
  public users: User[];

  constructor() {
    this.currentDate = this.timeService.getCurrentDate(); 
    this.users = this.dataService.getAllUsers();
  }

  public getConsumer(id: number): any {
    const data = {
      firstName: 'Jaxo',
      lastName: 'Natarajan'
    };
    return data;
  }
}




