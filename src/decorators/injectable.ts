import { container } from '../instances/container';

export function Injectable(token: string): Function {
  return (target: { new (): any }): void => {
    container.providers[token] = new target();
  };
}
