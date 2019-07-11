const { app, globalShortcut } = require("electron");
const { exec } = require("child_process");

app.dock.hide();

const [width, height] = [1440, 900];

const set = (x, y, width, height) => () => {
  exec(`osascript -e 'tell application "System Events"' -e 'set frontApp to name of first application process whose frontmost is true' -e 'tell process frontApp' -e 'set the position of the front window to {${x}, ${y}}' -e 'set the size of the front window to {${width}, ${height}}' -e 'end tell' -e 'end tell'`);
};

app.on("ready", () => {
  globalShortcut.register("Control+Option+Command+M",     set(        0,          0, width    , height    ));

  globalShortcut.register("Control+Option+Command+Up",    set(        0,          0, width    , height / 2));
  globalShortcut.register("Control+Option+Command+Right", set(width / 2,          0, width / 2, height    ));
  globalShortcut.register("Control+Option+Command+Down",  set(        0, height / 2, width    , height / 2));
  globalShortcut.register("Control+Option+Command+Left",  set(        0,          0, width / 2, height    ));

  globalShortcut.register("Control+Option+Command+1",     set(        0,          0, width / 2, height / 2));
  globalShortcut.register("Control+Option+Command+2",     set(width / 2,          0, width / 2, height / 2));
  globalShortcut.register("Control+Option+Command+3",     set(        0, height / 2, width / 2, height / 2));
  globalShortcut.register("Control+Option+Command+4",     set(width / 2, height / 2, width / 2, height / 2));
});
