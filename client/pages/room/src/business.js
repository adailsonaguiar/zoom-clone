class Business {
  constructor({ room, media, view }) {
    this.room = room;
    this.media = media;
    this.view = view;

    this.currentStrem = {};
  }

  async _init() {
    this.currentStrem = await this.media.getCamera();
    this.addVideoStream("user01");
  }

  static initialize(deps) {
    const instance = new Business(deps);
    return instance._init();
  }

  addVideoStream(userId, stream = this.currentStrem) {
    const isCurrentId = false;
    this.view.renderVideo({ userId, stream, isCurrentId });
  }
}
