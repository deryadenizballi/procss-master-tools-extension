document.getElementById('find-unused-css').addEventListener('click', () => {
    chrome.tabs.executeScript({ file: 'src/js/find-unused-css.js' });
  });
  
  document.getElementById('extract-color-codes').addEventListener('click', () => {
    chrome.tabs.executeScript({ file: 'src/js/extract-color-codes.js' });
  });
  
  document.getElementById('use-ruler').addEventListener('click', () => {
    chrome.tabs.executeScript({ file: 'src/js/use-ruler.js' });
  });
  
  document.getElementById('convert-css').addEventListener('click', () => {
    chrome.tabs.executeScript({ file: 'src/js/convert-css.js' });
  });
  