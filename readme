####  **About**

This container is extremely small and lightweight dependency injection service using the decorators that TypeScript provides. These decorators are quite similar to the Angular's **@Component**, **@Injectable **and **@Pipe** decorators. These decorators allow us to wrap existing implementations and alter their contents or provide extra functionality without having to change the code of the items itself.

#### How it works

To make a class available for dependency injection, the dependency injection service allows us to add an **@Injectable** decorator that accepts a token to identify it. This will instantiate our class and add it in to a global container.

To inject other dependent classes/services in to our class, we will use an **@Inject** decorator on a class property that takes the token of the desired class as an argument and fetches the respective class from the global container. Our dependency tree can go as deep as possible, with classes that are injected also being able to inject other classes.

#### Installation and setup

You can get the latest release and the type definitions using npm:

```javascript
$ npm i typescript-nodejs-ioc
```

##### tslint settings:

Uncomment and fill in the following lines that are necessary in order to use the experimental decorators.
```javascript
{
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true
}
```

Declare dependencies using the **@injectable** & **@inject **decorators

All the classes must be declared with the **@injectable** decorator. We also need to use the **@inject** decorator to define a token as parameter and return a function that will be executed.

```javascript
import { Inject, Injectable } from 'typescript-nodejs-ioc';
import { TimeService } from '../services/timeService';
import { DataService, User } from '../services/dataService';

 @Injectable('client')
export class Client {
  @Inject('timeService') private timeService: TimeService;
  @Inject('dataService') private dataService: DataService;
}
```

You can inject services with dependencies of their own. By making our Client class an injectable, we can also resolve that with the container instead of using new.

```javascript
import { container } from 'typescript-nodejs-ioc';

container.resolve('client');

```
Always remember to resolve the classes only after they've been initiated.








