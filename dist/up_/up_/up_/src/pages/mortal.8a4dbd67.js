// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"krjzp":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "bbf494f48a4dbd67";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ecQ0h":[function(require,module,exports) {
const mobileMenuBtn = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav__bar");
const body = document.querySelector("body");
const GetRaceBtn = document.querySelector(".get__race");
const seletedRace = document.querySelector(".race__name");
const formSection = document.querySelector(".form__section");
const loadingSection = document.querySelector(".loading");
const seletedRaceSetion = document.querySelector(".seleted__race");
const resultsImgs = document.querySelector(".images__container");
const addonsCheckboxes = document.querySelectorAll(".addons");
const shuffleImgsContainer = document.querySelector(".shuffle");
const getMortalRace = ()=>{
    let races = [
        "High Elfs",
        "Dark Elves",
        "Lizardmen",
        "Skaven"
    ];
    addonsCheckbox(races);
    let randomIdx = Math.floor(Math.random() * races.length);
    let seletedRaceName = races[randomIdx];
    seletedRace.textContent = seletedRaceName;
    getFlagImgs(seletedRaceName);
};
const addonsCheckbox = (races)=>{
    addonsCheckboxes.forEach((checkbox)=>{
        if (!checkbox.checked) races.push(checkbox.name);
    });
};
const shuffing = ()=>{
    const flags = [
        require("../images/Beastmen/Slaughterhorn_Tribe.png"),
        require("../images/vampire coast/awakend.png"),
        require("../images/vampire coast/Dreadfleet.png"),
        require("../images/vampire coast/Drowned.png"),
        require("../images/vampire coast/Sartosa.png"),
        require("../images/Tomb Kings/Court_of_Lybaras.png"),
        require("../images/Tomb Kings/Exiles_of_Nehek.png"),
        require("../images/Tomb Kings/Followers_of_Nagash.png"),
        require("../images/Tomb Kings/Khemri.png"),
        require("../images/The Empire/The_Huntsmarshals_Expedition.png"),
        require("../images/Wood Elves/Heralds_of_Ariel.png"),
        require("../images/Dark Elves/Cult_of_Pleasure.png"),
        require("../images/Dark Elves/Naggarond.png"),
        require("../images/Dark Elves/The_Blessed_Dread.png"),
        require("../images/Dark Elves/The_Thousand_Maws.png"),
        require("../images/Dark Elves/Wh2_main_def_hag_graef_crest.png"),
        require("../images/Dark Elves/Wh2_main_def_har_ganeth_crest.png"),
        require("../images/Lizardmen/Cult_of_Sotek.png"),
        require("../images/Lizardmen/Ghosts_of_Pahaux.png"),
        require("../images/Lizardmen/Hexoatl.png"),
        require("../images/Lizardmen/Last_Defenders.png"),
        require("../images/Lizardmen/Spirit_of_the_Jungle.png"),
        require("../images/Lizardmen/Wh2_main_lzd_itza_crest.png"),
        require("../images/Lizardmen/Wh2_main_lzd_tlaqua_crest.png"),
        require("../images/High Elves/Avelorn.png"),
        require("../images/High Elves/Eataine.png"),
        require("../images/High Elves/Knights_of_Caledor.png"),
        require("../images/High Elves/Nagarythe.png"),
        require("../images/High Elves/Order_of_Loremasters.png"),
        require("../images/High Elves/Yvresse.png"),
        require("../images/Skaven/Clan_Rictus.png"),
        require("../images/Skaven/Clan_Skryre.png"),
        require("../images/Skaven/Wh2_main_skv_clan_eshin_crest.png"),
        require("../images/Skaven/Wh2_main_skv_clan_mors_crest.png"),
        require("../images/Skaven/Wh2_main_skv_clan_moulder_crest.png"),
        require("../images/Skaven/Wh2_main_skv_clan_pestilens_crest.png"),
        require("../images/Greenskins/Broken_Axe.png"),
        require("../images/The Empire/The_Golden_Order.png"),
        require("../images/The Empire/Reikland.png"),
        require("../images/Wood Elves/Argwylon.png"),
        require("../images/Wood Elves/Wargrove_of_Woe.png"),
        require("../images/Wood Elves/Wood_Elves.png"),
        require("../images/Greenskins/Crooked_Moon.png"),
        require("../images/Greenskins/Greenskins.png"),
        require("../images/Greenskins/The_Bloody_Handz.png"),
        require("../images/chaos/Warriors_of_Chaos.png"),
        require("../images/Norsca/Norsca.png"),
        require("../images/Norsca/Wintertooth.png"), 
    ];
    let count = 0;
    while(count < 5){
        let randomImg = flags[Math.floor(Math.random() * flags.length)];
        shuffleImgsContainer.innerHTML += `<img src="${randomImg}" alt="" class="shuffle__imgs">`;
        count++;
    }
    setInterval(()=>{
        const shuffleImgs = document.querySelectorAll(".shuffle__imgs");
        let randomImg = shuffleImgs[Math.floor(Math.random() * shuffleImgs.length)];
        shuffleImgs.forEach((img)=>img.classList.remove("anim")
        );
        randomImg.classList.add("anim");
    }, 1000);
};
const hiddenSections = ()=>{
    formSection.classList.add("hidden");
    loadingSection.classList.remove("hidden");
    setTimeout(()=>{
        shuffing();
    }, 100);
    setTimeout(()=>{
        loadingSection.classList.add("hidden");
        seletedRaceSetion.classList.remove("hidden");
    }, 5000);
};
const getFlagImgs = (seletedRace)=>{
    switch(seletedRace){
        case "Beastmen":
            const beastmenFlags = [
                require("../images/Beastmen/Beastmen.png"),
                require("../images/Beastmen/Slaughterhorn_Tribe.png"),
                require("../images/Beastmen/Harbinger_of_Disaster.png"),
                require("../images/Beastmen/Wh_dlc05_bst_beastmen_morghur_herd_crest.png"), 
            ];
            beastmenFlags.forEach((flag)=>{
                resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
            });
            break;
        case "Vampire Coast":
            {
                const vampireCoastFlags = [
                    require("../images/vampire coast/awakend.png"),
                    require("../images/vampire coast/Dreadfleet.png"),
                    require("../images/vampire coast/Drowned.png"),
                    require("../images/vampire coast/Sartosa.png"), 
                ];
                vampireCoastFlags.forEach((flag)=>{
                    resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
                });
                break;
            }
        case "Tomb Kings":
            {
                const tombKingsFlags = [
                    require("../images/Tomb Kings/Court_of_Lybaras.png"),
                    require("../images/Tomb Kings/Exiles_of_Nehek.png"),
                    require("../images/Tomb Kings/Followers_of_Nagash.png"),
                    require("../images/Tomb Kings/Khemri.png"), 
                ];
                tombKingsFlags.forEach((flag)=>{
                    resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
                });
                break;
            }
        case "The Empire":
            {
                const theEmpireFlags = [
                    require("../images/The Empire/The_Huntsmarshals_Expedition.png"),
                    require("../images/The Empire/The_Golden_Order.png"),
                    require("../images/The Empire/Reikland.png"), 
                ];
                theEmpireFlags.forEach((flag)=>{
                    resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
                });
                break;
            }
        case "Wood Elfs":
            {
                const woodElfsFlags = [
                    require("../images/Wood Elves/Heralds_of_Ariel.png"),
                    require("../images/Wood Elves/Argwylon.png"),
                    require("../images/Wood Elves/Wargrove_of_Woe.png"),
                    require("../images/Wood Elves/Wood_Elves.png"), 
                ];
                woodElfsFlags.forEach((flag)=>{
                    resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
                });
                break;
            }
        case "Greenskins":
            {
                const greenskinsFlags = [
                    require("../images/Greenskins/Broken_Axe.png"),
                    require("../images/Greenskins/Crooked_Moon.png"),
                    require("../images/Greenskins/Greenskins.png"),
                    require("../images/Greenskins/The_Bloody_Handz.png"), 
                ];
                greenskinsFlags.forEach((flag)=>{
                    resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
                });
                break;
            }
        case "High Elfs":
            {
                const highElfsFlags = [
                    require("../images/High Elves/Avelorn.png"),
                    require("../images/High Elves/Eataine.png"),
                    require("../images/High Elves/Knights_of_Caledor.png"),
                    require("../images/High Elves/Nagarythe.png"),
                    require("../images/High Elves/Order_of_Loremasters.png"),
                    require("../images/High Elves/Yvresse.png"), 
                ];
                highElfsFlags.forEach((flag)=>{
                    resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
                });
                break;
            }
        case "Dark Elfs":
            {
                const darkElfsFlags = [
                    require("../images/Dark Elves/Cult_of_Pleasure.png"),
                    require("../images/Dark Elves/Naggarond.png"),
                    require("../images/Dark Elves/The_Blessed_Dread.png"),
                    require("../images/Dark Elves/The_Thousand_Maws.png"),
                    require("../images/Dark Elves/Wh2_main_def_hag_graef_crest.png"),
                    require("../images/Dark Elves/Wh2_main_def_har_ganeth_crest.png"), 
                ];
                darkElfsFlags.forEach((flag)=>{
                    resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
                });
                break;
            }
        case "Skaven":
            {
                const skavenFlags = [
                    require("../images/Skaven/Clan_Rictus.png"),
                    require("../images/Skaven/Clan_Skryre.png"),
                    require("../images/Skaven/Wh2_main_skv_clan_eshin_crest.png"),
                    require("../images/Skaven/Wh2_main_skv_clan_mors_crest.png"),
                    require("../images/Skaven/Wh2_main_skv_clan_moulder_crest.png"),
                    require("../images/Skaven/Wh2_main_skv_clan_pestilens_crest.png"), 
                ];
                skavenFlags.forEach((flag)=>{
                    resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
                });
                break;
            }
        case "Lizardmen":
            {
                const lizardmenFlags = [
                    require("../images/Lizardmen/Cult_of_Sotek.png"),
                    require("../images/Lizardmen/Ghosts_of_Pahaux.png"),
                    require("../images/Lizardmen/Hexoatl.png"),
                    require("../images/Lizardmen/Last_Defenders.png"),
                    require("../images/Lizardmen/Spirit_of_the_Jungle.png"),
                    require("../images/Lizardmen/Wh2_main_lzd_itza_crest.png"),
                    require("../images/Lizardmen/Wh2_main_lzd_tlaqua_crest.png"), 
                ];
                lizardmenFlags.forEach((flag)=>{
                    resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
                });
                break;
            }
        case "Bretonnia":
            {
                const bretonniaFlags = [
                    require("../images/Bretonnia/Chevaliers_de_Lyonesse.png"),
                    require("../images/Bretonnia/Bordeleaux.png"),
                    require("../images/Bretonnia/Bretonnia.png"),
                    require("../images/Bretonnia/Carcassonne.png"), 
                ];
                bretonniaFlags.forEach((flag)=>{
                    resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
                });
                break;
            }
        case "Chaos":
            {
                const chaosFlag = require("../images/chaos/Warriors_of_Chaos.png");
                resultsImgs.innerHTML += `<img src="${chaosFlag}" alt="" class="seleted__race__flag">`;
                break;
            }
        default:
            {
                const norscaFlag = [
                    require("../images/Norsca/Norsca.png"),
                    require("../images/Norsca/Wintertooth.png"), 
                ];
                norscaFlag.forEach((flag)=>{
                    resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
                });
            }
    }
};
mobileMenuBtn.addEventListener("click", ()=>{
    mobileMenuBtn.classList.toggle("is-active");
    mobileMenuBtn.classList.contains("is-active") ? mobileMenuBtn.ariaExpanded = true : mobileMenuBtn.ariaExpanded = false;
    navBar.classList.toggle("open");
    body.classList.toggle("nav__open");
});
GetRaceBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    e.stopImmediatePropagation();
    getMortalRace();
    hiddenSections();
});
addonsCheckboxes.forEach((checkbox)=>{
    checkbox.addEventListener("click", (e)=>e.target.nextElementSibling.classList.toggle("marked")
    );
});

},{"../images/Beastmen/Slaughterhorn_Tribe.png":"3eldp","../images/vampire coast/awakend.png":"gvXKf","../images/vampire coast/Dreadfleet.png":"bCypj","../images/vampire coast/Drowned.png":"7snNl","../images/vampire coast/Sartosa.png":"f4uLY","../images/Tomb Kings/Court_of_Lybaras.png":"ahrRc","../images/Tomb Kings/Exiles_of_Nehek.png":"4OSEF","../images/Tomb Kings/Followers_of_Nagash.png":"8Le5R","../images/Tomb Kings/Khemri.png":"1JKWV","../images/The Empire/The_Huntsmarshals_Expedition.png":"iE18Y","../images/Wood Elves/Heralds_of_Ariel.png":"d41Wf","../images/Dark Elves/Cult_of_Pleasure.png":"cDmvT","../images/Dark Elves/Naggarond.png":"5QxWQ","../images/Dark Elves/The_Blessed_Dread.png":"7CJyv","../images/Dark Elves/The_Thousand_Maws.png":"4oEj9","../images/Dark Elves/Wh2_main_def_hag_graef_crest.png":"e95tI","../images/Dark Elves/Wh2_main_def_har_ganeth_crest.png":"46T8V","../images/Lizardmen/Cult_of_Sotek.png":"6UPkM","../images/Lizardmen/Ghosts_of_Pahaux.png":"bopcY","../images/Lizardmen/Hexoatl.png":"l1URc","../images/Lizardmen/Last_Defenders.png":"gcqp1","../images/Lizardmen/Spirit_of_the_Jungle.png":"knXqt","../images/Lizardmen/Wh2_main_lzd_itza_crest.png":"jMs9n","../images/Lizardmen/Wh2_main_lzd_tlaqua_crest.png":"aFsdK","../images/High Elves/Avelorn.png":"4KJEk","../images/High Elves/Eataine.png":"08o01","../images/High Elves/Knights_of_Caledor.png":"esEIH","../images/High Elves/Nagarythe.png":"dxmk7","../images/High Elves/Order_of_Loremasters.png":"2SL4a","../images/High Elves/Yvresse.png":"eivHz","../images/Skaven/Clan_Rictus.png":"jpLj6","../images/Skaven/Clan_Skryre.png":"bqfbq","../images/Skaven/Wh2_main_skv_clan_eshin_crest.png":"eGq3o","../images/Skaven/Wh2_main_skv_clan_mors_crest.png":"hQs0c","../images/Skaven/Wh2_main_skv_clan_moulder_crest.png":"fNq2G","../images/Skaven/Wh2_main_skv_clan_pestilens_crest.png":"O9dmF","../images/Greenskins/Broken_Axe.png":"iK4AF","../images/The Empire/The_Golden_Order.png":"hz0Hi","../images/The Empire/Reikland.png":"9JX16","../images/Wood Elves/Argwylon.png":"cTvly","../images/Wood Elves/Wargrove_of_Woe.png":"6pgDy","../images/Wood Elves/Wood_Elves.png":"4xabc","../images/Greenskins/Crooked_Moon.png":"5mIIg","../images/Greenskins/Greenskins.png":"5Z89W","../images/Greenskins/The_Bloody_Handz.png":"faIMU","../images/chaos/Warriors_of_Chaos.png":"bKN7n","../images/Norsca/Norsca.png":"eVFq9","../images/Norsca/Wintertooth.png":"2ZVtY","../images/Beastmen/Beastmen.png":"aojS5","../images/Beastmen/Harbinger_of_Disaster.png":"4vXKM","../images/Beastmen/Wh_dlc05_bst_beastmen_morghur_herd_crest.png":"7eP9e","../images/Bretonnia/Chevaliers_de_Lyonesse.png":"8mmVe","../images/Bretonnia/Bordeleaux.png":"lKEwg","../images/Bretonnia/Bretonnia.png":"7TE1B","../images/Bretonnia/Carcassonne.png":"2LYdW"}],"3eldp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Slaughterhorn_Tribe.ec90e52c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"bDHbi":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gvXKf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../awakend.36bb4653.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"bCypj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Dreadfleet.1b5b921c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"7snNl":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Drowned.bb49d0fa.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"f4uLY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Sartosa.02c0018f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"ahrRc":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Court_of_Lybaras.81ae1dd7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"4OSEF":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Exiles_of_Nehek.cb61c8d2.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"8Le5R":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Followers_of_Nagash.cbdcd741.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"1JKWV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Khemri.ab104a94.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"iE18Y":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../The_Huntsmarshals_Expedition.42c6774a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"d41Wf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Heralds_of_Ariel.4f093279.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"cDmvT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Cult_of_Pleasure.a91eb3db.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"5QxWQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Naggarond.add2f756.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"7CJyv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../The_Blessed_Dread.328bae7a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"4oEj9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../The_Thousand_Maws.a8a919a5.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"e95tI":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Wh2_main_def_hag_graef_crest.1d134124.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"46T8V":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Wh2_main_def_har_ganeth_crest.c2ffd853.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"6UPkM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Cult_of_Sotek.e15a440e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"bopcY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Ghosts_of_Pahaux.a719c3cb.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"l1URc":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Hexoatl.f4ba6eac.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"gcqp1":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Last_Defenders.1c1bee62.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"knXqt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Spirit_of_the_Jungle.14b73f5e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"jMs9n":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Wh2_main_lzd_itza_crest.4abb7c22.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"aFsdK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Wh2_main_lzd_tlaqua_crest.e8539b8c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"4KJEk":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Avelorn.3e3d34aa.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"08o01":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Eataine.54ead166.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"esEIH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Knights_of_Caledor.f3e2c44b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"dxmk7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Nagarythe.98ce5d23.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"2SL4a":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Order_of_Loremasters.6ef5e03d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"eivHz":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Yvresse.80454609.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"jpLj6":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Clan_Rictus.ce531856.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"bqfbq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Clan_Skryre.1249e2ec.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"eGq3o":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Wh2_main_skv_clan_eshin_crest.4ff4f179.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"hQs0c":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Wh2_main_skv_clan_mors_crest.91902593.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"fNq2G":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Wh2_main_skv_clan_moulder_crest.08503946.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"O9dmF":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Wh2_main_skv_clan_pestilens_crest.a7996ea6.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"iK4AF":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Broken_Axe.4afd32ae.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"hz0Hi":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../The_Golden_Order.2841f946.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"9JX16":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Reikland.b2bd5e97.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"cTvly":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Argwylon.f0400d23.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"6pgDy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Wargrove_of_Woe.2f5d376b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"4xabc":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Wood_Elves.bdf17641.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"5mIIg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Crooked_Moon.8367d72f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"5Z89W":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Greenskins.8c45ffbf.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"faIMU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../The_Bloody_Handz.e9d184ff.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"bKN7n":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Warriors_of_Chaos.4eac1952.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"eVFq9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Norsca.58cc0a0a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"2ZVtY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Wintertooth.b418f82c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"aojS5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Beastmen.d98bd726.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"4vXKM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Harbinger_of_Disaster.4b0b1a68.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"7eP9e":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Wh_dlc05_bst_beastmen_morghur_herd_crest.30430a2b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"8mmVe":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Chevaliers_de_Lyonesse.e3ffd894.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"lKEwg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Bordeleaux.4732de8b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"7TE1B":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Bretonnia.dc1b3d65.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"2LYdW":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('g8tTt') + "../../../../../Carcassonne.aecf1114.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}]},["krjzp","ecQ0h"], "ecQ0h", "parcelRequire9d0d")

//# sourceMappingURL=mortal.8a4dbd67.js.map
