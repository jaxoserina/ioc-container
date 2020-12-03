import { container } from '../instances/container';

export function Inject(token: string) {
  return (target: any, key: string) => {
    Object.defineProperty(target, key, {
      get: () => container.resolve(token),
      enumerable: true,
      configurable: true
    });
  };
}