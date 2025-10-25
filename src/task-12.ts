type Callback = (message: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}

sendDoneStatus((message) => {
  console.log("task status:", message);
});
