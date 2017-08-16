
(function() {
 const testClick = function() {
  //  console.log("hello1");
    pasteSelection();
  };

 const pasteSelection = function() {
    chrome.tabs.query({
        active: true,
        windowId: chrome.windows.WINDOW_ID_CURRENT
      },
      function(tab) {
        chrome.tabs.sendMessage(tab[0].id, {
            method: "getSelection"
          },
          function(response) {
            console.log(response.data);
            let text = response.data;
            // console.log(text);
            let msg = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(msg);
          });
      });
  }


 let elements = document.getElementById("Read");
  elements.addEventListener("click", testClick);


})();
