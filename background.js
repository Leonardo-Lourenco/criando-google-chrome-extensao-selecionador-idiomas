let language = 'url(flags/english.png)';

chrome.runtime.onInstalled.addListener(() => {// adicionamos event listener p/ escutar e rodar a extenção 
  chrome.storage.sync.set({ language });
  console.log(`Default background language set to ${language}`);
}) // Quando a nossa AP rodar  acessamos o local store API e setamos INGLÊS como linguagem padrão