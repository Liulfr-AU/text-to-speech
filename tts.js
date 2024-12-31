chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
    title: 'Text to Speech',
    contexts: ['selection'],
    id: 'tts'
    });

    chrome.contextMenus.create({
        title: 'Play/Pause',
        contexts: ['page', 'frame', 'link', 'editable', 'image', 'video', 'audio', 'browser_action'],
        id: 'toggle'
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'tts') {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: speakText,
            args: [info.selectionText]
        });
    }
    if (info.menuItemId === 'toggle') {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: toggleText,
        })
    }

});

function speakText(text) {
    speechSynthesis.cancel();
    chrome.storage.local.set({paused: false})
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);

}

function toggleText() {
    chrome.storage.local.get(['paused'], (result) => {
        let paused = result.paused;
        if (speechSynthesis.speaking && paused === false) {
            speechSynthesis.pause();
            paused = true;
        } else if (paused === true) {
            speechSynthesis.resume();
            paused = false;
        }
        chrome.storage.local.set({paused: paused});
    });
}