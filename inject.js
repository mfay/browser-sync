(function () {
  let src =
    "http://localhost:3000/browser-sync/browser-sync-client.js?v=2.27.7";
  const scripts = document.getElementsByTagName("script");
  let found = false;
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src == src) {
      found = true;
      break;
    }
  }
  if (!found) {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
  }
})();
