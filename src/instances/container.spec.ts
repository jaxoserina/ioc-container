import { Container } from './container';

class MockTestService {
  constructor () {}
};

describe('container', () => {
  let mockContainer: Container = new Container();

  beforeEach(() => {
    mockContainer.provide({
      token: 'mockTestService',
      useValue: MockTestService
    });

  });

  it('should expect the providers object to be initialised', () => {
    expect(mockContainer.providers).toBeDefined();
  });

  it("should resolve token for MockTestService and return the service registered", () => {
    const matchedProvider = mockContainer.resolve('mockTestService');
    expect(matchedProvider).toBe(MockTestService);
  });

  it('should throw an error when no matcing token found', () => {
    expect(() => {
      mockContainer.resolve('random');
    }).toThrow('No provider found for random');
  });

});
