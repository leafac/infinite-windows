const { app, globalShortcut } = require("electron");
const { exec } = require("child_process");

app.dock.hide();

app.on("ready", () => {
  globalShortcut.register("Control+Option+Command+L", () => {
    exec(`osascript -e 'tell application "System Events"' -e 'set frontApp to name of first application process whose frontmost is true' -e 'tell process frontApp' -e 'set the position of the front window to {0, 0}' -e 'set the size of the front window to {1440, 900}' -e 'end tell' -e 'end tell'`);
  });
});
