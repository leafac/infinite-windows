Infinite Windows
================

- https://alvinalexander.com/source-code/mac-os-x/how-size-or-resize-application-windows-applescript
- https://www.labnol.org/software/resize-mac-windows-to-specific-size/28345/
- https://apple.stackexchange.com/questions/106388/osascript-set-bounds-of-window-not-working-after-mavericks-upgrade
- https://alvinalexander.com/mac-os-x/applescript-unix-mac-osx-foreground-application-result

```console
$ osascript -e 'tell application "System Events" to tell process "Terminal" to set position of front window to {0, 0}'
$ osascript -e 'tell application "Finder" to get the bounds of the window of the desktop'
$ osascript -e 'tell application "System Events"' -e 'set frontApp to name of first application process whose frontmost is true' -e 'tell process frontApp to set the position of the front window to {0, 0}' -e 'end tell'
$ osascript -e 'tell application "System Events"' -e 'set frontApp to name of first application process whose frontmost is true' -e 'tell process frontApp' -e 'set the position of the front window to {0, 0}' -e 'set the size of the front window to {1440, 900}' -e 'end tell' -e 'end tell'
```

```console
```
