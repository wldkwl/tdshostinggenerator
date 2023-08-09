document.addEventListener("DOMContentLoaded", init);

function init() {
  const formElements = {
    title: document.getElementById("titleinput"),
    emoji: document.getElementById("emojiinput"),
    link: document.getElementById("stratlink"),
    psCheckbox: document.getElementById("isprivateserver"),
    players: [
      document.getElementById("player1"),
      document.getElementById("player2"),
      document.getElementById("player3"),
      document.getElementById("player4")
    ],
    radioOptions: [
      document.getElementById("youoptionp1"),
      document.getElementById("youoptionp2"),
      document.getElementById("youoptionp3"),
      document.getElementById("youoptionp4")
    ],
    enabledOptions: [
      document.getElementById("disabledoptionp1"),
      document.getElementById("disabledoptionp2"),
      document.getElementById("disabledoptionp3"),
      document.getElementById("disabledoptionp4")
    ]
  };

  const outputMessage = document.getElementById("outputmessage");
  const outputHeader = document.getElementById("outputheader");
  const outputBody = document.getElementById("outputbody");
  const output = document.getElementById("output");

  const savedData = {
    title: "",
    emoji: "",
    link: "",
    players: new Array(4).fill(false), // Initialize with 4 false values
    radioOptions: new Array(4).fill(false),
    enabledOptions: new Array(4).fill(false),
    psCheckbox: false
  };

  for (let key in formElements) {
    if (key === "players" || key === "radioOptions" || key === "enabledOptions") {
      formElements[key].forEach((element, index) => {
        element.addEventListener("change", () => updateValue(key, index));
      });
    } else {
      formElements[key].addEventListener("change", () => updateValue(key));
    }
  }

  function updateValue(key, index) {
    if (key === "players" || key === "radioOptions" || key === "enabledOptions") {
      savedData[key][index] = formElements[key][index].checked;
    } else if (key === "psCheckbox") {
      savedData[key] = formElements[key].checked;
    } else {
      savedData[key] = formElements[key].value;
    }
    
    updateOutput();
  }

  function updateOutput() {
    if (savedData.emoji && savedData.title && savedData.link) {
      const playerStrings = savedData.players.map((player, index) => {
        let playerString = `PLAYER ${index + 1}: ${player ? ":downvote: CLOSED" : ":upvote: OPEN"}`;
        if (savedData.radioOptions[index] && player) {
          playerString = `PLAYER ${index + 1}: :downvote: CLOSED (me)`;
        }
        if (savedData.enabledOptions[index]) {
          playerString = "";
        }
        return playerString;
      });

      const psString = savedData.psCheckbox ? "DM ME FOR A PRIVATE SERVER LINK" : "DM ME TO GET IN";

      output.textContent = `
        >>> ${savedData.emoji} **HOSTING ${savedData.title.toUpperCase()}** ${savedData.emoji}

        ${playerStrings.filter(str => str !== "").join("\n")}

        **${psString}**

        STRAT LINK: ${savedData.link}
      `;

      outputMessage.classList.replace("is-danger", "is-success");
      outputMessage.classList.remove("is-hidden");
      outputHeader.innerHTML = 'Success';
      outputBody.innerHTML = 'Successfully generated';
    } else {
      outputMessage.classList.replace("is-success", "is-danger");
      outputMessage.classList.remove("is-hidden");
      outputHeader.innerHTML = 'Failure';
      outputBody.innerHTML = 'Required fields not filled';
    }
  }
}