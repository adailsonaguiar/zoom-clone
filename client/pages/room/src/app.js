const recordClick = function (recorderBtn) {
  this.recordingEnabled = false;
  return () => {
    this.recordingEnabled = !this.recordingEnabled;
    recorderBtn.style.color = this.recordingEnabled ? "red" : "white";
  };
};

const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get("room");
  console.log("this is the room", room);

  // const recorderBtn = document.getElementById("record");
  // recorderBtn.addEventListener("click", recordClick(recorderBtn));

  const view = new View();
  // view.renderVideo({
  //   userId: "teste01",
  //   url: "https://media.giphy.com/media/fe0LtB0vOkl8lRskej/giphy.mp4",
  // });
  // view.renderVideo({
  //   userId: "teste01",
  //   isCurrentId: true,
  //   url: "https://media.giphy.com/media/fe0LtB0vOkl8lRskej/giphy.mp4",
  // });

  const media = new Media();
  const deps = {
    view,
    media,
    room,
  };

  Business.initialize(deps);
};

window.onload = onload;
