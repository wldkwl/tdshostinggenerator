window.onload = init;

var p1Element
var p2Element
var p3Element
var p4Element

var p1Radio
var p2Radio
var p3Radio
var p4Radio

function init(){
  const titleInput = document.getElementById("titleinput");
  const emojiInput = document.getElementById("emojiinput");
  const linkInput = document.getElementById("stratlink");

  const psCheckbox = document.getElementById("isprivateserver");

  const outputMessage = document.getElementById("outputmessage");
  const outputHeader = document.getElementById("outputheader");
  const outputBody = document.getElementById("outputbody");

  p1Element = document.getElementById("player1");
  p2Element = document.getElementById("player2");
  p3Element = document.getElementById("player3");
  p4Element = document.getElementById("player4");

  p1Radio = document.getElementById("youoptionp1");
  p2Radio = document.getElementById("youoptionp2");
  p3Radio = document.getElementById("youoptionp3");
  p4Radio = document.getElementById("youoptionp4");

  const p1Enabled = document.getElementById("disabledoptionp1");
  const p2Enabled = document.getElementById("disabledoptionp2");
  const p3Enabled = document.getElementById("disabledoptionp3");
  const p4Enabled = document.getElementById("disabledoptionp4");

  var titleSaved
  var emojiSaved
  var linkSaved

  var psSaved
  
  var p1Saved
  var p2Saved
  var p3Saved
  var p4Saved

  var p1RadioSaved
  var p2RadioSaved
  var p3RadioSaved
  var p4RadioSaved

  var p1EnabledSaved
  var p2EnabledSaved
  var p3EnabledSaved
  var p4EnabledSaved
  
  titleInput.addEventListener("change", updateValueTitle);
  emojiInput.addEventListener("change", updateValueEmoji);
  linkInput.addEventListener("change", updateValueStratLink);

  psCheckbox.addEventListener("change", updateValuePrivateServer);
  
  p1Element.addEventListener("change", updateValuePlayer);
  p2Element.addEventListener("change", updateValuePlayer);
  p3Element.addEventListener("change", updateValuePlayer);
  p4Element.addEventListener("change", updateValuePlayer);

  p1Radio.addEventListener("change", updateValuePlRadio);
  p2Radio.addEventListener("change", updateValuePlRadio);
  p3Radio.addEventListener("change", updateValuePlRadio);
  p4Radio.addEventListener("change", updateValuePlRadio);

  p1Enabled.addEventListener("change", updateValuePlEnabled);
  p2Enabled.addEventListener("change", updateValuePlEnabled);
  p3Enabled.addEventListener("change", updateValuePlEnabled);
  p4Enabled.addEventListener("change", updateValuePlEnabled);
  
  function updateValueTitle(e) {
    titleSaved = e
    if (titleSaved && emojiSaved && linkSaved) {
      generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
      outputMessage.classList.replace("is-danger", "is-success");
      outputMessage.classList.remove("is-hidden");
      outputHeader.innerHTML = 'Success';
      outputBody.innerHTML = 'Successfully generated';
    } else {
      outputMessage.classList.replace("is-success", "is-danger");
      outputMessage.classList.remove("is-hidden");
      outputHeader.innerHTML = 'Failure';
      outputBody.innerHTML = 'Emoji/Link not added';
    }
  }

  function updateValueEmoji(e) {
    emojiSaved = e
    console.log(titleSaved, emojiSaved)
    if (titleSaved && emojiSaved && linkSaved) {
      generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
      outputMessage.classList.replace("is-danger", "is-success");
      outputMessage.classList.remove("is-hidden");
      outputHeader.innerHTML = 'Success';
      outputBody.innerHTML = 'Successfully generated';
    } else {
      outputMessage.classList.replace("is-success", "is-danger");
      outputMessage.classList.remove("is-hidden");
      outputHeader.innerHTML = 'Failure';
      outputBody.innerHTML = 'Title/Link not added';
    }
  }

  function updateValuePlayer(e) {
    switch(e.target.id) {
      case "player1":
        p1Saved = e.target.checked
        generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
        break
      case "player2":
        p2Saved = e.target.checked
        generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
        break
      case "player3":
        p3Saved = e.target.checked
        generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
        break
      case "player4":
        p4Saved = e.target.checked
        generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
        break
    }
  }

  function updateValuePlRadio(e) {
    switch(e.target.id) {
      case "youoptionp1":
        p1RadioSaved = e.target.checked
        p2RadioSaved = false
        p3RadioSaved = false
        p4RadioSaved = false
        generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
        break
      case "youoptionp2":
        p2RadioSaved = e.target.checked
        p1RadioSaved = false
        p3RadioSaved = false
        p4RadioSaved = false
        generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
        break
      case "youoptionp3":
        p3RadioSaved = e.target.checked
        p1RadioSaved = false
        p2RadioSaved = false
        p4RadioSaved = false
        generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
        break
      case "youoptionp4":
        p4RadioSaved = e.target.checked
        p1RadioSaved = false
        p2RadioSaved = false
        p3RadioSaved = false
        generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
        break
    }
  }

  function updateValuePlEnabled(e) {
    switch(e.target.id) {
      case "disabledoptionp1":
        p1EnabledSaved = e.target.checked
        generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
        break
      case "disabledoptionp2":
        p2EnabledSaved = e.target.checked
        generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
        break
      case "disabledoptionp3":
        p3EnabledSaved = e.target.checked
        generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
        break
      case "disabledoptionp4":
        p4EnabledSaved = e.target.checked
        generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
        break
    }
  }

  function updateValueStratLink(e) {
    linkSaved = e

    if (titleSaved && emojiSaved && linkSaved) {
      generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
      outputMessage.classList.replace("is-danger", "is-success");
      outputMessage.classList.remove("is-hidden");
      outputHeader.innerHTML = 'Success';
      outputBody.innerHTML = 'Successfully generated';
    } else {
      outputMessage.classList.replace("is-success", "is-danger");
      outputMessage.classList.remove("is-hidden");
      outputHeader.innerHTML = 'Failure';
      outputBody.innerHTML = 'Title/Emoji not added';
    }
  }

  function updateValuePrivateServer(e) {
    psSaved = e.target.checked
    if (e) {
      generatetext(titleSaved, p1Saved, p2Saved, p3Saved, p4Saved, p1RadioSaved, p2RadioSaved, p3RadioSaved, p4RadioSaved, p1EnabledSaved, p2EnabledSaved, p3EnabledSaved, p4EnabledSaved, emojiSaved, linkSaved, psSaved)
    }
  }
}

function generatetext(title, player1, player2, player3, player4, p1radio, p2radio, p3radio, p4radio, p1enabled, p2enabled, p3enabled, p4enabled, emoji, linkurl, psbool){
  console.log(title, player1, player2, player3, player4, emoji)
  if (emoji && title && linkurl) {
    const output = document.getElementById("output");
    const emojiString = emoji.target.value;
    const titleString = title.target.value;

    var player1String
    var player2String
    var player3String
    var player4String

    var psString

    if (player1) {
      player1String = "PLAYER 1: :downvote: CLOSED"
    } else {
      player1String = "PLAYER 1: :upvote: OPEN"
    } 

    if (p1radio && player1) {
      player1String = "PLAYER 1: :downvote: CLOSED (me)"
    }

    if (p1enabled) {
      player1String = "."
      p1Element.disabled = true
      p1Radio.disabled = true
    } else {
      p1Element.disabled = false
      p1Radio.disabled = false
    }
    
    if (player2) {
      player2String = "PLAYER 2: :downvote: CLOSED"
    } else {
      player2String = "PLAYER 2: :upvote: OPEN"
    } 

    if (p2radio && player2) {
      player2String = "PLAYER 2: :downvote: CLOSED (me)"
    }

    if (p2enabled) {
      player2String = "."
      p2Element.disabled = true
      p2Radio.disabled = true
    } else {
      p2Element.disabled = false
      p2Radio.disabled = false
    }
    
    if (player3) {
      player3String = "PLAYER 3: :downvote: CLOSED"
    } else {
      player3String = "PLAYER 3: :upvote: OPEN"
    } 

    if (p3radio && player3) {
      player3String = "PLAYER 3: :downvote: CLOSED (me)"
    }

    if (p3enabled) {
      player3String = "."
      p3Element.disabled = true
      p3Radio.disabled = true
    } else {
      p3Element.disabled = false
      p3Radio.disabled = false
    }
    
    if (player4) {
      player4String = "PLAYER 4: :downvote: CLOSED"
    } else {
      player4String = "PLAYER 4: :upvote: OPEN"
    }

    if (p4radio && player4) {
      player4String = "PLAYER 4: :downvote: CLOSED (me)"
    }

    if (p4enabled) {
      player4String = "."
      p4Element.disabled = true
      p4Radio.disabled = true
    } else {
      p4Element.disabled = false
      p4Radio.disabled = false
    }

    if (psbool) {
      psString = "DM ME FOR A PRIVATE SERVER LINK"
    } else {
      psString = "DM ME TO GET IN"
    }

    output.textContent = `
    >>> ${emojiString} **HOSTING ${titleString.toUpperCase()}** ${emojiString}
    
${player1String}
${player2String}
${player3String}
${player4String}
    
**${psString}**
    
STRAT LINK: ${linkurl.target.value}`
  }
}