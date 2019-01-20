const ports = new Proxy(
  {},
  {
    get: () => {
      return {
        subscribe: jest.fn(),
        send: jest.fn()
      };
    }
  }
);

module.exports = {
  Elm: {
    Main: {
      init: () => ({ ports })
    }
  }
};
