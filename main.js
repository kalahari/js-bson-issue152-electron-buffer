"use strict";
var electron = require("electron");
electron.app.on("ready", function () {
    var window = new electron.BrowserWindow({ height: 500, width: 600 });
    window.loadURL("file://" + __dirname + "/window.html");
    window.on("closed", function () { electron.app.quit(); });
});
