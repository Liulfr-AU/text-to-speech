chrome.contextMenus.create({
    title: 'Text to Speech',
    contexts: ['selection'],
    id: 'tts',
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log('Context menu item clicked');
    
    if (info.menuItemId === 'tts') {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: speakText,
            args: [info.selectionText]
        });
    }
});

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}


// will need to make extension pop up with play button

// could maybe also have general right click in white space option to play / pause

