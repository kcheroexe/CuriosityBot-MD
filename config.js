import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import moment from 'moment-timezone' 
import { platform } from 'process'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

global.owner = [['527294888993', 'Creador', true], ['5492266466080', 'Colaborador', true], ['593968585383'], ['51992004117'], ['5492266613038'], ['573106040746'], ['50576390682'], ['5217294888993'], ['50558124470'], ['929972576']]

global.animxscans = ['400359205']
global.suittag = ['994400359205']
global.mods = []
global.prems = []

global.packname = '× Stickers V2\ngithub.com/CuriosityBot-MD\n\n× Script:\ngithub.com/AzamiJs/CuriosityBot-MD'
global.author = ' C\n U\n R\n  I\n O\n S\n  I\n T\n Y'
global.wm = '© CuriosityBot-MD'
global.wm2 = '𝗖𝗎𝗋𝗂𝗈𝗌𝗂𝗍𝗒 : 𝗕𝗈𝗍'
global.azami = 'Azami'
global.cb = 'CuriosityBot-MD'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '5217294888993'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
