declare module "*.elm" {
  namespace Elm {
    interface Module {
      Main: Main;
    }

    interface Main {
      init: InitialFunction;
    }

    type InitialFunction = (options: InitialFunctionOptions) => Application;

    interface InitialFunctionOptions {
      flags?: string;
      node?: HTMLElement;
    }

    interface Application {
      ports?: Ports;
    }

    interface Ports {
      [_: string]: Ports.Subscribable | Ports.Sendable;
    }

    namespace Ports {
      interface Subscribable {
        subscribe: SubscribeFunction;
        unsubscribe: UnsubscribeFunction;
      }

      interface Sendable {
        send: SendFunction;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type SubscribeFunction = (data: any) => void;
      type UnsubscribeFunction = () => void;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type SendFunction = (data: any) => void;
    }
  }

  export const Elm: Elm.Module;
}
