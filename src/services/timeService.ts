
import { Inject } from "../decorators/inject";
import { Injectable } from "../decorators/injectable";

@Injectable('timeService')
export class TimeService {
  public getCurrentDate(): Date {
    return new Date(Date.now());
  }
}
