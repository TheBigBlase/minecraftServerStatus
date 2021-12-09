"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("reflect-metadata");
var discord_js_1 = require("discord.js");
var discordx_1 = require("discordx");
var settings_json_1 = require("../settings.json");
var child_process_1 = require("child_process");
var client = new discordx_1.Client({
    simpleCommand: {
        prefix: "!"
    },
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
    ],
    // If you only want to use global commands only, comment this line
    botGuilds: [function (client) { return client.guilds.cache.map(function (guild) { return guild.id; }); }],
    silent: true
});
client.once("ready", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // scan port + set status
            // init permissions; enabled log to see changes
            return [4 /*yield*/, client.initApplicationPermissions(true)];
            case 1:
                // scan port + set status
                // init permissions; enabled log to see changes
                _a.sent();
                // uncomment this line to clear all guild commands,
                // useful when moving to global commands from guild commands
                //  await client.clearApplicationCommands(
                //    ...client.guilds.cache.map((g) => g.id)
                //  );
                console.log("AAAAAAA");
                return [4 /*yield*/, getPlayerNumber()];
            case 2:
                _a.sent();
                console.log("Bot started");
                return [2 /*return*/];
        }
    });
}); });
function run() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // with cjs
                // await importx(__dirname + "/{events,commands}/**/*.{ts,js}");
                // with ems
                return [4 /*yield*/, getPlayerNumber()];
                case 1:
                    // with cjs
                    // await importx(__dirname + "/{events,commands}/**/*.{ts,js}");
                    // with ems
                    _a.sent();
                    client.login(settings_json_1.token !== null && settings_json_1.token !== void 0 ? settings_json_1.token : ""); // provide your bot token
                    return [2 /*return*/];
            }
        });
    });
}
function getPlayerNumber() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            (0, child_process_1.exec)("sudo forged command list | grep '......../.\' ", function (error, stdout) {
                if (error) {
                    console.error("issue in getPlayerNumber()", error);
                    console.log("what happend");
                }
                console.log(stdout);
                console.log("ici");
            });
            console.log("wtf");
            return [2 /*return*/];
        });
    });
}
