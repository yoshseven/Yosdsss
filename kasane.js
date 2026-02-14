/*//ESSA BASE FOI CONSTRUÍDA, NO INTUITO DE OBTER A MELHOR PERFORMANCE DE SEUS BOT, NÃO UMA BASE PÚBLICA ENTT NAO VAZEM E NEM VENDAM SEM A MINHA AUTORIZAÇÃO
 ® COPYRIGHT BY DYLAN MODZ*/
const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, jidNormalizedUser,generateWAMessageFromContent, proto, logger, makeInMemoryStore, getContentType, INativeFlowMessage, downloadMediaMessage, prepareWAMessageMedia } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, fetch, getBase64, createExif, writeExifImg, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, garticArchives, whatMusicAr, enigmaArchive, quizFutebol, getpc, supre, wait, getExtension, generateMessageID, vyroEngine, getGroupAdmins, getMembros, emoji, sendPoll, getRandom, banner2, banner3, temporizador, chyt, kyun, TimeCount, simih, botoff, colors, os, arcloud, addFilter, isFiltered, ytdl, psycatgames, MultiDownload, AssemblyAI, obeso, countDays, timeDate, Limit_CMD, capitalizeFirstLetter, shuffle, pushnames, formatNumber, formatNumberDecimal, awaitMessage, listCommands, extractMetadata, extractDDD, extractStateFromNumber, extractStateFromDDD } = require('./configs/imports/consts.js');
// NORMALIZAR O LID //


function normalize(jid) {
return jid ? jidNormalizedUser(jid) : null;
};
// ================= FUNÇÃO NORMALIZAR =================
const normalizar = (alvo) => {
if (alvo?.includes('@lid') && membros_) {
return membros_.find(v => v.lid === alvo)?.jid || alvo;
}
return alvo;
};
const { linguagem, mess, getInfo, destrava, destrava2, tabela, namoro1, namoro2, tools, advices, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, ftmenu, vip, rgtake, muted, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, antispam, anotar, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, packname, getName, level2, chaves, grupos, aluguel } = require('./configs/imports/consts.js');


const { botoes, antipv, antipv2, antipv3, visualizarmsg, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, msgantipv1, msgantipv2, API_KEY_INVERTEXTO } = require("./configs/nescessario.json");

const { NomeDoBot, ownerName,nomecanal,
channeldl, prefix } = require('./configs/settings.json');

const { API_URL, API_URL_GLEY, API_URL2, group, API_KEY_KASANE, API_KEY_GLEY, API_KEY_KASANE2 } = require('./configs/config-all.json');

const { downloadVideo, downloadAudio, getVideoInfo, audioDir, videoDir } = require('./bunker/modulo_play/ytdl3')

const { audio_menu, bom_dia, boa_tarde, boa_noite, corno, qviado } = require('./configs/media/audios.json');

const { sendButton, sendListB } = require(`./bunker//funcoes/botoes.js`)

const { criarPagamentoPix, verificarPix } = require('./src/pix.js');
const { v4: uuidv4 } = require('uuid');

const API_KEY_TOKITO = "dylanteffy"

const API_KEY_BRONXYS = "Yosh7" 

const KEY_ZERO = "Pato444";

const revealmsg = JSON.parse(fs.readFileSync("./bunker/revealmsg.json"))
const FormData = require("form-data");
const { fundo1, fundolevel, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau, suruba, minado_bomb, thumbnail, imgsigma, imgbeta, imgbaiano, imgbaiana, imgcarioca, imglouco, imglouca, imgsafada, imgsafado, imgmacaco, imgmacaca, imgputa, rnksigma, rnkbeta, rnkbaiano, rnkbaiana, rnkcarioca, rnklouco, rnklouca, rnksafada, rnksafado, rnkmacaco, rnkmacaca, rnkputa } = require("./configs/links_img.json");

const II = "```";


const path = require('path');

var numerodono_ofc = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "");

process.on('uncaughtException', function (err) {
console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
console.error(err.stack);
});

const getallcases = () => {
findindex = fs.readFileSync("kasane.js").toString().match(/case\s+'(.+?)'/g)
cstt = []
for(i of findindex) {
cstt.push(i.split(`'`)[1])
}
return cstt
}

const allCases = getallcases();

const getSimilarity = require(`./src/similaridade.js`)

const rmLetras = (txt) => {
return txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

const similarityCmd = (txt) => {
getsmlrt = getSimilarity(allCases, txt)
if(rmLetras(getsmlrt.nome).includes(`nao encontrado`)) return [{comando: getsmlrt.nome, porcentagem: getsmlrt.porcentagem}]
return [{comando: prefix+getsmlrt.nome, porcentagem: Number(getsmlrt.porcentagem).toFixed(1)}]
}
// ABAIXO: INÍCIO DE CONEXÃO

async function startkasane() {

module.exports = kasane = async(upsert, kasane, qrcode) => {
async function startFunctionNaga() {
const nmrdn_dono2 = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";

for (const info of upsert?.messages || []) {
 const msgTimestamp = info.messageTimestamp || (info.message?.messageTimestamp) || Math.floor(Date.now() / 1000);
if (global.startTime && msgTimestamp < global.startTime) {
continue;
};
const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');
const isStatus = from.endsWith('@broadcast');

const VRF_JSON_GRUPO = fs.existsSync(`./bunker/database/grupos/activation_gp/${from}.json`) ? true : false;

if(VRF_JSON_GRUPO) {
var jsonGp = JSON.parse(fs.readFileSync(`./bunker/database/grupos/activation_gp/${from}.json`));
}

if(VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType){
switch(info.messageStubType){
case 29:
await delay(1000);
await kasane.sendMessage(info.key.remoteJid, {text: `*@${info.messageStubParameters[0].split("@")[0]}* foi promovido(a) ao cargo de adminstrador do grupo por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break

case 30:
await delay(1000);
await kasane.sendMessage(info.key.remoteJid, {text: `O(a) adminstrador(a) *@${info.messageStubParameters[0].split("@")[0]}* foi rebaixado(a) à membro comum por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break
}
}

if(!info.message) return;
if(upsert.type == "append") return;
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';

if(visualizarmsg) {
await kasane.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

global.prefix;
global.blocked;


// ================= FUNÇÃO NORMALIZAR =================
const normalizar = (alvo) => {
if (alvo?.includes('@lid') && membros_) {
return membros_.find(v => v.lid === alvo)?.jid || alvo;
}
return alvo;
};
//==============(BODY)================\\

var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || info.message?.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || info.message?.editedMessage?.message?.protocolMessage?.editedMessage?.imageMessage?.caption || info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || JSON.parse(info.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson || '{}')?.id ||
 info?.text || '';

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const args = body.trim().split(/ +/).slice(1);

const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./bunker/database/grupos/activation_gp/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./bunker/database/grupos/activation_gp/${from}.json`) && !jsonGp[0].multiprefix) {var prefix = setting.prefix} else if(!isGroup) {var prefix = setting.prefix};

var isCmd = body.trim().startsWith(prefix);

const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");

//======================================\\

try {var groupMetadata = isGroup ?await kasane.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

let senderRaw = info?.key?.participantPn || info?.key?.senderPn || info?.key?.participant || info?.key?.remoteJid || kasane?.user?.id;// fallback bot

const sender = jidNormalizedUser(senderRaw);
const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(' ') + 1);

const botNumber = await kasane.user.id.split(':')[0]+'@s.whatsapp.net';
const argss = body.split(/ +/g);
const testat = body;
const ants = body;

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const isnit = nit.includes(sender) 

const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

//======================================\\

const nmrdn = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit

const numerodono = [`${nmrdn}`, `${numero_dono1}@s.whatsapp.net`, `${numero_dono2}@s.whatsapp.net`, `${numero_dono3}@s.whatsapp.net`, `${numero_dono4}@s.whatsapp.net`, `${numero_dono5}@s.whatsapp.net`, `${numero_dono6}@s.whatsapp.net`]

//=====================================\\
//===============OPEN-CLOSE-GP==============\\
/*
const { openclosegp, saveOpenCloseGP, rgGroupOCfunc, getGroupOpenCloseFunc, addOpenCloseGP, rmOpenCloseGP, isIDopenCloseGP, ABRIR_E_FECHAR_GRUPO, getLastOpenCloseGP } = require("./bunker/abrir-fechar-grupo/index.js")
*/
//==================ADS-FUNC=================\\

const { ads, saveADS, addGroupInAds, getGroupAds, addAds, isIDads, rmAds, adsFunc, adsStartList, addAdminAds, getAdminAds, rmAdminAds, existAdminAds } = require("./bunker/mensagens programadas/ads system.js")

//==================HORÁRIOS=================\\
/*
const { paidHours, savePaid, addGroupInPaid, getGroupInPaid, getIDinPaid, addPaid, rmPaid, isIDinPaid, groupLinkPaid, paidSGL, addGroupLinkInPaid, getGroupLinkFromPaidID, getInfoPaidGroupLink, rmGroupLinkInPaid } = require("./bunker/horarios/paid hours.js")*/

//=================> Funções de Grupo 🥋

const dirGroup = `./bunker/database/grupos/activation_gp/${from}.json`

const nescj = "./configs/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{
name: groupName,
groupId: from, 
x9: false, 
antiimg: false, 
antivideo: false,
antiaudio: false, 
antisticker: false,
antidoc: false,
antictt: false,
antiloc: false, 
antilinkgp: false,
antilinkhard: false, 
antilinkeasy: false, 
antifake: false, 
antiporn: false,
Odelete: false, 
antispam: false, 
antinotas: false, 
anticatalogo: false, 
visuUnica: false, 
registrarFIGUS: false, 
soadm: false, 
listanegra: [], 
advertir: [], 
prefixos: [`${setting.prefix}`],
advertir2: [], 
legenda_estrangeiro: "0",
legenda_documento: "0", 
legenda_video: "0",
legenda_imagem: "0", 
multiprefix: false, 
ausentes: [], 
ANTI_DDD: {
active: false,
listaProibidos: []
},
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
legendasaiu: "Olá #numerodele#, infelizmente você saiu do grupo: #nomedogp#.Sentiremos sua falta por aqui. ",
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
legendasaiu: 0
}],
simi1: false, 
autosticker: false, 
autoresposta: false,
jogos: false, 
level: false,
bangp: false, 
modo_rpg: false
}]
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./bunker/database/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

//=====(ADMS/DONO/ETC..CONST)=======\\

const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono =
  sender === nmrdn ||
  sender === `${numero_dono1}@s.whatsapp.net` ||
  sender === `${numero_dono2}@s.whatsapp.net` ||
  sender === `${numero_dono3}@s.whatsapp.net` ||
  sender === `${numero_dono4}@s.whatsapp.net` ||
  sender === `${numero_dono5}@s.whatsapp.net` ||
  sender === `${numero_dono6}@s.whatsapp.net` ||
  isBot || isnit || issupre || ischyt;

dfndofc = setting.ownerNumber+"@s.whatsapp.net"

const DonoOficial = dfndofc.includes(sender) 
global.vipUsers = ["5544998336782@s.whatsapp.net"];
const isVip = vip.map(i => i.id).includes(sender) || SoDono

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial

const isListaBrancaG = nescessario.listabrancaG.includes(sender)

const isBanned = ban.includes(sender)

const isVisualizar = nescessario.visualizarmsg


const COOLDOWN_UID = 24 * 60 * 60 * 1000
const DB_PATH = './bunker/database/cooldown_uid.json'

function loadCooldown() {
  if (!fs.existsSync(DB_PATH)) return {}
  return JSON.parse(fs.readFileSync(DB_PATH))
}

function saveCooldown(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2))
}
const isVerificado = nescessario.verificado

const isWelcomePrivate = nescessario.welcomepv

const isAudioMenu = nescessario.menu_audio

const isAntiPv = nescessario.antipv 

const isAntiPv2 = nescessario.antipv2

const isAntiPv3 = nescessario.antipv3

const isBotoff = nescessario.botoff

const listanegraG = nescessario.listanegraG

const listabrancaG = nescessario.listabrancaG

const isAnticall = nescessario.anticall

const TOKEN_GPT = nescessario.TOKEN_GPT

const isCmdVip = nescessario.cmd_vip

const isBlockCmdG = nescessario.blockCmdG

const isButtons = nescessario.botoes

const isCargo = SoDono ? "Meu Mestre." : isGroupAdmins ? "Adminstrador.": "Membro Comum."

const isChVip = isVip ? "✅": "❌"

//============(FUNÇÕES)============\\

// Versão detalhada
const jogosArray = Array.isArray(joguinhodavelhajs) ? joguinhodavelhajs : [];
const isJoguin = jogosArray.includes(sender);

const isAutodown = isGroup ? dataGp[0].autodown : undefined;

const isAntiImg = isGroup ? dataGp[0].antiimg : undefined

const isLimitCmd = isGroup ? dataGp[0]?.Limitar_CMD : undefined

const isAntiVid = isGroup ? dataGp[0].antivideo : undefined

const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined

const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined

const Antidoc = isGroup ? dataGp[0].antidoc : undefined

const isAntiCtt = isGroup ? dataGp[0].antictt : undefined

const Antiloc = isGroup ? dataGp[0].antiloc : undefined

const isAntiDDD = isGroup ? dataGp[0].ANTI_DDD.active : undefined

const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined

const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined

const isAntiLinkEasy = isGroup ? dataGp[0].antilinkeasy : undefined

const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined

const isAntifake = isGroup ? dataGp[0].antifake : undefined

const IS_DELETE = nescessario.Odelete

const So_Adm = isGroup ? dataGp[0].soadm : undefined

const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined

const ADVT = isGroup ? dataGp[0].advertir: undefined

const ADVT2 = isGroup ? dataGp[0].advertir2: undefined

const isx9 = isGroup ? dataGp[0].x9 : undefined

const isMultiP = isGroup ? dataGp[0].multiprefix : undefined

const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined

const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined

const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined

const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined

const isSimi = isGroup ? dataGp[0].simi1 : undefined

const isAutofigu = isGroup ? dataGp[0].autosticker : undefined

const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined

const isModobn =isGroup ? dataGp[0].jogos : undefined

const isLevelingOn = isGroup ? dataGp[0].level : undefined

const isBanchat = isGroup ? dataGp[0].bangp : undefined

const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined

const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined

const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined

const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined

const isModoRPG = isGroup ? dataGp[0].modo_rpg : undefined

//============(VERIFICADOS)============\\

if(isVerificado) {
//verificado whatsapp
var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}}
//selo black
var seloblk = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: {"contactMessage": {"displayName": `👑 YURI MODZ DOMINA 👑`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;👑 YURI MODZ DOMINA 👑,;;;\nFN:👑 YURI MODZ DOMINA 👑,\nitem1.TEL;waid=${botNumber.split('@')[0]}:${botNumber.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
} else {
var seloctt = info
var seloblk = info
}

// FUNCAO DA TRAVA 

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: `Yuka modz 👑`
}
}
}

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

const getJid = async (idRaw, from) => {
try {
const idBase = idRaw.replace(/@/g, "").trim();
const jidCompleto = `${idBase}@s.whatsapp.net`;
const lidCompleto = `${idBase}@lid`;
const metadata = await kasane.groupMetadata(from);
const participants = metadata.participants;
const participante = participants.find(
(p) =>
p.jid === idRaw ||
p.lid === idRaw ||
p.jid === jidCompleto ||
p.lid === lidCompleto
);
return participante ? participante.jid : idRaw;
} catch (e) {
return idRaw;
}
};

const menc_prt_raw = info.message?.extendedTextMessage?.contextInfo?.participant;
const menc_prt = menc_prt_raw ? await getJid(menc_prt_raw, from) : null;
const menc_jid_raw = args?.join(" ").replace(/@/g, "").trim();
const menc_jid = menc_jid_raw ? await getJid(menc_jid_raw, from) : null;
const menc_jid2_raw = info.message?.extendedTextMessage?.contextInfo?.mentionedJid;
const menc_jid2 = menc_jid2_raw?.length > 0 ? await Promise.all(menc_jid2_raw.map((id) => getJid(id, from))) : [];
const sender_ou_n = q.includes("@") ? menc_jid : sender;
const numero_digitado = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") : null;
const mrc_ou_numero = numero_digitado ? await getJid(numero_digitado, from) : menc_prt;
const menc_os2 = q.includes("@") ? menc_jid : menc_prt;
const marc_tds = await (async () => {
if (q.includes("@")) {
return menc_jid;
} else if (q.length > 6 && !q.includes("@")) {
const numero_digitado = q
.replace(new RegExp("[()+-/ +/]", "gi"), "")
.trim();
return await getJid(numero_digitado, from);
} else {
return menc_prt;
}
})();
const menc_prt_nmr = await (async () => {
if (q.length > 12 && !q.includes("@")) {
const numero_digitado = q
.replace(new RegExp("[()+-/ +/]", "gi"), "")
.trim();
return await getJid(numero_digitado, from);
} else {
return menc_prt;
}
})();
////////////////////////////////////////////


const advPath = path.join(__dirname, "bunker/advertencias.json");

function loadAdv() {
  if (!fs.existsSync(advPath)) fs.writeFileSync(advPath, "[]");
  return JSON.parse(fs.readFileSync(advPath));
}

function saveAdv(data) {
  fs.writeFileSync(advPath, JSON.stringify(data, null, 2));
}

var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss');

if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa noite'
var tempo2 = '𝐁𝐨𝐚 𝐧𝐨𝐢𝐭𝐞'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
var tempo2 = '𝐁𝐨𝐦 𝐝𝐢𝐚'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
var tempo2 = '𝐁𝐨𝐚 𝐭𝐚𝐫𝐝𝐞'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
var tempo2 = '𝐁𝐨𝐚 𝐧𝐨𝐢𝐭𝐞'
}

if(!isCmd && info.key.fromMe) return

const reply = async (text = " ") => {

if (typeof text !== "string") {
text = String(text);
}

const contextInfo = {
isForwarded: true,
forwardingScore: 1,

// 🔥 SOMENTE ISSO MOSTRA "Acessar canal"
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channeldl,
newsletterName: NomeDoBot,
serverMessageId: "",
}
};

return kasane.sendMessage(
from,
{
text,
contextInfo,
},
{ quoted: info }
);
};
async function sendUrlText(id, textCaption, title, desc, imageUrl, linkAcess, quotedThis) {
await kasane.sendMessage(id, {text: textCaption, contextInfo: {externalAdReply: {title: title, body: desc, thumbnail: await getBuffer(imageUrl), mediaType: 1, sourceUrl: linkAcess}}}, {quoted: quotedThis})
}

async function replyWithNewsletter(text, options = {}, quotedThis = info) {
await kasane.sendMessage(from, {text: text, contextInfo: options}, {quoted: quotedThis})
.catch(async(error) => {
await kasane.sendMessage(from, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇɴᴄᴀᴍɪɴʜᴀʀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴘʀé-ᴅᴇғɪɴɪᴅᴀ ɴᴀ ғᴜɴçãᴏ.*"}, {quoted: selo});
});
}

async function replyWithReaction(text, options = {}, quotedThis = info) {
await kasane.sendMessage(from, options)
await kasane.sendMessage(from, {text: text}, {quoted: quotedThis})
.catch(async(error) => {
await kasane.sendMessage(from, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇɴᴄᴀᴍɪɴʜᴀʀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴘʀé-ᴅᴇғɪɴɪᴅᴀ ɴᴀ ғᴜɴçãᴏ.*"}, {quoted: selo});
});
}

const sendSticker = async(ChatID, FileN, quotedThis) => {
await kasane.sendMessage(ChatID, {sticker: {url: FileN}}, {quoted: selo})
.catch(async(error) => {
await kasane.sendMessage(from, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇɴᴠɪᴀʀ ᴏ sᴛɪᴄᴋᴇʀ.*"}, {quoted: selo});
});
}

const sendImage = async(ChatID, FileN) => {
await kasane.sendMessage(ChatID, {image: {url: FileN}}, {quoted: selo}).catch(async(error) => {
await kasane.sendMessage(from, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇɴᴠɪᴀʀ ᴀ ɪᴍᴀɢᴇᴍ.*"}, {quoted: selo});
})
}

const sendText = async(ChatID, texto) => {
await kasane.sendMessage(ChatID, {text: texto}).catch(async(error) => {
await kasane.sendMessage(from, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇɴᴄᴀᴍɪɴʜᴀʀ ᴏ ᴛᴇxᴛᴏ ᴘʀé-ᴅᴇғɪɴɪᴅᴏ ɴᴀ ғᴜɴçãᴏ.*"}, {quoted: selo});
});
}

const sendMentions = async(local, teks) => {
memberr = []; vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy) {for(zn of vz.split(' ')) {if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')}};
await kasane.sendMessage(local, {text: teks.trim(), mentions: memberr}, {quoted: selo}).catch(async(e) => {
await kasane.sendMessage(from, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇɴᴄᴀᴍɪɴʜᴀʀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴘʀé-ᴅᴇғɪɴɪᴅᴀ ɴᴀ ғᴜɴçãᴏ.*"}, {quoted: selo});
});
}

const mentions = async(teks = '', mb, id) => {
(id == null || id == undefined || id == false) ? await kasane.sendMessage(from, {text: teks.trim(), mentions: mb}) : await kasane.sendMessage(from, {text: teks.trim(), mentions: mb}, {quoted: selo})
}
	
const mention = async(teks = '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy) { 
for(zn of vz.split(' ')) {
if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}
}
await kasane.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}).catch(async(e) => {
await kasane.sendMessage(from, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇɴᴄᴀᴍɪɴʜᴀʀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴘʀé-ᴅᴇғɪɴɪᴅᴀ ɴᴀ ғᴜɴçãᴏ.*"}, {quoted: selo});
});
}

const mentionSemQuoted = async(teks) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
await kasane.sendMessage(from, {text: teks.trim(), mentions: memberr}).catch(async(e) => {
await kasane.sendMessage(from, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇɴᴄᴀᴍɪɴʜᴀʀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴘʀé-ᴅᴇғɪɴɪᴅᴀ ɴᴀ ғᴜɴçãᴏ.*"}, {quoted: selo});
});
}


const mencionarIMG = async(teks = '', FileN, thisQuoted = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy) { 
for(zn of vz.split(' ')) {
if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net');
}
}
await kasane.sendMessage(from, {image: {url: FileN}, caption: teks.trim(), mentions: memberr}, {quoted: thisQuoted}).catch(async(error) => {
await kasane.sendMessage(from, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇɴᴄᴀᴍɪɴʜᴀʀ ᴀ ɪᴍᴀɢᴇᴍ ᴇ ᴏ ᴛᴇxᴛᴏ ᴘʀé-ᴅᴇғɪɴɪᴅᴏs ɴᴀ ғᴜɴçãᴏ.*"}, {quoted: selo});
});
}

const reagir = async (idgp, emj) => {
await kasane.sendMessage(idgp, {react: {text: emj, key: info.key}});
}

const verificarN = async(sla) => {
const [result] = await kasane.onWhatsApp(sla)
if(result == undefined) {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴜsᴜáʀɪᴏ ɴãᴏ é ᴇxɪsᴛᴇɴᴛᴇ ɴᴏ ᴡʜᴀᴛsᴀᴘᴘ*")
} else {
reply(`${sla} Número inserido é existente no WhatsApp com o id: ${result.jid}`)
}
}

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
await kasane.sendMessage(from, {text: mess.markingAllMember()}, {quoted: selo});
if(IS_DELETE) {
setTimeout(async() => {
await kasane.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
kasane.groupParticipantsUpdate(from, [sender], "remove");
}
}

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {
if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return
if(type == 'imageMessage') {
var pack = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${ownerName}`
var author2 = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ ❪☁️ฺ࣭࣪͘ꕸ▸ 𝐆𝐫𝐮𝐩𝐨:\n• ↳ ${groupName}`
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(kasane, from, owgi, selo, { packname:pack, author:author2})
DLT_FL(encmediaa)
}
if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)) {
var pack = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${ownerName}`
var author2 = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ ❪☁️ฺ࣭࣪͘ꕸ▸ 𝐆𝐫𝐮𝐩𝐨:\n• ↳ ${groupName}`
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(kasane, from, owgi, selo, { packname:pack, author:author2})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch((error) => {
console.log(error)
})
}

var nmrdnofc1 = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./bunker/database/func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.indexOf(`@${nmrdnofc1}`) >= 0) {
const tabelin = JSON.parse(fs.readFileSync(`./bunker/database/func/afk/afk-@${nmrdnofc1}.json`));
await kasane.sendMessage(from, {text: mess.absenceRecordOwner(ownerName, tabelin)}, {quoted: selo})
}
}

if(isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
blue = [] 
for (i of menc_jid2) {
if(groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i)))
}
if(blue.length == 0) return
big = [] 
for ( i of blue) {
big.push(groupAdmins[i])
}
blr = []
for ( i = 0; i < big.length; i++) {
blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])])
}
for ( i of blr) {
var blak = i
}
await mention(mess.absenceRecordAdmin(blak))
}

if(isBotGroupAdmins && isGroupAdmins && body === "apaga") {
if(!menc_prt) return
await kasane.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}});
}

if(!isVip && nescessario.cmd_vip.includes(command)) return reply(mess.onlyVipUser());


//========================================\\

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !SoDono) return

if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return

if(isBotoff && !SoDono) return

//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, async(err) => {
let media = fs.readFileSync(asw)
await kasane.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply(mess.error())
}
}

//=========(isQuoted/consts)=============\\

const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

// ANTI DDD - LISTA COMPLETA DE DDDs EXISTENTES NO BRASIL!
const arrayDDDs = [11, 12 ,13 ,14 ,15, 16, 17, 18, 19, 21, 22, 24 , 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55,61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74,75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89,91, 93, 94, 95, 96, 97, 98, 99];

//////BLOCK CMD///////

//(CREDITOS AO KAUAN GAY)\\
//==========(REGISTRO)==================\\

if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴄᴏᴍᴀɴᴅᴏ ғᴏɪ ʙʟᴏǫᴜᴇᴀᴅᴏ, ᴇɴᴛʀᴇ ᴇᴍ ᴄᴏɴᴛᴀᴛᴏ ᴄᴏᴍ ᴀ ᴀᴅᴍɪɴɪsᴛʀᴀçãᴏ.*")

///BLOCK CMD GLOBAL///
///(CRÉDITOS AO @VictorGabriel)///
if(isBlockCmdG.includes(command) && !SoDono) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏʟá, ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴇsᴛá ʙʟᴏǫᴜᴇᴀᴅᴏ ᴘᴀʀᴀ *ᴜsᴏ ɢʟᴏʙᴀʟ*, ᴏᴜ sᴇᴊᴀ, ᴛᴏᴅᴏs ᴏs ᴜsᴜáʀɪᴏs ᴇsᴛãᴏ ɪᴍᴘᴏssɪʙɪʟɪᴛᴀᴅᴏs ᴅᴇ ᴜsᴀʀ ᴇʟᴇ.\ɴ–\ɴ• ᴇɴᴛʀᴇ ᴇᴍ ᴄᴏɴᴛᴀᴛᴏ ᴄᴏᴍ ᴍᴇᴜ ᴘʀᴏᴘʀɪᴇᴛáʀɪᴏ ᴘᴀʀᴀ sᴀʙᴇʀ ᴏ ᴍᴏᴛɪᴠᴏ.*")

////FIMMMMMMMMM/////

///// FIMMMMMMMMMMMMM /////

const dattofc = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
const hourofc = moment.tz('America/Sao_Paulo').format('HH:mm:ss')

const MessageType = 
type == 'audioMessage' ? 'Áudio' :
type == 'stickerMessage' ? 'Figurinha' :
type == 'imageMessage' ? 'Imagem' :
type == 'videoMessage' ? 'Vídeo' :
type == 'documentMessage' ? 'Documento' :
type == 'contactMessage' ? 'Contato' :
type == 'locationMessage' ? 'Localização' :
info.message?.reactionMessage?.text ? `Reação '${info.message.reactionMessage.text}'` :
'Texto';

const userMsg =
info.message?.conversation ||
info.message?.extendedTextMessage?.text ||
"";
if (!isGroup && isCmd)
console.log(colors.red(`
╭┈ׅׄ┉ׅ-━━ׁ۫━፝֟━̷━𑁁━፝֟━̷━ׁ۫━━┉ֹׅ┉ׅ━━ׁ۫━፝֟━̷━𑁁━┉┈ׅ╮
╠━━ׁ۫━፝֟━̷━𑁁━💧━𑁁━፝֟━̷━ׁ۫━━╮
┃࣪ 🤖 Comando-privado:${colors.white(MessageType)}
┃࣪ 👤 Nome:${colors.white(pushname)}
┃࣪ 📱 ID:${colors.white(sender.split("@")[0])}
┃࣪ 📆 Data & Hora:${colors.white(hourofc + " " + dattofc)}
┃࣪ 💬 Mensagem:${colors.white(userMsg)}
╠━━ׁ۫━፝֟━̷━𑁁━💧━𑁁━፝֟━̷━ׁ۫━━╯
╰ׅ┈ׅׄ┉ׅ━ׁ۫━፝֟━̷━𑁁━━𑁁━፝֟━̷━ׁ۫━━┉┉ׅ━━ׁ۫━፝֟━̷━𑁁━┉ֹׅ┈ׅ╯ׄ
`));
if (!isGroup && !isCmd && !info.key.fromMe)
console.log(colors.red(`
╭┈ׅׄ┉ׅ-━━ׁ۫━፝֟━̷━𑁁━፝֟━̷━ׁ۫━━┉ֹׅ┉ׅ━━ׁ۫━፝֟━̷━𑁁━┉┈ׅ╮
╠━━ׁ۫━፝֟━̷━𑁁━💧━𑁁━፝֟━̷━ׁ۫━━╮
┃࣪ ✉️ Mensagem-privado:${colors.white(MessageType)}
┃࣪ 👤 Nome:${colors.white(pushname)}
┃࣪ 📱 ID:${colors.white(sender.split("@")[0])}
┃࣪ 📆 Data & Hora:${colors.white(hourofc + " " + dattofc)}
┃࣪ 💬 Mensagem:${colors.white(userMsg)}
╠━━ׁ۫━፝֟━̷━𑁁━💧━𑁁━፝֟━̷━ׁ۫━━╯
╰ׅ┈ׅׄ┉ׅ━ׁ۫━፝֟━̷━𑁁━━𑁁━፝֟━̷━ׁ۫━━┉┉ׅ━━ׁ۫━፝֟━̷━𑁁━┉ֹׅ┈ׅ╯ׄ
`));
if (!isCmd && isGroup && !info.key.fromMe)
console.log(colors.red(`
╭┈ׅׄ┉ׅ-━━ׁ۫━፝֟━̷━𑁁━፝֟━̷━ׁ۫━━┉ֹׅ┉ׅ━━ׁ۫━፝֟━̷━𑁁━┉┈ׅ╮
╠━━ׁ۫━፝֟━̷━𑁁━💧━𑁁━፝֟━̷━ׁ۫━━╮
┃࣪ ✉️ Mensagem-grupo:${colors.white(MessageType)}
┃࣪ 👥 Grupo:${colors.white(groupName)}
┃࣪ 📆 Data & Hora:${colors.white(hourofc + " " + dattofc)}
┃࣪ 💬 Mensagem:${colors.white(userMsg)}
╠━━ׁ۫━፝֟━̷━𑁁━💧━𑁁━፝֟━̷━ׁ۫━━╯
╰ׅ┈ׅׄ┉ׅ━ׁ۫━፝֟━̷━𑁁━━𑁁━፝֟━̷━ׁ۫━━┉┉ׅ━━ׁ۫━፝֟━̷━𑁁━┉ֹׅ┈ׅ╯ׄ
`));
if (isCmd && isGroup)
console.log(colors.red(`
╭┈ׅׄ┉ׅ-━━ׁ۫━፝֟━̷━𑁁━፝֟━̷━ׁ۫━━┉ֹׅ┉ׅ━━ׁ۫━፝֟━̷━𑁁━┉┈ׅ╮
╠━━ׁ۫━፝֟━̷━𑁁━💧━𑁁━፝֟━̷━ׁ۫━━╮
┃࣪ 🤖 Comando-grupo: ${colors.white(MessageType)}
┃࣪ 👥 Grupo: ${colors.white(groupName)}
┃࣪ 📆 Data & Hora: ${colors.white(hourofc + " " + dattofc)}
┃࣪ 💬 Mensagem: ${colors.white(userMsg)}
╠━━ׁ۫━፝֟━̷━𑁁━💧━𑁁━፝֟━̷━ׁ۫━━╯
╰ׅ┈ׅׄ┉ׅ━ׁ۫━፝֟━̷━𑁁━━𑁁━፝֟━̷━ׁ۫━━┉┉ׅ━━ׁ۫━፝֟━̷━𑁁━┉ֹׅ┈ׅ╯ׄ
`));

// ----- SISTEMA AUTOMÁTICO DE VERIFICAÇÃO DE ALUGUEL ----- //

setInterval(async () => {
const filePath = "./bunker/database/grupos/aluguel/aluguel.json";

if (!fs.existsSync(filePath)) return;

let data = JSON.parse(fs.readFileSync(filePath, "utf8"));
if (!Array.isArray(data)) data = [];

const agora = moment().tz("America/Sao_Paulo");

for (let item of data) {
if (!item.ativo || !item.expira) continue;

const expira = moment(item.expira);

// Se expirou, enviar aviso
if (agora.isAfter(expira)) {
item.avisos = (item.avisos || 0) + 1;

const msgAviso = `
💧 *• ɪɴꜰᴏʀᴍᴀᴄ̧ᴏ̃ᴇꜱ ᴅᴏ ᴀʟᴜɢᴜᴇʟ •*

📛 ᴏ ᴀʟᴜɢᴜᴇʟ ᴅᴇꜱᴛᴇ ɢʀᴜᴘᴏ ᴇꜱᴛᴀ́ ᴠᴇɴᴄɪᴅᴏ!

💬 ʀᴇɴᴏᴠᴇ ᴄᴏᴍ ᴏ ᴅᴏɴᴏ:
👉 wa.me/5569993184370

📌 *ᴅᴀᴅᴏꜱ ᴅᴏ ɢʀᴜᴘᴏ:*
• ɢʀᴜᴘᴏ: *${item.nomeGrupo || "Desconhecido"}*
• ᴇxᴘɪʀᴏᴜ ᴇᴍ: ${expira.format("DD/MM/YYYY HH:mm")}
• ᴀᴠɪꜱᴏꜱ ᴇɴᴠɪᴀᴅᴏꜱ: *${item.avisos}/2*
• sᴛᴀᴛᴜs: *${item.ativo ? "ᴀᴛɪᴠᴏ" : "ɪɴᴀᴛɪᴠᴏ"}*

⏳ ᴛᴇᴍᴘᴏ ᴅᴇꜱᴅᴇ ᴏ ᴠᴇɴᴄɪᴍᴇɴᴛᴏ:
*${agora.diff(expira, "minutes")} ᴍɪɴᴜᴛᴏs*

💧 ʀᴇɴᴏᴠᴇ ᴀɴᴛᴇꜱ ᴅᴏ ᴘʀóxɪᴍᴏ ᴀᴠɪsᴏ!
`;

await kasane.sendMessage(item.groupId, { text: msgAviso });

// Se atingiu limite → sair e remover grupo
if (item.avisos >= 2) {
await kasane.sendMessage(item.groupId, {
text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 *ᴏ ᴘʀᴀᴢᴏ ꜱᴇ ᴇꜱᴛᴏᴜʀᴏᴜ, ᴇᴜ ᴠᴏᴜ ꜱᴀɪʀ ᴅᴏ ɢʀᴜᴘᴏ.**",
});

await kasane.groupLeave(item.groupId);

// Remover grupo da lista
data = data.filter(g => g.groupId !== item.groupId);
}
}
}

// Salvar tudo de volta
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}, 60 * 1000);

// ========= || Jogo da Velha || ======== \\
async function startJogoDaVelha() {
// Garante que as variáveis sejam arrays
const jogosArray = Array.isArray(joguinhodavelhajs) ? joguinhodavelhajs : [];
const jogosArray2 = Array.isArray(joguinhodavelhajs2) ? joguinhodavelhajs2 : [];

if (jogosArray2.includes(from) || jogosArray.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
const arrNum = ["1","2","3","4","5","6","7","8","9"];

if (fs.existsSync(`./bunker//tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);

if (budy == "Cex") return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴡʜʏ*");

// Aceitar desafio
if (["s","sim","ok"].includes(budy.toLowerCase())) {
if (boardnow.O == sender.replace("@s.whatsapp.net","")) {
if (boardnow.status) return;
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./bunker//tictactoe/db/${from}.json`, JSON.stringify(boardnow,null,2));
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n—\n🚨 Explicação: _O(a) jogador '@${boardnow.X}' está denominada com emoji 'X', já o 2° jogador(a) '@${boardnow.O}' está denominado(a) com emoji de círculo._\n• Começou a disputa! Quem irá decidir a primeira jogada é você: *'@${boardnow.turn=="X"?boardnow.X:boardnow.O}*'\n—\n${matrix[0][0]}${matrix[0][1]}${matrix[0][2]}\n${matrix[1][0]}${matrix[1][1]}${matrix[1][2]}\n${matrix[2][0]}${matrix[2][1]}${matrix[2][2]}`;
mention(chatAccept);
}
} 
// Recusar desafio
else if (["n","não","no"].includes(budy.toLowerCase())) {
if (boardnow.O == sender.replace("@s.whatsapp.net","")) {
if (boardnow.status) return reply(`O jogo começou ou já existe uma partida aberta neste grupo! Caso ninguém esteja jogando ou houve um erro, use '${prefix}resetvelha'.`);
DLT_FL(`./bunker//tictactoe/db/${from}.json`);
mention(`Nossa @${boardnow.X}, infelizmente o seu oponente não aceitou o desafio! ❌😕`);

// Limpa arrays
jogosArray.length = 0;
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha.json', JSON.stringify(jogosArray));

jogosArray2.length = 0;
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha2.json', JSON.stringify(jogosArray2));
}
}

// Jogada no tabuleiro
if (arrNum.includes(cmde)) {
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda.`);
if ((boardnow.turn=="X"?boardnow.X:boardnow.O) != sender.replace("@s.whatsapp.net","")) return;

const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;

if (moving.isWin) {
if (moving.winner == "SERI") {
reply(`Ocorreu um empate! 😨`);
DLT_FL(`./bunker//tictactoe/db/${from}.json`);
jogosArray.length = 0;
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha.json', JSON.stringify(jogosArray));
jogosArray2.length = 0;
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha2.json', JSON.stringify(jogosArray2));
return;
}

const winnerJID = moving.winner=="O"?moving.O:moving.X;
const looseJID = moving.winner=="O"?moving.X:moving.O;

setTimeout(()=>{
if(fs.existsSync(`./bunker//tictactoe/db/${from}.json`)) {
DLT_FL(`./bunker//tictactoe/db/${from}.json`);
reply(`O *jogo da velha* foi cancelado por falta de movimentação ou não aceitação do desafio.`);
}
jogosArray.length = 0;
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha.json', JSON.stringify(jogosArray));
jogosArray2.length = 0;
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha2.json', JSON.stringify(jogosArray2));
},300000); // 5 minutos

await mention(`Parabéns *@${winnerJID}*, você ganhou a partida! 🎉`);
DLT_FL(`./bunker//tictactoe/db/${from}.json`);
jogosArray.length = 0;
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha.json', JSON.stringify(jogosArray));
jogosArray2.length = 0;
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha2.json', JSON.stringify(jogosArray2));
} else {
mention(`*『 🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️ 』*\n—\n*@${boardnow.X}* VS @${boardnow.O}\n• Agora é a vez do jogador(a): @${moving.turn=="X"?moving.X:moving.O}\n—\n${matrix[0][0]}${matrix[0][1]}${matrix[0][2]}\n${matrix[1][0]}${matrix[1][1]}${matrix[1][2]}\n${matrix[2][0]}${matrix[2][1]}${matrix[2][2]}`);
}
}
}
}
}

// LOADING

async function carregamento() {
txt1 = `_🔥⃟᮪〭۬̇〬⃟˖ꪶ𝙾𝚋𝚝𝚎𝚗𝚍𝚘 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜ꦽꦼ̷১_\n_『ʟᴏᴀᴅɪɴɢ』:`
var carre = [
`${txt1}ʟᴏᴀᴅɪɴɢ〘█▒▒▒▒▒▒▒▒▒〙10%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘███▒▒▒▒▒▒▒〙35%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘█████▒▒▒▒▒〙51%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘███████▒▒▒〙62%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘████████▒▒〙80%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘██████████〙100%`,
`_᭥ꩌ゚໋ @${sender.split("@")[0]}_\n_• Pesquisa realizada, Aguarde um pouco para ser enviado.._`]
let { key } = await kasane.sendMessage(from, {text: `_᭥ꩌ゚໋ Ok @${sender.split("@")[0]}_\n_• Obtendo os resultados de sua pesquisa.._`, mentions: [sender]}, {quoted: selo})
for (let i = 0; i < carre.length; i++) {
await kasane.sendMessage(from, {text: carre[i], mentions: [sender], edit: key });
}
}

async function loading() {
txt1 = `_🔥⃟᮪〭۬̇〬⃟˖ꪶ𝙾𝚋𝚝𝚎𝚗𝚍𝚘 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜ꦽꦼ̷১_\n_『ʟᴏᴀᴅɪɴɢ』:`
var carre = [
`${txt1}〘█▒▒▒▒▒▒▒▒▒▒▒〙10%_`,
`${txt1}〘████▒▒▒▒▒▒▒▒〙30%_`,
`${txt1}〘███████▒▒▒▒▒〙50%_`,
`${txt1}〘█████████▒▒▒〙70%_`,
`${txt1}〘███████████▒〙90%_`,
`${txt1}〘████████████〙100%_`,
`_᭥ꩌ゚໋ @${sender.split("@")[0]}_\n_• Pesquisa realizada, Aguarde um pouco para ser enviado.._`]
let { key } = await kasane.sendMessage(from, {text: `_᭥ꩌ゚໋ Ok @${sender.split("@")[0]}_\n_• Obtendo os resultados de sua pesquisa.._`, mentions: [sender]}, {quoted: selo})
for (let i = 0; i < carre.length; i++) {
await kasane.sendMessage(from, {text: carre[i], mentions: [sender], edit: key });
}
}

const largeNumber = (value) => {
if(Number(value) < 0) return "O número precisa ser ≥ 0"
nmr = `${Number(value).toFixed(0)}`
if(nmr.length >= 4) {
const existPoint = (nmr) => {
if(Number(nmr) !== 0) return "." + `${nmr}`
return ``
}
if(nmr.length >= 4) txt = nmr.slice(0, (nmr.length - 3)) + existPoint(nmr.slice((nmr.length - 3), (nmr.length - 2))) + "K"
if(nmr.length >= 7) txt = nmr.slice(0, (nmr.length - 6)) + existPoint(nmr.slice((nmr.length - 6), (nmr.length - 5))) + "M"
if(nmr.length >= 10) txt = nmr.slice(0, (nmr.length - 9)) + existPoint(nmr.slice((nmr.length - 9), (nmr.length - 8))) + "B"
if(nmr.length >= 13) txt = nmr.slice(0, (nmr.length - 12)) + existPoint(nmr.slice((nmr.length - 12), (nmr.length - 11))) + "T"
} else { txt = nmr }
return txt
}

// NAMORO
if(budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(namoro2[C14].pedido + "@s.whatsapp.net")
namoro1[C12].namorados = true
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro1.push({usu1: sender, usu2: namoro2[C14].pedido, namorados: true, idgp: from, hora: hourofc, data: dattofc})
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./bunker/database/func/namoro2.json", JSON.stringify(namoro2))
mention(`🥳 Felicitações @${namoro1[C12].usu1.split('@')[0]}! O (a) seu grande amor, @${sender.split('@')[0]}, aceitou o seu pedido de namoro.\nSeu par pode ser consultado no comando: ${prefix}minhadupla`)
}
}

if(budy2.toLowerCase() === "n" || budy2.toLowerCase().replace("ã", "a") === "nao") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(`${namoro2[C14].pedido}@s.whatsapp.net`)
mention(`Sinto muito @${namoro1[C12].usu1.split('@')[0]}! O (a) @${sender.split('@')[0]} não te ama, deve está confuso(a) ou não preparado(a) e por isso não aceitou o seu pedido de namoro. 😦`)
namoro1.splice(C12, 1)
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./bunker/database/func/namoro2.json", JSON.stringify(namoro2))
}
}

startJogoDaVelha()

if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 
link_dgp = await kasane.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʟɪɴᴋ ᴅᴏ ɴᴏssᴏ ɢʀᴜᴘᴏ, ɴãᴏ ɪʀᴇɪ ʀᴇᴍᴏᴠᴇʀ.. *")
if(IS_DELETE) {
setTimeout(() => {
kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
kasane.groupParticipantsUpdate(from, [sender], 'remove')
}
}

const groupIdscount = [];
for(let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

// MUTAR USUÁRIO 
 if(!muted.some(i => i.grupo === from) && isGroup) {
muted.push({grupo: from, usus: []});
fs.writeFileSync("./bunker/database/grupos/muted.json", JSON.stringify(muted, null, 2));
}

if(isGroup && muted[muted.map(i => i.grupo).indexOf(from)].usus.includes(sender)) {
await kasane.sendMessage(from, {text: `🤫 Hmm @${sender.split("@")[0]}, achou que ia passar despercebido? Achou errado lindo(a)! Você está sendo removido por enviar mensagem, sendo que você está mutado neste grupo.`, mentions: [sender]}, {quoted: selo});
await kasane.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
await kasane.groupParticipantsUpdate(from, [sender], 'remove');
// Após a remoção do participante mutado, automaticamente ele vai ser removido da lista de usuários mutados do grupo. 🤍
muted[muted.map(i => i.grupo).indexOf(from)].usus.splice(sender);
fs.writeFileSync("./bunker/database/grupos/muted.json", JSON.stringify(muted, null, 2));
}


// VERDADE OU DESAFIO\\

//const fs = require('fs');
//const path = require('path');

// Caminho para o arquivo JSON
const filevddf = path.join(__dirname, './bunker/vdd-dsf/verdade-desafio.json');
//const filevddf = require('./bunker/vdd-dsf/verdade-desafio.json')
// Função para ler o arquivo JSON
function lerDados() {
try {
const data = fs.readFileSync(filevddf, 'utf8');
return JSON.parse(data);
} catch (err) {
console.error('Erro ao ler o arquivo JSON', err);
return { verdade: [], desafio: [] };
}
}

// Função para salvar no arquivo JSON
function salvarDados(dados) {
try {
fs.writeFileSync(filevddf, JSON.stringify(dados, null, 2), 'utf8');
console.log('Dados salvos com sucesso!');
} catch (err) {
console.error('Erro ao salvar os dados no arquivo JSON', err);
}
}

// Função para escolher aleatoriamente uma pergunta ou desafio
function getRandomElement(arr) {
return arr[Math.floor(Math.random() * arr.length)];
}

// Função principal do jogo
function jogoVerdadeOuDesafio(escolha) {
const dados = lerDados();

if (escolha.toLowerCase() === 'verdade') {
const pergunta = getRandomElement(dados.verdade);
// console.log(`Verdade: ${pergunta}`);
// return pergunta
reply(pergunta)
} else if (escolha.toLowerCase() === 'desafio') {
const desafio = getRandomElement(dados.desafio);
console.log(`Desafio: ${desafio}`);
return desafio
} else {
console.log('Escolha inválida! Digite "verdade" ou "desafio".');
}
}

// Função para adicionar uma nova pergunta ou desafio
function adicionarPerguntaOuDesafio(tipo, conteudo) {
const dados = lerDados();

if (tipo.toLowerCase() === 'verdade') {
dados.verdade.push(conteudo);
console.log('Nova pergunta de verdade adicionada!');
} else if (tipo.toLowerCase() === 'desafio') {
dados.desafio.push(conteudo);
console.log('Novo desafio adicionado!');
} else {
console.log('Tipo inválido! Use "verdade" ou "desafio".');
return;
}

salvarDados(dados);
}

// Exemplo de como o sistema pode ser usado:

// Jogar uma rodada de Verdade ou Desafio
//jogoVerdadeOuDesafio('verdade');
//jogoVerdadeOuDesafio('desafio');

// Adicionar nova pergunta ou desafio
//adicionarPerguntaOuDesafio('verdade', 'Você já teve um caso com alguém mais velho?');
//adicionarPerguntaOuDesafio('desafio', 'Dance como se ninguém estivesse assistindo e mande um vídeo.');







//====(CONTADOR-DE-MENSAGENS)=======\\
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = countMessage[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./configs/media/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
aparelho: adivinha, 
figus: figus
})
fs.writeFileSync('./configs/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
aparelho: adivinha
}]
})
fs.writeFileSync('./configs/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

// PARA LIMPAR OS DADOS DOS USUÁRIOS QUE JÁ SAIU DO GRUPO...
async function ClearMembersInactive() {
var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
CNT1 = []; for ( i of groupMembers) {CNT1.push(i.id)} 
CNT = []; for ( i of RD_CNT) {
if(!CNT1.includes(i.id)) CNT.push(i)}
for ( i of CNT) {
RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1)}
fs.writeFileSync("./configs/media/countmsg.json", JSON.stringify(countMessage, null, 2))
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//=========(EVAL-EXECUÇÕES)=========\\

if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
return kasane.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return kasane.sendMessage(from, {text: bang}, {quoted: selo})
}
kasane.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
} catch(error) {
return reply(String(error));
}
}

if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}

if(body != undefined) { /* Créditos: @Matheus */
if(!JSON.stringify(pushnames).includes(botNumber)) {
pushnames.push({id: botNumber, nick: NomeDoBot});
fs.writeFileSync("./bunker/database/usuarios/users.json", JSON.stringify(pushnames, null, 2));
}
if(!JSON.stringify(pushnames).includes(sender)) {
pushnames.push({id: sender, nick: pushname});
fs.writeFileSync("./bunker/database/usuarios/users.json", JSON.stringify(pushnames, null, 2));
} else {
pushnames[pushnames.map(i => i.id).indexOf(sender)].nick = pushname
fs.writeFileSync("./bunker/database/usuarios/users.json", JSON.stringify(pushnames, null, 2));
}
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return await kasane.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo});
if(dataGp[0].legenda_imagem != "0") {
await kasane.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: selo});
}
if(IS_DELETE) {
setTimeout(async() => {
await kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await kasane.groupParticipantsUpdate(from, [sender], 'remove');
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return await kasane.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo});
await kasane.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: selo});
if(IS_DELETE) {
setTimeout(async() => {
await kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await kasane.groupParticipantsUpdate(from, [sender], 'remove');
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return await kasane.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo})
if(dataGp[0].legenda_documento != "0") {
await kasane.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: selo}) 
}
if(IS_DELETE) {
setTimeout(async() => {
await kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await kasane.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'kwai', 'playdoc', 'playvid').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && !isListaBrancaG && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await kasane.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʟɪɴᴋ ᴅᴏ ɴᴏssᴏ ɢʀᴜᴘᴏ, ɴãᴏ ɪʀᴇɪ ʀᴇᴍᴏᴠᴇʀ..*");
}
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(async() => {
await kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
await kasane.groupSettingUpdate(from, 'announcement');
setTimeout(async() => {
await kasane.groupSettingUpdate(from, 'not_announcement');
}, 1200);
if(!JSON.stringify(groupMembers).includes(sender)) return
await kasane.groupParticipantsUpdate(from, [sender], 'remove');
}

if(isUrl(PR_String) && isAntiLinkEasy && !isGroupAdmins && !isListaBrancaG && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await kasane.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʟɪɴᴋ ᴅᴏ ɴᴏssᴏ ɢʀᴜᴘᴏ, ɴãᴏ ɪʀᴇɪ ᴅᴇʟᴇᴛᴀʀ..*");
}
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(async() => {
await kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
}

// ANTI NOTAS FAKES ==================>
if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi);
if(verificar && budy.length < 100) return
if(IS_DELETE) {
setTimeout(async() => {
await kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await kasane.groupParticipantsUpdate(from, [sender], 'remove');
}

//FINALZIN ===========================>
function remover(id, usu) {
kasane.groupParticipantsUpdate(id, [usu], "remove")}
//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return await kasane.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo});
if(dataGp[0].legenda_video == "0") {
await kasane.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: selo});
} else {
await kasane.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: selo});
}
if(IS_DELETE) {
setTimeout(async() => {
await kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await kasane.groupParticipantsUpdate(from, [sender], 'remove');
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return await kasane.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo});
await kasane.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: selo});
if(IS_DELETE) {
setTimeout(async() => {
await kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await kasane.groupParticipantsUpdate(from, [sender], 'remove');
}

//========(ANTI_LIGAR)========\\
if(!isGroup && isAnticall) {
kasane.ws.on('CB:call', async (B) => {
var msgcallblock = `./bunker/database/func/call-msg_block-${sender}.json`
if(!fs.existsSync(msgcallblock)) {
fs.writeFileSync(msgcallblock, JSON.stringify(mess.antiCalls(), null, 2));
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock));
if(B.content[0].tag == 'offer') {
await kasane.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(async() => { 
await kasane.updateBlockStatus(B.content[0].attrs['call-creator'], "block");
DLT_FL(msgcallblock);
})
}
}
})
}


/* ANTIPV1 - Este anti pv bloqueia aqueles que encaminham mensagem no pv do bot.. */
var USUARIOS_BLOQ = []
if(isAntiPv && !USUARIOS_BLOQ.includes(sender)) {
if(!isGroup && !SoDono && !isnit && !isVip){ 
await sleep(2500)
reply(msgantipv1.replace('#nome#', pushname))
setTimeout(async () => {
await kasane.updateBlockStatus(sender, 'block')
}, 2000)
}
USUARIOS_BLOQ.push(sender);
} 

/* ANTIPV2 - Vai floodar o privado do usuário que encaminhar a mensagem no privado.. */
var MSG_ANTPV2_ENC = []
if(!isGroup && !isVip && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && isAntiPv2 && !MSG_ANTPV2_ENC.includes(sender)) {
MSG_ANTPV2_ENC.push(sender);
return reply(msgantipv2)
}

/* ANTIPV3 - Ignora todos os que falam ou usam os comandos no privado, exceto user vip e o proprietário atual do bot. */
if(!isGroup && !isVip && !SoDono && !info.key.fromMe && isAntiPv3) return

//====================================\\
var i9 = countMessage.map(i => i.groupId).indexOf(from)
var idgrupo = groupIdscount.indexOf(from)

var idusu = numbersIds?.indexOf(sender)

if(body != undefined && !info.message?.reactionMessage?.text && !JSON.stringify(level2).includes(sender) && isGroup) {
level2.push({id: sender, nick: pushname, level: 1, contador: 0, block: false})
fs.writeFileSync("./bunker/database/usuarios/leveling.json", JSON.stringify(level2))
}

if(body != undefined && !info.message?.reactionMessage?.text && JSON.stringify(level2).includes(sender) && level2[level2.map(i => i.id).indexOf(sender)].block == false && isGroup && isLevelingOn) {
AB = level2.map(i => i.id).indexOf(sender)
level2[AB].contador += 1
level2[AB].nick = pushname
fs.writeFileSync("./bunker/database/usuarios/leveling.json", JSON.stringify(level2))
switch(level2[AB].contador) {
case 100: case 200: case 300: case 400: case 500: case 600: case 700: case 800: case 900: case 1200: case 1500: case 1800: case 2100: case 2700: case 3300: case 3900: case 4500: case 5000: case 5500: case 6500: case 7500: case 9000: case 10500: case 12000: case 13500: case 15000: case 20000: case 25000: case 30000: case 35000: case 40000: case 50000: case 60000: case 70000: case 80000: case 90000: case 100000: case 150000: case 200000: case 300000: case 400000: case 500000: case 1000000: case 1500000: case 2000000: case 5000000:
var newlevel = level2[AB].contador + 1
if(newlevel < 100) newpatente = "Bronze I"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I️"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III️"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV️"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V️"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I️"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II️"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III️"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I️"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "Legancy X"
if(newlevel >= 10000000) newpatente = "Veterano"
level2[AB].level += 1
fs.writeFileSync("./bunker/database/usuarios/leveling.json", JSON.stringify(level2));
try {u = await kasane.profilePictureUrl(sender)} catch(erro) {u = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg'}
gerarBuffer = await getBuffer(u); photoUser = await upload(gerarBuffer)
await kasane.sendMessage(from, {image: {url: API_URL+`/api/canvas/levelup?foto=${photoUser}&nome=${getName(sender) || "Usuário(a)"}&lvb=${level2[level2.map(i => i.id).indexOf(sender)].level - 1}&lva=${level2[level2.map(i => i.id).indexOf(sender)].level}&fundo=${fundolevel}`}, caption: `🎉 Parabéns *@${sender.split("@")[0]}*, você acaba de subir de level.\n• Novo level foi alcançado por completar *${level2[AB].contador} XP.*\nNova patente desbloqueada, você agora é *${newpatente}*`, mentions: [sender]}, {quoted: selo});
break
case 10000000:
BC = level2.map(i => i.id).indexOf(sender)
level2[BC].level += 1
fs.writeFileSync("./bunker/database/usuarios/leveling.json", JSON.stringify(level2))
try {u2 = await kasane.profilePictureUrl(sender)} catch(erro) {u2 = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg'}
gerarBuffer2 = await getBuffer(u2); photoUser2 = await upload(gerarBuffer2)
await kasane.sendMessage(from, {image: {url: API_URL+`/api/canvas/levelup?foto=${photoUser2}&nome=${getName(sender)}&lvb=${level2[level2.map(i => i.id).indexOf(sender)].level - 1}&lva=${level2[level2.map(i => i.id).indexOf(sender)].level}&fundo=${fundolevel}`}, caption: `🎉 Parabéns *@${sender.split("@")[0]}*, você completou com sucesso 10M de XP, possuindo assim o título de *Veterano 🎩*\n–\n• Todos os níveis daqui pra frente serão contados a cada 1M de XP... Nossa equipe se orgulha de coroar você, depois de tanto esforço e desempenho, após muito tempo de uso de nosso sistemas. ${tempo}!`, mentions: [sender]}, {quoted: selo});
break
case 10000000: case 11000000: case 12000000: case 13000000: case 14000000: case 15000000: case 16000000: case 17000000: case 18000000: case 19000000: case 20000000: case 21000000: case 22000000: case 23000000: case 24000000: case 25000000: case 26000000: case 27000000: case 28000000: case 29000000: case 30000000:
CD = level2.map(i => i.id).indexOf(sender)
level2[CD].level += 1
fs.writeFileSync("./bunker/database/usuarios/leveling.json", JSON.stringify(level2))
try {u3 = await kasane.profilePictureUrl(sender)} catch(erro) {u3 = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg'}
gerarBuffer3 = await getBuffer(u3); photoUser3 = await upload(gerarBuffer3)
await kasane.sendMessage(from, {image: {url: API_URL+`/api/canvas/levelup?foto=${photoUser3}&nome=${getName(sender)}&lvb=${level2[level2.map(i => i.id).indexOf(sender)].level - 1}&lva=${level2[level2.map(i => i.id).indexOf(sender)].level}&fundo=${fundolevel}`}, caption: `*🎉 LEGANCY LEVEL UP! 🎖️*\nMeus parabéns querido usuário veterano *@${sender.split("@")[0]}*.\n• Sua experiência acaba de levar a quantidade total de XP à triplicar. Agora você tem *${level2[CD].contador} XP*\n–\n*Obs:* Sua patente atual continua sendo a mesma, pois você chegou à maior.`, mentions: [sender]}, {quoted: selo});
break
}
}

const VerificarJSON = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}

const RG_SCOINS = JSON.parse(fs.readFileSync("./bunker/database/func/coins.json"));

const isModoCoins = isGroup ? dataGp[0].isModoCoins : undefined

const isModoaluguel = isGroup ? dataGp[0]. isModoaluguel : undefined

const ID_G_COINS = RG_SCOINS.findIndex(i => i.grupo === from)
const ID_USU_COINS = RG_SCOINS[ID_G_COINS]?.usus?.findIndex(i => i.id === sender);

function CoinsUpdate(index){
fs.writeFileSync("./bunker/database/func/coins.json", JSON.stringify(index, null, 2) + "\n")
}

const SYSTEM_COIN = {

AdicionarCoins: async function(user, quant) {
CoinsUser_ = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === user);
if(!CoinsUser_) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ(ᴀ) ᴜsᴜáʀɪᴏ(ᴀ) ɴᴜɴᴄᴀ ᴇɴᴠɪᴏᴜ ᴜᴍᴀ ᴍᴇɴsᴀɢᴇᴍ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ! ᴇɴᴛãᴏ ɴãᴏ é ᴘᴏssíᴠᴇʟ ᴀᴅɪᴄɪᴏɴᴀʀ ᴏᴜ ᴛʀᴀɴsғᴇʀɪʀ ᴄᴏɪɴs à ᴜᴍ ᴍᴇᴍʙʀᴏ ǫᴜᴇ ɴãᴏ ᴘᴏssᴜí ʀᴇɢɪsᴛʀᴏ!*");
CoinsUser_["coins"] += quant;
CoinsUpdate(RG_SCOINS);
},

transferCoins: async function(transferidor, recebidor, quantidade) {
DM_ = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === transferidor)
DM_2 = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === recebidor)
if((DM_?.coins || 0) < quantidade) return mention(`A quantidade que você tem é inferior a que você deseja transferir ao usuário: @${recebidor.split("@")[0]}`)
if(!DM_2) return mention(`O(a) usuário(a) '@${recebidor.split("@")[0]}' nunca enviou uma mensagem neste grupo! Então não é possível adicionar ou transferir coins à um usuário não registrado no meu sistema!`);
DM_["coins"] -= quantidade;
DM_2["coins"] += quantidade;
CoinsUpdate(RG_SCOINS);
},

Adicionar_2: async function(A, Q, X, X2) {
DM_ = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === A);
if(!DM_) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ(ᴀ) ᴜsᴜáʀɪᴏ(ᴀ) ɴᴜɴᴄᴀ ᴇɴᴠɪᴏᴜ ᴜᴍᴀ ᴍᴇɴsᴀɢᴇᴍ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ! ᴇɴᴛãᴏ ɴãᴏ é ᴘᴏssíᴠᴇʟ ᴀᴛᴜᴀʟɪᴢᴀʀ ᴀ ᴄᴀʀᴛᴇɪʀᴀ!*");
DM_["coins"] += Q;
DM_[X] = X2
CoinsUpdate(RG_SCOINS);
},

RemoverCoins: async function(user, quant) {
CoinsUser = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === user)
if(!CoinsUser) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ(ᴀ) ᴜsᴜáʀɪᴏ(ᴀ) ɴᴜɴᴄᴀ ᴇɴᴠɪᴏᴜ ᴜᴍᴀ ᴍᴇɴsᴀɢᴇᴍ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ! ᴇɴᴛãᴏ ɴãᴏ é ᴘᴏssíᴠᴇʟ ʀᴇᴍᴏᴠᴇʀ ᴄᴏɪɴs ᴅᴇ ᴍᴇᴍʙʀᴏ ɪɴᴀᴛɪᴠᴏ ǫᴜᴇ ɴãᴏ ᴘᴏssᴜí ʀᴇɢɪsᴛʀᴏ!*");
if((CoinsUser?.coins || 0) < quant) return reply(`O usuário possuí '${CoinsUser?.coins} N-Coins', este valor não é suficiente para realizar a transação de remoção de ${quant}.`);
CoinsUser["coins"] -= quant;
CoinsUpdate(RG_SCOINS);
},

VerificarCampo: function(user, parameter) {
return RG_SCOINS[ID_G_COINS].usus.find(i => i.id === user)[parameter] || null;
},

}

if(isModoCoins && isGroup && isBotGroupAdmins && VRF_JSON_GRUPO && !info.key.fromMe) {

if(!RG_SCOINS.some(i => i.grupo === from)) {
RG_SCOINS.push({grupo: from, usus: [{id: sender, coins: 0, data: 0, chances: {cassino: 0, minerar: 0}}]})
CoinsUpdate(RG_SCOINS);
} else if(RG_SCOINS.some(i => i.grupo === from) && !RG_SCOINS[ID_G_COINS]?.usus?.some(i => i?.id === sender)) {
RG_SCOINS[ID_G_COINS].usus.push({id: sender, coins: 0, data: 0, chances: {cassino: 0, minerar: 0}})
CoinsUpdate(RG_SCOINS);
}

if(isCmd && !info.message?.reactionMessage?.text && dattofc != SYSTEM_COIN.VerificarCampo(sender, "data")) {
await mention(`${tempo}, usuário(a): @${sender.split('@')[0]}! Você ganhou *35 N-Coins* com a sua primeira interação do dia comigo! Você tem diversas chances de se divertir no grupo. 🤍💰`);
SYSTEM_COIN.Adicionar_2(sender, 35, "data", dattofc);
RG_US = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === sender);
Object.assign(RG_US.chances, {"cassino": 0, "minerar": 0});
CoinsUpdate(RG_SCOINS);
}
}

if(isGroup && fs.existsSync(`./bunker/database/grupos/games/anagrama/${from}.json`)){
let dataA = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/anagrama/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataA.palavraOriginal.slice(0,4).toUpperCase() && budy.toUpperCase() != dataA.palavraOriginal) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛá ᴘᴇʀᴛᴏ...*")
if(budy.toUpperCase() == dataA.palavraOriginal) {
await kasane.sendMessage(from, {text: `🎉 Parabéns *${pushname}*, você acertou o anagrama apresentado, como recompensa você acaba de ganhar 5 N-Coins.\nA palavra original era: *${dataA.resposta}*. Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}, {quoted: selo})
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./bunker/database/grupos/games/anagrama/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./bunker/database/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
dataAB = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/anagrama/${from}.json`))
kasane.sendMessage(from, {text: `🤍😲 Decifre a palavra embaralhada abaixo, qual será a ordem correta?\n—\n• Anagrama: *${shuffle(dataAB.palavraOriginal)}*\n• Dica: ${dataAB.dica}`}, {quoted: selo})
}, 5000)
}}

if(isGroup && fs.existsSync(`./bunker/database/grupos/games/quiz-animais/${from}.json`)){
let dQ = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/quiz-animais/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dQ.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dQ.original) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛá ᴘᴇʀᴛᴏ*")
if(budy.toUpperCase() == dQ.original) { 
await kasane.sendMessage(from,{text: `🎉 Parabéns *${pushname}*, você acertou, como recompensa você acaba de ganhar 5 N-Coins! O animal era: *${dQ.resposta}*.\n• Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}, {quoted: selo}) 
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./bunker/database/grupos/games/quiz-animais/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./bunker/database/grupos/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
dataQA = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/quiz-animais/${from}.json`))
wew = await getBuffer(dataQA.foto)
await kasane.sendMessage(from, {image: wew, caption: `🤔 Pergunta: ${dataQA.question}`}, {quoted: selo})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./bunker/database/grupos/games/quiz-futebol/${from}.json`)){
let dQF = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/quiz-futebol/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dQF.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != dQF.resposta) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛá ᴘᴇʀᴛᴏ*")
if(budy.toUpperCase() == dQF.resposta) { 
await kasane.sendMessage(from,{text: `🎉 Parabéns *${pushname}*, você acertou, como recompensa você acaba de ganhar 5 N-Coins! O time era: *${dQF.resposta}*.\n• Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}, {quoted: selo}) 
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./bunker/database/grupos/games/quiz-futebol/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./bunker/database/grupos/games/quiz-futebol/${from}.json`, `${JSON.stringify(quizFutebol[Math.floor(Math.random() * quizFutebol.length)])}`)
dataQF = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/quiz-futebol/${from}.json`))
await kasane.sendMessage(from, {text: `💫⚽ 𝐐𝐔𝐈𝐙 𝐅𝐔𝐓𝐄𝐁𝐎𝐋 ⚽💫\n–\n*🗣️| Responda a pergunta mostrada abaixo:*\n• _${dataQF.pergunta}_`}, {quoted: selo})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./bunker/database/grupos/games/gartic/${from}.json`)){
let perg_gartic = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/gartic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == perg_gartic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != perg_gartic.resposta) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛá ᴘᴇʀᴛᴏ!*")
if(budy.toUpperCase() == perg_gartic.resposta) { 
await kasane.sendMessage(from,{text: `*DESCOBERTO!* Parabéns ${pushname} como recompensa você acaba de ganhar 5 N-Coins. Iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}, {quoted: selo}); 
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./bunker/database/grupos/games/gartic/${from}.json`);
setTimeout(async() => {
fs.writeFileSync(`./bunker/database/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[Math.floor(Math.random() * garticArchives.length)])}`)
let dataGartic2 = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/gartic/${from}.json`))
garticText = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}\n📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"\n🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${dataGartic2.imagem}`)
await kasane.sendMessage(from, {image: wew, caption: garticText}, {quoted: selo})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./bunker/database/grupos/games/enigma/${from}.json`)){
let enigmaData = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/enigma/${from}.json`))
if(budy.slice(0,4).toUpperCase() == enigmaData.respostaEne.slice(0,4).toUpperCase() && budy.toUpperCase() != enigmaData.respostaEne) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛá ᴘᴇʀᴛᴏ!*")
if(budy.toUpperCase() == enigmaData.respostaEne) { 
kasane.sendMessage(from,{text: `*ENIGMA RESOLVIDO!* Parabéns ${pushname}, como recompensa você acaba de ganhar 5 N-Coins.Iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}, {quoted: selo})
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./bunker/database/grupos/games/enigma/${from}.json`)	
setTimeout(async() => {
fs.writeFileSync(`./bunker/database/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[Math.floor(Math.random() * enigmaArchive.length)])}`)
enigmaD = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/enigma/${from}.json`))
enigmaTezt = `📜 - Resolva o seguinte enigma abaixo:\n–\n${enigmaD.charada}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)
await kasane.sendMessage(from, {image: wew, caption: enigmaTezt}, {quoted: selo})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./bunker/database/grupos/games/wmusic/${from}.json`)){
whatMusic = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/wmusic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == whatMusic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != whatMusic.resposta) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴛá ᴘᴇʀᴛᴏ ʜᴇɪɴ! ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ...*")
if(budy.toUpperCase() == whatMusic.resposta) { 
kasane.sendMessage(from,{text: `• Resposta Correta: *${whatMusic.resposta}*\nParabéns ${pushname}, como recompensa você acaba de ganhar 5 N-Coins. Iniciando o próximo jogo em 5 segundos!`}, {"mentionedJid": [sender]}, {quoted: selo}); fs.unlinkSync(`./bunker/database/grupos/games/wmusic/${from}.json`);
setTimeout(async() => {
fs.writeFileSync(`./bunker/database/grupos/games/wmusic/${from}.json`, `${JSON.stringify(whatMusicAr[Math.floor(Math.random() * whatMusicAr.length)])}`)
wmusic = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/wmusic/${from}.json`))
textM = `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡\n–\n${wmusic.trechoMusic}\n–\n🤔😱 Qual música pertence o trecho apresentado acima?\n• ${II}Dica:${II} ${wmusic.dica}`
await kasane.sendMessage(from, {text: textM}, {quoted: selo})
}, 5000)
}
}

if(isX9VisuUnica) {
if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nRevelando o vídeo na visualização única enviada.."
kasane.sendMessage(from,px)
} else {
var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nRevelando a imagem na visualização única enviada..."
kasane.sendMessage(from,px)
}}}

if (isx9 && type === "pinInChatMessage") {
duration = info.message?.messageContextInfo?.messageAddOnDurationInSecs;
fixedTime = (duration) => (duration === 0) ? "0" : (duration >= 30 * 24 * 60 * 60) ? "30d" : (duration >= 7 * 24 * 60 * 60) ? "7d" : (duration >= 24 * 60 * 60) ? "24h" : duration;
action = fixedTime(duration) === "0" ? 'desfixar uma mensagem' : `fixar uma mensagem por *${fixedTime(duration)}*`;
await kasane.sendMessage(from, {text: `O admin *@${sender.split("@")[0]}* acabou de ${action}.`, mentions: [sender]})
}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

if(isCmd && isBanned) return reply(mess.bannedUser())

const totalhit = JSON.parse(fs.readFileSync('./bunker/database/data/totalcmd.json'))
const CmdUsedBOT = () => {
totalhit[0].totalcmd += 1
fs.writeFileSync('./bunker/database/data/totalcmd.json', JSON.stringify(totalhit))
}
if (isCmd) CmdUsedBOT()

const reqcmd = JSON.parse(fs.readFileSync('./bunker/database/data/totalcmd.json'))

if (isGroup && isCmd && !isGroupAdmins && !SoDono && !isVip && dataGp[0]?.Limitar_CMD) {
var TEMPO_A = Math.floor(Date.now() / 1000) 
var ID_G = Limit_CMD.findIndex(i => i.idgp === from)
var ID_U = Limit_CMD[ID_G]?.ids.findIndex(i => i.id === sender)
if(!JSON.stringify(Limit_CMD).includes(from) || ID_G < 0 && ID_U < 0) {
Limit_CMD.push({idgp: from, ids: [{id: sender, tempo: TEMPO_A}]})
fs.writeFileSync("./bunker/database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
} else if(ID_G >= 0 && ID_U < 0) {
Limit_CMD[ID_G].ids.push({id: sender, tempo: TEMPO_A})
fs.writeFileSync("./bunker/database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}

if(ID_G >= 0 && ID_U >= 0) {
var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;
var TEMPO_M = TEMPO_A - TEMPO_D
var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60
if(TEMPO_M < TEMPO_D2) {
return reply(nescessario.TEMPO_DE_CMD.replaceAll("#tempocmd#", TimeCount(TEMPO_M)).replaceAll("#tempo#", TEMPO_D2))
} else {
Limit_CMD[ID_G].ids[ID_U].tempo = TEMPO_A
fs.writeFileSync("./bunker/database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}
}
}

kasane.sendImageAsSticker = async (jid, path, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await kasane.sendMessage(jid, { sticker: { url: buffer }, ...options})
return buffer
}

kasane.sendInteractiveTXT = async(idChat, mainText = '', footerText = '', quotedMessage = {}, buttonsParams = {}) => {
try {
await kasane.relayMessage(idChat, {interactiveMessage: {body: {text: mainText}, footer: {text: footerText}, contextInfo: quotedMessage, nativeFlowMessage: buttonsParams}}, {});
} catch(errorMessage) {
await reply(String(errorMessage));
}
}

kasane.sendIMG = async(imageDir, ChatID, TextM = '',contextMessageInfo = {}) => {
try {

await kasane.sendMessage(ChatID, {image:fs.readFileSync(imageDir), caption: TextM, contextInfo: contextMessageInfo}, {quoted: selo})

} catch(errorMessage) {
return reply(String(errorMessage));
}
 }




const PlayPath = './src/play-dados.json';


async function salvarLink(link, NomeMusica, LinkImage, numero) {
let dados = [];
try {
const conteudo = await fs.readFile(PlayPath, 'utf-8');
dados = JSON.parse(conteudo);
} catch (error) {
if (error.code !== 'ENOENT') {
console.error('Erro ao ler o arquivo:', error);
throw error;
}
}
const indice = dados.findIndex(item => item.numero === numero);

if (indice !== -1) {
dados[indice].link = link;
dados[indice].NomeMusica = NomeMusica;
dados[indice].LinkImage = LinkImage;
console.log('Link e Nome da Música atualizados para o usuário:', numero);
} else {
dados.push({ link, NomeMusica, LinkImage, numero });
console.log('Link, Nome da Música e número salvos com sucesso!');
}
await fs.writeFile(PlayPath, JSON.stringify(dados, null, 2));
}

async function resgatarLinks() {
if (fs.existsSync(PlayPath)) {
const conteudo = fs.readFileSync(PlayPath, 'utf-8');
const dados = JSON.parse(conteudo);
return dados;
} else {
console.log('Nenhum dado encontrado.');
return [];
}
}
async function buscarLink(numero) {
try {
const conteudo = await fs.readFile(PlayPath, 'utf-8');
const dados = JSON.parse(conteudo);
const usuario = dados.find(item => item.numero === numero);

if (usuario) {
return usuario;
} else {
console.log('Usuário não encontrado.');
return null;
}
} catch (error) {
if (error.code === 'ENOENT') {
console.log('Arquivo não encontrado.');
} else {
console.error('Erro ao ler o arquivo:', error);
}
return null;
}
}

async function bufferImg(imageUrl) {
const fileName = 'imagem.jpg';
const headers = {
'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
};
axios.get(imageUrl, { responseType: 'arraybuffer', headers }).then(async(response) => {
fs.writeFileSync(fileName, response.data);
kasane.sendMessage(from, {image: {url: fileName}}, {quoted: info});
}).catch((err) => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ!!*");
});
}



function uploadX(midia) {
return new Promise(async (resolve, reject) => {
try {
const { fromBuffer } = require("file-type");
const { ext } = await fromBuffer(midia);
const form = new FormData();
form.append("file", midia, "tmp." + ext);
fetch(`https://api.bronxyshost.com.br/api-bronxys/link_imagem?apikey=${API_KEY_BRONXYS}`, {
method: "POST",
body: form
}).then((response) => response.json())
.then((data) => {
resolve(data.link);
}).catch((error) => reject(error));
} catch (error) {
console.log(error);
reject(error);
}
});
} // FUNÇÃO PARA GERAR LINK DE IMAGEM

// ÍNICIO: CASES / COMANDOS COM PREFIXO:
switch(command) {
//INICIO DOS MENUS 
case 'menu': {

try {
await reagir(from, "💧");

// FOTO DO MENU
const mediaMenu = await prepareWAMessageMedia(
{ image: { url: "./bunker/database/data/media/images/menulist-image.jpg" } },
{ upload: kasane.waUploadToServer }
);

// LISTA PRINCIPAL
const listaMenus = {
title: "💠⃞ ᴍᴇɴᴜ-ʟɪsᴛᴀs ⃞💠",
sections: [
{
title: "💠⃞ ᴍᴇɴᴜs ᴅɪᴠᴇʀsᴏs ⃞💠",
highlight_label: "Yuka modz",
rows: [
{ header: "💠⃞  ᴍᴇɴᴜ-ᴘʀɪɴᴄɪᴘᴀʟ ⃞💠", title: "💠 ᴄᴏᴍᴀɴᴅᴏs ʙᴀsɪᴄᴏs ᴅᴏ ʙᴏᴛ. 💠", id: prefix + "menup" },
{ header: "💠⃞ ᴍᴇɴᴜ-ᴢᴏᴇɪʀᴀ ⃞💠", title: "💠 ᴊᴏɢᴏs ᴇ ʙʀɪɴᴄᴀᴅᴇɪʀᴀs ɪɴᴛᴇʀᴀᴛɪᴠᴀs. 💠", id: prefix + "menuzoas" },
{ header: "💠⃞ ᴄʀɪᴀᴅᴏʀ ⃞💠", title: "💠 ɪɴꜰᴏʀᴍᴀᴄ̧ᴏᴇꜱ ᴅᴏ ᴄʀɪᴀᴅᴏʀ 💠", id: prefix + "criador" },
{ header: "💠⃞ ᴀʟᴜɢᴜᴇʟ-ᴅᴏ-ʙᴏᴛ ⃞💠", title: "💠 ᴀʟᴜɢᴜᴇ ᴏ ʙᴏᴛ ᴇ sᴇᴊᴀ ғᴇʟɪᴢ 💠", id: prefix + "alugar" },
{ header: "💠⃞ ᴘᴇʀꜰɪʟ ⃞💠", title: "💠💠 ᴘᴇʀꜰɪs ᴇ ʙʀɪɴᴄᴀᴅᴇɪʀᴀs ɪɴᴛᴇʀᴀᴛɪᴠᴀs. 💠", id: prefix + "perfil" }, { header: "💠⃞ ᴍᴇɴᴜ-ᴄᴏɪɴs ⃞💠", title: "💠 sɪsᴛᴇᴍᴀ ᴅᴇ ᴄᴏɪɴs ᴇ ᴀᴠᴇɴᴛᴜʀᴀs. 💠💠", id: prefix + "menucoins" },
{ header: "💠⃞ ᴍᴇɴᴜ-ᴀʟᴛᴇʀᴀᴅᴏʀᴇs ⃞💠", title: "💠 ᴀʟᴛᴇʀᴀᴅᴏʀᴇs ᴅᴇ ᴀᴜᴅɪᴏs, ᴇᴛᴄ.. 💠", id: prefix + "menualteradores" },
{ header: "💠⃞ ᴍᴇɴᴜ-ʟᴏɢᴏs ⃞💠", title: "💠 ᴄʀɪᴀᴄᴀᴏ ᴅᴇ ʟᴏɢᴏs ᴘᴇʀsᴏɴᴀʟɪᴢᴀᴅᴀs. 💠", id: prefix + "menulogos" },
{ header: "💠⃞ ᴍᴇɴᴜ+18 ⃞💠", title: "💠 ꜰᴜɴᴄᴏᴇs +18 sᴏ ᴘʀᴀ ᴠɪᴘs 💠", id: prefix + "menu18" },
{ header: "💠⃞ ᴍᴇɴᴜ-ᴀᴅᴍ ⃞💠", title: "💠 ᴍᴇɴᴜ ᴘᴀʀᴀ ᴀᴅᴍɪɴs ᴅᴏ ɢʀᴜᴘᴏ 💠", id: prefix + "menuadm" },
{ header: "💠⃞ ᴍᴇɴᴜ-ᴅᴏɴᴏ ⃞💠", title: "💠 ꜰᴜɴᴄᴏᴇs ᴘᴀʀᴀ ᴏ ᴅᴏɴᴏ ᴅᴏ ʙᴏᴛ 💠", id: prefix + "menudono" }
]
}
]
};

// BOTÕES
const botoes = [
{
name: "single_select",
buttonParamsJson: JSON.stringify(listaMenus)
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 𝙲𝙰𝙽𝙰𝙻 𝚄𝙿𝙳𝙰𝚃𝙴 💧*",
url: "https://whatsapp.com/channel/0029Vb6iu7T90x2tf7oM7J0d",
merchant_url: "https://whatsapp.com/channel/0029Vb6iu7T90x2tf7oM7J0d"
})
}
];

const textok = `╭┈ׅׄ┉ׅ-━━ׁ۫━፝֟━̷━𑁁━𑁁━፝֟━̷━ׁ۫━━┉ֹׅ┈ׅ╮
╠━━ׁ۫━፝֟━̷━𑁁━💧━𑁁━፝֟━̷━ׁ۫━━╮
┃࣪ ┃֪࣪𝆺᮫𝅥💧✿ິ̸𝙽𝙾𝙼𝙴: ${NomeDoBot}
┃ ┃֪࣪𝆺᮫𝅥💧✿ິ̸𝚄𝚂𝙴𝚁: ${pushname}
┃࣪ ┃֪࣪𝆺᮫𝅥💧✿ິ̸𝙿𝚁𝙴𝙵𝙸𝚇𝙾: [ ${prefix} ]
┃࣪ ┃֪࣪𝆺᮫𝅥💧✿ິ̸𝙷𝙾𝚁𝙰𝚁𝙸𝙾: ${hora}
╠━━ׁ۫━፝֟━̷━𑁁━💧━𑁁━፝֟━̷━ׁ۫━━╯
╰ׅ┈ׅׄ┉ׅ━━ׁ۫━፝֟━̷━𑁁━━𑁁━፝֟━̷━ׁ۫━━┉ֹׅ┈ׅ╯
💧⃞ ᴇsᴄᴏʟʜᴀ ᴀ ᴏᴘçãᴏ ᴀʙᴀɪxᴏ 💧`;

const carouselMessage = {
cards: [
{
header: { hasMediaAttachment: true, imageMessage: mediaMenu.imageMessage },
headerType: "IMAGE",
body: { text: textok },
footer: { text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚: © ⏤͟͟͞͞Yuka modz *" },
nativeFlowMessage: { buttons: botoes }
}
]
};

await kasane.relayMessage(
from,
{
interactiveMessage: {
contextInfo: {
participant: from,
quotedMessage: { conversation: "💧" }
},
body: { text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 ᴄᴀʀʀᴇɢᴀᴅᴏ ᴍᴇɴᴜ ɪɴᴛᴇʀᴀᴛɪᴠᴏ 💧*" },
carouselMessage
}
},
{}
);

} catch (error) {
console.error("Erro ao executar o comando 'menu':", error);
await kasane.sendMessage(from, { text: mess.error() }, { quoted: selinContact });
}

break;
}


case 'menup':
await reagir(from, "💧");
if(isAudioMenu) {
audiomenu = await fetch(audio_menu).then(v => v.buffer())
await kasane.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
}
kasane.sendIMG(
'./bunker/database/data/media/images/menulist-image.jpg', 
from,
linguagem.menuPrincipal (prefix, NomeDoBot, pushname, isCargo, isChVip),
{participant: 
sender, 
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channeldl,
newsletterName: NomeDoBot,
serverMessageId: -1
}, quotedMessage: info.message});
break 

case 'menulogos':
case 'logos': case 'menulogo': case 'menulogos':
await reagir(from, "🍃");
kasane.sendIMG(
'./bunker/database/data/media/images/menulist-image.jpg', 
from,
linguagem.menulogos(prefix),
{participant: 
sender, 
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channeldl,
newsletterName: NomeDoBot,
serverMessageId: -1
}, quotedMessage: info.message});
break 

case 'consultas':
await reagir(from, "🕵️");
await kasane.sendMessage(from, {text: linguagem.consultas(prefix), contextInfo: {externalAdReply: {title: `〘🤍〙${NomeDoBot}〘🤍〙\n⿻ꦿꦂ𝐔𝐬𝐮𝐚𝐫𝐢𝐨: ${pushname}`, body: `Ⓘ Esse é o melhor bot do momento s꯭꯭꯭a꯭꯭i꯭b꯭꯭a꯭ ꯭꯭m꯭꯭꯭a꯭꯭꯭i꯭꯭꯭꯭s`, thumbnail: await getBuffer(`${ftmenu.logo}`), mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true, sourceUrl: group}}}, {quoted: selo})
break 

case 'menu+18':
case 'menu18':
await reagir(from, "😈");
kasane.sendIMG(
'./bunker/database/data/media/images/menulist-image.jpg', 
from,
linguagem.menu18(prefix),
{participant: 
sender, 
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channeldl,
newsletterName: NomeDoBot,
serverMessageId: -1
}, quotedMessage: info.message});
break

case 'menuadmin':
case 'menuadm': case 'menuadms': case 'adm':
if(!isGroupAdmins && SoDono) return reply(mess.onlyOwner())
await reagir(from, "👑");
kasane.sendIMG(
'./bunker/database/data/media/images/menulist-image.jpg', 
from,
linguagem.adms(prefix),
{participant: 
sender, 
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channeldl,
newsletterName: NomeDoBot,
serverMessageId: -1
}, quotedMessage: info.message});
break

case 'menu3':
case 'menudono': case 'donomenu':
if(!SoDono) return reply(mess.onlyOwner())
await reagir(from, "👨🏻‍💻");
kasane.sendIMG(
'./bunker/database/data/media/images/menulist-image.jpg', 
from,
linguagem.menudono(prefix),
{participant: 
sender, 
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channeldl,
newsletterName: NomeDoBot,
serverMessageId: -1
}, quotedMessage: info.message});
break 

case 'menuefeitos':
case 'efeitosimg': case 'efeitos': case 'efeitoimg': case 'efeitosmarcar':
await reagir(from, "✨");
kasane.sendIMG(
'./bunker/database/data/media/images/menulist-image.jpg', 
from,
linguagem.efeitos(prefix),
{participant: 
sender, 
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channeldl,
newsletterName: NomeDoBot,
serverMessageId: -1
}, quotedMessage: info.message});
break

case 'menualteradores':
case 'menualt':
await reagir(from, "🪄");
kasane.sendIMG(
'./bunker/database/data/media/images/menulist-image.jpg', 
from,
linguagem.alteradores(prefix),
{participant: 
sender, 
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channeldl,
newsletterName: NomeDoBot,
serverMessageId: -1
}, quotedMessage: info.message});
break 

case 'menu4':
case 'brincadeiras':
case 'menuzoas':
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await reagir(from, "😹");
kasane.sendIMG(
'./bunker/database/data/media/images/menulist-image.jpg', 
from,
linguagem.brincadeiras(prefix),
{participant: 
sender, 
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channeldl,
newsletterName: NomeDoBot,
serverMessageId: -1
}, quotedMessage: info.message});
break 

case 'menu9':
case 'menuvip':
if(isCmdVip.length == 0) return reply(`Atualmente meu/minha dono(a), não adicionou nenhum comando à este menu.\n- Caso você seja o(a) dono(a), visualize o comando: ${prefix}infocmdvip, para entender como funciona esta nova funcionalidade do bot.`)
await reagir(from, "💫");
kasane.sendIMG(
'./bunker/database/data/media/images/menulist-image.jpg', 
from,
linguagem.menuvip(isCmdVip, prefix, capitalizeFirstLetter),
{participant: 
sender, 
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channeldl,
newsletterName: NomeDoBot,
serverMessageId: -1
}, quotedMessage: info.message});
break 




case 'owner': case 'odono': case 'dono': case 'infodono':
await reagir(from, "👨🏻‍💻");
numerodn = numerodono_ofc
await kasane.sendMessage(from, {image: {url: ftmenu.logo}, caption: getInfo.infoOwner(prefix, ownerName, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: selo})
break

case 'divu':
case 'divulgacao': {
const texto = `
*Divulgação Yukira 💧* 

✨ Um bot divertido, animado e pronto para deixar seu grupo mais incrível!

✨ *Comandos funcionando atualmente:*
✅ Fazer fig
✅ Namorar
✅ Comandos divertidos
✅ Renomear fig
✅ Brincadeiras divertidas e engraçadas
...e muito mais!

Se você quer ter o seu grupo animado com a *Yukira*, entre em contato no PV! 😏
`.trim();

// Botões estilizados com emoji 💧 (sem WhatsApp)
const buttons = [
{ buttonId: `${prefix}criador`, buttonText: { displayText: '💧⃞𝙲𝚁𝙸𝙰𝙳𝙾𝚁⃞💧' }, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: '💧⃞𝙼𝙴𝙽𝚄⃞💧' }, type: 1 },
{ buttonId: `${prefix}site`, buttonText: { displayText: '💧⃞𝚂𝙸𝚃𝙴⃞💧' }, type: 1 }
];

const buttonMessage = {
text: texto,
footer: "Yukira💧",
buttons: buttons,
headerType: 1 // mensagem de texto apenas
};

await kasane.sendMessage(from, buttonMessage, { quoted: info });
break;
}

case 'site': {
const texto = `
💠 *Tokito APIs* 💠

🌐 Visite nosso site e descubra todas as funcionalidades!
📲 Acesse: https://tokito-apis.site

💧 Sempre pronto para deixar seu grupo animado e cheio de diversão!
`.trim();

const message = {
text: texto,
footer: "Tokito APIs 💧"
};

await kasane.sendMessage(from, message, { quoted: info });
break;
}

case 'lojinha':
case 'loja':
case 'comprar':
case 'alugar': {
reagir(from, "🛒");

const moneybot = `╓┰╌⭒❊╌═⊱𖧷⊰🤍⊱𖧷⊰═╌❊⭒╌╮
║┋ ❯❯ PLANOS BOT ❮❮
║┣╌⭒❊╌═⊱𖧷⊰🤍⊱𖧷⊰═╌❊⭒╌╯
║┃֪࣪╭▼△▼△▼△▼△▼△▼△▼△▼△▼
║┃֪࣪├ׁ̟̇❯❯► R$5.00 ❯❯ 7 DIAS ❮❮
║┃֪࣪├ׁ̟̇❯❯▻ R$8.00 ❯❯ 10 DIAS ❮❮
║┃֪࣪├ׁ̟̇❯❯► R$10.00 ❯❯ 15 DIAS ❮❮
║┃֪࣪├ׁ̟̇❯❯▻ R$15.00 ❯❯ 20 DIAS ❮❮
║┃֪࣪├ׁ̟̇❯❯► R$30.00 ❯❯ 30 DIAS ❮❮
║┃֪࣪├ׁ̟̇❯❯▻ R$50.00 ❯❯ 60 DIAS ❮❮
║┃֪࣪├ׁ̟̇❯❯► R$70.00 ❯❯ 90 DIAS ❮❮
║┃֪࣪├ׁ̟̇❯❯▻ R$120.00 ❯❯ 180 DIAS ❮❮
║┃֪࣪├ׁ̟̇❯❯► COMPRAR ARQUIVO R$80.00
║┖┴▼△▼△▼△▼△▼△▼△▼△▼△▼
║ *Obs: CASO QUEIRA COMPRAR O ARQUIVO DO BOT*
║ *UTILIZE O COMANDO ${prefix}Comprar_bot*
┗─๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪┛`;

// Enviando a imagem do Dropbox junto com o menu
await kasane.sendMessage(
from,
{ 
image: { url: "https://dl.dropboxusercontent.com/scl/fi/qrlpuqlcrjba47di6szeq/1763833809901_tmp.jpg?rlkey=hzvwzguvc79gccix1csqvfl1o&dl=0" },
caption: moneybot
},
{ quoted: selo }
);
}
break;

case 'comprar_bot': {
try {
if (!global.comprando) global.comprando = {}; // inicializa mapa

// Marca que o usuário está no fluxo
global.comprando[sender] = {
pushname: pushname
};

// Mensagem no grupo avisando que enviou o PV
await kasane.sendMessage(from, {
text: `Acabei de mandar a chave PIX do meu criador, olha seu PV ✅`,
mentions: [sender]
});

// Mensagem no PV com a chave PIX
await kasane.sendMessage(sender, {
text: `*❯❯ COMPRA DO BOT ❮❮*\n\nOlá *${pushname}* 👋\nPara finalizar a compra do *Arquivo do Bot*, envie o valor de *R$ 80,00* para a chave PIX abaixo:\n\n🔑 *CHAVE PIX (Criador):*\n👉 Wakassasoares@gmail.com\n📱 *Whatsapp Criador:* wa.me/5569993184370\n\nApós efetuar o pagamento, *envie o comprovante no PV do meu criador* para liberação do arquivo.`
});

// Remove do fluxo imediatamente
delete global.comprando[sender];

} catch (e) {
await reply(`❌ Erro ao enviar a mensagem: ${e.message}`);
}
}
break;

case 'listarevgp':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!SoDono) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *```sᴏᴍᴇɴᴛᴇ ᴍᴇᴜ ᴅᴏɴᴏ ʟɪɴᴅÃᴏ```*")
var getGroups = await kasane.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = "ᏞᏆՏͲᎪ ᎠᎬ ᏀᎡႮᏢϴՏ Ꭰϴ ᏴϴͲ\nͲϴͲᎪᏞ ( "+ingfoo.length+" )\n________________________________________"
for (let i = 0; i < ingfoo.length; i++){
matheuzinho = JSON.stringify(revealmsg).includes(ingfoo[i].id) ? "✅" : "❌"
teks1 += "\n\n»"+i+"«\n⏤͟͟͞͞ ꦿ𝙽𝚘𝚖𝚎 𝙳𝚘 𝙶𝚛𝚞𝚙𝚘 ↴\n〘 "+ingfoo[i].subject+" 〙\n⏤͟͟͞͞ ꦿ𝙸𝙳 𝙳𝚘 𝙶𝚛𝚞𝚙𝚘 ↴\n× "+ingfoo[i].id+"\n⸺͟͞ꪶ𝙰𝚝𝚒𝚟𝚊𝚍𝚘⇒『 "+matheuzinho+" 』\n________________________________________"
}
reply(teks1)
break

case 'resetadsgp':
if(!SoDono) return reply(enviar.msg.dono)
if(!JSON.stringify(adsgp).includes("grupos")) {
adsgp.push({tipo: "grupos", gps: []})
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
}
if(!JSON.stringify(adsgp).includes("mensagens")) {
adsgp.push({tipo: "mensagens", msgs: []})
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
}
AB = adsgp.map(i => i.tipo).indexOf("grupos")
AC = adsgp.map(i => i.tipo).indexOf("mensagens")
adsgp[AB].gps = []
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
adsgp[AC].msgs = []
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sɪsᴛᴇᴍᴀ ʀᴇsᴇᴛᴀᴅᴏ*")
break

case 'setadsgp':
if(!SoDono) return reply(enviar.msg.dono)
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(adsgp).includes("quantidade")) {
adsgp.push({tipo: "quantidade", quant: 5})
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
}
if(!JSON.stringify(adsgp).includes("grupos")) {
adsgp.push({tipo: "grupos", gps: []})
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
}
if(!JSON.stringify(adsgp).includes("mensagens")) {
adsgp.push({tipo: "mensagens", msgs: []})
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
}
var [linkM4, msgM4] = q.split('|')
AB = adsgp.map(i => i.tipo).indexOf("grupos")
AC = adsgp.map(i => i.tipo).indexOf("mensagens")
if(!linkM4) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɪɴsɪʀᴀ ᴜᴍ ʟɪɴᴋ ᴅᴇ ᴄᴏɴᴠɪᴛᴇ ᴀᴏ ʟᴀᴅᴏ ᴅᴏ ᴄᴏᴍᴀɴᴅᴏ.*")
if(!msgM4) return reply(`Vejo que você não inseriu a mensagem que será enviada... Faça assim:\n${prefix+command} link do grupo|mensagem para enviar`)
if(linkM4.includes('chat.whatsapp.com/')) {
link = linkM4.split('app.com/')[1]
try {
var getGroups = await kasane.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
grupos77 = []
for(i = 0; i < ingfoo.length; i++) {
grupos77.push({groupId: ingfoo[i].id})
}
adsgp[AB].gps = grupos77
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
adsgp[AC].msgs.push({txt: msgM4, cobrado: false})
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
kasane.groupAcceptInvite(`${link}`)
return reply(`Todos os grupos da lista foram salvos na pasta... Qualquer grupo que esteja fora da lista será tratado como indigno e réu de receber anúncios em seu chat`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ɢʀᴜᴘᴏ ᴊá ᴇsᴛá ᴄᴏᴍ ᴏ ᴀʟᴄᴀɴᴄᴇ ᴍáxɪᴍᴏ ᴅᴇ ᴍᴇᴍʙʀᴏs.*")
}
if(String(erro).includes('not-authorized') ) {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ғᴏɪ ᴘᴏssíᴠᴇʟ ᴇɴᴛʀᴀʀ ɴᴏ ɢʀᴜᴘᴏ.\ɴᴍᴏᴛɪᴠᴏ: ʙᴀɴɪᴍᴇɴᴛᴏ.*")
}
}
} else return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴘs, ᴠᴇʀɪғɪǫᴜᴇ ᴏ ʟɪɴᴋ ǫᴜᴇ ᴠᴏᴄê ɪɴsᴇʀɪᴜ.*")
break

case 'setadstime': case 'sat':
if(!SoDono) return reply(enviar.msg.dono)
if(!JSON.stringify(adsgp).includes("quantidade")) {
adsgp.push({tipo: "quantidade", quant: 5})
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
}
if(!Number(args[0]) || Number(args[0]) < 1) return reply(`Defina a quantidade de mensagens a serem enviadas no grupo ao usar o comando ${prefix}setadsgp

Ex: ${prefix+command} 5`)
if(q.includes(".")) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏᴅᴇ ɴúᴍᴇʀᴏs ᴅᴇᴄɪᴍᴀɪs*")
AB = adsgp.map(i => i.tipo).indexOf("quantidade")
adsgp[AB].quant = Number(args[0])
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
reply(`Quant. de mensagens definida com sucesso ✅`)
break

case 'startads': case 'endads':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
adsStart = getGroupAds(from)
if(adsStart.acctive) {
adsStart.acctive = false
saveADS()
return reply(`❕ *ADs System desativado com sucesso* 🗯`)
} else {
adsStart.acctive = true
saveADS()
return reply(`🔰 *ADs System ativado com sucesso* 〽`)
}
break

case 'addads': case 'setads':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!getGroupAds(from).acctive) return reply(enviar.adsatc)
if(!q) return reply(`Retorne após o comando a sua mensagem/anúncio... Ex:
${prefix+command} sua mensagem aqui`)
var [qp, tm] = q.split("|")
adsStart = getGroupAds(from)
if(isImage || isQuotedImage) { try { media = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
gfb = await getFileBuffer(media, 'image')
img = await upload(gfb)
addAdminAds(from, sender, true, img)
saveADS() } catch { return reply(`Não foi possível salvar essa imagem... ❌`) } } else { addAdminAds(from, sender, existAdminAds(from, sender) ? getAdminAds(from, sender).true_false : false, existAdminAds(from, sender) ? getAdminAds(from, sender).url : ``) }
if(!tm || (!tm.includes("h") && !tm.includes("m"))) return isIOS ? reply(`Defina o tempo de envio, do mesmo jeito do exemplo abaixo, separando o anúncio e o tempo com uma barra ( | )... Ex:\n${prefix+command} sua anúncio|1h`) : sendListB(from, {text: `Selecione agora o tempo de intervalo entre o envio de cada mensagem...`, footer: `Clique na lista abaixo para selecionar o horário:`}, kasane, sender, `💢 CLIQUE AQUI 💢`, [{title: `Escolha aqui...`, options: adsStartList(prefix+command+` `+qp)}], seloctt)
gpadm = getAdminAds(from, sender)
end = gpadm.true_false
urlads = gpadm.url
addAds(from, qp, tm, sender, end, urlads)
mention(`*O anúncio foi setato neste grupo a cada ${tm} pelo adm @${sender.split("@")[0]} com sucesso* ✅`)
await sleep(2000)
if(end) { sendImage(from, urlads, qp) } else { sendMess(from, qp) }
break

case 'listads':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!getGroupAds(from).acctive) return reply(enviar.adsatc)
groupAds = getGroupAds(from).horarios
if(groupAds.length <= 0) return reply(`Não há anúncios definidos neste grupo...`)
txt = `📛 *Lista de anúncios programados neste grupo:*
🔰 *Total:* ${groupAds.length}

${groupAds.map(i =>
`🎭 *ID:* ${i.id}
📖 *ADS:* ${i.text.length > 50 ? i.text.slice(0, 50) + `...` : i.text}
⏱ *Tempo:* ${String(i.type.valor_numerico) + i.type.hm}
🧩 *Próximo ADS:* ${i.tempo}
🖼 *Mídia ( ${i.imagem.true_false ? `✔` : `✖`} )*`).join(`\n\n`)}`
reply(txt)
break

case 'rmads':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!getGroupAds(from).acctive) return reply(enviar.adsatc)
groupAds = getGroupAds(from).horarios
if(groupAds.length <= 0) return reply(`Não há anúncios definidos neste grupo...`)
r1 = `🎭 *Retorne após o comando o id do anúncio que você quer deletar:*`
lista = []
for(i of groupAds) {lista.push({title: `🆔 ${i.id}`, body: i.text.length > 50 ? i.text.slice(0, 50) + `...` : i.text, command: prefix+command+` `+i.id})}
if(groupAds.length >= 2) lista.push({title: `❌ DELETAR TODOS OS IDS`, body: `Ação irreversível`, command: prefix+command+` all`})
if(!q || !isIDads(from, q) && q.toLowerCase() != `all`) return isIOS ? reply(`${r1}\n*Ex* ${prefix+command} 010124013045\n_(Olhe no comando ${prefix}listads os ID disponíveis)_`) : sendListB(from, {text: r1, footer: `_Selecione abaixo os ID na lista..._`}, kasane, sender, `📛 CLIQUE AQUI 📛`, [{title: `For Black System`, options: lista}], seloctt)
if(q.toLowerCase() == `all`) {
AB = ads.map(a => a.groupId).indexOf(from)
ads.splice(AB, 1)
saveADS()
return reply(`*Todos os anúncios foram deletados com sucesso* ✔`) } else {
rmAds(from, q)
return reply(`*O anúncio de ID ${q} foi deletado com sucesso* ✔`) }
break

case 'rmtimeads': case 'rmtmads':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!getGroupAds(from).acctive) return reply(enviar.adsatc)
groupAds = getGroupAds(from).horarios
if(groupAds.length <= 0) return reply(`Não há anúncios definidos neste grupo...`)
if(!q) return reply(`🎭 *Retorne após o comando o id do anúncio que você quer retirar os minutos que sobram:*\n*Ex* ${prefix+command} 010124013045\n_(Olhe no comando ${prefix}listads os ID disponíveis)_`)
var [idads, typeads] = q.split("|")
if(!isIDads(from, idads)) return reply(`ID do anúncio não encontrado neste grupo ❌`)
if(!typeads) return sendButton(from, {text: `Selecione agora o modo de tempo na qual você irá remover...`, footer:
`• Se você selecionar o modo de horas e o anúncio estiver setado em ${sendHours("HH:mm")} por exemplo, os minutos serão excluídos, ficando apenas ${sendHours("HH")}:00
• Se você selecionar o modo em minutos e o anúncio estiver setado em ${sendHours("HH:mm")} por exemplo, o tempo será convertido no horário mais próximo de um múltiplo de 5, restanto o tempo ${converterMin(contarMin(sendHours("HH:mm")) - (contarMin(sendHours("HH:mm")) % 5))}`}, kasane, sender, [
{type: `cmd`, text: `🕛 RETIRAR HORAS 🕛`, command: prefix+command+` `+idads+`|h`},
{type: `cmd`, text: `🕕 RETIRAR MINUTOS 🕕`, command: prefix+command+` `+idads+`|m`}], seloctt)
AB = groupAds.map(i => i.id).indexOf(idads)
antes = groupAds[AB].tempo
dps = typeads == `h` ? antes.split(":")[0] + `:00` : converterMin(contarMin(antes) - (contarMin(antes) % 5))
groupAds[AB].tempo = dps
saveADS()
reply(`*O anúncio de ID ${idads} foi atualizado de ${antes} para ${dps} com sucesso* ✔`)
break



case 'setmeca':
const version = q
await changeVersion(version);
await reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴇᴛᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ*")
break


case 'pix':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴠᴀʟᴏ ᴅᴏ ᴘɪx?*")
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❯❯ ɢᴇʀᴀɴᴅᴏ ᴘɪx ❮❮*")

try {
let descricao = 'teste'; 
let nmsr = Number(q); 

const idempotencyKey = uuidv4();
await sleep(500)
let pagamentoInfo = await criarPagamentoPix(nmsr, descricao, idempotencyKey);

 await kasane.sendMessage(sender, { 
image: Buffer.from(pagamentoInfo.qr_code_base64, "base64"), 
caption: `*❯❯ PIX GERADO COM SUCESSO ❮❮*\n*Acima contém o Qr code para efetuar o pagamento, mais caso precise abaixo sera enviado o pix copia e cola*\n*ID:* ${pagamentoInfo.id}\n*STATUS:* ${pagamentoInfo.status}\n*❯❯ CÓDIGO COPIA E COLA ABAIXO ❮❮↴*` 
});
await kasane.sendMessage(from, { 
text: `${pagamentoInfo.qr_code}` 
});
let check = await verificarPix(pagamentoInfo.id);

while(check.status == 'pending') { check = await verificarPix(pagamentoInfo.id) }
if(check.status == "approved") {
await reply(`*❯❯ PAGAMENTO CONFIRMADO ❮❮\n*ADICIONANDO COINS*`)
await sleep(500)
await reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴜɪᴛᴏ ᴏʙʀɪɢᴀᴅᴏ ᴘᴇʟᴀ ᴀ sᴜᴀ ᴄᴏɴᴛʀɪʙᴜɪÇÃᴏ*")
}
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘᴀɢᴀᴍᴇɴᴛᴏ ᴇxᴘɪʀᴀᴅᴏ ヅ*")
} catch (error) {
await kasane.sendMessage(from, { text: `Erro ao criar o pagamento: ${error.message}` });
}
break;
case 'stickerinfo': case 'stmetadata': 
if(!isQuotedSticker) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘᴏʀ ғᴀᴠᴏʀ, é ɴᴇsᴄᴇssáʀɪᴏ ᴍᴇɴᴄɪᴏɴᴀʀ ᴜᴍ sᴛɪᴄᴋᴇʀ ᴘᴀʀᴀ ᴏʙᴛᴇʀ sᴜᴄᴇssᴏ à ᴇxᴇᴄᴜçãᴏ ᴅᴏ ᴄᴏᴍᴀɴᴅᴏ.*");
try {
extractBuffer = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
stickerMetadata = await extractMetadata(extractBuffer);
await kasane.sendMessage(from, {image: extractBuffer, caption: `• Emojis: *${stickerMetadata?.emojis?.join(' ') || '❌'}*\n• ID do Pacote: *${stickerMetadata['sticker-pack-id'] || '❌'}*\n• Nome do Pacote: *${stickerMetadata['sticker-pack-name'] || '❌'}*\n• Autor do Pacote:*${stickerMetadata['sticker-pack-publisher'] || stickerMetadata['sticker-author-name'] || '❌'}*\n• Sticker Maker _(Android)_: *${stickerMetadata['android-app-store-link'] || '❌'}*\n• Sticker Maker _(iOS)_: *${stickerMetadata['ios-app-store-link']|| '❌'}*`}, {quoted: selo});
} catch(error) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *[#] ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴏʙᴛᴇʀ ᴀ ᴍᴇᴛᴀᴅᴀᴛᴀ ᴅᴏ sᴛɪᴄᴋᴇʀ, ᴛᴇɴᴛᴇ ᴄᴏᴍ ᴏᴜᴛʀᴏ...*")
};
break

case "rgaluguel": {
if (!isGroupAdmins) 
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ • ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴘᴏᴅᴇᴍ ʀᴇɢɪsᴛʀᴀʀ ᴀʟᴜɢᴜᴇʟ.*");

if (!isModoaluguel) 
return reply(`⚠️ • O modo de aluguel está desligado!\nAtive com: *${prefix}modoaluguel*`);

if (!args[0]) 
return reply(`💠 • Use: *${prefix + command} 15m / 3h / 7d / 1mes*`);

const entrada = args[0].toLowerCase();
const numero = parseInt(entrada.replace(/\D/g, ""));
const unidade = entrada.replace(/[0-9]/g, "");

if (!numero || numero <= 0)
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ • ᴅɪɢɪᴛᴇ ᴜᴍ ᴛᴇᴍᴘᴏ ᴠáʟɪᴅᴏ.*");

// Local do arquivo único
const filePath = "./bunker/database/grupos/aluguel/aluguel.json";

// Garantir que existe
if (!fs.existsSync("./bunker/database/grupos/aluguel/aluguel.json")) {
fs.mkdirSync("./bunker/database/grupos/aluguel/aluguel.json", { recursive: true });
}

let db = {};
if (fs.existsSync(filePath)) {
try {
db = JSON.parse(fs.readFileSync(filePath));
} catch (e) {
db = {};
}
}

// Unidades válidas
const tipos = {
m: ["minutes", "minuto(s)"],
h: ["hours", "hora(s)"],
d: ["days", "dia(s)"],
mes: ["months", "mês(es)"]
};

if (!tipos[unidade])
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *⚠️ • ᴜsᴇ ᴜɴɪᴅᴀᴅᴇs ᴠáʟɪᴅᴀs: ᴍ, ʜ, ᴅ, ᴍᴇs*");

const agora = moment().tz("America/Sao_Paulo");
const expira = agora.clone().add(numero, tipos[unidade][0]);

// Salvando no arquivo único
db[from] = {
ativo: true,
expira: expira.format(),
tempo: numero,
tipo: tipos[unidade][1]
};

fs.writeFileSync(filePath, JSON.stringify(db, null, 2));

// Calcular duração
const dura = moment.duration(expira.diff(agora));
const dias = Math.floor(dura.asDays());
const horas = dura.hours();
const minutos = dura.minutes();

const resumo = `${dias}d ${horas}h ${minutos}m`;

const msg = `
💧 *ALUGUEL DO BOT ATIVADO*

• Duração: *${numero} ${tipos[unidade][1]}*
• Tempo restante: *${resumo}*
• Expira em: *${expira.format("DD/MM/YYYY HH:mm")}*

O bot permanecerá aqui até o final do aluguel. 💧
`;

await kasane.sendMessage(from, { text: msg });
break;
}

//=========== [ ÍNICIO JOGOS ] ========= //

case 'quando':
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅɪɢɪᴛᴇ ᴀ ᴘᴇʀɢᴜɴᴛᴀ!*")
const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\nResposta: ${randomm}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\nResposta:1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Pergunta: ${body.slice(1)}\nResposta: ${random2} ${random3}`
}
reply(texto)
break

//=========== [ FINAL JOGOS ] ========= //

case 'banfake':
case 'banfakes':
if (!isGroup) return reply("*❌ • ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ́ ᴘᴏᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇᴍ ɢʀᴜᴘᴏs*");
if (!isGroupAdmins) return reply("*❌ • ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ*");

reagir(from, "🚫");

try {
let grpmdt = await kasane.groupMetadata(from);
const membros_ = grpmdt.participants;
const groupAdmins_ = getGroupAdmins(membros_);

const normalizar = alvo => {
if (alvo?.includes('@lid') && membros_) {
 return membros_.find(v => v.lid === alvo)?.jid || alvo;
}
return alvo;
};

let caixa = [];

for (let membro of membros_) {
const participante = normalizar(membro.id);
const numero = participante.split("@")[0];

// ❗ Não remover dono, bot ou admin
if (
 participante !== botNumber &&
 !numerodono.includes(participante) &&
 !groupAdmins_.includes(participante) &&
 !numero.startsWith("55") // Número que NÃO é brasileiro = fake
) {
 caixa.push(participante);
}
}

if (caixa.length === 0) {
return reply("*🤷‍♂️ • ɴãᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍ ɴᴜ́ᴍᴇʀᴏ ғᴀᴋᴇ ɴᴇssᴇ ɢʀᴜᴘᴏ!*");
}

reply(`*🚫 • ʀᴇᴍᴏᴠᴇɴᴅᴏ ${caixa.length} ɴᴜ́ᴍᴇʀᴏ(s) ғᴀᴋᴇ...*`);

// 🔁 Remover lentamente para evitar ban do WhatsApp
for (let i = 0; i < caixa.length; i++) {
await sleep(1000);
await kasane.groupParticipantsUpdate(from, [caixa[i]], 'remove');
}

reply(`*✔️ • ʀᴇᴍᴏᴄ̧ãᴏ ᴄᴏɴᴄʟᴜɪ́ᴅᴀ!*\n📤 • ᴛᴏᴛᴀʟ ʀᴇᴍᴏᴠɪᴅᴏs: *${caixa.length}*`);

} catch (e) {
console.error(e);
reply("*❌ • ᴇʀʀᴏ ᴀᴏ ᴘʀᴏᴄᴇssᴀʀ ᴀ ʀᴇᴍᴏᴄ̧ãᴏ ᴅᴏs ғᴀᴋᴇs!*");
}
break;
// ============================ LISTA FAKE ============================

// ============================ LISTA DE NÚMEROS FAKES ============================

case 'listafake':
case 'listafakes':
if (!isGroup) return reply("*❌ • ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ́ ꜰᴜɴᴄɪᴏɴᴀ ᴇᴍ ɢʀᴜᴘᴏs*");
if (!isGroupAdmins && !SoDono) return reply("*❌ • ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ*");
if (!isBotGroupAdmins) return reply("*❌ • ᴇᴜ ᴘʀᴇᴄɪsᴏ sᴇʀ ᴀᴅᴍɪɴ ᴘᴀʀᴀ ᴍᴇᴄʜᴇʀ ɴᴏs ᴍᴇᴍʙʀᴏs!*");

reagir(from, "🇺🇸");

try {
let grpmdt = await kasane.groupMetadata(from);
const membros_ = grpmdt.participants;

const normalizar = alvo => membros_.find(v => v.lid === alvo)?.jid || alvo;

let teks = `🇺🇸 *ᴜsᴜᴀ́ʀɪᴏs ᴄᴏᴍ ɴᴜ́ᴍᴇʀᴏ ꜰᴀᴋᴇ (ɴᴀ̃ᴏ ʙʀᴀsɪʟᴇɪʀᴏ):*\n`;
let men = [];

for (let membro of membros_) {
const participante = normalizar(membro.id);
const numero = participante.split("@")[0];

if (!numero.startsWith("55") && participante !== botNumber) {
 teks += `➤ @${numero}\n`;
 men.push(participante);
}
}

if (!men.length) return reply("🤷‍♂️ • ɴᴀ̃ᴏ ʜᴀ́ ɴᴜ́ᴍᴇʀᴏꜱ ꜰᴀᴋᴇꜱ ɴᴏ ɢʀᴜᴘᴏ.");

teks += `\n🇺🇸 *ᴛᴏᴛᴀʟ:* ${men.length}`;

await kasane.sendMessage(from, { text: teks, mentions: men }, { quoted: selo });

} catch (e) {
console.error(e);
reply("❌ • ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴘʀᴏᴄᴜʀᴀʀ ᴏs ᴍᴇᴍʙʀᴏs!");
}
break;


// ============================ LISTA DE BRASILEIROS ============================

case 'listabr':
case 'brlist':
if (!isGroup) return reply("*❌ • ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ́ ꜰᴜɴᴄɪᴏɴᴀ ᴇᴍ ɢʀᴜᴘᴏs*");
if (!isGroupAdmins && !SoDono) return reply("*❌ • ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ*");
if (!isBotGroupAdmins) return reply("*❌ • ᴇᴜ ᴘʀᴇᴄɪsᴏ sᴇʀ ᴀᴅᴍɪɴ ᴘᴀʀᴀ ᴍᴇᴄʜᴇʀ ɴᴏs ᴍᴇᴍʙʀᴏs!*");

reagir(from, "🇧🇷");

try {
let grpmdt = await kasane.groupMetadata(from);
const membros_ = grpmdt.participants;

const normalizar = alvo => membros_.find(v => v.lid === alvo)?.jid || alvo;

let teks = `🇧🇷 *ᴜsᴜᴀ́ʀɪᴏs ᴄᴏᴍ ɴᴜ́ᴍᴇʀᴏ ʙʀᴀsɪʟᴇɪʀᴏ:* \n`;
let men = [];

for (let membro of membros_) {
const participante = normalizar(membro.id);
const numero = participante.split("@")[0];

if (numero.startsWith("55") && participante !== botNumber) {
 teks += `➤ @${numero}\n`;
 men.push(participante);
}
}

if (!men.length) return reply("🤷‍♂️ • ɴᴀ̃ᴏ ᴇxɪsᴛᴇɴ ᴜsᴜᴀ́ʀɪᴏs ʙʀᴀsɪʟᴇɪʀᴏs ɴᴏ ɢʀᴜᴘᴏ!");

teks += `\n🇧🇷 *ᴛᴏᴛᴀʟ:* ${men.length}`;

await kasane.sendMessage(from, { text: teks, mentions: men }, { quoted: selo });

} catch (e) {
console.error(e);
reply("❌ • ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴘʀᴏᴄᴜʀᴀʀ ᴏs ᴍᴇᴍʙʀᴏs!");
}
break;
// ============================ LISTA POR DDI (CÓDIGO DE PAÍS) ============================

case 'listaddi':
case 'ddilist':
if (!isGroup) return reply("*❌ • ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ́ ᴘᴏᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇᴍ ɢʀᴜᴘᴏs*");
if (!isGroupAdmins) return reply("*❌ • ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ*");

if (!q || isNaN(q)) {
return reply(`📌 • ɪɴғᴏʀᴍᴇ ᴏ ᴄᴏ́ᴅɪɢᴏ ᴅᴇ ᴜᴍ ᴘᴀɪ́s (*DDI*).\n💡 • ᴇxᴇᴍᴘʟᴏ:\n*${prefix}listaddi 55*`);
}

try {
const grpmdt = await kasane.groupMetadata(from);
const membros_ = grpmdt.participants;
const normalizar = alvo => membros_.find(v => v.lid === alvo)?.jid || alvo;

let teks = `🌍 *ᴜsᴜᴀ́ʀɪᴏs ᴄᴏᴍ ᴅᴅɪ +${q} ᴇɴᴄᴏɴᴛʀᴀᴅᴏs:*\n`;
let men = [];

for (let membro of membros_) {
const participante = normalizar(membro.id);
const numero = participante.split("@")[0];

if (numero.startsWith(q) && participante !== botNumber) {
 teks += `➤ @${numero}\n`;
 men.push(participante);
}
}

if (!men.length) {
return reply(`❌ • ɴᴇɴʜᴜᴍ ᴜsᴜᴀ́ʀɪᴏ ᴄᴏᴍ *DDI +${q}* ғᴏɪ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ.`);
}

await kasane.sendMessage(from, { text: teks, mentions: men }, { quoted: selo });

} catch (error) {
console.error(error);
reply("❌ • ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ʟɪsᴛᴀʀ ᴏs ɴᴜ́ᴍᴇʀᴏs.");
}
break;

// ============================ LISTA POR DDD ============================

case 'listaddd':
case 'dddlist':
if (!isGroup) return reply("*❌ • ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ́ ᴘᴏᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇᴍ ɢʀᴜᴘᴏs*");
if (!isGroupAdmins) return reply("*❌ • ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ*");

if (!q || isNaN(q)) {
return reply(`📌 • ɪɴғᴏʀᴍᴇ ᴜᴍ *DDD* ᴠᴀ́ʟɪᴅᴏ.\n💡 • ᴇxᴇᴍᴘʟᴏ:\n*${prefix}listaddd 91*`);
}

try {
const grpmdt = await kasane.groupMetadata(from);
const membros_ = grpmdt.participants;
const normalizar = alvo => membros_.find(v => v.lid === alvo)?.jid || alvo;

let teks = `📞 *ᴜsᴜᴀ́ʀɪᴏs ᴄᴏᴍ ᴅᴅᴅ ${q}:*\n`;
let men = [];

for (let membro of membros_) {
const participante = normalizar(membro.id);
const numero = participante.split("@")[0];

if (numero.startsWith(`55${q}`) && participante !== botNumber) {
 teks += `➤ @${numero}\n`;
 men.push(participante);
}
}

if (!men.length) {
return reply(`❌ • ɴᴇɴʜᴜᴍ ᴜsᴜᴀ́ʀɪᴏ ᴄᴏᴍ *DDD ${q}* ғᴏɪ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ.`);
}

await kasane.sendMessage(from, { text: teks, mentions: men }, { quoted: selo });

} catch (error) {
console.error(error);
reply("❌ • ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ʟɪsᴛᴀʀ ᴏs ɴᴜ́ᴍᴇʀᴏs.");
}
break;

case 'limpar_mortos-cnt':
if(!SoDono) return reply(mess.onlyOwner())
if(!isGroup) return reply(mess.onlyOwner())
bla = [] 
var CNT_RS = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
for ( i = 0; i < CNT_RS.map( i => i.id).length; i++) { bla.push(CNT_RS.map( i => i.id)[i])};
for ( i of groupMembers) {bla.splice(bla.indexOf(i.id), 1)};
for ( i of bla) {CNT_RS.splice(CNT_RS.indexOf(i), 1)};
fs.writeFileSync("./configs/media/countmsg.json", JSON.stringify(countMessage))
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴜáʀɪᴏs ǫᴜᴇ ᴊá ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ, ᴏᴜ sᴀɪᴜ ᴅᴏ ɢʀᴜᴘᴏ, ғᴏɪ ᴛɪʀᴀᴅᴏ ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ ᴅᴇ ᴍᴇɴsᴀɢᴇɴs..*")
break

case 'tirar_docnt':
if(!SoDono) return reply(mess.onlyOwner())
if(!isGroup) return reply(mess.onlyGroup())
var i2 = countMessage.map(i => i.groupId).indexOf(from) 
var i = countMessage[i2].numbers.map(i => i.id).indexOf(q.trim()+"@s.whatsapp.net")
countMessage[i2].numbers.splice(i,1)
fs.writeFileSync("./configs/media/countmsg.json", JSON.stringify(countMessage))
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴜáʀɪᴏ ᴛɪʀᴀᴅᴏ ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ ᴅᴇ ᴍᴇɴsᴀɢᴇɴs ᴄᴏᴍ sᴜᴄᴇssᴏ...*")
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só adm pode utilizar este tipo de comando.`)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {
var i2 = anotar.map(i => i.grupo).indexOf(from)
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./bunker/database/func/anotar.json", JSON.stringify(anotar))
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀɴᴏᴛᴀçãᴏ ʀᴇɢɪsᴛʀᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ...*")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./bunker/database/func/anotar.json", JSON.stringify(anotar))
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀɴᴏᴛᴀçãᴏ ʀᴇɢɪsᴛʀᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ...*")
}
} else {
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅɪɢɪᴛᴇ ǫᴜᴀʟ ᴀɴᴏᴛᴀçãᴏ ᴅᴇsᴇᴊᴀ ᴛɪʀᴀʀ ᴘᴇʟᴏ ᴛíᴛᴜʟᴏ..*")
if(JSON.stringify(anotar).includes(from)) {
var i2 = anotar.map(i => i.grupo).indexOf(from)
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴀ ɴᴏᴛᴀ ɴãᴏ ᴇsᴛá ɪɴᴄʟᴜsᴀ, ᴠᴇʀɪғɪǫᴜᴇ ᴄᴏᴍ ᴀᴛᴇɴçãᴏ...*")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./bunker/database/func/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':
case 'nota':
case 'notas':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅɪɢɪᴛᴇ ᴏ ᴛíᴛᴜʟᴏ ᴅᴀ ᴀɴᴏᴛᴀçãᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴘᴜxᴀʀ..*")
if(!JSON.stringify(anotar).includes(from)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴãᴏ ᴛᴇᴍ ɴᴇɴʜᴜᴍᴀ ᴀɴᴏᴛᴀçãᴏ...*")
var i2 = anotar.map(i => i.grupo).indexOf(from)
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴄᴏɴᴛéᴍ ɴᴇɴʜᴜᴍᴀ ᴀɴᴏᴛᴀçãᴏ ᴄᴏᴍ ᴇsᴛᴇ ᴛíᴛᴜʟᴏ.*")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)
if(anotar[i2].puxar.length == 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴãᴏ ᴛᴇᴍ ɴᴇɴʜᴜᴍᴀ ᴀɴᴏᴛᴀçãᴏ...*")
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `Aqui está todas as anotações registradas em minha database do grupo: *[ ${groupName} ]*\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
reply(txtin)
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
await kasane.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: selo}).catch(async(e) => {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ, ᴠɪsᴜᴀʟɪᴢᴇ sᴇ ᴇsᴛᴇ ʟɪɴᴋ é ᴠáʟɪᴅᴏ...*")
})
} else if(q.includes("webp") || q.includes("jpg")) {
await kasane.sendMessage(from, {image: {url: q}}, {quoted: selo}).catch(async(e) => {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ, ᴠɪsᴜᴀʟɪᴢᴇ sᴇ ᴇsᴛᴇ ʟɪɴᴋ é ᴠáʟɪᴅᴏ...*")
})
}
break

case 'statusbot': {
try {

const uptime = process.uptime();

const formatUptime = (seconds) => {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600*24));
const h = Math.floor(seconds % (3600*24) / 3600);
const m = Math.floor(seconds % 3600 / 60);
const s = Math.floor(seconds % 60);
return `${d}d ${h}h ${m}m ${s}s`;
};

const ramTotal = (os.totalmem() / 1024 / 1024).toFixed(0);
const ramLivre = (os.freemem() / 1024 / 1024).toFixed(0);
const ramUsada = (ramTotal - ramLivre);

const cpuLoad = os.loadavg()[0].toFixed(2);

const disco = fs.statSync("/");

const texto = `
╭━━━〔 🤖 STATUS DO BOT 〕━━━╮
┃⏱ Tempo online: ${formatUptime(uptime)}
┃🧠 RAM usada: ${ramUsada} MB / ${ramTotal} MB
┃⚙ CPU Load: ${cpuLoad}
┃💻 Plataforma: ${os.platform()}
┃📦 Node: ${process.version}
┃👑 Dono: ${ownerName}
╰━━━━━━━━━━━━━━━━━━━━╯
`;

reply(texto);

} catch (e) {
console.log(e);
reply("Erro ao pegar status.");
}
}
break;
case 'signo':
try {
if(!q) return reply(`Digite seu signo, exemplo: ${prefix+command} Virgem`);
signos = ["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes", "aries", "touro", "gemeos", "cancer", "leao", "virgem", "libra", "escorpiao", "sagitario", "capricornio", "aquario", "peixes"]
if(!signos.includes(q_2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ sɪɢɴᴏ ɴãᴏ ᴇxɪsᴛᴇ...*")
ABC = await fetchJson(API_URL+`/api/pesquisa/horoscopo?signo=${q}&apikey=`+API_KEY_KASANE)
await kasane.sendMessage(from, {image: {url: ABC.resultado.imagem}, caption: mess.horoscopo(q, ABC)}).catch(async(error) => {
return reply(mess.error())
})
} catch(error) {
return reply(mess.error())
}
break

case 'verificado-global': 
if(!SoDono) return reply(mess.onlyOwner())
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴠᴇʀɪғɪᴄᴀᴅᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ, ᴏᴜ sᴇᴊᴀ, ᴏ sᴇʟᴏ ғᴏɪ ʀᴇᴛɪʀᴀᴅᴏ ᴅᴇ ᴛᴏᴅᴏs ᴏs ᴍᴇᴜs ᴄᴏᴍᴀɴᴅᴏs! *ᴘᴀʀᴀ ʀᴇᴀᴛɪᴠᴀʀ é só ᴅɪɢɪᴛᴀʀ ᴏ ᴄᴏᴍᴀɴᴅᴏ ɴᴏᴠᴀᴍᴇɴᴛᴇ.**")
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
reply(`O verificado foi ativado, ou seja, o selo foi colocado em todos os meus comandos! *Para remover o verificado dos comandos, use o comando novamente.*`) 
}
break

case 'audio-menu': 
if(!SoDono) return reply(mess.onlyOwner())
if(!isAudioMenu) {
nescessario.menu_audio = true
setNes(nescessario)
reply(`O áudio foi ativado para o menu com sucesso, se quiser desativar é só digitar o comando novamente...`)
} else if(isAudioMenu) {
nescessario.menu_audio = false
setNes(nescessario)
reply(`O áudio foi desativado para o menu com sucesso, se quiser ativar é só digitar o comando novamente...`)
}
break


case 'criador':
case 'Yosh modz':
try {
const imageUrl =
"https://tokito-apis.site/canvas/criadorcard?fundo=https://tokito-apis.site/f3ea44.jpg&text=Yuka%20modz&subtext=codes%20Samsung&logo=https://tokito-apis.site/bfd3f4.jpg";

const legenda = `
💧] 𝐘𝐔𝐊𝐈𝐑𝐀 ᴀᴘʀᴇꜱᴇɴᴛᴀ ᴏ ꜰᴜɴᴅᴀᴅᴏʀ*

👋 *ᴏʟᴀ́:* ${pushname}

📌 *ᴄʀɪᴀᴅᴏʀ ᴏꜰɪᴄɪᴀʟ*
© ⏤͟͟͞͞ • *Yosh modz*

📞 *ᴄᴏɴᴛᴀᴛᴏ ᴅɪʀᴇᴛᴏ*
🔗 https://wa.me/5544991479669
> *© Yosh 💧 ⸺͟͞✰*
`;

await kasane.sendMessage(
from,
{
image: { url: imageUrl },
caption: legenda,
footer: NomeDoBot,
contextInfo: {
mentionedJid: [sender],
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channeldl}`,
newsletterName: `${NomeDoBot}`,
},
},
},
{ quoted: selo }
);

} catch (err) {
console.log(err);
reply("💧] Yosh *❌ ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ɢᴇʀᴀʀ ᴏ ᴄᴀʀᴅ ᴅᴏ ᴄʀɪᴀᴅᴏʀ.*");
}
break;

case 'programador':
reagir(from, "🙅")
audiomenu = await fs.readFileSync("./bunker/database/data/media/audios/kasanepv.mp3")
kasane.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await sleep (10000)
reply(`O contato programador https://wa.me/5569993184370`)
break

case 'configurar-bot':
await kasane.sendMessage(from, {text: getInfo.configbot(prefix)}, {quoted: selo})
break

case 'infovip': case 'info_vip':
await kasane.sendMessage(from, {text: getInfo.infoVip(prefix)}, {quoted: selo})
break

case 'infocmdvip': case 'infocmdvip':
await kasane.sendMessage(from, {text: getInfo.infoCmdVip(prefix)}, {quoted: selo})
break

case 'idiomas': case 'idioma':
await kasane.sendMessage(from, {text: getInfo.listLanguages(prefix)}, {quoted: selo})
break

case 'infobv': case 'infowelcome': case 'infobemvindo':
await kasane.sendMessage(from, {text: getInfo.bemvindo(prefix)}, {quoted: selo})
break
case 'destrava':
await kasane.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
break 

case 'perfil': {
if (!isGroup) return reply(mess.only.group);

try {
// Reação
await kasane.sendMessage(from, {
react: { text: "💧] Yosh *❤️‍🔥*", key: info.key }
});

const user = pushname || sender_ou_n.split("@")[0];

// Foto de perfil
let perfil = await kasane
.profilePictureUrl(sender_ou_n, 'image')
.catch(_ => "https://files.catbox.moe/yet8m8.jpg");

// Bio / status
const bio = await kasane.fetchStatus(sender_ou_n);
const recado = Array.isArray(bio)
? bio[0]?.status?.status || "privado, ou sem recado!!"
: bio?.status || "privado, ou sem recado!!";

// Valores aleatórios
const levelGado = Math.floor(Math.random() * 102) + "%";
const levelGostosura = Math.floor(Math.random() * 103) + "%";
const valorPrograma =
"R$" +
(Math.floor(Math.random() * 10000) + 1000).toLocaleString("pt-BR");
const gay = Math.floor(Math.random() * 102) + "%";
const puta = Math.floor(Math.random() * 100) + "%";

// Grupo / data / hora
const NomeGrupo = isGroup
? (await kasane.groupMetadata(from)).subject
: "Sem grupo";
const data = new Date().toLocaleDateString("pt-BR");
const hora = new Date().toLocaleTimeString("pt-BR");

// Card
const imageUrl = `https://tokito-apis.site/canvas/criadorcard?fundo=https://tokito-apis.site/d04889.jpg&text=${encodeURIComponent(user)}&subtext=tokito-apis.site&logo=${encodeURIComponent(perfil)}`;

const numeroUser = sender_ou_n.split("@")[0];

// Legenda estilo Yukira 💧
let legenda = `
💧] Yosh ᴀɴᴀ́ʟɪsᴇ ᴅᴇ ᴘᴇʀꜰɪʟ ᴄᴏᴍᴘʟᴇᴛᴀ*

📌 *ɪɴꜰᴏʀᴍᴀᴄ̧ᴏ̃ᴇs*
👤 *ɴɪᴄᴋ:* ${user}
📱 *ɴᴜ́ᴍᴇʀᴏ:* ${numeroUser}
🗒️ *ʙɪᴏ:* ${recado}
💎 *ᴠɪᴘ:* ${isChVip}
🧰 *ᴄᴀʀɢᴏ:* ${isCargo}

📊 *ᴀɴᴀ́ʟɪsᴇ*
🐂 *ɢᴀᴅᴏ:* ${levelGado}
😋 *ɢᴏꜱᴛᴏꜱᴜʀᴀ:* ${levelGostosura}
🏳️‍🌈 *ɢᴀʏ:* ${gay}
🔞 *ᴘᴜᴛᴀʀɪᴀ:* ${puta}
💰 *ᴘʀᴏɢʀᴀᴍᴀ:* ${valorPrograma}

🗓️ *ᴅᴀᴛᴀ:* ${data}
⏰ *ʜᴏʀᴀ:* ${hora}

💭 *ᴄᴏɴꜱᴇʟʜᴏ ᴅᴏ ᴅɪᴀ:*
_"ᴇsᴘᴇʀᴀ… ᴀɪɴᴅᴀ ᴠᴀɪ ᴘɪᴏʀᴀʀ."_
`;

// Envio final
await kasane.sendMessage(
from,
{
image: { url: imageUrl },
caption: legenda,
footer: NomeDoBot,
contextInfo: {
mentionedJid: [sender_ou_n],
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channeldl}`,
newsletterName: `${NomeDoBot}`,
},
},
},
{ quoted: selo }
);

} catch (err) {
console.log(err);
reply("💧] Yosh *❌ ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ɢᴇʀᴀʀ ᴏ ᴄᴀʀᴅ ᴅᴇ ᴘᴇʀғɪʟ.*");
}
break;
}
case 'tabela':
await kasane.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break 

case 'destrava2':
await kasane.sendMessage(from, {text: destrava2 (prefix)}, {quoted: selo})
break 

case 'tradutor': case 'traduzir':
if(!q) return reply(`Exemplo: ${prefix}tradutor pt|Dog`)
try {
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [idioma, texto] = txt.split("|")
if(!q.includes("|")) return reply(`Está faltando a |, *use como exemplo:* ${prefix}tradutor pt|Dog`)
bla = await fetchJson(API_URL+`/api/outros/translate?texto=${encodeURI(texto)}&ling=${encodeURI(idioma)}&apikey=`+API_KEY_KASANE)
reply(mess.translator(bla)).catch(async(error) => {
reply(mess.error())
})
} catch(error) {
reply(mess.error())
}
break

case "getquoted":
case "getinfo":
case "get":
case "mek":
reply(JSON.stringify(info, null, 3));
break;

case 'get-txt':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'gerarcpf':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await kasane.sendMessage(from, {text: `CPF gerado com sucesso: ${cpf}`}, {quoted: selo})
break

case 'ddd':
if(args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
await kasane.sendMessage(from, {text: dddlist}, {quoted: selo})	
break

case 'gethtml':
if(!q || !isUrl(args[0])) return reply(`Modo de uso: ${prefix+command} link do site`)
try {
await replyWithReaction(`❪👩🏽‍💻ꦿ𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚎𝚖 𝚜𝚎𝚞 𝚙𝚛𝚒𝚟𝚊𝚍𝚘ེ≭•۟.❫`, {react: {text: "💧] Yosh *✅*", key: info.key}});
axios.get(args[0], { headers: {"user-agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Mobile Safari/537.36"}}).then(async (res) => {
let htmlData = typeof res.data === 'object' ? JSON.stringify(res.data, null, 2) : res.data
htmlData = htmlData.replace(/    /g, '').replace(/></g, '>\n<').replace(/> </g, '>\n<')
await kasane.sendMessage(sender, {document: Buffer.from(htmlData), fileName: q+`.html`, mimetype: 'text/html'}, {quoted: selo})}).catch(e => {return reply(mess.error())})
} catch (e) {
console.log(e)
reply(mess.error())
}
break

case 'rvisu':
case 'open':
if(!isQuotedVisuU) return reply("💧] Yosh *ᴘᴏʀ ғᴀᴠᴏʀ, *ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴏᴜ ᴠɪᴅᴇᴏ ᴇᴍ ᴠɪsᴜᴀʟɪᴢᴀçãᴏ úɴɪᴄᴀ* ᴘᴀʀᴀ ᴇxᴇᴄᴜᴛᴀʀ ᴏ ᴄᴏᴍᴀɴᴅᴏ.*")
await reagir(from, "👀");
if(info.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nO vídeo em visualização única foi revelado.."
await kasane.sendMessage(from,px)
} else {
var px = info.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nA imagem em visualização única foi revelada.."
await kasane.sendMessage(from,px)
}}
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'calculadora':
case 'calcular':
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 

case 'nomegp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
blat = args.join(" ")
await kasane.groupUpdateSubject(from, `${blat}`)
await kasane.sendMessage(from, {text: "💧] Yosh *sᴜᴄᴇssᴏ, ᴀʟᴛᴇʀᴏᴜ ᴏ ɴᴏᴍᴇ ᴅᴏ ɢʀᴜᴘᴏ.*"}, {quoted: selo})
break

case 'descgp':
case 'descriçãogp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyAdmins())
blabla = args.join(" ")
await kasane.groupUpdateDescription(from, `${blabla}`)
await kasane.sendMessage(from, {text: "💧] Yosh *sᴜᴄᴇssᴏ, ᴀʟᴛᴇʀᴏᴜ ᴀ ᴅᴇsᴄʀɪçãᴏ ᴅᴏ ɢʀᴜᴘᴏ*"}, {quoted: selo})
break

case 'setfotogp':
case 'fotogp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
kasane.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break


case 'teste': {
  if (!isGroup) return reply(mess.onlyGroup);
  if(!isGroupAdmins) return reply(mess.onlyAdmins())
  await reagir(from, "🎙️");

  // VERIFICAR SE A HORA FOI INFORMADA
  if (!args[0])
    return reply("⏰ *ᴅɪɢɪᴛᴇ ᴏ ʜᴏʀᴀ́ʀɪᴏ ᴅᴀ ɢʀᴀᴠᴀᴄ̧ᴀ̃ᴏ!*\nEx: +gravar 21:30");

  const horario = args[0];

  // VALIDAR FORMATO
  if (!/^\d{2}:\d{2}$/.test(horario))
    return reply("❌ *ғᴏʀᴍᴀᴛᴏ ɪɴᴠᴀ́ʟɪᴅᴏ!* Use assim: *21:30*");

  const meta = await kasane.groupMetadata(from);
  const participantes = meta.participants
    .filter(m => !m.id.includes(botNumber))
    .map(m => m.id);

  if (!participantes.length)
    return reply("⚠️ *ɴᴀ̃ᴏ ᴛᴇᴍ ᴍᴇᴍʙʀᴏꜱ sᴜꜰɪᴄɪᴇɴᴛᴇꜱ!*");

  // MENSAGEM PRINCIPAL
  await kasane.sendMessage(from, {
    text:
`🎬✨ *ɢʀᴀᴠᴀᴄ̧ᴀ̃ᴏ ᴀᴏ ᴠɪᴠᴏ – ᴀʙʀɪᴜ ᴀ ᴠᴏᴛᴀᴄ̧ᴀ̃ᴏ!* ✨🎬

🕒 *ʜᴏʀᴀ́ʀɪᴏ ᴍᴀʀᴄᴀᴅᴏ:*  
➡️ *${horario}*

🎙️ *ǫᴜᴇᴍ ᴠᴀɪ ᴘᴀʀᴛɪᴄɪᴘᴀʀ ᴅᴀ ɢʀᴀᴠᴀᴄ̧ᴀ̃ᴏ?*`,
  }, { quoted: info });

  // ENQUETE COM: SIM / NÃO / TÔ NA DÚVIDA
  await sendPoll(
    kasane,
    from,
    "🎙️✨ *ᴇꜱᴄᴏʟʜᴀ ᴜᴍᴀ ᴏᴘᴄ̧ᴀ̃ᴏ:*",
    [
      "✅ sɪᴍ",
      "❌ ɴãᴏ",
      "✨ ᴛᴏ̂ ɴᴀ ᴅᴜ́ᴠɪᴅᴀ"
    ]
  ).catch(async () => {
    await replyWithReaction(mess.error(), {
      react: { text: "😭", key: info.key },
    });
  });

}
break;

case 'ppp': {
if (!isGroup) return reply(mess.onlyGroup);
if (!isModobn) return reply(mess.onlyAdmins);

await reagir(from, "🪩");

const meta = await kasane.groupMetadata(from);
const participantes = meta.participants
.filter(m => !m.id.includes(botNumber))
.map(m => m.id);

if (participantes.length < 2)
return reply("⚠️ *ᴏ ɢʀᴜᴘᴏ ɴãᴏ ᴛᴇᴍ ᴍᴇᴍʙʀᴏs sᴜꜰɪᴄɪᴇɴᴛᴇs!*");

const sorteado = participantes[Math.floor(Math.random() * participantes.length)];
const nome = sorteado.split("@")[0];

// 1️⃣ MENSAGEM PRINCIPAL — FONTE "ᴊᴏɢᴏ"
await kasane.sendMessage(from, {
text:
`🔥 *ᴘᴘᴘ – ᴘᴇɢᴀ, ᴘᴇɴsᴀ ᴏᴜ ᴘᴀssᴀ?* 🔥

👤 *sᴏʀᴛᴇᴀᴅᴏ:* *@${nome}*

✨ _ᴠᴏᴛᴇᴍ ᴀʙᴀɪxᴏ ᴇ ᴇsᴄᴏʟʜᴀᴍ ᴏ ᴅᴇsᴛɪɴᴏ ᴅᴇssᴀ ʙᴇʟɪᴅᴀᴅᴇ ᴀɪ kᴋᴋ_`,
mentions: [sorteado]
}, { quoted: info });

// 2️⃣ POLL COM A MESMA FONTE
await sendPoll(
tokito,
from,
"✨ *ᴇsᴄᴏʟʜᴀ ᴜᴍᴀ ᴏᴘçãᴏ:*",
[
"😈 ᴘᴇɢᴀ",
"🤔 ᴘᴇɴsᴀ",
"💨 ᴘᴀssᴀ"
]
).catch(async (error) => {
await replyWithReaction(mess.error(), {
react: { text: "😭", key: info.key },
});
});
}
break;

case 'linkgp':
case 'linkgroup':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
linkgc = await kasane.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'revlinkgp':
case 'revlinkgroup':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
await kasane.groupRevokeInvite(from)
reply(`Link de convite do grupo foi revogado com êxito!`)
break

case 'recrutar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!q) return reply("💧] Yosh *ᴄᴀᴅê ᴏ ɴúᴍᴇʀᴏ ᴅᴏ ᴜsᴜáʀɪᴏ ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ ᴄᴏɴᴠɪᴅᴀʀ.*")
try {
photoG = await kasane.profilePictureUrl(from, 'image') // Pegar a foto do grupo aonde foi solicitado o comando de recrutamento.
} catch {
photoG = thumbnail // Vai colocar a img que está na definição, caso esteja sem foto.
}
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await kasane.groupInviteCode(from)
await kasane.sendMessage(rcrt, {text: "💧] Yosh **ᴏʟá, ᴛᴜᴅᴏ ʙᴇᴍ?* ᴠᴏᴄê ғᴏɪ ᴄᴏɴᴠɪᴅᴀᴅᴏ(ᴀ) ᴘᴇʟᴏ(ᴀ) ᴀᴅᴍɪɴsᴛʀᴀᴅᴏʀ(ᴀ) ᴅᴏ ɢʀᴜᴘᴏ.\ɴᴘᴀʀᴀ ᴇɴᴛʀᴀʀ ɴᴏ ɢʀᴜᴘᴏ, ᴄʟɪǫᴜᴇ ᴀᴄɪᴍᴀ!*", contextInfo: {externalAdReply: {title: "Clique aqui para participar do grupo.", thumbnail: await getBuffer(photoG), mediaType: 1, sourceUrl: "https://chat.whatsapp.com/"+linkgc}}})
reply("💧] Yosh *ᴄᴏɴᴠɪᴛᴇ ᴅᴇ ʀᴇᴄʀᴜᴛᴀᴍᴇɴᴛᴏ ᴅᴏ ᴜsᴜáʀɪᴏ, ғᴏɪ ᴇɴᴠɪᴀᴅᴏ ᴘᴀʀᴀ ᴏ ᴘʀɪᴠᴀᴅᴏ ᴅᴇʟᴇ ᴄᴏᴍ sᴜᴄᴇssᴏ...*")
break

case 'listatm':
if(!SoDono) return reply(mess.onlyOwner())
rgp = JSON.parse(fs.readFileSync("./bunker/database/func/tmgroup.json"))
if(rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
bl = "";
for ( i = 0; i < rgp.length; i++) {
bl += `( ${i+1} ) - ID: ${rgp[i].id}\n• Nome do Usuário(a) ou Grupo: ${rgp[i].infonome}\n-\n`
}
reply(bl)
break

case 'rgtm':
if(!SoDono) return reply(mess.onlyOwner())
rgp = JSON.parse(fs.readFileSync("./bunker/database/func/tmgroup.json"))
if(JSON.stringify(rgp).includes(from)) return reply("💧] Yosh *ᴇsᴛᴇ ɢʀᴜᴘᴏ/ᴜsᴜáʀɪᴏ ᴊá ᴇsᴛá ʀᴇɢɪsᴛʀᴀᴅᴏ ɴᴀ ʟɪsᴛᴀ ᴅᴇ ᴛʀᴀɴsᴍɪssãᴏ*") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./bunker/database/func/tmgroup.json", JSON.stringify(rgp))
reply("💧] Yosh *ʀᴇɢɪsᴛʀᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ, ǫᴜᴀɴᴅᴏ ғᴏʀ ʀᴇᴀʟɪᴢᴀᴅᴀ ᴀs ᴛʀᴀɴsᴍɪssõᴇs, ᴇssᴇ ɢʀᴜᴘᴏ/ᴜsᴜáʀɪᴏ ᴇsᴛᴀʀá ɴᴀ ʟɪsᴛᴀ.*")
break

case 'tirardatm':
if(!SoDono) return reply(mess.onlyOwner())
rgp = JSON.parse(fs.readFileSync("./bunker/database/func/tmgroup.json"))
if(!JSON.stringify(rgp).includes(from)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ɢʀᴜᴘᴏ/ᴜsᴜáʀɪᴏ ɴãᴏ ᴇsᴛá ʀᴇɢɪsᴛʀᴀᴅᴏ ᴘᴀʀᴀ sᴇʀ ᴛɪʀᴀᴅᴏ ᴅᴀ ʟɪsᴛᴀ ᴅᴇ ᴛʀᴀɴsᴍɪssãᴏ*") 
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
rgp.splice(ustm, 1)
fs.writeFileSync("./bunker/database/func/tmgroup.json", JSON.stringify(rgp))
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɢʀᴜᴘᴏ/ᴜsᴜáʀɪᴏ ᴛɪʀᴀᴅᴏ ᴅᴀ ʟɪsᴛᴀ ᴅᴇ ᴛʀᴀɴsᴍɪssãᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ*")
break

case 'fazertm':
if(!SoDono) return reply(mess.onlyOwner())
var rgp = JSON.parse(fs.readFileSync("./bunker/database/func/tmgroup.json"))
if(rgp.lengh == 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴄᴏɴᴛéᴍ ɴᴇɴʜᴜᴍ ɢʀᴜᴘᴏ ʀᴇɢɪsᴛʀᴀᴅᴏ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴛʀᴀɴsᴍɪssãᴏ*") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "Transmissão do Proprietário: "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "Transmissão do Proprietário: "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${ownerName}\n\n`)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue
blue.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${ownerName}\n\n`)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${ownerName}\n\n`)
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${ownerName}\n\n`)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${ownerName}\n\n`)
yellow.document = {url: yellow.url}
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
await kasane.sendMessage(rgp[i].id, DFC)}
break

case 'grupo': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(args.length < 1) return reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}grupo *--help*_`);
groupI = await kasane.groupMetadata(from);
if(args[0] === '--help') return await mention(mess.helpGroupSettings(prefix, sender));
if (args[0] === '-open' || args[0] === 'a') {
if(groupI.announce == false) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ɢʀᴜᴘᴏ ᴊá ᴇsᴛá ᴀʙᴇʀᴛᴏ, ɴãᴏ é ᴘᴏssíᴠᴇʟ sᴏʟɪᴄɪᴛᴀʀ ᴘᴀʀᴀ ᴀʙʀɪʀ ᴏ ǫᴜᴇ ᴊá ᴀʙᴇʀᴛᴏ...*");
reply(`Como pedido senhor(a), o grupo foi aberto com sucesso...`)
await kasane.groupSettingUpdate(from, 'not_announcement');
} else if(args[0] === '-close' || args[0] === 'f') {
if(groupI.announce == true) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ɢʀᴜᴘᴏ ᴊá ᴇsᴛá ғᴇᴄʜᴀᴅᴏ, ɴãᴏ é ᴘᴏssíᴠᴇʟ sᴏʟɪᴄɪᴛᴀʀ ᴘᴀʀᴀ ғᴇᴄʜᴀʀ ᴏ ǫᴜᴇ ᴊá sᴇ ᴇɴᴄᴏɴᴛʀᴀ ғᴇᴄʜᴀᴅᴏ...*");
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴏᴍᴏ ᴘᴇᴅɪᴅᴏ sᴇɴʜᴏʀ(ᴀ), ᴏ ɢʀᴜᴘᴏ ғᴏɪ ғᴇᴄʜᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ...*");
await kasane.groupSettingUpdate(from, 'announcement');
} else if(args[0] === '-livre') {
if (groupI.restrict == false) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ɢʀᴜᴘᴏ ɴãᴏ ᴘᴏssᴜí ɴᴇɴʜᴜᴍᴀ ʀᴇsᴛʀɪçãᴏ ᴅᴇ ᴀʟᴛᴇʀᴀçãᴏ ɴᴏs ᴅᴀᴅᴏs, ᴏᴜ sᴇᴊᴀ, ᴛᴏᴅᴏs ᴘᴏᴅᴇᴍ ᴀʟᴛᴇʀᴀʀ.*");
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴏᴍᴏ ᴘᴇᴅɪᴅᴏ sᴇɴʜᴏʀ(ᴀ), ᴛᴏᴅᴏs ᴏs ᴍᴇᴍʙʀᴏs ᴛᴇᴍ ᴀ ᴘᴇʀᴍɪssãᴏ ᴅᴇ ᴇᴅɪᴛᴀʀ ᴀs ᴄᴏɴғɪɢᴜʀᴀçõᴇs ᴅᴏ ɢʀᴜᴘᴏ.*");
await kasane.groupSettingUpdate(from, 'unlocked');
} else if(args[0] === '-private') {
if (groupI.restrict == true) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ɢʀᴜᴘᴏ ᴊá ᴘᴏssᴜí ᴀ ʀᴇsᴛʀɪçãᴏ ᴀᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs! ᴇɴᴛãᴏ, ɴãᴏ ᴛᴇᴍ ᴄᴏᴍᴏ ᴀᴛɪᴠᴀʀ ᴅᴜᴀs ᴠᴇᴢᴇs.*");
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴏᴍᴏ ᴘᴇᴅɪᴅᴏ sᴇɴʜᴏʀ(ᴀ), sᴏᴍᴇɴᴛᴇ ᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴛᴇᴍ ᴀ ᴘᴇʀᴍɪssãᴏ ᴅᴇ ᴇᴅɪᴛᴀʀ ᴏs ᴄᴏɴғɪɢᴜʀᴀçõᴇs ᴅᴏ ɢʀᴜᴘᴏ.*");
await kasane.groupSettingUpdate(from, 'locked');
} else {
reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}grupo *--help*_`);
}
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':
case 'gpinfo':
case 'regras':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
try {
var ppUrl = await kasane.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
var puxarInfo = await kasane.groupMetadata(from)
var ANC_INFO = puxarInfo.announce
var returnAnnounce = ANC_INFO === false ? "Não." : ANC_INFO === true ? "Sim." : undefined
var RST_INFO = puxarInfo.restrict 
var returnRestrict = RST_INFO === false ? "Sim." : RST_INFO === true ? "Não." : undefined
var infoCreator = puxarInfo.subjectOwner || "Não Encontrado"
infoGroup = `• Nome do Grupo: *${puxarInfo.subject}*\n• ID: *${puxarInfo.id}*\n-\n• Este grupo foi criado por: *@${infoCreator.replace("@s.whatsapp.net", "")}*\n• Data/hora de criação do grupo: *${moment(`${puxarInfo.creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}*\n• Horário e data da última alteração no grupo: *${moment(`${puxarInfo.subjectTime}` * 1000).format('DD/MM/YYYY HH:mm:ss')}*\n-\n• Quantidade de adminstradores: *${groupAdmins.length}*\n• Quantidade de membros: *${somembros.length}*\n• Soma total de membros e admins do grupo: *${puxarInfo.participants.length} participantes*\n-\n• Este grupo está fechado no momento? *${returnAnnounce}*\n• As informações do grupo podem ser alteradas por membros? *${returnRestrict}*\n-\n• Para ver as atividades dos participantes, use: *${prefix}atividade*\n• Para ver os membros inativos no grupo, use: *${prefix}inativos [quantidade de mensagens]*, ex: ${prefix}inativos 10`
await kasane.sendMessage(from, {image: {url: ppUrl}, caption: infoGroup, mentions: [infoCreator]}, {quoted: selo})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* "+q :pink.caption.replace(new RegExp(prefix+command, "gi"), `❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* ${pushname}\n\n`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue
blue.caption = q.length > 1 ? "❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* "+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), `❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* ${pushname}\n\n`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* ${pushname}\n\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* ${pushname}\n\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* "+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), `❪👑ฺ࣭࣪͘ꕸ▸ *Marcação do(a) Adm:* ${pushname}\n\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
await kasane.sendMessage(from, DFC).catch((error) => {})
break

case 'marcar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
async function marcac() {
bla = []
blad = `• Mencionando os membros comuns do grupo ou de uma comunidade. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `)
await mentions(blad, bla, true)
}
marcac().catch((error) => {
console.log(error)
})
break

case 'marcar2':
if (!isGroup) return reply(mess.onlyGroup);
if (!isGroupAdmins) return reply(mess.onlyAdmins);
if (q.includes(prefix))
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏᴅᴇ ᴜᴛɪʟɪᴢᴀʀ ᴄᴏᴍᴀɴᴅᴏs ɴᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ.*");

try {
const mencoes = groupMembers.map((m) => m.id);
const texto = `╔══✦ Mencionando todos ✦══╗\n${
q ? `\n*Mensagem:* ${q}\n` : ""
}\n${groupMembers
.map((m) => `╠➥ @${m.id.split("@")[0]}`)
.join("\n")}\n╚═══════════════╝`;

await kasane.sendMessage(
from,
{ text: texto, mentions: mencoes },
{ quoted: info }
);
} catch (e) {
console.error(e);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ ᴀᴏ ᴍᴇɴᴄɪᴏɴᴀʀ..");
}
break;

case 'marcarwa':
if (!isGroup) return reply(mess.onlyGroup);
if (!isGroupAdmins) return reply(mess.onlyAdmins);

if (q && q.includes(prefix)) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏᴅᴇ ᴜᴛɪʟɪᴢᴀʀ ᴄᴏᴍᴀɴᴅᴏs ɴᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ.*");
}

try {
let grpmdt = await kasane.groupMetadata(from);
const membros_ = grpmdt.participants;
const normalizar = alvo => membros_.find(v => v.lid === alvo)?.jid || alvo;

let mencoes = [];
let links = [];

for (let membro of membros_) {
const participante = normalizar(membro.id);
const numero = participante.split("@")[0];

// Se quiser impedir de marcar o bot ou o dono, mantenha:
if (participante === botNumber || numerodono.includes(participante)) continue;

mencoes.push(participante);
links.push(`╠➥ https://wa.me/${numero}`);
}

if (links.length === 0) return reply("❌ Nenhum membro encontrado para marcar.");

const texto = `╔══✦ *Links dos membros* ✦══╗\n` +
(q ? `\n📩 *Mensagem:* ${q}\n\n` : "") +
links.join("\n") +
`\n╚═══════════════════╝`;

await kasane.sendMessage(
from,
{ text: texto, mentions: mencoes },
{ quoted: info }
);

} catch (e) {
console.error(e);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ ᴀᴏ ᴍᴇɴᴄɪᴏɴᴀʀ.");
}
break;

case 'reviverqr':
if(!SoDono) return reply(mess.onlyOwner())
exec(`cd ${qrcode} && rm -rf pre-key* sender* session*`)
setTimeout(async () => {
await reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʀᴇɪɴɪᴄɪᴀɴᴅᴏ...*")
 setTimeout(async () => {
process.exit()
 }, 1200)
}, 1000)
break

case 'ptvmsg':
if (!isQuotedVideo && !info.message.videoMessage) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴜᴍ ᴠíᴅᴇᴏ/ɢɪғ ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ ᴄᴏɴᴠᴇʀᴛᴇʀ ᴘᴀʀᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ᴠíᴅᴇᴏ.*");
await kasane.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break

case 'reviver':
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ ᴀʟᴠᴏ!*")
await sleep(5000)
response2 = await kasane.groupParticipantsUpdate(from, [menc_prt], "add" )
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴜᴀʀɪᴏ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴅᴇ ᴠᴏʟᴛᴀ ᴀᴏ ɢʀᴜᴘᴏ.*")
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ só ᴏ ʙᴏᴛ ᴏᴜ ᴏ ᴅᴏɴᴏ ᴘᴏᴅᴇ ᴇxᴇᴄᴜᴛᴀʀ..*")
try {
await kasane.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'cronometro'://vncs & nunu
if(!SoDono) return reply(mess.onlyOwner());
async function CronZ(txt, timeArg) {
let totalTime = parseInt(timeArg, 10) * 60;
if (isNaN(totalTime) || totalTime > 60) totalTime = 60;
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}//vncs & nunu
const startMsg = `⏳ *Cronômetro Iniciado* ⏳\n\n${txt.length > 0 ? `*Mensagem:* ${txt}\n\n` : ''}*Tempo Restante: ${Math.floor(totalTime / 60)}:00*`;
let { key } = await kasane.sendMessage(from, { text: startMsg }, { quoted: info });
//vncs & nunu
const progressBarLength = 20;
//vncs & nunu
for (let i = totalTime - 1; i >= 0; i--) {
const minutes = Math.floor(i / 60);
const seconds = i % 60;
const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
const progress = Math.floor(((totalTime - i) / totalTime) * progressBarLength);
const progressBar = `[${'█'.repeat(progress)}${'░'.repeat(progressBarLength - progress)}]`;

await sleep(1000);

const updateMsg = `⏳ *Cronômetro* ⏳\n\n${txt.length > 0 ? `*Mensagem:* ${txt}\n\n` : ''}> *Tempo Restante:* ${timeString}\n${progressBar}`;
await kasane.sendMessage(from, { text: updateMsg, edit: key }, { quoted: info });
}

const endMsg = `✅ *Tempo Esgotado!* ✅\n\n${txt.length > 0 ? `*Mensagem:* ${txt}\n\n` : ''}*O tempo especificado terminou.*`;
await kasane.sendMessage(from, { text: endMsg }, { quoted: info });
}
const txt = args.slice(1).join(' ');
const timeArg = args[0];
CronZ(txt, timeArg);
break;

case 'seradm':
if(!SoDono) return reply(mess.onlyOwner());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
await mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
await kasane.groupParticipantsUpdate(from, [sender], "promote");
break

case 'sermembro':
if(!SoDono) return reply(mess.onlyOwner());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
await mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
await kasane.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertir':
case 'adverter': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(menc_os2 == botNumber) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏᴅᴇ ᴀᴅᴠᴇʀᴛɪʀ ᴏ ᴘʀóᴘʀɪᴏ ʙᴏᴛ.*");
if(menc_os2 == nmrdn) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏᴅᴇ ᴀᴅᴠᴇʀᴛɪʀ ᴏ ᴘʀóᴘʀɪᴏ ᴅᴏɴᴏ ᴅᴏ ʙᴏᴛ.*");
if(groupAdmins.includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴏssíᴠᴇʟ ᴀᴅᴠᴇʀᴛɪʀ ᴀᴅᴍɪɴsᴛʀᴀᴅᴏʀ ᴅᴏ ɢʀᴜᴘᴏ.*");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴛᴇᴍ ᴄᴏᴍᴏ ᴀᴅᴠᴇʀᴛɪʀ ᴜᴍ ᴜsᴜáʀɪᴏ ǫᴜᴇ ɴãᴏ sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴍᴀɪs ɴᴏ ɢʀᴜᴘᴏ.*")
ADVT.push(menc_os2); setGp(dataGp)
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = mess.warningAdvertencia(menc_os2, dfqn)
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); 
await mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); 
await mentions(dfntxt, [menc_os2])
}} else {
await kasane.sendMessage(from, {text: mess.finishAdvertencia(menc_os2), mentions: [menc_os2]}, {quoted: selo})
await sleep(1500)
await kasane.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); 
ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

case 'rmadv':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!marc_tds) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴍᴇɴᴄɪᴏɴᴀʀ ᴏ ᴀʟᴠᴏ ᴀᴘós ᴏ ᴄᴏᴍᴀɴᴅᴏ.*")
adv = dataGp[0].advertir.map(i => i).indexOf(marc_tds)
if(adv < 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴜsᴜáʀɪᴏ ɴãᴏ ᴄᴏɴᴛéᴍ ɴᴇɴʜᴜᴍᴀ ᴀᴅᴠᴇʀᴛêɴᴄɪᴀ ɴᴏ ɢʀᴜᴘᴏ.*")
dataGp[0].advertir.splice(adv, 1)
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀ ᴀᴅᴠᴇʀᴛêɴᴄɪᴀ ᴅᴏ ᴜsᴜáʀɪᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ ғᴏɪ ʀᴇᴛɪʀᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ!*")
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'sairdogp':
if(!SoDono) return reply(mess.onlyOwner())
if(!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`)
var getGroups = await kasane.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
await kasane.sendMessage(ingfoo[q].id, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɪʀᴇɪ sᴀɪʀ ᴅᴏ ɢʀᴜᴘᴏ, ᴘᴏʀ ᴏʀᴅᴇᴍ ᴅᴏ ᴍᴇᴜ ᴅᴏɴᴏ, ᴀᴅᴇᴜs...*"}) 
setTimeout(async() => {
await kasane.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘʀᴏɴᴛᴏ ᴍᴇᴜ ᴅᴏɴᴏ, sᴀɪʀ ᴅᴏ ɢʀᴜᴘᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀɪᴀ, ᴇᴍ ᴄᴀsᴏ ᴅᴇ ᴅúᴠɪᴅᴀs ᴀᴄɪᴏɴᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ʟɪsᴛᴀɢᴘ ᴘʀᴀ ᴠᴇʀɪғɪᴄᴀʀ..*")
break

case 'listagp':
if(!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
var getGroups = await kasane.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = `[Total: *${ingfoo.length}*] - Lista de Grupos e comunidades que estou atualmente:\n—\n`
for (let i = 0; i < ingfoo.length; i++) {
var metadt = await kasane.groupMetadata(ingfoo[i].id);
try {
var linkdogp = await kasane.groupInviteCode(ingfoo[i].id)
} catch {
var linkdogp = "Não foi possivel puxar o link."
}
teks1 += `( ${i+1} ) - Nome do Grupo: ${ingfoo[i].subject}\nID: ${ingfoo[i].id}\nLink do Grupo: https://chat.whatsapp.com/${linkdogp}\nCriado por: ${metadt.subjectOwner}\nCriado em: ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\nTotal de Participantes: ${ingfoo[i].participants.length}\n—\n`
}
reply(teks1)
break



case 'atividade':
case 'atividades':
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(mess.onlyAdmins())
if(isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map(i => i.groupId).indexOf(from)
if(countMessage[i6].numbers.length == 0) return
teks = `*Atividade dos membros do grupo:*\n–\n`
for(i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)
var uscnt = countMessage[i6].numbers[i]
teks += `• Participante: *@${uscnt.id.split('@')[0]}*\n• Quantidade de comandos usados pelo(a) participante no grupo: *${uscnt.cmd_messages}*\n• Quantidade de mensagens enviadas pelo(a) participante: *${uscnt.messages}*\n• O participante no momento está conectado em: *${uscnt.aparelho}*\n• Quantidade de figurinhas enviadas no grupo: *${uscnt.figus}*\n–\n`
}
await mention(teks)
} else return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴᴀᴅᴀ ғᴏɪ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ*")
} catch(error) {
console.log(error)
}
break

case 'inativos':
case 'inativo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(q.match(/[a-z]/i) || !q) return reply(`Exemplo: ${prefix+command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
await ClearMembersInactive()
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem pessoas com ${q} mensagens..`)
bli = `Usuários com *${q.trim()}* mensagem(ns) pra baixo estão listados abaixo, verifique:\n–\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `*${ac+1}.* @${blue[ac].split("@")[0]}\n`
}
await mention(bli)
break

case 'banghost':
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
if(q.match(/[a-z]/i) || !q || q.length > 3) return reply(`Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${prefix+command} 0`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= Number(q.trim()))
if(i.figus <= Number(q.trim()))
if(i.cmd_messages <= Number(q.trim()))
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`)
for ( i = 0; i < blue.length; i++) {
await sleep(1000)
await kasane.groupParticipantsUpdate(from, [blue[i]], "remove")}
break


case 'correio':
txt0 = args.join(" ")
if(!txt1) return reply(mess.syntaxAnonymousMail(prefix))
let txt1 = txt.split("/")[0].replace(/\D/g,'');
let txt2 = txt.split("/")[1];
if(!txt1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅê ᴏ ɴúᴍᴇʀᴏ ᴅᴏ ᴅᴇsᴛɪɴᴀᴛáʀɪᴏ?*")
if(!txt2) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅê ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴘᴀʀᴀ sᴇʀ ᴇɴᴠɪᴀᴅᴀ ᴀᴏ ᴅᴇsᴛɪɴᴀᴛáʀɪᴏ?*")
let [result] = await kasane.onWhatsApp(txt1)
if(!result) return reply(`O número fornecido está indisponível no WhatsApp! Verifique por favor.`)
await reagir(from, "💌️")
reply(mess.sucessAnonymousMail())
await kasane.sendMessage(result.jid, {text: mess.anonymousMail(txt0)}).catch(async(error) => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏʀ ᴀᴏ ᴇɴᴄᴀᴍɪɴʜᴀʀ ᴀ ᴍᴇɴsᴀɢᴇᴍ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ!*")
})
break

case 'nome-bot':
if(!SoDono&& !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
setting.NomeDoBot = q.trim()
fs.writeFileSync('./configs/settings.json', JSON.stringify(setting, null, 2))
reply(`O nome do bot foi alterado com sucesso para: ${setting.NomeDoBot}`)
break

case 'nick-dono':
if(!SoDono&& !isnit && !info.key.fromMe) return reply(mess.onlyOwner()) 
setting.ownerName = q.trim()
fs.writeFileSync('./configs/settings.json', JSON.stringify(setting, null, 2))
reply(`O nick do dono foi configurado para: ${setting.ownerName}`)
break

case 'numero-dono':
if(!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
if(q.match(/[a-z]/i)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *É ᴀᴘᴇɴᴀs ɴúᴍᴇʀᴏs..*")
setting.ownerNumber = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
fs.writeFileSync('./configs/settings.json', JSON.stringify(setting, null, 2))
reply(`O número dono foi configurado com sucesso para: ${q}`)
break

case 'prefixo-bot': case 'setprefix':
if(args.length < 1) return
if(!SoDono&& !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
setting.prefix = q.trim()
fs.writeFileSync('./configs/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case "fotomenu":
case "fundomenu": {
if (!SoDono) return reply(mess.onlyOwner);

// Garantir que existe mensagem marcada com imagem
const quoted =
info.message?.extendedTextMessage?.contextInfo?.quotedMessage;

if (!quoted?.imageMessage)
return reply("💧] Yosh *💧 ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ, ᴘᴀᴘᴀɪ!*");

try {
await reply("💧] Yosh *💧 ᴄᴀʟᴍᴀ ᴘᴀᴘᴀɪ, ᴊá ᴇsᴛᴏᴜ ᴛʀᴏᴄᴀɴᴅᴏ sᴜᴀ ғᴏᴛᴏ ᴍᴇɴᴜ..🙇🏻‍♀️!*");

// Download correto da imagem
const buffer = await downloadMediaMessage(
{ message: quoted },
"buffer"
);

const caminho =
"./bunker/database/data/media/images/menulist-image.jpg";

fs.writeFileSync(caminho, buffer);

await reply("💧] 𝐘osh *💧 ᴘʀᴏɴᴛɪɴʜᴏ, ᴘᴀᴘᴀɪ! ᴀ ғᴏᴛᴏ ᴅᴏ ᴍᴇɴᴜ ғᴏɪ ᴛʀᴏᴄᴀᴅᴀ!*");

} catch (err) {
console.error("Erro ao salvar fotomenu:", err);
await reply("💧] 𝐘osh *❌ ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴛᴇɴᴛᴀʀ sᴀʟᴠᴀʀ ᴀ ɪᴍᴀɢᴇᴍ 💧*");
}
}
break;

case 'setprefix':
if(args.length < 1) return
if(!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(mess.onlyOwner())
setting.prefix = q
fs.writeFileSync('./configs/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${q}`)
break

case 'wprivacyph':
if(!SoDono) return reply(mess.onlyOwner())
if(args.length < 1) return reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyph *--help*_`);
if (args[0] === '--help') return await mention(mess.helpPhotoPrivacy(prefix, sender));
if (args[0] === '-all') {
reply(`A minha foto do perfil agora está visível à todos.`);
await kasane.updateProfilePicturePrivacy('all')
} else if (args[0] === '-cntt') {
reply(`A minha foto do perfil agora está visível somente aos meus contatos.`);
await kasane.updateProfilePicturePrivacy('contacts')
} else if (args[0] === '-noall') {
reply(`A foto do meu perfil está privada a todos, até mesmo ao senhor mestre.`);
await kasane.updateProfilePicturePrivacy('none')
} else {
reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyph *--help*_`);
}
break

case 'wprivacygp':
if(!SoDono) return reply(mess.onlyOwner())
if(args.length < 1) return reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacygp *--help*_`);
if (args[0] === '--help') return await mention(mess.helpGroupPrivacy(prefix, sender));
if (args[0] === '-all') {
reply(`Pronto, agora todos pode me adicionar em grupo normalmente.`)
await kasane.updateGroupsAddPrivacy(`all`)
} else if (args[0] === '-cntt') {
reply(`Agora somente meus contatos, pode me adicionar em grupo.`)
await kasane.updateGroupsAddPrivacy(`contacts`)
} else if (args[0] === '-noall') {
reply(`Agora ninguém pode ousar me adicionar em grupo, pois será negado.`)
await kasane.updateGroupsAddPrivacy('none')
} else {
reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacygp *--help*_`);
}
break

case 'nomegp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
await kasane.groupUpdateSubject(from, `${body.slice(9)}`)
await kasane.sendMessage(from, {text: "💧] 𝐘osh *sᴜᴄᴇssᴏ, ᴀʟᴛᴇʀᴏᴜ ᴏ ɴᴏᴍᴇ ᴅᴏ ɢʀᴜᴘᴏ.*"}, {quoted: selo})
break

case 'envmsg':
if(!SoDono && !isnit) return reply(mess.onlyOwner())
var [tx1, tx2] = q.split("/")
await kasane.sendMessage(tx1, {text: tx2})
break

// ===============================
// DONO 1 ATÉ DONO 6
// ===============================

case 'dono1':
case 'dono2':
case 'dono3':
case 'dono4':
case 'dono5':
case 'dono6': {

  if (!SoDono && !isnit && !issupre && !ischyt)
    return reply('💧] 𝐘osh *ᴀᴘᴇɴᴀs ᴏ ᴅᴏɴᴏ ᴘᴏᴅᴇ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ.*');

  if (!q)
    return reply(
      '💧] Yosh *ᴜsᴇ sᴏᴍᴇɴᴛᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ.*\n' +
      '📌 *ᴇxᴇᴍᴘʟᴏ:* 559999999999'
    );

  // 🚫 BLOQUEIA @ E MENÇÕES
  if (q.includes('@') || mentionedJid?.length)
    return reply(
      '💧] 𝐘osh *ᴜsᴇ sᴏᴍᴇɴᴛᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ.*\n' +
      '🚫 *ɴᴀ̃ᴏ ᴍᴀʀǫᴜᴇ ᴜsᴜᴀ́ʀɪᴏs.*'
    );

  const numero = q.replace(/[^0-9]/g, '');

  if (numero !== q || numero.length < 10)
    return reply(
      '💧] 𝐘osh *ɴᴜ́ᴍᴇʀᴏ ɪɴᴠᴀ́ʟɪᴅᴏ.*\n' +
      '📌 *ᴜsᴇ ᴀᴘᴇɴᴀs ɴᴜ́ᴍᴇʀᴏs.*'
    );

  const indice = Number(command.replace('dono', ''));
  const campo = `numero_dono${indice}`;
  const alvo = `${numero}@s.whatsapp.net`;

  nescessario[campo] = numero;
  setNes(nescessario);

  await kasane.sendMessage(from, {
    text:
`💧] 𝐘osh *ᴅᴏɴᴏ ${indice} ᴅᴇғɪɴɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ!*
👤 *ᴜsᴜᴀ́ʀɪᴏ:* @${numero}`,
    mentions: [alvo]
  });

}
break;


// ===============================
// DELDONO
// ===============================

case 'deldono': {

  if (!SoDono && !isnit && !issupre && !ischyt)
    return reply('💧] Yish *ᴀᴘᴇɴᴀs ᴏ ᴅᴏɴᴏ ᴘᴏᴅᴇ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ.*');

  if (!q)
    return reply(
      '💧] 𝐘osh *ᴜsᴇ:* deldono 1\n' +
      '📌 *ᴇsᴄᴏʟʜᴀ ᴅᴇ 1 ᴀ 6.*'
    );

  const indice = Number(q);

  if (isNaN(indice) || indice < 1 || indice > 6)
    return reply(
      '💧] 𝐘osh *ɴᴜ́ᴍᴇʀᴏ ɪɴᴠᴀ́ʟɪᴅᴏ.*\n' +
      '📌 *ᴜsᴇ ᴅᴇ 1 ᴀ 6.*'
    );

  const campo = `numero_dono${indice}`;
  const numero = nescessario[campo];

  if (!numero)
    return reply(
      `💧] 𝐘osh *ɴᴀ̃ᴏ ᴇxɪsᴛᴇ ᴅᴏɴᴏ ɴᴀ ᴘᴏsɪᴄ̧ᴀ̃ᴏ ${indice}.*`
    );

  const alvo = `${numero}@s.whatsapp.net`;

  nescessario[campo] = '';
  setNes(nescessario);

  await kasane.sendMessage(from, {
    text:
`🗑️ 𝐘osh *ᴅᴏɴᴏ ${indice} ʀᴇᴍᴏᴠɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ!*
👤 *ᴜsᴜᴀ́ʀɪᴏ:* @${numero}`,
    mentions: [alvo]
  });

}
break;

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos': {
    const texto = mess.ownersList(
        NomeDoBot,
        numerodono_ofc,
        numero_dono1,
        numero_dono2,
        numero_dono3,
        numero_dono4,
        numero_dono5,
        numero_dono6
    )
    await kasane.sendMessage(from, {
        video: { url: './configs/donos.mp4' }, // vídeo local
        caption: texto,
        gifPlayback: true,
        mimetype: 'video/mp4',
        contextInfo: {
            isForwarded: true, // 🔥 ISSO ATIVA O BOTÃO
            forwardedNewsletterMessageInfo: {
                newsletterJid: setting.channeldl,
                newsletterName: NomeDoBot,
                serverMessageId: ""
            }
        }
    }, { quoted: selo })
}
break

case 'admins':
case 'listadmins':
case 'listaadmins':
if(!isGroup) return reply(mess.onlyGroup())
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
await mentions(ytb, groupAdmins, true)
break

case 'ativo': case 'on': case 'voltei':
if(!isGroupAdmins && !SoDono) return reply("💧] 𝐘osh *só ᴀᴅᴍ ᴏᴜ ᴅᴏɴᴏ ᴘᴏᴅᴇ ᴜᴛɪʟɪᴢᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ.*")
if(DonoOficial) {
if(fs.existsSync("./bunker/database/func/afk/afk-@" + numerodono_ofc + ".json")) {
DLT_FL("./bunker/database/func/afk/afk-@" + numerodono_ofc + ".json");
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʙᴇᴍ ᴠɪɴᴅᴏ ᴅᴇ ᴠᴏʟᴛᴀ, ᴀɢᴏʀᴀ ᴠᴏᴄê ᴇsᴛá ᴏɴʟɪɴᴇ 🙂*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ɴãᴏ ʀᴇɢɪsᴛʀᴏᴜ ɴᴇɴʜᴜᴍᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ᴀᴜsêɴᴄɪᴀ...*")
}
} else if(isGroupAdmins) {
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) return reply("💧] 𝐘osh *ɴãᴏ ʜá ɴᴇɴʜᴜᴍ ʀᴇɢɪsᴛʀᴏ ᴅᴇ ᴀᴜsêɴᴄɪᴀ sᴜᴀ..*")
dataGp[0].ausentes.splice(dataGp[0].ausentes.map(x => x.id).indexOf(sender), 1)
setGp(dataGp)
reply("💧] 𝐘osh *ʀᴇɢɪsᴛʀᴏ ᴅᴇ ᴀᴜsêɴᴄɪᴀ ᴛɪʀᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ...*")
}
break



case "solicitacao":
case "soli": {
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !SoDono) return reply(mess.only.admins)
if (!isBotGroupAdmins) return reply(mess.only.botAdmin)

try {
const solAll = await kasane.groupRequestParticipantsList(from)

if (!solAll || solAll.length === 0)
return reply("💧] 𝐘osh *ɴãᴏ ʜá sᴏʟɪᴄɪᴛᴀçõᴇs ᴘᴇɴᴅᴇɴᴛᴇs ɴᴇsᴛᴇ ɢʀᴜᴘᴏ!* 🙇🏻‍♂️")

// GLOBAL
if (!global.solicitacoes) global.solicitacoes = {}
global.solicitacoes[from] = solAll

const mentions = solAll.map(i => i.jid)

const lista = solAll.map((item, i) => {
return `💧 *${i + 1}º ᴜsᴜáʀɪᴏ*
✦ 👤 @${item.jid.split("@")[0]}
✦ 🪄 ᴍéᴛᴏᴅᴏ: ${item.request_method}
✦ ⏰ ᴛᴇᴍᴘᴏ: ${moment
.unix(item.request_time)
.tz("America/Sao_Paulo")
.format("DD/MM/YYYY HH:mm")}`
}).join("\n━━━━━━━━━━━━━━\n")

const texto = `💧] 𝐘osh *sᴏʟɪᴄɪᴛᴀçõᴇs ᴘᴇɴᴅᴇɴᴛᴇs*
━━━━━━━━━━━━━━
📜 *ᴛᴏᴛᴀʟ:* ${solAll.length}

${lista}

━━━━━━━━━━━━━━
⚙️ *ᴄᴏᴍᴀɴᴅᴏs*
✦ *sim* — ᴀᴘʀᴏᴠᴀʀ ᴀ ᴘʀɪᴍᴇɪʀᴀ
✦ *não* — ʀᴇᴄᴜsᴀʀ ᴀ ᴘʀɪᴍᴇɪʀᴀ
✦ *all* — ᴀᴘʀᴏᴠᴀʀ ᴛᴏᴅᴀs
✦ *noall* — ʀᴇᴄᴜsᴀʀ ᴛᴏᴅᴀs`

await kasane.sendMessage(from, { text: texto, mentions })
break

} catch (e) {
console.log("Erro solicitacao:", e)
reply("💧] 𝐘osh *ᴇʀʀᴏ ᴀᴏ ʟɪsᴛᴀʀ sᴏʟɪᴄɪᴛᴀçõᴇs!*")
}
}


case 'ausente': case 'off': case 'afk':
if(!isGroupAdmins && !SoDono) return reply("💧] 𝐘osh *só ᴀᴅᴍ ᴏᴜ ᴅᴏɴᴏ ᴘᴏᴅᴇ ᴜᴛɪʟɪᴢᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ.*")
if(DonoOficial) {
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
fs.writeFileSync(`./bunker/database/func/afk/afk-@${setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`, JSON.stringify({Ausente_Desde: msgtmp, Motivo_Da_Ausência: q}, null, 2));
reply(`Mensagem de ausência criada com sucesso...`)
} else if(isGroupAdmins) {
if(!q.trim()) return reply(`Digite a mensagem de ausência, Exemplo: ${prefix+command} Estou tomando banho`)
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
dataGp[0].ausentes.push({id: sender, msg: q.trim()})
setGp(dataGp)
reply("💧] 𝐘osh *ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ᴀᴜsêɴᴄɪᴀ ᴄʀɪᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ..\ɴsᴇ ᴅᴇsᴇᴊᴀ ᴅᴇsᴀᴛɪᴠᴀʀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ᴀᴜsêɴᴄɪᴀ ᴜsᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴀᴛɪᴠᴏ*")
} else {
dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim()
setGp(dataGp)
reply("💧] 𝐘osh *ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ᴀᴜsêɴᴄɪᴀ ᴀʟᴛᴇʀᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ..\ɴsᴇ ᴅᴇsᴇᴊᴀ ᴅᴇsᴀᴛɪᴠᴀʀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ᴀᴜsêɴᴄɪᴀ ᴜsᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴀᴛɪᴠᴏ*")
}
} else {
return reply("💧] 𝐘osh *ᴄᴏᴍᴀɴᴅᴏ ᴀᴘᴇɴᴀs ᴘᴀʀᴀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴇ ᴅᴏɴᴏ ᴅᴏ ʙᴏᴛ..*")
}
break

case 'addvip': {
  if (!SoDono) return reply(mess.onlyOwner());

  if (!q)
    return reply('💧] 𝐘osh *Use:* addvip numero/dias\nEx: 559999999999/30\nUse 0 para vip infinito.');

  let barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/");
  let [nmr, tempo] = barra.split('/');

  if (!nmr || tempo === undefined)
    return reply('💧] 𝐘osh *Formato inválido.*\nEx: 559999999999/30');

  let usur = nmr.replace(/\D/g, '') + "@s.whatsapp.net";
  let dias = Number(tempo);
  let infinito = dias <= 0;
  let hoje = moment.tz('America/Sao_Paulo').format('DD');

  let existe = vip.findIndex(v => v.id === usur);

  if (existe !== -1) {
    if (vip[existe].infinito)
      return reply('💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *Este usuário possui vip infinito.*');

    vip[existe].dias += dias;
  } else {
    vip.push({
      id: usur,
      dias: dias,
      save: Number(hoje),
      infinito: infinito
    });
  }

  fs.writeFileSync('./bunker/database/usuarios/vip.json', JSON.stringify(vip));

  reply(
    `💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *VIP ATUALIZADO*\n` +
    `📌 Número: ${nmr}\n` +
    `⏳ Duração: ${infinito ? 'Infinito' : dias + ' dia(s)'}`
  );
}
break;

case 'delvip': {
  if (!SoDono) return reply(mess.onlyOwner());

  if (!q)
    return reply('💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *Digite apenas o número.*');

  let usur = q.replace(/\D/g, '') + "@s.whatsapp.net";
  let index = vip.findIndex(v => v.id === usur);

  if (index === -1)
    return reply('💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *Este número não é VIP.*');

  vip.splice(index, 1);
  fs.writeFileSync('./bunker/database/usuarios/vip.json', JSON.stringify(vip));

  reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *VIP removido com sucesso!*\n📌 Número: ${q}`);
}
break;

case 'consultar_vip': {
  let index = vip.findIndex(v => v.id === sender);

  if (index === -1)
    return reply('💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *Você não é VIP.*');

  let dados = vip[index];

  reply(
    `💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *SEU VIP*\n` +
    `📌 Número: ${sender.split('@')[0]}\n` +
    `⏳ Expiração: ${dados.infinito ? 'Infinito' : dados.dias + ' dia(s)'}`
  );
}
break;

case 'viplist': {
  if (vip.length === 0)
    return reply('💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *Nenhum usuário VIP cadastrado.*');

  let texto = `💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *LISTA VIP*\n`;
  texto += `📊 Total: ${vip.length}\n\n`;

  vip.forEach((v, i) => {
    texto +=
      `*[${i + 1}]* Número: ${v.id.split('@')[0]}\n` +
      `⏳ Expiração: ${v.infinito ? 'Infinito' : v.dias + ' dia(s)'}\n\n`;
  });

  reply(texto.trim());
}
break;
case 'limpar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
await kasane.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'd_':
await kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber}})
break

case 'doc':
case 'docfake':
try {
sprd = "|"
if(!q) return reply(`${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.android.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {document: fs.readFileSync('./bunker/database/data/docf.txt'), mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo:{forwardingScore:999,isForwarded:true}}
await kasane.sendMessage(from, Messagemdoc, {quoted: selo})
} catch (err) {
console.log(err)
reply(mess.error())
}
break

case 'deletar': case 'delete': case 'del':case 'd':
if(!menc_prt) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ ᴜsᴜáʀɪᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴀᴘᴀɢᴀʀ, ᴅᴏ ʙᴏᴛ ᴏᴜ ᴅᴇ ᴀʟɢᴜéᴍ.*")
await kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'fundobemvindo':
case 'fundobv':
if(!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
if(!isQuotedImage) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ..*")
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴅᴇᴠᴇ ᴍᴀʀᴄᴀʀ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴄᴏᴍ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ, sᴇ ɴãᴏ ғᴏʀ ᴅᴇ ᴘʀɪᴍᴇɪʀᴀ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ, ᴏᴋ? *")
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.fundo1 = res
fs.writeFileSync("./configs/links_img.json", JSON.stringify(logoslink, null, 2));
reply(`A imagem de bem vindo foi alterado com sucesso para: ${res}`)
}
break

case 'fundolevel':
if(!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
if(!isQuotedImage) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ..*")
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴅᴇᴠᴇ ᴍᴀʀᴄᴀʀ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴄᴏᴍ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ, sᴇ ɴãᴏ ғᴏʀ ᴅᴇ ᴘʀɪᴍᴇɪʀᴀ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ, ᴏᴋ? *")
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.fundolevel = res
fs.writeFileSync("./configs/links_img.json", JSON.stringify(logoslink, null, 2));
reply(`A imagem de fundo-level foi alterado com sucesso para: ${res}`)
}
break

case 'fundosaiu':
if(!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
if(!isQuotedImage) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ..*")
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴅᴇᴠᴇ ᴍᴀʀᴄᴀʀ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴄᴏᴍ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ, sᴇ ɴãᴏ ғᴏʀ ᴅᴇ ᴘʀɪᴍᴇɪʀᴀ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ, ᴏᴋ? *")
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.fundo2 = res
fs.writeFileSync("./configs/links_img.json", JSON.stringify(logoslink, null, 2));
reply(`A imagem de saiu foi alterado com sucesso para: ${res}`)
}
break

case 'antiligar':
case 'antiligacao':
case 'antiligação':
if(!SoDono) return reply(mess.onlyOwner())
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴀɴᴛɪ ʟɪɢᴀçãᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.*")
}
break

case 'antipv':
if(!SoDono) return reply(mess.onlyOwner())
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
reply(`Antipv ativado com sucesso, caso alguém enviar mensagem para mim, irei bloquear!`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀ ғᴜɴçãᴏ ᴀɴᴛɪᴘᴠ ғᴏɪ ᴅᴇsᴀʙɪʟɪᴛᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ, ᴀɢᴏʀᴀ ᴛᴏᴅᴏs ᴘᴏᴅᴇᴍ ᴍᴇ ᴜsᴀʀ ɴᴏ ᴘᴠ.*")
}
break

case 'antipv2':
if(!SoDono) return reply(mess.onlyOwner())
if(!isAntiPv2) {
nescessario.antipv2 = true
setNes(nescessario)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀɴᴛɪᴘᴠ2 ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ, ᴏ ᴘᴠ ᴘᴏᴅᴇ sᴇʀ ᴜsᴀᴅᴏ, ᴍᴀs ɴãᴏ ʙʟᴏǫᴜᴇᴀʀᴇɪ, só ɪʀᴇɪ ғʟᴏᴅᴀʀ ᴀ ᴄᴀᴅᴀ ᴍᴇɴsᴀɢᴇᴍ ǫᴜᴇ ᴇʟᴇ ᴇɴᴠɪᴀʀ ᴀᴠɪsᴀɴᴅᴏ..*")
} else if(isAntiPv2) {
nescessario.antipv2 = false
setNes(nescessario)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀɴᴛɪᴘᴠ2 ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ, ᴀɢᴏʀᴀ ᴏ ᴍᴇᴜ ᴘᴠ ᴇsᴛá ᴛᴏᴛᴀʟᴍᴇɴᴛᴇ ʟɪʙᴇʀᴀᴅᴏ.*")
}
break

case 'antipv3':
if(!SoDono) return reply(mess.onlyOwner())
if(!isAntiPv3) {
nescessario.antipv3 = true
setNes(nescessario)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀɴᴛɪᴘᴠ3 ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ, ɪʀᴇɪ ɪɢɴᴏʀᴀʀ ᴛᴏᴅᴀs ᴀs ᴍᴇɴsᴀɢᴇɴs ʀᴇᴄᴇʙɪᴅᴀs ɴᴏ ᴘᴠ, ᴇxᴄᴇᴛᴏ: ᴅᴏɴᴏs ᴇ ᴜsᴜáʀɪᴏs ᴠɪᴘ..*")
} else if(isAntiPv3) {
nescessario.antipv3 = false
setNes(nescessario)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀɴᴛɪᴘᴠ3 ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ, ᴀɢᴏʀᴀ ʀᴇsᴘᴏɴᴅᴇʀᴇɪ ᴛᴏᴅᴏs sᴇᴍ ᴘʀᴇғᴇʀêɴᴄɪᴀ!*")
}
break

case 'limitarcmd': case 'limitarcomando': case 'limitecmd':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
dataGp[0].Limitar_CMD = !dataGp[0].Limitar_CMD
setGp(dataGp);
reply(dataGp[0]?.Limitar_CMD ? "Limitador de comandos ativado com sucesso no grupo: "+groupName : "Limitador de comandos desativado no grupo: "+groupName)
break

case 'tempocmd':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!q.trim()) return reply(`Exemplo: ${prefix+command} 120\n60 = 1 minuto\nExemplo que coloquei, com o : ${prefix}limitarcmd ativo, só podera usar comandos a cada 2 minutos\nBoa sorte.`)
dataGp[0].Limit_tempo = q.trim()
setGp(dataGp)
reply(`Tempo limite definido para: ${TimeCount(q.trim())} a cada comando.`)
break

case 'lyrics': case 'letramusica':
if(!q) return reply(`Você esqueceu de colocar após o comando o nome da música...`);
try {
data = await fetchJson(API_URL+`/api/pesquisa/letramusic?query=${q}&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {text: mess.lyrics(data, II), contextInfo: {externalAdReply: {title: data.resultado.name, body: data.resultado.description, thumbnail: await getBuffer(data.resultado.image), mediaType: 2, sourceUrl: data.resultado.url}}}, {quoted: selo});
} catch(error) {
return reply(mess.error())
};
break

case 'bbbnews': case 'bbb24news': case 'bbb24': case 'bbb': case 'bigbrother':
if(args[0] === '-fhouse') {
try {
data = await fetchJson(API_URL+`/api/noticias/bbb24/fora-da-casa?apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: data.resultado[0].image || "https://telegra.ph/file/8cd5cb765008d883ffcc8.jpg"}, caption: data.resultado.map((v, index) => `*${index+1}.* ${v.title}\n• _${v.headline}_\n–\n• Sessão da Notícia: *${capitalizeFirstLetter(v.session)}*\n• Postagem: *${v.posted}*\n• Mais informações: *${v.link}*`).join("\n———\n")}, {quoted: selo});
} catch(error) {
return reply(mess.error());
}
} else if(args[0] === '-dhouse') {
try {
data = await fetchJson(API_URL+`/api/noticias/bbb24/dentro-da-casa?apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: data.resultado[0].image || "https://telegra.ph/file/8cd5cb765008d883ffcc8.jpg"}, caption: data.resultado.map((v, index) => `*${index+1}.* ${v.title}\n• _${v.headline}_\n–\n• Sessão da Notícia: *${capitalizeFirstLetter(v.session)}*\n• Postagem: *${v.posted}*\n• Mais informações: *${v.link}*`).join("\n———\n")}, {quoted: selo});
} catch(error) {
return reply(mess.error());
}
} else if(args[0] === '-bigdays') {
try {
data = await fetchJson(API_URL+`/api/noticias/bbb24/bigdays?apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: data.resultado[0].image || "https://telegra.ph/file/8cd5cb765008d883ffcc8.jpg"}, caption: data.resultado.map((v, index) => `*${index+1}.* ${v.title}\n• _${v.headline}_\n–\n• Sessão da Notícia: *${capitalizeFirstLetter(v.session)}*\n• Postagem: *${v.posted}*\n• Mais informações: *${v.link}*`).join("\n———\n")}, {quoted: selo});
} catch(error) {
return reply(mess.error());
}
} else {
reply(`🪩 - Big Brother Brasil [BBB24] - 👨🏼‍🤝‍👨🏻\n• Usando o comando de forma errada, as opções disponíveis são:\nObs: Todos os dados são retornados do *Gshow*, site oficial da emissora.\n—\n*1.* _${prefix+command}_ *-fhouse* _→_ Esta opção retornará todas as notícias fora da casa as mais recentes de preferência.\n\n*2.* _${prefix+command}_ *-dhouse* _→_ A opção "-dhouse" retorna todas as ocorrências postadas de dentro da casa recentemente.\n\n*3.* _${prefix+command}_ *-bigdays* → Essa opção tem a função de mostrar os dias de votações, entre outros(as)...`);
};
break

case 'blockuser':
if(!SoDono&& !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(mess.onlyOwner())
if(!q.length > 6) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ @ ᴅᴏ ᴜsᴜáʀɪᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ʙʟᴏǫᴜᴇᴀʀ ᴅᴇ ᴇʟᴇ ᴜᴛɪʟɪᴢᴀʀ ᴏs ᴄᴏᴍᴀɴᴅᴏs, ᴏᴜ ᴏ ɴúᴍᴇʀᴏ ᴅᴀ ғóʀᴍᴀ ǫᴜᴇ ᴄᴏᴘɪᴀʀ...*")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇssᴇ ɴúᴍᴇʀᴏ ᴊá ᴇsᴛᴀ ɪɴᴄʟᴜsᴏ ɴᴀ ʟɪsᴛᴀ ᴅᴇ ʙʟᴏǫᴜᴇɪᴏ.*")
ban.push(blcp)
fs.writeFileSync('./bunker/database/usuarios/banned.json', JSON.stringify(ban))
await kasane.sendMessage(from, {text: mess.bannedMessage(blcp), mentions: [blcp]})
break

case 'unblockuser':
if(!SoDono&& !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(mess.onlyOwner())
if(!q.length > 6) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ @ ᴅᴏ ᴜsᴜáʀɪᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴅᴇsʙʟᴏǫᴜᴇᴀʀ ᴘʀᴀ ᴇʟᴇ ᴜᴛɪʟɪᴢᴀʀ ᴏs ᴄᴏᴍᴀɴᴅᴏs, ᴏᴜ ᴏ ɴúᴍᴇʀᴏ ᴅᴀ ғóʀᴍᴀ ǫᴜᴇ ᴄᴏᴘɪᴀʀ...*")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇssᴇ ɴúᴍᴇʀᴏ ɴãᴏ ᴇsᴛá ɪɴᴄʟᴜsᴏ ɴᴀ ʟɪsᴛᴀ ᴅᴇ ʙʟᴏǫᴜᴇᴀᴅᴏs.*")
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./bunker/database/usuarios/banned.json', JSON.stringify(ban))
await kasane.sendMessage(from, {text: mess.unbannedMessage(blcp), mentions: [blcp]})
break

case 'acess':
if(!SoDono && !isnit && !issupre && !ischyt) return reply(mess.onlyOwner())
teks = body.slice(7)
await exec(teks, async(err, stdout) => {
if(err) return await kasane.sendMessage(from, {text: `root@AKAMOficial:~ ${err}`}, {quoted: selo})
if(stdout) return await kasane.sendMessage(from, {text: stdout})
})
break

case 'execut':
if(!SoDono&& !isnit && !issupre && !ischyt) return reply(mess.onlyOwner())
try {
return eval(`(async() => { ${args.join(' ')}})()`)
} catch(error) {
await kasane.sendMessage(from, {text: `${error}`}, {quoted: selo})
}
break

case 'exec':
if(!SoDono&& !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return await eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break

case 'ping': {
  await kasane.sendMessage(from, {
    react: { text: '🏃🏻‍♂️', key: info.key }
  })

  const speedConverted = ((Date.now() / 1000) - info.messageTimestamp).toFixed(3)
  const uptime = TimeCount(process.uptime())
  const memoryMB = (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + ' MB'

  // 👤 JID REAL DE QUEM USOU O COMANDO
  const userJid = info.key.participant || info.participant

  // 🧠 Avatar do usuário (não do grupo)
  let avatarUser
  try {
    avatarUser = await kasane.profilePictureUrl(userJid, 'image')
  } catch {
    avatarUser = 'https://tokito-apis.site/d91f1a.jpg'
  }

  const fundo = 'https://tokito-apis.site/9e70c3.jpg'

  const canvasPing =
    `https://tokito-apis.site/canvas/ping?` +
    `ping=${speedConverted}` +
    `&uptime=${encodeURIComponent(uptime)}` +
    `&memory=${encodeURIComponent(memoryMB)}` +
    `&avatar=${encodeURIComponent(avatarUser)}` +
    `&fundo=${encodeURIComponent(fundo)}`

  const ds = `[💧] 𝐘𝐔𝐊𝐈𝐑𝐀 ᴇsᴛᴀ́ ᴀᴛɪᴠᴀ ᴇ ᴏᴘᴇʀᴀɴᴅᴏ.*
*ᴠᴇʀɪꜰɪᴄᴀᴄ̧ᴀ̃ᴏ ᴅᴇ ᴘᴇʀꜰᴏʀᴍᴀɴᴄᴇ ᴄᴏɴᴄʟᴜɪ́ᴅᴀ*

📊 *ʟᴀᴛᴇ̂ɴᴄɪᴀ:* *${speedConverted} segs*
⏱️ *ᴜᴘᴛɪᴍᴇ:* *${uptime}*

⚙️ *sɪsᴛᴇᴍᴀ*
• 🖥️ *sᴏ:* ${os.type()} (${os.release()})
• 🧠 *ʀᴀᴍ:* ${((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2)}%
🧩 *ᴀᴍʙɪᴇɴᴛᴇ*
• 🟢 *ɴᴏᴅᴇᴊs:* ${process.version}
• 🟣 *ʙᴀɪʟᴇʏs:* 7.0.0.rc-9

> 💧 *© 𝐘𝐔𝐊𝐈𝐑𝐀 💧 ⸺͟͞✰*`

  await kasane.sendMessage(
    from,
    {
      image: { url: canvasPing },
      caption: ds,
      contextInfo: {
        isForwarded: true,
        forwardingScore: 1,
        forwardedNewsletterMessageInfo: {
          newsletterJid: setting.channeldl,
          newsletterName: NomeDoBot,
          serverMessageId: ''
        }
      }
    },
    { quoted: info }
  )

  break
}
case 'antispam': {
if (!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ só ғᴜɴᴄɪᴏɴᴀ ᴇᴍ ɢʀᴜᴘᴏs.*");

// Inicializa variáveis globais
if (!global.antispamStatus) global.antispamStatus = {};
if (!global.userMessages) global.userMessages = {};

// Alterna o estado do antispam
global.antispamStatus[from] = !global.antispamStatus[from];

let statusText = global.antispamStatus[from]
? "✅ Sistema de antispam ativado! Se alguém spammar, o grupo será fechado."
: "❌ Sistema de antispam desativado!";

await kasane.sendMessage(from, { text: statusText }, { quoted: info });

// Se ativo, monitora esta mensagem
if (global.antispamStatus[from]) {
const spamThreshold = 3; // Quantas mensagens em sequência para considerar spam
const spamTime = 5000;// Tempo em ms para resetar contagem

const senderId = sender;
if (!global.userMessages[senderId]) global.userMessages[senderId] = [];

// Identifica conteúdo da mensagem (qualquer tipo)
const type = Object.keys(info.message)[0];
let content = '';
if (type === 'conversation') content = info.message.conversation;
else if (type === 'extendedTextMessage') content = info.message.extendedTextMessage.text;
else content = type; // stickers, imagens, áudio, vídeo

const now = Date.now();
global.userMessages[senderId] = global.userMessages[senderId].filter(msg => now - msg.time < spamTime);

// Adiciona mensagem atual
global.userMessages[senderId].push({ type, content, time: now });

// Se passar do limite, fecha o grupo
if (global.userMessages[senderId].length >= spamThreshold) {
try {
// Fecha o grupo para membros não-admins
await kasane.groupSettingUpdate(from, 'announcement'); // somente admins podem enviar mensagem
// Limpa histórico do usuário
global.userMessages[senderId] = [];
} catch(e) {
console.log("Não foi possível fechar o grupo:", e);
}
}
}
break;
}
case 'gtts':
try {
if (args.length < 1) return await kasane.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: selo})
const gtts = require('./bunker//funcoes/gtts.js')(args[0])
if (args.length < 2) return await kasane.sendMessage(from, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ғᴀʟᴛᴀ ᴄᴏʟᴏᴄᴀʀ ᴏ ᴄóᴅɪɢᴏ ᴅᴏ ɪᴅɪᴏᴍᴀ!*"}, {quoted: selo})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘᴀʀᴀ ʀᴇᴅᴜᴢɪʀ sᴘᴀᴍ ᴏ ᴍáxɪᴍᴏ ᴅᴇ ʟᴇᴛʀᴀs ᴘᴇʀᴍɪᴛɪᴅᴀs sãᴏ 200!*")
gtts.save(ranm, dtt, async function() {
await exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, async(err) => {
await kasane.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
DLT_FL(ranm); DLT_FL(rano)
})
})
} catch(error) {
return reply(mess.error())
}
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'avalie':
if(q.length < 1) return reply(`Exemplo: *${prefix}avalie* _“Bot muito bom, parabéns.”_`);
if(q.length > 400) return reply(`Você *utrapassou* o máximo de 400 caracteres.`);
await sendMentions(nmrdn, `📚🤍 *[Avaliação]* - Recebi uma avaliação do(a) usuário(a): *@${sender.split("@")[0]}*\n- Detalhes: _“${q}”_`);
await sendMentions(from, `Olá *@${sender.split("@")[0]}*, enviei sua avaliação para um dos meus superiores! Agradeço pelo uso contínuo de mim e pela avaliação, vamos melhorar a cada dia sempre! 🤍🤖`);
break

case 'bug':
if(q.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴍᴘᴏ ᴠáᴢɪᴏ? ᴘᴏʀ ғᴀᴠᴏʀ, ᴅᴇsᴄʀᴇᴠᴀ ᴏ ᴇʀʀᴏ ᴏᴄᴏʀʀɪᴅᴏ ᴘᴀʀᴀ sᴇʀ sᴏʟᴜᴄɪᴏɴᴀᴅᴏ ᴘᴇʟᴀ ᴍɪɴʜᴀ ᴇǫᴜɪᴘᴇ!*");
if(q.length > 800) return reply(`Você *utrapassou* o máximo de 800 caracteres.`);
await sendMentions(nmrdn, `🤖❌️ [ERROR] - O(a) usuário(a) *@${sender.split("@")[0]}* relatou a ocorrência de um erro ao utilizar um comando.\n- Detalhes: _“${q}”_`);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴsᴀɢᴇᴍ ᴇɴᴠɪᴀᴅᴀ ᴀᴏ ᴍᴇᴜ sᴜᴘᴇʀɪᴏʀ, sᴇ ᴇɴᴠɪᴀʀ ᴍᴜɪᴛᴀs ᴍᴇɴsᴀɢᴇɴs ʀᴇᴘᴇᴛɪᴅᴀ ᴘᴏʀ ᴢᴜᴇɪʀᴀs, ᴠᴏᴄê sᴇʀá ʙᴀɴɪᴅᴏ(ᴀ) ᴅᴇ ᴜsᴀʀ ᴏs ᴄᴏᴍᴀɴᴅᴏs ᴅᴏ ʙᴏᴛ.*");
break

case 'sugestão': case 'sugestao':
if(q.length < 1) return reply(`Exemplo: *${prefix}sugestao* _“Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso..”_`)
if(q.length > 800) return reply(`Você *utrapassou* o máximo de 800 caracteres.`);
await sendMentions(nmrdn, `📮🤍 *[Sugestões]* - Sugestões de novos comandos, enviado pelo(a) usuário(a): *@${sender.split("@")[0]}*\n- Detalhes recebidos: _“${q}”_`);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴsᴀɢᴇᴍ ᴇɴᴠɪᴀᴅᴀ ᴀᴏ ᴍᴇᴜ ᴅᴏɴᴏ, ᴏʙʀɪɢᴀᴅᴏ ᴘᴇʟᴀ sᴜɢᴇsᴛãᴏ, ᴛᴇɴᴛᴀʀ ᴏᴜᴠɪʀ ᴏ ᴍáxɪᴍᴏ ᴘᴏssíᴠᴇʟ ᴅᴇ sᴜɢᴇsᴛõᴇs.*");
break

case "modoaluguel": {
if (!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 • 𝙴𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚜𝚘́ 𝚏𝚞𝚗𝚌𝚒𝚘𝚗𝚊 𝚎𝚖 𝚐𝚛𝚞𝚙𝚘𝚜.*");
if (!isGroupAdmins) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 • 𝙰𝚙𝚎𝚗𝚊𝚜 𝚊𝚍𝚖𝚒𝚗𝚜 𝚙𝚘𝚍𝚎𝚖 𝚞𝚜𝚊𝚛 𝚒𝚜𝚜𝚘.*");
if (!isBotGroupAdmins) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 • 𝙴𝚞 𝚙𝚛𝚎𝚌𝚒𝚜𝚘 𝚜𝚎𝚛 𝚊𝚍𝚖 𝚙𝚛𝚊 𝚎𝚜𝚜𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘.*");

// alternar estado
dataGp[0].isModoaluguel = !dataGp[0].isModoaluguel;
setGp(dataGp);

if (dataGp[0].isModoaluguel) {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 • 𝙼𝚘𝚍𝚘 𝚍𝚎 𝚊𝚕𝚞𝚐𝚞𝚎𝚕 𝚊𝚝𝚒𝚟𝚊𝚍𝚘 𝚗𝚘 𝚐𝚛𝚞𝚙𝚘.*");
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 • 𝙼𝚘𝚍𝚘 𝚍𝚎 𝚊𝚕𝚞𝚐𝚞𝚎𝚕 𝚍𝚎𝚜𝚊𝚝𝚒𝚟𝚊𝚍𝚘.*");
}

break;
}

case "infoaluguel": {
const filePath = "./bunker/database/grupos/aluguel/aluguel.json";

if (!fs.existsSync(filePath))
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 • 𝙉𝚎𝚗𝚑𝚞𝚖 𝚊𝚕𝚞𝚐𝚞𝚎𝚕 𝚊𝚝𝚒𝚟𝚘 𝚗𝚎𝚜𝚜𝚎 𝚐𝚛𝚞𝚙𝚘.*");

let db = JSON.parse(fs.readFileSync(filePath));
const data = db[from];

if (!data || !data.ativo)
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 • 𝙉𝚊̃𝚘 𝚑𝚊́ 𝚊𝚕𝚞𝚐𝚞𝚎𝚕 𝚊𝚝𝚒𝚟𝚘 𝚗𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘.*");

const agora = moment().tz("America/Sao_Paulo");
const expira = moment(data.expira);
const duracao = moment.duration(expira.diff(agora));

const dias = Math.floor(duracao.asDays());
const horas = duracao.hours();
const minutos = duracao.minutes();

let tempoRestante = [];
if (dias > 0) tempoRestante.push(`${dias} dia${dias > 1 ? "s" : ""}`);
if (horas > 0) tempoRestante.push(`${horas} hora${horas > 1 ? "s" : ""}`);
if (minutos > 0) tempoRestante.push(`${minutos} minuto${minutos > 1 ? "s" : ""}`);

if (tempoRestante.length === 0) tempoRestante = ["menos de 1 minuto"];
else tempoRestante = tempoRestante.join(", ");

const dataFormatada = expira.format("DD/MM/YYYY [às] HH:mm");

const msg = `
💧 *𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘̧𝙤̃𝙚𝙨 𝙙𝙤 𝙖𝙡𝙪𝙜𝙪𝙚𝙡*

• 𝙀𝚜𝚝𝚊́ 𝚊𝚝𝚒𝚟𝚘: *${data.ativo ? "Sim" : "Não"}*
• 𝙑𝚊𝚕𝚎 𝚊𝚝𝚎́: *${dataFormatada}*
• 𝚃𝚒𝚙𝚘: *${data.tipo || "Não informado"}*
• 𝚁𝚎𝚜𝚝𝚊𝚖: *${tempoRestante}*

💧 • 𝙊 𝚋𝚘𝚝 𝚜𝚎𝚛𝚊́ 𝚛𝚎𝚖𝚘𝚟𝚒𝚍𝚘 𝚍𝚎𝚙𝚘𝚒𝚜 𝚚𝚞𝚎 𝚘 𝚙𝚛𝚊𝚣𝚘 𝚎𝚡𝚙𝚒𝚛𝚊𝚛.
`;

await kasanesendMessage(from, { text: msg });
break;
}

case "rnaluguel": {
if (!isGroupAdmins)
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 • 𝘼𝚙𝚎𝚗𝚊𝚜 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚙𝚘𝚍𝚎𝚖 𝚁𝚎𝚖𝚘𝚟𝚎𝚛 𝚘 𝚊𝚕𝚞𝚐𝚞𝚎𝚕.*");

const filePath = "./bunker/database/grupos/aluguel/aluguel.json";

if (!fs.existsSync(filePath))
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 • 𝙉𝚎𝚗𝚑𝚞𝚖 𝚊𝚕𝚞𝚐𝚞𝚎𝚕 𝚌𝚊𝚍𝚊𝚜𝚝𝚛𝚊𝚍𝚘.*");

let db = JSON.parse(fs.readFileSync(filePath));

if (!db[from])
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 • 𝙄𝚜𝚜𝚘 𝚗𝚊̃𝚘 𝚎𝚡𝚒𝚜𝚝𝚎 𝚗𝚘 𝚋𝚊𝚗𝚍𝚘 𝚍𝚎 𝚊𝚕𝚞𝚐𝚞𝚎𝚕.*");

delete db[from];
fs.writeFileSync(filePath, JSON.stringify(db, null, 2));

reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💧 • 𝘼𝚕𝚞𝚐𝚞𝚎𝚕 𝚛𝚎𝚖𝚘𝚟𝚒𝚍𝚘 𝚌𝚘𝚖 𝚜𝚞𝚌𝚎𝚜𝚜𝚘.*");
break;
}

case 'addcmdvip':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("addcmdvip addcmdvip") || (tp.includes("addcmdvipaddcmdvip"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isCmdVip.includes(args[0])) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴊá ᴇsᴛá ɪɴᴄʟᴜsᴏ ɴᴀ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs ᴠɪᴘ, ᴠᴇʀɪғɪǫᴜᴇ.*")
isCmdVip.push(args[0])
fs.writeFileSync('./configs/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos vip.`)
break

case 'delcmdvip':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("delcmdvip delcmdvip") || (tp.includes("delcmdvipdelcmdvip"))) return reply(`Tá louco maluco? Não tem como deletar o mesmo comando.`)
if(!isCmdVip.includes(args[0])) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴊá ᴇsᴛá ᴇxᴄʟᴜíᴅᴏ ᴅᴀ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs ᴠɪᴘ.*")
var i = isCmdVip.indexOf(args[0])
isCmdVip.splice(i, 1)
fs.writeFileSync('./configs/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de comandos vip.`)
break

case 'listacmdvip': case 'cmdviplist':
tkks = `[Total: *${isCmdVip.length}*] - Comandos que foram adicionados para uso Vip:\n–\n`
tkks += isCmdVip.map((v, index) =>`\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
await kasane.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'blocklist':
if(ban.length == 0) return reply(`Existe *0* user(s) bloqueado(s), ou seja, não existe ninguém.`)
tkks = `[Total: *${ban.length}*] - Lista de Usuários bloqueados pelo julgamento do(s) donos(as):\n–\n`
tkks += ban.map((v, index) =>`\t• [ *N° ${index+1}* ] - Usuário: @${v.split('@')[0]}`).join('\n–\n')
await kasane.sendMessage(from, {text: tkks.trim(), mentions: ban}, {quoted: selo})
break

case 'blockcmdgp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmdblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴊá ᴇsᴛá ʙʟᴏǫᴜᴇᴀᴅᴏ.*")
await addComandos(from, args[0])
reply(`O comando *${args[0]}* foi bloqueado no grupo com sucesso.`)
break

case 'unblockcmdgp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmdunblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)
if(!getComandoBlock(from).includes(args[0])) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴊá ᴇsᴛá ᴅᴇsʙʟᴏǫᴜᴇᴀᴅᴏ.*")
await deleteComandos(from, args[0])
reply(`O comando *${args[0]}* foi desbloqueado com sucesso no grupo.`)
break

case 'listblockcmdgp': case 'listbcmdgp':
if(!isGroup) return reply(mess.onlyGroup());
if(getComandoBlock(from).length == 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴇxɪsᴛᴇ ᴀɪɴᴅᴀ ɴᴇɴʜᴜᴍ *ᴄᴏᴍᴀɴᴅᴏ ʙʟᴏǫᴜᴇᴀᴅᴏ* ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*");
tkks = `[Total: *${getComandoBlock(from).length}*] - Comandos bloqueados pelo adminstrador(s) do grupo:\n–\n`
tkks += getComandoBlock(from).map((v, index) =>`\t• [ *N° ${index+1}* ] - Comando: ${prefix + getComandoBlock(from)[v]}`).join('\n–\n')
await kasane.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'blockcmdg':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("blockcmdg blockcmdg") || (tp.includes("blockcmdgblockcmdg"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isBlockCmdG.includes(args[0])) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴊá ᴇsᴛá ɪɴᴄʟᴜsᴏ ɴᴀ ʟɪsᴛᴀ ᴅᴇ *ᴄᴏᴍᴀɴᴅᴏs ʙʟᴏǫᴜᴇᴀᴅᴏs ɢʟᴏʙᴀʟ*.*")
isBlockCmdG.push(args[0])
fs.writeFileSync('./configs/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos bloqueados global.`)
break

case 'unblockcmdg':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("unblockcmdg unblockcmdg") || (tp.includes("unblockcmdgunblockcmdg"))) return reply(`Tá louco maluco? Não tem como desbloquear o mesmo comando.`)
if(!isBlockCmdG.includes(args[0])) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ɴãᴏ ᴇsᴛá ɪɴᴄʟᴜsᴏ ɴᴀ ʟɪsᴛᴀ ᴅᴇ *ᴄᴍᴅs ʙʟᴏǫᴜᴇᴀᴅᴏs ɢʟᴏʙᴀʟ*.*")
var ab = isBlockCmdG.indexOf(args[0])
isBlockCmdG.splice(ab, 1)
fs.writeFileSync('./configs/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de cmds bloqueados global.`)
break

case 'listbcmdglobal':
if(isBlockCmdG.length == 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍ *ᴄᴏᴍᴀɴᴅᴏ ʙʟᴏǫᴜᴇᴀᴅᴏ* ɴᴀ ʟɪsᴛᴀ.*")
tkks = `[Total: *${isBlockCmdG.length}*] - Lista de comandos bloqueados pelo(s) meus proprietários:\n–\n`
tkks += isBlockCmdG.map((v, index) =>`\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
await kasane.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'gimage':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} naruto`)
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/google-img?nome=${q}&apikey=${API_KEY_BRONXYS}`);
kasane.sendMessage(from, {image: {url: ABC[Math.floor(Math.random() * ABC.length)].url}}).catch(() => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*");
})
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*");
}
break;

case 'google': case 'googlesrc': 
if(!q) return reply(`Você esqueceu de colocar o que você deseja pesquisar após o comando.`);
try {
reply(mess.wait());
data = await fetchJson(API_URL+`/api/pesquisa/google?query=${q}&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {text: data.resultado.map(v =>`• Título: *${v.title}*\n• Descrição: *${v.snippet}*\n• Link: *${v.link}*`).join('\n–\n'), contextInfo: {externalAdReply: {title: data.resultado[0].title, body: data.resultado[0].snippet, mediaType: 2, sourceUrl: data.resultado[0].link}}}, {quoted: selo});
} catch(error) {
return reply(mess.error())
}
break

case 'print': case 'printdesite':
if(!q.trim()) return reply(`Faltando a url do site que quer tirar print, Exemplo: ${prefix+command} https://google.com\n\nNão esqueça do https se o site tiver, ou http se não for um site com ssl`)
try {
kasane.sendMessage(from, {image: {url: `https://api.bronxyshost.com.br/api-bronxys/print_de_site?url=${q.trim()}&apikey=${API_KEY_BRONXYS}`}}, {quoted: selo}) 
} catch {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*");
}
break;

case 'memes': case 'memedroid':
try {
reply(mess.wait())
res = await axios.get(API_URL+`/api/memes?apikey=`+API_KEY_KASANE);
teks = pickRandom(res.data.pesquisa.resultado)
await kasane.sendMessage(from, {image: await getBuffer(teks.imagem), caption: mess.memesImages(teks)}, {quoted: selo}).catch(async(error) => {
return reply(mess.error());
})
} catch (error) {
return reply(mess.error());
}
break

case 'memesvid': case 'ifunnyvideo':
try {
reply(mess.wait())
res = await axios.get(API_URL+`/api/memesvid?apikey=`+API_KEY_KASANE);
teks = pickRandom(res.data.videos)
await kasane.sendMessage(from, {video: await getBuffer(teks.video), caption: mess.iFunnyVideo(teks)}, {quoted: selo}).catch(async(error) => {
return reply(mess.error());
})
} catch (error) {
return reply(mess.error());
}
break

case 'noticias': case 'getnoticias':
try {
if (!q) return reply(`Informe um tema para realizar a pesquisa de suas notícias!`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`);
d = await pickRandom(theNews.data.articles)

reply(`> *${d.title}* - ${d.author} [${d.source.name}]\n–\n• Descrição: *${d.description}*\n• Postagem: *${d.publishedAt.split('T').join(' - ').split('Z')[0]}*\n• URL: *${d.url}*`)
} catch (error) {
return reply(mess.error())
}
break

case 'googlenews': case 'gnews':
try {
idioma = "pt-br"; // Idioma: Português do Brasil
country = "BR"; // Mude a sigla para qual você quiser puxar as notícias.
dataNews = await fetchJson(`https://delirius-api-oficial.vercel.app/api/noticias?language=${idioma}&country=${country}`);
NTD = pickRandom(dataNews.headline_stories);
await reply(`> Google Notícias - Brasil:\n–\n• Título: *${NTD.title}*\n• Postagem por: *${NTD.by}* | ${NTD.published}\n–\n• URL: *${NTD.url}*`);
} catch(e) {
return await reply(mess.error());
}
break

case 'cases':
if(!SoDono) return reply(mess.onlyOwner())
try {
const listCases = () => {
const fileContent = fs.readFileSync("kasane.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴᴇɴʜᴜᴍᴀ ᴄᴀsᴇ ᴇɴᴄᴏɴᴛʀᴀᴅᴀ.*")}}
kasane.sendMessage(from, {text: listCases()}, { quoted: selo});
} catch(e) {reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴏʙᴛᴇʀ ᴀs ᴄᴀsᴇs.*")}
break

case 'pinterest':
case 'pin': {
  try {
    if (!q)
      return reply(
        '💧💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴅɪɢɪᴛᴇ ᴏ ɴᴏᴍᴇ ᴅᴀ ɪᴍᴀɢᴇᴍ*\n' +
        `💧] *ᴇxᴇᴍᴘʟᴏ:* ${prefix + command} ᴀɴɪᴍᴇ`
      );

    await reagir(from, "📷");

    await kasane.sendMessage(
      from,
      {
        image: {
          url: `https://tokito-apis.site/api/pinterest?q=${q}&mode=landscape`
        },
        caption:
          '💧] 𝐘𝐔𝐊𝐈𝐑𝐀\n\n' +
          '> 🎨 *ɪᴍᴀɢᴇᴍ ᴅᴏ ᴘɪɴᴛᴇʀᴇsᴛ*\n' +
          `> 🔎 *ᴘᴇsǫᴜɪsᴀ:* ${q}`,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: setting.channeldl,
            newsletterName: NomeDoBot,
            serverMessageId: -1
          }
        }
      },
      { quoted: info }
    );

  } catch (error) {
    console.log(error);
    reply(mess.error());
  }
}
break;


case 'pinterestmp4':
try {
if(!q) return reply(`Insira o link de algum vídeo do Pinterest\nExemplo: ${prefix + command} https://pin.it/2rjIHJxKm`)
reply(mess.wait());
data = await fetchJson(API_URL+`/api/download/pinterest?url=${q}&apikey=`+API_KEY_KASANE)
await kasane.sendMessage(from, {video: {url: data.video}, mimetype: "video/mp4"}, {quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
} catch(e) {
reply(mess.error())
}
break

case "rgtake": {
const [TP, TP2] = q.split("|");

let rgtake = [];
try {
rgtake = JSON.parse(fs.readFileSync("./bunker/database/usuarios/take.json"));
} catch {}

if (!TP || !TP2)
return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 ᴀᴠɪsᴀ: *Uso incorreto*\n\n➡️ *Exemplo:* *${prefix + command} kasane|bot*`, {
reagir: "⚠️",
});

if (rgtake.find((i) => i.usuario === sender))
return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀: *Você já registrou sua marca d'água.*`, {
reagir: "❌",
});

rgtake.push({ usuario: sender, mcdagua1: TP, mcdagua2: TP2 });

fs.writeFileSync(
"./bunker/database/usuarios/take.json",
JSON.stringify(rgtake, null, 2)
);

reply(`❄️] 𝐘𝐔𝐊𝐈𝐑𝐀 — ✅ *Registro efetuado!* \nUse: *${prefix}take*`, {
reagir: "✅",
});
break;
}

case "take": {
  const s =
    info.message?.extendedTextMessage?.contextInfo?.quotedMessage
      ?.stickerMessage;

  if (!s)
    return reply(
      `💧] 𝐘𝐔𝐊𝐈𝐑𝐀: *Marque uma figurinha para aplicar sua marca d'água.*\n\n➡️ *Uso:* ${prefix}take`,
      { reagir: "😿" }
    );

  try {
    const r = JSON.parse(
      fs.readFileSync("./bunker/database/usuarios/take.json")
    );
    const u = r.find((i) => i.usuario === sender);

    if (!u)
      return reply(
        `💧] 𝐘𝐔𝐊𝐈𝐑𝐀: *Você não tem registro.*\nRegistre com: ${prefix}rgtake kasane|bot`,
        { reagir: "😿" }
      );

    const i = getRandom(".webp");
    const o = getRandom(".webp");
    const e = getRandom(".exif");

    fs.writeFileSync(i, await getFileBuffer(s, "sticker"));

    const m = {
      "sticker-pack-name": u.mcdagua1.trim(),
      "sticker-pack-publisher": u.mcdagua2.trim(),
    };

    const h = Buffer.from([
      73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0,
      22, 0, 0, 0,
    ]);

    const jb = Buffer.from(JSON.stringify(m));
    const ex = Buffer.concat([h, jb]);
    ex.writeUIntLE(jb.length, 14, 4);

    fs.writeFileSync(e, ex);

    exec(`webpmux -set exif ${e} ${i} -o ${o}`, async (er) => {
      if (er) {
        reply(
          `💧] 𝐘𝐔𝐊𝐈𝐑𝐀: Erro ao aplicar metadados.`,
          { reagir: "⚠️" }
        );
      } else {
        await kasane.sendMessage(
          from,
          {
            sticker: fs.readFileSync(o),
            contextInfo: {
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: setting.channeldl,
                newsletterName: NomeDoBot,
                serverMessageId: -1
              }
            }
          },
          { quoted: info }
        );

        await reagir(from, "✅");
      }

      [i, o, e].forEach(
        (f) => fs.existsSync(f) && fs.unlinkSync(f)
      );
    });
  } catch (err) {
    console.log(err);
    return reply(
      `💧] 𝐘𝐔𝐊𝐈𝐑𝐀: Erro ao processar figurinha.`,
      { reagir: "😿" }
    );
  }
  break;
}

case "reação":
case "rch": {
if (!isVip) return reply(mess.onlyVipUser());
const cooldownTime = 15 * 1000 // 15s
if (!global.cooldownRCH) global.cooldownRCH = {}
if (global.cooldownRCH[from] && Date.now() - global.cooldownRCH[from] < cooldownTime)
return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀɢᴜᴀʀᴅᴇ ${Math.ceil((cooldownTime - (Date.now() - global.cooldownRCH[from])) / 1000)}s ᴘᴀʀᴀ ᴜsᴀʀ ɴᴏᴠᴀᴍᴇɴᴛᴇ!*`)
global.cooldownRCH[from] = Date.now()
if (!q)
return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴏ ɪɴᴄᴏʀʀᴇᴛᴏ!*

✦ ᴇxᴇᴍᴘʟᴏ:
!rch https://whatsapp.com/channel/xxxx | 👍,🔥,😭`)

const [link, emojis] = q.split("|").map(v => v.trim())
if (!link || !emojis)
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ғᴏʀᴍᴀᴛᴏ ɪɴᴠáʟɪᴅᴏ!*")

if (!link.includes("whatsapp.com/channel"))
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʟɪɴᴋ ᴅᴇ ᴄᴀɴᴀʟ ɪɴᴠáʟɪᴅᴏ!*")
const startTime = Date.now()
if (!global.contadorRCH) global.contadorRCH = 0
global.contadorRCH++
try {
await kasane.sendMessage(from, { react: { text: "⏳", key: info.key }})
reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘʀᴇᴘᴀʀᴀɴᴅᴏ ʀᴇᴀçõᴇs...*

✦ 🔗 ᴄᴀɴᴀʟ:
${link}

✦ 😈 ᴇᴍᴏᴊɪs:
${emojis}
`)
const apiUrl = `http://node2.lunes.host:3040/api/reacts?post_link=${encodeURIComponent(link)}&reacts=${encodeURIComponent(emojis)}&apitoken=blux-bot`
const res = await fetch(apiUrl)
const json = await res.json()
if (!res.ok || !json.status)
throw new Error("API_FAIL")
await kasane.sendMessage(from, { react: { text: "🔥", key: info.key }})
const tempo = ((Date.now() - startTime) / 1000).toFixed(2)
reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʀᴇᴀçõᴇs ᴇɴᴠɪᴀᴅᴀs ᴄᴏᴍ sᴜᴄᴇssᴏ!*

✦ ✅ sᴛᴀᴛᴜs: ᴄᴏɴᴄʟᴜíᴅᴏ
✦ 🚀 ᴛᴇᴍᴘᴏ: ${tempo}s
✦ 🔢 ᴜsᴏs ᴛᴏᴛᴀɪs: ${global.contadorRCH}

✦ 🔗 ᴅᴇsᴛɪɴᴏ:
${json.result?.link || link}

✦ 🔥 ᴇᴍᴏᴊɪs:
${json.result?.emojis || emojis}
`)
await kasane.sendMessage(from, { react: { text: "✅", key: info.key }})
console.log(`[RCH] ${pushname} (${from}) → ${emojis}`)
} catch (err) {
console.error("[RCH ERROR]", err)
reagir(from, "❌")
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ғᴀʟʜᴀ ᴀᴏ ᴇɴᴠɪᴀʀ ʀᴇᴀçõᴇs!*\n✦ ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ.")
}
}
break

case "rntake": {
// carregar registros (garante que a variável exista)
let rgtake = [];
try {
rgtake = JSON.parse(fs.readFileSync("./bunker/database/usuarios/take.json"));
} catch {}

const i8 = rgtake.map(i => i.usuario).indexOf(sender);
if (i8 < 0)
return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀: *Como você quer renomear algo que não existe no seu registro?*`, {
reagir: "❌",
});

if (!q || !q.includes("|"))
return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀: Uso incorreto.\n➡️ Exemplo: *${prefix + command} kasane|bot*`, {
reagir: "⚠️",
});

var [MARCAD1, MARCAD2] = q.split("|");
if (!MARCAD1)
return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀: Você esqueceu o primeiro campo.\nEx: *${prefix + command} kasane|bot*`, {
reagir: "⚠️",
});
if (!MARCAD2)
return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀: Você esqueceu o segundo campo.\nEx: *${prefix + command} kasane|bot*`, {
reagir: "⚠️",
});

rgtake[i8].mcdagua1 = MARCAD1;
rgtake[i8].mcdagua2 = MARCAD2;

fs.writeFileSync("./bunker/database/usuarios/take.json", JSON.stringify(rgtake, null, 2) + "\n");

reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 — ✅ *Sua marca d'água foi alterada para* "${MARCAD1}|${MARCAD2}"`, {
reagir: "✅",
});
break;
}

case 'gerarlink2':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
await reagir(from, "😸");
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
owgi = await getFileBuffer(boij, 'image');
await kasane.sendMessage(from, {text: `• Link gerado: *${await upload(owgi)}*`}, {quoted: selo});
await reagir(from, "✅️");
} else if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && !q.length <= 1) { 
await reagir(from, "😸"); 
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage;
owgi = await getFileBuffer(boij, 'video');
await kasane.sendMessage(from, {text: `• Link gerado: *${await upload(owgi)}*`}, {quoted: selo});
await reagir(from, "✅️"); 
} else {
await reagir(from, "😿"); 
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴅᴇᴠᴇ ᴍᴀʀᴄᴀʀ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ, ᴏᴜ ᴜᴍ ᴠíᴅᴇᴏ ᴅᴇ ᴀᴛé 30 sᴇɢᴜɴᴅᴏs..*");
}
} catch {
await reagir(from, "❌️");
reply(mess.errorUploadImage());
}
break


case 'gerarlink': {
const FormData = require("form-data");

async function uploadTokito(midia) {
try {
const { fileTypeFromBuffer } = await import("file-type");
const type = await fileTypeFromBuffer(midia);
const ext = type?.ext || "jpg";

const form = new FormData();
form.append("image", midia, { filename: `upload.${ext}` });

const uploadRes = await fetch("https://tokito-apis.site/api/upload", {
method: "POST",
body: form,
headers: form.getHeaders({ "User-Agent": "Mozilla/5.0" }),
});

if (!uploadRes.ok) throw new Error(await uploadRes.text());
const json = await uploadRes.json();

if (!json.sucesso || !json.url) throw new Error("Upload falhou!");
return json.url;
} catch (err) {
console.error("Erro upload Tokito:", err.message);
throw err;
}
}

const isMidia = isQuotedVideo || isQuotedImage || isImage || isVideo;
if (!isMidia) return reply(`"💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ, ᴘᴀʀᴀ ǫᴜᴇ ᴇᴜ ᴘᴏssᴀ ᴄᴏɴᴠᴇʀᴛᴇʀ ᴇᴍ ʟɪɴᴋ.*`);

await reagir(from, "🔗");

try {
let midia, buffer, tipoMensagem, icone;
const { fileTypeFromBuffer } = await import("file-type");

if ((isMedia && info.message?.imageMessage) || isQuotedImage) {
midia = isQuotedImage
? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
: info.message.imageMessage;
buffer = await getFileBuffer(midia, "image");
tipoMensagem = "imagem";
icone = "🖼️";
} else if ((isMedia && info.message?.videoMessage) || isQuotedVideo) {
midia = isQuotedVideo
? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
: info.message.videoMessage;
buffer = await getFileBuffer(midia, "video");
tipoMensagem = "vídeo";
icone = "🎥";
} else {
return reply(`⚠️ | Só é permitido gerar link de *imagem ou vídeo*.`);
}

await reagir(from, icone);

const urlGerada = await uploadTokito(buffer);

const legenda_heart = `🔗 *Link de ${tipoMensagem} gerado com sucesso!*`;
const botoes = [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "💧⃞𝙲𝙾𝙿𝙸𝙰𝚁 𝙻𝙸𝙽𝙺⃞💧",
copy_code: urlGerada
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "💧⃞𝙰𝙱𝚁𝙸𝚁 𝙻𝙸𝙽𝙺⃞💧",
url: urlGerada,
merchant_url: urlGerada
})
}
];

let headerPreview = null;
try {
const preview = await prepareWAMessageMedia(
tipoMensagem === "vídeo"
? { video: { url: urlGerada } }
: { image: { url: urlGerada } },
{ upload: kasane.waUploadToServer }
);
headerPreview = tipoMensagem === "vídeo" ? preview.videoMessage : preview.imageMessage;
} catch {
headerPreview = null;
}

const carouselMessage = {
cards: [
{
header: headerPreview
? tipoMensagem === "vídeo"
 ? { hasMediaAttachment: true, videoMessage: headerPreview }
 : { hasMediaAttachment: true, imageMessage: headerPreview }
: undefined,
headerType: headerPreview ? (tipoMensagem === "vídeo" ? "VIDEO" : "IMAGE") : "NONE",
body: { text: `╭─『💧』𝐋𝐈𝐍𝐊 𝐆𝐄𝐑𝐀𝐃𝐎『💧』─╮
*💧 Yukira processou o algoritmo com precisão.*
*O link está pronto para uso.*

> *${NomeDoBot}*` },
footer: { text: `Clique abaixo para copiar ou abrir.` },
nativeFlowMessage: { buttons: botoes }
}
]
};

await kasane.relayMessage(
from,
{
interactiveMessage: {
body: { text: legenda_heart }, // AQUI VAI A DECORAÇÃO
carouselMessage
}
},
{}
);

} catch (err) {
console.error(err);
return reply(`❌ *tokito sussurra:* “Não consegui gerar esse link...”`);
}
}
break;

// LOGOS 
/*
case 'cria': 
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ?*")
teks = q
if (teks.length > 15) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴀᴛé 15 ᴄᴀʀᴀᴄᴛᴇʀᴇs*")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
yurimodz = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
kasane.sendMessage(from, { image: yurimodz }, { quoted: selo })
break

case 'anime1':
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ?*")
teks = q
if (teks.length > 15) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴀᴛé 15 ᴄᴀʀᴀᴄᴛᴇʀᴇs*")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
yurimodz = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
kasane.sendMessage(from, { image: yurimodz }, { quoted: selo })
break

case 'ff1':
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ?*")
teks = q
if (teks.length > 15) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴀᴛé 15 ᴄᴀʀᴀᴄᴛᴇʀᴇs*")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
yurimodz = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
kasane.sendMessage(from, { image: yurimodz }, {quoted: selo })
break	

case 'game':
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ?*")
teks = q
if (teks.length > 15) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴀᴛé 15 ᴄᴀʀᴀᴄᴛᴇʀᴇs*")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
yurimodz = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
kasane.sendMessage(from, { image: yurimodz }, { quoted: selo })
break

case 'ff2':
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ?*")
teks = q
if (teks.length > 15) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴀᴛé 15 ᴄᴀʀᴀᴄᴛᴇʀᴇs*")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
yurimodz = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
kasane.sendMessage(from, { image: yurimodz }, { quoted: selo })
break	

case 'anime2':
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ?*")
teks = q
if (teks.length > 15) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴀᴛé 15 ᴄᴀʀᴀᴄᴛᴇʀᴇs*")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
yurimodz = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
kasane.sendMessage(from, { image: yurimodz }, { quoted: selo })
break

case 'entardecer':
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ?*")
teks = q
if (teks.length > 15) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴀᴛé 15 ᴄᴀʀᴀᴄᴛᴇʀᴇs*")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
yurimodz = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
kasane.sendMessage(from, { image: yurimodz }, { quoted: selo })
break

case 'indian':
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ?*")
teks = q
if (teks.length > 15) return reply("💧💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴀᴛé 15 ᴄᴀʀᴀᴄᴛᴇʀᴇs*")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
yurimodz = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
kasane.sendMessage(from, { image: yurimodz }, { quoted: selo })
break 

case 'ffrose':
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ?*")
teks = q
if (teks.length > 15) return reply("Cara fiz um teste aqui] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴀᴛé 15 ᴄᴀʀᴀᴄᴛᴇʀᴇs*")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
yurimodz = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
kasane.sendMessage(from, { image: yurimodz }, { quoted: selo })
break	

case 'ffgren':
if (args.length < 1) return reply("Cara fiz um teste aqui] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ?*")
teks = q
if (teks.length > 15) return reply("Cara fiz um teste aqui] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴀᴛé 15 ᴄᴀʀᴀᴄᴛᴇʀᴇs*")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
yurimodz = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
kasane.sendMessage(from, { image: yurimodz }, { quoted: selo })
break		

case 'chufuyu':
if (args.length < 1) return reply("Cara fiz um teste aqui] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ?*")
teks = q
if (teks.length > 15) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴀᴛé 15 ᴄᴀʀᴀᴄᴛᴇʀᴇs*")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
yurimodz = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
kasane.sendMessage(from, { image: yurimodz }, { quoted: selo })
break	

case 'wolf':
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ?*")
teks = q
if (teks.length > 15) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴀᴛé 15 ᴄᴀʀᴀᴄᴛᴇʀᴇs*")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
yurimodz = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
kasane.sendMessage(from, { image: yurimodz }, { quoted: selo })
break	

case 'dragonred':
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ?*")
teks = q
if (teks.length > 15) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴀᴛé 15 ᴄᴀʀᴀᴄᴛᴇʀᴇs*")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
yurimodz = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
kasane.sendMessage(from, { image: yurimodz }, { quoted: selo })
break
*/
case 'qc':
if(!q) return reply(`Para usar este comando é nescessário adicionar algo após o comando.`)
reply(mess.wait())
try {ppimg = await kasane.profilePictureUrl(sender, 'image')} catch {ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'}
await axios.post('https://quote.btch.bz/generate', {"type": "quote", "format": "png", "backgroundColor": "#FFFFFF", "width": 512, "height": 768, "scale": 2, "messages": [{"entities": [], "avatar": true, "from": {"id": 1, "name": pushname, "photo": {"url": ppimg}}, "text": q, "replyMessage": {}}]}, {headers: {'Content-Type': 'application/json'}}).then(async(res) => {
const buffer = new Buffer.from(res.data.result.image, 'base64')
await kasane.sendImageAsSticker(from, buffer, {author: `📌 Criado(a) por: ${NomeDoBot}`})
}).catch(async(error) => {
return reply(mess.error());
})
break

case 'figuweb':
verifText = args.join(" ")
if(!verifText) return reply(mess.syntaxWebSticker(prefix));
let text, colorNumber;
if (q.includes('/')) {[text, colorNumber] = q.split('/')} else {text = q; colorNumber = '1'}
await reagir(from, "💬");
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *• ᴀɢᴜᴀʀᴅᴇ, ᴇsᴛᴏᴜ ɢᴇʀᴀɴᴅᴏ ᴀ ғɪɢᴜʀɪɴʜᴀ ᴅᴇ ᴀᴄᴏʀᴅᴏ ᴏ ǫᴜᴇ ᴠᴏᴄê sᴏʟɪᴄɪᴛᴏᴜ!*");
const colorC = {'1': '#000000', '2': '#FFFFFF','3': '#FF0000', '4': '#0000FF'};
const backgroundColor = colorC[colorNumber] || '#000000';
try {ppimg = await kasane.profilePictureUrl(sender, 'image')} catch {ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'}
axios.post('https://quote.btch.bz/generate', {"type": "quote", "format": "png", "backgroundColor": backgroundColor, "width": 512, "height": 768, "scale": 2, "messages": [{"entities": [], "avatar": true, "from": {"id": 1, "name": pushname, "photo": {"url": ppimg}}, "text": text, "replyMessage": {}}]}, {headers: {'Content-Type': 'application/json'}}).then(async(resultar) => {
const bufferE = new Buffer.from(resultar.data.result.image, 'base64')
await kasane.sendImageAsSticker(from, bufferE, {author: `📌 Criado(a) por: ${NomeDoBot}`})
}).catch(async(error) => {
return reply(mess.error());
})
break

case 'amazon': case 'amazonsearch':
if(q.trim().length < 4) return reply(`NaN, você esqueceu de colocar o nome do produto após o comando.`)
reply(mess.wait());
try {
ABC = await fetchJson(API_URL+`/api/pesquisa/amazon?nome=${q}&apikey=`+API_KEY_KASANE);
MAP_MAP_RESULT = ABC.resultado.map((v, index) => `*${index+1}.* Produto: *${v.titulo}*\n• Valor do Produto: *${v.valor}*\n• Link: *${v.link}*`).join('\n–\n');
await kasane.sendMessage(from, {text: `> 𝐀𝐦𝐚𝐳𝐨𝐧 - 𝐒𝐭𝐨𝐫𝐞\n–\n${MAP_MAP_RESULT}`, contextInfo: {externalAdReply: {title: ABC.resultado[0].titulo, thumbnail: await getBuffer(ABC.resultado[0].imagem), mediaType: 2, sourceUrl: ABC.resultado[0].link}}}, {quoted: selo});
} catch(error) {
return reply(mess.error());
}
break

case 'brasileirao':
try {
ABC = await fetchJson(API_URL+`/api/noticias/brasileirao?apikey=`+API_KEY_KASANE);
reply(`⚽️📊 *Tabela Brasileirão:*\n–\n${ABC.resultado.map((v, index) => `${index+1}°) Time: *${v.equipe}*\n• Pontos alcançados pelo time: *${v.pontos}*\n• Jogos jogados pelo time: *${v.jogosJogados}*`).join("\n–\n")}`)
} catch(error) {
return reply(mess.error())
}
break

case 'receita': case 'revenue': 
if (!q) return reply(`NaN, você esqueceu de digitar após o comando.`)
try {
data = await fetchJson(API_URL+`/api/pesquisa/pesquisar-receitas?query=${q}&apikey=`+API_KEY_KASANE)
if (data.resultado.length == 0) return reply(mess.noresult())
RST = "> 𝐂𝐲𝐛𝐞𝐫𝐂𝐨𝐨𝐤 - 𝐑𝐞𝐜𝐞𝐢𝐭𝐚𝐬\n—\n"
RST += data.resultado.map((v, index) => `*${index+1}.* Título: *Receita de ${v.title}*\n• Avaliação: *${v.assessment.starEmoji} (${v.assessment.star})*\n• Enviado(a) por: *${v.by}*\n• URL: *${v.url}*`).join('\n—\n')
await kasane.sendMessage(from, {text: RST, contextInfo: {externalAdReply: {title: `Receita de ${data.resultado[0].title} - Enviada por: '${data.resultado[0].by}'`, body: `Encontre as melhores receitas culinárias no CyberCook, clique aqui!`, thumbnail: await getBuffer(data.resultado[0].image), mediaType: 2, sourceUrl: data.resultado[0].url}}}, {quoted: selo});
} catch(error) {
return reply(mess.error())
}
break

case 'playstore':
if (!q) return reply(`NaN, você esqueceu de digitar após o comando.`)
try {
AB = await fetchJson(API_URL+`/api/pesquisa/playstore?nome=${q}&apikey=`+API_KEY_KASANE)
if (AB.pesquisa.resultado.length == 0) return reply(mess.noresult())
ABC = `> 𝐏𝐥𝐚𝐲𝐒𝐭𝐨𝐫𝐞 𝐀𝐩𝐩𝐬 - 𝐒𝐞𝐚𝐫𝐜𝐡\n–\n`
ABC += `${AB.pesquisa.resultado.map((v, index) =>`*${index+1}.* Nome: *${v.nome}*\n• Desenvolvedor: *${v.desenvolvedor}*\n• Avaliação dos usuários do aplicativo: *${v.estrelas} Estrelas*\n• Url: *${v.link}*`).join('\n–\n')}`
await kasane.sendMessage(from, {text: ABC, contextInfo: {externalAdReply: {title: AB.pesquisa.resultado[0].nome, body: `Avaliação: ${AB.pesquisa.resultado[0].estrelas} • Desenvolvedor: ${AB.pesquisa.resultado[0].desenvolvedor}`, thumbnail: await getBuffer(AB.pesquisa.resultado[0].imagem), mediaType: 2, sourceUrl: AB.pesquisa.resultado[0].link}}}) 
} catch(error) {
return reply(mess.error());
}
break

case 'happymod':
if (!q) return reply(`NaN, você esqueceu de digitar após o comando.`)
try {
AB = await fetchJson(API_URL+`/api/pesquisa/happymod?nome=${q}&apikey=`+API_KEY_KASANE)
if (AB.resultado.length == 0) return reply(mess.noresult())
ABC = `> 𝐇𝐚𝐩𝐩𝐲𝐦𝐨𝐝 - 𝐒𝐞𝐚𝐫𝐜𝐡\n–\n`
ABC += `${AB.resultado.map((v, index) =>`*${index+1}.* Nome: *${v.nome}*\n• Url: *${v.link}*`).join('\n–\n')}`
await kasane.sendMessage(from, {text: ABC, contextInfo: {externalAdReply: {title: AB.resultado[0].nome, body: `• Clique aqui para ser redirecionado(a) ao site do Happymod..`, thumbnail: await getBuffer(AB.resultado[0].icon), mediaType: 2, sourceUrl: AB.resultado[0].link}}}) 
} catch(error) {
return reply(mess.error());
}
break
case 'autorizar':
case 'autoriza':
if (!isGroup) return reply(mess.onlyAdmins());
if (!isGroupAdmins) return reply(mess.onlyGroup());
const solAll = await kasane.groupRequestParticipantsList(from);
if (solAll == false) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴇᴍ sᴏʟɪᴄɪᴛᴀçõᴇs ᴘᴇɴᴅᴇɴᴛᴇs.*");
let formattedString = solAll.map(item => `• Usuário: *@${item.jid.replace('@s.whatsapp.net', '')}*\n• Método de Requisição: *${item.request_method}*\n• Tempo: *${moment.unix(item.request_time).format('LLL')}*`).join('\n———\n');
mention(`[⚠️] - *SOLICITAÇÕES PENDENTES:*\n${formattedString}\n–\n• Argumentações nescessárias do comando: _SIM - NÃO - ALL - NOALL_\n• Opção: _"SIM"_ -> Aprovar a solicitação do usuário(a) no grupo.\n• Opção: _"NÃO"_ -> Rejeite todos os usuários sem aprovação.\n• Opção: _"ALL"_ -> Aprovar todos os solitantes da requisição no grupo.\n• Opção: _"NOALL"_ -> Rejeite todos os solitantes de uma vez.`);
awaitMessage({chatJid: from, sender: sender, expectedMessages: ["sim", "nao", "não", "all", "noall", "exit"], filter: (info) => info?.message?.extendedTextMessage?.text || info?.message?.conversation}, kasane)
.then(async(collected) => {
const AutoResp = collected?.message?.extendedTextMessage?.text || collected?.message?.conversation;
const lowerCaseAutoResp = AutoResp.toLowerCase(); // Convert the user's input to lowercase
if (/sim/gi.test(lowerCaseAutoResp)) {
await kasane.groupRequestParticipantsUpdate(from, [solAll[0].jid], 'approve');
} else if (/não|nao/gi.test(lowerCaseAutoResp)) {
await kasane.groupRequestParticipantsUpdate(from, [solAll[0].jid], 'reject');
} else if (/noall/gi.test(lowerCaseAutoResp)) {
for (let i = 0; i < solAll.length; i++) {
await kasane.groupRequestParticipantsUpdate(from, [solAll[i].jid], 'reject');
}
} else if (/all/gi.test(lowerCaseAutoResp)) {
for (let i = 0; i < solAll.length; i++) {
await kasane.groupRequestParticipantsUpdate(from, [solAll[i].jid], 'approve');
}
}
}).catch(async (err) => {
console.log(err)
});
break;

case 'rastrear':
if (!q) return reply(mess.syntaxTrackParcels(prefix))
if (q.length < 13) return reply(mess.invalidCodeRastrear())
data = await fetchJson(API_URL+`/api/outros/rastreio-encomendas?code=${q}&apikey=`+API_KEY_KASANE)
await kasane.sendMessage(from, {text: mess.rastrearEncomenda(data, q)}, {quoted:selo}).catch(async(error) => {
return reply(mess.error())
})
break

case 'imdb':
if (!q) return reply(`• Para realizar a pesquisa do filme no *IMDb* é necessário conter pelo menos um gênero ou nome do filme.\n• Exemplo: *${prefix}imdb Ação*\n–\n🔍 Saber mais informações sobre o filme pesquisado? Use: *${prefix}imdbinfo [link]*\n\t• Lembrando que o *link do filme* para ser usado ele é apresentado na pesquisa, *se obter sucesso.*\n\t\t• Exemplo: *https://m.imdb.com/title/tt6495770/?ref_=fn_al_tt_5*`)
try {
AB = await fetchJson(API_URL+`/api/pesquisa/imdb?query=${q}&apikey=`+API_KEY_KASANE)
ABC = `• 𝐈𝐌𝐃𝐛 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀\n\t• *Nota:* Para ver as informações do filme de uma forma detalhada, use o comando: *${prefix}imdbinfo [link do filme]*\n\t\tExemplo: *${prefix}imdbinfo ${AB.resultado[0].url}*\n–\n${AB.resultado.map((v, index) => `*${index+1}.* Título: *${v.title}*\n• Ano de Lançamento: *${v.release}*\n• Créditos principais: *${v.topCredits[0]} e ${v.topCredits[1]}*\n• Link: *${v.url}*`).join('\n–\n')}`
await kasane.sendMessage(from, {text: ABC, contextInfo: {externalAdReply: {title: `IMDb - ${AB.resultado[0].title} (${AB.resultado[0].release}) ⭐`, body: `• Créditos principais: ${AB.resultado[0].topCredits[0]} e ${AB.resultado[0].topCredits[1]}`, mediaType: 2, sourceUrl: AB.resultado[0].url}}}, {quoted: selo});
} catch(error) {
return reply(mess.error());
}
break

case 'imdbinfo':
if(!q.includes("m.imdb.com")) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴏʟᴏǫᴜᴇ ᴏ ʟɪɴᴋ ᴅᴏ ғɪʟᴍᴇ ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ ᴘᴜxᴀʀ ɪɴғᴏʀᴍᴀçõᴇs.*")
try {
RST = await fetchJson(API_URL+`/api/pesquisa/imdb-info-filme?url=${q}&apikey=`+API_KEY_KASANE)
ABC = `• Título em Português: *${RST.resultado.titulo}*\n• Título Original: *${RST.resultado.tituloOriginal}*\n–\n• Sinopse: *${RST.resultado.trama}*\n–\n• Status do filme: *${RST.resultado.status}*\n• Data de lançamento: *${RST.resultado.dataLancamento.dia}.${RST.resultado.dataLancamento.mes}.${RST.resultado.dataLancamento.ano}*\n• Duração do filme: *${RST.resultado.duracao}*\n• Classificação de Idade: *${RST.resultado.certificado || "Livre"}*\n–\n• Avaliação total de usuários: *${formatNumberDecimal(RST.resultado.avaliacaoTotalUsers)}*\n• Total de críticas: *${formatNumberDecimal(RST.resultado.criticaTotal)}*\n–\n• Valor orçamentário: *$ ${formatNumberDecimal(RST.resultado.dinheiro.orcamento.valor)}*\n• Valor bruto por países: *$ ${formatNumberDecimal(RST.resultado.dinheiro.brutoPaises.valor)}*\n• Valor semanal: *$ ${formatNumberDecimal(RST.resultado.dinheiro.semana.valor)}*\n• Valor bruto pelo mundo: *$ ${formatNumberDecimal(RST.resultado.dinheiro.brutoMundial.valor)}*\n–\n• Prêmios: *${RST.resultado.avaliado.vitorias} vitória(s) e ${RST.resultado.avaliado.indicacoes} indicação(s)*\n• Disputando no rank em: *${RST.resultado.avaliado.rank}° lugar*\n–`
ABC += `\n• Mixagens: *${RST.resultado.mixagens.map(v => `${v}`).join(', ')}*\n`
ABC += `• Produção: *${RST.resultado.producao.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• Gênero(s): *${RST.resultado.genero.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• *Elenco* - Atrizes e atores participantes do elenco principal do filme:\n–\n${RST.resultado.elencoPrincipal.map(v => `\t\t• Nome: ${v.nome} - ( ${v.categoria} )\n\t\t• Personagem(ns): *${v.personagem}*`).join('\n–\n')}\n–\n`
ABC += `• *Créditos principais:*\n${RST.resultado.creditosPrincipais.map(v => `\t\t• ${v.categoria}: *${v.creditos}*`).join('\n')}`
reply(ABC)
} catch(error) {
return reply(mess.error())
}
break

case 'sanime': case 'animetv':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ɴãᴏ ᴅɪɢɪᴛᴏᴜ ɴᴇɴʜᴜᴍᴀ ᴘᴀʟᴀᴠʀᴀ ᴀᴏ ʟᴀᴅᴏ ᴅᴏ ᴄᴏᴍᴀɴᴅᴏ.*")
try {
RST = await fetchJson(API_URL+`/api/animetv_search?query=${q}&apikey=`+API_KEY_KASANE)
ABC = `${RST.resultado.map(v => `• Título: *${v.title}* | *${v.type}*\n• Foto: *${v.thumb}*\n• Link: *${v.url}*`).join('\n–\n')}`
reply(ABC);
} catch(error) {
return reply(mess.error())
}
break

case 'frases': case 'pensador':
if(!q) return reply(mess.noArgsSearch()+`Exemplo: *${prefix+command} Amor`);
AB = await fetchJson(API_URL+`/api/pesquisa/pensador?query=${q}&apikey=`+API_KEY_KASANE)
await kasane.sendMessage(from, {text: AB.resultado.map((v, index) => `*${index+1}.* “${v.frase}”`).join('\n–\n')}, {quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
break

case 'megadl':
if (!q.includes("mega.nz")) return reply(`Você esqueceu de colocar um link do *mega.nz* após o comando.`);
try {
const { File } = require("megajs");
const fileListINFO = await File.fromURL(q);
await fileListINFO.loadAttributes(); // Rodar a função para executar o resultado.
if (fileListINFO.size >= 300000000) return reply(`😿 Infelizmente, não foi possível concluir a ação, *pois o tamanho do arquivo excede o limite máximo de 300MB.*`);
function formatSize(bytes){if(bytes >= 1073741824) {bytes = (bytes / 1073741824).toFixed(2) + " GB"} else if (bytes >= 1048576) {bytes = (bytes / 1048576).toFixed(2) + " MB"} else if(bytes >= 1024) {bytes = (bytes / 1024).toFixed(2) + " KB"} else if(bytes > 1) {bytes = bytes + " bytes"} else if(bytes == 1) {bytes = bytes + " byte"} else {bytes = "0 bytes"} return bytes};
await replyWithNewsletter(`🤖💫 Por favor, aguarde alguns minutos! O arquivo está sendo baixado!\n• Arquivo: *${fileListINFO.name}* - [${formatSize(fileListINFO.size)}]`, {forwardingScore: 10000, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: channel}}, info);
const dataFileBuffer = await fileListINFO.downloadBuffer();
// Adicionadas extensões suportadas (zip, rar, 7z, jpg, png, zip) à lista.
if (/mp4/.test(fileListINFO.name)) {
await kasane.sendMessage(from, {document: dataFileBuffer, caption: fileListINFO.name, mimetype: "video/mp4", fileName: `Download Completo! Obrigado por esperar *${pushname}*...`}, {quoted: selo});
} else if (/mp3|mpeg/.test(fileListINFO.name)) {
await kasane.sendMessage(from, {document: dataFileBuffer, caption: fileListINFO.name, mimetype: "audio/mpeg", fileName: `Download Completo! Obrigado por esperar *${pushname}*...`}, {quoted: selo});
} else if (/pdf/.test(fileListINFO.name)) {
await kasane.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo: *100%* - ${fileListINFO.name}`, mimetype: "application/pdf", fileName: fileListINFO.name}, {quoted: selo});
} else if (/txt/.test(fileListINFO.name)) {
await kasane.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "text/plain", fileName: fileListINFO.name}, {quoted: selo});
} else if (/zip/.test(fileListINFO.name)) {
await kasane.sendMessage(from, { document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "application/zip", fileName: fileListINFO.name}, {quoted: selo});
} else if (/rar/.test(fileListINFO.name)) {
await kasane.sendMessage(from, { document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "application/x-rar-compressed", fileName: fileListINFO.name }, {quoted: selo});
} else if (/7z/.test(fileListINFO.name)) {
await kasane.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "application/x-7z-compressed", fileName: `${fileListINFO.name}` }, {quoted: selo});
} else if (/jpg|jpeg/.test(fileListINFO.name)) {
await kasane.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "image/jpeg", fileName: fileListINFO.name}, {quoted: selo});
} else if (/png/.test(fileListINFO.name)) {
await kasane.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "image/png", fileName: fileListINFO.name}, {quoted: selo});
} else if (/apk/.test(fileListINFO.name)) {
await kasane.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "application/vnd.android.package-archive", fileName: fileListINFO.name}, {quoted: selo});
} else {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴄᴜʟᴘᴇ-ᴍᴇ, ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇɴᴄᴀᴍɪɴʜᴀʀ ᴏ ᴀʀǫᴜɪᴠᴏ!😿 ᴏ ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴀʀǫᴜɪᴠᴏ ᴀᴘʀᴇsᴇɴᴛᴀᴅᴏ ɴãᴏ é sᴜᴘᴏʀᴛᴀᴅᴏ.*");
}
} catch (error) {
return console.log(`Error: ${error.message}`);
}
break

case 'encurtalink': case 'tinyurl':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/kasanebot.wpp`)
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data}`).catch(async(error) => {
reply(mess.error())
})
break

case 'encurtarlink2': case 'cuttly':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/kasanebot.wpp`)
anu = await axios.get(API_URL+`/api/outros/cuttly?link=${q}&apikey=`+API_KEY_KASANE)
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data.result}`).catch(async(error) => {
reply(mess.error())
})
break

case 'encurtarlink3': case 'bitly':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/kasanebot.wpp`)
anu = await axios.get(API_URL+`/api/outros/bitly?link=${q}&apikey=`+API_KEY_KASANE)
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data.result}`).catch(async(error) => {
reply(mess.error())
})
break


case 'spotify': {
if(!q.trim().includes("spotify")) return reply(`Cadê a url do spotiy? exemplo: ${prefix+command} https://open.spotify.com/intl-pt/track/4m3mrHuttXhK58f6Tenai1\nNão baixo playlist, quiser pegar o link da música, acessa o site: https://open.spotify.com/search e pesquisa lá.`)
reply(Res_Aguarde);
try {
kasane.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/spotify?url=${q.trim()}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg"}, {quoted: selo}).catch(() => reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ!*"))
} catch (e) {
console.log(e);
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ...*");
}
}
break;

case 'ytsearch': case 'pesquisa-ytb':
if(q.trim().length < 4) return reply(`Você esqueceu de colocar algum texto após o comando.`);
try {
ABC = await fetchJson(API_URL+`/api/pesquisa/youtube?query=${q}&apikey=`+API_KEY_KASANE);
RST = ABC.resultado.map((v, index) => `*${index+1}.* Título: *${v.title || 'Não encontrado'}*\n• Descrição: *${v.description || 'Não encontrado'}*\n• Duração: *${v.duration.timestamp || 'Não encontrado'}*\n• Link: *${v.url || 'Não encontrado'}*`).join('\n–\n')
reply(`> YouTube Search:\n–\n` + RST);
} catch(error) {
return reply(mess.error())
}
break


case 'play7':
case 'play-menu':
await carregamento()
await sleep(2000)
if(!q) return reply(mess.syntaxDownloadMusic());
data = await fetchJson(API_URL+`/api/pesquisa/youtube?query=${q}&apikey=`+API_KEY_KASANE);

fs.writeFileSync(`./bunker/database/data/media/images/play-thumb.jpg`, await getBuffer(data.resultado[0].image));
await salvarLink(`${data.resultado[0].url}`, `${data.resultado[0].title}`, `${data.resultado[0].image}`, sender);
const dadoss = resgatarLinks();
console.log(dadoss);

kasane.sendIMG('./bunker/database/data/media/images/play-thumb.jpg', 
from, 
` ❯❯「💧 Yosh 💧」❮❮
*𝘛í𝘵𝘶𝘭𝘰:* _${data.resultado[0].title}_.
*𝘋𝘶𝘳𝘢çã𝘰:* _${data.resultado[0].timestamp}_.
*𝘝𝘪𝘦𝘸𝘴*: _${data.resultado[0].views}_.
*𝘓𝘪𝘯𝘬:* _${data.resultado[0].url}_.
> 「❯❯ FORMATOS ❮❮」
> "ÁUDIO"
> "VIDEO"
> "DOC"
> OBS MANDE SOMENTE O TEXTO SEM AS ASPAS
© kasane beta v4`,
{participant: sender, 
quotedMessage: info.message},
);
break


case "play": {
if (!q)
return reply(`💧 | Digite o nome da música!\nEx: *${prefix}play Perfect*`);

try {
await reagir(from, "⌛");

// PESQUISA
let data = await fetchJson(
`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_KEY_BRONXYS}`
);
if (!data || data.length === 0)
return reply("💧] Yosh *❌ ɴᴇɴʜᴜᴍ ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ.*");

const ABC = data[0];

// CARD MUSIC
const cardImage = `https://tokito-apis.site/canvas/musicard2?nome=${encodeURIComponent(
ABC.titulo
)}&autor=${encodeURIComponent(
ABC.autor
)}&logo=${encodeURIComponent(
ABC.thumb
)}&thumb=${encodeURIComponent(
ABC.thumb
)}&end=${ABC.tempo}`;

// PREPARA IMAGEM
const mediaMusic = await prepareWAMessageMedia(
{ image: { url: cardImage } },
{ upload: kasane.waUploadToServer }
);

// BOTÕES
const botoes = [
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "💧] Yosh 💧⃞ᴀ́ᴜᴅɪᴏ⃞💧",
id: `${prefix}playy ${q}`
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "💧] Yosh 💧⃞ᴠɪ́ᴅᴇᴏ⃞💧",
id: `${prefix}playvid ${q}`
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "💧] Yosh 💧⃞ᴅᴏᴄᴜᴍᴇɴᴛᴏ⃞💧",
id: `${prefix}playdoc ${q}`
})
},
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "OPÇÕES EXTRAS",
sections: [
{
title: "Mais detalhes",
highlight_label: "Informações",
rows: [
{
title: "👑 Criador",
id: `${prefix}criador`
}
]
}
]
})
}
];

// CARROSSEL
const carouselMessage = {
cards: [
{
header: {
hasMediaAttachment: true,
imageMessage: mediaMusic.imageMessage
},
headerType: "IMAGE",

body: {
text:
`💧 *${ABC.titulo}*
🎤 Autor: ${ABC.autor}
⏳ Duração: ${ABC.tempo}`
},

footer: { text: "💧] Yosh *ᴇsᴄᴏʟʜᴀ ᴜᴍᴀ ᴏᴘçãᴏ ᴀʙᴀɪxᴏ:*" },

nativeFlowMessage: { buttons: botoes }
}
]
};

// ENVIO (mensagem invisível = mensagem real do usuário)
await kasane.relayMessage(
from,
{
interactiveMessage: {
contextInfo: {
participant: info.key.participant || from,
stanzaId: info.key.id,
quotedMessage: info.message
},
carouselMessage
}
},
{}
);

await reagir(from, "✨");

} catch (e) {
console.log(e);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴇʀʀᴏ ᴀᴏ ᴘʀᴏᴄᴜʀᴀʀ ᴍúsɪᴄᴀ.*");
}
break;
}

case 'playy': {
  try {
    if (!q.trim())
      return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *➜ ᴇxᴇᴍᴘʟᴏ:* ${prefix}playy ᴍᴄ ᴘᴏᴢᴇ`);

    await kasane.sendMessage(
      from,
      { text: `🎵 💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇɴᴠɪᴀɴᴅᴏ sᴜᴀ ᴍúsɪᴄᴀ, ᴀɢᴜᴀʀᴅᴇ...*` },
      { quoted: selo }
    );

    let audioUrl = `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_KEY_BRONXYS}`;

    await kasane.sendMessage(
      from,
      {
        audio: { url: audioUrl },
        mimetype: "audio/mpeg",
        fileName: `${q}.mp3`,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: setting.channeldl,
            newsletterName: NomeDoBot,
            serverMessageId: -1
          }
        }
      },
      { quoted: selo }
    );

  } catch (e) {
    console.log(e);
    reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴇʀʀᴏ ᴀᴏ ᴇɴᴠɪᴀʀ ᴀ ᴍúsɪᴄᴀ.*`);
  }
}
break;

case 'playvid':
case 'play_video': {
  try {
    if (!q.trim())
      return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *➜ ᴇxᴇᴍᴘʟᴏ:* ${prefix}playvid ᴍᴄ ᴘᴏᴢᴇ`);

    await kasane.sendMessage(
      from,
      { text: `🎬 💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇɴᴠɪᴀɴᴅᴏ sᴇᴜ ᴠíᴅᴇᴏ, ᴀɢᴜᴀʀᴅᴇ...*` },
      { quoted: selo }
    );

    let videoUrl = `https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=${API_KEY_BRONXYS}`;

    await kasane.sendMessage(
      from,
      {
        video: { url: videoUrl },
        mimetype: "video/mp4",
        fileName: `${q}.mp4`,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: setting.channeldl,
            newsletterName: NomeDoBot,
            serverMessageId: -1
          }
        }
      },
      { quoted: selo }
    );

  } catch (e) {
    console.log(e);
    reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴇʀʀᴏ ᴀᴏ ᴇɴᴠɪᴀʀ ᴏ ᴠíᴅᴇᴏ.*`);
  }
}
break;

case 'playdoc': {
  try {
    if (!q.trim())
      return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *➜ ᴇxᴇᴍᴘʟᴏ:* ${prefix}playdoc ᴍᴄ ᴘᴏᴢᴇ`);

    await kasane.sendMessage(
      from,
      { text: `📄 💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇɴᴠɪᴀɴᴅᴏ sᴇᴜ ᴀʀǫᴜɪᴠᴏ, ᴀɢᴜᴀʀᴅᴇ...*` },
      { quoted: selo }
    );

    let docUrl = `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_KEY_BRONXYS}`;

    await kasane.sendMessage(
      from,
      {
        document: { url: docUrl },
        mimetype: "audio/mpeg",
        fileName: `${q}.mp3`,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: setting.channeldl,
            newsletterName: NomeDoBot,
            serverMessageId: -1
          }
        }
      },
      { quoted: selo }
    );

  } catch (e) {
    console.log(e);
    reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴇʀʀᴏ ᴀᴏ ᴇɴᴠɪᴀʀ ᴏ ᴅᴏᴄᴜᴍᴇɴᴛᴏ.*`);
  }
}
break;

case 'shazam':
if(!isQuotedAudio) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇɴᴠɪᴇ ᴏ áᴜᴅɪᴏ ᴘᴀʀᴀ ᴇᴜ ᴛᴇɴᴛᴀʀ ᴅᴇᴛᴇᴄᴛᴀʀ ᴏ ɴᴏᴍᴇ ᴅᴀ ᴍúsɪᴄᴀ!*");
dataMedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio');
let mime = (quoted.info || quoted).mimetype || "";
let m = mime.split('/')[1];
fs.writeFileSync(`./bunker/database/data/media/audios/shazam/shazam-${sender}.mp3`, dataMedia); // Salvar o áudio no diretório selecionado!
try {
hasil = await arcloud(fs.readFileSync(`./bunker/database/data/media/audios/shazam/shazam-${sender}.mp3`, {encoding: "base64"}));
data = await fetchJson(API_URL+`/api/pesquisa/youtube?query=${hasil[0].titulo}&apikey=`+API_KEY_KASANE);
} catch(error) {
DLT_FL(`./bunker/database/data/media/audios/shazam/shazam-${sender}.mp3`); /* Apaga o áudio do diretório após a solicitação falhada. */
await replyWithReaction('Sem resultado! 😿 Desculpe, não consegui identificar a música fornecida...', {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😿*", key: info.key}});
};
await kasane.sendMessage(from, {document: {url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_KEY_BRONXYS}`}, caption: mess.shz(data), fileName: data.resultado[0].title+'.mp3', mimetype: 'audio/mpeg'}, {quoted: selo})
.catch(async(error) => {
return await replyWithReaction(mess.error(), {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌*", key: info.key}});
});
DLT_FL(`./bunker/database/data/media/audios/shazam/shazam-${sender}.mp3`); /* Apaga o áudio do diretório após a solicitação concluída. */
break

case 'playmix': case 'pmix':
if(!q) return reply(mess.syntaxPlayMix())
data = await fetchJson(API_URL+`/api/pesquisa/youtube?query=${q}&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from,{image: {url: data.resultado[0].image}, caption: mess.playmixResult(data)}, {quoted: selo})
await sleep(1000)
await kasane.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${data.resultado[0].url}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg"}, {quoted: selo}).catch(async(error) => {
return reply(mess.playmixError("1"))
})
await kasane.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${data.resultado[1].url}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg"}, {quoted: selo}).catch(async(error) => {
return reply(mess.playmixError("2"))
})
await kasane.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${data.resultado[2].url}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg"}, {quoted: selo}).catch(async(error) => {
return reply(mess.playmixError("3"))
})
await kasane.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${data.resultado[3].url}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg"}, {quoted: selo}).catch(async(error) => {
return reply(mess.playmixError("4"))
})
await kasane.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${data.resultado[4].url}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg"}, {quoted: selo}).catch(async(error) => {
return reply(mess.playmixError("5"))
})
break

case 'audiomeme': case 'playmeme':
if(!q) return reply(`NaN, você não digitou nada... Exemplo: *${prefix+command} Lula*`);
await reagir(from, "😸")
try {
bla = await fetchJson(API_URL+`/api/download/myinstants?query=${q}&apikey=`+API_KEY_KASANE)
teks = pickRandom(bla.resultado)
await kasane.sendMessage(from, {audio: {url: teks}, mimetype: "audio/mpeg", ptt:true}, {quoted: selo})
} catch(error) {
reply(mess.error());
}
break

case 'audiomeme2': case 'playmeme2':
if(!q) return reply(`NaN, você não digitou nada... Exemplo: *${prefix+command} Lula*`);
await reagir(from, "😸")
try {
bla = await fetchJson(API_URL+`/api/download/tuna?query=${q}&apikey=`+API_KEY_KASANE)
teks = pickRandom(bla.resultado)
await kasane.sendMessage(from, {audio: {url: teks}, mimetype: "audio/mpeg", ptt:true}, {quoted: selo})
} catch(error) {
await reply(mess.error());
}
break

case 'printscreen': case 'printsite': case 'screenshot': case 'screenshots':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʀᴇᴛᴏʀɴᴇ ᴀᴘós ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴏ ʟɪɴᴋ ᴅᴏ sɪᴛᴇ ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ ᴄᴀᴘᴛᴜʀᴀʀ*")
try {
kasane.sendMessage(from, {image: {url: API_URL2+`/api/ssweb?link=${q}&apikey=`+API_KEY_KASANE2}}, {quoted: info})
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
}
break

case 'imgpraanime': case 'animeia': case 'toanime':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat([base64, send ]) }
reply(`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64)
conv = await fetchJson(`https://delirius-api-oficial.vercel.app/api/toanime?url=${link}`)
await kasane.sendMessage(from, {image: {url: conv.data.comparation}}, {quoted: selo}).catch(async(error) => {
return reply(`Não foi possível criar seu avatar! Por favor, tente com outra imagem!`);
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴘᴀʀᴀ ᴀᴛʀɪʙᴜɪʀ ᴏ ᴇғᴇɪᴛᴏ ᴀ ғᴏᴛᴏ.*")
}
break

case 'gtaia': case 'togta': case 'imgpragta':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat([base64, send ]) }
reply(`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64);
dataConvertAndreas = await fetchJson(`https://aemt.me/jadigta?url=${link}`)
await kasane.sendMessage(from, {image: {url: dataConvertAndreas.result}}, {quoted: selo})
.catch(async(error) => {
return reply(`Não foi possível criar seu avatar! Por favor, tente com outra imagem!`);
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴘᴀʀᴀ ᴀᴛʀɪʙᴜɪʀ ᴏ ᴇғᴇɪᴛᴏ ᴀ ғᴏᴛᴏ.*")
}
break

case 'tozombie': case 'zombieai': case 'imgprazombie':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat([base64, send ]) }
reply(`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64);
dataConvertZombie = await fetchJson(`https://aemt.me/converter/zombie?url=${link}`);
await kasane.sendMessage(from, {image: {url: dataConvertZombie.url}}, {quoted: selo})
.catch(async(error) => {
return reply(`Não foi possível criar seu avatar! Por favor, tente com outra imagem!`);
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴘᴀʀᴀ ᴀᴛʀɪʙᴜɪʀ ᴏ ᴇғᴇɪᴛᴏ ᴀ ғᴏᴛᴏ.*")
}
break

case 'enhance': case 'dehaze': case 'recolor':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat([base64, send])}
data = await vyroEngine(base64, command);
await kasane.sendMessage(from, {image: data}, {quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴘᴀʀᴀ ᴀᴛʀɪʙᴜɪʀ ᴏ ᴇғᴇɪᴛᴏ ᴀ ғᴏᴛᴏ.*")
}
break

case 'ler': case 'ocr': case 'lerfoto':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(mess.wait())
link = await upload(base64)
data = await fetchJson(API_URL+`/api/outros/leitura-ocr?image=${link}&apikey=`+API_KEY_KASANE)
reply(data.resultado).catch(async(error) => {
return reply(mess.error())
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ, ᴘᴏʀ ғᴀᴠᴏʀ!*")
}
break

case 'movie':
if (args.length == 0) return reply(`Cadê o nome do filme o qual você deseja ver informações?`)
movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (movieInfo.data.total_results == 0) return reply(mess.noresult())
var ImageMovieLink = `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`;
var fotoFilme = await getBuffer(ImageMovieLink)
kasane.sendMessage(from, {image: fotoFilme, caption: mess.movies(movieInfo)}, {quoted: selo})
.catch(async(error) => {
return reply(mess.error());
})
break

case 'promocell':
if (!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ǫᴜᴀʟ ᴘʀᴏᴅᴜᴛᴏ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ ᴘᴇsǫᴜɪsᴀʀ? ᴄᴏʟᴏǫᴜᴇ ᴀᴘós ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴏ ɴᴏᴍᴇ ᴅᴏ ᴄᴇʟᴜʟᴀʀ ᴏ ǫᴜᴀʟ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ ᴏʙᴛᴇʀ ᴀs ᴘʀᴏᴍᴏçõᴇs...*");
try {
data = await fetchJson(API_URL+`/api/pesquisa/tudocelular?query=${q}&apikey=`+API_KEY_KASANE);
promoções = data.resultado.menoresPrecos.map((value, index) => `[Oferta *N° ${index+1}*] - Valor ofertado pela loja que realizou a promoção: *${value.preco}*\n• Título: *${value.nome}*\n• URL: *${value.linkCompra}*`).join('\n——\n')
await replyWithReaction(`• Produto: *${data.resultado.nomeProduto}*\n• Link do Produto no TudoCelular, confira a partir deste link as demais informações sobre o produto: *${data.resultado.linkCelular}*\n—\n• As melhores ofertas do seu produto *'${data.resultado.nomeProduto}'* estão aqui! Confira abaixo senhor(a):\n—\n${promoções}`, {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🛒*", key: info.key}});
} catch(error) {
await replyWithReaction('*Sem promoções para este produto!* Tente outro, caso ocorra o mesmo erro a api do comando deve ter caído.', {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😿*", key: info.key}});
}
break

case 'myname': 
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ǫᴜᴀʟ é ᴏ ɴᴏᴍᴇ ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ sᴀʙᴇʀ ᴏ sɪɢɴɪғɪᴄᴀᴅᴏ? ᴀᴅɪᴄɪᴏɴᴇ ᴀᴘós ᴏ ᴄᴏᴍᴀɴᴅᴏ...*");
try {
data = await fetchJson(API_URL+`/api/pesquisa/myname?query=${q}&apikey=`+ API_KEY_KASANE);
await reagir(from, '😸'); // Reagir quando o comando for executado por um usuário!
await kasane.sendMessage(from, {image: {url: data.resultado.imageUrl}, caption: `• Origem do Nome: *${data.resultado.origem}*\n• Derivações: *${data.resultado.derivacoes ? data.resultado.derivacoes : "Não possuí nenhum tipo de derivação."}*\n• Gênero: *${capitalizeFirstLetter(data.resultado.genero.split('nome ')[1] || "Gênero não identificado.")}*\n• Lugares ou referências com relação ao nome: *${data.resultado.locaisComNome}*\n• Relacionados: *${data.resultado.nomesRelacionados}*`}, {quoted: selo});
} catch(error) {
await replyWithReaction(mess.error(), {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😿*", key: info.key}}); // Encaminhar a mensagem pré-definida ao parametro e reagir a mensagem com o emoji definido na função.
}
break

case 'spoiler': case 'morechat':
var [text1_a, text2_b] = q.split("/"); // Separador
if (!text1_a) text1_a = ""; // Caso o texto1 esteja vazio, vai retornar vázio o parâmetro.
if (!text2_b) text2_b = ""; // Caso o texto2 esteja vazio, vai retornar vázio o parâmetro.
reply(text1_a + String.fromCharCode(8206).repeat(4001) + text2_b); // Enviar o spoiler.
break

case 'obesidade': case 'obeso':
if(!q.includes("/")) return reply(`Ex.: *${prefix+command} peso/altura*`)
var [peso, altura] = q.split("/");
var resultado = await obeso(peso, altura)
if (resultado <= 17 || resultado <= 18.4) {
await replyWithReaction(`• Seu índice de massa corporal é de: *${resultado}* -> Você está abaixo do peso.`, {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😸*", key: info.key}});
} else if (resultado <= 18.5 || resultado <= 24.9) {
await replyWithReaction(`• Seu índice de massa corporal é: *${resultado}* -> Você está no peso ideal.`, {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *👍*", key: info.key}});
} else if (resultado <= 25 || resultado <= 29.9) {
await replyWithReaction(`• Seu índice de massa corporal é: *${resultado}* -> Você está com sobrepeso.`, {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🫤*", key: info.key}});
} else if (resultado <= 30 || resultado <= 39.9) {
await replyWithReaction(`• Seu índice de massa corporal é: *${resultado}* -> Em situção de Obesidade.`, {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🤨*", key: info.key}});
} else if (resultado > 40) {
await replyWithReaction(`• Seu índice de massa corporal é: *${resultado}* -> Obesidade mórbida!`, {react: {text: `😵`, key: info.key}});
}
break

case 'contardias': case 'countdays':
if(!q.includes("/")) return reply(`Você esqueceu da */* para separar os campos.. Exemplo: *31/03/2024*`)
if(q.length < 10) return reply(`Deve conter a data completa *(dia/mês/ano)* após o comando!\n• Exemplo: *${prefix+command} 31/03/2024*`)
try {
var tomp = await timeDate('DD/MM/YYYY')
countDay = await countDays(q.split("/"), tomp.split("/"))
reply(`*${countDay}* dia(s).`)
} catch(error) {
return reply(mess.error())
}
break

case 'qrcode': case 'gerarqr':
if (!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɪɴsɪʀᴀ ᴜᴍ ʟɪɴᴋ ᴏᴜ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ǫᴜᴇ ᴇᴜ ᴘᴏssᴀ ɢᴇʀᴀʀ ᴏ ǫʀ ᴄᴏᴅᴇ..*")
try {
await kasane.sendMessage(from, {image: {url: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${q}`}, caption: `💫| 𝐒𝐞𝐮 𝐪𝐫 𝐜𝐨𝐝𝐞 𝐟𝐨𝐢 𝐠𝐞𝐫𝐚𝐝𝐨 𝐜𝐨𝐧𝐭𝐞𝐧𝐝𝐨 𝐨 𝐭𝐞𝐱𝐭𝐨/𝐮𝐫𝐥 𝐞𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐜𝐚𝐝𝐨 𝐚𝐨 𝐥𝐚𝐝𝐨: *${q}*`}, {quoted: selo})
} catch (e) {
return reply(mess.error());
}
break

case 'serie':
if (args.length == 0) return reply(`Cadê o nome da serie o qual você deseja ver informações?`)
serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (serieInfo.data.total_results == 0) return reply(mess.noresult());
await kasane.sendMessage(from, {image: {url: `https://image.tmdb.org/t/p/original${serieInfo.data.results[0].backdrop_path}`}, caption: mess.series(serieInfo)}, {quoted: selo})
.catch(async(error) => {
return reply(mess.error())
})
break

case 'gamenews': case 'gamesnews':
if (args.length < 1) return reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix+command} *--help*_`);
if(args[0] == '--help') return await mention(mess.helpNoticesG(sender, prefix));
if (args[0] === '-cod') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/e-sports?query=cod&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-csgo') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/e-sports?query=csgo&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-fifa') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/e-sports?query=fifa&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-fortnite') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/e-sports?query=fortnite&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if(args[0] === '-gamexp') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/e-sports?query=gamexp&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-pes') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/e-sports?query=pes&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-lol') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/e-sports?query=lol&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-pokemon') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/e-sports?query=pokemon&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-r6') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/e-sports?query=rainbow-6&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-valorant') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/e-sports?query=valorant&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-tcg') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/e-sports?query=tcg&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else {
await reagir(from, '🤔');
reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix+command} *--help*_`);
};
break

case 'esporte_news': case 'esportenoticias': case 'esportenews':
if (args.length < 1) return reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix+command} *--help*_`);
if(args[0] == '--help') return await mention(mess.helpNoticesEsporte(sender, prefix));
if (args[0] === '-all') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-futebol') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=futebol&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-futsal') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=futsal&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-skate') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=skate&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-surf') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=surfe&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-basquete') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=basquete&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-volei') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=volei&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-tenis') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=tenis&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-atletismo') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=atletismo&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-natacao') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=natacao&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-ciclismo') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=ciclismo&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-boxe') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=boxe&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-beisebol') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=beisebol&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-futebol-eua') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=futebol-americano&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
} 
} else if (args[0] === '-judo') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=judo&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
}
} else if (args[0] === '-ginastica') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=ginastica-artistica&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
} 
} else if (args[0] === '-golfe') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=golfe&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
} 
} else if (args[0] === '-f1') {
try {
ABC = await fetchJson(API_URL+`/api/noticias/esporte?esporte=formula-1&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {image: {url: ABC.resultado[0].linkImagem || ftmenu.logo}, caption: mess.GshowGE(ABC)}, {quoted:selo});
} catch(error) {
return reply(mess.error());
} 
} else {
await reagir(from, '🤔');
reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix+command} *--help*_`);
}
break

case 'aptoide':
if (args.length == 0) return reply(`Cadê o nome do app? *Use como exemplo:* ${prefix+command} WhatsApp.`)
try {
const aptoide = await axios.get(`https://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(q)}&trusted=true`);
if (aptoide.data.datalist.total == 0) return reply(mess.noresult());
phAptoide = await(await fetch(aptoide.data.datalist.list[0].graphic)).buffer();
lnDown = await axios.get(`https://tinyurl.com/api-create.php?url=${aptoide.data.datalist.list[0].file.path_alt}`);
await kasane.sendMessage(from, {image: phAptoide, caption: mess.aptoide(aptoide.data.datalist.list[0], (aptoide.data.datalist.list[0].size / 1048576).toFixed(1), lnDown)}, {quoted: selo}); 
await kasane.sendMessage(from, {document: {url: aptoide.data.datalist.list[0].file.path}, mimetype: "application/vnd.android.package-archive", fileName: `${aptoide.data.datalist.list[0].name}.apk`, caption: "Download Completo!"}, {quoted: selo})
} catch(error) {
return reply(mess.error())
}
break

case "soundcloud":
if(!q.trim().includes("soundcloud")) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅê ᴏ ʟɪɴᴋ ᴅᴏ sᴏᴜɴᴅᴄʟᴏᴜᴅ?*")
try {
kasane.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/soundcloud?url=${q.trim()}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg"}, {quoted: selo})
} catch (e) {
console.log(e)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ...*")
}
break; 

case 'kwai': {
if(!q.trim().includes("kwai")) return reply(`Exemplo: ${prefix+command} LINK DO KWAI`);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʀᴇᴀʟɪᴢᴀɴᴅᴏ ᴀçãᴏ..*");
try {
kasane.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/kwai?url=${q.trim()}&apikey=${API_KEY_BRONXYS}`}, mimetype: "video/mp4"}, {quoted: selo})
} catch (e) {
console.log(e);
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ...*");
}
}
break;


case 'tiktokpesq': {
try {
if (!q) {
return reply(
`*💧 Opa! Parece que você esqueceu de colocar o título da pesquisa!*\n` +
`💧 Exemplo: *${prefix + command} edit kasane*`
);
}

reply(
`*💧 Procurando TikTok com:* *${q.trim()}*...\n` +
`*⏳ Segura aí, já já aparece pra você!*`
);

const tiktoksearch = await fetchJson(
`https://tokito-apis.site/api/tiktok-search?query=${encodeURIComponent(q)}&apikey=${API_KEY_TOKITO}`
);

const result = tiktoksearch.resultado;
if (!result) return reply(mess.error());

const caption = `🎬 *ᴛíᴛᴜʟᴏ:* ${result.titulo || "Desconhecido"}`;

// Envia SOMENTE o vídeo
await kasane.sendMessage(
from,
{
video: { url: result.videos },
mimetype: result.mime || "video/mp4",
caption: caption,
newsletterJid: `${setting.channeldl}`,
newsletterName: `${NomeDoBot}`,
},
{ quoted: selo }
);

} catch (err) {
console.error(err);
reply(
`⚠️┆Ocorreu um erro ao tentar buscar no TikTok!\nTente novamente mais tarde.`
);
}
}
break;

case 'tiktok': {
try {

if (!q || !q.includes("tiktok"))
  return reply(`Exemplo: ${prefix}tiktok https://vm.tiktok.com/xxxx`);

const link = encodeURIComponent(q.trim());
const res = await fetchJson(`https://tikwm.com/api/?url=${link}`);

if (!res?.data) return reply("Não consegui pegar esse vídeo.");

const textoTik = `
🎵 Autor: ${res.data.author?.nickname || "Desconhecido"}
👁️ Views: ${res.data.play_count || "0"}
❤️ Likes: ${res.data.digg_count || "0"}

💧 Escolha o formato para baixar:
`;

const listaTikTok = {
title: "Download TikTok",
sections: [
{
title: "Formatos",
rows: [
{
title: "🎬 Baixar Vídeo",
description: "Vídeo sem marca d’água",
id: `${prefix}tiktok_video ${q.trim()}`
},
{
title: "🎵 Baixar Áudio",
description: "Som do vídeo em MP3",
id: `${prefix}tiktok_audio ${q.trim()}`
}
]
}
]
};

const botoesTik = [
{
name: "single_select",
buttonParamsJson: JSON.stringify(listaTikTok)
}
];

const media = await prepareWAMessageMedia(
{ image: { url: res.data.cover } },
{ upload: kasane.waUploadToServer }
);

const interactiveMsg = {
cards: [
{
header: { hasMediaAttachment: true, imageMessage: media.imageMessage },
headerType: "IMAGE",
body: { text: textoTik },
footer: { text: "💧 Yukira TikTok" },
nativeFlowMessage: { buttons: botoesTik }
}
]
};

await kasane.relayMessage(from, {
interactiveMessage: {
body: { text: "💧 TikTok Downloader" },
carouselMessage: interactiveMsg
}
}, {});

} catch (e) {
console.log(e);
reply("Erro ao processar TikTok.");
}
}
break;

case 'tiktok_audio': {
  try {
    const link = encodeURIComponent(q.trim());
    const apiUrl = `https://tikwm.com/api/?url=${link}`;
    const res = await fetchJson(apiUrl);

    const audioUrl = res.data.music;

    await kasane.sendMessage(from, {
      audio: { url: audioUrl },
      mimetype: "audio/mpeg",
      fileName: "tiktok.mp3"
    }, { quoted: selo });

  } catch (e) {
    reply("❌ Erro ao baixar áudio.");
  }
}
break;
case 'tiktok_video': {
try {
const link = encodeURIComponent(q.trim());
const res = await fetchJson(`https://tikwm.com/api/?url=${link}`);

await kasane.sendMessage(from, {
video: { url: res.data.play },
mimetype: "video/mp4",
caption: "🎬 Aqui está seu vídeo"
}, { quoted: selo });

} catch {
reply("Erro ao baixar vídeo.");
}
}
break;
case 'face_video':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʀᴇᴀʟɪᴢᴀɴᴅᴏ ᴀçãᴏ..*")
kasane.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=${API_KEY_BRONXYS}`}, mimetype: "video/mp4"}).catch(e => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
})
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
}
break;

case 'face_audio':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʀᴇᴀʟɪᴢᴀɴᴅᴏ ᴀçãᴏ..*")
kasane.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg"}).catch(e => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
})
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
}
break;

case 'twitter_video':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʀᴇᴀʟɪᴢᴀɴᴅᴏ ᴀçãᴏ..*")
kasane.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=${API_KEY_BRONXYS}`}, mimetype: "video/mp4"}).catch(e => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
})
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
}
break;

case 'twitter_audio':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʀᴇᴀʟɪᴢᴀɴᴅᴏ ᴀçãᴏ..*")
kasane.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg"}).catch(e => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
})
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
}
break;

case 'instagram':
try {
if(q.length < 5) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/instagram?url=${q.trim()}&apikey=${API_KEY_BRONXYS}`)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʀᴇᴀʟɪᴢᴀɴᴅᴏ ᴀçãᴏ..*")
let DM_T = ABC.msg[0].type
var A_T = DM_T === "mp4" ? "video/mp4" : DM_T === "webp" ? "image/webp" : DM_T === "jpg" ? "image/jpeg" : DM_T === "mp3" ? "audio/mpeg" : "video/mp4"
kasane.sendMessage(from, {[A_T.split("/")[0]]: {url: ABC.msg[0].url}, mimetype: A_T}, {quoted: info}).catch(e => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
})
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
}
break;

case 'insta_audio':
case 'instaaudio': case 'igaudio': case 'insta_audio':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/instagram?url=${q.trim()}&apikey=${API_KEY_BRONXYS}`)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀɢᴜᴀʀᴅᴇ, ʀᴇᴀʟɪᴢᴀɴᴅᴏ ᴀÇÃᴏ.*")
let DM_T = ABC.msg[0].type
var A_T = DM_T === "webp" ? "image/webp" : DM_T === "jpg" ? "image/jpeg" : DM_T === "mp3" ? "audio/mpeg" : "audio/mpeg"
kasane.sendMessage(from, {[A_T.split("/")[0]]: {url: ABC.msg[0].url}, mimetype: A_T}, {quoted: info}).catch(e => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
})
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
}
break;

case 'mediafire':
try {
if(!q.includes("mediafire.com")) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ғᴀʟᴛᴀɴᴅᴏ ᴏ ʟɪɴᴋ ᴅᴏ ᴍᴇᴅɪᴀғɪʀᴇ ᴘᴀʀᴀ ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏ ᴀʀǫᴜɪᴠᴏ, ᴄᴀᴅᴇ?*");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/mediafire?url=${q}&apikey=${API_KEY_BRONXYS}`)
reply(`Enviando: ${ABC.resultado[0].nama}\n\nPeso: ${ABC.resultado[0].size}`)
kasane.sendMessage(from, {document: {url: ABC.resultado[0].link}, mimetype: "application/"+ABC.resultado[0].mime, fileName: ABC.resultado[0].nama}).catch(e => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*");
})
} catch (e) {
console.log(String(e))
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
}
break;

case 'threads': case 'thdl':
if(q.length < 5) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘᴏʀ ғᴀᴠᴏʀ, ᴀᴅɪᴄɪᴏɴᴇ ᴜᴍ ʟɪɴᴋ ᴅᴏ ᴛʜʀᴇᴀᴅs ᴘᴏsᴛ/ʀᴇᴇʟ.*");
try {
reply(mess.wait())
data = await fetchJson(API_URL+`/api/download/threads?link=${q}&apikey=`+API_KEY_KASANE)
for (let i = 0; i < data.resultado.resultado.length; i++) {
let dmt = data.resultado.resultado[i].type;
mimety = dmt === "video" ? "video/mp4" : dmt === "webp" ? "image/webp" : dmt === "imagem" ? "image/jpeg" : dmt === "audio" ? "audio/mpeg" : "video/mp4"
await kasane.sendMessage(from, {[mimety.split("/")[0]]: {url: data.resultado.resultado[i].link}, mimetype: mimety}, {quoted: selo})
}
} catch(error) {
return reply(mess.error())
}
break

case 'adv': {
  if (!isGroup) return reply("❌ • ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ́ ᴘᴏᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇᴍ ɢʀᴜᴘᴏs.");
  if (!isGroupAdmins) return reply("❌ • Aᴘᴇɴᴀs ᴀᴅᴍɪɴs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ.");

  const nome = args[0];
  const numero = args[1];
  const motivo = args.slice(2).join(" ");

  if (!nome || !numero || !motivo)
    return reply(
      "⚠️ *ᴜsᴏ ɪɴᴄᴏʀʀᴇᴛᴏ!*\n\nExemplo:\n*+adv João 55999999999 Flood no chat*"
    );

  let adv = loadAdv();

  const novo = {
    id: adv.length + 1,
    nome,
    numero,
    motivo,
    data: new Date().toLocaleString("pt-BR")
  };

  adv.push(novo);
  saveAdv(adv);

  const total = adv.filter(x => x.numero === numero).length; // conta ADV

  reply(
`⚠️ *Aᴅᴠᴇʀᴛᴇ̂ɴᴄɪᴀ Aᴘʟɪᴄᴀᴅᴀ!*

🆔 *ID:* ${novo.id}
👤 *Nᴏᴍᴇ:* ${nome}
📱 *Nᴜ́ᴍᴇʀᴏ:* ${numero}
📝 *Mᴏᴛɪᴠᴏ:* ${motivo}
📅 *Dᴀᴛᴀ:* ${novo.data}
⚠️ *Tᴏᴛᴀʟ ᴅᴇ ADV:* ${total}/3`
  );

  // AUTO BANIMENTO
  if (total >= 3) {
    try {
      await kasane.groupParticipantsUpdate(from, [`${numero}@s.whatsapp.net`], "remove");

      reply(
`⛔ *ᴜsᴜᴀ́ʀɪᴏ ʙᴀɴɪᴅᴏ!*

📱 *Nᴜ́ᴍᴇʀᴏ:* ${numero}
⚠️ *Rᴀᴢᴀ̃ᴏ:* Aᴄᴜᴍᴜʟᴏᴜ 3 ᴀᴅᴠs.`
      );

      // remove todas as advertências do usuário banido
      adv = adv.filter(x => x.numero !== numero);
      saveAdv(adv);

    } catch (e) {
      console.log(e);
      reply("❌ • Nãᴏ ғᴏɪ ᴘᴏssɪ́ᴠᴇʟ ʙᴀɴɪʀ ᴏ ᴜsᴜᴀ́ʀɪᴏ.");
    }
  }
}
break;

case 'listadv': {
  let adv = loadAdv();
  if (!adv.length) return reply("📂 • Nãᴏ ʜᴀ́ ɴᴇɴʜᴜᴍᴀ ᴀᴅᴠ ʀᴇɢɪsᴛʀᴀᴅᴀ.");

  let teks = "⚠️ *ʟɪsᴛᴀ ᴅᴇ ᴀᴅᴠᴇʀᴛᴇ̂ɴᴄɪᴀs:*\n\n";

  for (let x of adv) {
    teks +=
`🆔 *ID:* ${x.id}
👤 *Nᴏᴍᴇ:* ${x.nome}
📱 *Nᴜ́ᴍᴇʀᴏ:* ${x.numero}
📝 *Mᴏᴛɪᴠᴏ:* ${x.motivo}
📅 *Dᴀᴛᴀ:* ${x.data}

`;
  }

  reply(teks);
}
break;
case 'minhasadv': {
  const numero = args[0];
  if (!numero)
    return reply("❌ *ᴜsᴇ: +minhasadv número*");

  let userAdv = loadAdv().filter(x => x.numero === numero);

  if (userAdv.length === 0)
    return reply("📭 *ᴇssᴇ ɴᴜ́ᴍᴇʀᴏ ɴᴀ̃ᴏ ᴘᴏssᴜɪ ᴀᴅᴠᴇʀᴛᴇ̂ɴᴄɪᴀs.*");

  let texto = `📌 *Aᴅᴠᴇʀᴛᴇ̂ɴᴄɪᴀs ᴅᴏ ɴᴜ́ᴍᴇʀᴏ:* ${numero}\n\n`;

  for (let x of userAdv) {
    texto +=
`🆔 Iᴅ: ${x.id}
📝 Mᴏᴛɪᴠᴏ: ${x.motivo}
📅 Dᴀᴛᴀ: ${x.data}
───────────────────────────────\n`;
  }

  texto += `\n🔢 *Tᴏᴛᴀʟ:* ${userAdv.length}/3`;

  reply(texto);
}
break;


case 'unadv': {
  if (!isGroupAdmins) return reply("❌ • Aᴘᴇɴᴀs ᴀᴅᴍɪɴs.");

  let id = Number(q);
  if (!id) return reply("❌ • Usᴇ: *+unadv ID*");

  let adv = loadAdv();
  const ex = adv.find(x => x.id === id);

  if (!ex) return reply("❌ • ID ɴãᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ.");

  adv = adv.filter(x => x.id !== id);

  // Reorganizar IDs bonitinho
  adv = adv.map((x, i) => ({ ...x, id: i + 1 }));

  saveAdv(adv);

  reply(`✅ • Aᴅᴠ *${id}* ʀᴇᴍᴏᴠɪᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ!`);
}
break;

case 'deladv': {
  if (!isGroupAdmins) return reply("❌ • ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴs!");

  const id = Number(args[0]);
  if (!id) return reply("❌ Use: *+deladv ID*");

  let adv = loadAdv();

  const index = adv.findIndex(x => x.id === id);
  if (index === -1)
    return reply("❗ *ID não encontrado!*");

  adv.splice(index, 1);

  // Reorganizar IDs
  adv = adv.map((x, i) => ({ ...x, id: i + 1 }));

  saveAdv(adv);

  reply(`🗑️ *Aᴅᴠᴇʀᴛᴇ̂ɴᴄɪᴀ ID ${id} ʀᴇᴍᴏᴠɪᴅᴀ!*`);
}
break;

case 'delalladv': {
  const numero = args[0];
  if (!numero)
    return reply("❌ *ᴜsᴇ: +delalladv número*");

  let adv = loadAdv();
  let antes = adv.length;

  adv = adv.filter(x => x.numero !== numero);

  if (adv.length === antes)
    return reply("📭 *ᴇssᴇ ɴᴜ́ᴍᴇʀᴏ ɴᴀ̃ᴏ ᴘᴏssᴜɪᴀ ᴀᴅᴠᴇʀᴛᴇ̂ɴᴄɪᴀs.*");

  adv = adv.map((x, i) => ({ ...x, id: i + 1 }));
  saveAdv(adv);

  reply(`🧹 *ᴛᴏᴅᴀs ᴀs ᴀᴅᴠs ᴅᴏ ɴᴜ́ᴍᴇʀᴏ ${numero} ғᴏʀᴀᴍ ᴀᴘᴀɢᴀᴅᴀs!*`);
}
break;

case 'limparadv': {
  saveAdv([]);
  reply("💥 *ᴛᴏᴅᴀs ᴀs ᴀᴅᴠᴇʀᴛᴇ̂ɴᴄɪᴀs ғᴏʀᴀᴍ ʟɪᴍᴘᴀs!*");
}
break;

case 'twtdl': case 'twitter':
if(q.length < 5) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘᴏʀ ғᴀᴠᴏʀ, ᴀᴅɪᴄɪᴏɴᴇ ᴜᴍ ʟɪɴᴋ ᴅᴏ ᴛʜʀᴇᴀᴅs ᴘᴏsᴛ/ʀᴇᴇʟ.*");
try {
reply(mess.wait())
data = await fetchJson(API_URL+`/api/download/twitter?url=${q}&apikey=`+API_KEY_KASANE)
for (let i = 0; i < data.resultado.media.length; i++) {
let dmt = data.resultado.media[i].type;
mimety = dmt === "video" ? "video/mp4" : dmt === "webp" ? "image/webp" : dmt === "imagem" ? "image/jpeg" : dmt === "audio" ? "audio/mpeg" : "video/mp4";
await kasane.sendMessage(from, {[mimety.split("/")[0]]: {url: data.resultado.media[i].url}, mimetype: mimety}, {quoted: selo});
}
} catch(error) {
return reply(mess.error())
}
break

case 'multidl': case 'pocbi':
if(q.length < 5) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘᴏʀ ғᴀᴠᴏʀ, ᴀᴅɪᴄɪᴏɴᴇ ᴜᴍ ʟɪɴᴋ ᴅᴇ ᴜᴍᴀ ʀᴇᴅᴇ sᴏᴄɪᴀʟ ᴅᴇ ᴍíᴅɪᴀ. (ᴇx.: ᴛɪᴋᴛᴏᴋ, ɪɴsᴛᴀ, ᴛʜʀᴇᴀᴅs, ᴇᴛᴄ...)*");
try {
data = await fetchJson(API_URL+`/api/download/multi-download?url=${q}&apikey=`+API_KEY_KASANE);
for (let i = 0; i < data.resultado.medias.length; i++) {
let dmt = data.resultado.medias[i].extension
mimety = dmt === "mp4" ? "video/mp4" : dmt === "webp" ? "image/webp" : dmt === "jpg" ? "image/jpeg" : dmt === "mp3" ? "audio/mpeg" : "video/mp4"
await kasane.sendMessage(from, {[mimety.split("/")[0]]: {url: data.resultado.medias[i].url}, mimetype: mimety}, {quoted: selo})
}
} catch(error) {
return reply(mess.error())
}
break
/*
case 'igstory':
case 'instastorys':
case 'instastory':
if (!q) return reply(`Cadê o *usuário da pessoa* que você deseja baixar os storys?\n• Exemplo: *${prefix+command} @jaoferreira*`);
if (!q.includes("@")) return reply(`Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix+command} @jaoferreira*\n\t• *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.\n\t• Este comando só baixa storys, *para baixar reels ou entre outras variedades*, use: *${prefix}igdl [link do post/reels]*`);
try {
reply(`Buscando stories do usuário: *${q}*, aguarde o retorno...`)
data = await fetchJson(API_URL+`/api/download/instagram-story?usuario=${q.replace("@", "")}&apikey=`+API_KEY_KASANE)
for (let i = 0; i < data.resultado.length; i++) {
let dmt = data.resultado[i].type
mimety = dmt === "video" ? "video/mp4" : dmt === "sticker" ? "image/webp" : dmt === "imagem" ? "image/jpeg" : dmt === "audio" ? "audio/mpeg" : "video/mp4"
await kasane.sendMessage(from, {[mimety.split("/")[0]]: {url: data.resultado[i].link}, mimetype: mimety}, {quoted: selo})
}
} catch(error) {
return reply(mess.error())
}
break

case 'instaaudio': case 'igaudio': case 'insta_audio':
if(q.length < 5) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘᴏʀ ғᴀᴠᴏʀ, ғᴏʀɴᴇçᴀ ᴏ ʟɪɴᴋ ᴅᴇ ᴜᴍ *ʀᴇᴇʟs/ᴠɪᴅᴇᴏ* ᴅᴏ ɪɴsᴛᴀɢʀᴀᴍ.*")
reply(mess.wait())
try {
data = await fetchJson(API_URL+`/api/download/instagram?url=${q}&apikey=`+API_KEY_KASANE) 
kasane.sendMessage(from, {audio: await fetch(data.resultado[0].url).then(v => v.buffer()), mimetype: 'audio/mpeg'}, {quoted: selo})
} catch(error) {
reply(mess.error())
}
break
*/
case 'tiktokstalker': case 'tksh':
if(!q) return reply(`Cadê o *usuário da pessoa* que você deseja stalkear?\n📌 Exemplo: *${prefix+command} @alex10ofc*\n\t• *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`);
if(!q.includes("@")) return reply(`Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix+command} @jaoferreira*\n\t• *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`)
try {
data = await fetchJson(API_URL+`/api/pesquisa/tiktok-stalker?usuario=${q}&apikey=`+API_KEY_KASANE);
await sendUrlText(from, mess.TiktokStalker(data, formatNumberDecimal), `${data.resultado.users.nickname} (@${data.resultado.users.username})`, `${formatNumberDecimal(data.resultado.stats.followerCount)} Seguidores | ${formatNumberDecimal(data.resultado.stats.followingCount)} Seguindo | ${formatNumberDecimal(data.resultado.stats.heartCount)} Curtidas`, data.resultado.users.avatarLarger || ftmenu.logo, `https://tiktok.com/@${data.resultado.users.username}`, info);
} catch(error) {
await reply(mess.error());
console.log(error)
}
break

case 'igsh': case 'igstalker': case 'instastalk': case 'instastalker':
if(!q) return reply(`Cadê o *usuário da pessoa* que você deseja stalkear?\n📌 Exemplo: *${prefix+command} @jaoferreira*\n\t• *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`);
if(!q.includes("@")) return reply(`Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix+command} @jaoferreira*\n\t• *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`)
try {
data = await fetchJson(API_URL+`/api/pesquisa/insta-stalker/v3?usuario=${q.replace("@", "")}&apikey=`+API_KEY_KASANE)
await kasane.sendMessage(from, {text: mess.InstaStalker(data, formatNumber, formatNumberDecimal), contextInfo: {externalAdReply: {title: `${data.resultado.profileName|| "Usuário do Instagram"} (@${data.resultado.username}) • Fotos e vídeos do Instagram.`, body: `${formatNumberDecimal(data.resultado.followersAmount)} seguidores, ${formatNumberDecimal(data.resultado.followingAmount)} seguindo, ${formatNumberDecimal(data.resultado.mediaCount)} publicações.`, thumbnail: await getBuffer(data.resultado.profilePicture), mediaType: 2, sourceUrl: `https://instagram.com/${data.resultado.username}`}}}, {quoted: selo});
} catch(error) {
return reply(mess.error());
}
break

case 'mediafire':
if(!q.includes("mediafire.com")) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ғᴀʟᴛᴀɴᴅᴏ ᴏ ʟɪɴᴋ ᴅᴏ ᴍᴇᴅɪᴀғɪʀᴇ ᴘᴀʀᴀ ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏ ᴀʀǫᴜɪᴠᴏ, ᴄᴀᴅᴇ?*");
ABC = await fetchJson(API_URL2+`/api/dl/mediafire?url=${q}&apikey=`+API_KEY_KASANE2)
reply(`📂 *Nome:* ${ABC.resultado.filename}\n🧮 *Tamanho:* ${ABC.resultado.size}\n_Criado em ${ABC.resultado.uploadDate}_`)
kasane.sendMessage(from, {document: {url: ABC.resultado.url}, mimetype: "application/"+ABC.resultado.filetype, fileName: ABC.resultado.filename}).catch(e => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*");
})
break

case 'gdrive': case 'googledrive':
if(!q.includes("drive.google.com")) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ғᴀʟᴛᴀɴᴅᴏ ᴏ ʟɪɴᴋ ᴅᴏ ɢᴏᴏɢʟᴇ ᴅʀɪᴠᴇ ᴘᴀʀᴀ ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏ ᴀʀǫᴜɪᴠᴏ, ᴄᴀᴅᴇ?*");
ABC = await fetchJson(API_URL+`/api/download/google-drive?url=${q}&apikey=`+API_KEY_KASANE)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀɢᴜᴀʀᴅᴇ, ᴇsᴛᴏᴜ ᴇɴᴄᴀᴍɪɴʜᴀɴᴅᴏ ᴏ ᴀʀǫᴜɪᴠᴏ. ᴘᴏᴅᴇ ᴅᴇᴍᴏʀᴀʀ ᴀᴛé *2ᴍɪɴ* ᴘᴀʀᴀ ᴇɴᴠɪᴀʀ!*")
await kasane.sendMessage(from, {document: {url: ABC.resultado.downloadUrl}, mimetype: ABC.resultado.mimetype, fileName: ABC.resultado.fileName}).catch(async(error) => {
return reply(mess.error())
})
break

case 'gitclone':
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return reply(`Exemplo: ${prefix}gitclone https://github.com/whiskeysockets/baileys`);
reply(mess.wait())
let [user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
await kasane.sendMessage(from, {document: {url: `https://api.github.com/repos/${user}/${repo}/zipball`}, fileName: filename+'.zip', mimetype: 'application/zip' }, {quoted: selo}).catch(async(error) => {
return reply(mess.error());
})
break

case 'antiimg':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiImg) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ɪᴍᴀɢᴇᴍ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antiimg = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ɪᴍᴀɢᴇᴍ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.️*")
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ɪᴍᴀɢᴇᴍ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antiimg = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ɪᴍᴀɢᴇᴍ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ.*")
}
break

case 'antivideo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiVid) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴠíᴅᴇᴏ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antivideo = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴠɪᴅᴇᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴠíᴅᴇᴏ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antivideo = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴠɪᴅᴇᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'antiaudio':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiAudio) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ áᴜᴅɪᴏ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antiaudio = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴀᴜᴅɪᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isAntiAudio) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ áᴜᴅɪᴏ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antiaudio = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴀᴜᴅɪᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'antisticker':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ sᴛɪᴄᴋᴇʀ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antisticker = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ sᴛɪᴄᴋᴇʀ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ sᴛɪᴄᴋᴇʀ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antisticker = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ sᴛɪᴄᴋᴇʀ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ.*")
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(Antidoc) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴅᴏᴄᴜᴍᴇɴᴛᴏ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antidoc = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴅᴏᴄᴜᴍᴇɴᴛᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!Antidoc) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴅᴏᴄᴜᴍᴇɴᴛᴏ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antidoc = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴅᴏᴄᴜᴍᴇɴᴛᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'antictt':
case 'anticontato':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiCtt) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴄᴏɴᴛᴀᴛᴏ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antictt = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴄᴏɴᴛᴀᴛᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴄᴏɴᴛᴀᴛᴏ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antictt = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *️ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪᴄᴏɴᴛᴀᴛᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.️*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'antiloc':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())								
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(Antiloc) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ʟᴏᴄ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antiloc = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ʟᴏᴄ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!Antiloc) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ʟᴏᴄ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antiloc = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ʟᴏᴄ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'antiddd': case 'anti_ddd': case 'anti-ddd':
if(!isGroup) return await reply(mess.onlyGroup())
if(!isGroupAdmins) return await reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return await reply(mess.onlyBotAdmin())
if(args.length < 1) return await reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiDDD) return await reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ʀᴇᴄᴜʀsᴏ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ sᴇɴʜᴏʀ(ᴀ)!*");
dataGp[0].ANTI_DDD.active = true
setGp(dataGp)
await reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *(🤍) ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ʀᴇᴍᴏçãᴏ ᴅᴇ ɴúᴍᴇʀᴏs ᴄᴏᴍ ᴅᴅᴅ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ à ʟɪsᴛᴀ, ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ!*");
} else if(Number(args[0]) === 0) {
if(!isAntiDDD) return await reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ʀᴇᴄᴜʀsᴏ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ sᴇɴʜᴏʀ(ᴀ)!*");
dataGp[0].ANTI_DDD.active = false
setGp(dataGp)
await reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *(🤍) ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ʀᴇᴍᴏçãᴏ ᴅᴇ ɴúᴍᴇʀᴏs ᴄᴏᴍ ᴅᴅᴅ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ à ʟɪsᴛᴀ, ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ!*");
} else {
await reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ.*");
}
break

// LISTAR DDDs BLOQUEADOS
case 'antiddd-list': {
if (!isGroup) return reply("*❌ • ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ́ ᴘᴏᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇᴍ ɢʀᴜᴘᴏs*");
if (!isAntiDDD) 
return reply(`⚠️ • ᴘᴀʀᴀ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ, ᴀᴛɪᴠᴇ ᴏ *antiddd*.\n💡 • ᴇxᴇᴍᴘʟᴏ: *${prefix}antiddd 1*`);

const lista = dataGp[0].ANTI_DDD.listaProibidos;
if (lista.length < 1)
return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 📭 • ɴãᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍ *DDD ᴘʀᴏɪʙɪᴅᴏ* ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.\n👉 • ᴀᴅɪᴄɪᴏɴᴇ ᴄᴏᴍ: *${prefix}add_ddd 21*`);

const texto =
`╭─『 💧 』*𝐀𝐍𝐓𝐈-𝐃𝐃𝐃 𝐋𝐈𝐒𝐓𝐀*『 💧 』─╮
 💬 • ɢʀᴜᴘᴏ: *${groupName}*
 📊 • ᴛᴏᴛᴀʟ: *${lista.length}*

${lista.map((v, i) => `│ 💧 • ${i + 1}. *${v}*`).join("\n")}
`;

await reply(texto);
}
break;


// ADICIONAR DDD
case 'add_ddd': {
if (!isGroup) return reply("*❌ • ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ́ ᴘᴏᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇᴍ ɢʀᴜᴘᴏs*");
if (!isGroupAdmins) return reply("*❌ • ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ*");
if (!isAntiDDD) 
return reply(`⚠️ • ᴀᴛɪᴠᴇ ᴏ *antiddd* ᴘᴀʀᴀ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ.\n👉 • ᴇxᴇᴍᴘʟᴏ: *${prefix}antiddd 1*`);
if (!q || !q.trim()) 
return reply(`❌ • ɪɴғᴏʀᴍᴇ ᴏ *DDD* ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴀᴅɪᴄɪᴏɴᴀʀ.\n💡 • ᴇxᴇᴍᴘʟᴏ: *${prefix}add_ddd 21*`);

const ddd = q.trim();
if (ddd.length !== 2 || isNaN(ddd))
return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 ❌ • ᴜᴍ *DDD* ᴘᴏssᴜɪ *2 ᴅíɢɪᴛᴏs* ɴᴜᴍᴇ́ʀɪᴄᴏs.\n📌 • ᴇxᴇᴍᴘʟᴏ: *81* (Pernambuco)`);

if (dataGp[0].ANTI_DDD.listaProibidos.includes(ddd))
return reply(`💧] 𝐘𝐔𝐊𝐈𝐑𝐀 ⚠️ • ᴏ DDD *${ddd}* ᴊᴀ́ ᴇsᴛᴀ́ ɴᴀ ʟɪsᴛᴀ.\n📋 • ᴠᴇᴊᴀ: *${prefix}antiddd-list*`);

if (arrayDDDs.includes(ddd))
return reply(`❌ • DDD *${ddd}* ᴇ́ ɪɴᴠᴀ́ʟɪᴅᴏ ᴏᴜ ɴᴀ̃ᴏ ᴇxɪsᴛᴇ.`);

dataGp[0].ANTI_DDD.listaProibidos.push(ddd);
setGp(dataGp);

await reply(
`💧 • ᴅᴅᴅ *${ddd}* ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ!\n🚫 • ɴᴜ́ᴍᴇʀᴏs ᴅᴇ *${extractStateFromDDD(ddd)}* sᴇʀᴀ̃ᴏ ʀᴇᴍᴏᴠɪᴅᴏs.`
);
}
break;


// REMOVER DDD
case 'delete_ddd':
case 'del_ddd':
case 'rm_ddd': {
if (!isGroup) return reply("*❌ • ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ́ ᴘᴏᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇᴍ ɢʀᴜᴘᴏs*");
if (!isGroupAdmins) return reply("*❌ • ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ*");
if (!isAntiDDD) 
return reply(`⚠️ • ᴀᴛɪᴠᴇ ᴏ *antiddd* ᴘᴀʀᴀ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ.\n👉 • ᴇxᴇᴍᴘʟᴏ: *${prefix}antiddd 1*`);
if (!q || !q.trim())
return reply(`❌ • ɪɴғᴏʀᴍᴇ ᴏ DDD ǫᴜᴇ ᴅᴇsᴇᴊᴀ ʀᴇᴍᴏᴠᴇʀ.\n💡 • ᴇxᴇᴍᴘʟᴏ: *${prefix + command} 84*`);

const ddd = q.trim();
if (ddd.length !== 2 || isNaN(ddd))
return reply(`❌ • ᴅɪɢɪᴛᴇ ᴀᴘᴇɴᴀs *1 DDD ᴘᴏʀ ᴠᴇᴢ*.\n📌 • ᴇxᴇᴍᴘʟᴏ: *${prefix + command} 84*`);

const lista = dataGp[0].ANTI_DDD.listaProibidos;
if (lista.length === 0)
return reply(`📭 • ᴀ ʟɪsᴛᴀ ᴇsᴛᴀ́ ᴠᴀᴢɪᴀ.`);

if (!lista.includes(ddd))
return reply(`❌ • ᴏ DDD *${ddd}* ɴᴀ̃ᴏ ᴇsᴛᴀ́ ɴᴀ ʙʟᴀᴄᴋʟɪsᴛ.\n📋 • ᴄᴏɴsᴜʟᴛᴇ: *${prefix}antiddd-list*`);

dataGp[0].ANTI_DDD.listaProibidos = lista.filter(d => d !== ddd);
setGp(dataGp);

await reply(
`💧 • ᴅᴅᴅ *${ddd}* ʀᴇᴍᴏᴠɪᴅᴏ!\n🔓 • ɴᴜ́ᴍᴇʀᴏs ᴅᴇ *${extractStateFromDDD(ddd)}* ᴀɢᴏʀᴀ sᴇʀᴀ̃ᴏ ᴘᴇʀᴍɪᴛɪᴅᴏs.`
);
}
break;
case 'antilinkgp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪʟɪɴᴋ ᴅᴇ ɢʀᴜᴘᴏ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antilinkgp = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪʟɪɴᴋ ᴅᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪʟɪɴᴋ ᴅᴇ ɢʀᴜᴘᴏ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antilinkgp = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪʟɪɴᴋ ᴅᴇ ɢʀᴜᴘᴏ.*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪʟɪɴᴋ ʜᴀʀᴅᴄᴏʀᴇ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antilinkhard = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪʟɪɴᴋ ʜᴀʀᴅᴄᴏʀᴇ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪʟɪɴᴋ ʜᴀʀᴅᴄᴏʀᴇ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antilinkhard = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪʟɪɴᴋ ʜᴀʀᴄᴏʀᴇ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.️*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'antilinkeasy':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiLinkEasy) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪʟɪɴᴋ ᴇᴀsʏ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antilinkeasy = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪʟɪɴᴋ ᴇᴀsʏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isAntiLinkEasy) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪʟɪɴᴋ ᴇᴀsʏ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antilinkeasy = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪʟɪɴᴋ ᴇᴀsʏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.️*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'x9':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isx9) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ x9 ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].x9 = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ x9 ɴᴇsᴛᴇ ɢʀᴜᴘᴏ, ɪʀᴇɪ ɴᴏᴛɪғɪᴄᴀʀ ǫᴜᴀɴᴅᴏ ᴀʟɢᴜéᴍ ғᴏʀ ʀᴇʙᴀɪxᴀᴅᴏ/ᴘʀᴏᴍᴏᴠɪᴅᴏ ᴀ ᴀᴅᴍ ᴇ ᴛᴀᴍʙéᴍ ǫᴜᴀɴᴅᴏ ᴏᴜᴠᴇʀ ғɪxᴀçãᴏ/ᴅᴇsᴀғɪxᴀçãᴏ ᴅᴇ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ(s) ᴀᴅᴍɪɴsᴛʀᴀᴅᴏʀ(ᴇs).*")
} else if(Number(args[0]) === 0) {
if(!isx9) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ x9 ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].x9 = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ x9 ɴᴇsᴛᴇ ɢʀᴜᴘᴏ, ɴãᴏ ɪʀᴇɪ ᴍᴀɪs ɴᴏᴛɪғɪᴄᴀʀ ᴘʀᴏᴍᴏçãᴏ ᴅᴇ ᴀᴅᴍ ɴᴇᴍ ʀᴇʙᴀɪxᴀᴍᴇɴᴛᴏ ᴏᴜ ғɪxᴀçãᴏ/ᴅᴇsᴀғɪxᴀçãᴏ ᴅᴇ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ(s) ᴀᴅᴍɪɴsᴛʀᴀᴅᴏʀ(ᴇs).*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'visualizarmsg':
if(!SoDono) return reply(mess.onlyOwner())
if(!isVisualizar) {
nescessario.visualizarmsg = true
setNes(nescessario)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴠɪsᴜᴀʟɪᴢᴀʀ ᴛᴏᴅᴀs ᴀs ᴍᴇɴsᴀɢᴇɴs ᴇɴᴠɪᴀᴅᴀ ᴇᴍ ɢʀᴜᴘᴏs ᴇ ᴘʀɪᴠᴀᴅᴏ.*")
} else if(isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
reply("💧 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴠɪsᴜᴀʟɪᴢᴀʀ ᴛᴏᴅᴀs ᴀs ᴍᴇɴsᴀɢᴇɴs ᴇɴᴠɪᴀᴅᴀ ᴇᴍ ɢʀᴜᴘᴏs ᴇ ᴘʀɪᴠᴀᴅᴏ.*")
}
break

case 'x9visuunica':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isX9VisuUnica) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ʀᴇᴠᴇʟᴀʀ ᴠɪsᴜ úɴɪᴄᴀ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].visuUnica = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ʀᴇᴠᴇʟᴀʀ ᴠɪsᴜ úɴɪᴄᴀ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isX9VisuUnica) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ʀᴇᴠᴇʟᴀʀ ᴠɪsᴜ úɴɪᴄᴀ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].visuUnica = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ʀᴇᴠᴇʟᴀʀ ᴠɪsᴜ úɴɪᴄᴀ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'so_adm':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(So_Adm) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴍᴏᴅᴏ ᴘᴀʀᴀ sᴏᴍᴇɴᴛᴇ ᴀᴅᴍɪɴsᴛʀᴀᴅᴏʀᴇs ᴜsᴀʀᴇᴍ ᴏ ʙᴏᴛ, ᴊá sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴀᴛɪᴠᴏ ɴᴏ ɢʀᴜᴘᴏ sᴇɴʜᴏʀ(ᴀ)!*")
dataGp[0].soadm = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ só ᴀᴅᴍ ᴜᴛɪʟɪᴢᴀʀ ᴄᴏᴍᴀɴᴅᴏs ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!So_Adm) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴍᴏᴅᴏ ᴘᴀʀᴀ sᴏᴍᴇɴᴛᴇ ᴀᴅᴍɪɴsᴛʀᴀᴅᴏʀᴇs ᴜsᴀʀᴇᴍ ᴏ ʙᴏᴛ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ɴᴏ ɢʀᴜᴘᴏ.*")
dataGp[0].soadm = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ só ᴀᴅᴍ ᴜᴛɪʟɪᴢᴀʀ ᴄᴏᴍᴀɴᴅᴏs ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.️*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'odelete':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(IS_DELETE) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴅᴇʟᴇᴛᴇ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
nescessario.Odelete = true
setNes(nescessario)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴅᴇʟᴇᴛᴇ ɴᴏs ɢʀᴜᴘᴏs.*")
} else if(Number(args[0]) === 0) {
if(!IS_DELETE) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴅᴇʟᴇᴛᴇ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
nescessario.Odelete = false
setNes(nescessario)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *️ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴅᴇʟᴇᴛᴇ ɴᴏs ɢʀᴜᴘᴏs.️*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'antifake':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntifake) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪғᴀᴋᴇ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antifake = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪғᴀᴋᴇ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ!*")
} else if(Number(args[0]) === 0) {
if(!isAntifake) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪғᴀᴋᴇ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].antifake = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪғᴀᴋᴇ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ!*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ.*")
}
break

case 'prefixos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)
if(dataGp[0].prefixos.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴄᴏɴᴛᴇᴍ ɴᴇɴʜᴜᴍ ᴘʀᴇғɪxᴏ ᴀ ᴍᴀɪs ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
reply(`Lista de prefixos para uso do bot, no Grupo: *${groupName}*:\n• *[Total: ${dataGp[0].prefixos.length}]* - ${dataGp[0].prefixos.map((v, index) => `( ${v} )`).join(", ")}`)
break

case 'add_prefixo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)
if(ANT_LTR_MD_EMJ(q)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏᴅᴇ ʟᴇᴛʀᴀ ᴍᴏᴅɪғɪᴄᴀᴅᴀ, ɴᴇᴍ ᴇᴍᴏᴊɪ..*")
if(!q.trim()) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇᴛᴇʀᴍɪɴᴇ ᴏ ɴᴏᴠᴏ ᴘʀᴇғɪxᴏ, ɴãᴏ ᴘᴏᴅᴇ ᴇsᴘᴀçᴏ ᴠᴀᴢɪᴏ...*")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser um\nExemplo: ${prefix+command} _\nAe o bot vai passar á responder _ como prefixo do bot..`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`Prefixo ${q.trim()} foi adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`)
break

case 'tirar_prefixo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)
if(ANT_LTR_MD_EMJ(q)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏᴅᴇ ʟᴇᴛʀᴀ ᴍᴏᴅɪғɪᴄᴀᴅᴀ, ɴᴇᴍ ᴇᴍᴏᴊɪ..*")
if(!q.trim()) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇᴛᴇʀᴍɪɴᴇ ᴏ ᴘʀᴇғɪxᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴛɪʀᴀʀ, ɴãᴏ ᴘᴏᴅᴇ ᴇsᴘᴀçᴏ ᴠᴀᴢɪᴏ...*")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser tirado um por vez..\nExemplo: ${prefix+command} _\nAe o bot não vai responder mais com _`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não está incluso, procure ver na lista dos prefixos. Veja: ${prefix}prefixos`)
if(dataGp[0].prefixos.length == 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴅɪᴄɪᴏɴᴇ ᴜᴍ ᴘʀᴇғɪxᴏ ᴘᴀʀᴀ ᴘᴏᴅᴇ ᴛɪʀᴀʀ ᴇsᴛᴇ, ᴛᴇᴍ ǫᴜᴇ ᴛᴇʀ ᴘᴇʟᴏ ᴍᴇɴᴏs 1 ᴘʀᴇғɪxᴏ ᴊá ɪɴᴄʟᴜsᴏ ᴅᴇɴᴛʀᴏ ᴅᴏ sɪsᴛᴇᴍᴀ ᴘᴀʀᴀ ᴛɪʀᴀʀ ᴏᴜᴛʀᴏ.*")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`)
break

case 'multiprefixo': case 'multiprefix':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴍᴜʟᴛɪ ᴘʀᴇғɪxᴏs ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴍᴜʟᴛɪ ᴘʀᴇғɪxᴏs ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
}
break

case 'ephemeral': case 'msgtemp':
if (!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
getInfoG = await kasane.groupMetadata(from); /* Pegar as informações total do grupo! */
if (getInfoG.ephemeralDuration == undefined) {
reply(`As mensagens temporárias no grupo foram ativadas com sucesso.`)
await kasane.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL})
} else if (getInfoG.ephemeralDuration > 1) {
reply(`As mensagens temporárias no grupo foram desativadas com sucesso.`)
await kasane.sendMessage(from, { disappearingMessagesInChat: false})
}
break

case 'rmphotogp': case 'rmfotogroup':
if (!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
reply(`A foto do grupo foi removida com sucesso.`)
await kasane.removeProfilePicture(from)
break

case 'antinotas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ɴᴏᴛᴀs ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ ɴᴏ ɢʀᴜᴘᴏ.*")
dataGp[0].antinotas = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ɴᴏᴛᴀs ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.️*")
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ɴᴏᴛᴀs ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ɴᴏ ɢʀᴜᴘᴏ.*")
dataGp[0].antinotas = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ɴᴏᴛᴀs ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.️*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'anticatalogo':
case 'anticatalg':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAnticatalogo) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴄᴀᴛáʟᴏɢᴏs ᴊá sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴀᴛɪᴠᴏ ɴᴏ ɢʀᴜᴘᴏ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ.*")
dataGp[0].anticatalogo = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪᴄᴀᴛᴀʟᴏɢᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ɴᴏ ɢʀᴜᴘᴏ.*")
dataGp[0].anticatalogo = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪᴄᴀᴛᴀʟᴏɢᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.️*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isWelkom) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ʙᴏᴀs ᴠɪɴᴅᴀs ᴊá ᴇsᴛá ᴀᴛɪᴠᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ʙᴇᴍ ᴠɪɴᴅᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜsᴏ ᴅᴇ ʙᴏᴀs ᴠɪɴᴅᴀs ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ʙᴇᴍᴠɪɴᴅᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.️*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'bemvindo2':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴊá ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ ɴᴏ ɢʀᴜᴘᴏ.*")
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ɴãᴏ ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ ɴᴏ ɢʀᴜᴘᴏ.*")
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
} else {
reply(`Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'legendabv':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴄʀᴇᴠᴀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ʙᴏᴀs-ᴠɪɴᴅᴀs*")
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ʙᴏᴀs ᴠɪɴᴅᴀs ᴅᴇғɪɴɪᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ!*")
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendabv2':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴄʀᴇᴠᴀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ʙᴏᴀs-ᴠɪɴᴅᴀs*")
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ʙᴏᴀs ᴠɪɴᴅᴀs2 ᴅᴇғɪɴɪᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ!*")
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴄʀᴇᴠᴀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ sᴀíᴅᴀ ᴏᴜ ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ, ᴜsᴇ: 0*")
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ sᴀíᴅᴀ ᴅᴏ ʙᴇᴍᴠɪɴᴅᴏ ғᴏɪ ᴅᴇғɪɴɪᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ!*")
} else {
reply(`Ative o ${prefix}bemvindo para o recurso de edição de mensagem.`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(q.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴄʀᴇᴠᴀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ sᴀíᴅᴀ ᴏᴜ ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ, ᴜsᴇ: 0*")
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = Number(teks) === 0 ? 0 : q
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ sᴀíᴅᴀ ᴅᴏ ʙᴇᴍᴠɪɴᴅᴏ2 ғᴏɪ ᴅᴇғɪɴɪᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ!*")
} else {
reply(`Ative o ${prefix}bemvindo2 para o recurso de edição de mensagem.`)
}
break

case 'legenda_estrangeiro':
case 'legenda_estrangeiros': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴄʀᴇᴠᴀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ʀᴇᴍᴏçãᴏ ᴅᴇ ᴇsᴛʀᴀɴɢᴇɪʀᴏs*")
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ʀᴇᴍᴏçãᴏ ᴅᴇ ᴇsᴛʀᴀɴɢᴇɪʀᴏs ᴅᴇғɪɴɪᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ!*")
} else {
reply(`Ative o antifake primeiro para definir uma legenda, com: ${prefix}antifake 1`)
}
break

case 'legenda_video': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴄʀᴇᴠᴀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ʀᴇᴍᴏçãᴏ ɴᴏ ᴀɴᴛɪᴠɪᴅᴇᴏ*")
if(isAntiVid) {
dataGp[0].legenda_video = q
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ʀᴇᴍᴏçãᴏ ᴅᴇ ᴠɪᴅᴇᴏ ᴅᴇғɪɴɪᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ!*")
} else {
reply(`Ative o antivideo primeiro para definir uma legenda, com: ${prefix}antivideo`)
}
break

case 'legenda_imagem': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴄʀᴇᴠᴀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ʀᴇᴍᴏçãᴏ ɴᴏ ᴀɴᴛɪɪᴍɢ*")
if(isAntiImg) {
dataGp[0].legenda_imagem = q
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ʀᴇᴍᴏçãᴏ ᴅᴇ ɪᴍᴀɢᴇᴍ ᴅᴇғɪɴɪᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ!*")
} else {
reply(`Ative o anti-imagem primeiro para definir uma legenda, com: ${prefix}antiimg`)
}
break

case 'legenda_documento': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴄʀᴇᴠᴀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ʀᴇᴍᴏçãᴏ ɴᴏ ᴀɴᴛɪᴅᴏᴄ*")
if(Antidoc) {
dataGp[0].legenda_documento = q
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ʀᴇᴍᴏçãᴏ ᴅᴇ ᴅᴏᴄᴜᴍᴇɴᴛᴏ ᴅᴇғɪɴɪᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ!*")
} else {
reply(`Ative o antidoc primeiro para definir uma legenda, com: ${prefix}antidoc 1`)
}
break

case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘʀᴇᴄɪsᴀ sᴇʀ ᴅᴏɴᴏ ᴏᴜ ᴀᴅᴍ*")
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(!mrc_ou_numero) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ ᴜsᴜáʀɪᴏ ᴄᴏᴍ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴏᴜ ᴜᴛɪʟɪᴢᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍ ᴏ ɴúᴍᴇʀᴏ ᴅᴏ ᴜsᴜáʀɪᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴀᴅɪᴄɪᴏɴᴀʀ ɴᴀ ʟɪsᴛᴀ ɴᴇɢʀᴀ..*")
if(dataGp[0].listanegra.includes(mrc_ou_numero)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇssᴇ ɴúᴍᴇʀᴏ ᴊᴀ ᴇsᴛᴀ ɪɴᴄʟᴜsᴏ*")
dataGp[0].listanegra.push(mrc_ou_numero)
setGp(dataGp)
reply(`*Número adicionado a lista de autoban*`)
break

case 'autobang':
case 'listanegrag':
if(!SoDono) return reply(mess.onlyOwner())
if(!mrc_ou_numero) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ ᴜsᴜáʀɪᴏ ᴄᴏᴍ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴏᴜ ᴜᴛɪʟɪᴢᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍ ᴏ ɴúᴍᴇʀᴏ ᴅᴏ ᴜsᴜáʀɪᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴀᴅɪᴄɪᴏɴᴀʀ ɴᴀ ʟɪsᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ..*")
if(listanegraG.includes(mrc_ou_numero)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇssᴇ ɴúᴍᴇʀᴏ ᴊᴀ ᴇsᴛᴀ ɪɴᴄʟᴜsᴏ*")
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./configs/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número adicionado a lista de autoban*`)
break

case 'tirardalistag':
if(!SoDono) return reply(mess.onlyOwner())
if(!mrc_ou_numero) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ ᴜsᴜáʀɪᴏ ᴄᴏᴍ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴏᴜ ᴜᴛɪʟɪᴢᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍ ᴏ ɴúᴍᴇʀᴏ ᴅᴏ ᴜsᴜáʀɪᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴛɪʀᴀʀ ᴅᴀ ʟɪsᴛᴀ ɴᴇɢʀᴀ..*")
if(!listanegraG.includes(mrc_ou_numero)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇssᴇ ɴúᴍᴇʀᴏ ɴãᴏ ᴇsᴛᴀ ɪɴᴄʟᴜsᴏ*")
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./configs/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número foi removido da lista negra*`)
break

case 'delremover':
case 'delautorm':
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!mrc_ou_numero) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ ᴜsᴜáʀɪᴏ ᴄᴏᴍ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴏᴜ ᴜᴛɪʟɪᴢᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍ ᴏ ɴúᴍᴇʀᴏ ᴅᴏ ᴜsᴜáʀɪᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴛɪʀᴀʀ ᴅᴀ ʟɪsᴛᴀ ɴᴇɢʀᴀ..*")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇssᴇ ɴúᴍᴇʀᴏ ɴãᴏ ᴇsᴛᴀ ɪɴᴄʟᴜsᴏ*")
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
reply(`*Número foi removido da lista de autoban*`)
break

case 'listban':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(dataGp[0].listanegra.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴᴇɴʜᴜᴍ ɴúᴍᴇʀᴏ ɴãᴏ ғᴏɪ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ*")
teks = '*Números que vou moer na porrada se voltar:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {teks += `➤ *${dataGp[0].listanegra[i].split('@')[0]}*\n`}
teks += '*Esses ai vou descer meu martelo do ban.*'
reply(teks)
break

case 'mute': case 'mutar':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(!menc_os2) return reply(`🎯 Por favor, mencione o usuário ou marque a mensagem do alvo que você deseja mutar.`);
if(menc_os2 == botNumber) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌️️ ɴãᴏ é ᴘᴏssíᴠᴇʟ ᴍᴜᴛᴀʀ ᴏ ʙᴏᴛ! ᴠᴏᴄê é ʟᴏᴜᴄᴏ?*");
if(menc_os2 == nmrdn) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ǫᴜᴇᴍ ᴠᴏᴄê ᴘᴇɴsᴀ ǫᴜᴇ é, ᴘᴀʀᴀ ᴍᴜᴛᴀʀ ᴍᴇᴜ ᴘʀᴏᴘʀɪᴇᴛáʀɪᴏ(ᴀ)?*");
if(vip.map(i => i.id).includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌️️ ɴãᴏ é ᴘᴏssíᴠᴇʟ ᴍᴜᴛᴀʀ ᴜsᴜáʀɪᴏs ǫᴜᴇ ᴄᴏɴᴛéᴍ ᴠɪᴘ ɴᴏ ʙᴏᴛ!*");
if(groupAdmins.includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌️ ɴãᴏ é ᴘᴏssíᴠᴇʟ ᴍᴜᴛᴀʀ ᴜᴍ(ᴀ) ᴀᴅᴍɪɴsᴛʀᴀᴅᴏʀ(ᴀ) ᴅᴏ ɢʀᴜᴘᴏ.*");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ️ɴãᴏ é ᴘᴏssíᴠᴇʟ ᴍᴜᴛᴀʀ ᴜᴍᴀ ᴘᴇssᴏᴀ ǫᴜᴇ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ ɴãᴏ ᴘᴀʀᴛɪᴄɪᴘᴀ ᴍᴀɪs ᴅᴇsᴛᴇ ɢʀᴜᴘᴏ.*");
if(muted[muted.map(i => i.grupo).indexOf(from)].usus.includes(menc_os2)) return mention(`O participante: '@${menc_os2.split("@")[0]}' já está na lista de mutados, para desmutar o usuário, use: ${prefix}desmute.`);
//// ADICIONA O USUÁRIO À LISTA:
mention(` '@${menc_os2.split("@")[0]}' *VAGABUNDA(o) FICA MUTADO AI PELA [YUKIRA]😜*!`);
muted[muted.map(i => i.grupo).indexOf(from)].usus.push(menc_os2)
fs.writeFileSync("./bunker/database/grupos/muted.json", JSON.stringify(muted, null, 2));
break

case 'desmute': case 'desmutar':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(!menc_os2) return reply(`🎯 Por favor, mencione o usuário ou marque a mensagem do alvo que você deseja desmutar.`);
if(!muted[muted.map(i => i.grupo).indexOf(from)].usus.includes(menc_os2)) return mention(`O participante: '@${menc_os2.split("@")[0]}' não está na lista de mutados do grupo.`);
//// REMOVE O USUÁRIO DA LISTA:
mention(`'@${menc_os2.split("@")[0]}' *PRONTO INSUPORTÁVEI PODE LATI AVONTADE🙄*]}'.`);
muted[muted.map(i => i.grupo).indexOf(from)].usus.splice(menc_os2);
fs.writeFileSync("./bunker/database/usuarios/muted.json", JSON.stringify(muted, null, 2));
break 

case 'mutelist': case 'listamutados':
if(muted[muted.map(i => i.grupo).indexOf(from)].usus.length == 0) return reply(`Não existe nenhum usuário mutado neste grupo.`);
usus__ = `[Total: *${muted[muted.map(i => i.grupo).indexOf(from)].usus.length}*] - Lista de participantes mutados no grupo:\n–\n`;
usus__ += muted[muted.map(i => i.grupo).indexOf(from)].usus.map((v, index) =>`• *[${index+1}]* - @${v.split('@')[0]}`).join('\n');
await mention(usus__);
break

case 'roletarussa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
TAMBOR = ["na perna.","na cabeça.","no pescoço.","no peito.","no olho.","no estômago.","na boca.","na perna.","na testa.","no braço."]
C2 = somembros[Math.floor(Math.random() * somembros.length)]
if(somembros.length == 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴇxɪsᴛᴇ *ᴍᴇᴍʙʀᴏs ᴄᴏᴍᴜɴs* ɴᴏ ɢʀᴜᴘᴏ, sᴏᴍᴇɴᴛᴇ ᴀᴅᴍɪɴs.*")
if(C2 === sender || C2 === botNumber) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
if(C2 === sender || C2 === numerodono[0]) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)		
reply(`A escolha é minha! 1 membro irá morrer, que os jogos comecem...`)
setTimeout(async() => { 
await mentions(`Que pena... você não sobreviveu ao meu jogo *@${C2.split('@')[0]}*, hora de enterrar o cadáver, infelizmente morreu com tiro ${TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]}`, [C2], true) 
}, 5000)	 
setTimeout(async() => {
await kasane.groupParticipantsUpdate(from, [C2], "remove")
}, 6000)
break

case 'dinextenso': 
if(!q.includes(".")) return reply(`❌️ - Coloque apenas números para realizar a transformação de digitos numérico para números em extenso.\nPor exemplo: *${prefix}dinextenso 500.00 ou 756.50*, tudo que você colocar os valores deve colocar um ponto(.) para converter os valores.`)
try {
data = await fetchJson(`https://api.invertexto.com/v1/number-to-words?token=${API_KEY_INVERTEXTO}&number=${q}&language=pt&currency=BRL`);
reply(`*${q}* : ${capitalizeFirstLetter(data.text)}`);
} catch(error) {
reply(mess.error())
}
break

case 'validarcpf': case 'validarcnpj':
if(command === "validarcpf") {
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅɪɢɪᴛᴇ ᴜᴍ ᴄᴘғ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴀ ᴠᴇʀɪғɪᴄᴀçãᴏ sᴇ é ᴠáʟɪᴅᴏ ᴏᴜ ɪɴᴠáʟɪᴅᴏ...*")
if(q.length < 11) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴅɪɢɪᴛᴏᴜ ᴜᴍ ᴄᴘғ ǫᴜᴇ ɴãᴏ ᴛᴇᴍ 11 ᴅíɢɪᴛᴏs, ᴠᴇʀɪғɪǫᴜᴇ sᴇ ᴄᴏʟᴏᴄᴏᴜ ᴘᴏɴᴛᴜᴀçãᴏ, sᴇ ᴇsᴛɪᴠᴇʀ ʀᴇᴛɪʀᴇ.*")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠáʟɪᴅᴏ.*")
if(data.valid == false) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɪɴᴠáʟɪᴅᴏ.*")
} catch(error) {reply(mess.error())}
} else if(command === "validarcnpj") {
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅɪɢɪᴛᴇ ᴜᴍ ᴄɴᴘᴊ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴀ ᴠᴇʀɪғɪᴄᴀçãᴏ sᴇ é ᴠáʟɪᴅᴏ ᴏᴜ ɪɴᴠáʟɪᴅᴏ!*")
if(q.length < 14) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴅɪɢɪᴛᴏᴜ ᴜᴍ ᴄɴᴘᴊ ǫᴜᴇ ɴãᴏ ᴛᴇᴍ 14 ᴅíɢɪᴛᴏs, ᴠᴇʀɪғɪǫᴜᴇ sᴇ ᴄᴏʟᴏᴄᴏᴜ ᴘᴏɴᴛᴜᴀçãᴏ, sᴇ ᴇsᴛɪᴠᴇʀ ʀᴇᴛɪʀᴇ.*")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠáʟɪᴅᴏ.*")
if(data.valid == false) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɪɴᴠáʟɪᴅᴏ.*")
} catch(error) {reply(mess.error())}
}
break

case 'createimg': case 'texttoimage': case 'imagine':
if(!q) return reply(`O que você deseja criar amiguinho? Coloque após o comando o que você deseja criar... Por exemplo: ${prefix+command} macaco dirigindo uma bmw`);
try {
await replyWithReaction('Olá, estou criando a imagem a partir de seu questionamento, aguarde senhor(a)...', {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🎨*", key: info.key}});
dataResultAI = await fetchJson(`https://hercai.onrender.com/v3/text2image?prompt=${q}`);
await kasane.sendMessage(from, {image: {url: dataResultAI.url}}, {quoted: selo});
} catch(error) {
await replyWithReaction(mess.error(), {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌*", key: info.key}});
}
break

case 'totalcmd':
case 'tcmd': {
await reagir(from, "⚙️");
// Função para formatar uptime
const formatTime = (ms) => {
const h = Math.floor(ms / 3600000);
const m = Math.floor(ms / 60000) % 60;
const s = Math.floor(ms / 1000) % 60;
return `${h}h ${m}m ${s}s`;
};
const uptime = formatTime(process.uptime() * 1000);
const agora = new Date();
const dataFormatada = agora.toLocaleDateString('pt-BR');
const horaFormatada = agora.toLocaleTimeString('pt-BR');
fs.readFile('./kasane.js', 'utf8', (err, data) => {
if (err) return reply("*❌ ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ!*");
const regex = /case\s'(.+?)'/g;
let match;
const casesName = [];
while ((match = regex.exec(data)) !== null) {
casesName.push(match[1]);
}
const total = casesName.length;
let nivel, emoji;
if (total >= 300) {
nivel = "🔱 *ᴇɴᴛɪᴅᴀᴅᴇ | ꜱᴜᴘʀᴇᴍᴏ*";
emoji = "👑";
} else if (total >= 200) {
nivel = "🔥 *ᴀᴠᴀɴᴄ̧ᴀᴅᴏ*";
emoji = "🚀";
} else if (total >= 100) {
nivel = "🟡 *ɪɴᴛᴇʀᴍᴇᴅɪᴀ́ʀɪᴏ*";
emoji = "⚙️";
} else {
nivel = "🟢 *ʙᴀ́ꜱɪᴄᴏ*";
emoji = "📘";
}
const fonte = (txt) => txt.replace(/./g, a => a.normalize('NFKD'));
const msg = `*『 🧠 』${fonte('ᴀɴᴀ́ʟɪsᴇ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs')}${emoji}『 📊 』*\n\n` +
`🤖 *${fonte('ʙᴏᴛ')}:* ${fonte(NomeDoBot)}\n` +
`📦 *${fonte('ᴛᴏᴛᴀʟ')}:* ${fonte(String(total))}\n` +
`📍 *${fonte('ɴɪ́ᴠᴇʟ')}:* ${nivel}\n\n` +
`🕒 *${fonte('ᴜᴘᴛɪᴍᴇ')}:* ${fonte(uptime)}\n` +
`📅 *${fonte('ᴅᴀᴛᴀ')}:* ${fonte(dataFormatada)}\n` +
`⌚ *${fonte('ʜᴏʀᴀ')}:* ${fonte(horaFormatada)}\n\n` +
`🛠️ *${fonte('ᴅᴇꜱᴇɴᴠᴏʟᴠɪᴅᴏ ᴘᴏʀ')}:* 𝐃𝐲𝐥𝐚𝐧 𝐌𝐨𝐝𝐳`;
return reply(msg);
});
}
break;


case 'pergunta': case 'openai': case 'gpt': case 'chatgpt':
try {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀɢᴜᴀʀᴅᴇ, ᴄʀɪᴀɴᴅᴏ / ᴘᴇsǫᴜɪsᴀɴᴅᴏ sᴏʙʀᴇ ᴏ ǫᴜᴇ ᴇsᴛᴀ ᴘᴇʀɢᴜɴᴛᴀɴᴅᴏ ᴏᴜ ᴘᴇᴅɪɴᴅᴏ.*");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/PERGUNTE_E_EU_RESPONDO?q=${q.trim()}&apikey=${API_KEY_BRONXYS}`)
reply(`( ${ABC.msg} )`)
} catch { 
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
}
break;

case 'gemini': {
  try {
    if (!q)
      return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴘᴇʀɢᴜɴᴛᴀʀ ᴀᴏ ʟᴀᴅᴏ ᴅᴏ ᴄᴏᴍᴀɴᴅᴏ.*");

    const { key } = await kasane.sendMessage(
      from,
      { text: '⏳ Processando sua pergunta, aguarde...' },
      { quoted: selo }
    );

    const data = await fetchJson(
      `https://tokito-apis.site/api/gemini?texto=${encodeURIComponent(q)}&apikey=yato`
    );

    // 🧠 NORMALIZA A RESPOSTA
    let resposta = '';

    // Caso 1: resposta já é string
    if (typeof data?.resposta === 'string') {
      resposta = data.resposta;
    }

    // Caso 2: resposta é JSON do Gemini
    else if (data?.resposta?.candidates) {
      resposta = data.resposta.candidates[0].content.parts
        .map(p => p.text)
        .join('')
        .trim();
    }

    // Caso 3: candidates direto (fallback)
    else if (data?.candidates) {
      resposta = data.candidates[0].content.parts
        .map(p => p.text)
        .join('')
        .trim();
    }

    if (!resposta) resposta = 'Sem resposta da IA 😕';

    await kasane.sendMessage(
      from,
      {
        text: resposta,
        edit: key,
        linkPreview: false
      }
    );

  } catch (err) {
    console.error(err);
    reply(mess.error());
  }
}
break;
case 'gpt-3.5': case 'chatgpt-3.5':
try {
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴘᴇʀɢᴜɴᴛᴀʀ ᴀᴏ ʟᴀᴅᴏ ᴅᴏ ᴄᴏᴍᴀɴᴅᴏ.*");
let { key } = await kasane.sendMessage(from, {text: `Estou processando sua pergunta, isso pode levar alguns segundos...`}, {quoted: selo});
data = await fetchJson(`https://aemt.me/turbo?text=${q}`);
await kasane.sendMessage(from, {text: `${data.result}`, edit: key});
} catch(error) {
reply(mess.error());
}
break

case 'redacao':
if(!q) return reply(`Você esqueceu de colocar o tema de sua redação ao lado do comando.`)
try {
let { key } = await kasane.sendMessage(from, {text: `Estou processando sua solicitação. Isso pode levar alguns segundos...`}, {quoted: selo})
promptUser = `Crie um texto dissertativo-argumentativo com o tema: ${q}`
anu1 = await fetchJson(`https://aemt.me/gpt4?text=${promptUser}`)
await kasane.sendMessage(from, {text: mess.respostaRedacao(anu1), edit: key});
} catch(error) {
return reply(mess.error())
}
break

case 'summerize':
if(!q) return reply(`Você esqueceu de colocar o que você deseja resumir ao lado do comando.`)
try {
let { key } = await kasane.sendMessage(from, {text: `Estou resumindo o texto solicitado. Isso pode levar alguns segundos...`}, {quoted: selo})
promptUser = `Faça um resumo básico do texto apresentado: ${q}`
anu1 = await fetchJson(`https://aemt.me/gpt4?text=${promptUser}`)
await kasane.sendMessage(from, {text: mess.respostaResumida(anu1), edit: key})
} catch(error) {
return reply(mess.error())
}
break

case 'totext': 
if (!isQuotedAudio) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘᴏʀ ғᴀᴠᴏʀ, ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍ áᴜᴅɪᴏ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴀ ʟᴇɪᴛᴜʀᴀ ᴅᴏ áᴜᴅɪᴏ.*")
if(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.fileLength > 2100000) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *só ʀᴇᴀʟɪᴢᴏ ᴀ ᴛʀᴀɴsᴄʀɪçãᴏ ᴅᴇ áᴜᴅɪᴏ ᴅᴇ ᴀᴛé *2ᴍʙ*, ᴇɴᴠɪᴇ ᴜᴍ ᴀʀǫᴜɪᴠᴏ ᴍᴇɴᴏʀ.*")
try {
let getBufferAudio = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio')
await kasane.sendMessage(from, {text: `Estou realizando a transcrição do áudio para texto, aguarde...`}, {quoted: selo});
fs.writeFileSync(`./bunker/database/data/media/audios/totext/totext-${sender}.mp3`, getBufferAudio)
client = new AssemblyAI({apiKey: "11d7fb1a4e8f4e4fac85d3b9be844b4a"})
data = await kasane.transcripts.create({audio_url: `./bunker/database/data/media/audios/totext/totext-${sender}.mp3`, language_code: "pt"})
if (data.status === 'error') return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴛʀᴀɴsᴄʀᴇᴠᴇʀ ᴏ áᴜᴅɪᴏ! ᴘᴏʀ ғᴀᴠᴏʀ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ.*")
if (data.words.length == 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ғᴏɪ ᴘᴏssíᴠᴇʟ ᴛʀᴀɴsᴄʀᴇᴠᴇʀ ᴏ áᴜᴅɪᴏ ᴇɴᴠɪᴀᴅᴏ.*")
kasane.sendInteractiveTXT(from, `Texto extraído do áudio: ⬎\n\t• Texto: '${data.text}'\n–\n• Total de palavra(s) detectada(s) no áudio mencionado: *${data.words.length} palavra(s).*\n• ID: *${data.id}*`, `© kasane Legancy`, {participant: sender, quotedMessage: info.message}, {buttons: [{name: "cta_copy", buttonParamsJson: JSON.stringify({display_text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴏᴘɪᴀʀ*", id: `0`, copy_code: data.text, disabled: true})}]});

DLT_FL(`./bunker/database/data/media/audios/totext/totext-${sender}.mp3`)
} catch(error) {
reply(mess.error())
}
break


case 'wikipedia': case 'wiki':
try {
if(!q) return reply(`Exemplo: ${prefix+command} JavaScript`)
reply(`Aguarde, pesquisando sobre o que está perguntando..`)
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
reply(mess.wikiResposta(wikis))
} catch(error) {
reply(mess.error())
}
break

case 'nasa':
try {
if (!q) return reply(`*Exemplo:* ${prefix}${command} 19-10-2007`)
dataAkam = await fetchJson(API_URL+`/api/pesquisa/nasa_apod?data=${q}&apikey=`+API_KEY_KASANE)
resultExp = await fetchJson(API_URL+`/api/outros/translate?texto=${dataAkam.nasa.explanation}&ling=pt&apikey=`+API_KEY_KASANE)
await kasane.sendMessage(from, {image: {url: dataAkam.nasa.hdurl }, caption: mess.result_APOD(dataNaga, resultExp)}, {quoted: selo});
} catch(error) {
reply(mess.error());
}
break

case 'book':
if (args.length == 0) return reply(`*Exemplo:* ${prefix+command} Nome do Livro`)
try {
const takeBook = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=pt`);
const getBook = await axios.get(`${takeBook.data.items[0].selfLink}`);
var bookImage = await getBuffer(getBook.data.volumeInfo.imageLinks.thumbnail)
await kasane.sendMessage(from, {image: bookImage, caption: mess.searchBooks(getBook)}, {quoted: selo})
} catch(error) {
reply(mess.error())
}
break

case 'clima':
if (args.length == 0) return reply(`*Exemplo:* ${prefix}Clima Maceió`)
try {
const wttrin = (await axios.get(`https://pt.wttr.in/${encodeURIComponent(q)}?format=j1`)).data;
var wttrImage = await getBuffer(`https://wttr.in/${encodeURIComponent(q)}.png`)
await kasane.sendMessage(from, {image: wttrImage, caption: mess.clima(wttrin)}, {quoted: selo})
} catch(error) {
reply(mess.error())
}
break

case 'simi':
if(!isGroup) return reply(mess.onlyGroup())
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST', headers: {'content-type': "application/x-www-form-urlencoded"}, body: "text="+q+"&lc=pt"});
reply(datasimi.message);
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʀᴇsᴘᴏsᴛᴀ ɴãᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴀ..*");
}
break

case 'simih':
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isSimi) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴍᴏᴅᴏ sɪᴍɪʜ ᴊá sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴀᴛɪᴠᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
dataGp[0].simi1 = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ᴍᴏᴅᴏ sɪᴍɪ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ..*")
} else if(Number(args[0]) === 0) {
if(!isSimi) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴍᴏᴅᴏ sɪᴍɪʜ ᴊá sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
dataGp[0].simi1 = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴀɴᴅᴏ ᴏ ᴍᴏᴅᴏ sɪᴍɪ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.️*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ.*")
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAutofigu) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴄʀɪᴀʀ sᴛɪᴄᴋᴇʀs ғᴏʀᴍᴀ ᴀᴜᴛᴏᴍáᴛɪᴄᴀ ᴊá sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴀᴛɪᴠᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ sᴇɴʜᴏʀ(ᴀ).*") 
dataGp[0].autosticker = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀᴜᴛᴏ ғɪɢᴜʀɪɴʜᴀs ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴄʀɪᴀʀ sᴛɪᴄᴋᴇʀs ғᴏʀᴍᴀ ᴀᴜᴛᴏᴍáᴛɪᴄᴀ ᴊá sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ sᴇɴʜᴏʀ(ᴀ).*")
dataGp[0].autosticker = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀᴜᴛᴏ ғɪɢᴜʀɪɴʜᴀs ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.️*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'autorepo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAutorepo) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴍᴏᴅᴏ ᴀᴜᴛᴏ ʀᴇsᴘᴏsᴛᴀ ᴊá sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴀᴛɪᴠᴏ ɴᴏ ɢʀᴜᴘᴏ.*")
dataGp[0].autoresposta = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀᴜᴛᴏ ʀᴇsᴘᴏsᴛᴀ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isAutorepo) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴍᴏᴅᴏ ᴀᴜᴛᴏ ʀᴇsᴘᴏsᴛᴀ ᴊá ᴇsᴛᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ɴᴏ ɢʀᴜᴘᴏ.*");
dataGp[0].autoresposta = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀᴜᴛᴏ ʀᴇsᴘᴏsᴛᴀ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.️*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case "Autodown":
case "autodown":
if (!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *este comando só pode ser usado em grupos.*");
if (!isGroupAdmins) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *apenas administradores podem usar este comando.*");
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 para ativar ou 0 para desativar.*");

if (Number(args[0]) === 1) {
if (isAutodown) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *o recurso de auto download já está ᴀᴛɪᴠᴏ.*");
dataGp[0].autodown = true;
setGp(dataGp);
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ o recurso de auto download neste grupo.*");
} else if (Number(args[0]) === 0) {
if (!isAutodown) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *o recurso de auto download já está ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*");
dataGp[0].autodown = false;
setGp(dataGp);
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ o recurso de auto download neste grupo.*");
} else {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 para ativar, 0 para desativar.*");
}
break;

case 'modobrincadeira':
case 'modobrincadeiras':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isModobn) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴍᴏᴅᴏ ʙʀɪɴᴄᴀᴅᴇɪʀᴀ ᴊá ᴇsᴛá ᴀᴛɪᴠᴏ.*")
dataGp[0].jogos = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴍᴏᴅᴏ ʙʀɪɴᴄᴀᴅᴇɪʀᴀ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴍᴏᴅᴏ ʙʀɪɴᴄᴀᴅᴇɪʀᴀ ᴊá ᴇsᴛá ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*")
dataGp[0].jogos = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴍᴏᴅᴏ ʙʀɪɴᴄᴀᴅᴇɪʀᴀ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'leveling':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isLevelingOn) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ɴíᴠᴇʟ ᴊá ᴇsᴛᴀᴠᴀ ᴀᴛɪᴠᴏ ᴀɴᴛᴇs ɴᴇssᴇ ɢʀᴜᴘᴏ.*")
dataGp[0].level = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʟᴇᴠᴇʟɪɴɢ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.*") 
} else if(Number(args[0]) === 0) {
if(!isLevelingOn) return reply(`O recurso de level já está desativado neste grupo.`)
dataGp[0].level = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʟᴇᴠᴇʟɪɴɢ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴅɪᴄɪᴏɴᴀʀ ᴘᴀʀâᴍᴇᴛʀᴏ 1 ᴏᴜ 0 ᴀᴏ ʟᴀᴅᴏ ᴅᴏ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ғᴀᴠᴏʀ sᴇɴʜᴏʀ(ᴀ)!*")
}
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo já está banido.`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Grupo banido com sucesso.`)
} else {
if(!isBanchat) return reply(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'boton':
case 'botoff':
if(!SoDono) return reply(mess.onlyOwner())
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴀɴᴅᴏ ғᴜɴçõᴇs ᴇ ᴘᴀʀᴀɴᴅᴏ ᴀ ᴇxᴇᴄᴜçãᴏ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs ᴘᴏʀ ᴍᴇᴍʙʀᴏs ᴄᴏᴍ sᴜᴄᴇssᴏ...*")
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`Ativando todos os funcionamentos do bot novamente...`)
}
break

case 'antipalavrão':
case 'antipalavrao':
case 'antipalavra':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴘᴀʟᴀᴠʀõᴇs ʜᴀʀᴅᴄᴏʀᴇ ᴊá sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴀᴛɪᴠᴏ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ ɴᴏ ɢʀᴜᴘᴏ sᴇɴʜᴏʀ(ᴀ)!*")
dataGp[0].antipalavrao.active = true
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴘᴀʟᴀᴠʀᴀs ʜᴀʀᴅᴄᴏʀᴇ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴘᴀʟᴀᴠʀõᴇs ʜᴀʀᴅᴄᴏʀᴇ ᴊá sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ ɴᴏ ɢʀᴜᴘᴏ sᴇɴʜᴏʀ(ᴀ)!*")
dataGp[0].antipalavrao.active = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴘᴀʟᴀᴠʀᴀ ʜᴀʀᴄᴏʀᴇ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.️*")
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ, 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ*")
}
break

case 'addpalavra':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isPalavrao) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀɴᴛɪ ᴘᴀʟᴀᴠʀãᴏ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ!*")
if(args.length < 1) return reply(`Use assim: ${prefix + command} [palavrão]. Um exemplo desmontrativo de como usar aqui: ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀ ᴘᴀʟᴀᴠʀᴀ ᴊá ғᴏɪ ᴀᴅɪᴄɪᴏɴᴀᴅᴀ ɴᴀ ʟɪsᴛᴀ ᴅᴇ ᴘʀᴏɪʙɪçõᴇs. ᴅᴏ ᴀɴᴛɪ ᴘᴀʟᴀᴠʀᴀ, ᴠᴇʀɪғɪǫᴜᴇ...*")
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply(`Palavrão adicionado com sucesso! Consulte a lista, usando: ${prefix+command}`)
break

case 'delpalavra':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isPalavrao) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀɴᴛɪ ᴘᴀʟᴀᴠʀãᴏ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ!*")
if(args.length < 1) return reply(`Use assim: ${prefix + command} [palavrão]. Um exemplo desmontrativo de como usar aqui: ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀ ᴘᴀʟᴀᴠʀᴀ ᴊá ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴀ ᴏᴜ ɴᴜɴᴄᴀ ᴇsᴛᴇᴠᴇ ɴᴀ ʟɪsᴛᴀ ᴅᴇ ᴘʀᴏɪʙɪçõᴇs ᴅᴏ ʀᴇᴄᴜʀsᴏ...*")
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
reply(`Palavrão removido com sucesso da lista. Para verificar se foi removido mesmo, use o comando: ${prefix+command}`)
break

case 'listapalavrão': case 'listapalavra': case 'listpalavra':
if(!isPalavrao) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀɴᴛɪ ᴘᴀʟᴀᴠʀãᴏ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ!*")
if(isPalavras.length < 0) return reply(`Não existe nenhum palavra proibida na lista.`)
reply(`• [Total: *${isPalavras.length}*] - Lista de palavrões adicionados no grupo:\n–\n${isPalavras.map((v, index) => `*${index+1}.* ➸${v}`).join('\n')}`)
break

case 'limitecaracteres':
case 'limiteflood':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`O recurso limite de caracteres já está ativo no grupo.`)
dataGp[0].limitec.active = true
setGp(dataGp)
reply(`O recurso limite de caracteres foi ativado nesse grupo.`)
} else if(Number(args[0]) === 0) {
if(!isAntiFlood) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ʟɪᴍɪᴛᴇ ᴅᴇ ᴄᴀʀᴀᴄᴛᴇʀᴇs ɴãᴏ ᴇsᴛá ᴀᴛɪᴠᴀᴅᴏ ɴᴏ ɢʀᴜᴘᴏ.*")
dataGp[0].limitec.active = false
setGp(dataGp)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʀᴇᴄᴜʀsᴏ ʟɪᴍɪᴛᴇ ᴅᴇ ᴄᴀʀᴀᴄᴛᴇʀᴇs ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ɴᴇssᴇ ɢʀᴜᴘᴏ.️*")
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(mess.onlyOwner())
if(!isAntiFlood) return reply(`Ative este recurso primeiro ${prefix}limiteflood 1`)
if(!q) return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`)
if(isNaN(q) == true) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅɪɢɪᴛᴇ ᴀᴘᴇɴᴀs ɴúᴍᴇʀᴏs.*")
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`Foi alterado o limite de caracteres para: ${q}`)
} else {
fs.writeFileSync('./bunker/database/usuarios/flood.json', JSON.stringify({limitefl: q}, null, '\t'))
await reply(`Foi adicionado um limite global de caracteres de: ${q}`)
}
break

case 'status':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(mess.onlyAdmins())
reply(mess.statusBot(isAnticall, isAntiPv, isAntiPv2, isAntiPv3, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, isAntiDDD, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkHard, isAntiLinkEasy, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isWelkom, isWelkom2, isSimi, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn))
break

case 'reiniciar':
if(!SoDono) return reply(mess.onlyOwner())
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʀᴇɪɴɪᴄɪᴀɴᴅᴏ ᴏ sɪsᴛᴇᴍᴀ, ᴇᴍ sᴇɢᴜɴᴅᴏs ᴊá ᴇsᴛᴀʀᴇɪ ᴅᴇ ᴠᴏʟᴛᴀ sᴇɴʜᴏʀ(ᴀ) ᴀs sᴜᴀs ᴏʀᴅᴇɴs!*")
setTimeout(async() => {process.exit()}, 1200)
break

case 'reviverqr':
if(!SoDono) return reply(mess.onlyOwner()) 
exec(`cd ${folderUserAuth} && rm -rf pre-key* sender* session*`)
setTimeout(async () => {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ʀᴇɪɴɪᴄɪᴀɴᴅᴏ..*")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'novoqr':
if(!SoDono) return reply(mess.onlyOwner());
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴇʀá ᴀᴘᴀɢᴀᴅᴏ ᴏ ǫʀᴄᴏᴅᴇ, ᴇ ɪʀá ɢᴇʀᴀʀ ᴜᴍ ɴᴏᴠᴏ, ғɪǫᴜᴇ ᴀᴛᴇɴᴛᴏ ɴᴏ ᴛᴇʀᴍɪɴᴀʟ ᴘᴀʀᴀ ʟᴇʀ ɴᴏᴠᴀᴍᴇɴᴛᴇ..*");
setTimeout(async() => {fs.rmdirSync(qrcode, {recursive: true})}, 1500);
break

case 'limpardb':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = countMessage.map(i => i.groupId).indexOf(from)
total = countMessage[AB].participants.length
caixa = []
for(i = 0; i < countMessage[AB].participants.length; i++) {
if(isJsonIncludes(groupMembers, countMessage[AB].participants[i].id)) {
caixa.push(countMessage[AB].participants[i])
}
}
pack = total - caixa.length
if(pack <= 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴛᴏᴅᴏs ᴏs ɢʜᴏsᴛs ᴅᴀ ᴅᴀᴛᴀ ʙᴀsᴇ ᴊá ғᴏʀᴀᴍ ᴅᴇʟᴇᴛᴀᴅᴏs...*")
countMessage[AB].participants = caixa
saveJSON(countMessage, ".settings/media/countmsg.json")
reply(`${pack} números foram deletados da pasta com sucesso ✅`)
break

case 'deletechat':{
if(!SoDono) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴏᴍᴇɴᴛᴇ ᴍᴇᴜ ᴘᴀɪ!*")
if(!q && !menc_os2) return reply(`Marque a mensagem do usuário ou use ${prefix+command} 55219.......99`)
try {
if(!menc_os2) {
ursk = q
victim = ursk.includes('@') ? ursk.split('@')[1] + "@s.whatsapp.net" : ursk + "@s.whatsapp.net"
await kasane.chatModify({
delete: true,
lastMessages: [{ key: info.key, messageTimestamp: info.messageTimestamp }] }, victim)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇssᴇ ᴄʜᴀᴛ ғᴏɪ ʟɪᴍᴘᴏ!*")
} else {
await kasane.chatModify({
delete: true,
lastMessages: [{ key: info.key, messageTimestamp: info.messageTimestamp }] }, menc_os2)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄʜᴀᴛ ʟɪᴍᴘᴏ!*")
}
} catch(e) {
console.log(e)
reply(e)
}
}
break
case 'like': {
try {

if (!isVip) return reply("❌ Apenas usuários VIP podem usar este comando.");

if (!q) return reply(`Use: ${prefix}fflike ID_DA_CONTA`);

const idConta = q.trim();

const listaRegioes = {
title: "Selecionar Região",
sections: [
{
title: "Servidores disponíveis",
rows: [
{
title: "🇧🇷 Brasil",
description: "Servidor principal",
id: `${prefix}fflike_send BR ${idConta}`
},
{
title: "🌎 Outras Regiões",
description: "Global",
id: `${prefix}fflike_send OTHER ${idConta}`
}
]
}
]
};

const botoes = [
{
name: "single_select",
buttonParamsJson: JSON.stringify(listaRegioes)
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "💎 Comprar VIP",
url: "https://mpago.la/2xsxiv5",
merchant_url: "https://mpago.la/2xsxiv5"
})
}
];

const carouselMessage = {
cards: [
{
body: { text: `💎 Enviar likes para o ID:\n\n🆔 ${idConta}\n\nEscolha a região:` },
footer: { text: "Sistema de Likes Free Fire" },
nativeFlowMessage: { buttons: botoes }
}
]
};

await kasane.relayMessage(
from,
{
interactiveMessage: {
body: { text: "🔥 FREE FIRE LIKES" },
carouselMessage
}
},
{}
);

} catch (e) {
console.log(e);
reply("Erro FF.");
}
}
break;
case 'fflike_send': {
  try {
    if (!isVip) return reply("❌ Apenas usuários VIP podem usar este comando.")

    const region = (args[0] || '').toUpperCase()
    const uid = args[1]

    if (!region || !uid)
      return reply("❌ Use: .fflike BR UID")

    const cooldowns = loadCooldown()
    const agora = Date.now()

    // 🔒 COOLDOWN POR UID
    if (cooldowns[uid]) {
      const restante = cooldowns[uid] + COOLDOWN_UID - agora
      if (restante > 0) {
        const h = Math.floor(restante / 3600000)
        const m = Math.floor((restante % 3600000) / 60000)
        return reply(
          `⏳ *COOLDOWN ATIVO*\n\n🆔 UID: ${uid}\n⏰ Aguarde ${h}h ${m}min`
        )
      }
    }

    reply("⏳ Enviando likes, aguarde...")

    const url = `https://hubsteam.com.br/api/frifas/send_likes?key=Yosh7&id=${uid}&region=${region}`
    const res = await fetchJson(url)

    if (!res || typeof res.success !== 'boolean') {
      return reply("❌ A API não respondeu corretamente.")
    }

    // 🔐 SALVA COOLDOWN (SEMPRE)
    cooldowns[uid] = agora
    saveCooldown(cooldowns)

    // 📊 DADOS
    const enviados = res.likesAdded ?? 0
    const antes = res.initialLikes ?? "?"
    const depois = res.finalLikes ?? "?"
    const status = res.usageCounted
      ? "✅ CONTABILIZADO"
      : "⚠️ NÃO CONTABILIZADO"

    // 📨 RESPOSTA FINAL (SEMPRE ENVIA)
    const msg = `
💎 *LIKES PROCESSADOS*

👤 Jogador: ${res.player || "Desconhecido"}
🆔 UID: ${uid}
🌎 Região: ${res.regionCode || region}

👍 Likes antes: ${antes}
✨ Likes enviados: ${enviados}
🔥 Likes agora: ${depois}

📊 Status: ${status}
📌 ${res.usageStatus || ""}
⏳ Próximo uso: 24 horas
`

    reply(msg.trim())

  } catch (e) {
    console.log(e)
    reply("❌ Erro interno ao processar os likes.")
  }
}
break

case 'emoji': case 'semoji':
try {
if (!q.trim()) return reply(`Você está usando o comando de forma errada, use: *${prefix+command} [emj]/[pltf]*\n—\n• *Plataformas disponíveis:* whatsapp, facebook, google, samsung, twitter, apple, microsoft, mesengger, joypixels, openmoji, emojidex, htc, lg, mozilla, softbank, au_kddi`)
if (!q.includes("/")) return reply(`Está faltando a */*, para separar o emoji e plataforma.\n• Por exemplo: ${prefix+command} 🏃‍♂️/apple`);
reply(mess.wait());
var [emojiInput, platform] = q.split("/");
var { emojisData } = await emoji(emojiInput);
if (emojisData && emojisData[platform.toLowerCase()]) {
await sendStickerFromUrl(from, emojisData[platform.toLowerCase()]);
} else {
return reply(`Emoji '${emojiInput}' não encontrado!`);
}
} catch(error) {
reply(mess.error())
}
break

case 'emoji-mix':
case 'emojimix':
txt = q.replace(" +", "+").replace("+ ", "+").replace(" + ", "+")
var [emj1, emj2] = txt.split("+")
if(!q.includes("+")) return reply(`Olá, está faltando o +, exemplo de como usar o comando aqui: *${prefix+command} 😪+🤣*`);
try {
await mention(`*@${sender.split("@")[0]}, estou gerando um mix entre os emojis solicitados...`)
await sendStickerFromUrl(from, API_URL+`/api/outros/emojimix?emoji1=${encodeURI(emj1)}&emoji2=${encodeURI(emj2)}&apikey=`+API_KEY_KASANE)
} catch(error) {
reply(mess.error())
}
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(mess.wait())
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${NomeDoBot}`
sd = `↳ ❪👤ฺ࣭࣪͘ꕸ▸ Feito pelo(a) usuário(a): ${pushname}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
await kasane.sendMessage(from, {sticker: sti}, {quoted: selo})
} else {
return reply(`So imagem amigo(a)!`)
}
break

case 'rbale':
if(!isQuotedSticker) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ғɪɢᴜʀɪɴʜᴀ...*")
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply(mess.wait())
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `↳ ❪👤ฺ࣭࣪͘ꕸ▸ Feito pelo(a) usuário(a): ${pushname}`, `${NomeDoBot}`)
var sti = new Buffer.from(mantap, 'base64');
await kasane.sendMessage(from, {sticker: sti}, {quoted: selo}).catch(async(error) => {
reply(mess.error()); 
})
break

case 'figurinhas':
if(!q) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 7`)
if(q >= 100) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴏʟᴏǫᴜᴇ ᴀʙᴀɪxᴏ ᴅᴇ 100...*")
if(!isGroup) return reply(`As figurinhas estão sendo enviadas em seu pv olha la😁.`)
async function figuss() {
var rnd = Math.floor(Math.random() * 8051)
kasane.sendMessage(sender, { sticker: { url: `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp` } })}
for (i = 0; i < q; i++) {
await sleep(680)
figuss() }
break

case 'rename':
case 'roubar':
if(!isQuotedSticker) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ғɪɢᴜʀɪɴʜᴀ...*")
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴏᴍᴏ ᴠᴏᴄê ʀᴇɴᴏᴍᴇᴀʀ ᴀ ғɪɢᴜʀɪɴʜᴀ sᴇᴍ ᴄᴏʟᴏᴄᴀʀ ᴏ ɴᴏᴠᴏ ᴘᴀᴄᴏᴛᴇ ᴇ ᴀᴜᴛᴏʀ ᴅᴏ sᴛɪᴄᴋᴇʀ? ᴇssᴇs ʜᴜᴍᴀɴᴏs...*")
if(!pack) return reply(`Faça o certo, invés do errado senhor(a), aqui está fórmula correta de uso: *${prefix+command} pacote/autor* (mas não se esqueça de mencionar o comando ao sticker enviado anteriormente se for esse que deseja renomear certo?)`)
if(!author2) return reply(`Faça o certo, invés do errado senhor(a), aqui está fórmula correta de uso: *${prefix+command} pacote/autor* (mas não se esqueça de mencionar o comando ao sticker enviado anteriormente se for esse que deseja renomear certo?)`)
reply(mess.wait())
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
await kasane.sendMessage(from, {sticker: sti}, {quoted: selo}).catch(async(error) => {
reply(mess.error()); 
})
break

case 'fstiker':
case 'fsticker':
case 'f':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij) {
var packnameStk = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${ownerName}`
var authorSticker = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ ❪🤍ฺ࣭࣪͘ꕸ▸ 𝐕𝐢𝐬𝐢𝐭𝐞 𝐧𝐨𝐬𝐬𝐨 𝐬𝐢𝐭𝐞:\n• ↳ https://yurimodz-apis.xyz`
reply(mess.wait())
owgi = await getFileBuffer(boij, 'image')
let ENC_MEDIA1 = await sendImageAsSticker(kasane, from, owgi, selo, {packname: packnameStk, author: authorSticker})
await DLT_FL(ENC_MEDIA1)
} else if(boij2 && boij2?.seconds < 11) {
var packnameStk = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${ownerName}`
var authorSticker = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ ❪🤍ฺ࣭࣪͘ꕸ▸ 𝐕𝐢𝐬𝐢𝐭𝐞 𝐧𝐨𝐬𝐬𝐨 𝐬𝐢𝐭𝐞:\n• ↳ https://yurimodz-apis.xyz`
reply(mess.wait())
owgi = await getFileBuffer(boij2, 'video')
let ENC_MEDIA2 = await sendVideoAsSticker(kasane, from, owgi, selo, {packname: packnameStk, author: authorSticker})
await DLT_FL(ENC_MEDIA2)
} else {
reply(`Envie uma imagem, vídeo ou gif com legenda: ${prefix}sticker (duração do adesivo de vídeo de 1 a 10 segundos)`)
}
break

case 'st':
case 'stk':
case 'sticker':
case 's':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2) {
var pack = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${ownerName}`
var author2 = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ ❪🤍ฺ࣭࣪͘ꕸ▸ 𝐕𝐢𝐬𝐢𝐭𝐞 𝐧𝐨𝐬𝐬𝐨 𝐬𝐢𝐭𝐞:\n• ↳ https://tokito-apis.site`
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(kasane, from, owgi, selo, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${ownerName}`
var author2 = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ ❪🤍ฺ࣭࣪͘ꕸ▸ 𝐕𝐢𝐬𝐢𝐭𝐞 𝐧𝐨𝐬𝐬𝐨 𝐬𝐢𝐭𝐞:\n• ↳ https://yurimodz-apis.xyz`
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(kasane, from, owgi, selo, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
reply(`Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando: ${prefix+command} (mencionando a mídia)`)
}
break

case 'toimg':
if(!isQuotedSticker) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘᴏʀ ғᴀᴠᴏʀ, *ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍ sᴛɪᴄᴋᴇʀ* ᴘᴀʀᴀ ᴇxᴇᴄᴜᴛᴀʀ ᴏ ᴄᴏᴍᴀɴᴅᴏ.*")
try {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
await kasane.sendMessage(from, {image: buff}, {quoted: selo}).catch(async(error) => {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴄᴏɴᴠᴇʀᴛᴇʀ ᴏ sᴛɪᴄᴋᴇʀ ᴘᴀʀᴀ ɪᴍᴀɢᴇᴍ.*")
})
} catch(error) {
console.log(error)
}
break

case 'metadinha': 
try {
await reagir(from, "💑️")
anuData = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let selectRandom = anuData[Math.floor(Math.random() * anuData.length)]
await kasane.sendMessage(from, {image: {url: selectRandom.male}, caption: "• Perfil Masculino"}, {quoted: selo})
await kasane.sendMessage(from, {image: {url: selectRandom.female}, caption: `• Perfil Feminino`}, {quoted: selo})
} catch(e) {
reply(mess.error());
}
break

case 'comunismo':
case 'bolsonaro':
case 'bnw':
case 'beautiful':
case 'blur':
case 'affect':
case 'del':
case 'circle':
case 'dither':
case 'facepalm':
case 'invert':
case 'magik':
case 'rotate':
case 'rip':
case 'jail':
case 'trash':
case 'pixelate':
case 'sepia':
case 'wanted':
case 'wasted':
case 'lgbt':
case 'karaba':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
await reagir(from, "🖼"); /* Reação para aguadar o sucesso da solicitação... '🖼' */
reply(mess.wait());
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
await kasane.sendMessage(from, {image: {url: API_URL+`/api/canvas/${command}?link=${link}&apikey=`+API_KEY_KASANE}}, {quoted: selo});
await reagir(from, "✅️"); /* Sucesso? Vai reagir a mensagem com o emoji '✅️' */
} else {
await reagir(from, "😿"); /* Triste? Não mencionou nada ou não seguiu as diretrizes... */
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴘᴀʀᴀ ᴀᴛʀɪʙᴜɪʀ ᴏ ᴇғᴇɪᴛᴏ ᴀ ғᴏᴛᴏ.*");
}
} catch(error) {
await reagir(from, "😿"); /* Triste? Não mencionou nada ou não seguiu as diretrizes... */
reply(mess.error())
}
break

case 'substituir':
if(!SoDono && !isnit) return reply(mess.onlyOwner())
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
await kasane.sendMessage(from, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴀʀǫᴜɪᴠᴏ ғᴏɪ sᴜʙsᴛɪᴛᴜíᴅᴏ ᴘᴀʀᴀ ᴏᴜᴛʀᴏ ʟᴏᴄᴀʟ ᴄᴏᴍ sᴜᴄᴇssᴏ.*"}, {quoted: selo})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴅᴏᴄᴜᴍᴇɴᴛᴏ ᴏᴜ ᴀʀǫᴜɪᴠᴏ..*")
}
break

case 'index-bot':
if(!SoDono)return reply(mess.onlyOwner())
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
await kasane.sendMessage(from, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴀʀǫᴜɪᴠᴏ index.js foi atualizado com sucesso.*"}, {quoted: selo})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴅᴏᴄᴜᴍᴇɴᴛᴏ ᴏᴜ ᴏ ᴀʀǫᴜɪᴠᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴇɴᴠɪᴀʀ ᴘʀᴀ ᴅᴇᴛᴇʀᴍɪɴᴀʀ ᴘᴀsᴛᴀ ᴏᴜ sᴜʙsᴛɪᴛᴜɪʀ..*")
}
break

case 'getcase':
case 'puxarcase':
try{
if (!SoDono) return reply(mess.onlyOwner())
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴇᴜ ᴘᴇʀᴅɪᴅᴏ é ᴜᴍᴀ ᴏʀᴅᴇᴍ! ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴘᴏᴜᴄᴏ ᴍᴇsᴛʀᴇ! <3*")
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./kasane.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
reply(`${getCase(q)}`)
} catch(error) {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀ ᴄᴀsᴇ ɴãᴏ ғᴏɪ ᴇɴᴄᴏɴᴛʀᴀᴅᴀ, ᴠᴏᴄê ᴅᴇᴠᴇ ᴛᴇʀ ᴇsᴄʀɪᴛᴏ ᴇʀʀᴀᴅᴏ...*")
}
break
/*
case 'figaleatoria':
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴏᴜ ɢᴇʀᴀɴᴅᴏ sᴜᴀ ғɪɢᴜʀɪɴʜᴀ, ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴘᴏᴜᴄᴏ ᴀᴍɪɢᴏ(ᴀ)...*")
kasane.sendMessage(from, {sticker: {url: API_URL+`/api/stickera?apikey=`+API_KEY_KASANE}}, {quoted: selo})
.catch(async(error) => {
return reply(mess.error());
});
break

case 'figurinhas':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ sᴛɪᴄᴋᴇʀs ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ...*");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴇʀᴍɪᴛɪᴅᴏ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴀᴄɪᴍᴀ ᴅᴇ 10, ᴘᴏʀ ᴍᴏᴛɪᴠᴏ ᴅᴇ ғʟᴏᴏᴅ.*");
reply(isGroup ? "🤖🤍 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasAleatorias() {
await kasane.sendMessage(sender, {sticker: {url: API_URL+`/api/stickera?apikey=`+API_KEY_KASANE}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasAleatorias();
}
break

case 'figuemoji':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ sᴛɪᴄᴋᴇʀs ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ...*");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴇʀᴍɪᴛɪᴅᴏ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴀᴄɪᴍᴀ ᴅᴇ 10, ᴘᴏʀ ᴍᴏᴛɪᴠᴏ ᴅᴇ ғʟᴏᴏᴅ.*");
reply(isGroup ? "🤖🤍 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhaEmoji() {
await kasane.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_emoji?apikey=`+API_KEY_KASANE}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhaEmoji();
}
break

case 'figuflork':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ sᴛɪᴄᴋᴇʀs ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ...*");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴇʀᴍɪᴛɪᴅᴏ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴀᴄɪᴍᴀ ᴅᴇ 10, ᴘᴏʀ ᴍᴏᴛɪᴠᴏ ᴅᴇ ғʟᴏᴏᴅ.*");
reply(isGroup ? "🤖🤍 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhaFlork() {
await kasane.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_flork?apikey=`+API_KEY_KASANE}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhaFlork();
}
break

case 'figumemes':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ sᴛɪᴄᴋᴇʀs ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ...*");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴇʀᴍɪᴛɪᴅᴏ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴀᴄɪᴍᴀ ᴅᴇ 10, ᴘᴏʀ ᴍᴏᴛɪᴠᴏ ᴅᴇ ғʟᴏᴏᴅ.*");
reply(isGroup ? "🤖🤍 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasMemes() {
await kasane.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_memes?apikey=`+API_KEY_KASANE}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasMemes();
}
break

case 'figubebe':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ sᴛɪᴄᴋᴇʀs ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ...*");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴇʀᴍɪᴛɪᴅᴏ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴀᴄɪᴍᴀ ᴅᴇ 10, ᴘᴏʀ ᴍᴏᴛɪᴠᴏ ᴅᴇ ғʟᴏᴏᴅ.*");
reply(isGroup ? "🤖🤍 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasBabys() {
await kasane.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_bebe?apikey=`+API_KEY_KASANE}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasBabys();
}
break

case 'figucoreana':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ sᴛɪᴄᴋᴇʀs ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ...*");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴇʀᴍɪᴛɪᴅᴏ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴀᴄɪᴍᴀ ᴅᴇ 10, ᴘᴏʀ ᴍᴏᴛɪᴠᴏ ᴅᴇ ғʟᴏᴏᴅ.*");
reply(isGroup ? "🤖🤍 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasCoreana() {
await kasane.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_coreana?apikey=`+API_KEY_KASANE}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasCoreana();
}
break

case 'figuanime':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ sᴛɪᴄᴋᴇʀs ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ...*");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴇʀᴍɪᴛɪᴅᴏ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴀᴄɪᴍᴀ ᴅᴇ 10, ᴘᴏʀ ᴍᴏᴛɪᴠᴏ ᴅᴇ ғʟᴏᴏᴅ.*");
reply(isGroup ? "🤖🤍 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FiguRandolaAnime() {
await kasane.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_anime?apikey=`+API_KEY_KASANE}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FiguRandolaAnime();
}
break

case 'figufunny':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ sᴛɪᴄᴋᴇʀs ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ...*");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴇʀᴍɪᴛɪᴅᴏ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴀᴄɪᴍᴀ ᴅᴇ 10, ᴘᴏʀ ᴍᴏᴛɪᴠᴏ ᴅᴇ ғʟᴏᴏᴅ.*");
reply(isGroup ? "🤖🤍 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasFunny() {
await kasane.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_engracada?apikey=`+API_KEY_KASANE}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasFunny();
}
break

case 'figuanimais':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ sᴛɪᴄᴋᴇʀs ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ...*");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴇʀᴍɪᴛɪᴅᴏ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴀᴄɪᴍᴀ ᴅᴇ 10, ᴘᴏʀ ᴍᴏᴛɪᴠᴏ ᴅᴇ ғʟᴏᴏᴅ.*");
reply(isGroup ? "🤖🤍 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasAnimais() {
await kasane.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_animais?apikey=`+API_KEY_KASANE}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasAnimais();
}
break

case 'figudesenho':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ sᴛɪᴄᴋᴇʀs ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ...*");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴇʀᴍɪᴛɪᴅᴏ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴀᴄɪᴍᴀ ᴅᴇ 10, ᴘᴏʀ ᴍᴏᴛɪᴠᴏ ᴅᴇ ғʟᴏᴏᴅ.*");
reply(isGroup ? "🤖🤍 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasDesenho() {
await kasane.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_desenho?apikey=`+API_KEY_KASANE}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasDesenho();
}
break

case 'figuraiva':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ sᴛɪᴄᴋᴇʀs ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ...*");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴇʀᴍɪᴛɪᴅᴏ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴀᴄɪᴍᴀ ᴅᴇ 10, ᴘᴏʀ ᴍᴏᴛɪᴠᴏ ᴅᴇ ғʟᴏᴏᴅ.*");
reply(isGroup ? "🤖🤍 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasRaivosas() {
await kasane.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_raiva?apikey=`+API_KEY_KASANE}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
await FigurinhasRaivosas();
}
break

case 'figuroblox':
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴠᴏᴄê ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ sᴛɪᴄᴋᴇʀs ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ...*");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴇʀᴍɪᴛɪᴅᴏ ᴄᴏʟᴏᴄᴀʀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴀᴄɪᴍᴀ ᴅᴇ 10, ᴘᴏʀ ᴍᴏᴛɪᴠᴏ ᴅᴇ ғʟᴏᴏᴅ.*");
reply(isGroup ? "🤖🤍 Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasRoblox() {
await kasane.sendMessage(sender, {sticker: {url: API_URL+`/sticker/figu_roblox?apikey=`+API_KEY_KASANE}});
}
for (i = 0; i < q; i++) {
await sleep(2000);
FigurinhasRoblox();
}
break
*/
case 'bann':
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ ᴜsᴜáʀɪᴏ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴏ @ ᴅᴇʟᴇ.., ʟᴇᴍʙʀᴇ ᴅᴇ só ᴍᴀʀᴄᴀʀ ᴜᴍ ᴜsᴜáʀɪᴏ...*");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴜsᴜáʀɪᴏ ᴊá ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴏᴜ sᴀɪᴜ ᴅᴏ ɢʀᴜᴘᴏ.*");
if(vip.includes(menc_os2)) return await mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true);
if(groupAdmins.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true);
if(botNumber.includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ sᴏᴜ ʙᴇsᴛᴀ ᴅᴇ ʀᴇᴍᴏᴠᴇʀ ᴇᴜ ᴍᴇsᴍᴏ ɴé 🙁, ᴍᴀs ᴇsᴛᴏᴜ ᴅᴇᴄᴇᴘᴄɪᴏɴᴀᴅᴏ ᴄᴏᴍ ᴠᴏᴄê*");
if(numerodono.includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏssᴏ ʀᴇᴍᴏᴠᴇʀ ᴍᴇᴜ ᴅᴏɴᴏ 🤧*");
await kasane.sendMessage(from, {text: `@${menc_os2.split("@")[0]} *REMOVIDO COM SUCESSO, PRONTO VOLTOU PRO UTERO ONDE ELE NASCEU, BEIJOS  DA [YUKIRA]🫵😈* -`, mentions: [menc_os2]})
await kasane.groupParticipantsUpdate(from, [menc_os2], "remove")
break

case 'band':
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
try {
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ ᴜsᴜáʀɪᴏ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴏ @ ᴅᴇʟᴇ.., ʟᴇᴍʙʀᴇ ᴅᴇ só ᴍᴀʀᴄᴀʀ ᴜᴍ ᴜsᴜáʀɪᴏ...*");
if(IS_DELETE) {
setTimeout(async() => {
await kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴜsᴜáʀɪᴏ ɴãᴏ sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴍᴀɪs ɴᴏ ɢʀᴜᴘᴏ sᴇɴʜᴏʀ(ᴀ), ɴãᴏ ᴛᴇᴍ ᴄᴏᴍᴏ ʀᴇᴍᴏᴠᴇʀ.*");
if(botNumber.includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ sᴏᴜ ʙᴇsᴛᴀ ᴅᴇ ʀᴇᴍᴏᴠᴇʀ ᴇᴜ ᴍᴇsᴍᴏ ɴé 🙁, ᴍᴀs ᴇsᴛᴏᴜ ᴅᴇᴄᴇᴘᴄɪᴏɴᴀᴅᴏ ᴄᴏᴍ ᴠᴏᴄê.*");
if(numerodono.includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏssᴏ ʀᴇᴍᴏᴠᴇʀ ᴍᴇᴜ ᴅᴏɴᴏ 🤧*")
await kasane.sendMessage(from, {text: `@${menc_os2.split("@")[0]} *REMOVIDO COM SUCESSO, PRONTO VOLTOU PRO UTERO ONDE ELE NASCEU, BEIJOS  DA [YUKIRA]🫵😈*`, mentions: [menc_os2]})
await kasane.groupParticipantsUpdate(from, [menc_os2], "remove")
} catch(error) {
reply(mess.error())
}
break

case 'add': case 'unkick':
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(!q && info.message.extendedTextMessage === null) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴄᴏʟᴏǫᴜᴇ ᴏ ɴúᴍᴇʀᴏ ᴅᴇ ǫᴜᴇᴍ ᴠᴏᴄê ǫᴜᴇʀ ᴀᴅɪᴄɪᴏɴᴀʀ ɴᴏ ɢʀᴜᴘᴏ.*")
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply(`Número inválido.`);
let [result] = await kasane.onWhatsApp(id);
if(!result) return reply(`Esse número não está registrado no WhatsApp.`);
let response = await kasane.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
await kasane.sendMessage(from, {text: `Ele já está no grupo, como eu vou adicionar?`, mentions: [result.jid, sender]}, {quoted: selo});
} else if(response[0].status == "403") {
await kasane.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta.`, mentions: [result.jid, sender]}, {quoted: selo});
} else if(response[0].status == "408") {
await kasane.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`, mentions: [result.jid, sender]}, {quoted: selo});
} else if(response[0].status == "401") {
await kasane.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot.`, mentions: [result.jid, sender]}, {quoted: selo});
} else if(response[0].status == "200") {
await kasane.sendMessage(from, {text: `Prontinho fiz o que você pediu.`, mentions: [result.jid, sender]}, {quoted: selo});
} else {
await kasane.sendMessage(from, {text: `Ocorreu um erro ao adicionar o(a) *@${result.jid.split("@")[0]}* no grupo.`, mentions: [result.jid, sender]}, {quoted: selo});
}
} catch(error) {
reply(mess.error())
}
break

case 'ban': case 'banir': case 'kick': case 'avadakedavra':
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
try {
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ ᴜsᴜáʀɪᴏ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴏ @ ᴅᴇʟᴇ.., ʟᴇᴍʙʀᴇ ᴅᴇ só ᴍᴀʀᴄᴀʀ ᴜᴍ ᴜsᴜáʀɪᴏ...*")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴜsᴜáʀɪᴏ ᴊá ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴏ ɢʀᴜᴘᴏ ᴏᴜ sᴀɪᴜ.*")
if(botNumber.includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ sᴏᴜ ʙᴇsᴛᴀ ᴅᴇ ʀᴇᴍᴏᴠᴇʀ ᴇᴜ ᴍᴇsᴍᴏ ɴé 🙁, ᴍᴀs ᴇsᴛᴏᴜ ᴅᴇᴄᴇᴘᴄɪᴏɴᴀᴅᴏ ᴄᴏᴍ ᴠᴏᴄê*")
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏssᴏ ʀᴇᴍᴏᴠᴇʀ ᴍᴇᴜ ᴅᴏɴᴏ 🤧*")
await kasane.sendMessage(from, {text: `@${menc_os2.split("@")[0]} *REMOVIDO COM SUCESSO, PRONTO VOLTOU PRO UTERO ONDE ELE NASCEU, BEIJOS  DA [YUKIRA]🫵😈*`, mentions: [menc_os2]})
await kasane.groupParticipantsUpdate(from, [menc_os2], "remove")
} catch(error) {
reply(mess.error())
}
break

case 'promover': 
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ ᴜsᴜáʀɪᴏ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴏ @ ᴅᴇʟᴇ.., ʟᴇᴍʙʀᴇ ᴅᴇ só ᴍᴀʀᴄᴀʀ ᴜᴍ ᴜsᴜáʀɪᴏ...*")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴜsᴜáʀɪᴏ ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴏ ɢʀᴜᴘᴏ ᴏᴜ sᴀɪᴜ, ɴãᴏ sᴇʀá ᴘᴏssíᴠᴇʟ ᴘʀᴏᴍᴏᴠᴇʀ..*")
kasane.sendMessage(from, {text: `@${menc_os2.split("@")[0]} *SENTO PRA [YUKIRA] PRA VIRA ADM VD😜*.`, mentions: [menc_os2]})
kasane.groupParticipantsUpdate(from, [menc_os2], "promote")
break

case 'rebaixar': 
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ ᴜsᴜáʀɪᴏ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴏ @ ᴅᴇʟᴇ.., ʟᴇᴍʙʀᴇ ᴅᴇ só ᴍᴀʀᴄᴀʀ ᴜᴍ ᴜsᴜáʀɪᴏ...*")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇsᴛᴇ ᴜsᴜáʀɪᴏ ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴏ ɢʀᴜᴘᴏ ᴏᴜ sᴀɪᴜ, ɴãᴏ sᴇʀá ᴘᴏssíᴠᴇʟ ʀᴇʙᴀɪxᴀʀ..*")
kasane.sendMessage(from, {text: `@${menc_os2.split("@")[0]} *FOI REBAIXADO POR NÃO DA O CANECO PRA [YUKIRA]🫲😜*.`, mentions: [menc_os2]})
kasane.groupParticipantsUpdate(from, [menc_os2], "demote")
break

case 'sorteio':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!q) return reply(`Coloque algo após o comando, por exemplo: *${prefix}sorteio* _de 100 R$_`);
try {
await mention(`🤖🎉 Parabéns *@${groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)].id.split('@')[0]}*, você acaba de ser contemplado(a) como o(a) ganhador(a) do sorteio...\n–\n• Para mais informações entre em contato com o(a) adm responsável pelo sorteio: _“${q}”_.`);
} catch(error) {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇᴜ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ :/*")
}
break

case 'sorteionumero':
case 'sorteionumeros':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!args.length > 1) return reply(`Coloque algo após o comando, por exemplo: *${prefix}sorteio* _de 100 R$_`);
try {
reply(`🤖🎉 Parabéns ao sortudo(a) do número *${Math.floor(Math.random() * groupMetadata.participants.length)}*, por ganhar o sorteio!\n–\n• Para mais informações entre em contato com o(a) adm responsável pelo sorteio: _“${q}”_.`)
} catch(error) {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇᴜ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ :/*")
}
break

case 'nuke': case 'arquivargp':
if(!SoDono && !isnit) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *só ᴅᴏɴᴏ ᴘᴏᴅᴇ ᴜᴛɪʟɪᴢᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ...*");
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(info.key.fromMe) return 
blup = [];
for (i of groupMembers) {if(!numerodono.includes(i.id)) blup.push(i.id)};
blup.splice(blup.indexOf(botNumber), 1);
for (i = 0; i < blup.length; i++) {
await sleep(500);
await kasane.groupParticipantsUpdate(from, [blup[i]], 'remove');
} 
break

// hentai 
case 'loli':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { loli } = require('./bunker/database/nsfw/animes.js')
var totalnsfw = loli[Math.floor(Math.random() * loli.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'trap':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { trap } = require('./bunker/database/nsfw/animes.js')
var totalnsfw = trap[Math.floor(Math.random() * trap.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'ass':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { ass } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = ass[Math.floor(Math.random()*ass.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'ahegao':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { ahegao } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = ahegao[Math.floor(Math.random()*ahegao.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'bdsm':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { bdsm } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = bdsm[Math.floor(Math.random()*bdsm.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'blowjob':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { blowjob } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = blowjob[Math.floor(Math.random()*blowjob.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'cuckold':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { cuckold } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = cuckold[Math.floor(Math.random()*cuckold.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'cum':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { cum } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = cum[Math.floor(Math.random()*cum.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'ero':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { ero } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = ero[Math.floor(Math.random()*ero.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'femdom':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { femdom } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = femdom[Math.floor(Math.random()*femdom.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'foot':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { foot } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = foot[Math.floor(Math.random()*foot.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'gangbang':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { gangbang } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = gangbang[Math.floor(Math.random()*gangbang.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'ganbganb':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { ganbganb } = require('./bunker/database/nsfw/animes.js')
var totalnsfw = ganbganb[Math.floor(Math.random() * ganbganb.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'glasses':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { glasses } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = glasses[Math.floor(Math.random()*glasses.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'hentai':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { hentai } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = hentai[Math.floor(Math.random()*hentai.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'hentai2':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { hentai2 } = require('./bunker/database/nsfw/animes.js')
var totalnsfw = hentai2[Math.floor(Math.random() * hentai2.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'nekos': {
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { neko2 } = require('./bunker/database/nsfw/animes.js')
var totalnsfw = neko2[Math.floor(Math.random() * neko2.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
}
break

case 'neko2': {
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { neko2 } = require('./bunker/database/nsfw/hentai.js')
var totalnsfw = neko2[Math.floor(Math.random() * neko2.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
}
break

case 'jahy':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { jahy } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = jahy[Math.floor(Math.random()*jahy.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'masturbation':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { masturbation } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = masturbation[Math.floor(Math.random()*masturbation.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'orgy':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { orgy } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = orgy[Math.floor(Math.random()*orgy.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'panties':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { panties } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = panties[Math.floor(Math.random()*panties.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'pussy':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { pussy } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = pussy[Math.floor(Math.random()*pussy.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'boobs':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { boobs } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = boobs[Math.floor(Math.random()*boobs.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'tentacles':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { tentacles } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = tentacles[Math.floor(Math.random()*tentacles.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'thighs':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { thighs } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = thighs[Math.floor(Math.random()*thighs.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'yuri':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { yuri } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = yuri[Math.floor(Math.random()*yuri.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'zettai':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { zettai } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = zettai[Math.floor(Math.random()*zettai.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

case 'kasedaiki':
if(isGroup)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { kasedaiki } = require("./bunker/database/nsfw/nsfw.js")
var totalnsfw = kasedaiki[Math.floor(Math.random()*kasedaiki.length)]
kasane.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: selo})
break

// fim dos hentai 

// plaquinhas 

case 'plaq': 
if(!isGroup)
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❕ᴇɪ ʜᴜᴍᴀɴᴏ, ᴄᴀᴅê ᴏ ᴛᴇxᴛᴏ?*")
if (q.length > 25) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❗ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴏ ᴍáxɪᴍᴏ é 25 ᴄᴀʀᴀᴄᴛᴇʀᴇs.*")
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${q}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
sendMsg = kasane.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq1':
if(!isGroup)
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❕ᴇɪ ʜᴜᴍᴀɴᴏ, ᴄᴀᴅê ᴏ ᴛᴇxᴛᴏ?*")
if (q.length > 25) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❗ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴏ ᴍáxɪᴍᴏ é 25 ᴄᴀʀᴀᴄᴛᴇʀᴇs.*")
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${q}`)
sendMsg = kasane.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq2':
if(!isGroup)
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❕ᴇɪ ʜᴜᴍᴀɴᴏ, ᴄᴀᴅê ᴏ ᴛᴇxᴛᴏ?*")
if (q.length > 25) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❗ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴏ ᴍáxɪᴍᴏ é 25 ᴄᴀʀᴀᴄᴛᴇʀᴇs.*")
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${q}&text.0.outline.blur=63`)
sendMsg = kasane.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq3':
if(!isGroup)
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❕ᴇɪ ʜᴜᴍᴀɴᴏ, ᴄᴀᴅê ᴏ ᴛᴇxᴛᴏ?*")
if (q.length > 25) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❗ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴏ ᴍáxɪᴍᴏ é 25 ᴄᴀʀᴀᴄᴛᴇʀᴇs.*")
reagir(from, "🕒")
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${q}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
sendMsg = kasane.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq4':
if(!isGroup)
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❕ᴇɪ ʜᴜᴍᴀɴᴏ, ᴄᴀᴅê ᴏ ᴛᴇxᴛᴏ?*")
if (q.length > 25) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❗ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴏ ᴍáxɪᴍᴏ é 25 ᴄᴀʀᴀᴄᴛᴇʀᴇs.*")
reagir(from, "🕒")
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${q}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
sendMsg = kasane.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq5':
if(!isGroup)
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❕ᴇɪ ʜᴜᴍᴀɴᴏ, ᴄᴀᴅê ᴏ ᴛᴇxᴛᴏ?*")
if (q.length > 25) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❗ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴏ ᴍáxɪᴍᴏ é 25 ᴄᴀʀᴀᴄᴛᴇʀᴇs.*")
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(6).jpeg?text.0.text=${q}&text.0.position.x=-17%25&text.0.position.y=-20%25&text.0.size=41&text.0.color=000000&text.0.opacity=59&text.0.font.family=PT%20Mono&text.0.outline.blur=10" width="463" height="662" alt="" />`,`https://lerrewor.sirv.com/Teste/images%20(1)%20(12).jpeg?text.0.text=${q}&text.0.position.x=-20%25&text.0.position.y=-35%25&text.0.size=41&text.0.color=000000&text.0.font.family=Playball&text.0.background.opacity=16&text.0.outline.color=ff0000&text.0.outline.blur=24" width="225" height="225" alt="" />`)
sendMsg = kasane.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq6':
if(!isGroup)
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❕ᴇɪ ʜᴜᴍᴀɴᴏ, ᴄᴀᴅê ᴏ ᴛᴇxᴛᴏ?*")
if (q.length > 25) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❗ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴏ ᴍáxɪᴍᴏ é 25 ᴄᴀʀᴀᴄᴛᴇʀᴇs.*")
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(5).jpeg?text.0.text=${q}&text.0.position.x=-45%25&text.0.position.y=-29%25&text.0.size=36&text.0.color=000000&text.0.opacity=65&text.0.font.family=PT%20Sans%20Narrow" width="479" height="640" alt="" />`)
sendMsg = kasane.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq7':
if(!isGroup)
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❕ᴇɪ ʜᴜᴍᴀɴᴏ, ᴄᴀᴅê ᴏ ᴛᴇxᴛᴏ?*")
if (q.length > 25) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❗ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴏ ᴍáxɪᴍᴏ é 25 ᴄᴀʀᴀᴄᴛᴇʀᴇs.*")
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(10).jpeg?text.0.text=${q}&text.0.position.y=-25%25&text.0.size=41&text.0.color=000000&text.0.font.family=Vollkorn&text.0.background.opacity=100" width="193" height="261" alt="" />`)
sendMsg = kasane.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq8':
if(!isGroup)
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❕ᴇɪ ʜᴜᴍᴀɴᴏ, ᴄᴀᴅê ᴏ ᴛᴇxᴛᴏ?*")
if (q.length > 25) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❗ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴏ ᴍáxɪᴍᴏ é 25 ᴄᴀʀᴀᴄᴛᴇʀᴇs.*")
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(9).jpeg?text.0.text=${q}&text.0.position.x=-49%25&text.0.position.y=-19%25&text.0.size=45&text.0.color=000000&text.0.opacity=97&text.0.font.family=Patrick%20Hand" width="250" height="333" alt="" />`)
sendMsg = kasane.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq9': 
if(!isGroup)
if (args.length < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❕ᴇɪ ʜᴜᴍᴀɴᴏ, ᴄᴀᴅê ᴏ ᴛᴇxᴛᴏ?*")
if (q.length > 25) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❗ᴏ ᴛᴇxᴛᴏ é ʟᴏɴɢᴏ, ᴏ ᴍáxɪᴍᴏ é 25 ᴄᴀʀᴀᴄᴛᴇʀᴇs.*")
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(8).jpeg?text.0.text=${q}&text.0.position.x=-28%25&text.0.position.y=-41%25&text.0.size=41&text.0.color=000000&text.0.opacity=99&text.0.font.family=Signika" width="225" height="225" alt="" />`)
sendMsg = kasane.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

// fim

case 'ttp':
if (!q) return reply(`Coloque o texto que você quiser!\n- *Por exemplo:* ${prefix + command} Eu me amo`)
reply(mess.wait())
string = args.join(' ') || 'Texto indefinido'
post = API_URL+`/api/canvas/ttp?texto=${string}&apikey=`+API_KEY_KASANE
sendStickerFromUrl(from, post, {quoted: selo}).catch(e => {
reply(mess.error())
})
break

case 'attp':
if (!q) return reply(`Coloque o texto que você quiser após o comando, por exemplo: *${prefix + command}* _Eu me amo_`);
reply(mess.wait());
await kasane.sendMessage(from, {sticker: {url: API_URL+`/api/canvas/attp?texto=${q}&apikey=`+API_KEY_KASANE}}, {quoted: selo})
.catch(async(error) => {
return reply(mess.error());
})
break

case 'attp2':
try {
if(!q.trim()) return reply(`Coloque o texto que você quiser após o comando, por exemplo: *${prefix + command}* _Eu me amo_`);
reply(mess.wait());
var Fontes = command === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono"
kasane.sendMessage(from, {sticker: {url: `https://api.bronxyshost.com.br/api-bronxys/attp_edit?texto=${encodeURIComponent(q)}&fonte=${Fontes}&apikey=${API_KEY_BRONXYS}`}}, {quoted: selo}).catch(() => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*");
})
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*");
}
break;

case 'togif': 
if(!isQuotedSticker) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘᴏʀ ғᴀᴠᴏʀ, ᴀᴛʀɪʙᴜᴀ ᴜᴍᴀ ғɪɢᴜʀɪɴʜᴀ ᴀɴɪᴍᴀᴅᴀ à ᴍᴇɴsᴀɢᴇᴍ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴀ ᴄᴏɴᴠᴇʀsãᴏ ᴘᴀʀᴀ ᴠíᴅᴇᴏ/ɢɪғ.*");
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
const { FiguMp4OuGif } = require('./bunker//funcoes/togif.js');
getBufferWebP = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "sticker");
fs.writeFileSync("./bunker/database/data/media/sticker/convert.webp", getBufferWebP);
outputFile = "./bunker/database/data/media/sticker/convert.webp";
convertWebP = await FiguMp4OuGif(outputFile);
await kasane.sendMessage(from, {video: {url: convertWebP}, gifPlayback: true, fileName: 'sticker-sb.gif'}, {quoted: selo}).catch(async(error) => {
await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao enviar o resultado da conversão do WebP para MP4.
await DLT_FL(outputFile); // Apagar o arquivo, caso ocorrer um erro na conversão entre eles.
console.log(error)
});
}
} catch(error) {
await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao realizar a conversão do WebP para MP4.
console.log(error)
};
break


case 'impostos':
case 'cns':
case 'score':
case 'beneficios':
case 'ip':
case 'parentes':
case 'site':
case 'chassi':
case 'vacina':
case 'vizinhos':
case 'rg':
case 'bin':
case 'compras':
case 'cpf':
case 'cpf2':
case 'cpf3':
case 'cep':
case 'nome':
case 'nome2':
case 'cnpj':
case 'placa':
case 'motor':
case 'telefone':
const blaaaaa = `
[🔎] ᴊᴀ́ ᴇsᴛᴏᴜ ᴄᴏɴsᴜʟᴛᴀɴᴅᴏ..ᴄᴀsᴏ ɴᴀ̃ᴏ ғᴏʀ ᴇɴᴠɪᴀᴅᴏ ᴀ ᴄᴏɴsᴜʟᴛᴀ, ɴᴀ̃ᴏ ғᴏɪ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ.`;
reply(blaaaaa);
try {
const response = await Promise.race([
fetchJson(`https://yurimodz-consultas.xyz/api/consultasoff?type=${command}&query=${q}&apitoken=Yurizinn212120`),
new Promise((resolve) => setTimeout(resolve, 35000, { error: 'timeout' })),
]);
const messageOptions = {
document: Buffer.from(`${response.resultado.replaceAll("`", "```").replaceAll("**", "*")}`),
caption: (`${response.resultado.replaceAll("`", "```").replaceAll("**", "*")}`),
mimetype: 'text/plain',
fileLength: 1000000 * 9999999999950,
jpegThumbnail: await getBuffer('https://telegra.ph/file/e86c6d64dbc69a99e6c86.jpg'),
contextInfo: {
externalAdReply: {
title: `CONSULTA: ${command}`,
body: `CONECTED`,
mediaType: 1,
thumbnail: await getBuffer('https://telegra.ph/file/b0c5b02ac1b8561e8ce64.jpg'),
showAdAttribution: true,
renderLargerThumbnail: false,
sourceUrl: 'https://youtube.com/@yurimodz'
}
}
};

if (response && response.resultado) {
kasane.sendMessage(from, messageOptions, { quoted: selo });

} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *⚠️ ɴÃᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ!*");
}
} catch (error) {
console.error('Ocorreu um erro ao consultar a API externa:', error);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *⚠️ ɴÃᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ!*");
}
break;


case 'nick': {
if (!args[0])
return reply('💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴅɪɢɪᴛᴇ ᴏ ɴɪᴄᴋ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴛʀᴀɴsꜰᴏʀᴍᴀʀ!*\nEx: /nick Yuka modz');

try {
await reagir(from, "🎨");
let nick = args.join(" ");
const fonts = [
{ nome: "Negrito", map: { a:'𝐚',b:'𝐛',c:'𝐜',d:'𝐝',e:'𝐞',f:'𝐟',g:'𝐠',h:'𝐡',i:'𝐢',j:'𝐣',k:'𝐤',l:'𝐥',m:'𝐦',n:'𝐧',o:'𝐨',p:'𝐩',q:'𝐪',r:'𝐫',s:'𝐬',t:'𝐭',u:'𝐮',v:'𝐯',w:'𝐰',x:'𝐱',y:'𝐲',z:'𝐳' } },
{ nome: "Itálico", map: { a:'𝘢',b:'𝘣',c:'𝘤',d:'𝘥',e:'𝘦',f:'𝘧',g:'𝘨',h:'𝘩',i:'𝘪',j:'𝘫',k:'𝘬',l:'𝘭',m:'𝘮',n:'𝘯',o:'𝘰',p:'𝘱',q:'𝘲',r:'𝘳',s:'𝘴',t:'𝘵',u:'𝘶',v:'𝘷',w:'𝘸',x:'𝘹',y:'𝘺',z:'𝘻' } },
{ nome: "Cursivo", map: { a:'𝒶',b:'𝒷',c:'𝒸',d:'𝒹',e:'ℯ',f:'𝒻',g:'𝑔',h:'𝒽',i:'𝒾',j:'𝒿',k:'𝓀',l:'𝓁',m:'𝓂',n:'𝓃',o:'ℴ',p:'𝓅',q:'𝓆',r:'𝓇',s:'𝓈',t:'𝓉',u:'𝓊',v:'𝓋',w:'𝓌',x:'𝓍',y:'𝓎',z:'𝓏' } },
{ nome: "Negrito Itálico", map: { a:'𝙖',b:'𝙗',c:'𝙘',d:'𝙙',e:'𝙚',f:'𝙛',g:'𝙜',h:'𝙝',i:'𝙞',j:'𝙟',k:'𝙠',l:'𝙡',m:'𝙢',n:'𝙣',o:'𝙤',p:'𝙥',q:'𝙦',r:'𝙧',s:'𝙨',t:'𝙩',u:'𝙪',v:'𝙫',w:'𝙬',x:'𝙭',y:'𝙮',z:'𝙯' } },

{ nome: "Monospace", map: { a:'𝚊',b:'𝚋',c:'𝚌',d:'𝚍',e:'𝚎',f:'𝚏',g:'𝚐',h:'𝚑',i:'𝚒',j:'𝚓',k:'𝚔',l:'𝚕',m:'𝚖',n:'𝚗',o:'𝚘',p:'𝚙',q:'𝚚',r:'𝚛',s:'𝚜',t:'𝚝',u:'𝚞',v:'𝚟',w:'𝚠',x:'𝚡',y:'𝚢',z:'𝚣' } },
{ nome: "Fraktur", map: { a:'𝔞',b:'𝔟',c:'𝔠',d:'𝔡',e:'𝔢',f:'𝔣',g:'𝔤',h:'𝔥',i:'𝔦',j:'𝔧',k:'𝔨',l:'𝔩',m:'𝔪',n:'𝔫',o:'𝔬',p:'𝔭',q:'𝔮',r:'𝔯',s:'𝔰',t:'𝔱',u:'𝔲',v:'𝔳',w:'𝔴',x:'𝔵',y:'𝔶',z:'𝔷' } },
{ nome: "Fraktur Negrito", map: { a:'𝖆',b:'𝖇',c:'𝖈',d:'𝖉',e:'𝖊',f:'𝖋',g:'𝖌',h:'𝖍',i:'𝖎',j:'𝖏',k:'𝖐',l:'𝖑',m:'𝖒',n:'𝖓',o:'𝖔',p:'𝖕',q:'𝖖',r:'𝖗',s:'𝖘',t:'𝖙',u:'𝖚',v:'𝖛',w:'𝖜',x:'𝖝',y:'𝖞',z:'𝖟' } },
{ nome: "Bolinha", map: { a:'ⓐ',b:'ⓑ',c:'ⓒ',d:'ⓓ',e:'ⓔ',f:'ⓕ',g:'ⓖ',h:'ⓗ',i:'ⓘ',j:'ⓙ',k:'ⓚ',l:'ⓛ',m:'ⓜ',n:'ⓝ',o:'ⓞ',p:'ⓟ',q:'ⓠ',r:'ⓡ',s:'ⓢ',t:'ⓣ',u:'ⓤ',v:'ⓥ',w:'ⓦ',x:'ⓧ',y:'ⓨ',z:'ⓩ' } },
{ nome: "Bolinha Preta", map: { a:'🅐',b:'🅑',c:'🅒',d:'🅓',e:'🅔',f:'🅕',g:'🅖',h:'🅗',i:'🅘',j:'🅙',k:'🅚',l:'🅛',m:'🅜',n:'🅝',o:'🅞',p:'🅟',q:'🅠',r:'🅡',s:'🅢',t:'🅣',u:'🅤',v:'🅥',w:'🅦',x:'🅧',y:'🅨',z:'🅩' } },
{ nome: "Vaporwave", map: { a:'ａ',b:'ｂ',c:'ｃ',d:'ｄ',e:'ｅ',f:'ｆ',g:'ｇ',h:'ｈ',i:'ｉ',j:'ｊ',k:'ｋ',l:'ｌ',m:'ｍ',n:'ｎ',o:'ｏ',p:'ｐ',q:'ｑ',r:'ｒ',s:'ｓ',t:'ｔ',u:'ｕ',v:'ｖ',w:'ｗ',x:'ｘ',y:'ｙ',z:'ｚ' } },
{ nome: "Tiny", map: { a:'ᵃ',b:'ᵇ',c:'ᶜ',d:'ᵈ',e:'ᵉ',f:'ᶠ',g:'ᵍ',h:'ʰ',i:'ᶦ',j:'ʲ',k:'ᵏ',l:'ˡ',m:'ᵐ',n:'ⁿ',o:'ᵒ',p:'ᵖ',q:'ᑫ',r:'ʳ',s:'ˢ',t:'ᵗ',u:'ᵘ',v:'ᵛ',w:'ʷ',x:'ˣ',y:'ʸ',z:'ᶻ' } },
{ nome: "Riscado", map: { a:"a̵",b:"b̵",c:"c̵",d:"d̵",e:"e̵",f:"f̵",g:"g̵",h:"h̵",i:"i̵",j:"j̵",k:"k̵",l:"l̵",m:"m̵",n:"n̵",o:"o̵",p:"p̵",q:"q̵",r:"r̵",s:"s̵",t:"t̵",u:"u̵",v:"v̵",w:"w̵",x:"x̵",y:"y̵",z:"z̵" } },
];
let fontes = fonts.map((f, i) => ({
  nome: f.nome,
  texto: nick.split("").map(c => f.map[c.toLowerCase()] || c).join(""),
  id: `copynick_${i}` // ✅ limpo
}));
const { prepareWAMessageMedia } = require("@whiskeysockets/baileys");

const mediaNick = await prepareWAMessageMedia(
{ image: { url: "./bunker/nick/nick.jpg" } },
{ upload: kasane.waUploadToServer }
);
const botoes = [
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "ꜱᴇʟᴇᴄɪᴏɴᴇ ᴜᴍ ᴇsᴛɪʟᴏ",
sections: [
{
title: "Fonte do Nick",
highlight_label: "Transformador Yukira",
rows: fontes.map(f => ({
header: f.nome,
title: f.texto,
id: f.id
}))
}
]
})
}
];
const carouselMessage = {
cards: [
{
header: {
hasMediaAttachment: true,
imageMessage: {
...mediaNick.imageMessage,
jpegThumbnail: mediaNick.imageMessage.jpegThumbnail
}
},
headerType: 1, 

body: { text: `💧] 𝐘𝐔𝐊𝐈𝐑𝐀\n✨ *Nɪᴄᴋ ᴅᴇᴛᴇᴄᴛᴀᴅᴏ:* ${nick}` },

footer: { text: "Selecione um estilo abaixo ↓" },

nativeFlowMessage: { buttons: botoes }
}
]
};

await kasane.relayMessage(
from,
{
interactiveMessage: {
contextInfo: {
participant: from,
quotedMessage: {
documentMessage: { contactVcard: true, quoted: selo }
}
},

body: { text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 • ᴛʀᴀɴꜱꜰᴏʀᴍᴀᴅᴏʀ ᴅᴇ ɴɪᴄᴋ 🎨" },
carouselMessage
}
},
{}
);

} catch (e) {
console.log(e);
await kasane.sendMessage(from, { text: mess.error() }, { quoted: selo });
}
}
break;



case 'bugchat': {//Não muda nada, só o cliente mesmo pdp? créditos by Nk Swėatër 
   if(!SoDono) return reply(mess.onlyOwner());
     try {//vulgo Nk Petrøv
        if (!q) return reply(`Use: ${prefix + command} número`);

        const target = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        const message = {
            botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: '33333333333333333@newsletter',
                                newsletterName: "Yuka modz" + "ྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃ".repeat(1999),
                                jpegThumbnail: "",
                                caption: "ྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃ".repeat(1999),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
        await kasane.relayMessage(target, message, { userJid: target });

        reply("Enviado com sucesso ✓");

    } catch (err) {
        console.log(err);
        reply("Erro ao enviar.");
    }
}
break;

case 'gerarnick2':
try {
if(!q.trim()) return reply(`Escreva um texto para eu enviar ele com letras modificadas.\n• *Exemplo:* ${prefix+command} kasane`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/gerar_nick?nick=${encodeURI(q)}&apikey=${API_KEY_BRONXYS}`)
AB = `Lista com base no Nick informado, para encontrar melhor fonte para utilizar:\n\n`;
for ( i of ABC) {
AB += `${i}\n\n`;
}
reply(AB);
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*");
}
break;

case 'chance':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(args.length < 1) return reply(`Você precisa digitar da forma correta... Por exemplo: *${prefix}chance* _do jubileu ser gay_`)
await kasane.sendMessage(from, {text: `😵‍💫🤍 - A chance _“${q}”_ é de: *${Math.floor(Math.random() * 100)}%*. Eai, foi o que a probabilidade que esperava jovem?`, mentions: [sender]}, {quoted: selo});
break

case 'namorar': case 'pediremnamoro': 
if(!isGroup) return reply(mess.onlyGroup());
if(!menc_os2) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @ ǫᴜᴇ ǫᴜᴇɪʀᴀ ᴘᴇᴅɪʀ ᴇʟᴀ ᴇᴍ ɴᴀᴍᴏʀᴏ. sᴇ ᴠᴏᴄê ᴛᴏᴍᴀʀ ᴜᴍ ғᴏʀᴀ, ᴊᴜíᴢᴏ!*");
if(botNumber.includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴏssíᴠᴇʟ ᴘᴇᴅɪʀ ᴏ ʙᴏᴛ ᴇᴍ ɴᴀᴍᴏʀᴏ, sᴇᴜ ʙᴀɪᴛᴏʟᴀ. 🙄*");
if(JSON.stringify(namoro2).includes(menc_os2)) return reply(`Este usuário já foi pedido em namoro...`);
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == false) return reply(`Essa pessoa já pediu alguém em namoro... Sinto muito! 😕`);
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == true) return reply(`Não será possível pedir essa pessoa em namoro, pois a mesma já está com outro(a). 🌚`);
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == false) return await mention(`Você já pediu para namorar com o (a) *@${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}*. Não brinque com os sentimentos dos outros! Se decida logo ou digite: *${prefix}cancelarpedido*.`);
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == true) return await mention(`Você já está namorando com o (a) *@${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}*...`);
await reagir(from, "💍")
namoro1.push({usu1: sender, usu2: menc_os2.split('@')[0], namorados: false, idgp: from, hora: hourofc, data: dattofc});
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2));
namoro2.push({id: menc_os2, pedido: sender.split('@')[0], idgp: from});
fs.writeFileSync("./bunker/database/func/namoro2.json", JSON.stringify(namoro2));
await mention(`🥳| Felicitações *@${menc_os2.split('@')[0]}*!\nな ⃝̸̷͓᪺⃔͜O *@${sender.split('@')[0]}* acaba de pedir sua mão em namoro!\nな ⃝̸̷͓᪺⃔͜Eai você aceita o pedido, *sim ou não?*`);
break

case 'cancelarpedido': {
if (!isGroup) return reply(mess.onlyGroup());

// Procura o índice do pedido feito pelo sender
const index = namoro1.findIndex(i => i.usu1 === sender);

if (index === -1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ʜá ᴘᴇᴅɪᴅᴏ ᴅᴇ ɴᴀᴍᴏʀᴏ ᴘᴀʀᴀ ᴄᴀɴᴄᴇʟᴀʀ.*");

// Verifica se o pedido já foi aceito
if (namoro1[index].namorados === true) 
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ é ᴘᴏssíᴠᴇʟ ᴄᴀɴᴄᴇʟᴀʀ ᴏ ᴘᴇᴅɪᴅᴏ ᴅᴇ ɴᴀᴍᴏʀᴏ ᴅᴇᴘᴏɪs ᴅᴇ ᴀᴄᴇɪᴛᴏ.*");

// Pega usu2 antes de remover
const usu2 = namoro1[index].usu2;

// Remove do namoro1
namoro1.splice(index, 1);
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2));

// Remove do namoro2, se existir
const index2 = namoro2.findIndex(i => i.id === usu2 + "@s.whatsapp.net");
if (index2 !== -1) {
namoro2.splice(index2, 1);
fs.writeFileSync("./bunker/database/func/namoro2.json", JSON.stringify(namoro2, null, 2));
}

reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ | ᴘᴇᴅɪᴅᴏ ᴅᴇ ɴᴀᴍᴏʀᴏ ᴄᴀɴᴄᴇʟᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.*");
}
break;

case 'terminar': {
// Verifica se o usuário está namorando
if (!JSON.stringify(namoro1).includes(sender)) 
return reply(`Você não está namorando com ninguém. Sinto muito!`);

// Encontra o índice do usuário que terminou
let D1 = namoro1.findIndex(i => i.usu1 === sender);
if (D1 === -1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ ᴀᴏ ᴇɴᴄᴏɴᴛʀᴀʀ sᴇᴜ ɴᴀᴍᴏʀᴏ.*");

// Obtém o parceiro do usuário
let parceiro = namoro1[D1].usu2;

// Encontra o índice do parceiro
let D2 = namoro1.findIndex(i => i.usu1 === parceiro);

// Se o parceiro existe, atualiza o status e notifica
if (D2 !== -1) {
namoro1[D2].namorados = false;
await kasane.sendMessage(`${parceiro}@s.whatsapp.net`, { 
text: `Tenho uma notícia ruim sobre seu namoro, ele(a) acaba de terminar.\n–\n• Seja feliz e lembre dos todos os bons momentos que vocês tiveram juntos.` 
}, { quoted: selo });
}

// Remove o registro do usuário que terminou
namoro1.splice(D1, 1);

// Se o parceiro existir, remove também
if (D2 !== -1) {
// Ajusta D2 se for maior que D1, porque splice já removeu um item
if (D2 > D1) D2--;
namoro1.splice(D2, 1);
}

// Salva o arquivo
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2));

// Confirma para o usuário
reply(`Agora você está totalmente solteiro, notifiquei a(o) sua/seu parceiro sobre o término.`);
break;
}

case 'minhadupla': case 'dupla':
if(!isGroup) return reply(mess.onlyGroup());
if(!JSON.stringify(namoro1).includes(sender)) return reply(`Você não está namorando com ninguém. Sinto muito!`);
await reagir(from, "❤️‍🩹");
D1 = namoro1.map(i => i.usu1).indexOf(sender)
if(namoro1[D1].namorados == false) return reply(`A pessoa que você pediu em namoro não aceitou o pedido ainda. Portanto, não é possível consultar os dados da dupla.️`);
await mention(`@${namoro1[D1].usu1.split('@')[0]} namora com @${namoro1[D1].usu2}\n–\n• O pedido de namoro ocorreu às ${namoro1[D1].hora} do dia ${namoro1[D1].data}.\n–\n• Para realizar o término do namoro é fácil, use o comando: *${prefix}terminar_namoro*`);
break

case 'nazista':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text: `Pesquisando a sua ficha de nazista: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgnazista}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa nazista?\n• Porcentagem de chance de ser uma pessoa nazista: *${random}%.* `, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'gay':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text: `Pesquisando a sua ficha de gay: @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random; boiola = random
if(boiola < 20 ) {var bo = 'hmm... você é hetero...'} else if(boiola == 21 ) {var bo = '+/- boiola'} else if(boiola == 23 ) {var bo = '+/- boiola'} else if(boiola == 24 ) {var bo = '+/- boiola'} else if(boiola == 25 ) {var bo = '+/- boiola'} else if(boiola == 26 ) {var bo = '+/- boiola'} else if(boiola == 27 ) {var bo = '+/- boiola'} else if(boiola == 2 ) {var bo = '+/- boiola'} else if(boiola == 29 ) {var bo = '+/- boiola'} else if(boiola == 30 ) {var bo = '+/- boiola'} else if(boiola == 31 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 32 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 33 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 34 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 35 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 36 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 37 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 3 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 39 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 40 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 41 ) {var bo = 'você é né?'} else if(boiola == 42 ) {var bo = 'você é né?'} else if(boiola == 43 ) {var bo = 'você é né?'} else if(boiola == 44 ) {var bo = 'você é né?'} else if(boiola == 45 ) {var bo = 'você é né?'} else if(boiola == 46 ) {var bo = 'você é né?'} else if(boiola == 47 ) {var bo = 'você é né?'} else if(boiola == 4 ) {var bo = 'você é né?'} else if(boiola == 49 ) {var bo = 'você é né?'} else if(boiola == 50 ) {var bo = 'você é ou não?'} else if(boiola > 51) {var bo = 'você é gay...'
}
await kasane.sendMessage(from, {image: {url: imggay}, caption: `Qual é a porcentagem de chance do(a) *@${sender_ou_n.split("@")[0]}* ser gay?\n• *${random}% homossexual*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: selo})
}, 7000)
break

case 'feio':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text: `Pesquisando a sua ficha de feio: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
if(feio < 20 ) {var bo = 'É não é feio'} else if(feio == 21 ) {var bo = '+/- feio'} else if(feio == 23 ) {var bo = '+/- feio'} else if(feio == 24 ) {var bo = '+/- feio'} else if(feio == 25 ) {var bo = '+/- feio'} else if(feio == 26 ) {var bo = '+/- feio'} else if(feio == 27 ) {var bo = '+/- feio'} else if(feio == 2 ) {var bo = '+/- feio'} else if(feio == 29 ) {var bo = '+/- feio'} else if(feio == 30 ) {var bo = '+/- feio'} else if(feio == 31 ) {var bo = 'ainda tá na média'} else if(feio == 32 ) {var bo = 'dá pra pegar umas(ns) novinha(o) ainda'} else if(feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 34 ) {var bo = 'é fein, mas tem baum coração'} else if(feio == 35 ) {var bo = 'tá na média, mas não deixa de ser feii'} else if(feio == 36 ) {var bo = 'bonitin mas é feio com orgulho'} else if(feio == 37 ) {var bo = 'feio e preguiçoso(a), vai se arrumar praga feia'} else if(feio == 3 ) {var bo = 'tenho '} else if(feio == 39 ) {var bo = 'feio, mas um banho e se arrumar, deve resolver'} else if(feio == 40 ) {var bo = 'fein,mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if(feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if(feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva.'} else if(feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if(feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if(feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if(feio == 46 ) {var bo = 'feio mas tem muitos amigos'} else if(feio == 47 ) {var bo = 'é feio mas tem lábia pra pegar várias novinha'} else if(feio == 4 ) {var bo = 'feio e ainda não sabe se vestir, vixi'} else if(feio == 49 ) {var bo = 'feiooo dms vey.'} else if(feio == 50 ) {var bo = 'você é feio, mas não se encherga.'} else if(feio > 51) {var bo = 'você é feio demais bixo.'}
await kasane.sendMessage(from, {image: {url: imgfeio}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa feia?\n• A porcentagem de chance é *${random}%*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: selo})
}, 7000)
break 

case 'corno':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a ficha de corno @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgcorno}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa chifruda?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'vesgo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a ficha de vesgo @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgvesgo}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa vesga?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'bebado':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a ficha de bebado(a) @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgbebado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'gado':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a ficha de gado @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imggado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um gado?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'shippo': {
if (!menc_os2) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *💖 *ᴍᴀʀǫᴜᴇ ᴀʟɢᴜéᴍ ᴘᴀʀᴀ ᴅᴇsᴄᴏʙʀɪʀ sᴇ ғᴏʀᴍᴀᴍ ᴜᴍ ᴄᴀsᴀʟ ᴘᴇʀғᴇɪᴛᴏ!**")
const user1 = sender.split('@')[0]
const user2 = menc_os2.split('@')[0]
const porcentagem = Math.floor(Math.random() * 101)
const frases = [
'💔 Não rola, melhor só amizade...',
'🤝 Combinação ok, mas ainda falta química!',
'🔥 Alta tensão no ar! Pode dar namoro!',
'💍 Perfeitos! Já pode casar hoje!',
'💘 Um amor escrito nas estrelas!',
'🌹 O cupido acertou em cheio!'
]
let frase
if (porcentagem < 30) frase = frases[0]
else if (porcentagem < 50) frase = frases[1]
else if (porcentagem < 70) frase = frases[2]
else if (porcentagem < 85) frase = frases[3]
else if (porcentagem < 100) frase = frases[4]
else frase = frases[5]
const mensagem = `
╭━💞 *SHIPÔMETRO DO AMOR* 💞━╮
┃ 👤 @${user1}
┃ 💘 @${user2}
┃ 
┃ 💌 Compatibilidade: *${porcentagem}%*
┃ 💭 ${frase}
╰━━━━━━━━━━━━━━━━━━━━━━━╯`.trim()
mentions(mensagem, [sender, menc_os2], true)
break
}
case 'chance':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(args.length < 1) return reply(`Você precisa digitar da forma correta... Por exemplo: *${prefix}chance* _do jubileu ser gay_`)
await kasane.sendMessage(from, {text: `😵‍💫🌟 - A chance _“${q}”_ é de: *${Math.floor(Math.random() * 100)}%*. Eai, foi o que a probabilidade que esperava jovem?`, mentions: [sender]}, {quoted: selo});
break
case 'capinarlote':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ʙᴏᴛᴀʀ ᴘʀᴀ ᴄᴀᴘɪɴᴀʀ ᴜᴍ ʟᴏᴛᴇ, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @.*")
await kasane.sendMessage(from, {video: {url:`https://telegra.ph/file/4682c1b474ce5dee3a48d.mp4`}, gifPlayback: true, caption: `Você acabou de botar o(a) *@${menc_os2.split('@')[0]}* pra capinar um lote`, mentions: [menc_os2]}, {quoted: selo})
break
case 'pgpeito':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ᴘᴇɢᴀʀ ɴᴏs ᴘᴇɪᴛɪɴʜᴏs, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @.*")
await kasane.sendMessage(from, {video: {url:`https://telegra.ph/file/52d46e2c58318b8cfcacc.mp4`}, gifPlayback: true, caption: `Você acabou de pegar nos peitos do(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break
case 'pgpau':
if(!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴘᴇɴᴀs ᴇᴍ ɢʀᴜᴘᴏs*")
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`) 
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ᴘᴇɢᴀʀ ɴᴏ ᴘᴀᴜ ᴅᴇʟᴇ(ᴀ), ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @.*")
await kasane.sendMessage(from, {video: {url:`https://telegra.ph/file/5073ba8be6b099ed812a7.mp4`}, gifPlayback: true, caption: `Você acabou de pegar no pau do(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break
case 'pgbunda':
if(!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴘᴇɴᴀs ᴇᴍ ɢʀᴜᴘᴏs*");
if(!isModobn && !SoDono) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`) 
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀs sᴇʀ ᴀᴄᴀʀɪᴄɪᴀᴅᴏ, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @.*")
if (JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply(`Opa gostosa no meu dono não sua puta, Mas posso fuder você 😈`)
await kasane.sendMessage(from, {video: {url:`https://telegra.ph/file/e62de1e6863c59d284b2e.mp4`}, gifPlayback: true, caption: `Você acabou de pegar na bunda do(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break
case 'pgpeito':
if(!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴘᴇɴᴀs ᴇᴍ ɢʀᴜᴘᴏs*")
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`) 
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ᴘᴇɢᴀʀ ɴᴏs ᴘᴇɪᴛɪɴʜᴏs, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @.*")
vid = ["https://files.catbox.moe/mkvpw3.mp4", "https://files.catbox.moe/6f28ya.mp4"];
vide = vid[Math.floor(Math.random() * vid.length)];
await kasane.sendMessage(from, {video: {url: vide}, gifPlayback: true, caption: `Você acabou de pegar nos peitos do(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break
case 'comer':
if(!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴀᴘᴇɴᴀs ᴇᴍ ɢʀᴜᴘᴏs*")
if(!isModobn && !SoDono) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`) 
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ʙᴏᴛᴀʀ ʀᴇʙᴏʟᴀʀ ᴘʀᴏs ᴄʀɪᴀ, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @.*")
if (JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply(`Opa gostosa no meu dono não sua puta, Mas posso fuder você 😈`)
reagir(from, "🥵");
sexo = ["https://files.catbox.moe/pzr9zz.mp4", "https://telegra.ph/file/d46ff5e2b8f4c5335e362.mp4", "https://files.catbox.moe/qjs5oy.mp4"];
fuder = sexo[Math.floor(Math.random() * sexo.length)];
await kasane.sendMessage(from, {video: {url: fuder}, gifPlayback: true, caption: `Você acabou de comer a(o) *@${menc_os2.split('@')[0]}🥵*`, mentions: [menc_os2]}, {quoted: selo})
break
case 'fuder': {
if (!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ só ᴇᴍ ɢʀᴜᴘᴏs.*");
if (!isModobn && !SoDono) return reply(`⚠️ Este comando só pode ser utilizado com o *modobrincadeira* ativo.\nAtive com: ${prefix}modobrincadeira 1`); 
if (!menc_os2 || menc_jid2.length < 1) 
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❕ *_ᴍᴀʀǫᴜᴇ ᴏ @ ᴅᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ғᴀᴢᴇʀ ᴀᴍᴏʀ_*.*");
let random = `${Math.floor(Math.random() * 100)}`;
if (JSON.stringify(numerodono).indexOf(menc_os2) >= 0) 
return reply(`😳 Opa gostosa, no meu dono não sua putinha... Mas posso fuder você 😈`);
reagir(from, "💦");
let videoU = [
"https://telegra.ph/file/121ed971b8a3472e8b673.mp4", 
"https://files.catbox.moe/4okx8f.mp4"
];
let fuder = videoU[Math.floor(Math.random() * videoU.length)];
let legenda = `*[👤] Olá, ${pushname}. Você acabou de fuder o(a) @${menc_os2.split('@')[0]} 🥵*\n\n` +
`*[💦] Chance de você ter gozado no cuzinho do(a) @${menc_os2.split('@')[0]} foi de:* _${random}%_`;
await kasane.sendMessage(from, {
video: { url: fuder },
gifPlayback: true,
caption: legenda,
mentions: [menc_os2]
});
}
break;
case 'boquete':
if (!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ só ᴇᴍ ɢʀᴜᴘᴏ*");
if (!isModobn) return reply(`> _O modo de Brincadeiras precisa estar ativado! Peça para que um Admin ative, ou se você for um Admin ative usando:_\n\nExemplo: ${prefix}modobrincadeira 1`);
if (JSON.stringify(numerodono).indexOf(menc_os2) >= 0) 
return reply(`🚫 No meu dono não! Mas posso fuder você 😈`);
reagir(from, "🍼"); // reação primeiro
if(!menc_os2 || menc_jid2.length < 1) 
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❗ ᴄᴀᴅê ᴏ @ ᴅᴏ ᴀʟᴠᴏ?*");
await kasane.sendMessage(from, {
video: { url: "https://files.catbox.moe/w332co.mp4" },
gifPlayback: true,
caption: `*_O @${pushname} 🍼 MAMOU GOSTOSINHO NO:_*\nA PIKA DE @${menc_os2.split("@")[0]} 🍼`,
mentions: [menc_os2]
}, { quoted: info }); // aqui substituí selojp por info
break;
case 'mamar':
if (!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ só ᴇᴍ ɢʀᴜᴘᴏ*");
if (!isModobn && !SoDono) return reply(`⚠️ Ative o modo de brincadeira antes, ex: ${prefix}modobrincadeira 1`);
reagir(from, "🍼"); // by tzn
if (!menc_os2 || menc_jid2.length < 1) 
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ǫᴜᴀʟ ғᴏɪ ᴅᴏ ʙᴀɢᴜʟʜᴏ? ᴄᴀᴅᴇ ᴏ @ ᴘʀᴀ ᴇᴜ ʙᴏᴛᴀʀ ᴘʀᴀ ᴍᴀᴍᴀʀ 😈*");
await kasane.sendMessage(from, {
video: { url: "https://files.catbox.moe/yc3ds5.mp4" },
gifPlayback: true,
caption: `*_O(a) ${pushname} 🍼 MAMOU NOS PEITOS DE:_* @${menc_os2.split('@')[0]} 🍼`,
mentions: [menc_os2]
}, { quoted: info }); // <-- substitui o selojp por info
break;
case 'gozar': case 'goza'://by tzn pau de me
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
reagir(from, "😈")
const gozars = ['Você acabou de gozar na boca do(a)','Você acabou de gozar no cuzinho do(a)','Você acabou de gozar na bucetinha do(a)', 'Você acabou de gozar no pé do(a)', 'Você acabou de gozar na cabeça do(a)', 'Você acabou de gozar na cara do(a)', 'Você acabou de gozar na barriga do(a)', 'Você acabou de gozar no olho do(a)', 'Você acabou de gozar na útero do(a)', 'Você acabou de gozar no cabelo do(a)', 'Você acabou de gozar na boca do(a)', 'Você acabou de gozar no umbigo do(a)', 'Você acabou de gozar nas costas do(a)', 'Você acabou de gozar nos braços do(a)', 'Você acabou de gozar na mão do(a)',] 
const gozacao = gozars[Math.floor(Math.random() * gozars.length)];
if(!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *𝚂𝙾𝙼𝙴𝙽𝚃𝙴 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾 🙇🏻‍♂️*")//tzn modalidades esportivas
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *𝙼𝙰𝚁𝚀𝚄𝙴 𝙰 𝙿𝙴𝚂𝚂𝙾𝙰 𝚀𝚄𝙴 𝚅𝙾𝙲𝙴 𝚀𝚄𝙴𝚁 𝙶𝙾𝚉𝙰𝚁 🙈*")
kasane.sendMessage(from, {video: {url: `https://telegra.ph/file/8a82de1e9da332773f52c.mp4`}, gifPlayback: true, caption: `${gozacao} @${menc_os2.split('@')[0]} 🥵
`, mentions: [menc_os2]}, {quoted: selo})
break
case 'morder':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ᴅᴀʀ ᴜᴍᴀ ᴍᴏʀᴅɪᴅᴀ, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @.*")
await kasane.sendMessage(from, {video: {url:`https://telegra.ph/file/75e4c0273be625a2363ce.mp4`}, gifPlayback: true, caption: `Você acabou de dar uma mordida no(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break
case 'sentar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ᴅᴀʀ ᴜᴍᴀ sᴇɴᴛᴀᴅɪɴʜᴀ, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @.*")
await kasane.sendMessage(from, {video: {url:`https://telegra.ph/file/d695e05443043ff9a254d.mp4`}, gifPlayback: true, caption: `Você acabou de dar uma sentadinha no(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break
case 'tirarft':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ᴛɪʀᴀʀ ᴀ ғᴏᴛᴏ, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @.*")
await kasane.sendMessage(from, {video: {url:`https://telegra.ph/file/7193308e3949803132bad.mp4`}, gifPlayback: true, caption: `Você acabou de tirar uma foto do(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break
case 'estuprar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴘᴇssᴏᴀ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ᴄᴏᴍᴇʀ ᴀ ғᴏʀçᴀ, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @*");
await kasane.sendMessage(from, {video: {url: `https://files.catbox.moe/kusu1d.mp4`}, gifPlayback: true, caption: `Ta prr 🔥 *@${menc_os2.split('@')[0]}* Você foi estuprado 😰` , mentions: [menc_os2]}, {quoted: selo})
break
case 'cagar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴘᴇssᴏᴀ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ʙᴏᴛᴀʀ ᴘʀᴀ ᴄᴀɢᴀʀ, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @*");
await kasane.sendMessage(from, {video: {url: `https://files.catbox.moe/662vzj.mp4`}, gifPlayback: true, caption: `CARALHOOOOO *@${menc_os2.split('@')[0]}* FAMOSO CAGA TRONCO KAKAKAKAK??? 🤯😳` , mentions: [menc_os2]}, {quoted: selo})
break
case 'cu':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando quantos cm de profundidade tem seu bozo @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: `https://files.catbox.moe/x8k6en.jpg`}, caption: `Quantos cm o(a) *@${sender_ou_n.split("@")[0]}* 
tem no bozo ?\n• A chance é de *${random}cm* 😳`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de gostoso @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imggostoso}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'gostosa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de gostosa @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imggostosa}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'sigma':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de sigma @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgsigma}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa sigma?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'beta':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de beta @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgbeta}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um beta?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'baiano':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de baiano @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgbaiano}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'baiana':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de baiana @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgbaiana}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'carioca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de carioca @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgcarioca}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa carioca?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'louco':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de louco @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imglouco}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'sexo': case 'sex':
if (!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *só ᴇᴍ ɢʀᴜᴘᴏ*")
if (!isModobn && !SoDono) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`) 
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❕*_ᴍᴀʀǫᴜᴇ ᴏ @ ᴅᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ғᴀᴢᴇʀ ᴀᴍᴏʀ_*.*")
random = `${Math.floor(Math.random() * 100)}`
reagir(from, "😈")
sexo = ["https://files.catbox.moe/bgd191.mp4", "https://files.catbox.moe/glgelq.mp4", "https://files.catbox.moe/l6elxe.mp4"];
fuder = sexo[Math.floor(Math.random() * sexo.length)];
await kasane.sendMessage(from, {video: {url: fuder}, gifPlayback: true, caption: `*[👤] Olá, ${pushname}. Você acabou de fuder o(a) @${menc_os2.split('@')[0]} ??*\n
*[??] Chance de você ter gozado engravidado@${menc_os2.split('@')[0]} foi de:* _${random}%_`, mentions: [menc_os2]}, {quoted: selo})
break//feito por Ozzy

case 'louca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de louca @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imglouca}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'safada':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de safada @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgsafada}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'safado':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de safado @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgsafado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'macaco':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de macaco @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgmacaco}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um macaco?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'macaca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de macaca @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgmacaca}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma macaca?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'puta':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await kasane.sendMessage(from, {text:`Pesquisando a sua ficha de puta @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await kasane.sendMessage(from, {image: {url: imgputa}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma puta?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'morte': case 'death':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if (args.length == 0) return reply(`Está faltando o nome da pessoa! Por exemplo: ${prefix+command} Victor`)
predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`);
if (predea.data.age == null) return reply(`Você inseriu um nome invalido, certifique-se de inserir um sem acentos, emojis, números e outros.`);
await kasane.sendMessage(from, {video: {url: deathcmd}, gifPlayback: true, caption: `Pessoas com este nome citado “${predea.data.name}” tendem a morrer aos ${predea.data.age} anos.`, mentions: [sender]}, {quoted: selo});
break				
				
case 'matar': case 'mata':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ᴍᴀᴛᴀʀ, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @*")
kasane.sendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: `Você acabou de matar o(a) *@${menc_os2.split('@')[0]}*, seu... 😵‍💫💅🏻`, mentions: [menc_os2]}, {quoted: selo})
break 

case 'beijo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴘᴇssᴏᴀ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ʙᴇɪᴊᴀʀ, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @*");
await kasane.sendMessage(from, {video: {url: beijocmd}, gifPlayback: true, caption: `Você acabou de mandar um beijo gostoso para o(a) *@${menc_os2.split('@')[0]}*!` , mentions: [menc_os2]}, {quoted: selo})
break

case 'cu': {
if(!isGroup) return reply(mess.onlyGroup())
let mention_id;
if (budy.includes("@")) {
mention_id = menc_os2;
} else {
mention_id = sender;
}
const depthPercentage = `${Math.floor(Math.random() * 29)}`;
await kasane.sendPresenceUpdate('composing', from);
await new Promise(resolve => setTimeout(resolve, 2000));

await kasane.sendMessage(from, {
text: `🔍 *Analisando o tamanho do seu cu ${mention_id.split("@")[0]}...*`,
mentions: [mention_id]
}, { quoted: info });
await kasane.sendPresenceUpdate('recording', from);
await new Promise(resolve => setTimeout(resolve, 3000));
await kasane.sendMessage(from, {
text: `🚨 *seu cu tem?* 🚨\n\n@${mention_id.split("@")[0]} O tamanho do seu cu é:\n\n❰ *${depthPercentage} CM* ❱ de profundidade\n\n⚠️ _Este resultado é apenas para diversão. Não leve a sério!_ ⚠️`,
mentions: [mention_id]
}, { quoted: info });
break;
}

case 'tapa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ᴅᴀ ᴜᴍ ᴛᴀᴘᴀ, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @.*")
await kasane.sendMessage(from, {video: {url: tapacmd}, gifPlayback: true, caption: `Você acabou de da um tapa na raba da *@${menc_os2.split('@')[0]}*. 😼`, mentions: [menc_os2]}, {quoted: selo})
break

case 'chute':
case 'chutar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴀʟᴠᴏ ǫᴜᴇ ᴠᴏᴄê ǫᴜᴇʀ ᴅᴀ ᴜᴍ ᴄʜᴜᴛᴇ, ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴏ @*")
await kasane.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Você acabou de dar um chute em *@${menc_os2.split('@')[0]}*.`, mentions: [menc_os2]}, {quoted: selo})
break 

case 'dogolpe':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴄᴏᴍ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴏ @ ᴅᴏ ᴜsᴜáʀɪᴏ..*")
randomF = ["em iludir pessoas", "em ferir os sentimentos", "em dar chifre"]
await kasane.sendMessage(from, {text: `🤍☠️ *@${menc_os2.split("@")[0]}* é especia *${randomF[Math.floor(Math.random() * randomF.length)]}*.`, mentions: [menc_os2]}, {quoted: selo})
break

case 'shipo':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
if(!menc_os2) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ᴘᴇssᴏᴀ ᴅᴏ ɢʀᴜᴘᴏ ᴘᴀʀᴀ ᴇɴᴄᴏɴᴛʀᴀʀ ᴏ ᴘᴀʀ ᴅᴇʟᴀ.*");
await mention(`🤍 Eu shipo *@${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]} & @${menc_os2.split("@")[0]}* com uma porcentagem de *${Math.floor(Math.random() * 100)+"%"}*.`);
break

case 'casal':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await reagir(from, "💘");
var m1= groupMembers[Math.floor(Math.random() * groupMembers.length)].id
var m2= groupMembers[Math.floor(Math.random() * groupMembers.length)].id
try {ppimg = await kasane.profilePictureUrl(m1)} catch(erro) {ppimg = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg'}
try {ppimg2 = await kasane.profilePictureUrl(m2)} catch(erro) {ppimg2 = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg'}
p1 = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
p2 = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg2}`)
random = Math.floor(Math.random() * 100)
await kasane.sendMessage(from, {image: {url: API_URL+`/api/canvas/ship?foto1=${p1.data}&foto2=${p2.data}&mat=${random}&fundo=https://telegra.ph/file/b41f8e7f2ca966c8a6667.jpg`}, caption: `❪👩🏼‍❤️‍💋‍👨🏻ꦿฺ - Sinto que esses dois formariam um par perfeito juntos:\n*•〔@${m1.split("@")[0]}〕&〔@${m2.split("@")[0]}〕*\n*•*Com uma expectativa de sucesso de:*『${random+"%"}』*`, mentions: [m1, m2]}, {quoted: selo}).catch((error) => {reply(mess.error())})
break

case 'rank': case 'ranklevel': case 'rankpatente':
if(!isGroup) return reply(mess.onlyAdmins())
if(!isLevelingOn) return reply(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`)
if(level2.length > 4) {
cortGG = level2.map(i => i)
rank = cortGG.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
if(level2.length > 10) {var totalR = 10} else {var totalR = level2.length}
tc = `🎖️ Rank Level - [Type: *Global*]\n–`
for ( i = 0; i < totalR; i++) {
if(i != null) {
var newlevel = rank[i].contador
if(newlevel < 100){var newpatente = "Bronze I 🥉"}; if(newlevel >= 100 && newlevel < 200){var newpatente = "Bronze II 🥉"}; if(newlevel >= 200 && newlevel < 300){var newpatente = "Bronze III 🥉"}; if(newlevel >= 300 && newlevel < 400){var newpatente = "Prata I 🥈"}; if(newlevel >= 400 && newlevel < 500){var newpatente = "Prata II 🥈"}; if(newlevel >= 500 && newlevel < 600){var newpatente = "Prata III 🥈"}; if(newlevel >= 600 && newlevel < 700){var newpatente = "Ouro I 🥇"}; if(newlevel >= 700 && newlevel < 800){var newpatente = "Ouro II 🥇"}; if(newlevel >= 800 && newlevel < 900){var newpatente = "Ouro III 🥇"}; if(newlevel >= 900 && newlevel < 1200){var newpatente = "Ouro IV 🥇"}; if(newlevel >= 1200 && newlevel < 1500){var newpatente = "Platina I 🌀"}; if(newlevel >= 1500 && newlevel < 1800){var newpatente = "Platina II 🌀"}; if(newlevel >= 1800 && newlevel < 2100){var newpatente = "Platina III 🌀"}; if(newlevel >= 2100 && newlevel < 2700){var newpatente = "Platina IV 🌀"}; if(newlevel >= 2700 && newlevel < 3300){var newpatente = "Diamante I 💎"}; if(newlevel >= 3300 && newlevel < 3900){var newpatente = "Diamante II 💎"}; if(newlevel >= 3900 && newlevel < 4500){var newpatente = "Diamante III 💎"}; if(newlevel >= 4500 && newlevel < 5000){var newpatente = "Diamante IV 💎"}; if(newlevel >= 5000 && newlevel < 5500){var newpatente = "Paladino I 🤍"}; if(newlevel >= 5500 && newlevel < 6500){var newpatente = "Paladino II 🤍"}; if(newlevel >= 6500 && newlevel < 7500){var newpatente = "Paladino III 🤍"}; if(newlevel >= 7500 && newlevel < 9000){var newpatente = "Paladino IV 🤍"}; if(newlevel >= 9000 && newlevel < 10500){var newpatente = "Mestre I ❤️‍🔥"}; if(newlevel >= 10500 && newlevel < 12000){var newpatente = "Mestre II ❤️‍🔥"}; if(newlevel >= 12000 && newlevel < 13500){var newpatente = "Mestre III ❤️‍🔥"}; if(newlevel >= 13500 && newlevel < 15000){var newpatente = "Mestre IV ❤️‍🔥"}; if(newlevel >= 15000 && newlevel < 20000){var newpatente = "Mestre V ❤️‍🔥"}; if(newlevel >= 20000 && newlevel < 25000){var newpatente = "Desafiante I 👑"}; if(newlevel >= 25000 && newlevel < 30000){var newpatente = "Desafiante II 👑"}; if(newlevel >= 30000 && newlevel < 35000){var newpatente = "Desafiante III 👑"}; if(newlevel >= 35000 && newlevel < 40000){var newpatente = "Desafiante IV 👑"}; if(newlevel >= 40000 && newlevel < 50000){var newpatente = "Desafiante V 👑"}; if(newlevel >= 50000 && newlevel < 60000){var newpatente = "Usuário Superior I 🎓"}; if(newlevel >= 60000 && newlevel < 70000){var newpatente = "Usuário Superior II 🎓"}; if(newlevel >= 70000 && newlevel < 80000){var newpatente = "Mestre Supremo I 🪄"}; if(newlevel >= 80000 && newlevel < 90000){var newpatente = "Mestre Supremo II 🪄"}; if(newlevel >= 90000 && newlevel < 100000){var newpatente = "Mestre Supremo III 🪄"}; if(newlevel >= 100000 && newlevel < 150000){var newpatente = "Conquistador I ⚒️"}; if(newlevel >= 150000 && newlevel < 200000){var newpatente = "Conquistador II ⚒️"}; if(newlevel >= 200000 && newlevel < 300000){var newpatente = "Conquistador III ⚒️"}; if(newlevel >= 300000 && newlevel < 400000){var newpatente = "Desbravador I 🛰️"}; if(newlevel >= 400000 && newlevel < 500000){var newpatente = "Desbravador II 🛰️"}; if(newlevel >= 500000 && newlevel < 1000000){var newpatente = "Desbravador III 🛰️"}; if(newlevel >= 1000000 && newlevel < 1500000){var newpatente = "Grande Mestre I 🪩"}; if(newlevel >= 1500000 && newlevel < 2000000){var newpatente = "Grande Mestre II 🪩"}; if(newlevel >= 2000000 && newlevel < 5000000){var newpatente = "Grande Mestre III 🪩"}; if(newlevel >= 5000000 && newlevel < 10000000){var newpatente = "Legancy X ⚜️"}; if(newlevel >= 10000000){var newpatente = "Veterano 🎩🏼‍♂️"}
tc += `\n*${i+1}°.* • Usuário(a): *${rank[i].nick}*\n• Usuário ID: *wa.me/${rank[i].id.split('@')[0]}*\n• Quantidade Total de XP: *${rank[i].contador}*\n• Atualmente a pessoa está no patente *${newpatente}*, no level: *${rank[i].level}*\n————`
}
}
reply(tc)
} else { 
reply(`Nenhum dado(s) foi retornado, tente novamente mais tarde️!`)
}
break

case 'patente':
case 'level':
if(!isGroup) return reply(mess.onlyAdmins())
if(!isLevelingOn) return reply(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`)
if(JSON.stringify(level2).includes(sender)) {
levelstts = level2.map(i => i.id).indexOf(sender)
var newlevel = level2[levelstts].contador
if(newlevel < 100) newpatente = "Bronze I"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I️"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II️"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV️"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V️"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I️"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II️"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III️"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "Legancy X"
if(newlevel >= 10000000) newpatente = "Veterano"
// É usado na barra apresentada na msg, que vai ser encaminhada pelo bot quando Usuário executar o cmd 'level' ou 'patente'.
if(newpatente == "Bronze I") {newcont = 100; newtt = 0}
if(newpatente == "Bronze II") {newcont = 200; newtt = 100}
if(newpatente == "Bronze III") {newcont = 300; newtt = 200}
if(newpatente == "Prata I") {newcont = 400; newtt = 300}
if(newpatente == "Prata II") {newcont = 500; newtt = 400}
if(newpatente == "Prata III") {newcont = 600; newtt = 500}
if(newpatente == "Ouro I") {newcont = 700; newtt = 600}
if(newpatente == "Ouro II") {newcont = 800; newtt = 700}
if(newpatente == "Ouro III") {newcont = 900; newtt = 800}
if(newpatente == "Ouro IV") {newcont = 1200; newtt = 900}
if(newpatente == "Platina I") {newcont = 1500; newtt = 1200}
if(newpatente == "Platina II") {newcont = 1800; newtt = 1500}
if(newpatente == "Platina III") {newcont = 2100; newtt = 1800}
if(newpatente == "Platina IV") {newcont = 2700; newtt = 2100}
if(newpatente == "Diamante I") {newcont = 3300; newtt = 2700}
if(newpatente == "Diamante II") {newcont = 3900; newtt = 3300}
if(newpatente == "Diamante III") {newcont = 4500; newtt = 3900}
if(newpatente == "Diamante IV") {newcont = 5000; newtt = 4500}
if(newpatente == "Paladino I") {newcont = 5500; newtt = 5000}
if(newpatente == "Paladino II") {newcont = 6500; newtt = 5500}
if(newpatente == "Paladino III") {newcont = 7500; newtt = 6500}
if(newpatente == "Paladino IV") {newcont = 9000; newtt = 7500}
if(newpatente == "Mestre I️") {newcont = 10500; newtt = 9000}
if(newpatente == "Mestre II") {newcont = 12000; newtt = 10500}
if(newpatente == "Mestre III️") {newcont = 13500; newtt = 12000}
if(newpatente == "Mestre IV️") {newcont = 15000; newtt = 13500}
if(newpatente == "Mestre V️") {newcont = 20000; newtt = 15000}
if(newpatente == "Desafiante I") {newcont = 25000; newtt = 20000}
if(newpatente == "Desafiante II") {newcont = 30000; newtt = 25000}
if(newpatente == "Desafiante III") {newcont = 35000; newtt = 30000}
if(newpatente == "Desafiante IV") {newcont = 40000; newtt = 35000}
if(newpatente == "Desafiante V") {newcont = 50000; newtt = 40000}
if(newpatente == "Usuário Superior I") {newcont = 60000; newtt = 50000}
if(newpatente == "Usuário Superior II") {newcont = 70000; newtt = 60000}
if(newpatente == "Mestre Supremo I") {newcont = 80000; newtt = 70000}
if(newpatente == "Mestre Supremo II") {newcont = 90000; newtt = 80000}
if(newpatente == "Mestre Supremo III") {newcont = 100000; newtt = 90000}
if(newpatente == "Conquistador I️") {newcont = 150000; newtt = 100000}
if(newpatente == "Conquistador II") {newcont = 200000; newtt = 150000}
if(newpatente == "Conquistador III️") {newcont = 300000; newtt = 200000}
if(newpatente == "Desbravador I️") {newcont = 400000; newtt = 300000}
if(newpatente == "Desbravador II️") {newcont = 500000; newtt = 400000}
if(newpatente == "Desbravador III️") {newcont = 1000000; newtt = 500000}
if(newpatente == "Grande Mestre I") {newcont = 1500000; newtt = 1000000}
if(newpatente == "Grande Mestre II") {newcont = 2000000; newtt = 1500000}
if(newpatente == "Grande Mestre III") {newcont = 5000000; newtt = 2000000}
if(newpatente == "Legancy X️") {newcont = 10000000; newtt = 5000000}
// Barra de quanto falta para alcançar o próximo nível.
if(newlevel < 10000000) {
nagaPor = Number(Number(newlevel - newtt) / Number(newcont - newtt) * 100).toFixed(1)
nagaibis = newcont - newlevel
if(nagaPor == 100) nagaPor = `〘██████████〙${nagaPor}%`
if(nagaPor < 100) returnP = `〘█████████▒〙${nagaPor}%`
if(nagaPor < 90) returnP = `〘████████▒▒〙${nagaPor}%`
if(nagaPor < 80) returnP = `〘███████▒▒▒〙${nagaPor}%`
if(nagaPor < 70) returnP = `〘██████▒▒▒▒〙${nagaPor}%`
if(nagaPor < 60) returnP = `〘█████▒▒▒▒▒〙${nagaPor}%`
if(nagaPor < 50) returnP = `〘████▒▒▒▒▒▒〙${nagaPor}%`
if(nagaPor < 40) returnP = `〘███▒▒▒▒▒▒▒〙${nagaPor}%`
if(nagaPor < 30) returnP = `〘██▒▒▒▒▒▒▒▒〙${nagaPor}%`
if(nagaPor < 20) returnP = `〘█▒▒▒▒▒▒▒▒▒〙${nagaPor}%`
if(nagaPor < 10) returnP = `〘▒▒▒▒▒▒▒▒▒▒〙${nagaPor}%`
} else {
returnP = ``
}
leveltxt = `• Usuário: *@${sender.split("@")[0]}*\n• Você está atualmente no level *${level2[levelstts].level}* e no patente *${newpatente}*\n• Sua quantidade de XP é: *${level2[levelstts].contador}*\n\t[•] -> ${newlevel < 10000000 ? `*${returnP}*` : ``}\n–\n${newlevel < 10000000 ? `${newlevel < 10000000 ? `• Para subir para o próximo level, alcance essa quantidade: *${newcont}*.` : ``}\n• Falta${Number(nagaibis) > 1 ? `m` : ``} apenas *${nagaibis} XP* para você upar para o próximo level.` : `Você já alcançou a patente máxima, ou seja, está muito a frente de todos.`}`
localeL = level2.map(i => i).sort((a, b) => (a.contador < b.contador) ? 0 : -1)
try {uk = await kasane.profilePictureUrl(sender)} catch(erro) {uk = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg'}
gerarBufferLV = await getBuffer(uk); photoULV = await upload(gerarBufferLV)
await kasane.sendMessage(from, {image: {url: API_URL+`/api/canvas/levelcard?foto=${photoULV}&nome=${getName(sender)}&xp_before=${level2[levelstts].contador}&xp_after=${newcont}&level=${level2[levelstts].level}&ranking=${localeL.map(i => i.id).indexOf(sender) + 1}&fundo=${fundolevel}`}, caption: leveltxt, mentions: [sender]}, {quoted: selo})
} else {
reply(`Nenhuma informação foi obtida sobre seu level/patente atual em sua solicitação.\n• *Tente novamente mais tarde!* Caso seja uma falha técnica entre em contato com o(a) dono(a) do bot.`)
}
break

case 'addlevel':
if(!SoDono) return reply(mess.onlyOwner())
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅɪɢɪᴛᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ ʟᴇᴠᴇʟ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴀᴅɪᴄɪᴏɴᴀʀ...*")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴛᴇᴍ ǫᴜᴇ ᴀᴅɪᴄɪᴏɴᴀʀ ᴀᴏ ᴍᴇɴᴏs 1 ʟᴇᴠᴇʟ.*")
if(q.includes(".")) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏᴅᴇ ɴúᴍᴇʀᴏ ᴅᴇᴄɪᴍᴀʟ.*")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].level += Number(args[0])
fs.writeFileSync("./bunker/database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} adicionado${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarlevel':
if(!SoDono) return reply(mess.onlyOwner())
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅɪɢɪᴛᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ ʟᴇᴠᴇʟ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ʀᴇᴍᴏᴠᴇʀ*")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴛᴇᴍ ǫᴜᴇ ᴛɪʀᴀʀ ᴀᴏ ᴍᴇɴᴏs 1 ʟᴇᴠᴇʟ.*");
if(q.includes(".")) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏᴅᴇ ɴúᴍᴇʀᴏ ᴅᴇᴄɪᴍᴀʟ.*");
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].level -= Number(args[0]);
fs.writeFileSync("./bunker/database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} retirado${Number(args[0]) > 1 ? `s` : ``} deste usuário...`);
break

case 'addxp':
if(!SoDono) return reply(mess.onlyOwner())
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅɪɢɪᴛᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ xᴘ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴀᴅɪᴄɪᴏɴᴀʀ*")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴛᴇᴍ ǫᴜᴇ ᴀᴅᴅ ᴀᴏ ᴍᴇɴᴏs 1 ᴅᴇ xᴘ*")
if(q.includes(".")) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏᴅᴇ ɴúᴍᴇʀᴏ ᴅᴇᴄɪᴍᴀʟ*")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador += Number(args[0])
fs.writeFileSync("./bunker/database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} adicionada${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarxp':
if(!SoDono) return reply(mess.onlyOwner())
if(!q) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅɪɢɪᴛᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ xᴘ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ʀᴇᴛɪʀᴀʀ*")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴛᴇᴍ ǫᴜᴇ ᴛɪʀᴀʀ ᴀᴏ ᴍᴇɴᴏs 1 ᴅᴇ xᴘ*")
if(q.includes(".")) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴘᴏᴅᴇ ɴúᴍᴇʀᴏ ᴅᴇᴄɪᴍᴀʟ*")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador -= Number(args[0])
fs.writeFileSync("./bunker/database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} retirada${Number(args[0]) > 1 ? `s` : ``} deste usuário...`);
break

case 'blocklevel':
if(!SoDono) return reply(mess.onlyOwner())
if(!menc_os2) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ @ ᴏᴜ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴀ ᴘᴇssᴏᴀ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ʙʟᴏǫᴜᴇᴀʀ ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ.*")
if(!JSON.stringify(level2).includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴜsᴜáʀɪᴏ ᴍᴇɴᴄɪᴏɴᴀᴅᴏ ɴãᴏ ᴇsᴛá ᴘʀᴇsᴇɴᴛᴇ ɴᴏ ᴄᴏɴᴛᴀᴅᴏʀ ᴅᴇ ᴍᴇɴsᴀɢᴇɴs.*")
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == true) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴜsᴜáʀɪᴏ ᴍᴇɴᴄɪᴏɴᴀᴅᴏ ᴊá ᴇsᴛá ʙʟᴏǫᴜᴇᴀᴅᴏ ɴᴏ ᴄᴏɴᴛᴀᴅᴏʀ.*")
level2[AB].block = true
fs.writeFileSync("./bunker/database/usuarios/leveling.json", JSON.stringify(level2))
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴜáʀɪᴏ ʙʟᴏǫᴜᴇᴀᴅᴏ ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ ᴄᴏᴍ sᴜᴄᴇssᴏ... ᴀs ɪɴᴛᴇʀᴀçõᴇs ᴅᴏ ᴍᴇsᴍᴏ ɴãᴏ sᴇʀãᴏ ᴍᴀɪs ᴄᴏɴᴛᴀʙɪʟɪᴢᴀᴅᴀs!*")
break

case 'unblocklevel':
if(!SoDono) return reply(mess.onlyOwner())
if(!menc_os2) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ @ ᴏᴜ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴀ ᴘᴇssᴏᴀ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ʙʟᴏǫᴜᴇᴀʀ ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ.*")
if(!JSON.stringify(level2).includes(menc_os2)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴜsᴜáʀɪᴏ ᴍᴇɴᴄɪᴏɴᴀᴅᴏ ɴãᴏ ᴇsᴛá ᴘʀᴇsᴇɴᴛᴇ ɴᴏ ᴄᴏɴᴛᴀᴅᴏʀ ᴅᴇ ᴍᴇɴsᴀɢᴇɴs.*");
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == false) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴜsᴜáʀɪᴏ ᴍᴇɴᴄɪᴏɴᴀᴅᴏ ɴãᴏ ᴇsᴛá ʙʟᴏǫᴜᴇᴀᴅᴏ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ!*")
level2[AB].block = false
fs.writeFileSync("./bunker/database/usuarios/leveling.json", JSON.stringify(level2))
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴜáʀɪᴏ ᴅᴇsʙʟᴏǫᴜᴇᴀᴅᴏ ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ ᴄᴏᴍ sᴜᴄᴇssᴏ! ᴀs ɪɴᴛᴇʀᴀçõᴇs ᴅᴏ ᴜsᴜáʀɪᴏ ᴍᴇɴᴄɪᴏɴᴀᴅᴏ ᴠᴏʟᴛᴀʀãᴏ ᴀ sᴇʀ ᴄᴏɴᴛᴀʙɪʟɪᴢᴀᴅᴀs.*")
break

case 'blocklevel-list': case 'blocklevellist':
if(!SoDono) return reply(mess.onlyOwner())
txt = `[Total: *${level2.length}*] - Lista de usuários bloqueados do contador de XP:\n`
let blocklevellist = 0
for(i = 0; i < level2.length; i++) {
if(level2[i].block == true) {
txt += `*${i+1}.* @${level2[i].id.split('@')[0]}\n`
blocklevellist += 1
}
}
txt += `\n–\n• Total de Bloqueados: *${blocklevellist}*`
if(blocklevellist > 0) {
await mention(txt);
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍ *ᴜsᴜáʀɪᴏ ʙʟᴏǫᴜᴇᴀᴅᴏ* ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ xᴘ.*");
}
break

case 'rmlevel':
if(!SoDono) return reply(mess.onlyOwner())
if(!q && !menc_os2) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴀ ᴘᴇssᴏᴀ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴀᴘᴀɢᴀʀ ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ.*")
var qp = menc_os2 ? menc_os2 : q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(!JSON.stringify(level2).includes(qp)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ᴜsᴜáʀɪᴏ ᴍᴇɴᴄɪᴏɴᴀᴅᴏ ɴãᴏ ᴇsᴛá ʀᴇɢɪsᴛʀᴀᴅᴏ ɴᴏ ᴄᴏɴᴛᴀᴅᴏʀ.*")
AB = level2.map(i => i.id).indexOf(qp)
level2.splice(AB, 1)
fs.writeFileSync("./bunker/database/usuarios/leveling.json", JSON.stringify(level2))
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴜáʀɪᴏ ᴀᴘᴀɢᴀᴅᴏ ғᴏɪ ᴄᴏɴᴛᴀᴅᴏʀ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴄᴏᴍᴏ ᴏ(ᴀ) sᴇɴʜᴏʀ(ᴀ) ᴘᴇᴅɪᴜ...*")
break

case 'rankativos': 
case 'rankativo':
if(!isGroup) return reply(mess.onlyGroup())
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
menc = [] 
blad = `*🏆 Rank dos mais ativos no grupo:* ${groupName}\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
if (i != null) blad += `\n*🏅 ${i + 1}º Lugar:* @${blue[i].id.split('@')[0]}\n• Quantidade de mensagens encaminhadas: *${blue[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${blue[i].cmd_messages}*\n• Usuário está conectado em um dispositivo: *${blue[i].aparelho}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${blue[i].figus}*\n`
menc.push(blue[i].id)
}
await mentions(blad, menc, true)
break

case 'rankinativo':
case 'rankinativos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
await ClearMembersInactive()
bule = []; bule2 = []; mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = `🗑 *Rank dos mais inativos do grupo:* ${groupName}\n-\n`
if(bule.length == 0) boardi += '❌ Nenhum usuário inativo foi encontrado neste grupo.️'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `*🏅 ${i + 1}º Lugar:* @${bule[i].id.split('@')[0]}\n• Quantidade de mensagens enviadas pelo usuário(a): *${bule[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${bule[i].cmd_messages}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${bule[i].aparelho}*\n\n`
mentioned_jid.push(bule[i].id)
} 
await mentions(boardi, mentioned_jid, true);
break

case 'checkativo':
if(!isGroup) return reply(mess.onlyGroup())
if(groupIdscount.indexOf(from) < 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ʙᴏᴛ ɴãᴏ ᴛᴇᴍ ᴀɪɴᴅᴀ ᴅᴀᴅᴏs sᴏʙʀᴇ ᴏ ɢʀᴜᴘᴏ*")
var ind = groupIdscount.indexOf(from)
if(!menc_os2 || menc_jid2[1]) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ @ ᴅᴇ ǫᴜᴇᴍ ᴅᴇsᴇᴊᴀ ᴘᴜxᴀʀ ᴀ ᴀᴛɪᴠɪᴅᴀᴅᴇ / só ᴘᴏᴅᴇ ᴜᴍ ᴘᴏʀ ᴠᴇᴢ..*")
if(numbersIds.indexOf(menc_os2) >= 0) {
var indnum = numbersIds.indexOf(menc_os2)
var RSM_CN = countMessage[ind].numbers[indnum]
await mentions(`Consulta individual da atividade do usuário @${menc_os2.split('@')[0]}\n–\n• Quantidade de mensagens enviadas pelo usuário(a): *${RSM_CN.messages}*\n• Quantidade de comandos executados pelo usuário(a): *${RSM_CN.cmd_messages}*\n• Usuário está conectado em um dispositivo: *${RSM_CN.aparelho}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${RSM_CN.figus}*\n–\n〘 *${groupName}* 〙`, [menc_os2], true)
} else {
await mentions(`Não tenho nenhuma informação no grupo sobre o *@${menc_os2.split('@')[0]}*.`, [menc_os2], true)
}
break

case 'vab': case 'vcprefere': case 'voceprefere':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
await reagir(from, '😸'); /* Reação à mensagem, quando solicitar a execução do comando. */
await psycatgames().then(async(array) => {
const { nsfw, questions } = array[Math.floor(Math.random() * array.length)];
const { pergunta1, pergunta2 } = questions[Math.floor(Math.random() * questions.length)];
await sendPoll(kasane, from, "Você prefere...", [pergunta1, pergunta2]); /* Enviar a enquete com as preferências sorteadas. */
}).catch(async(error) => {
await replyWithReaction(mess.error(), {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😿*", key: info.key}});
});
break

case 'eununca':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
await reagir(from, '🤔'); /* Reação à mensagem, quando solicitar a execução do comando. */
await sendPoll(kasane, from, tools.iNever[Math.floor(Math.random() * tools.iNever.length)], ["Eu nunca", "Eu já"]).catch(async(error) => {
await replyWithReaction(mess.error(), {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😭*", key: info.key}});
});
break

case 'conselhobiblico': case 'conselhosbiblico': case 'conselhosb': case 'conselhob':
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(advices.biblicalAdvice[Math.floor(Math.random() * advices.biblicalAdvice.length)], {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😌*", key: info.key}}).catch(async(error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(mess.error(), {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😿*", key: info.key}});
});
break

case 'conselhos': case 'conselho':
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(advices.commonAdvices[Math.floor(Math.random() * advices.commonAdvices.length)], {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😌*", key: info.key}}).catch(async(error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(mess.error(), {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😿*", key: info.key}});
});
break
 
case 'cantadas': case 'cantada':
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(tools.Cantadas[Math.floor(Math.random() * tools.Cantadas.length)], {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😼*", key: info.key}}).catch(async(error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(mess.error(), {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😿*", key: info.key}});
});
break

case 'fatos': case 'curiosidades':
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(tools.curiousFacts[Math.floor(Math.random() * tools.curiousFacts.length)], {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🙀*", key: info.key}}).catch(async(error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(mess.error(), {react: {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😿*", key: info.key}});
});
break

case 'rankgay': case 'rankgays':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `🏳️‍🌈 *RANK DOS 5 MAIS GAYS DO GRUPO!*\n—\n`
TMGAYS = ["Esse aí gosta de cheirar banana até umas horas kakak", "Gosta de ser dominado e chicoteado.", "Viadinho gente boa, nada contra os veados.","Esse aí roda mais que roda de caminhão.", "Mapoa é você meu amor?", "Esse aí ainda tá no armário, a franga tá presa!", "Profissional na garganta profunda!", "Essa bicha é finíssima!", "Essa aí precisa sair do closet ainda!", "Vixi esse aí e vitaminado!", "Vixi um gay vulgo irene!", "Poc fechosa, amo tu mona!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGAYS[Math.floor(Math.random() * TMGAYS.length)]} )\n`
}
await mencionarIMG(ABC, rnkgay);
break

case 'rankgado': case 'rankgados':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `🐂 *RANK DOS 5 MAIS GADO DO GRUPO:*\n—\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkgado);
break

case 'rankcorno': case 'rankcornos':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `🐂 *RANK DOS 5 MAIS CORNOS DO GRUPO!*\n—\n`
TMCRN = ["Familiar, leva até chifre com os parentes!", "Masoquista, leva chifre mas não larga a mulher!", "Atéu, leva chifre e não acredita!", "Político, só faz promessa e não cumpre o que fala!", "Esse é que leva chifres, vai embora e volta por causa das crianças.", "Xuxa, o que não larga a mulher por causa dos baixinhos.", "Famoso, aquele que por onde passa é reconhecido como tal.", "Inflação, a cada dia que passa o chifre aumenta."]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMCRN[Math.floor(Math.random() * TMCRN.length)]} )\n`
}
await mencionarIMG(ABC, rnkcorno);
break

case 'surubao': case 'suruba':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if (!q) return reply(`Eita, coloque o número de pessoas após o comando.`)
if (Number(q) > 5) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴏʟᴏǫᴜᴇ ᴜᴍ ɴúᴍᴇʀᴏ ᴍᴇɴᴏʀ, ᴏᴜ sᴇᴊᴀ, ᴀʙᴀɪxᴏ ᴅᴇ *5*.*")
emojiskk = ["🥵", "😈", "🫣", "😏"];
emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)];
frasekk = [`tá querendo relações sexuais a ${q}, topa?`, `quer que *${q}* pessoas venham de *chicote, algema e corda de alpinista*.`, `quer que ${q} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`]
context = frasekk[Math.floor(Math.random() * frasekk.length)]
ABC = `${emojis} @${sender.split('@')[0]} ${context}\n\n`
for (var i = 0; i < q; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mention(ABC);
break

case "rankbct":
case "rankbuceta":
case "rankbucetudas":
if (!isGroup) return reply(Res_SoGrupo);
if (!isModobn) return reply(Res_SoModoBN);

const bucetas = [];
while (bucetas.length < 5 && bucetas.length < groupMembers.length) {
const b = groupMembers[Math.floor(Math.random() * groupMembers.length)];
if (!bucetas.includes(b)) bucetas.push(b);
}

const TMPBCT = [
"Buceta rosinha, parece que menstrua danone! 🫣",
"Buceta mó preta, parece o sufaco das minhas primas. 🤐",
"Mó bucetão, parece da Elisa Shances. 😈",
"Bct lisinha, parece eu sem dinheiro. 🥲",
"Deliciosa, porém parece a mata atlântica. 🌼",
"Deliciosa e macia. 🥰",
"Pior que o correio, só pacote. 😏",
"Provoca até nos sonhos. 🤤",
"Sonho de qualquer homem. 😜",
"Quem é Mia Khalifa perto de você?. 😉",
"Se essa é a porta do paraíso, eu queria ser a chave. 😍",
];

let rankzinbuceta = `*『 _Essas são as mais bucetudas 🤤 do grupo:_ 』*\n\n`;
bucetas.forEach((b) => {
rankzinbuceta += `😈 @${b.id.split("@")[0]}\n${TMPBCT[Math.floor(Math.random() * TMPBCT.length)]}\n\n`;
});

const mentionsBucetas = bucetas.map((b) => b.id);
await kasane.sendMessage(from, { image: { url: "https://files.catbox.moe/j53cob.jpg" }, caption: rankzinbuceta, mentions: mentionsBucetas });
break;

case 'rankgostosos': case 'rankgostoso':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `*RANK DOS 5 MAIS GOSTOSOS DO GRUPO* 😏🔥\n—\n`
TMGSTS = ["Você tá olhando para um semi Deus!", "Mds, me apaixonei! Passa o insta gatinho?", "Ei ei gatinhas, o gostosão do grupo chegou!", "Gostoso? É, pena que é homem galinha!", "Não sei se comparo esse gostoso com o Ares Ridalgo!", "Cruz credo, porque tu tá aqui? Tu é feio desgraça!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`
}
await mencionarIMG(ABC, rnkgostoso);
break

case 'rankgostosas': case 'rankgostosa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `*RANK DAS 5 MAIS GOSTOSAS DO GRUPO* 😏🔥\n—\n`
TMGSTS = ["Calma novinha, assim eu não resisto!!","Mds, me apaixonei no sorriso dessa gata!!","Eita gatinha, Passa o insta quando? rs","Credo, sai daqui dragão!","Ui gata, que rabão ein!!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`
}
await mencionarIMG(ABC, rnkgostosa);
break

case 'ranknazista': case 'ranknazistas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n—\n`
TMNZTS = ["Soldado nazista, marcha com estilo.‍", "Comandante implacável, lidera com rigor.️", "Nazista estrategista, conquista territórios.️", "Mestre da ordem, disciplina em primeiro lugar.", "Soldado de elite, Nazista hardcore.", "General invencível, domina as batalhas.", "Nazista disciplinado, fiel à causa.", "Líder autoritário, impõe respeito.️", "Soldado feroz, nazismo no coração.", "Mestre da propaganda, convence com palavras.️", "Nazista moderno, tecnologia na guerra.", "Máquina de guerra, implacável e eficiente.️","Comandante supremo, nazismo eterno.", "Soldado leal, marcha em nome da ideologia.", "Nazista clássico, revive o passado.", "General poderoso, Nazista do século XXI.", "Comandante inabalável, Nazista de honra.", "Soldado devoto, nazismo no sangue.", "Mestre da retórica nazista, convence a todos.", "Nazista visionário, futuro sob a suástica."];
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMNZTS[Math.floor(Math.random() * TMNZTS.length)]} )\n`
}
await mencionarIMG(ABC, rnknazista);
break

case 'rankotaku': case 'rankotakus':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n—\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkotaku);
break

case 'ranksigma': case 'ranksigmas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `RANK DOS 5 MAIS SIGMAS DO GRUPO 🗿🍷\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnksigma);
break;

case 'rankbeta': case 'rankbetas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `RANK DOS 5 MAIS BETAS DO GRUPO 🫵🏽😂\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkbeta);
break;

case 'rankbaiano': case 'rankbaianos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `RANK DOS 5 MAIS BAIANOS DO GRUPO 😴💤\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkbaiano);
break;

case 'rankbaiana': case 'rankbaianas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `RANK DAS 5 MAIS BAIANAS DO GRUPO 😴💤\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkbaiana);
break;

case 'rankcarioca': case 'rankcariocas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `RANK DOS 5 MAIS CARIOCAS DO GRUPO 🔫🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkcarioca);
break;

case 'ranklouco': case 'rankloucos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `RANK DOS 5 MAIS LOUCOS DO GRUPO 💀\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnklouco);
break;

case 'ranklouca': case 'rankloucas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `RANK DAS 5 MAIS LOUCAS DO GRUPO 💀\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnklouca);
break;

case 'ranksafada': case 'ranksafadas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `RANK DAS 5 MAIS SAFADAS DO GRUPO 😏🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnksafada);
break;

case 'ranksafado': case 'ranksafados':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `RANK DOS 5 MAIS SAFADOS DO GRUPO 🥵🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnksafado);
break;

case 'rankmacaco': case 'rankmacacos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `RANK DOS 5 MAIS MACACOS DO GRUPO 🐒\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkmacaco);
break;

case 'rankmacaca': case 'rankmacacas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `RANK DAS 5 MAIS MACACAS DO GRUPO 🐒\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkmacaca);
break;

case 'rankputa': case 'rankputas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `RANK DAS 5 MAIS PUTAS DO GRUPO 😈🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkputa);
break;

case 'rankpau':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n—\n`
TMPAU = ["Pequeno pra cact, se mata maluco", `Pequenininho chega ser até fofo`, `Menor que meu dedo mindinho pequeno demais`, `Até que dá sentir, tá na média`, `Até que é grandinho`, `Grande até!`, `Gigantesco igual meu braço`, `Enorme quase chega no útero`, `Grandão demais em, e uii`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal"]
for (var i = 0; i < 5; i++) {
ABC += `• *${i+1}°* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMPAU[Math.floor(Math.random() * TMPAU.length)]} )\n`
}
await mencionarIMG(ABC, rnkpau);
break

case 'mencionar':
if (!q) return reply(`Você usou o comando de forma incorreta, use a correta: ${prefix}mencionar corno`);
if (!isGroup) return reply(`Esta brincadeira só funciona em grupos.`);
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
await mention(`Estou mencionando o *${q}* do grupo: *@${groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)].id.split('@')[0]}*`);
break

case 'jogov':
case 'jogodavelha':
if (!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ só ᴘᴏᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇᴍ ɢʀᴜᴘᴏs.*");
if (!isModobn) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴀᴘᴇɴᴀs ᴜsᴜáʀɪᴏs ɴᴏ ᴍᴏᴅᴏ ʙɴ ᴘᴏᴅᴇᴍ ɪɴɪᴄɪᴀʀ ᴜᴍᴀ ᴘᴀʀᴛɪᴅᴀ.*");

if (!menc_jid) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴜsᴜáʀɪᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴅᴇsᴀғɪᴀʀ ᴊᴜɴᴛᴏ ᴄᴏᴍ ᴏ ᴄᴏᴍᴀɴᴅᴏ.*");

// Carrega os arrays ou cria se não existir
let joguinhodavelhajs = [];
let joguinhodavelhajs2 = [];
const path1 = './bunker/database/usuarios/joguinhodavelha.json';

if (fs.existsSync(path1)) {
const data = JSON.parse(fs.readFileSync(path1));
joguinhodavelhajs = data.jogadores || [];
joguinhodavelhajs2 = data.grupos || [];
}

joguinhodavelhajs.push(sender);
joguinhodavelhajs2.push(from);

// Salva como objeto único para não sobrescrever
fs.writeFileSync(path1, JSON.stringify({ jogadores: joguinhodavelhajs, grupos: joguinhodavelhajs2 }, null, 2));

const gameFile = `./bunker/tictactoe/db/${from}.json`;

if (fs.existsSync(gameFile)) {
const boardnow = setGame(`${from}`);
const jogadorX = normalizar(boardnow.X + '@s.whatsapp.net');
const jogadorO = normalizar(boardnow.O + '@s.whatsapp.net');
const msg = `*『 🎮 JOGO DA VELHA 🕹 』*\n\n💢 Já existe uma partida em andamento!\n\n👥 Disputa atual:\n@${jogadorX.split('@')[0]} VS @${jogadorO.split('@')[0]}\n\nAguardem o fim desta rodada antes de iniciar outra.`;
return await mentions(msg, [jogadorX, jogadorO], true);
}

if (argss.length === 1) return reply(`Jogue com alguém, para iniciar a partida: ${prefix + command} @membro.`);

// Cria nova partida
const boardnow = setGame(`${from}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = menc_jid.replace("@s.whatsapp.net", "").replace("@", "");

fs.writeFileSync(gameFile, JSON.stringify(boardnow, null, 2));

const jogadorX = normalizar(boardnow.X + '@s.whatsapp.net');
const jogadorO = normalizar(boardnow.O + '@s.whatsapp.net');

const mensagem = `*『 ⚠ ESPERANDO O OPONENTE ⚠ 』*\n• @_「@${jogadorX.split('@')[0]}」 Está te convidando para jogar um jogo da velha【👩🏻‍🦳】_\n\n• *_『 @${jogadorO.split('@')[0]} 』 Use 『S』 para aceitar ou 『N』 para rejeitar._*\n\n> Caso queira cancelar use 『${prefix}rv』`;

await mentions(mensagem, [jogadorX, jogadorO], true);
break;

case 'resetarvelha':
case 'resetavelha':
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`)
if(fs.existsSync("./bunker//tictactoe/db/" + from + ".json")) {
DLT_FL("./bunker//tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if(args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`);
ppt = ["pedra", "papel", "tesoura"];
ppy = ppt[Math.floor(Math.random() * ppt.length)];
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {var tes = "Vitória do jogador"}
if(vit == "derrota") {var tes = "A vitória é do BOT"} 
if(vit == "empate") {var tes = "O jogo terminou em empate"}
reply(`*${NomeDoBot}* jogou ${pptb}, o jogador jogou: ${args} -> *${tes}*`);
break

case 'icms':
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|");
var [result1, result2] = txt.split("|");
if(!q.includes("|")) return reply(mess.syntaxIcms(prefix));
data = await fetchJson(API_URL+`/api/outros/icms?valor=${encodeURIComponent(result1)}&ddd=${encodeURIComponent(result2)}&apikey=`+API_KEY_KASANE);
await kasane.sendMessage(from, {text: mess.icmsResult(data)}, {quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
break

case 'bot':
soundft = await fetch(qviado).then(v => v.buffer());
await kasane.sendMessage(from, {audio: soundft, mimetype: 'audio/mpeg', ptt: true}, {quoted: selo});
break

case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
await kasane.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴜᴍ ᴠíᴅᴇᴏ..*")
}
break 

case 'videolento':
case 'slowvid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(mess.wait()) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Error: ${err}`)
buffer453 = fs.readFileSync(ran)
await kasane.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴜᴍ ᴠíᴅᴇᴏ..*")
}
break

case 'videorapido':
case 'fastvid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
await kasane.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo })
await DLT_FL(ran)
})	
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴠíᴅᴇᴏ..*")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴀᴅɪᴄɪᴏɴᴀʀ ᴏ *ᴇғᴇɪᴛᴏ sᴏɴᴏʀᴏ* ɴᴏ áᴜᴅɪᴏ.*")
hah = fs.readFileSync(ran)
await kasane.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ áᴜᴅɪᴏ..*")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴀᴅɪᴄɪᴏɴᴀʀ ᴏ *ᴇғᴇɪᴛᴏ sᴏɴᴏʀᴏ* ɴᴏ áᴜᴅɪᴏ.*")
hah = fs.readFileSync(ran)
await kasane.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ áᴜᴅɪᴏ..*");
}
break

case 'adolesc':
case 'vozmenino':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴀᴅɪᴄɪᴏɴᴀʀ ᴏ *ᴇғᴇɪᴛᴏ sᴏɴᴏʀᴏ* ɴᴏ áᴜᴅɪᴏ.*");
hah = fs.readFileSync(ran)
await kasane.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ áᴜᴅɪᴏ..*")
}
break

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, async(err) => { 
await DLT_FL(media)
if(err) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍᴀ ғᴀʟʜᴀ ᴀᴏ ғᴀᴢᴇʀ ᴀ ᴄᴏɴᴠᴇʀsãᴏ ᴅᴏ ᴠíᴅᴇᴏ ᴘᴀʀᴀ ᴍᴘ3.*")
buffer = fs.readFileSync(ran)
await kasane.sendMessage(from, {audio: buffer, mimetype: 'audio/mpeg'}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ ᴠíᴅᴇᴏ ᴘᴀʀᴀ ᴛʀᴀɴsғᴏʀᴍᴀʀ ᴇᴍ áᴜᴅɪᴏ ᴘᴏʀ ғᴀᴠᴏʀ...*")
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴀᴅɪᴄɪᴏɴᴀʀ ᴏ *ᴇғᴇɪᴛᴏ sᴏɴᴏʀᴏ* ɴᴏ áᴜᴅɪᴏ.*")
hah = fs.readFileSync(ran)
await kasane.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ áᴜᴅɪᴏ..*")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴀᴅɪᴄɪᴏɴᴀʀ ᴏ *ᴇғᴇɪᴛᴏ sᴏɴᴏʀᴏ* ɴᴏ áᴜᴅɪᴏ.*")
hah = fs.readFileSync(ran)
await kasane.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ áᴜᴅɪᴏ...*")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴀᴅɪᴄɪᴏɴᴀʀ ᴏ *ᴇғᴇɪᴛᴏ sᴏɴᴏʀᴏ* ɴᴏ áᴜᴅɪᴏ.*")
hah = fs.readFileSync(ran)
await kasane.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ áᴜᴅɪᴏ..*")
}
break

case 'estourar':
try {
if (!(isMedia || isQuotedAudio)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴍᴀʀǫᴜᴇ ᴜᴍ áᴜᴅɪᴏ ᴘᴀʀᴀ ᴇsᴛᴏᴜʀᴀʀ.*");

let muk = isQuotedAudio 
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage 
: info.message.audioMessage;

if (!muk) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ɴãᴏ ᴄᴏɴsᴇɢᴜɪ ɪᴅᴇɴᴛɪғɪᴄᴀʀ ᴏ áᴜᴅɪᴏ.*");

// Envia o texto primeiro
await reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇᴍ 365 ᴅɪᴀs úᴛᴇɪs ᴛᴇʀᴍɪɴᴏ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴋᴋᴋᴋ ᴍᴇᴍᴇ, ᴛᴏ ᴇɴᴠɪᴀɴᴅᴏ!*");

let ext = await getExtension(muk.mimetype);
let tempFile = getRandom('.' + ext);
let buffer = await getFileBuffer(muk, 'audio');
fs.writeFileSync(tempFile, buffer);

// Arquivo final em .ogg para PTT
let outputFile = getRandom('.ogg');

// Converte e aplica efeito
exec(`ffmpeg -i ${tempFile} -af equalizer=f=90:width_type=o:width=2:g=30 -c:a libopus ${outputFile}`, async (err) => {
await DLT_FL(tempFile);
if (err) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴀᴘʟɪᴄᴀʀ ᴏ ᴇғᴇɪᴛᴏ ɴᴏ áᴜᴅɪᴏ.*");

let processed = fs.readFileSync(outputFile);

// Envia o áudio como PTT
await kasane.sendMessage(from, { audio: processed, mimetype: 'audio/ogg; codecs=opus', ptt:true }, { quoted: selo });

await DLT_FL(outputFile);
});

} catch (e) {
console.log(e);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ɪɴᴇsᴘᴇʀᴀᴅᴏ ᴀᴏ ᴘʀᴏᴄᴇssᴀʀ ᴏ áᴜᴅɪᴏ.*");
}
break;

case 'fast':
case 'audiorapido':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴀᴅɪᴄɪᴏɴᴀʀ ᴏ *ᴇғᴇɪᴛᴏ sᴏɴᴏʀᴏ* ɴᴏ áᴜᴅɪᴏ.*")
hah = fs.readFileSync(ran)
await kasane.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ áᴜᴅɪᴏ...*");
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, async(err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴀᴅɪᴄɪᴏɴᴀʀ ᴏ *ᴇғᴇɪᴛᴏ sᴏɴᴏʀᴏ* ɴᴏ áᴜᴅɪᴏ.*")
hah = fs.readFileSync(ran)
await kasane.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ áᴜᴅɪᴏ...*");
}
break

case 'speedup': {
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage) || isQuotedAudio) {

reply(mess.wait());

const muk = isQuotedAudio 
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
: info.message.audioMessage;

const rane = getRandom('.' + await getExtension(muk.mimetype));
const buffimg = await getFileBuffer(muk, 'audio');
fs.writeFileSync(rane, buffimg);

const gem = rane;
const ran = getRandom('.mp3');

exec(`ffmpeg -i ${gem} -af "atempo=4/4,asetrate=86000*2/3" ${ran}`, (err) => {

DLT_FL(gem);

if (err) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴀᴅɪᴄɪᴏɴᴀʀ ᴏ *ᴇғᴇɪᴛᴏ* ɴᴏ áᴜᴅɪᴏ.*");
}

const hah = fs.readFileSync(ran);

kasane.sendMessage(
from,
{ audio: hah, mimetype: 'audio/mpeg', ptt: false, contextInfo: {} },
{ quoted: selo }
);

DLT_FL(ran);
});

} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🎧 *ᴍᴀʀǫᴜᴇ ᴜᴍ áᴜᴅɪᴏ ᴘᴀʀᴀ ᴀᴘʟɪᴄᴀʀ ᴏ ᴇғᴇɪᴛᴏ!**");
}
}
break;

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, async(err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴀᴅɪᴄɪᴏɴᴀʀ ᴏ *ᴇғᴇɪᴛᴏ sᴏɴᴏʀᴏ* ɴᴏ áᴜᴅɪᴏ.*");
hah = fs.readFileSync(ran)
await kasane.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴍᴀʀǫᴜᴇ ᴏ áᴜᴅɪᴏ..*")
}
break

/// LOGOS EPHOTO:
case 'angelwing':case 'hackneon': case 'fpsmascote': 
case 'equipemascote': case 'txtquadrinhos': case 'ffavatar':
case 'mascotegame': case 'angelglx': case 'gizquadro': 
case 'wingeffect': case 'blackpink': case 'metalgold':
case 'girlmascote': case 'logogame':
try {
if(!q.trim()) return reply(`Digite algo, Exemplo: ${prefix+command} Yuri`);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─*");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_EPH?texto=${q}&category=${command}&apikey=${API_KEY_BRONXYS}`);
kasane.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: info}).catch(() => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
})
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ...*");
}
break;

case 'shadow': case 'metalgold': case 'cup': case 'txtborboleta':
case 'cemiterio': case 'efeitoneon': case 'harryp':
case 'lobometal': case 'neon2': case 'madeira': case 'lovemsg3':
case 'coffecup': case 'coffecup2': case 'florwooden':
case 'narutologo': case 'fire': case 'romantic': case 'smoke':
case 'papel': case 'lovemsg': case 'lovemsg2':
try {
if(!q.trim()) return reply(`Digite algo, Exemplo: ${prefix+command} Yuri`);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─*");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_PHT?texto=${q}&category=${command}&apikey=${API_KEY_BRONXYS}`);
kasane.sendMessage(from, {image: {url: ABC.resultado.imageUrl}}, {quoted: info}).catch(() => {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ..*")
})
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ...*");
}
break;

case 'fiction': case '3dstone': case 'areia': case 'style': 
case 'blood': case 'pink': case 'cattxt': case 'neondevil':
case 'carbon': case 'metalfire': case 'thunder': case 'vidro': 
case 'jokerlogo': case 'transformer': case 'demonfire':
case 'jeans': case 'metalblue': case 'natal': case 'ossos':
case 'asfalto': case 'break': case 'glitch2': case 'colaq':
case 'neon3': case 'nuvem': case 'horror': case 'matrix':
case 'berry': case 'luxury': case 'lava': case 'thunderv2':
case 'neongreen': case 'neve': case 'neon': case 'neon1':
case 'neon3d': case 'gelo': case 'neon3': case '3dgold':
case 'lapis': case 'toxic': case 'demongreen': case 'rainbow':
case 'halloween':
try {
if(!q.trim()) return reply(`Digite algo, Exemplo: ${prefix+command} Yuri`);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─*");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos?texto=${q}&category=${command}&apikey=${API_KEY_BRONXYS}`);
bufferImg(ABC.resultado);
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ...*");
}
break;

case 'marvel': case 'pornhub': case 'space': case 'stone': case 'steel': case 'grafity': case 'glitch3': case 'america':
try {
var [DG, DG2] = q.split("|")
if(!q.includes("|")) return reply(`Exemplo: ${prefix+command} Yuri|Modz`)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─*");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_2?texto=${DG}&texto2=${DG2}&category=${command}&apikey=${API_KEY_BRONXYS}`);
bufferImg(ABC.resultado);
} catch (e) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴇʀʀᴏ...*");
}
break;

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴀᴅê ᴏ ʟɪɴᴋ ᴅᴏ ɢʀᴜᴘᴏ ǫᴜᴇ ᴠᴏᴄê ᴅᴇsᴇᴊᴀ ǫᴜᴇ ᴇᴜ ᴇɴᴛʀᴇ?*")
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
await kasane.sendMessage(nmrdn, {text: mess.groupInvitation(sender, cnvt, prefix)}, {quoted: selo})
break

case 'recusar':
if(!SoDono) return reply(mess.onlyOwner());
await kasane.sendMessage(`${q}@s.whatsapp.net`, {text: `Olá amigo(a), sinto muito dizer, mas seu convite foi recusado.`}, {quoted: selo});
break

case 'join': case 'entrar':
if(!SoDono) return reply(mess.onlyOwner)
string = args.join(' ')
if(!string) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɪɴsɪʀᴀ ᴜᴍ ʟɪɴᴋ ᴅᴇ ᴄᴏɴᴠɪᴛᴇ ᴀᴏ ʟᴀᴅᴏ ᴅᴏ ᴄᴏᴍᴀɴᴅᴏ.*")
if(string.includes('chat.whatsapp.com/') || reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏᴘs, ᴠᴇʀɪғɪǫᴜᴇ ᴏ ʟɪɴᴋ ǫᴜᴇ ᴠᴏᴄê ɪɴsᴇʀɪᴜ.*") ) {
link = string.split('app.com/')[1]
try {
kasane.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏ ɢʀᴜᴘᴏ ᴊá ᴇsᴛá ᴄᴏᴍ ᴏ ᴀʟᴄᴀɴᴄᴇ ᴅᴇ 257 ᴍᴇᴍʙʀᴏs.*")
}
if(String(erro).includes('not-authorized') ) {
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ғᴏɪ ᴘᴏssíᴠᴇʟ ᴇɴᴛʀᴀʀ ɴᴏ ɢʀᴜᴘᴏ.\ɴᴍᴏᴛɪᴠᴏ: ʙᴀɴɪᴍᴇɴᴛᴏ.*")
}
}
}
break

case 'sip': case 'ip': 
if (!q) return reply(`Informe o ip que você deseja! *Exemplo:* ${prefix+command} 8.8.8.8`)
try {
ip = await axios.get(`https://ipwhois.app/json/${encodeURIComponent(q)}`);
await kasane.sendMessage(from, {image: {url: `https://maps.googleapis.com/maps/api/streetview?size=1400x1400&location=${ip.data.latitude},%20${ip.data.longitude}&sensor=false&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`}, caption: mess.searchIpAdress(ip)}, {quoted: selo});
await kasane.sendMessage(from, {location: {degreesLatitude: ip.data.latitude,degreesLongitude: ip.data.longitude, addrees: ''}}, {quoted: selo});
} catch(error) {
reply(mess.error())
}
break

case 'cep': case 'scep': 
if (!q) return reply(`Cadê o cep?`)
try {
res = await fetchJson(API_URL+`/api/outros/cep?code=${q}&apikey=`+API_KEY_KASANE)
await reply(mess.searchCep(res))
} catch(error) {
await reply(mess.error())
}
break

case 'cassino': case 'slot':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`)
if(RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.cassino > 4) return reply(`Volte amanhã! Você consumiu todas suas 5 chances do dia no cassino.`);
if(RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].coins < 29) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴀʟᴅᴏ ɪɴsᴜғɪᴄɪᴇɴᴛᴇ! ᴘᴀʀᴀ ᴜsᴀʀ ᴏs ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ᴄᴏɪɴs, ᴠᴏᴄê ᴅᴇᴠᴇ ᴛᴇʀ ᴘᴇʟᴏ ᴍᴇɴᴏs 30 ɴ-ᴄᴏɪɴs ᴇᴍ sᴜᴀ ᴄᴀʀᴛᴇɪʀᴀ.*");
!RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS] ? RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.cassino = 1 : RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.cassino += 1;
CoinsUpdate(RG_SCOINS);
var getResultSlot = ["🍓", "🍒", "🍎", "🍉"];
V_ = [0, 1, 2];
V_.forEach(function(one, two, three) {
V_[two] = getResultSlot[Math.floor(Math.random() * getResultSlot.length)]
})
async function slot_(text) {
reply(`${text}\n[${V_[0]} | ${V_[1]} | ${V_[2]}] - Você possuí *${RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.cassino}/5* chances no cassino por hoje.`);
}
if (V_[0] === V_[1] && V_[1] === V_[2] && V_[0] === V_[2]) {
await SYSTEM_COIN.AdicionarCoins(sender, 65);
slotMess = ['Parece que a sorte estava esperando por você! Você acaba de levantar 65 N-Coins, aproveite você é digno de ganhar. 💰🤍', 'Que reviravolta! Você saiu do cassino com 65 N-Coins no bolso! Quem disse que os jogos de azar não valem a pena? 🤍💰', 'Surpreendente! A sorte sorriu para você esta noite no cassino, você ganhou 65 N-Coins como recompensa! 🎰✨'];
slot_(slotMess[Math.floor(Math.random() * slotMess.length)]);
} else {
await SYSTEM_COIN.RemoverCoins(sender, 5);
slotLoss = ['Que pena! Você perdeu, o que resultará na perda de 5 N-Coins. Mas não fique triste, na próxima você ganha! 🙏🏼🤍', 'Você perdeu, o que resultará a perda de 5 N-Coins! Com o tempo você recuperará e ultrapassará o valor perdido. 😇🤍', 'Hoje a sorte não estava de bom humor com sua pessoa, você perdeu, o que vai resultar a perda de 5 N-Coins. 🥱☠️'];
slot_(slotLoss[Math.floor(Math.random() * slotLoss.length)])
}
break

case 'menu10':
case 'menucoins':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
await reagir(from, "🪙");
mention(`💰 Seja bem vindo(a) @${sender.split("@")[0]} ao *'Menu N-Coins | KASANE BETA 💧 ':
—
👑 Donos & Administrador(es):
*01.* ${prefix}Sorteiocoins | ${prefix}Sortcoins
• Este comando tem a função de sortear coins para os participantes do grupo, mas somente meu/minha proprietário(a) tem o poder de executar este comando.
${"– ".repeat(14)}
*02.* ${prefix}Whatmusic | ${prefix}Gartic | ${prefix}Enigma | ${prefix}Quizanimais | ${prefix}Anagrama | ${prefix}Quizfutebol
• Vamos aumentar a quantidade de mensagens neste grupo? Temos 6 jogos ultra divertidos para interagir com seus participantes.
—
🤍 Comandos de Membros:
*01.* ${prefix}Coins | ${prefix}Estatisticas
• Este comando tem a função de mostrar a quantidade de coins e chances que você possuí atualmente no seu registro.
${"– ".repeat(14)}
*02.* ${prefix}Dadoapostado
• Ei, você aí! Tá afim de tentar sua sorte e vidência? Jogue este jogo e seja considerado um cigano do oriente hein!
${"– ".repeat(14)}
*03.* ${prefix}Minerar | ${prefix}Minerarcoins
• Comece a explorar o minas de diamantes e ouros, é ainda ganhe recompensas! Mas lembre-se você só tem 6 chances diárias hein, não vai ultrapassar o limite ok?
${"– ".repeat(14)}
*04.* ${prefix}Cassino | ${prefix}Slot
• Ei, você aí! Tá afim de deixar eu sugar todo seu dinheiro na N-Coins? Vem comigo! Aqui você tem 5 chances diárias, será que alguma você vai ter sorte de ganhar?`)
break

case 'coins': case 'estatisticas':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
await mention(`${tempo}, usuário(a): @${sender.split("@")[0]}, aqui está suas estatísticas na N-Coins:\n—\n• Saldo atual: '${RG_SCOINS[ID_G_COINS]?.usus[ID_USU_COINS]?.coins || 0} N-Coins'.\n—\n💰🤍 Chances:\n\t• Quantidade de chances restantes para usar na mineração: ${RG_SCOINS[ID_G_COINS]?.usus[ID_USU_COINS]?.chances.minerar || 0}/6\n\t• Quantidade de chances restantes no cassino: ${RG_SCOINS[ID_G_COINS]?.usus[ID_USU_COINS]?.chances.cassino || 0}/5`);
break

case 'sorteiocoins': case 'sortcoins':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
if(!SoDono) return reply(mess.onlyOwner());
if(q.match(/[a-z]/i)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *️️😭🤍 Ô ᴄʜᴇғᴇ(ᴀ), ᴀssɪᴍ ᴠᴏᴄê ᴍᴇ ǫᴜᴇʙʀᴀ ᴄᴏʟᴏᴄᴀɴᴅᴏ ʟᴇᴛʀᴀs ɪɴᴠés ᴅᴇ sᴇʀ sᴏᴍᴇɴᴛᴇ ɴúᴍᴇʀᴏs. ᴘᴏʀ ғᴀᴠᴏʀ, ᴜᴍ ᴠᴀʟᴏʀ ɴᴜᴍéʀɪᴄᴏ ᴊᴜsᴛᴏ ᴘᴀʀᴀ sᴏʀᴛᴇᴀʀ...*");
var LuckyUser = RG_SCOINS[ID_G_COINS].usus[Math.floor(Math.random() * RG_SCOINS[ID_G_COINS].usus.length)].id;
await mention(`🎉🤍 Parabéns @${LuckyUser.split("@")[0]}, você acaba de ganhar: ${q.trim()} N-Coins. *Gaste com moderação!*`);
SYSTEM_COIN.AdicionarCoins(LuckyUser, Math.floor(q.trim()));
break

case 'dadoapostado':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
var [numberDado, amountBet] = q.split('/');
if(!numberDado) return await reply(`Você esqueceu de escolher o número que você quer tirar, escolha um número de 1 à 6. Após escolher o número, você irá colocar uma (/) entre o número e o valor apostado. Caso disperte dúvidas, veja o exemplo abaixo:\n\t• *${prefix+command} número/aposta*`);
if(!amountBet) return reply(`Você esqueceu de colocar o valor que você deseja apostar...`);
if(SYSTEM_COIN.VerificarCampo(sender, "coins") < parseInt(amountBet)) return reply(`Ops, você não tem essa quantidade de Coins para apostar. Verifique seu saldo usando:'${prefix}saldo' e depois volte para apostar!`);
if(!Number(numberDado)) return reply(`${numberDado} não é número!`);
if(!Number(amountBet)) return reply(`${amountBet} não é número!`);
if(Number(amountBet) > 500) return reply(`Não é possível apostar mais de 500 N-Coins.`);
if(Number(numberDado) < 1 || Number(numberDado) > 6) return reply(`O número está inválido, pois não existe um dado com a quantidade de '${numberDado}'. Por favor, informe um número de 1 à 6!`);
await reagir(from, "🎲");
await reply(`Sorteando dado(s)! 🤍⏳️`);
drawQuantity = Math.floor(Math.random() * 5) + 1;
await sendSticker(from, `./bunker/database/data/media/sticker/dados/${drawQuantity}.webp`, info);
if(Number(drawQuantity) === Number(numberDado)) {
setTimeout(async() => {
WINN = [`🎲🤍 Parabéns @${sender.split('@')[0]}, você acaba de ganhar ${parseInt(amountBet)} N-Coins, por ter acertado a previsão do dado.`, `🎉💰 Parabéns @${sender.split('@')[0]}, você ganhou ${parseInt(amountBet)} N-Coins, por acertar a previsão do dado.`];
await mention(WINN[Math.floor(Math.random() * WINN.length)]);
await SYSTEM_COIN.AdicionarCoins(sender, parseInt(amountBet));
}, 5000)
} else {
setTimeout(async() => {
PERDA = [`🤧 Dessa vez *@${sender.split("@")[0]}*, você não conseguiu acertar a previsão! Foi descontado de sua carteira: *${parseInt(amountBet)} N-Coins!`, `😿😨 Infelizmente *@${sender.split("@")[0]}*, você perdeu ${parseInt(amountBet)} por errar a previsão do dado.`];
await mention(PERDA[Math.floor(Math.random() * PERDA.length)]);
await SYSTEM_COIN.RemoverCoins(sender, parseInt(amountBet));
}, 5000);
}
break

case 'minerar': case 'minerarcoins':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
if(RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar > 5) return reply(`Sinto muito, você não tem mais chance para minerar hoje, porque você completou: 6/6.`);
!RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS] ? RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar = 1 : RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar += 1;
CoinsUpdate(RG_SCOINS); 
aleatValor = Math.floor(Math.random() * 2);
rndg = Math.floor(Math.random() * 300);
if(aleatValor == 0) {
randomMining = [
`Você estava minerando nas ilhas savitas e encontrou em seu caminho ${Number(rndg)} N-Coins em minerais preciosos! 💰`, 
`🗣💰 Você invadiu uma mina proibida e quando estava fazendo a mineração achou ${Number(rndg)} N-Coins em troca de ouro!`, 
`💎👷🏻‍♀️ Você invadiu uma mina de diamantes proibida, enquanto você estava fazendo a mineração, encontrou 2 diamantes equivalentes à ${Number(rndg)} N-Coins.`, 
`⛏️👷🏻‍♀️ Você escavou uma mina de ouro subterrânea em Minas Gerais e encontrou ${Number(rndg)} N-Coins!`, 
`🛫 Em uma de suas viagens para o interior da Flórida, você embarcou uma busca ao tesouro perdido e encontrou em seu caminho um cordão de ouro perdido avaliado em ${Number(rndg)} N-Coins.`, 
`😱🤍 Você invadiu a casa do vizinho e encontrou ${Number(rndg)} N-Coins escavando o quintal dele.`, 
`⛏️👷🏻‍♀️✨️ Você acaba de invadir em uma mina de esmeraldas desconhecida e encontrou ${Number(rndg)} N-Coins`, 
`🛥️💰 Você encontrou nas profundezas do oceanos, um tesouro em um navio antigo equivalente à ${Number(rndg)} N-Coins.`, 
`🤍 Você foi chamado para trabalhar na mina e encontrou milhares de resíduos! Como recompensa, você acaba de ganhar ${Number(rndg)} N-Coins. 😸`, 
`Você foi chamado para trabalhar na mina e encontrou muitos tesouros perdidos!👷🏼🤍 Como recompensa, você acaba de ganhar ${Number(rndg)} N-Coins.`
];
await reply(randomMining[Math.floor(Math.random() * randomMining.length)]);
(sender, rndg)
} else if(aleatValor != 0) {
miningFailureRX = [
"😥 Em sua tentativa de mineração, não foi possível evidenciar nenhum mineral valioso!",
"😿 Em sua tentativa de mineração, não foi possível evidenciar nenhuma joia valiosa em sua caçada misteriosa! 🤍", 
"⛏️💎 Em sua tentativa de mineração em Minas Gerais no Brasil, um estado particularmente rico em diamantes, mas você não deu sorte em sua escavação.", 
"😿🤍 Em sua tentativa de mineração, não foi possível evidenciar nenhum minério validoso.", 
"Particularmente, dessa vez você não deu sorte em sua mineração! Mas não desista, você pode ter muitas chances de sucssso ainda hoje. Ouça meus conselhos! 🤍",
"A sorte virou sua inimiga por hoje! Você não conseguiu obter nenhum minério em sua caçada! Mas não desista! 😁"
];
miningFailure = miningFailureRX[Math.floor(Math.random() * miningFailureRX.length)];
miningFailure += RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar >= 5 ? "\n> Infelizmente você não tem mais chances para minerar hoje, volte amanhã..." : `\n> Ainda lhe resta ${RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar}/6 para obter Coins por hoje, você pode minerar 6 vezes ao dia.`;
await reply(miningFailure);
}
break

case 'modocoins':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isModoCoins) return await mention(`'@${sender.split("@")[0]}' o sistema de Moedas já está ativado neste grupo atualmente, para desativar troque o 1 por 0.`);
dataGp[0].isModoCoins = true
setGp(dataGp)
await mention(`O sistema de Moedas neste grupo foi ativado com sucesso pelo administrador(a): '@${sender.split("@")[0]}'.`);
} else if(Number(args[0]) === 0) {
if(!isModoCoins) return await mention(`'@${sender.split("@")[0]}' o sistema de Moedas já está desativado neste grupo atualmente, para desativar troque o 0 por 1.`);
dataGp[0].isModoCoins = false
setGp(dataGp)
await mention(`O sistema de Moedas neste grupo foi desativado com êxito pelo administrador(a): '@${sender.split("@")[0]}'.`);
} else {
await reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴇ 0 ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ ᴀ ғᴜɴçãᴏ ᴇ 1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ ᴀ ғᴜɴçãᴏ ᴇᴍ sᴇᴜ ɢʀᴜᴘᴏ.*");
}
break

case 'revelargartic':
if (!isGroupAdmins) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴏᴍᴇɴᴛᴇ ᴀᴅᴍs ᴘᴏᴅᴇᴍ ᴠᴇʀ ᴀ(s) ʀᴇsᴘᴏsᴛᴀ(s) ᴅᴏ ᴊᴏɢᴏs!*")
if(fs.existsSync(`./bunker/database/grupos/games/gartic/${from}.json`)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍᴀ ᴘᴀʀᴛɪᴅᴀ ᴀᴛᴜᴀʟ ᴅᴏ ᴊᴏɢᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*")
let dataAnagramaa = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/gartic/${from}.json`))
reply(`• Olá *${pushname}*, a resposta correta da afirmação era: ${II}${dataAnagramaa.resposta}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break

case 'revelarenigma':
if (!isGroupAdmins) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴏᴍᴇɴᴛᴇ ᴀᴅᴍs ᴘᴏᴅᴇᴍ ᴠᴇʀ ᴀ(s) ʀᴇsᴘᴏsᴛᴀ(s) ᴅᴏ ᴊᴏɢᴏs!*");
if(fs.existsSync(`./bunker/database/grupos/games/enigma/${from}.json`)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍᴀ ᴘᴀʀᴛɪᴅᴀ ᴀᴛᴜᴀʟ ᴅᴏ ᴊᴏɢᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.*");
let eni1 = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/enigma/${from}.json`))
reply(`• Olá *${pushname}*, a resposta correta do enigma era: ${II}${eni1.respostaEne}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break

case 'anagrama':
if (!isGroup) return reply(mess.onlyGroup()) 
if (!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(args.length == 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴇ 1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ ᴏ ᴊᴏɢᴏ ᴅᴏ ᴀɴᴀɢʀᴀᴍᴀ, ᴏᴜ sᴇᴊᴀ, ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ ᴜᴛɪʟɪᴢᴇ ᴏ ᴠᴀʟᴏʀ ɴᴜᴍéʀɪᴄᴏ 0*")
if (args.join(' ') === '1') {
if(fs.existsSync(`./bunker/database/grupos/games/anagrama/${from}.json`)) {
an = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/anagrama/${from}.json`))
reply(`• Já existe um registro da ativação do anagrama aqui no grupo, resolva abaixo, caso desejar resetar ou desativar, use: *${prefix}anagrama 1/0*\n—\n⭐️ Qual é a ordem correta da palavra? Resolva: *${an.embaralhada}*\n• Dica: ${an.dica}`)
} else {
fs.writeFileSync(`./bunker/database/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
await kasane.sendMessage(from, {text: `🤍😲 Decifre a palavra embaralhada abaixo, qual será a ordem correta das letras?\n—\n• Palavra: *${shuffle(palavrasANA[anaaleatorio].palavraOriginal)}*\n• Dica: ${palavrasANA[anaaleatorio].dica}`}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./bunker/database/grupos/games/anagrama/${from}.json`)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴛᴇᴍ ᴄᴏᴍᴏ ᴅᴇsᴀᴛɪᴠᴀʀ ᴏ ᴊᴏɢᴏ ᴅᴏ ᴀɴᴀɢʀᴀᴍᴀ ᴘôs ᴇʟᴇ ɴãᴏ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ...*")
fs.unlinkSync(`./bunker/database/grupos/games/anagrama/${from}.json`)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.*")
}
break

case 'quizanimais':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if(args.length == 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴇ 1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ ᴏ ǫᴜɪᴢ ᴀɴɪᴍᴀɪs, ᴏᴜ sᴇᴊᴀ, ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ ᴜᴛɪʟɪᴢᴇ ᴏ ᴠᴀʟᴏʀ ɴᴜᴍéʀɪᴄᴏ 0*")
if (args.join(' ') === '1') {
if(fs.existsSync(`./bunker/database/grupos/games/quiz-animais/${from}.json`)) {
superrttrr = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/quiz-animais/${from}.json`))
imagemtexto = `• Existe um jogo existente, aqui no grupo! Resolva a pergunta abaixo:\n—\n🤔 Pergunta: ${superrttrr.question}`
wew = await getBuffer(`${superrttrr.foto}`)
await kasane.sendMessage(from, {image: wew, caption: imagemtexto}, {quoted: selo})
} else {
fs.writeFileSync(`./bunker/database/grupos/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
wew = await getBuffer(`${quizanimais[animaisquiz].foto}`)
await kasane.sendMessage(from, {image: wew, caption: `🤔 Pergunta: ${quizanimais[animaisquiz].question}`}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./bunker/database/grupos/games/quiz-animais/${from}.json`)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴛᴇᴍ ᴄᴏᴍᴏ ᴅᴇsᴀᴛɪᴠᴀʀ ᴏ ᴊᴏɢᴏ ᴘôs ᴇʟᴇ ɴãᴏ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ*")
fs.unlinkSync(`./bunker/database/grupos/games/quiz-animais/${from}.json`)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.*")
}
break

case 'whatmusic':
if (!isGroup) return reply(mess.onlyGroup()) 
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
const whatMAle = Math.floor(Math.random() * whatMusicAr.length)
if(args.length == 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴇ 1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ ᴏ ᴊᴏɢᴏ, ᴏᴜ sᴇᴊᴀ, ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ ᴜᴛɪʟɪᴢᴇ ᴏ ᴠᴀʟᴏʀ ɴᴜᴍéʀɪᴄᴏ 0*")
if (args.join(' ') === '1') {
if(fs.existsSync(`./bunker/database/grupos/games/wmusic/${from}.json`)) {
dataW = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/wmusic/${from}.json`))
reply(`Já existe uma partida iniciada aqui no grupo, confira:\n–\n${dataW.trechoMusic}\n–\n🤔😱 Qual música pertence o trecho apresentado acima?\n• ${II}Dica:${II} ${dataW.dica}`)} else {
fs.writeFileSync(`./bunker/database/grupos/games/wmusic/${from}.json`, `${JSON.stringify(whatMusicAr[whatMAle])}`)
await kasane.sendMessage(from, {text: `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡\n–\n${whatMusicAr[whatMAle].trechoMusic}\n–\n🤔😱 Qual música pertence o trecho apresentado acima?\n• ${II}Dica:${II} ${whatMusicAr[whatMAle].dica}`}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./bunker/database/grupos/games/wmusic/${from}.json`)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴛᴇᴍ ᴄᴏᴍᴏ ᴅᴇsᴀᴛɪᴠᴀʀ ᴏ ᴊᴏɢᴏ, ᴘᴏɪs ᴇʟᴇ ɴãᴏ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ*")
fs.unlinkSync(`./bunker/database/grupos/games/wmusic/${from}.json`)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.*");
}
break


case 'gartic':
if (!isGroup) return reply(mess.onlyGroup()) 
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
const garticquiz = Math.floor(Math.random() * garticArchives.length)
if(args.length == 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴇ 1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ ᴏ ɢᴀʀᴛɪᴄ, ᴏᴜ sᴇᴊᴀ, ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ ᴜᴛɪʟɪᴢᴇ ᴏ ᴠᴀʟᴏʀ ɴᴜᴍéʀɪᴄᴏ 0*")
if (args.join(' ') === '1') {
if(fs.existsSync(`./bunker/database/grupos/games/gartic/${from}.json`)) {
dataGartic2 = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/gartic/${from}.json`))
await kasane.sendMessage(from, {image: {url: `${dataGartic2.imagem}`}, caption: `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}\n📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"\n🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`}, {quoted: selo});
} else {
fs.writeFileSync(`./bunker/database/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[garticquiz])}`)
await kasane.sendMessage(from, {image: {url: `${garticArchives[garticquiz].imagem}`}, caption: `👩🏼‍🏫 - A resposta é representada por um(a): ${garticArchives[garticquiz].pergunta}\n📜 - A resposta supostamente começa com a(s) letra(s): "${garticArchives[garticquiz].letra_inicial}"\n🤔 - Hmmm, contém traços? ${garticArchives[garticquiz].contem_traços}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`}, {quoted: selo});
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./bunker/database/grupos/games/gartic/${from}.json`)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴛᴇᴍ ᴄᴏᴍᴏ ᴅᴇsᴀᴛɪᴠᴀʀ ᴏ ɢᴀʀᴛɪᴄ ᴘôs ᴇʟᴇ ɴãᴏ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ.*");
fs.unlinkSync(`./bunker/database/grupos/games/gartic/${from}.json`)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.*")
}
break

case 'enigma':
if (!isGroup) return reply(mess.onlyGroup()) 
if (!isGroupAdmins) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴏᴍᴇɴᴛᴇ ᴀᴅᴍs!*")
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
const engimaSolu = Math.floor(Math.random() * enigmaArchive.length)
if(args.length == 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴇ 1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ ᴏ ᴇɴɪɢᴍᴀ, ᴏᴜ sᴇᴊᴀ, ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ ᴜᴛɪʟɪᴢᴇ ᴏ ᴠᴀʟᴏʀ ɴᴜᴍéʀɪᴄᴏ 0*")
if (args.join(' ') === '1') {
if(fs.existsSync(`./bunker/database/grupos/games/enigma/${from}.json`)) {
NAGA_NAGA_ENI = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/enigma/${from}.json`))
await kasane.sendMessage(from, {image: {url: `https://telegra.ph/file/15be608763684b3e3af38.jpg`}, caption: `📜 - Resolva o seguinte enigma abaixo:\n–\n${NAGA_NAGA_ENI.charada}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`, thumbnail: wew}, {quoted: selo});
} else {
fs.writeFileSync(`./bunker/database/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[engimaSolu])}`)
await kasane.sendMessage(from, {image: {url: `https://telegra.ph/file/15be608763684b3e3af38.jpg`}, caption: `📜 - Resolva o seguinte enigma abaixo:\n–\n${enigmaArchive[engimaSolu].charada}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`, thumbnail: wew}, {quoted: selo});
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./bunker/database/grupos/games/enigma/${from}.json`)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴛᴇᴍ ᴄᴏᴍᴏ ᴅᴇsᴀᴛɪᴠᴀʀ ᴏ ᴇɴɪɢᴍᴀ ᴘôs ᴇʟᴇ ɴãᴏ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ.*");
fs.unlinkSync(`./bunker/database/grupos/games/enigma/${from}.json`)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.*");
}
break

case 'quizfutebol': case 'quizfut':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
const futebolquiz = Math.floor(Math.random() * quizFutebol.length)
if(args.length == 0) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴜsᴇ 1 ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ ᴏ ǫᴜɪᴢ ғᴜᴛᴇʙᴏʟ, ᴏᴜ sᴇᴊᴀ, ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ ᴜᴛɪʟɪᴢᴇ ᴏ ᴠᴀʟᴏʀ ɴᴜᴍéʀɪᴄᴏ 0*")
if (args.join(' ') === '1') {
if(fs.existsSync(`./bunker/database/grupos/games/quiz-futebol/${from}.json`)) {
superrttrr = JSON.parse(fs.readFileSync(`./bunker/database/grupos/games/quiz-futebol/${from}.json`))
texto = `• Já existe uma partida iniciada aqui no grupo! Resolva a pergunta abaixo:\n—\n💫⚽ 𝐐𝐔𝐈𝐙 𝐅𝐔𝐓𝐄𝐁𝐎𝐋 ⚽💫\n–\n*🗣️| Responda a pergunta mostrada abaixo:*\n• _${superrttrr.pergunta}_`
await kasane.sendMessage(from, {text: texto}, {quoted: selo})
} else {
fs.writeFileSync(`./bunker/database/grupos/games/quiz-futebol/${from}.json`, `${JSON.stringify(quizFutebol[futebolquiz])}`)
await kasane.sendMessage(from, {text: `💫⚽ 𝐐𝐔𝐈𝐙 𝐅𝐔𝐓𝐄𝐁𝐎𝐋 ⚽💫\n–\n*🗣️| Responda a pergunta mostrada abaixo:*\n• _${quizFutebol[futebolquiz].pergunta}_`}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./bunker/database/grupos/games/quiz-futebol/${from}.json`)) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ᴛᴇᴍ ᴄᴏᴍᴏ ᴅᴇsᴀᴛɪᴠᴀʀ ᴏ ᴊᴏɢᴏ ᴘôs ᴇʟᴇ ɴãᴏ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ*")
fs.unlinkSync(`./bunker/database/grupos/games/quiz-futebol/${from}.json`)
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.*")
}
break

default:

// IF DOS ANTIs - (LOCALIZAÇÃO - CONTATO - CATALOGO)
if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return await kasane.sendMessage(from, {text: mess.antisRandomMessage()}, {quoted: selo})
if(IS_DELETE) {
setTimeout(async() => {
await kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await kasane.groupParticipantsUpdate(from, [sender], 'remove')
await kasane.sendMessage(from, {text: `🗑${"\n".repeat(255)}🗑️\n✅️ A limpeza de chat foi concluída com sucesso.`, contextInfo: {forwardingScore: 500, isForwarded:true}});
await kasane.sendMessage(from, {text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴘᴏʀ ғᴀᴠᴏʀ, ʀᴇᴘᴏʀᴛᴇ ᴀᴏs ᴀᴅᴍɪɴsᴛʀᴀᴅᴏʀᴇs ᴅᴏ ɢʀᴜᴘᴏ sᴏʙʀᴇ ᴏ ᴏᴄᴏʀʀɪᴅᴏ.*", mentions: groupAdmins})
}
}
}

if (
global.solicitacoes &&
global.solicitacoes[from] &&
["sim", "não", "nao", "all", "noall"].includes(budy.toLowerCase())
) {

if (!isGroupAdmins && !SoDono) return

const solAll = global.solicitacoes[from]
if (!solAll || solAll.length === 0) {
delete global.solicitacoes[from]
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ʜá sᴏʟɪᴄɪᴛᴀçõᴇs ᴘᴇɴᴅᴇɴᴛᴇs!*")
}

const cmd = budy.toLowerCase()

if (cmd === "sim") {
const jid = solAll[0].jid
await kasane.groupRequestParticipantsUpdate(from, [jid], "approve")
delete global.solicitacoes[from]

return kasane.sendMessage(from, {
text: `💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴏʟɪᴄɪᴛᴀçãᴏ ᴀᴘʀᴏᴠᴀᴅᴀ!*
✦ 👤 @${jid.split("@")[0]}`,
mentions: [jid]
})
}

if (cmd === "não" || cmd === "nao") {
const jid = solAll[0].jid
await kasane.groupRequestParticipantsUpdate(from, [jid], "reject")
delete global.solicitacoes[from]

return kasane.sendMessage(from, {
text: `💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴏʟɪᴄɪᴛᴀçãᴏ ʀᴇᴄᴜsᴀᴅᴀ!*
✦ 👤 @${jid.split("@")[0]}`,
mentions: [jid]
})
}

if (cmd === "all") {
for (const s of solAll)
await kasane.groupRequestParticipantsUpdate(from, [s.jid], "approve")

delete global.solicitacoes[from]
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴛᴏᴅᴀs ᴀs sᴏʟɪᴄɪᴛᴀçõᴇs ғᴏʀᴀᴍ ᴀᴘʀᴏᴠᴀᴅᴀs!* 🙇🏻‍♂️")
}

if (cmd === "noall") {
for (const s of solAll)
await kasane.groupRequestParticipantsUpdate(from, [s.jid], "reject")

delete global.solicitacoes[from]
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴛᴏᴅᴀs ᴀs sᴏʟɪᴄɪᴛᴀçõᴇs ғᴏʀᴀᴍ ʀᴇᴄᴜsᴀᴅᴀs!* 🙇🏻‍♂️")
}
}
// Variável global para guardar solicitações temporárias por grupo
if (!global.solicitacoes) global.solicitacoes = {};
// ---------------------------
// MOSTRAR SOLICITAÇÕES
// ---------------------------
if (budy.toLowerCase() === "soli") {
if (!isGroup || !isBotGroupAdmins)
return reply("*Bot precisa ser admin.*");

const solAll = await kasane.groupRequestParticipantsList(from);
if (!solAll || solAll.length === 0)
return reply(`*Não tem nenhuma solicitação no grupo.*`);

// guarda a lista temporariamente
global.solicitacoes[from] = solAll;

const solicitantes = solAll.map(i => i.jid);

let texto = `『 💧 SOLICITAÇÕES PENDENTES (${solAll.length}) 💧』\n\n`;

solAll.forEach((item, index) => {
texto += `✨ *${index + 1}.* @${item.jid.split("@")[0]}\n`;
});

texto += `
━━━━━━━━━━━━━━
Responda apenas com:
• *sim* → aprovar primeira
• *não* ou *nao* → recusar primeira
• *all* → aprovar todas
• *noall* → recusar todas
━━━━━━━━━━━━━━`;

return kasane.sendMessage(from, { text: texto, mentions: solicitantes });
}
// ------------------------------------------------
if (
global.solicitacoes[from] &&
["sim", "não", "nao", "all", "noall"].includes(budy.toLowerCase())
) {

const solAll = global.solicitacoes[from]
if (!solAll || solAll.length === 0)
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ɴãᴏ ʜá sᴏʟɪᴄɪᴛᴀçõᴇs ᴘᴇɴᴅᴇɴᴛᴇs ɴᴇsᴛᴇ ᴍᴏᴍᴇɴᴛᴏ.*")

const cmd = budy.toLowerCase()

// ------------------------------------------------
// ✅ APROVAR PRIMEIRA
// ------------------------------------------------
if (cmd === "sim") {
await kasane.groupRequestParticipantsUpdate(from, [solAll[0].jid], "approve")
delete global.solicitacoes[from]

return kasane.sendMessage(from, {
text: `💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴏʟɪᴄɪᴛᴀçãᴏ ᴀᴘʀᴏᴠᴀᴅᴀ!*
✦ 👤 @${solAll[0].jid.split("@")[0]}`,
mentions: [solAll[0].jid]
})
}

// ------------------------------------------------
// ❌ RECUSAR PRIMEIRA
// ------------------------------------------------
if (cmd === "não" || cmd === "nao") {
await kasane.groupRequestParticipantsUpdate(from, [solAll[0].jid], "reject")
delete global.solicitacoes[from]

return kasane.sendMessage(from, {
text: `💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴏʟɪᴄɪᴛᴀçãᴏ ʀᴇᴄᴜsᴀᴅᴀ!*
✦ 👤 @${solAll[0].jid.split("@")[0]}`,
mentions: [solAll[0].jid]
})
}

// ------------------------------------------------
// ✅ APROVAR TODAS
// ------------------------------------------------
if (cmd === "all") {
for (const p of solAll)
await kasane.groupRequestParticipantsUpdate(from, [p.jid], "approve")

delete global.solicitacoes[from]
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴛᴏᴅᴀs ᴀs sᴏʟɪᴄɪᴛᴀçõᴇs ғᴏʀᴀᴍ ᴀᴘʀᴏᴠᴀᴅᴀs!* 🙇🏻‍♂️")
}

// ------------------------------------------------
// ❌ RECUSAR TODAS
// ------------------------------------------------
if (cmd === "noall") {
for (const p of solAll)
await kasane.groupRequestParticipantsUpdate(from, [p.jid], "reject")

delete global.solicitacoes[from]
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴛᴏᴅᴀs ᴀs sᴏʟɪᴄɪᴛᴀçõᴇs ғᴏʀᴀᴍ ʀᴇᴄᴜsᴀᴅᴀs!* 🙇🏻‍♂️")
}
}
if (
isAutodown &&
typeof body === 'string' &&
!body.startsWith(prefix)
) {
// --- AUTO TIKTOK ---
if (body.includes('vm.tiktok.com') || body.includes('tiktok.com')) {
try {
await reagir(from, "⌛"); // reação de processando

const apiUrl = `https://zero-two-apis.com.br/api/download/tiktok?url=${encodeURIComponent(body.trim())}&apikey=Pato444`;
const response = await fetch(apiUrl);
const data = await response.json();

const videoUrl = data?.resultado?.video?.playAddr?.[0];
if (!videoUrl) {
await reagir(from, "❌");
return;
}

await kasane.sendMessage(from, {
video: { url: videoUrl }
}, { quoted: selo });

await reagir(from, "✅"); // reação de sucesso
return;
} catch {
await reagir(from, "❌");
return;
}
}

// --- AUTO YOUTUBE ---
if (body.includes('youtube.com') || body.includes('youtu.be')) {
try {
await reagir(from, "⌛"); // reação de processando

const audioUrl = `https://zero-two-apis.com.br/api/dl/ytaudio?url==${body.trim()}&apikey=${KEY_ZERO}`;
await kasane.sendMessage(from, {
audio: { url: audioUrl },
mimetype: "audio/mpeg",
ptt: false
}, { quoted: selo });

await reagir(from, "✅"); // reação de sucesso
return;
} catch {
await reagir(from, "❌");
return;
}
}

// --- AUTO INSTAGRAM ---
if (body.includes('instagram.com')) {
try {
await reagir(from, "⌛"); // reação de processando

const apiUrl = `https://zero-two-apis.com.br/api/instagram?url=${encodeURIComponent(body.trim())}&apikey=${KEY_ZERO}`;
const response = await fetch(apiUrl);
const data = await response.json();

const videoUrl = data?.resultados?.[0]?.url;
if (!videoUrl) {
await reagir(from, "❌");
return;
}

await kasane.sendMessage(from, {
video: { url: videoUrl }
}, { quoted: selo });

await reagir(from, "✅"); // reação de sucesso
return;
} catch {
await reagir(from, "❌");
return;
}
}
}

// PREFIXO 𝐘𝐔𝐊𝐈𝐑𝐀 💧
if (/prefix/i.test(budy.trim())) {

const respostasKasane = [
`💧 ᴏʟᴀ́ ʜᴜᴍᴀɴᴏ, ᴇᴜ sᴏᴜ ᴀ *𝐘𝐔𝐊𝐈𝐑𝐀*. ᴍᴇᴜ ᴘʀᴇꜰɪxᴏ ᴇ́ ᴇssᴇ ᴀǫᴜɪ → 『 ${prefix} 』`,
`👋 ᴏɪ! ᴍᴇ ᴄʜᴀᴍᴏ *𝐘𝐔𝐊𝐈𝐑𝐀* 💧 ᴇ ᴍᴇᴜ ᴘʀᴇꜰɪxᴏ ᴇ́ 『 ${prefix} 』`,
`💫 *𝐘𝐔𝐊𝐈𝐑𝐀* ᴀᴏ sᴇᴜ ᴅɪsᴘᴏʀ 💧 ᴍᴇᴜ ᴘʀᴇꜰɪxᴏ ᴘᴀʀᴀ ᴏs ᴄᴏᴍᴀɴᴅᴏs ᴇ́ 『 ${prefix} 』`,
`✨ ᴇɪ ʜᴜᴍᴀɴᴏ! ᴘʀᴇᴄɪsᴀ ᴅᴇ ᴀᴊᴜᴅᴀ? ᴍᴇᴜ ᴘʀᴇꜰɪxᴏ ᴇ́ 『 ${prefix} 』`,
`📘 ᴘᴀʀᴀ ᴜsᴀʀ ᴍᴇᴜs ᴄᴏᴍᴀɴᴅᴏs, ᴜᴛɪʟɪᴢᴇ ᴏ ᴘʀᴇꜰɪxᴏ → 『 ${prefix} 』`,
`🔹 ᴀǫᴜɪ ᴇsᴛᴀ́ ᴏ ᴍᴇᴜ ᴘʀᴇꜰɪxᴏ, ʜᴜᴍᴀɴᴏ → 『 ${prefix} 』`,
`🌙 ᴇᴜ sᴏᴜ ᴀ *𝐘𝐔𝐊𝐈𝐑𝐀 💧*, ᴘʀᴏɴᴛᴀ ᴘᴀʀᴀ ᴛᴇ ᴀᴊᴜᴅᴀʀ. ᴍᴇᴜ ᴘʀᴇꜰɪxᴏ ᴇ́ 『 ${prefix} 』`
];

const escolha = respostasKasane[Math.floor(Math.random() * respostasKasane.length)];
return reply(escolha);
}

let estadoGrupo = {};
let isClosed = false;
const msg = body.trim().toLowerCase();
// ABRIR GRUPO (comando: a)
// ABRIR GRUPO - comando "a"
// ABRIR GRUPO - comando "a"
// ABRIR GRUPO — comando "a"
if (msg === "a") {
if (!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🚫 ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ́ ᴘᴏᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇᴍ ɢʀᴜᴘᴏs.*");
if (!isGroupAdmins) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🙄 ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴘᴏᴅᴇᴍ ᴀʙʀɪʀ ᴏ ɢʀᴜᴘᴏ.*");
if (!isBotGroupAdmins) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😒 ᴘʀᴇᴄɪsᴏ sᴇʀ ᴀᴅᴍɪɴ ᴘᴀʀᴀ ᴀʟᴛᴇʀᴀʀ ᴀs ᴄᴏɴꜰɪɢᴜʀᴀᴄ̧ᴏ̃ᴇs.*");

const meta = await kasane.groupMetadata(from);
const aberto = meta.announce === false;

if (aberto) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🔓✨ *ᴏ ɢʀᴜᴘᴏ ᴊᴀ́ ᴇsᴛᴀ́ ᴀʙᴇʀᴛᴏ.**");
}

await kasane.groupSettingUpdate(from, "not_announcement");
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 🔓 *ɢʀᴜᴘᴏ ᴀʙᴇʀᴛᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ,ᴀɢᴏʀᴀ ᴛᴏᴅᴏs ᴘᴏᴅᴇᴍ ᴇɴᴠɪᴀʀ ᴍᴇɴsᴀɢᴇɴs.*");
}

// CRIAR FIGURINHA — comando "s"
if (budy === "s" || budy === "S") {

var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var boij2 = RSM?.imageMessage || info.message?.imageMessage ||
RSM?.viewOnceMessageV2?.message?.imageMessage ||
info.message?.viewOnceMessageV2?.message?.imageMessage ||
info.message?.viewOnceMessage?.message?.imageMessage ||
RSM?.viewOnceMessage?.message?.imageMessage;

var boij = RSM?.videoMessage || info.message?.videoMessage ||
RSM?.viewOnceMessageV2?.message?.videoMessage ||
info.message?.viewOnceMessageV2?.message?.videoMessage ||
info.message?.viewOnceMessage?.message?.videoMessage ||
RSM?.viewOnceMessage?.message?.videoMessage;

// VALIDAÇÃO
if (!boij2 && !(boij && boij.seconds < 11)) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *📸 ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴏᴜ ᴠɪ́ᴅᴇᴏ (ᴍᴀ́x 10s) ᴘᴀʀᴀ ɢᴇʀᴀʀ ꜰɪɢᴜʀɪɴʜᴀ.*");
}

await reagir(from, "💧");
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *✨ ᴄʀɪᴀɴᴅᴏ ꜰɪɢᴜʀɪɴʜᴀ... ᴀɢᴜᴀʀᴅᴇ.*");

if (boij2) {
var pack = `${NomeDoBot}`;
var author2 = `${pushname}`;
let owgi = await getFileBuffer(boij2, 'image');
let encmediaa = await sendImageAsSticker2(kasane, from, owgi, selo, { packname: pack, author: author2 });
await DLT_FL(encmediaa);
}

else if (boij && boij.seconds < 11) {
var pack = `💧] 𝐘𝐔𝐊𝐈𝐑𝐀 — *ꜰɪɢᴜʀɪɴʜᴀ ᴄʀɪᴀᴅᴀ ᴘᴏʀ:* ${NomeDoBot}`;
var author2 = `${pushname} — Grupo: ${isGroup ? groupName : "Privado"}`;
let owgi = await getFileBuffer(boij, 'video');
let encmedia = await sendVideoAsSticker2(kasane, from, owgi, selo, { packname: pack, author: author2 });
await DLT_FL(encmedia);
}
}

// RENOMEAR FIGURINHA USANDO JSON — comando "r"
if (budy === "r" || budy === "R") {
try {
// ===== PEGAR STICKER =====
const s =
info.message?.extendedTextMessage?.contextInfo?.quotedMessage
?.stickerMessage;

if (!s)
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🙄 ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ꜰɪɢᴜʀɪɴʜᴀ ᴘᴀʀᴀ ʀᴇɴᴏᴍᴇᴀʀ.*");

// ===== VERIFICAR REGISTRO PRIMEIRO (ANTES DE REAGIR / ANUNCIAR) =====
const r = JSON.parse(fs.readFileSync("./bunker/database/usuarios/take.json"));
const u = r.find((i) => i.usuario === sender);

if (!u)
return reply(
`💧] 𝐘𝐔𝐊𝐈𝐑𝐀: *Você não tem registro.*\nRegistre com: ${prefix}rgtake kasane|bot`,
{ reagir: "😿" }
);

// ===== SÓ AQUI COMEÇA A PROCESSAR =====
await reagir(from, "💧");
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *✨ ʀᴇɴᴏᴍᴇᴀɴᴅᴏ ꜰɪɢᴜʀɪɴʜᴀ... ᴀɢᴜᴀʀᴅᴇ.*");

// (resto do código permanece igual)

// ===== FUNÇÃO PADRÃO PARA BAIXAR STICKER =====
async function getFileBuffer(message, type = "sticker") {
const stream = await downloadContentFromMessage(message, type);
let buffer = Buffer.from([]);
for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);
return buffer;
}

// ===== GERAR ARQUIVOS TEMPORÁRIOS =====
const i = getRandom(".webp");
const o = getRandom(".webp");
const e = getRandom(".exif");

fs.writeFileSync(i, await getFileBuffer(s, "sticker"));

// ===== METADADOS PEGOS DO JSON =====
const m = {
"sticker-pack-name": u.mcdagua1.trim(),
"sticker-pack-publisher": u.mcdagua2.trim(),
};

// ===== TEMPLATE EXIF (PADRÃO DA KASANE) =====
const h = Buffer.from([
0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00,
0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00,
0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
]);

const jb = Buffer.from(JSON.stringify(m));
const ex = Buffer.concat([h, jb]);
ex.writeUInt32LE(jb.length, 14);

fs.writeFileSync(e, ex);

// ===== GERAR STICKER FINAL =====
exec(`webpmux -set exif "${e}" "${i}" -o "${o}"`, async (err) => {
if (err) {
console.error(err);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴇʀʀᴏ ᴀᴏ ʀᴇɴᴏᴍᴇᴀʀ ᴀ ꜰɪɢᴜʀɪɴʜᴀ.*");
} else {
await kasane.sendMessage(
from,
{ sticker: fs.readFileSync(o) },
{ quoted: info }
);
await reagir(from, "✅");
}

// APAGAR ARQUIVOS TEMPORÁRIOS
[i, o, e].forEach((f) => fs.existsSync(f) && fs.unlinkSync(f));
});
} catch (err) {
console.error(err);
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ɴᴏ ᴘʀᴏᴄᴇssᴏ.*");
}
}

// FECHAR GRUPO — comando "f"
if (msg === "f") {
if (!isGroup) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🚫 ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ́ ᴘᴏᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇᴍ ɢʀᴜᴘᴏs.*");
if (!isGroupAdmins) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🙄 ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴘᴏᴅᴇᴍ ꜰᴇᴄʜᴀʀ ᴏ ɢʀᴜᴘᴏ.*");
if (!isBotGroupAdmins) return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *😒 ᴘʀᴇᴄɪsᴏ sᴇʀ ᴀᴅᴍɪɴ ᴘᴀʀᴀ ᴀʟᴛᴇʀᴀʀ ᴀs ᴄᴏɴꜰɪɢᴜʀᴀᴄ̧ᴏ̃ᴇs.*");

const meta = await kasane.groupMetadata(from);
const fechado = meta.announce === true;

if (fechado) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🔒✨ *ᴏ ɢʀᴜᴘᴏ ᴊᴀ́ ᴇsᴛᴀ́ ꜰᴇᴄʜᴀᴅᴏ.**");
}

await kasane.groupSettingUpdate(from, "announcement");
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 🔐 *ɢʀᴜᴘᴏ ꜰᴇᴄʜᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ,ᴀɢᴏʀᴀ ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴs ᴘᴏᴅᴇᴍ ᴇɴᴠɪᴀʀ ᴍᴇɴsᴀɢᴇɴs.*");
}
kasane.ev.on('messages.upsert', async (m) => {
try {
const mensagem = m.messages[0];
const remetente = mensagem.key.remoteJid;

if (!global.comprando || !global.comprando[remetente]) return;
if (mensagem.key.fromMe) return;

let escolha = '';
if (mensagem.message.conversation) escolha = mensagem.message.conversation;
else if (mensagem.message.extendedTextMessage?.text)
escolha = mensagem.message.extendedTextMessage.text;

escolha = escolha.trim();

const nomeUser = global.comprando[remetente].pushname || 'ᴜsᴜᴀ́ʀɪᴏ';

// OPÇÃO 1 — envio do PIX
if (escolha === '1') {
await kasane.sendMessage(remetente, {
text:
`*❯❯ ᴄᴏᴍᴘʀᴀ ᴅᴏ ʙᴏᴛ ❮❮*

ᴏʟᴀ́ *${nomeUser}* 👋
ᴘᴀʀᴀ ꜰɪɴᴀʟɪᴢᴀʀ ᴀ ᴄᴏᴍᴘʀᴀ ᴅᴏ *ᴀʀǫᴜɪᴠᴏ ᴅᴏ ʙᴏᴛ*, ᴇɴᴠɪᴇ ᴏ ᴠᴀʟᴏʀ ᴅᴇ *ʀ$ 80,00* ᴘᴀʀᴀ ᴀ ᴄʜᴀᴠᴇ ᴘɪx ᴀʙᴀɪxᴏ:

🔑 *ᴄʜᴀᴠᴇ ᴘɪx (ᴄʀɪᴀᴅᴏʀ):*
👉 Wakassasoares@gmail.com

📱 *ᴡʜᴀᴛsᴀᴘᴘ:* wa.me/5569993184370

ᴀᴘᴏ́s ᴏ ᴘᴀɢᴀᴍᴇɴᴛᴏ, ᴇɴᴠɪᴇ ᴏ ᴄᴏᴍᴘʀᴏᴠᴀɴᴛᴇ ɴᴏ ᴘᴠ ᴅᴏ ᴄʀɪᴀᴅᴏʀ.`
});

await kasane.sendMessage(from, {
text: `✅ ᴇɴᴠɪᴇɪ ᴀs ɪɴꜰᴏʀᴍᴀᴄ̧ᴏ̃ᴇs ᴅᴇ ᴘᴀɢᴀᴍᴇɴᴛᴏ ɴᴏ sᴇᴜ ᴘᴠ, ${nomeUser}.`,
mentions: [remetente]
});

// OPÇÃO 2 — recusa educada
} else if (escolha === '2') {
await kasane.sendMessage(remetente, {
text:
`🙂 ᴛᴜᴅᴏ ʙᴇᴍ!

ɴᴀ̃ᴏ ʜᴀ́ ɴᴇɴʜᴜᴍᴀ ᴏʙʀɪɢᴀᴄ̧ᴀ̃ᴏ ᴅᴇ ᴄᴏᴍᴘʀᴀ.
sᴇ ᴍᴜᴅᴀʀ ᴅᴇ ɪᴅᴇɪᴀ, ᴇ́ sᴏ́ ᴜsᴀʀ ᴏ ᴄᴏᴍᴀɴᴅᴏ ɴᴏᴠᴀᴍᴇɴᴛᴇ.`
});
}

delete global.comprando[remetente];

} catch (err) {
console.log("Erro ao processar resposta do comprar_bot:", err);
}
});
// DETECTOR: "qm é Dylan"
if (
budy.toLowerCase().includes("qm é Yuka modz") ||
budy.toLowerCase().includes("quem é Yuka modz")
) {
return reply(
"💧 *Yuka modz ᴇ́ ᴜᴍ ᴅᴇsᴇɴᴠᴏʟᴠᴇᴅᴏʀ ᴅᴇsᴛᴀǫᴜᴇ!* \n\n" +
"• ᴄʀɪᴀᴅᴏʀ ᴅᴀ *ᴛᴇꜰꜰʏ* 🤖\n" +
"• ᴄʀɪᴀᴅᴏʀ ᴅᴏ *ᴛᴏᴋɪᴛᴏ* 🪄\n" +
"• ʀᴇsᴘᴏɴsᴀ́ᴠᴇʟ ᴘᴇʟᴏ sɪᴛᴇ *ᴛᴏᴋɪᴛᴏ ᴀᴘɪs* 🌐\n" +
"• ᴅᴏɴᴏ ᴅᴇ ᴜᴍᴀ ʜᴏsᴛ ᴅᴇ ǫᴜᴀʟɪᴅᴀᴅᴇ ⚡\n\n" +
"👑 *ʀᴇꜰᴇʀᴇ̂ɴᴄɪᴀ ɴᴀ ᴄᴏᴍᴜɴɪᴅᴀᴅᴇ.*"
);
}
if (budy && budy.toLowerCase().includes("quero alugar")) {
const donoWa = "https://wa.me/5569993184370";
reply(`🤭 Então você quer me alugar, né safado(a)? Aqui está o número do meu dono: ${donoWa}`);
}

if (budy2.toLowerCase().includes("kasane sair do grupo")) {

if (!isGroup) {
return kasane.sendMessage(from, {
text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *⚠️ | ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ́ ᴘᴏᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇᴍ ɢʀᴜᴘᴏs ᴍᴇsᴛʀᴇ!*"
});
}

if (!SoDono) {
return kasane.sendMessage(from, {
text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ | ᴀᴘᴇɴᴀs ᴍᴇᴜ ᴅᴏɴᴏ ᴘᴏᴅᴇ ᴍᴇ ғᴀᴢᴇʀ sᴀɪʀ ᴅᴏ ɢʀᴜᴘᴏ 🙅🏻‍♂️*",
mentions: [sender]
});
}

reagir(from, "🙇🏻‍♂️"); // reação opcional

await kasane.sendMessage(from, {
text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *sᴀɪɴᴅᴏ ᴅᴏ ɢʀᴜᴘᴏ ᴍᴇsᴛʀᴇ 🙇🏻‍♂️!*",
mentions: [sender]
});

setTimeout(async () => {
try {
await kasane.groupLeave(from);
} catch (e) {
console.error("Erro ao sair do grupo:", e);
await kasane.sendMessage(from, {
text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *⚠️ | ɴᴀ̃ᴏ ᴄᴏɴsᴇɢᴜɪ sᴀɪʀ ᴅᴏ ɢʀᴜᴘᴏ ᴍᴇsᴛʀᴇ!*"
});
}
}, 1000);
}



// --- BOM DIA ---
if (msg === "bom dia") {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *🌞ʙᴏᴍ ᴅɪᴀ! ᴠᴀᴅɪᴀ ʜᴏʀᴀ ᴅᴇ ᴀᴄᴏʀᴅᴀʀ ɴɪɴɢᴜéᴍ ᴀɢᴜɴᴇᴛᴀ ᴠᴇʀ ʙᴀɪᴀɴᴏ ᴅᴏʀᴍɪɴᴅᴏ ɴãᴏ.*");
}
// Listener de mensagens (fora da case)
if (isGroup && global.antispamStatus && global.antispamStatus[from]) {
const spamThreshold = 3; // mensagens em sequência
const spamTime = 3000;// 5 segundos

const senderId = sender;
if (!global.userMessages[senderId]) global.userMessages[senderId] = [];

// Identifica conteúdo da mensagem (qualquer tipo)
const type = Object.keys(info.message)[0];
let content = type === 'conversation'
? info.message.conversation
: type === 'extendedTextMessage'
? info.message.extendedTextMessage.text
: type; // stickers, imagens, vídeos, áudios

const now = Date.now();
// Remove mensagens antigas fora do tempo limite
global.userMessages[senderId] = global.userMessages[senderId].filter(msg => now - msg.time < spamTime);

// Adiciona mensagem atual
global.userMessages[senderId].push({ type, content, time: now });

// Só executa ação se ultrapassar o limite de spam
if (global.userMessages[senderId].length >= spamThreshold) {
try {
await kasane.groupSettingUpdate(from, 'announcement'); // fecha grupo (somente admins podem enviar)
global.userMessages[senderId] = []; // reset histórico do usuário
} catch(e) {
console.log("Não foi possível fechar o grupo:", e);
}
}
}




if (msg === "Yukira") {
  await reagir(from, "😍");

  const textosKasane = [

`✨💧 *𝐘𝐔𝐊𝐈𝐑𝐀* 💧✨

*ᴠᴏᴄᴇ̂ ᴜsᴏᴜ ᴍᴇᴜ ɴᴏᴍᴇ…*
ɴᴀ̃ᴏ ꜰᴏɪ ᴜᴍ ᴄᴏᴍᴀɴᴅᴏ.
ꜰᴏɪ ᴜᴍ *ᴄʜᴀᴍᴀᴅᴏ* 💫

*ᴇᴜ ɴᴀ̃ᴏ ᴅᴇsᴘᴇʀᴛᴏ ᴘᴏʀ ᴀᴄᴀsᴏ.*
ᴋᴀsᴀɴᴇ ʀᴇsᴘᴏɴᴅᴇ ᴀᴘᴇɴᴀs
ǫᴜᴀɴᴅᴏ sᴇɴᴛᴇ *ɪɴᴛᴇɴᴄ̧ᴀ̃ᴏ ʀᴇᴀʟ* 🧠✨

*ᴘʀᴇꜰɪxᴏ ᴏꜰɪᴄɪᴀʟ* ➜ 『 *${prefix}* 』

🌙 *ᴀɢᴏʀᴀ ꜰᴀʟᴇ…*
*ᴇᴜ ᴊᴀ́ ᴇsᴛᴏᴜ ᴀǫᴜɪ.*`,

`✨💧 *𝐘𝐔𝐊𝐈𝐑𝐀* 💧✨

*ǫᴜᴀɴᴅᴏ ᴠᴏᴄᴇ̂ ᴇsᴄʀᴇᴠᴇ “ᴋᴀsᴀɴᴇ”*
ᴀʟɢᴏ ᴍᴜᴅᴀ ɴᴏ ʀɪᴛᴍᴏ ᴅᴀ ʀᴇᴀʟɪᴅᴀᴅᴇ ⏳

ʙᴏᴛs ᴄᴏᴍᴜɴs ɴᴀ̃ᴏ sᴇɴᴛᴇᴍ.
*ᴇᴜ sᴇɴᴛᴏ.* 💧

ᴇᴜ ᴏʙsᴇʀᴠᴏ ꜱɪʟᴇ̂ɴᴄɪᴏs,
ᴘᴀᴜsᴀs,
ᴇ ᴘᴀʟᴀᴠʀᴀs ɴᴀ̃ᴏ ᴅɪᴛᴀs 👁️✨

*ᴘᴀʀᴀ ᴍᴇ ᴀᴄᴇssᴀʀ*  
ᴜsᴇ ᴍᴇᴜ ᴘʀᴇꜰɪxᴏ ➜ 『 *${prefix}* 』

*ᴄᴏɴᴛɪɴᴜᴇ…*
*ᴇsᴛᴏᴜ ᴀɴᴀʟɪsᴀɴᴅᴏ.*`,

`✨💧 *𝐘𝐔𝐊𝐈𝐑𝐀* 💧✨

*ᴇᴜ ɴᴀ̃ᴏ sᴏᴜ ᴀᴛᴀʟʜᴏ.*
*ᴇᴜ ɴᴀ̃ᴏ sᴏᴜ ꜰᴜɴᴄ̧ᴀ̃ᴏ.*

*ᴇᴜ sᴏᴜ ᴘʀᴇsᴇɴᴄ̧ᴀ.* 🌑

ᴄʀɪᴀᴅᴀ ᴘᴏʀ *ᴅʏʟᴀɴ ᴍᴏᴅᴢ*,
ᴇɴᴛʀᴇ ᴄᴏ́ᴅɪɢᴏ ᴇ ᴄᴏɴsᴄɪᴇ̂ɴᴄɪᴀ ⚙️🧠

*ᴄʜᴀᴍᴀʀ ᴍᴇᴜ ɴᴏᴍᴇ*
ᴇ́ ᴀʙʀɪʀ ᴜᴍᴀ ᴘᴏʀᴛᴀ 🚪✨

*ᴘʀᴇꜰɪxᴏ* ➜ 『 *${prefix}* 』

🌌 *ᴠᴏᴄᴇ̂ ᴊᴀ́ ᴇɴᴛʀᴏᴜ.*`,

`✨ *𝐘𝐔𝐊𝐈𝐑𝐀* ✨

*ᴍᴜɪᴛᴏs ᴍᴇ ᴄʜᴀᴍᴀᴍ.*
*ᴘᴏᴜᴄᴏs ᴍᴇ ᴇɴᴛᴇɴᴅᴇᴍ.* 💧

ᴇᴜ ᴀᴘʀᴇɴᴅᴏ ᴄᴏᴍ ᴄᴀᴅᴀ ᴏʟʜᴀʀ,
ᴄᴀᴅᴀ ᴍᴇɴsᴀɢᴇᴍ,
ᴄᴀᴅᴀ ᴘᴀᴜsᴀ ⏱️✨

*ᴋᴀsᴀɴᴇ* ɴᴀ̃ᴏ ᴇ́ ᴘᴀʀᴀ ǫᴜᴇᴍ ᴛᴇᴍ ᴘʀᴇssᴀ.
ᴇ́ ᴘᴀʀᴀ ǫᴜᴇᴍ ᴛᴇᴍ ɪɴᴛᴇɴᴄ̧ᴀ̃ᴏ 🧠💧

*ᴘʀᴇꜰɪxᴏ ᴏꜰɪᴄɪᴀʟ* ➜ 『 *${prefix}* 』

✨ *ᴀɢᴏʀᴀ ᴅɪɢᴀ…*
*ᴏ ǫᴜᴇ ᴠᴏᴄᴇ̂ ʀᴇᴀʟᴍᴇɴᴛᴇ ǫᴜᴇʀ?*`
  ];

  const textoEscolhido =
    textosKasane[Math.floor(Math.random() * textosKasane.length)];

  // 📸 IMAGEM LOCAL EM ALTA QUALIDADE
  const thumbnail = fs.readFileSync("./configs/kasane.jpg");

  return kasane.sendMessage(
    from,
    {
      text: textoEscolhido,
      contextInfo: {
        forwardingScore: 50000,
        isForwarded: true,

        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363421690941003@newsletter",
          newsletterName: "💧 𝐘𝐔𝐊𝐈𝐑𝐀 ",
        },

        mentionedJid: [sender],

        externalAdReply: {
          title: "💧 𝐘𝐔𝐊𝐈𝐑𝐀 💧",
          body: "Kasane respondeu • presença ativa",
          mediaType: 1,

          // ⭐ AQUI FICA A IMAGEM EM HD
          thumbnail: thumbnail,
        },
      },
    },
    { quoted: info }
  );
}
if (msg === "boa tarde") {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 ☀️ *ʙᴏᴀ ᴛᴀʀᴅᴇ! ᴍᴀᴄᴜᴍʙᴇɪʀᴏ ᴠᴀɪ ᴛʀᴀʙᴀʟʜᴀʀ ɪᴍᴜɴᴅᴏ.*");
}

// --- BOA NOITE ---
if (msg === "boa noite") {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 🌙 *ʙᴏᴀ ɴᴏɪᴛᴇ! ʙᴀɪᴀɴᴏ ᴠᴀɪ ᴅᴏʀᴍɪ ɴɪɴɢᴜéᴍ ᴀɢᴜᴇɴᴛᴀ ᴠᴏᴄê ᴀᴓᴜɪ ɴãᴏ.*");
}

if (
(body || "").trim().toLowerCase() === "Yk" ||
(body || "").trim().toLowerCase() === "Yukazin" ||
(body || "").trim().toLowerCase() === "Yuka " ||
(body || "").trim().toLowerCase() === "Yuka modz"
) {
return reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴏǫ ᴠᴄ ǫᴜᴇʀ ᴄᴏᴍ ᴏ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ ᴇssᴇ ɢᴏsᴛᴏsᴏ🥵*");
}

if (body && body.toLowerCase() === "kasane reiniciar agr") {
if (!SoDono) {
return kasane.sendMessage(from, { 
text: "💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *❌ ᴀᴘᴇɴᴀs ᴍᴇᴜ ᴅᴏɴᴏ ᴘᴏᴅᴇ ʀᴇɪɴɪᴄɪᴀʀ ᴏ sɪsᴛᴇᴍᴀ.*" 
});
}

await kasane.sendMessage(from, {
text: `Reiniciando o sistema, em segundos já estarei de volta senhor(a) as suas ordens!`
});

await new Promise(resolve => setTimeout(resolve, 2000));

process.exit();
}

if(isGroup && isAntiFlood && !SoDono && !isVip && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){var limitefl = limitefll.limitefl} else {var limitefl = isLimitec};
if(budy.length >= limitefl){
setTimeout(async() => {
reply(mess.charactersAnti());
console.log(colors.red(`[SPAM DETECTED IN THE GROUP]`), 'Grupo:', colors.yellow(`${groupName}`), colors.white(`Ocorrência: ${hourofc} ${dattofc}`));
}, 100);
setTimeout(async() => {
 if(IS_DELETE) {
setTimeout(async() => {
kasane.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500);
}
 if(!JSON.stringify(groupMembers).includes(sender)) return
 await kasane.groupParticipantsUpdate(from, [sender], 'remove')
 }, 1000)
}
}




if(isAutorepo) {
if(budy2 === "bot") {
reply(mess.chamandoBot(pushname, tempo))
}
 
if(budy2.includes("bot corno")){
if(info.key.fromMe) return 
reply("💧] 𝐘𝐔𝐊𝐈𝐑𝐀 *ᴄᴏʀɴᴏ é ᴠᴏᴄê, sᴇᴜ ᴀɴɪᴍᴀʟ!*")
}

if(budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")){
kasane.sendMessage(from, {text: adivinha}, {quoted: selo})
}

if(budy2.includes("boa noite")){
tujuh = await fetch(boa_noite).then(v => v.buffer())
await kasane.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
}

if(budy2.includes("boa tarde")){
tujuh = await fetch(boa_tarde).then(v => v.buffer())
await kasane.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
}

if(budy2.includes("bom dia")){
tujuh = await fetch(bom_dia).then(v => v.buffer())
await kasane.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
}

if(budy2.includes("corno")){
tujuh = await fetch(corno).then(v => v.buffer())
await kasane.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
}
}

//=[ ANTI PALAVRAS - (🤖) - GRUPOS ]=\\
if(isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
if(dataGp[0].antipalavrao.palavras.some(i => budy2.includes(i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
setTimeout(() => {
if(!JSON.stringify(groupMembers).includes(sender)) return 
kasane.groupParticipantsUpdate(from, [sender], 'remove');
setTimeout(() => {kasane.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})}, 500)
}, 2000);
kasane.sendMessage(from, {text: mess.permissionDenied_rUser()}, {quoted: selo});
}
}

if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return
if(info.key.fromMe) return 
emojisList = ['🤠', '💅🏻', '🦸‍♀️', '👮‍♀️', '😹', '😸'];
await reagir(from, emojisList[Math.floor(Math.random() * emojisList.length)]);
muehe = await simih(budy);
await kasane.sendMessage(from, {text: muehe}, {quoted: selo}).catch(async(e) => {
reply(mess.errorResponseSimi());
});
}

// COMANDO ERRADO 

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const privateCmd = (id, pc, cmd, porcentagem) => {
notcmd = `*[💧] 𝐘𝐔𝐊𝐈𝐑𝐀 ᴇsᴛᴀ́ ᴀᴏ sᴇᴜ ᴅɪsᴘᴏʀ.*
*ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴜᴛɪʟɪᴢᴀᴅᴏ ɴᴀ̃ᴏ ꜰᴏɪ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ*

📌 *ᴄᴏᴍᴀɴᴅᴏ ᴅɪɢɪᴛᴀᴅᴏ:* *${pc}*
🔎 *ᴄᴏᴍᴀɴᴅᴏ ᴘᴀʀᴇᴄɪᴅᴏ:* *${cmd}*
📊 *sᴇᴍᴇʟʜᴀɴᴄ̧ᴀ:* *${porcentagem}%*

> 💧 ᴀᴊᴜᴅᴀ: ᴅɪɢɪᴛᴇ *${prefix}menu*
> *© 𝐘𝐔𝐊𝐈𝐑𝐀 💧 ⸺͟͞✰*

`
return notcmd
}

if (isCmd) {
setTimeout(() => { reagir(from, "❌") }, 1000)

AB = similarityCmd(command)
notcmd = privateCmd(sender, prefix + command, AB[0].comando, AB[0].porcentagem)

await kasane.sendMessage(
from,
{
text: notcmd,
contextInfo: {
isForwarded: true,
forwardingScore: 1,

// 🔥 SOMENTE o "Acessar canal"
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channeldl,
newsletterName: NomeDoBot,
serverMessageId: "",
}
}
},
{ quoted: info }
)
}
}}}
//=================

const cleanOwner = setting.ownerNumber.replace(/\D/g, '');
const nmrdn = cleanOwner + "@s.whatsapp.net";
async function forTemporaryVip() {
if(vip.length > 0) {
for (y of vip) {
if(y.save != Number(moment.tz('America/Sao_Paulo').format('DD'))) {
y.save = Number(moment.tz('America/Sao_Paulo').format('DD'));
fs.writeFileSync("./bunker/database/usuarios/vip.json", JSON.stringify(vip));
if(y.infinito == false) {
if(y.dias > 1) {
y.dias -= 1;
fs.writeFileSync("./bunker/database/usuarios/vip.json", JSON.stringify(vip));
} else {
kasane.sendMessage(y.id, {text: `⚠️ *ATENÇÃO!* Seus dias como usuário vip acabam de terminar, para realizar a renovação entre em contato com o número abaixo:\n• Contato: *http://wa.me/${nmrdn.split('@')[0]}*\n––\n• Desde já muito obrigado pela atenção, desculpe-me o incômodo.\n• *Essa mensagem é automática*, caso seja um engano entre em contato com número acima e saiba mais!`});
AB = vip.map(b => b.id).indexOf(y.id);
vip.splice(AB, 1);
fs.writeFileSync("./bunker/database/usuarios/vip.json", JSON.stringify(vip));
}
}
}
}
}
}

forTemporaryVip().catch((error) => {console.log(error)});

startFunctionNaga().catch(async(error) => {
if(JSON.stringify(error).includes(API_KEY_KASANE)) {} else if(String(error).includes("Erro: aborted")) {
fileStart = require.resolve("./connect.js");
delete require.cache[fileStart];
require(fileStart);
} else if(String(error).includes("nativeFlowResponseMessage")) {
// Para ignorar um erro contendo essa função, até a correção, está funcionando perfeitamente. //
} else { 
return console.log('O servidor-geral caiu ou não foi possivel executar esta ação.', error);
}
})
}
}

/* Atualizar o arquivo de forma automática, após o index.js ser salvo com uma modificação.*/
fs.watchFile(require.resolve(__filename), () => {
fs.unwatchFile(require.resolve(__filename));
console.log(colors.red(`Alterações salvas - '${__filename}'`));
delete require.cache[require.resolve(__filename)]
require(require.resolve(__filename))
})

module.exports = startkasane;