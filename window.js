"use strict";
var util = require("util");
var $ = require("jquery");
var mongodb = require("mongodb");
function write(text) { window.document.getElementById("out").innerHTML += text + "\n"; }
window.document.addEventListener("DOMContentLoaded", function() {
    write(util.inspect(process.versions));
    var mc = new mongodb.MongoClient();
    mc.connect("mongodb://localhost")
        .then(function(db) {
            return db.authenticate("foo", "bar")
                .then(function() { return db.command({ connectionStatus : 1 }); })
                .then(function(status) { write(util.inspect(status)); });
        })
        .catch(function(err) { write(util.inspect(err) + "\n" + err.stack); });
});
