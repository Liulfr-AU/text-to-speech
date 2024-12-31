# text-to-speech
#### Video Demo: <https://youtu.be/TZ1L9cjBp0A>
#### Description:
Text-to-speech (TTS) tool utilising the SpeechSynthesis interface of the Web Speech API.

Context menu interface allows users to highlight and right click text before converting text into speech.

## Installation
Download the files and navigate to chrome://extensions and click on 'Load unpacked'. Select the parent directory where all the extension's files are contained and press select. This will load the addon and you should promptly see the addon 'Text to Speechs (TTS)' along with a speaker icon. The extension is now installed.

## Usage
Highlight text you would like to be converted to speech and right click it. Select 'Text to Speech'. This should begin playing the text as audio. To pause/play, right click anywhere else on the screen without text selected and select 'Play/Pause'.

## Files / Directories
### manifest.json
Contains key information relating to the extension including metada, and importantly, links to tts.js. Relevant permissions are defined in this file which include "contextMenus", "scripting" "activeTab" and "storage".

### tts.js
Contains all scripts relating to the extension.

The two context menus ('Text to Speech' and 'Play/Pause') are created on extension install, with differing contexts to dictate when they appear. 'Text to Speech' is set to appear when selecting text and 'Play/Pause' appears in most other cases.

Event listeners exist to detect when these context menus are clicked, running different functions depending on the menu clicked.

Two main functions exist, speakText() and toggleText. SpeakText() first cancels any existing speechSynthesis and sets paused to false in local storage (chrome.storage.local). This is used to store the state of the player, in this case, whether or not it is paused. After this the selected text is converted to speech using the API. 

toggleText uses conditionals to check whether the speech is paused and resumes/pauses the speech as required. This also updates the value of paused to accurately reflect the current value.

### images
Contains 16px, 32px and 128px speaker icons used for the extension toolbar and on the chrome://extensions page. A speaker was chosen as an easily identifiable icon relating to the extension's function.

## Future Development
A graphical user interface (GUI) extension pop-up. This could allow users to change the play back rate and voice of the narrator. Additional functionality could include a sidePanel with the above, in addition to a history of previously narrated text, where clicking the text would replay the speech.

Autoplay feature for Reddit. This could allow users with a single press of the button to convert the original post and top coments to speech, allowing users to more efficiently listen to reddit posts. This would be a great improvement for posts with many short comments, which would otherwise be tedious to convert using the existing functionality.

## Known Issues
- Audio cuts out on exceedingly long passages of text.