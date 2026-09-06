function searchOnYoutube(info, tab) {
  try {
    const selectedText = info.selectionText;
    if (!selectedText) {
      return;
    }

    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(selectedText)}`;

    const createProperties = {
      url: youtubeSearchUrl,
      active: false
    };

    chrome.tabs.create(createProperties);
  } catch (error) {
    // Error handling
  }
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "search-youtube",
    title: "Search in YouTube for '%s'",
    contexts: ["selection"],
    icons: {
      "32": "icon.png"
    }
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-youtube") {
    searchOnYoutube(info, tab);
  }
});
