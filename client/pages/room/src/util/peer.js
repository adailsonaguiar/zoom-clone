class PeerBuilder {
  constructor({ peerConfig }) {
    this.peerConfig = peerConfig;

    const defaultFunctionValue = () => {};

    this.onError = defaultFunctionValue;
    this.onCallReceived = defaultFunctionValue;
    this.onConnectionOpened = defaultFunctionValue;
  }

  setOnError(fn) {
    this.onError = fn;
    return this;
  }

  setOnCallReceived(fn) {
    this.onCallReceived = fn;
    return this;
  }

  setOnConnectionOpened(fn) {
    this.onConnectionOpened = fn;
    return this;
  }

  build() {
    const peer = new Peer(...this.peerConfig);

    peer.on("error", this.onError);
    peer.on("call");

    return new Promise((resolve) =>
      peer.on("open", (id) => {
        return resolve(peer);
      })
    );
  }
}
