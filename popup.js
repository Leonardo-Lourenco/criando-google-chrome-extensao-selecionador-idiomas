const activeFlag = document.getElementById('activeFlag'); // Botão lá do popup.html
const flagOptions = document.getElementById("flagOptions"); //  div com as opções de idiomas lá do popup.html
const otherLangs = ["english", "chinese", "india", "italy", "germany"]; // idiomas diponiveis

chrome.storage.sync.get("language", ({ language }) => {
  activeFlag.style.backgroundImage = language;
});

function constructFlags(otherLangs) {
    chrome.storage.sync.get("language", (data) => {
      const currentLang = data.language;
      for (let lang of otherLangs) {
        const button = document.createElement("button");
        const langURL = `url("flags/${lang}.png")`
        button.dataset.language = langURL;
        button.style.backgroundImage = langURL;
        if(lang === currentLang) {
          button.classList.add(".currentFlag");
        }
        button.addEventListener("click", handleFlagClick)
        flagOptions.appendChild(button);
      }
    })
  }

  function handleFlagClick(e) {
    const currentFlag = e.target.parentElement.querySelector('.currentFlag');
    if(currentFlag && currentFlag !== e.target) {
      currentFlag.classList.remove(".currentFlag")
    }
    const language = e.target.dataset.language
    e.target.classList.add(".currentFlag");
    chrome.storage.sync.set({ language });
    activeFlag.style.backgroundImage = language;
  }

  constructFlags(otherLangs);