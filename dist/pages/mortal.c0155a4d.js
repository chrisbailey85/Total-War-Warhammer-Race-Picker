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
})({"465dM":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "d0214a91c0155a4d";
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

},{"../images/Beastmen/Beastmen.png":"gF7Jj","../images/Beastmen/Slaughterhorn_Tribe.png":"eIj2I","../images/Beastmen/Harbinger_of_Disaster.png":"aLluR","../images/Beastmen/Wh_dlc05_bst_beastmen_morghur_herd_crest.png":"9wUf4","../images/vampire coast/awakend.png":"42PmK","../images/vampire coast/Dreadfleet.png":"f8che","../images/vampire coast/Drowned.png":"bedK5","../images/vampire coast/Sartosa.png":"2h8N0","../images/Tomb Kings/Court_of_Lybaras.png":"04dH0","../images/Tomb Kings/Exiles_of_Nehek.png":"h5DRf","../images/Tomb Kings/Followers_of_Nagash.png":"ixGDK","../images/Tomb Kings/Khemri.png":"baKcB","../images/Wood Elves/Heralds_of_Ariel.png":"eSkG3","../images/Greenskins/Broken_Axe.png":"7lpfA","../images/High Elves/Avelorn.png":"wZL1R","../images/High Elves/Eataine.png":"2bINR","../images/High Elves/Knights_of_Caledor.png":"8DarY","../images/High Elves/Nagarythe.png":"jPpMX","../images/High Elves/Order_of_Loremasters.png":"5kGVf","../images/High Elves/Yvresse.png":"7ishV","../images/Dark Elves/Cult_of_Pleasure.png":"3bRdh","../images/Dark Elves/Naggarond.png":"3Ztc3","../images/Dark Elves/The_Blessed_Dread.png":"k7D5I","../images/Dark Elves/The_Thousand_Maws.png":"43GJa","../images/Dark Elves/Wh2_main_def_hag_graef_crest.png":"ibT4y","../images/Dark Elves/Wh2_main_def_har_ganeth_crest.png":"jTX5t","../images/Skaven/Clan_Rictus.png":"71gUh","../images/Skaven/Clan_Skryre.png":"lwP7Z","../images/Skaven/Wh2_main_skv_clan_eshin_crest.png":"jwEaG","../images/Skaven/Wh2_main_skv_clan_mors_crest.png":"1t6OZ","../images/Skaven/Wh2_main_skv_clan_moulder_crest.png":"8HDgr","../images/Skaven/Wh2_main_skv_clan_pestilens_crest.png":"gvdOQ","../images/Lizardmen/Cult_of_Sotek.png":"8lULF","../images/Lizardmen/Ghosts_of_Pahaux.png":"i6Hnp","../images/Lizardmen/Hexoatl.png":"8Y7t6","../images/Lizardmen/Last_Defenders.png":"8Tzfj","../images/Lizardmen/Spirit_of_the_Jungle.png":"lxZNt","../images/Lizardmen/Wh2_main_lzd_itza_crest.png":"3HAnT","../images/Lizardmen/Wh2_main_lzd_tlaqua_crest.png":"2tfOO","../images/Bretonnia/Chevaliers_de_Lyonesse.png":"5NOyo","../images/The Empire/The_Golden_Order.png":"caJhT","../images/The Empire/Reikland.png":"efCWU","../images/Wood Elves/Argwylon.png":"7vMpY","../images/Wood Elves/Wargrove_of_Woe.png":"2Oibd","../images/Wood Elves/Wood_Elves.png":"ahyoW","../images/Greenskins/Crooked_Moon.png":"hjJcH","../images/Greenskins/Greenskins.png":"lgRB1","../images/Greenskins/The_Bloody_Handz.png":"b8Kjj","../images/Bretonnia/Bordeleaux.png":"ivouC","../images/Bretonnia/Bretonnia.png":"4dnVQ","../images/Bretonnia/Carcassonne.png":"afK0E","../images/chaos/Warriors_of_Chaos.png":"bqQ1r","../images/Norsca/Norsca.png":"7bUTl","../images/Norsca/Wintertooth.png":"9kKMc","../images/The Empire/The_Huntsmarshals_Expedition.png":"lAn5b"}],"gF7Jj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Beastmen.c2a57dd9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
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

},{}],"eIj2I":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Slaughterhorn_Tribe.c652e78b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"aLluR":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Harbinger_of_Disaster.d8450c38.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"9wUf4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Wh_dlc05_bst_beastmen_morghur_herd_crest.06b506e9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"42PmK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../awakend.b9887f39.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"f8che":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Dreadfleet.db1fc9e3.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"bedK5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Drowned.c39f7d8e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"2h8N0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Sartosa.61a3e847.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"04dH0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Court_of_Lybaras.46c56758.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"h5DRf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Exiles_of_Nehek.ef734ecf.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"ixGDK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Followers_of_Nagash.43cd68cf.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"baKcB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Khemri.cbdb71c7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"eSkG3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Heralds_of_Ariel.81ea718b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"7lpfA":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Broken_Axe.acefe3d6.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"wZL1R":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Avelorn.d7fef7c3.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"2bINR":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Eataine.f0b4266f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8DarY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Knights_of_Caledor.e5f63562.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jPpMX":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Nagarythe.272fb338.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"5kGVf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Order_of_Loremasters.b6bc588f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"7ishV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Yvresse.5dccc082.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"3bRdh":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Cult_of_Pleasure.68a2873f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"3Ztc3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Naggarond.0fafa547.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"k7D5I":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../The_Blessed_Dread.39dfde28.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"43GJa":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../The_Thousand_Maws.9db221b7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"ibT4y":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Wh2_main_def_hag_graef_crest.3b6d3ef3.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jTX5t":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Wh2_main_def_har_ganeth_crest.591d9044.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"71gUh":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Clan_Rictus.2ab67f71.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"lwP7Z":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Clan_Skryre.9b408b90.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jwEaG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Wh2_main_skv_clan_eshin_crest.3e390a92.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"1t6OZ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Wh2_main_skv_clan_mors_crest.757223e8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8HDgr":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Wh2_main_skv_clan_moulder_crest.615c66e2.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"gvdOQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Wh2_main_skv_clan_pestilens_crest.bc9a1d7c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8lULF":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Cult_of_Sotek.6ca6af29.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"i6Hnp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Ghosts_of_Pahaux.a5221c07.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8Y7t6":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Hexoatl.35441636.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8Tzfj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Last_Defenders.1bab8405.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"lxZNt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Spirit_of_the_Jungle.ab30bd8d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"3HAnT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Wh2_main_lzd_itza_crest.c8b49268.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"2tfOO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Wh2_main_lzd_tlaqua_crest.c7462f66.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"5NOyo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Chevaliers_de_Lyonesse.5ea4d62d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"caJhT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../The_Golden_Order.864445b7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"efCWU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Reikland.3df363d6.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"7vMpY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Argwylon.184a3948.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"2Oibd":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Wargrove_of_Woe.773eb8aa.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"ahyoW":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Wood_Elves.16886dc2.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"hjJcH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Crooked_Moon.eba4e306.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"lgRB1":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Greenskins.125ec72c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"b8Kjj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../The_Bloody_Handz.872d02e2.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"ivouC":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Bordeleaux.b7322c2d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"4dnVQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Bretonnia.61ee5894.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"afK0E":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Carcassonne.4ec91933.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"bqQ1r":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Warriors_of_Chaos.3f7f0b46.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"7bUTl":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Norsca.7cb094f0.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"9kKMc":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../Wintertooth.77df734c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"lAn5b":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hRS1q') + "../The_Huntsmarshals_Expedition.9916227f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}]},["465dM","ecQ0h"], "ecQ0h", "parcelRequire9d0d")

//# sourceMappingURL=mortal.c0155a4d.js.map
