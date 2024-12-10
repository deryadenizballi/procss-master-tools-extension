// Gereksiz CSS'leri bulma işlevi
(function () {
  const styles = document.styleSheets;
  const usedStyles = new Set();

  for (const sheet of styles) {
    try {
      const rules = sheet.rules || sheet.cssRules;
      for (const rule of rules) {
        if (rule.selectorText) {
          const elements = document.querySelectorAll(rule.selectorText);
          if (elements.length > 0) {
            usedStyles.add(rule.cssText);
          }
        }
      }
    } catch (e) {
      console.warn("CSS Rules Access Error: ", e);
    }
  }

  const unusedStyles = [];
  for (const sheet of styles) {
    try {
      const rules = sheet.rules || sheet.cssRules;
      for (const rule of rules) {
        if (!usedStyles.has(rule.cssText)) {
          unusedStyles.push(rule.cssText);
        }
      }
    } catch (e) {
      console.warn("CSS Rules Access Error: ", e);
    }
  }

  console.log("Unused CSS Rules: ", unusedStyles);
})();
