const { Menu } = require("electron");
const openSettingsWindow = require("./windows/settings.cjs");

const nativeMenus = [
  {
    label: "File",
    submenu: [
      {
        label: "Settings",
        click() {
          openSettingsWindow();
        },
      },
    ],
  },
  {
    label: "View",
    submenu: [
      {
        label: "Toggle Developer Tools",
        accelerator: (function () {
          if (process.platform == "darwin") return "Alt+Command+I";
          else return "Ctrl+Shift+I";
        })(),
        click: function (_, focusedWindow) {
          if (focusedWindow) focusedWindow.toggleDevTools();
        },
      },
    ],
  },
];
const menu = Menu.buildFromTemplate(nativeMenus);
Menu.setApplicationMenu(menu);
