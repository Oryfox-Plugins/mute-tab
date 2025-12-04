chrome.commands.onCommand.addListener((command) => {
    if (command === "mute-tab") {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
            let tab = tabs[0];
            let muted = !tab.mutedInfo.muted;
            chrome.tabs.update(tab.id, { muted: muted });
        });
    }
});