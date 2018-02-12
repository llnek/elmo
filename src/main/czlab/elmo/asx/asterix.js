/*Auto generated by Kirby v1.0.0 - Mon Feb 12 2018 00:06:29 GMT-0800 (PST)
  czlab.elmo.core.asx

*/

const kirbystdlibref = require("kirby");
const __module_namespace__ = "czlab.elmo.core.asx";
var SEED = atom(0);
const Health = cc.Class.extend({
  ctor: function(health) {
    (
    this.origHP = health);
    return (this["HP"] = this.origHP);
  },
  hurt: function(damage, from) {
    (
    this.HP -= (((typeof (damage) === "number")) ?
      damage :
      1));
    return this;
  }
});
const UIObj = cc.Class.extend({
  inflate: function() {
    let GS__2 = Array.prototype.slice.call(arguments, 0);
    let options = kirbystdlibref.getIndex(GS__2, 0);
    let GS__3 = options;
    let x = kirbystdlibref.getProp(GS__3, "x");
    let y = kirbystdlibref.getProp(GS__3, "y");
    let deg = kirbystdlibref.getProp(GS__3, "deg");
    return (this.sprite ?
      (function() {
        if (( (typeof (x) === "number") )) {
          this.sprite.setPosition(x, y);
        }
        if (( (typeof (deg) === "number") )) {
          this.sprite.setRotation(deg);
        }
        if (( (typeof (scale) === "number") )) {
          this.sprite.setScale(scale);
        }
        return this.sprite.setVisible(true);
      }).call(this) :
      null);
  },
  deflate: function() {
    return (this.sprite ?
      (function() {
        this.sprite.unscheduleAllCallbacks();
        this.sprite.stopAllActions();
        return this.sprite.setVisible(false);
      }).call(this) :
      null);
  },
  height: function() {
    let ____args = Array.prototype.slice.call(arguments);
    return (this.sprite ?
      this.sprite.getContentSize().height :
      0);
  },
  width: function() {
    let ____args = Array.prototype.slice.call(arguments);
    return (this.sprite ?
      this.sprite.getContentSize().width :
      0);
  },
  setPos: function() {
    let ____args = Array.prototype.slice.call(arguments);
    return (this.sprite ?
      this.sprite.setPosition(____args[0], ____args[1]) :
      null);
  },
  pos: function() {
    let ____args = Array.prototype.slice.call(arguments);
    return (this.sprite ?
      this.sprite.getPosition() :
      cc.p(0, 0));
  },
  size: function() {
    let ____args = Array.prototype.slice.call(arguments);
    return (this.sprite ?
      this.sprite.getContentSize() :
      cc.size(0, 0));
  },
  pid: function() {
    let ____args = Array.prototype.slice.call(arguments);
    return (this.sprite ?
      this.sprite.getTag() :
      0);
  },
  ctor: function(s) {
    return (this["sprite"] = s);
  }
});
////////////////////////////////////////////////////////////////////////////////
//fn: [l10nInit] in file: asterix.ky, line: 61
const l10nInit = function(table) {
  LZString.toLocaleString(table);
  (
  LZString.locale = cc.sys.language);
  return (LZString.defaultLocale = "en");
};
////////////////////////////////////////////////////////////////////////////////
//fn: [l10n] in file: asterix.ky, line: 67
const l10n = function(s) {
  let pms = Array.prototype.slice.call(arguments, 1);
  let t = s.toLocaleString();
  return (not_DASH_empty(pms) ?
    Mustache.render(t, pms) :
    t);
};
const _STAR_game_DASH_modes_STAR = {
  ONE: 1,
  TWO: 2,
  NET: 3
};
const _STAR_ws_DASH_uri_STAR = "/network/odin/websocket";
////////////////////////////////////////////////////////////////////////////////
//fn: [fire] in file: asterix.ky, line: 77
const fire = function(topic, msg) {
  return (function() {
    let GS__4 = cc.director.getRunningScene();
    let r = GS__4;
    return ((((typeof (GS__4) === "undefined")) || ((GS__4 === null))) ?
      null :
      r.ebus.fire(topic, (msg || {})));
  }).call(this);
};
////////////////////////////////////////////////////////////////////////////////
//fn: [getLevelCfg] in file: asterix.ky, line: 82
const getLevelCfg = function(cfg, level) {
  return get_DASH_in(cfg, ["levels", level, "cfg"]);
};
////////////////////////////////////////////////////////////////////////////////
//fn: [isIntersect] in file: asterix.ky, line: 84
const isIntersect = function(a1, a2) {
  return (!((a1.left > a2.right) || (a2.left > a1.right) || (a1.top < a2.bottom) || (a2.top < a1.bottom)));
};
////////////////////////////////////////////////////////////////////////////////
//fn: [outOfBound] in file: asterix.ky, line: 91
const outOfBound = function(a, B) {
  return ((a && B) ?
    ((a.left > B.right) || (a.top < B.bottom) || (a.right < B.left) || (a.bottom > B.top)) :
    null);
};
////////////////////////////////////////////////////////////////////////////////
//fn: [calcXY] in file: asterix.ky, line: 99
const calcXY = function(angle, hypot) {
  let GS__5 = (((angle >= 0) && (angle <= 90)) ?
    (function() {
      let t = degToRad((90 - angle));
      return [t, Math.cos(t), Math.sin(t), 1];
    }).call(this) :
    (((angle >= 90) && (angle <= 180)) ?
      (function() {
        let t = degToRad((angle - 90));
        return [t, Math.cos(t), (-1 * Math.sin(t)), 2];
      }).call(this) :
      (((angle >= 180) && (angle <= 270)) ?
        (function() {
          let t = degToRad((270 - angle));
          return [t, (-1 * Math.cos(t)), (-1 * Math.sin(t)), 3];
        }).call(this) :
        (((angle >= 270) && (angle <= 360)) ?
          (function() {
            let t = degToRad((angle - 270));
            return [t, (-1 * Math.cos(t)), Math.sin(t), 4];
          }).call(this) :
          null))));
  let t = kirbystdlibref.getIndex(GS__5, 0);
  let x = kirbystdlibref.getIndex(GS__5, 1);
  let y = kirbystdlibref.getIndex(GS__5, 2);
  let q = kirbystdlibref.getIndex(GS__5, 3);
  return [(x * hypot), (y * hypot), q];
};
////////////////////////////////////////////////////////////////////////////////
//fn: [normalizeDeg] in file: asterix.ky, line: 124
const normalizeDeg = function(deg) {
  return ((deg > 360) ?
    (deg % 360) :
    ((deg < 0) ?
      (360 - ((-1 * deg) % 360)) :
      deg));
};
////////////////////////////////////////////////////////////////////////////////
//fn: [hh] in file: asterix.ky, line: 131
const hh = function(r) {
  return (r.height * 0.5);
};
////////////////////////////////////////////////////////////////////////////////
//fn: [hw] in file: asterix.ky, line: 134
const hw = function(r) {
  return (r.width * 0.5);
};
////////////////////////////////////////////////////////////////////////////////
//fn: [radToDeg] in file: asterix.ky, line: 137
const radToDeg = function(rad) {
  return (180 * (rad / Math.PI));
};
////////////////////////////////////////////////////////////////////////////////
//fn: [degToRad] in file: asterix.ky, line: 140
const degToRad = function(deg) {
  return (deg * (Math.PI / 180));
};
////////////////////////////////////////////////////////////////////////////////
//fn: [getImage] in file: asterix.ky, line: 143
const getImage = function(cfg, key) {
  return fixUrl(get_DASH_in(cfg, ["assets", "images", key]));
};
////////////////////////////////////////////////////////////////////////////////
//fn: [getPList] in file: asterix.ky, line: 146
const getPList = function(cfg, key) {
  return fixUrl(get_DASH_in(cfg, ["assets", "plists", key]));
};
////////////////////////////////////////////////////////////////////////////////
//fn: [getSheet] in file: asterix.ky, line: 149
const getSheet = function(cfg, key) {
  return fixUrl(get_DASH_in(cfg, ["assets", "sheets", key]));
};
////////////////////////////////////////////////////////////////////////////////
//fn: [getSfx] in file: asterix.ky, line: 152
const getSfx = function(cfg, key) {
  return fixUrl(get_DASH_in(cfg, ["assets", "sounds", key]));
};
////////////////////////////////////////////////////////////////////////////////
//fn: [getTile] in file: asterix.ky, line: 155
const getTile = function(cfg, key) {
  return fixUrl(get_DASH_in(cfg, ["assets", "tiles", key]));
};
////////////////////////////////////////////////////////////////////////////////
//fn: [getFont] in file: asterix.ky, line: 158
const getFont = function(cfg, key) {
  return fixUrl(get_DASH_in(cfg, ["assets", "fonts", key]));
};
////////////////////////////////////////////////////////////////////////////////
//fn: [toggleSfx] in file: asterix.ky, line: 161
const toggleSfx = function(cfg) {
  let GS__6 = Array.prototype.slice.call(arguments, 1);
  let override_QMRK = kirbystdlibref.getIndex(GS__6, 0);
  return update_DASH_in_BANG(cfg, ["sound", "open"], function() {
    let ____args = Array.prototype.slice.call(arguments);
    return (((typeof (override_QMRK) !== "undefined")) ?
      override_QMRK :
      (!____args[0]));
  });
};
////////////////////////////////////////////////////////////////////////////////
//fn: [sfxPlayMusic] in file: asterix.ky, line: 167
const sfxPlayMusic = function(cfg, key) {
  let GS__7 = Array.prototype.slice.call(arguments, 2);
  let options = kirbystdlibref.getIndex(GS__7, 0);
  return (get_DASH_in(cfg, ["sound", "open"]) ?
    (function() {
      let GS__8 = options;
      let vol = kirbystdlibref.getProp(GS__8, "vol");
      let repeat_QMRK = kirbystdlibref.getProp(GS__8, "repeat?");
      if (( (typeof (vol) === "number") )) {
        sfxMusicVol(vol);
      }
      return cc.audioEngine.playMusic(getSfx(cfg, key), repeat_QMRK);
    }).call(this) :
    null);
};
////////////////////////////////////////////////////////////////////////////////
//fn: [sfxPlayEffect] in file: asterix.ky, line: 175
const sfxPlayEffect = function(cfg, key) {
  let GS__9 = Array.prototype.slice.call(arguments, 2);
  let options = kirbystdlibref.getIndex(GS__9, 0);
  return (get_DASH_in(cfg, ["sound", "open"]) ?
    (function() {
      let GS__10 = options;
      let vol = kirbystdlibref.getProp(GS__10, "vol");
      let repeat_QMRK = kirbystdlibref.getProp(GS__10, "repeat?");
      if (( (typeof (vol) === "number") )) {
        sfxMusicVol(vol);
      }
      return cc.audioEngine.playEffect(getSfx(cfg, key), repeat_QMRK);
    }).call(this) :
    null);
};
////////////////////////////////////////////////////////////////////////////////
//fn: [sfxMusicVol] in file: asterix.ky, line: 183
const sfxMusicVol = function(cfg, vol) {
  return ((get_DASH_in(cfg, ["sound", "open?"]) && ((typeof (vol) === "number"))) ?
    cc.audioEngine.setMusicVolume(vol) :
    null);
};
////////////////////////////////////////////////////////////////////////////////
//fn: [sfxCancel] in file: asterix.ky, line: 189
const sfxCancel = function() {
  cc.audioEngine.stopMusic();
  return cc.audioEngine.stopAllEffects();
};
////////////////////////////////////////////////////////////////////////////////
//fn: [sfxInit] in file: asterix.ky, line: 194
const sfxInit = function(cfg) {
  update_DASH_in_BANG(cfg, ["sound", "open?"], function() {
    let ____args = Array.prototype.slice.call(arguments);
    return true;
  });
  return sfxMusicVol(cfg, get_DASH_in(cfg, ["sound", "volume"]));
};
////////////////////////////////////////////////////////////////////////////////
//fn: [fixUrl] in file: asterix.ky, line: 199
const fixUrl = function(url) {
  return (cc.sys.isNative ?
    sanitizeUrlForDevice(url) :
    sanitizeUrlForWeb(url));
};
////////////////////////////////////////////////////////////////////////////////
//fn: [sanitizeUrlForDevice] in file: asterix.ky, line: 204
const sanitizeUrlForDevice = function(url) {
  return Mustache.render((url.match(/^res\//) ?
    (contains_QMRK(url, "/sfx/") ?
      (function() {
        let ss = url.split("/");
        let t = kirbystdlibref.getProp(ss, 1);
        (ss[1] = "sfx", ss[2] = t);
        return ss.join("/");
      }).call(this) :
      url.slice(4)) :
    (url.match(/^game/) ?
      ["src", url.slice(4)].join("") :
      null)), {
    "border-tiles": get_DASH_in(cfg, ["game", "borderTiles"]),
    "lang": get_DASH_in(cfg, ["game", "lang"]),
    "color": get_DASH_in(cfg, ["game", "color"]),
    "appid": kirbystdlibref.getProp(cfg, "appid")
  });
};
////////////////////////////////////////////////////////////////////////////////
//fn: [sanitizeUrlForWeb] in file: asterix.ky, line: 221
const sanitizeUrlForWeb = function(url) {
  return Mustache.render((url.match(/^game/) ?
    ["{{{gamesource-ref}}}/", url].join("") :
    (url.match(/^res/) ?
      ["{{{media-ref}}}/", url].join("") :
      null)), {
    "border-tiles": get_DASH_in(cfg, ["game", "borderTiles"]),
    "gamesource-ref": "/public/ig/lib",
    "media-ref": "/public/ig",
    "lang": get_DASH_in(cfg, ["game", "lang"]),
    "color": get_DASH_in(cfg, ["game", "color"]),
    "appid": kirbystdlibref.getProp(cfg, "appid")
  });
};
////////////////////////////////////////////////////////////////////////////////
//fn: [throttle] in file: asterix.ky, line: 236
const throttle = function(func, wait) {
  let GS__11 = Array.prototype.slice.call(arguments, 2);
  let options = kirbystdlibref.getIndex(GS__11, 0);
  let timeout = null;
  let previous = 0;
  let GS__12 = options;
  let leading = kirbystdlibref.getProp(GS__12, "leading");
  let trailing = kirbystdlibref.getProp(GS__12, "trailing");
  let context,
    args,
    result;
  let later = function() {
    (previous = (((leading === false)) ?
      0 :
      nowMillis()), timeout = null, result = func.apply(context, args));
    return ((!timeout) ?
      (function() {
        return (context = null, args = null);
      }).call(this) :
      null);
  };
  return function() {
    let now = nowMillis();
    let remaining;
    if ( ((!previous) && ((leading === false))) ) {
      (
      previous = now);
    }
    (remaining = (wait - (now - previous)));
    (args = arguments, context = this);
    if ( ((remaining <= 0) || (remaining > wait)) ) {
      clearTimeout(timeout);
      (timeout = null, previous = now, result = func.apply(context, args));
      if ( (!timeout) ) {
        (context = null, args = null);
      } else {
        null;
      }
    } else {
      if ( ((!timeout) && (false !== trailing)) ) {
        (
        timeout = setTimeout(later, remaining));
      } else {
        null;
      }
    }
    return result;
  };
};
const ____macros = {
  "defclass": "(macro* defclass (name parent & more) (syntax-quote (const (unquote name) (.extend (unquote parent) (object (splice-unquote more))))))"
};
module.exports = {
  da57bc0172fb42438a11e6e8778f36fb: {
    ns: "czlab.elmo.core.asx",
    macros: ____macros
  },
  Health: Health,
  UIObj: UIObj,
  l10nInit: l10nInit,
  l10n: l10n,
  _STAR_game_DASH_modes_STAR: _STAR_game_DASH_modes_STAR,
  _STAR_ws_DASH_uri_STAR: _STAR_ws_DASH_uri_STAR,
  fire: fire,
  getLevelCfg: getLevelCfg,
  isIntersect: isIntersect,
  outOfBound: outOfBound,
  calcXY: calcXY,
  normalizeDeg: normalizeDeg,
  hh: hh,
  hw: hw,
  radToDeg: radToDeg,
  degToRad: degToRad,
  getImage: getImage,
  getPList: getPList,
  getSheet: getSheet,
  getSfx: getSfx,
  getTile: getTile,
  getFont: getFont,
  toggleSfx: toggleSfx,
  sfxPlayMusic: sfxPlayMusic,
  sfxPlayEffect: sfxPlayEffect,
  sfxMusicVol: sfxMusicVol,
  sfxCancel: sfxCancel,
  sfxInit: sfxInit,
  fixUrl: fixUrl,
  sanitizeUrlForDevice: sanitizeUrlForDevice,
  sanitizeUrlForWeb: sanitizeUrlForWeb,
  throttle: throttle
};