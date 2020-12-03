import { Consumer } from './consumer';
import { TimeService } from '../services/timeService';
import { DataService, User } from '../services/dataService';
import { container } from '../instances/container';

describe('Consumer', () => {
  let consumer: Consumer, timeServiceMock: TimeService, dataServiceMock: DataService;
  const mockUsers = [
    {
      firstName: "Anand",
      lastName: "Natarajan"
    }, {
      firstName: "Eby",
      lastName: "Roy"
    }
  ];

  beforeEach(() => {
    timeServiceMock = { getCurrentDate: jest.fn() };
    dataServiceMock = { getAllUsers: jest.fn() };
    (timeServiceMock.getCurrentDate as jest.Mock).mockReturnValue('12/08/2020');
    (dataServiceMock.getAllUsers as jest.Mock).mockReturnValue(mockUsers);

    container.provide({
      token: 'timeService',
      useValue: timeServiceMock
    });
    container.provide({
      token: 'dataService',
      useValue: dataServiceMock
    });

    consumer = new Consumer();
  });

  it('should fetch the date', () => {
    expect(timeServiceMock.getCurrentDate).toHaveBeenCalledWith();
  });

  it('should set the date', () => {
    expect(consumer.currentDate).toBe('12/08/2020');
  });

  it('should fetch the users', () => {
    expect(dataServiceMock.getAllUsers).toHaveBeenCalledWith();
  });

  it('should set the users', () => {
    expect(consumer.users).toEqual(mockUsers);
  });
});
