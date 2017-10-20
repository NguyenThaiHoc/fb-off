chrome.webRequest.onBeforeRequest.addListener( function () {
  return {cancel: true};
}, {
  urls: ["*://edge-chat.facebook.com/*",
         "*://0-edge-chat.facebook.com/*",
         "*://1-edge-chat.facebook.com/*",
         "*://2-edge-chat.facebook.com/*",
         "*://3-edge-chat.facebook.com/*",
         "*://4-edge-chat.facebook.com/*",
         "*://5-edge-chat.facebook.com/*",
         "*://6-edge-chat.facebook.com/*",
         "*://7-edge-chat.facebook.com/*",
         "*://8-edge-chat.facebook.com/*",
         "*://9-edge-chat.facebook.com/*",
         "*://10-edge-chat.facebook.com/*",
         "*://11-edge-chat.facebook.com/*",
         "*://12-edge-chat.facebook.com/*",
         "*://0-edge-chat.messenger.com/*",
         "*://1-edge-chat.messenger.com/*",
         "*://2-edge-chat.messenger.com/*",
         "*://3-edge-chat.messenger.com/*",
         "*://4-edge-chat.messenger.com/*",
         "*://5-edge-chat.messenger.com/*",
         "*://6-edge-chat.messenger.com/*",
         "*://7-edge-chat.messenger.com/*",
         "*://8-edge-chat.messenger.com/*",
         "*://9-edge-chat.messenger.com/*",
         "*://10-edge-chat.messenger.com/*",
         "*://11-edge-chat.messenger.com/*",
         "*://12-edge-chat.messenger.com/*",
         "*://13-edge-chat.messenger.com/*",
         "*://www.messenger.com/ajax/messaging/*",
         "*://www.messenger.com/ajax/mercury/*",
         "*://www.facebook.com/ajax/bz/"]
},
  ["blocking"]
);
// urls: ["*://google.com/test/*"]
