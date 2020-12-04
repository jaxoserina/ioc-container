import { Container } from '../instances/container';
import { Injectable } from './injectable';

describe('Injectable', () => {
  let injectable = Injectable;
  let mockContainer: Container = new Container();

  beforeEach(() => {
    @Injectable('mockTestService')
    class MockTestService {}
  });

  it('should expect the function to be called with the "mockTestService"', () => {
    expect(injectable('mockTestService')).toEqual(expect.any(Function));
  }); 

});