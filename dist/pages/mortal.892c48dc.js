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
})({"bLYT5":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "9c38165c892c48dc";
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

},{}],"aOJt2":[function(require,module,exports) {
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

},{"../images/Beastmen/Slaughterhorn_Tribe.png":"UZ5Dk","../images/vampire coast/awakend.png":"3pNOx","../images/vampire coast/Dreadfleet.png":"H54ul","../images/vampire coast/Drowned.png":"5yfn1","../images/vampire coast/Sartosa.png":"jhCDO","../images/Tomb Kings/Court_of_Lybaras.png":"dCulD","../images/Tomb Kings/Exiles_of_Nehek.png":"2wzDD","../images/Tomb Kings/Followers_of_Nagash.png":"f1NmP","../images/Tomb Kings/Khemri.png":"517xl","../images/The Empire/The_Huntsmarshals_Expedition.png":"ebyP0","../images/Wood Elves/Heralds_of_Ariel.png":"2lVBA","../images/Dark Elves/Cult_of_Pleasure.png":"actSg","../images/Dark Elves/Naggarond.png":"kL5fk","../images/Dark Elves/The_Blessed_Dread.png":"5ew0y","../images/Dark Elves/The_Thousand_Maws.png":"2OKBf","../images/Dark Elves/Wh2_main_def_hag_graef_crest.png":"hYwow","../images/Dark Elves/Wh2_main_def_har_ganeth_crest.png":"6gPTF","../images/Lizardmen/Cult_of_Sotek.png":"ZR8CG","../images/Lizardmen/Ghosts_of_Pahaux.png":"1ICob","../images/Lizardmen/Hexoatl.png":"lW4nP","../images/Lizardmen/Last_Defenders.png":"b5pKf","../images/Lizardmen/Spirit_of_the_Jungle.png":"j02ty","../images/Lizardmen/Wh2_main_lzd_itza_crest.png":"5uySS","../images/Lizardmen/Wh2_main_lzd_tlaqua_crest.png":"cjx6O","../images/High Elves/Avelorn.png":"47wk5","../images/High Elves/Eataine.png":"ly6sf","../images/High Elves/Knights_of_Caledor.png":"9OiZE","../images/High Elves/Nagarythe.png":"6uKml","../images/High Elves/Order_of_Loremasters.png":"8GJzo","../images/High Elves/Yvresse.png":"h7lkY","../images/Skaven/Clan_Rictus.png":"gw592","../images/Skaven/Clan_Skryre.png":"9s0gh","../images/Skaven/Wh2_main_skv_clan_eshin_crest.png":"gfd43","../images/Skaven/Wh2_main_skv_clan_mors_crest.png":"cIw8P","../images/Skaven/Wh2_main_skv_clan_moulder_crest.png":"gR55s","../images/Skaven/Wh2_main_skv_clan_pestilens_crest.png":"15Mvu","../images/Greenskins/Broken_Axe.png":"ceYUb","../images/The Empire/The_Golden_Order.png":"drldu","../images/The Empire/Reikland.png":"jrSM9","../images/Wood Elves/Argwylon.png":"4ObAO","../images/Wood Elves/Wargrove_of_Woe.png":"cQmDV","../images/Wood Elves/Wood_Elves.png":"3HIor","../images/Greenskins/Crooked_Moon.png":"knVHb","../images/Greenskins/Greenskins.png":"2CvEM","../images/Greenskins/The_Bloody_Handz.png":"6RovJ","../images/chaos/Warriors_of_Chaos.png":"hElQg","../images/Norsca/Norsca.png":"10vjk","../images/Norsca/Wintertooth.png":"5JIQt","../images/Beastmen/Beastmen.png":"bJlk7","../images/Beastmen/Harbinger_of_Disaster.png":"lo4qH","../images/Beastmen/Wh_dlc05_bst_beastmen_morghur_herd_crest.png":"blsRA","../images/Bretonnia/Chevaliers_de_Lyonesse.png":"eNPWj","../images/Bretonnia/Bordeleaux.png":"2L9UK","../images/Bretonnia/Bretonnia.png":"e55um","../images/Bretonnia/Carcassonne.png":"aNUvQ"}],"UZ5Dk":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Slaughterhorn_Tribe.2786ca61.png" + "?" + Date.now();

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

},{}],"3pNOx":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../awakend.84e66a52.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"H54ul":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Dreadfleet.aca5a3a5.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"5yfn1":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Drowned.183e94f5.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"jhCDO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Sartosa.2bd9d0e8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"dCulD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Court_of_Lybaras.3a934d30.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"2wzDD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Exiles_of_Nehek.4d67befe.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"f1NmP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Followers_of_Nagash.a0f4a5cd.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"517xl":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Khemri.38896346.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"ebyP0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../The_Huntsmarshals_Expedition.5cf4311c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"2lVBA":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Heralds_of_Ariel.062b50b3.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"actSg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Cult_of_Pleasure.74e4cc2d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"kL5fk":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Naggarond.ddbe8bdf.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"5ew0y":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../The_Blessed_Dread.18f8f1fe.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"2OKBf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../The_Thousand_Maws.76629f2a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"hYwow":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Wh2_main_def_hag_graef_crest.ce243de0.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"6gPTF":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Wh2_main_def_har_ganeth_crest.2669ec9b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"ZR8CG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Cult_of_Sotek.300edc81.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"1ICob":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Ghosts_of_Pahaux.2d057377.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"lW4nP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Hexoatl.ed1eed8f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"b5pKf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Last_Defenders.ac403f24.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"j02ty":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Spirit_of_the_Jungle.5cb42af8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"5uySS":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Wh2_main_lzd_itza_crest.3e62c44b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"cjx6O":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Wh2_main_lzd_tlaqua_crest.1027ae75.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"47wk5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Avelorn.43b09b8d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"ly6sf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Eataine.f35511c6.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"9OiZE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Knights_of_Caledor.e731c6ec.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"6uKml":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Nagarythe.350dfe55.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"8GJzo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Order_of_Loremasters.b2f2aa8b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"h7lkY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Yvresse.5327267d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"gw592":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Clan_Rictus.161df6c7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"9s0gh":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Clan_Skryre.d839a56d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"gfd43":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Wh2_main_skv_clan_eshin_crest.a09872a2.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"cIw8P":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Wh2_main_skv_clan_mors_crest.c738c55a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"gR55s":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Wh2_main_skv_clan_moulder_crest.7d659ba7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"15Mvu":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Wh2_main_skv_clan_pestilens_crest.6b87ce1f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"ceYUb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Broken_Axe.f4c2e0e8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"drldu":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../The_Golden_Order.2ebc193f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"jrSM9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Reikland.6835bc09.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"4ObAO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Argwylon.30b6745a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"cQmDV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Wargrove_of_Woe.010ffcae.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"3HIor":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Wood_Elves.31e74775.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"knVHb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Crooked_Moon.c4727014.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"2CvEM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Greenskins.f8a00b33.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"6RovJ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../The_Bloody_Handz.6fe524f8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"hElQg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Warriors_of_Chaos.438dda1c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"10vjk":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Norsca.7ad3e292.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"5JIQt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Wintertooth.10695ce4.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"bJlk7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Beastmen.279752ec.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"lo4qH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Harbinger_of_Disaster.7e4bc5fa.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"blsRA":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Wh_dlc05_bst_beastmen_morghur_herd_crest.93943d7d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"eNPWj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Chevaliers_de_Lyonesse.fb4ee3f4.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"2L9UK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Bordeleaux.91afb8e3.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"e55um":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Bretonnia.cdb95e6c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}],"aNUvQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dpy8l') + "../Carcassonne.d141c3d1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"bDHbi"}]},["bLYT5","aOJt2"], "aOJt2", "parcelRequire9d0d")

//# sourceMappingURL=mortal.892c48dc.js.map
