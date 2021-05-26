

export default function handleEditText() {
  var content = document.querySelector("#c-content");
  content.addEventListener("input", function () {
  });

  let buttons = document.getElementsByClassName("tool__btn");
  for (let btn of buttons) {
    btn.addEventListener("click", () => {
      let cmd = btn.dataset["command"];
      if (cmd === "createlink") {
        let url = prompt("Enter the link here: ", "http:");
        document.execCommand(cmd, false, url);
      } else {
        document.execCommand(cmd, false, null);
      }
    });
  }

}