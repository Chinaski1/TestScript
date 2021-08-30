// ==UserScript==
// @name AdGuard Extra Beta
// @name:be AdGuard Extra Beta
// @name:cs AdGuard Extra Beta
// @name:da AdGuard Extra Beta
// @name:de AdGuard Extra Beta
// @name:es AdGuard Extra Beta
// @name:fi AdGuard Extra Beta
// @name:fr AdGuard Extra Beta
// @name:he AdGuard Extra Beta
// @name:hr AdGuard Extra Beta
// @name:hu AdGuard Extra Beta
// @name:id AdGuard Extra Beta
// @name:it AdGuard Extra Beta
// @name:ja AdGuard Extra Beta
// @name:ko AdGuard Extra Beta
// @name:lt AdGuard Extra Beta
// @name:nl AdGuard Extra Beta
// @name:no AdGuard Extra Beta
// @name:pl AdGuard Extra Beta
// @name:pt-PT AdGuard Extra Beta
// @name:pt AdGuard Extra Beta
// @name:ro AdGuard Extra Beta
// @name:ru AdGuard Extra Beta
// @name:sk AdGuard Extra Beta
// @name:sl Uporabi AdGuard Extra Beta
// @name:sr AdGuard ekstra Beta
// @name:tr AdGuard Extra Beta
// @name:uk AdGuard Extra Beta
// @name:vi AdGuard Extra Beta
// @name:zh-TW AdGuard Extra Beta
// @name:zh AdGuard Extra Beta
// @namespace    adguard
// @version      1.0.304
// @description AdGuard Extra is designed to solve complicated cases when regular ad blocking rules aren't enough. 
// @description:be AdGuard Extra прызначаны для вырашэння складаных выпадкаў, калі звычайных правілаў блакавання рэкламы недастаткова. 
// @description:cs AdGuard Extra má za úkol řešit složité případy, když běžná pravidla pro blokování reklam nestačí. 
// @description:da AdGuard Extra er designet til at løse komplicerede tilfælde, hvor alm. adblockingregler ikke er nok. 
// @description:de AdGuard Extra wurde entwickelt, um komplexe Fälle zu lösen, wenn normalen Regeln zum Sperren von Werbung nicht ausreichen. 
// @description:es AdGuard Extra está diseñado para resolver casos complicados cuando las reglas regulares para bloqueo de anuncios no son suficientes. 
// @description:fi AdGuard Extra on suunniteltu ratkaisemaan monimutkaisia tapauksia kun tavalliset mainosten estosäännöt eivät riitä. 
// @description:fr AdGuard Extra est conçu pour résoudre les cas complexes lorsque les règles de blocage des publicités ne suffisent pas. 
// @description:he AdGuard Extra מתוכנן לפתור מקרים מורכבים בהם כללים רגילים של חסימת פרסומות אינם מספיקים. 
// @description:hr AdGuard Extra je dizajniran za rješavanje kompleksnih slučajeva kada opća pravila blokade oglasa nisu dovoljna. 
// @description:hu Az AdGuard Extra olyan bonyolultabb esetek megoldására szolgál, amikor a hagyományos hirdetésblokkolási szabályok nem elegendőek. 
// @description:id AdGuard Extra dirancang untuk menyelesaikan kasus rumit saat aturan pemblokiran iklan biasa tidak cukup. 
// @description:it AdGuard Extra è progettato per risolvere casi complicati in cui le normali regole di blocca-annunci non sono sufficienti. 
// @description:ja AdGuard Extraは、通常の広告ブロックルールが十分ではない複雑なケースを解決するために設計されています。 
// @description:ko AdGuard Extra는 일반적인 광고 차단 규칙이 충분하지 않은 복잡한 문제를 해결하도록 설계되었습니다. 
// @description:lt AdGuard Extra yra skirtas išspręsti sudėtingesnius atvejus, kai nepakanka įprastų skelbimų blokavimo taisyklių. 
// @description:nl AdGuard Extra is bedoeld om ingewikkelde gevallen op te lossen wanneer de standaard advertentie blokkeringsregels niet voldoende blijken. 
// @description:no AdGuard Extra er utformet for å løse kompliserte saker der vanlige blokkeringsoppføringer ikke strekker til. 
// @description:pl AdGuard Extra jest przeznaczony do rozwiązywania skomplikowanych przypadków, gdy zwykłe reguły blokowania reklam nie wystarczą. 
// @description:pt-PT O AdGuard Extra é indicado para resolver casos complicados onde as regras regulares de bloqueio de anúncios não são suficientes. 
// @description:pt O AdGuard Extra é indicado para resolver casos complicados onde as regras regulares de bloqueio de anúncios não são suficientes. 
// @description:ro AdGuard Extra este creeat să rezolve cazuri complexe când regulile uzuale de blocat reclame sunt insuficiente. 
// @description:ru AdGuard Extra предназначен для решения более сложных задач, когда обычных правил блокировки рекламы недостаточно. 
// @description:sk AdGuard Extra má za úlohu riešiť zložité prípady, keď bežné pravidlá blokovania reklám nestačia. 
// @description:sl AdGuard Extra naj bi rešil zapletene primere, ko običajna pravila za zaviranje oglasov niso dovolj. 
// @description:sr AdGuard Extra bi trebalo da reši komplikovane slučajeve u kojima standardna pravila blokiranja reklama nisu dovoljna. 
// @description:tr AdGuard Extra, normal reklam engelleme kurallarının yeterli olmadığı karmaşık durumları çözmek için tasarlanmıştır. 
// @description:uk AdGuard Extra призначений для вирішення складних завдань, коли звичайних правил для блокування реклами недостатньо. 
// @description:vi AdGuard Extra được thiết kế để giải quyết các vấn đề khi mà các quy tắc chặn quảng cáo thông thường chưa đủ. 
// @description:zh-TW 當常規的廣告封鎖規則不夠時，AdGuard Extra 旨在解決複雜的情況。 
// @description:zh AdGuard Extra 旨在解决常规的广告拦截规则无能为力的复杂情况。 
// @downloadURL  https://userscripts.adtidy.org/beta/adguard-extra/1.0/adguard-extra.user.js
// @updateURL    https://userscripts.adtidy.org/beta/adguard-extra/1.0/adguard-extra.meta.js
// @homepageURL  https://adguard.com/
// @author       AdGuard
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-start
// @exclude *://mil.ru/*
// @exclude *wikipedia.org*
// @exclude *icloud.com*
// @exclude *hangouts.google.com*
// @exclude *www.facebook.com/plugins/*
// @exclude *www.facebook.com/v*/plugins*
// @exclude *disqus.com/embed/comments*
// @exclude *vk.com/widget*
// @exclude *twitter.com/intent/*
// @exclude *www.youtube.com/embed/*
// @exclude *player.vimeo.com*
// @exclude *coub.com/embed*
// @exclude *staticxx.facebook.com/connect/xd_arbiter/*
// @exclude *vk.com/q_frame*
// @exclude *tpc.googlesyndication.com*
// @exclude *syndication.twitter.com*
// @exclude *platform.twitter.com*
// @exclude *tutosdeath.blogspot.com*
// @exclude *notifications.google.com*
// @exclude *google.com/recaptcha/*
// @exclude *bizmania.ru/*
// ==/UserScript==
'use strict';const win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
const browser = {
  window: win,
  document: win.document,
  location: win.document.location,
  console: {},
  querySelector: win.document.querySelector.bind(win.document),
  querySelectorAll: win.document.querySelectorAll.bind(win.document),
  getAttribute: Function.prototype.call.bind(HTMLElement.prototype.getAttribute),
  setAttribute: Function.prototype.call.bind(HTMLElement.prototype.setAttribute),
  removeAttribute: Function.prototype.call.bind(HTMLElement.prototype.removeAttribute),
  defineProperty: Object.defineProperty,
  MutationObserver: win.MutationObserver
};
Object.keys(browser.window.console).forEach(name => {
  browser.console[name] = browser.window.console[name];
});const hosts = {
  '4pda.ru': '*://*.4pda.ru/*',
  '4pda.to': '*://*.4pda.to/*',
  'adguard.com': '*://*.adguard.com/*',
  'auto.ru': '*://*.auto.ru/*',
  'media.auto.ru': '*://*.media.auto.ru/*',
  'yandex.ru': '*://*.yandex.ru/*',
  'yandex.kz': '*://*.yandex.kz/*',
  'yandex.by': '*://*.yandex.by/*',
  'yandex.ua': '*://*.yandex.ua/*',
  'yandex.md': '*://*.yandex.md/*',
  'yandex.fr': '*://*.yandex.fr/*',
  'yandex.lv': '*://*.yandex.lv/*',
  'yandex.ee': '*://*.yandex.ee/*',
  'yandex.com.tr': '*://*.yandex.com.tr/*',
  'yandex.com': '*://*.yandex.com/*',
  'afisha.yandex.ru': '*://*.afisha.yandex.ru/*',
  'afisha.yandex.kz': '*://*.afisha.yandex.kz/*',
  'afisha.yandex.by': '*://*.afisha.yandex.by/*',
  'afisha.yandex.ua': '*://*.afisha.yandex.ua/*',
  'afisha.yandex.md': '*://*.afisha.yandex.md/*',
  'mail.yandex.ru': '*://*.mail.yandex.ru/*',
  'mail.yandex.kz': '*://*.mail.yandex.kz/*',
  'mail.yandex.by': '*://*.mail.yandex.by/*',
  'mail.yandex.ua': '*://*.mail.yandex.ua/*',
  'mail.yandex.md': '*://*.mail.yandex.md/*',
  'mail.yandex.com.tr': '*://*.mail.yandex.com.tr/*',
  'mail.yandex.com': '*://*.mail.yandex.com/*',
  'mail.yandex.fr': '*://*.mail.yandex.fr/*',
  'mail.yandex.ee': '*://*.mail.yandex.ee/*',
  'mail.yandex.kg': '*://*.mail.yandex.kg/*',
  'mail.yandex.lv': '*://*.mail.yandex.lv/*',
  'mail.yandex.lt': '*://*.mail.yandex.lt/*',
  'news.yandex.ru': '*://*.news.yandex.ru/*',
  'news.yandex.kz': '*://*.news.yandex.kz/*',
  'news.yandex.by': '*://*.news.yandex.by/*',
  'news.yandex.ua': '*://*.news.yandex.ua/*',
  'news.yandex.md': '*://*.news.yandex.md/*',
  'music.yandex.ru': '*://*.music.yandex.ru/*',
  'music.yandex.kz': '*://*.music.yandex.kz/*',
  'music.yandex.by': '*://*.music.yandex.by/*',
  'music.yandex.ua': '*://*.music.yandex.ua/*',
  'music.yandex.md': '*://*.music.yandex.md/*',
  'tv.yandex.ru': '*://*.tv.yandex.ru/*',
  'tv.yandex.kz': '*://*.tv.yandex.kz/*',
  'tv.yandex.by': '*://*.tv.yandex.by/*',
  'tv.yandex.ua': '*://*.tv.yandex.ua/*',
  'tv.yandex.md': '*://*.tv.yandex.md/*',
  'zen.yandex.ru': '*://*.zen.yandex.ru/*',
  'zen.yandex.kz': '*://*.zen.yandex.kz/*',
  'zen.yandex.by': '*://*.zen.yandex.by/*',
  'zen.yandex.ua': '*://*.zen.yandex.ua/*',
  'zen.yandex.md': '*://*.zen.yandex.md/*',
  'docviewer.yandex.ru': '*://*.docviewer.yandex.ru/*',
  'docviewer.yandex.kz': '*://*.docviewer.yandex.kz/*',
  'docviewer.yandex.by': '*://*.docviewer.yandex.by/*',
  'docviewer.yandex.ua': '*://*.docviewer.yandex.ua/*',
  'docviewer.yandex.md': '*://*.docviewer.yandex.md/*',
  'docviewer.yandex.com.tr': '*://*.docviewer.yandex.com.tr/*',
  'docviewer.yandex.com.am': '*://*.docviewer.yandex.com.am/*',
  'drive2.ru': '*://*.drive2.ru/*',
  'drive2.com': '*://*.drive2.com/*',
  'kinopoisk.ru': '*://*.kinopoisk.ru/*',
  'eda.ru': '*://*.eda.ru/*',
  'facebook.com': '*://*.facebook.com/*',
  'facebookcorewwwi.onion': '*://*.facebookcorewwwi.onion/*',
  'e.mail.ru': '*://*.e.mail.ru/*',
  'octavius.mail.ru': '*://*.octavius.mail.ru/*',
  'mail.ru': '*://*.mail.ru/*',
  'news.mail.ru': '*://*.news.mail.ru/*',
  'auto.mail.ru': '*://*.auto.mail.ru/*',
  'sportmail.ru': '*://*.sportmail.ru/*',
  'horo.mail.ru': '*://*.horo.mail.ru/*',
  'deti.mail.ru': '*://*.deti.mail.ru/*',
  'lady.mail.ru': '*://*.lady.mail.ru/*',
  'hi-tech.mail.ru': '*://*.hi-tech.mail.ru/*',
  'minigames.mail.ru': '*://*.minigames.mail.ru/*',
  'otvet.mail.ru': '*://*.otvet.mail.ru/*',
  'ok.ru': '*://*.ok.ru/*',
  'rambler.ru': '*://*.rambler.ru/*',
  'championat.com': '*://*.championat.com/*',
  'gazeta.ru': '*://*.gazeta.ru/*',
  'lenta.ru': '*://*.lenta.ru/*',
  'quto.ru': '*://*.quto.ru/*',
  'rns.online': '*://*.rns.online/*',
  'passion.ru': '*://*.passion.ru/*',
  'wmj.ru': '*://*.wmj.ru/*',
  'wp.pl': '*://*.wp.pl/*',
  'vidstream.online': '*://*.vidstream.online/*',
  'livejournal.com': '*://*.livejournal.com/*',
  'varlamov.ru': '*://*.varlamov.ru/*',
  'lena-miro.ru': '*://*.lena-miro.ru/*',
  'olegmakarenko.ru': '*://*.olegmakarenko.ru/*',
  'periskop.su': '*://*.periskop.su/*',
  'levik.blog': '*://*.levik.blog/*',
  'vadimrazumov.ru': '*://*.vadimrazumov.ru/*',
  'otzovik.com': '*://*.otzovik.com/*',
  'sinoptik.ua': '*://*.sinoptik.ua/*',
  'multiup.org': '*://*.multiup.org/*',
  'yaplakal.com': '*://*.yaplakal.com/*',
  'yap.ru': '*://*.yap.ru/*',
  'pravda.com.ua': '*://*.pravda.com.ua/*',
  'epravda.com.ua': '*://*.epravda.com.ua/*',
  'glianec.com': '*://*.glianec.com/*',
  'ostro.org': '*://*.ostro.org/*',
  'nashamama.com': '*://*.nashamama.com/*',
  'bilshe.com': '*://*.bilshe.com/*',
  'zdorovia.com.ua': '*://*.zdorovia.com.ua/*',
  'i.factor.ua': '*://*.i.factor.ua/*',
  'gismeteo.ua': '*://*.gismeteo.ua/*',
  '1777.ru': '*://*.1777.ru/*',
  'cn.ru': '*://*.cn.ru/*',
  'finance.i.ua': '*://*.finance.i.ua/*',
  'glavcom.ua': '*://*.glavcom.ua/*',
  'hvylya.net': '*://*.hvylya.net/*',
  'kp.ua': '*://*.kp.ua/*',
  'love.i.ua': '*://*.love.i.ua/*',
  'newsone.ua': '*://*.newsone.ua/*',
  'peers.tv': '*://*.peers.tv/*',
  'radio.i.ua': '*://*.radio.i.ua/*',
  'real-vin.com': '*://*.real-vin.com/*',
  'viks.bz': '*://*.viks.bz/*',
  'vsetv.com': '*://*.vsetv.com/*',
  'tv.ua': '*://*.tv.ua/*',
  'isport.ua': '*://*.isport.ua/*',
  'eurointegration.com.ua': '*://*.eurointegration.com.ua/*',
  'u-news.com.ua': '*://*.u-news.com.ua/*',
  'strana.ua': '*://*.strana.ua/*',
  '4mama.ua': '*://*.4mama.ua/*',
  'bigmir.net': '*://*.bigmir.net/*',
  'dengi.ua': '*://*.dengi.ua/*',
  'enovosty.com': '*://*.enovosty.com/*',
  'facenews.ua': '*://*.facenews.ua/*',
  'football24.ua': '*://*.football24.ua/*',
  'gorod.dp.ua': '*://*.gorod.dp.ua/*',
  'inforesist.org': '*://*.inforesist.org/*',
  'kolobok.ua': '*://*.kolobok.ua/*',
  'liga.net': '*://*.liga.net/*',
  'nnovosti.info': '*://*.nnovosti.info/*',
  'smak.ua': '*://*.smak.ua/*',
  'tochka.net': '*://*.tochka.net/*',
  'ukr.net': '*://*.ukr.net/*',
  'nv.ua': '*://*.nv.ua/*',
  'meteo.ua': '*://*.meteo.ua/*',
  'besplatka.ua': '*://*.besplatka.ua/*',
  'lifedon.com.ua': '*://*.lifedon.com.ua/*',
  'sheee.co.il': '*://*.sheee.co.il/*',
  'walla.co.il': '*://*.walla.co.il/*',
  'kakprosto.ru': '*://*.kakprosto.ru/*',
  '24smi.org': '*://*.24smi.org/*',
  'youtube.com': '*://*.youtube.com/*',
  'echo.msk.ru': '*://*.echo.msk.ru/*',
  'soft98.ir': '*://*.soft98.ir/*',
  'twitch.tv': '*://*.twitch.tv/*',
  'ppss.kr': '*://*.ppss.kr/*',
  'ygosu.com': '*://*.ygosu.com/*'
};class UserInteractionTracker {
  constructor() {
    this.TRACKED_EVENTS = ['auxclick', 'click', 'dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover', 'mouseout', 'mouseup', 'wheel', 'keydown', 'keypress', 'keyup'];
    this.LAST_EVENT_TIMEOUT_MS = 10;
    this.lastEventType = '';
    this.lastEventTime = '';
    const trackEvent = event => {
      this.lastEventType = event.type;
      this.lastEventTime = Date.now();
    };
    for (let i = 0; i < this.TRACKED_EVENTS.length; i += 1) {
      document.documentElement.addEventListener(this.TRACKED_EVENTS[i], trackEvent, true);
    }
  }
  getCurrentEvent() {
    if (!this.lastEventType || !this.lastEventTime) {
      return null;
    }
    const isTimeout = Date.now() - this.lastEventTime > this.LAST_EVENT_TIMEOUT_MS;
    if (!isTimeout) {
      return this.lastEventType;
    }
    return null;
  }
}let tracker;
function getTracker() {
  if (!tracker) {
    tracker = new UserInteractionTracker();
  }
  return tracker;
}
function generateRandomString() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
function observeDomChanges(callback) {
  const domMutationObserver = new browser.MutationObserver(mutations => {
    if (getTracker().getCurrentEvent()) {
      return;
    }
    callback(mutations);
  });
  domMutationObserver.observe(browser.document, {
    childList: true,
    subtree: true
  });
}
function disableScripts(pattern) {
  observeDomChanges(mutations => {
    mutations.forEach(mutation => {
      for (let i = 0; i < mutation.addedNodes.length; i += 1) {
        const node = mutation.addedNodes[i];
        if (node.localName === 'script' && node.innerText.match(pattern)) {
          node.remove();
        }
      }
    });
  });
}
function safeGetStylesheetRules(sheet) {
  try {
    if (sheet.rules === null) {
      return [];
    }
    return sheet.rules;
  } catch (e) {
    return [];
  }
}
function removeNode(node) {
  return node && node.parentNode && node.parentNode.removeChild(node);
}
function browserSupported() {
  return !(navigator.userAgent && navigator.userAgent.match(/(MSIE|Trident)/));
}
const hideViaDisplayProperty = node => {
  if (node) {
    node.style.setProperty('display', 'none', 'important');
  }
};
const hideViaPositionProperty = node => {
  if (node) {
    node.style.position = 'absolute';
    node.style.top = '-99999px';
  }
};
const iterateCSSRules = func => {
  [...browser.document.styleSheets].forEach(sheet => {
    [...safeGetStylesheetRules(sheet)].forEach(rule => {
      func(rule);
    });
  });
};
const hideRulesByCondition = (pattern, condition) => {
  iterateCSSRules(rule => {
    if (rule.selectorText && condition(rule.selectorText, pattern)) {
      hideViaDisplayProperty(rule);
    }
  });
};
const stringPatternCondition = (selector, pattern) => selector.includes(pattern);
const regexpPatternCondition = (selector, pattern) => pattern.test(selector);
const hideCssRulesBySelectorText = pattern => {
  if (pattern && pattern.constructor === String) {
    hideRulesByCondition(pattern, stringPatternCondition);
  } else if (pattern && pattern.constructor === RegExp) {
    hideRulesByCondition(pattern, regexpPatternCondition);
  } else {
    throw new Error('The arguments must be type of String or RegExp');
  }
};
const isMatchingHostnames = function isMatchingHostnames() {
  for (var _len = arguments.length, hostnames = new Array(_len), _key = 0; _key < _len; _key++) {
    hostnames[_key] = arguments[_key];
  }
  return browserSupported() && hostnames.some(hostname => {
    if (!hosts[hostname]) {
      return false;
    }
    const hostPattern = hosts[hostname].replace('*://*.', '');
    return browser.location.origin.match(hostPattern);
  });
};
const injectHidingRuleForClassname = (() => {
  const injectedRules = [];
  return className => {
    const hidingRule = `.${className} { display: none !important }`;
    if (injectedRules.some(rule => rule === hidingRule)) {
      return;
    }
    const {
      styleSheets
    } = browser.document;
    let styleSheet = styleSheets[styleSheets.length - 1];
    if (!styleSheet) {
      const style = browser.document.createElement('style');
      browser.document.head.appendChild(style);
      styleSheet = style.sheet;
    }
    styleSheet.insertRule(hidingRule, styleSheet.cssRules.length);
    injectedRules.push(hidingRule);
  };
})();
const replaceScripts = (regex, replacement) => {
  observeDomChanges(mutations => {
    mutations.forEach(mutation => {
      for (let i = 0; i < mutation.addedNodes.length; i += 1) {
        const node = mutation.addedNodes[i];
        if (node.localName === 'script' && node.innerText.match(regex)) {
          node.innerHTML = node.innerHTML.replace(regex, replacement);
        }
      }
    });
  });
};
const preventXHR = shouldBlock => {
  const origOpen = window.XMLHttpRequest.prototype.open;
  window.XMLHttpRequest.prototype.open = function () {
    function intercept(e) {
      const request = e.currentTarget;
      if (shouldBlock(request)) {
        request.abort();
        request.removeEventListener('readystatechange', intercept);
      }
      if (request.readyState === 4) {
        request.removeEventListener('readystatechange', intercept);
      }
    }
    this.addEventListener('readystatechange', intercept);
    return origOpen.apply(this, arguments);
  };
};
const elementContains = (element, pattern) => {
  if (!element || !element.textContent) {
    return false;
  }
  return element.textContent.match(pattern);
};
const getParent = (node, stepsUp) => {
  if (!node) {
    return null;
  }
  if (stepsUp <= 0) {
    return node;
  }
  return getParent(node.parentNode, stepsUp - 1);
};if (isMatchingHostnames('facebook.com', 'facebookcorewwwi.onion')) {
  const hideFeedAds = () => {
    const posts = browser.querySelectorAll('div[id^="substream_"] div[id^="hyperfeed_story_id"]');
    if (posts.length <= 0) {
      return;
    }
    posts.forEach(post => {
      if (post.style.display === 'none') {
        return;
      }
      let dataFt;
      Object.keys(post).some(key => {
        if (!post[key]) {
          return false;
        }
        dataFt = post[key]['data-ft'];
        return !!dataFt;
      });
      if (!dataFt) {
        return;
      }
      const sponsored1 = dataFt.includes('"is_sponsored":1');
      const sponsored2 = dataFt.includes('"ei":') && !dataFt.includes('"page_id":"');
      if (sponsored1 || sponsored2) {
        post.style.display = 'none';
      }
    });
  };
  const hideMarketplaceAds = () => {
    const posts = browser.querySelectorAll('div[data-testid="marketplace_home_feed"] > div > div > div[class] > div[class] > div > div[class]:not([style*="display:none"])');
    if (posts.length <= 0) {
      return;
    }
    posts.forEach(post => {
      const html = post.outerHTML;
      if (!html) {
        return;
      }
      if (html.includes('/ads/about/')) {
        post.style = 'display:none!important;';
      }
    });
  };
  observeDomChanges(() => {
    hideFeedAds();
    hideMarketplaceAds();
  });
}if (isMatchingHostnames('4pda.ru', '4pda.to') && !browser.location.pathname.startsWith('/amp/')) {
  const remove = node => node && node.parentNode.removeChild(node);
  const width = () => browser.window.innerWidth || browser.document.body.clientWidth || 0;
  const height = () => browser.window.innerHeight || browser.document.body.clientHeight || 0;
  const blockHeaderAds = () => {
    let header = browser.querySelector('.menu-main');
    if (!header) {
      return;
    }
    header = header.parentNode.parentNode;
    for (let i = 0; i < header.parentNode.children.length; i += 1) {
      const childNode = header.parentNode.children[i];
      if (childNode !== header) {
        hideViaDisplayProperty(childNode);
      } else {
        return;
      }
    }
  };
  const isAppPromo = element => {
    const appPromoHeader = element === null || element === void 0 ? void 0 : element.firstElementChild;
    return (appPromoHeader === null || appPromoHeader === void 0 ? void 0 : appPromoHeader.tagName) === 'H2' && /[AmopPrАорР]{8}/.test(appPromoHeader === null || appPromoHeader === void 0 ? void 0 : appPromoHeader.innerText);
  };
  const blockSidebarAds = () => {
    var _devdbcArticle$nextSi, _adElement$firstEleme;
    const aside = browser.querySelectorAll('[class]:not([id]) > [id]:not([class]) > :first-child + [id][class] > [class]:not([id])');
    [...aside].forEach(itm => {
      if ((itm === null || itm === void 0 ? void 0 : itm.firstElementChild) === null || itm.offsetHeight > 999 || isAppPromo(itm)) {
        hideViaPositionProperty(itm);
      }
    });
    const devdbcArticle = browser.querySelector('div[id^="devdbc_articles"]');
    const adElement = devdbcArticle === null || devdbcArticle === void 0 ? void 0 : (_devdbcArticle$nextSi = devdbcArticle.nextSibling) === null || _devdbcArticle$nextSi === void 0 ? void 0 : _devdbcArticle$nextSi.nextSibling;
    if (!/DIV|SPAN|SCRIPT/.test(adElement === null || adElement === void 0 ? void 0 : (_adElement$firstEleme = adElement.firstElementChild) === null || _adElement$firstEleme === void 0 ? void 0 : _adElement$firstEleme.tagName)) {
      hideViaPositionProperty(adElement);
    }
  };
  const blockNewSidebarAds = () => {
    const adElements = browser.querySelectorAll('[id][class] > .slider-list ~ div[class]:not([id])');
    if (adElements) {
      [...adElements].forEach(adElement => {
        if ((adElement === null || adElement === void 0 ? void 0 : adElement.textContent.indexOf('HUAWEI')) > 0 || (adElement === null || adElement === void 0 ? void 0 : adElement.textContent.indexOf('vive-zoneid')) > 0) {
          hideViaPositionProperty(adElement);
        }
      });
    }
  };
  const blockMobileAds = () => {
    const elements = browser.querySelectorAll('body > :not(div):not(a)');
    if (elements.length === 0) {
      return;
    }
    [...elements].forEach(el => {
      if (browser.getAttribute(el, 'items') === 'result.adv') {
        hideViaDisplayProperty(el);
      }
    });
  };
  const blockMobileHeaderFooterAds = () => {
    if (navigator.userAgent.match('Mobile')) {
      const headerAdsImg = browser.querySelector('article a[target="_blank"] > img');
      const footerButtonAdsImg = browser.querySelector('body > a[class][role="button"]');
      const footerAdsImg = footerButtonAdsImg === null || footerButtonAdsImg === void 0 ? void 0 : footerButtonAdsImg.previousSibling;
      if (headerAdsImg) {
        hideViaDisplayProperty(headerAdsImg.parentNode);
      }
      if (footerButtonAdsImg && footerAdsImg) {
        hideViaDisplayProperty(footerButtonAdsImg);
        hideViaDisplayProperty(footerAdsImg);
      }
    }
  };
  const fixNavMenu = () => {
    const adLink = browser.querySelector('.menu-main .menu-main-item > a[style*="background"]');
    if (!adLink) {
      return;
    }
    hideViaDisplayProperty(adLink);
  };
  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const fixAdsPlaceholder = () => {
    var _adsScript$parentNode, _adsScript$nextElemen;
    const adsScript = browser.document.querySelector('script[src^="//4pda.ru/ad/www"]');
    const adsContainer = adsScript === null || adsScript === void 0 ? void 0 : (_adsScript$parentNode = adsScript.parentNode) === null || _adsScript$parentNode === void 0 ? void 0 : _adsScript$parentNode.parentNode;
    if (adsContainer && (adsScript === null || adsScript === void 0 ? void 0 : (_adsScript$nextElemen = adsScript.nextElementSibling) === null || _adsScript$nextElemen === void 0 ? void 0 : _adsScript$nextElemen.className) !== 'slider-news' && !isMobile()) {
      adsContainer.style.marginTop = '-100px';
    }
  };
  const fixHeaderLeftover = () => {
    const fakePost = browser.querySelector('article[itemscope][itemtype][itemid]');
    if (!fakePost) {
      return;
    }
    const container = getParent(fakePost, 3);
    const nextSibling = fakePost.nextElementSibling;
    if (container.nodeName !== 'DIV' && !browser.getAttribute(nextSibling, 'itemid')) {
      hideViaDisplayProperty(container);
    }
  };
  const restoreBackground = () => {
    const {
      body
    } = browser.document;
    body.setAttribute('style', `${body.getAttribute('style') || ''};background-color:#E6E7E9!important`);
    const extra = 'background-image:none!important;background-color:transparent!important';
    const fakeStyles = new WeakMap();
    const styleProxy = {
      get: (target, prop) => fakeStyles.get(target)[prop] || target[prop],
      set(target, prop, value) {
        const fakeStyle = fakeStyles.get(target);
        (prop in fakeStyle ? fakeStyle : target)[prop] = value;
        return true;
      }
    };
    [...browser.querySelectorAll('[id]:not(A), A')].forEach(itm => {
      if (!(itm.offsetWidth > 0.95 * width() && itm.offsetHeight > 0.85 * height())) {
        return;
      }
      if (itm.tagName !== 'A') {
        fakeStyles.set(itm.style, {
          backgroundImage: itm.style.backgroundImage,
          backgroundColor: itm.style.backgroundColor
        });
        try {
          browser.defineProperty(itm, 'style', {
            value: new Proxy(itm.style, styleProxy),
            enumerable: true
          });
        } catch (_unused) {}
        browser.setAttribute(itm, 'style', `${browser.getAttribute(itm, 'style') || ''};${extra}`);
      }
      if (itm.tagName === 'A') {
        browser.setAttribute(itm, 'style', 'display:none!important');
      }
    });
    fixAdsPlaceholder();
    fixHeaderLeftover();
  };
  const blockForumAds = () => {
    const itm = browser.querySelector('#logostrip');
    if (itm) {
      remove(itm.parentNode.nextSibling);
    }
    if (browser.location.pathname.startsWith('/forum/dl/')) {
      const setBackground = node => browser.setAttribute(node, 'style', `${browser.getAttribute(node, 'style') || ''};background-color:#4ebaf6!important`);
      setBackground(browser.document.body);
      [...browser.querySelectorAll('body > div')].forEach(item => {
        if (!item.querySelector('.dw-fdwlink, .content') && !item.classList.contains('footer')) {
          remove(item);
        } else {
          setBackground(item);
        }
      });
    }
  };
  const blockAdInFeed = () => {
    const elements = browser.querySelectorAll('[id][class] > article[class^="post"]:not([itemid])');
    [...elements].forEach(element => {
      if (!element.querySelector('div[id^="poll-ajax-frame"]')) {
        hideViaPositionProperty(element);
      }
    });
  };
  browser.window.addEventListener('DOMContentLoaded', () => {
    const isForum = browser.location.pathname.startsWith('/forum/');
    const isUserProfile = isForum && browser.location.href.indexOf('showuser') > 0;
    if (isForum) {
      blockForumAds();
      if (isUserProfile) {
        blockHeaderAds();
      }
    } else {
      blockNewSidebarAds();
      blockHeaderAds();
      fixNavMenu();
      restoreBackground();
    }
  });
  observeDomChanges(() => {
    blockMobileAds();
    blockMobileHeaderFooterAds();
    blockAdInFeed();
    blockSidebarAds();
  });
}const hideFeedsAdsBlocks = () => {
  try {
    const cardwrappers = browser.querySelectorAll('.feed__row .feed__item > div[class^="card-wrapper"]');
    [...cardwrappers].forEach(card => {
      const adBlock = getParent(card, 2);
      if (!card.className.includes('is-desktop')
      || elementContains(card.querySelector('div[class$="subtitle-text"]'), /промо/)) {
        hideViaPositionProperty(adBlock);
      }
    });
  } catch (_unused) {}
};
if (isMatchingHostnames('zen.yandex.ru', 'zen.yandex.kz', 'zen.yandex.by', 'zen.yandex.ua', 'zen.yandex.md')) {
  const hideArticletAds = () => {
    try {
      const articleBlocks = browser.document.querySelectorAll('div.article-render__block');
      [...articleBlocks].forEach(block => {
        if (block.firstElementChild.classList.length >= 3 && !block.querySelector('div.yandex-forms-embed')) {
          hideViaPositionProperty(block);
        }
      });
      const mozSidebarAds = browser.document.querySelector('div[class^="article-ad"]');
      hideViaPositionProperty(mozSidebarAds);
      const sidebarAds = browser.document.querySelector('.article-right-ad-block');
      hideViaPositionProperty(sidebarAds);
    } catch (_unused2) {}
  };
  const hideStickyRightAd = () => {
    const stickyContainer = browser.document.querySelector('div[class$="__main"] > div.sticky-container');
    if (stickyContainer && stickyContainer.querySelector('div[class$="__ad-content"]')) {
      hideViaPositionProperty(stickyContainer);
    }
  };
  const hideUnderCommentsAd = () => {
    const commentSection = browser.document.getElementById('article__comments');
    const commentsWrapper = getParent(commentSection, 2);
    const underCommentsAd = commentsWrapper === null || commentsWrapper === void 0 ? void 0 : commentsWrapper.previousSibling;
    if (underCommentsAd && underCommentsAd.classList.contains('article__content_limited')) {
      hideViaPositionProperty(underCommentsAd);
    }
  };
  observeDomChanges(() => {
    hideArticletAds();
    hideFeedsAdsBlocks();
    hideStickyRightAd();
    hideUnderCommentsAd();
  });
}if (isMatchingHostnames('yandex.ru', 'yandex.kz', 'yandex.by', 'yandex.ua', 'yandex.md', 'yandex.fr', 'yandex.com.tr', 'yandex.com', 'yandex.lv', 'yandex.ee')) {
  if (browser.location.pathname.startsWith('/sport')) {
    const hideSportAds = () => {
      var _browser$document$que;
      const adsCard = (_browser$document$que = browser.document.querySelector('div[class^="mg-grid__col"] div[class^="neo-"][class$="mg-grid__item_type_card"]')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.parentNode;
      if (adsCard) {
        removeNode(adsCard);
      }
    };
    const hideStickyAds = () => {
      var _browser$document$que2;
      const adsSticky = (_browser$document$que2 = browser.document.querySelector('div[class="mg-sticky__inner"] div[class^="neo-"][class$="__column-item"]')) === null || _browser$document$que2 === void 0 ? void 0 : _browser$document$que2.parentNode;
      if (!adsSticky) {
        return;
      }
      const adsClassName = adsSticky.classList[0];
      if (adsClassName) {
        injectHidingRuleForClassname(adsClassName);
      }
    };
    observeDomChanges(() => {
      hideStickyAds();
      hideSportAds();
    });
  }
  if (browser.location.pathname.startsWith('/video/')) {
    const adBelowPlayer = () => {
      const videoInfo = browser.querySelector('.VideoViewer-Info');
      const adElement = videoInfo === null || videoInfo === void 0 ? void 0 : videoInfo.nextElementSibling;
      if (adElement && !(adElement !== null && adElement !== void 0 && adElement.className.startsWith('RelatedSnippets'))) {
        hideViaPositionProperty(adElement);
      }
    };
    const hideVideoListAds = () => {
      const videoList = browser.querySelectorAll('[id^="direct"]');
      if (!videoList.length) {
        return;
      }
      [...videoList].forEach(listItem => {
        hideViaDisplayProperty(listItem);
      });
    };
    const hideSidebarAds = () => {
      const adElements = browser.querySelectorAll('.Viewer-ScrollContainer > div[role="button"]');
      if (adElements) {
        [...adElements].forEach(element => {
          if (element && !element.querySelector('a[href^="https://yandex.ru/video/"]')) {
            hideViaDisplayProperty(element);
          }
        });
      }
    };
    observeDomChanges(() => {
      adBelowPlayer();
      hideVideoListAds();
      hideSidebarAds();
    });
  }
  if (browser.location.pathname.startsWith('/pogoda/') || browser.location.pathname.startsWith('/weather/')) {
    const hideAdsByClassName = className => {
      const adsBlocks = browser.document.getElementsByClassName(className);
      [...adsBlocks].forEach(ads => {
        hideViaPositionProperty(ads);
      });
    };
    const weatherAds = () => {
      const adElements = browser.querySelectorAll('div[id]');
      if (adElements.length) {
        [...adElements].forEach(adElement => {
          const scriptSibling = adElement.parentNode.querySelector('script[nonce]:not([src])');
          if (adElement.id !== 'root' && !(adElement !== null && adElement !== void 0 && adElement.className.startsWith('content')) && elementContains(scriptSibling, /xored=data|renderTo/)) {
            hideViaPositionProperty(adElement);
          }
        });
      }
    };
    const weatherAdPopup = () => {
      const wetherRemains = browser.querySelectorAll('style + div > div');
      const AdPopup = [...wetherRemains].find(wetherRemain => {
        var _wetherRemain$lastChi;
        return ((_wetherRemain$lastChi = wetherRemain.lastChild) === null || _wetherRemain$lastChi === void 0 ? void 0 : _wetherRemain$lastChi.innerText) === 'Реклама';
      });
      if (AdPopup) {
        hideViaPositionProperty(AdPopup.parentNode);
      }
      if (AdPopup && navigator.userAgent.match('Mobile')) {
        hideViaPositionProperty(AdPopup.parentNode.parentNode);
      }
    };
    const hideMonthForecastAds = () => {
      var _contentSections$, _contentSections$$chi, _contentSections$$chi2;
      const contentSections = browser.document.querySelectorAll('.content__section');
      const adsClassName = (_contentSections$ = contentSections[0]) === null || _contentSections$ === void 0 ? void 0 : (_contentSections$$chi = _contentSections$.children[1]) === null || _contentSections$$chi === void 0 ? void 0 : (_contentSections$$chi2 = _contentSections$$chi.firstElementChild) === null || _contentSections$$chi2 === void 0 ? void 0 : _contentSections$$chi2.classList[0];
      if (!adsClassName) {
        return;
      }
      hideAdsByClassName(adsClassName);
    };
    const hideMapForecastAds = () => {
      const adsElements = browser.document.querySelectorAll('div[data-bem] > div');
      const adsDirect = [...adsElements].find(adsElement => {
        var _adsElement$querySele;
        return ((_adsElement$querySele = adsElement.querySelector('div')) === null || _adsElement$querySele === void 0 ? void 0 : _adsElement$querySele.innerText) === 'Скрыть рекламу';
      });
      if (!adsDirect) {
        return;
      }
      hideViaPositionProperty(adsDirect);
    };
    observeDomChanges(() => {
      weatherAds();
      weatherAdPopup();
      hideMonthForecastAds();
      hideMapForecastAds();
    });
  }
  if (browser.location.pathname.startsWith('/maps/')) {
    const hideSidebarDirect = () => {
      var _yandexDirectHeader$p, _yandexDirectHeader$p2;
      const yandexDirectHeader = browser.querySelector('.sidebar-container a[href^="https://direct.yandex.ru/"]');
      if (!yandexDirectHeader) {
        return;
      }
      const adsContainer = (_yandexDirectHeader$p = yandexDirectHeader.parentNode) === null || _yandexDirectHeader$p === void 0 ? void 0 : (_yandexDirectHeader$p2 = _yandexDirectHeader$p.parentNode) === null || _yandexDirectHeader$p2 === void 0 ? void 0 : _yandexDirectHeader$p2.parentNode;
      if (!adsContainer || adsContainer.className.startsWith('masstransit')) {
        return;
      }
      hideViaDisplayProperty(adsContainer);
    };
    observeDomChanges(() => {
      hideSidebarDirect();
    });
  }
  if (browser.location.pathname.startsWith('/q/')) {
    const xhrFilter = request => {
      const {
        responseURL,
        withCredentials
      } = request;
      if (responseURL !== null && responseURL !== void 0 && responseURL.match(/context.js|static-mon/)) {
        return true;
      }
      if (responseURL !== null && responseURL !== void 0 && responseURL.includes('q/_crpd') && withCredentials === true) {
        return true;
      }
      if (responseURL !== null && responseURL !== void 0 && responseURL.match(/\/webvisor|\/watch|jstracer/) && withCredentials === true) {
        return true;
      }
      return false;
    };
    const removeFeedLeftovers = () => {
      const feedLeftovers = browser.querySelectorAll('div[data-id][class] + div[data-id][class] + div[data-id][class] + div[class]');
      [...feedLeftovers].forEach(element => {
        if (element.classList.length === 3 && !element.textContent) {
          hideViaDisplayProperty(element);
        }
      });
      const onScrollLeftovers = browser.querySelectorAll('script + section[class*="_"] > div div[id]');
      [...onScrollLeftovers].forEach(element => {
        const leftoverContainer = getParent(element, 3);
        if (element.querySelector('div[style*="width: 100%"]') || !element.textContent) {
          hideViaDisplayProperty(leftoverContainer);
        }
      });
    };
    const removeRightColumnLeftover = () => {
      var _browser$querySelecto;
      const mainColumn = (_browser$querySelecto = browser.querySelector('#page > div[class] > div[class] > script[type="application/ld+json"]')) === null || _browser$querySelecto === void 0 ? void 0 : _browser$querySelecto.parentNode;
      const rightColumn = mainColumn === null || mainColumn === void 0 ? void 0 : mainColumn.nextElementSibling;
      const incognitoAd = rightColumn === null || rightColumn === void 0 ? void 0 : rightColumn.querySelector('div[style^="will-change: position"] > div > div:last-child');
      if (incognitoAd) {
        hideViaDisplayProperty(incognitoAd);
      }
    };
    preventXHR(xhrFilter);
    observeDomChanges(() => {
      removeFeedLeftovers();
      removeRightColumnLeftover();
    });
  }
  if (browser.location.pathname.startsWith('/search/')) {
    const adSearchElements = () => {
      const searchElements = browser.document.querySelectorAll('.serp_js_inited.main .serp-list > .serp-item');
      if (searchElements) {
        [...searchElements].forEach(searchElement => {
          var _searchElement$queryS;
          if (searchElement && searchElement.querySelector('h2 > a[data-event-required]') && ((_searchElement$queryS = searchElement.querySelector('.label')) !== null && _searchElement$queryS !== void 0 && _searchElement$queryS.innerText.includes('реклама') || searchElement.querySelector('.direct-label'))) {
            hideViaPositionProperty(searchElement);
          }
        });
      }
    };
    observeDomChanges(() => {
      adSearchElements();
    });
  }
  if (browser.location.pathname.startsWith('/turbo')) {
    const removeTurboAds = () => {
      const turboAdBlocks = browser.document.querySelectorAll('div[data-bem*="extParams"], div[data-bem*="ownerId"]');
      [...turboAdBlocks].forEach(adBlock => {
        const adContainer = adBlock === null || adBlock === void 0 ? void 0 : adBlock.parentNode;
        if (adContainer && adContainer.getAttribute('data-log-node')) {
          hideViaPositionProperty(adContainer);
        }
      });
    };
    const removeTurboLeftovers = () => {
      const turboLeftovers = browser.document.querySelectorAll('#recommendations > div[class*="_type_adfox"]');
      [...turboLeftovers].forEach(leftover => {
        hideViaPositionProperty(leftover);
      });
    };
    observeDomChanges(() => {
      removeTurboAds();
      removeTurboLeftovers();
    });
  }
  if (browser.location.pathname.startsWith('/images')) {
    const removeImagesAds = () => {
      if (navigator.userAgent.match('Mobile')) {
        const elements = browser.querySelectorAll('div[data-bem*="adultDirectId"]');
        if (elements.length) {
          [...elements].forEach(element => {
            if (browser.getAttribute(element, 'data-bem').indexOf('config') === -1) {
              hideViaPositionProperty(element);
            }
          });
        }
      }
    };
    observeDomChanges(() => {
      removeImagesAds();
    });
  }
  if (isMatchingHostnames('yandex.ru', 'yandex.by') && browser.location.pathname === '/') {
    const adUnderSearch = () => {
      const elements = browser.document.querySelectorAll('.widgets[role="main"] *:not(div) > div[class]:not([class*="widget"]) *:not(div) > div[class] > div[class]');
      if (elements) {
        [...elements].forEach(element => {
          if (element && !element.className.startsWith('home') && !element.className.startsWith('services') && !element.className.startsWith('input') && !element.className.startsWith('search')) {
            hideViaPositionProperty(element);
          }
        });
      }
    };
    observeDomChanges(() => {
      adUnderSearch();
    });
  }
  const addedRules = {};
  const hideMainPageAds = () => {
    function getMainSelector(x) {
      if (x.banner && x.banner.cls) {
        let parentPath = x.banner.cls.banner__parent;
        if (!parentPath) {
          parentPath = x.banner.cls['b-banner__content_direct'];
        }
        return parentPath;
      }
      if (x.banner && x.banner.refresh) {
        const containerPath = x.banner.refresh.bannerContainer;
        if (!containerPath) {
          return null;
        }
        return containerPath;
      }
      return null;
    }
    function removeBanner(x) {
      let selector = getMainSelector(x);
      if (selector) {
        selector = `.${selector}`;
        if (addedRules[selector]) {
          return;
        }
        addedRules[selector] = true;
        [...browser.querySelectorAll(selector)].forEach(banner => {
          browser.setAttribute(banner, 'style', 'display:none!important');
        });
        [...browser.document.styleSheets].forEach(sheet => {
          try {
            if (sheet.disabled) {
              return;
            }
            const cssRules = safeGetStylesheetRules(sheet);
            for (let i = 0; i < cssRules.length; i += 1) {
              const rule = cssRules[i];
              if (rule.cssText.includes(' 728px 90px')) {
                sheet.disabled = true;
                continue;
              }
            }
          } catch (_unused) {}
        });
        return;
      }
      if (addedRules['div-hidden-by-size']) {
        return;
      }
      const divCollection = browser.querySelectorAll('div.main div');
      [...divCollection].forEach(elem => {
        if (elem.clientWidth === 728 && elem.clientHeight === 90) {
          elem.remove();
          addedRules['div-hidden-by-size'] = true;
        }
      });
    }
    if (browser.window.home && browser.window.home.export) {
      removeBanner(browser.window.home.export);
    }
  };
  const findAds = () => {
    const adIds = [];
    if (!browser.window.Ya) {
      return adIds;
    }
    Object.keys(browser.window.Ya).forEach(key => {
      const value = browser.window.Ya[key];
      if (!value || !value.adUsageStorageVars || !value.adUsageStorageVars.ads || !value.adUsageStorageVars.ads.list) {
        return;
      }
      value.adUsageStorageVars.ads.list.forEach(el => {
        if (el.renderTo && !adIds.includes(el.renderTo)) {
          adIds.push(el.renderTo);
        }
      });
    });
    return adIds;
  };
  const hideYaDirectAds = () => {
    const adIds = findAds();
    if (!adIds || adIds.length === 0) {
      return;
    }
    const styleSheet = [...browser.document.styleSheets].find(sheet => {
      if (safeGetStylesheetRules(sheet).length > 0 && !sheet.disabled) {
        return true;
      }
      return false;
    });
    if (!styleSheet) {
      return;
    }
    adIds.forEach(id => {
      const el = browser.document.getElementById(id);
      if (el) {
        removeNode(el);
      }
    });
  };
  const hideYandexBrowserAds = () => {
    const adsContainer = browser.querySelector('.container__banner');
    if (adsContainer && adsContainer.querySelector('[class^="direct"]')) {
      hideViaPositionProperty(adsContainer);
    }
  };
  const oneDirectZenFeed = () => {
    const zenCategories = browser.querySelectorAll('.placeholder-card__container');
    [...zenCategories].forEach(zenCategorie => {
      var _zenCategorie$firstEl;
      const zenChildAttributes = (_zenCategorie$firstEl = zenCategorie.firstElementChild) === null || _zenCategorie$firstEl === void 0 ? void 0 : _zenCategorie$firstEl.attributes;
      if (!zenChildAttributes) {
        return;
      }
      for (let i = 0; i < zenChildAttributes.length; i += 1) {
        if (zenChildAttributes[i] && /^[a-zA-Z0-9]{2}_[a-zA-Z0-9]{2}$/.test(zenChildAttributes[i].value)) {
          hideViaPositionProperty(zenCategorie);
        }
      }
    });
  };
  browser.document.addEventListener('DOMContentLoaded', () => {
    hideMainPageAds();
    hideYaDirectAds();
  }, false);
  observeDomChanges(() => {
    hideYandexBrowserAds();
    hideMainPageAds();
    hideYaDirectAds();
    hideFeedsAdsBlocks();
    oneDirectZenFeed();
  });
}if (isMatchingHostnames('kinopoisk.ru')) {
  const hideAdblockWarning = () => {
    const node = browser.querySelector('div[class^="toaster-container"], div[class*="adBlockWarningRoot"]');
    if (node && node.querySelector('a[href*="adblock.html"]')) {
      removeNode(node);
    }
  };
  const hideBrandingAds = () => {
    const probeStyles = browser.querySelectorAll('style[id]');
    [...probeStyles].forEach(styleEl => {
      if (styleEl.sheet && styleEl.sheet.rules.length <= 10) {
        removeNode(styleEl);
      }
    });
    iterateCSSRules(rule => {
      if (rule.selectorText && rule.selectorText.indexOf('.kinopoisk-header-branding__link') === 0) {
        hideViaDisplayProperty(rule);
      } else if (rule.selectorText && rule.selectorText.indexOf('.kinopoisk-header-branding__image') === 0) {
        rule.style.visibility = 'hidden';
      }
    });
    [...browser.querySelectorAll('.page-content > div[id]:not([class])')].forEach(probe => {
      if (probe.querySelector(':scope > div[id][style]')) {
        removeNode(probe);
      }
    });
  };
  const hideAdsByStylesheet = () => {
    const adsSheet = browser.querySelector('.mb-style-tag');
    if (!adsSheet || !adsSheet.sheet || adsSheet.sheet.cssRules.length !== 1) {
      return;
    }
    hideViaDisplayProperty(adsSheet.sheet.cssRules[0]);
  };
  const hideTopBanner = () => {
    const bannerMain = browser.querySelector('.desktop-layout-with-sidebar__middle > .desktop-layout-with-sidebar__wrapper > div[class*="media"]:first-child');
    if (bannerMain) {
      removeNode(bannerMain);
    }
    const bannerSub = browser.querySelector('div.media-post-page > div[class$="abbreviated"]:first-child, div.media-post-page > div[class$="rendered"]:first-child');
    if (bannerSub) {
      removeNode(bannerSub);
    }
    const bannerContainer = browser.querySelector('.page-content > div[style="min-height: 0px;"]');
    const bannerScript = browser.querySelector('.page-content > div[style="min-height: 0px;"] script');
    if (bannerContainer && bannerScript && bannerScript.innerText.includes('xored=data')) {
      removeNode(bannerContainer);
    }
  };
  const hideinArticleSideAd = () => {
    const sidebarAd = browser.querySelector('div[class$="__sidebar-content"] > div[class][data-tid] > div[id][class$="__container"] > div[id][class]:not([data-id])');
    if (sidebarAd) {
      removeNode(sidebarAd);
    }
  };
  const hideFilmAds = () => {
    const filmAds = browser.querySelectorAll('div[class*="styles_rootRendered__"] div[style="min-width:1px"] > div[class][data-tid]');
    [...filmAds].forEach(ad => {
      if (ad.querySelector('div[id][class^="styles_container__"] > div[id][class]:not([data-tid])')) {
        removeNode(ad);
      }
    });
    const topBanner = browser.querySelector('div[class^="styles_rootWithBranding__"] + div > div[class^="styles_abbreviated__"]');
    if (topBanner && topBanner.querySelector('div[class^="styles_themeTopBanner__"] > div[data-tid] > div[id][class]:not([data-tid])')) {
      removeNode(topBanner);
    }
  };
  observeDomChanges(() => {
    hideAdblockWarning();
    hideBrandingAds();
    hideAdsByStylesheet();
    hideTopBanner();
    hideinArticleSideAd();
    hideFilmAds();
  });
}if (isMatchingHostnames('yandex.ru', 'yandex.kz', 'yandex.by', 'yandex.ua', 'yandex.md', 'yandex.fr', 'yandex.com.tr', 'yandex.com') && browser.location.pathname.startsWith('/news')) {
  const hideSidebarAds = () => {
    const pageWrapper = browser.document.querySelector('div[id$="-page"] > div > div > div.mg-grid__row');
    const columns = pageWrapper === null || pageWrapper === void 0 ? void 0 : pageWrapper.childNodes;
    if (!columns || columns.length === 1) {
      return;
    }
    for (let i = 1; i < columns.length; i += 1) {
      const column = columns[i];
      const usefulElementsSelector = ['.news-search-story',
      '[class^="news-search__filter"]',
      '.news-top-flexible-stories', '.news-story',
      '[class$="__inner"] > .news-widget', '.news-top-rubric-heading'];
      const elements = column.querySelectorAll(usefulElementsSelector.join(', '));
      const visible = [];
      elements.forEach(el => {
        if (el.offsetHeight > 0 && el.offsetWidth > 0) {
          visible.push(el);
        }
      });
      if (visible.length === 0) {
        hideViaPositionProperty(column);
      }
    }
  };
  const hideGridAds = () => {
    var _browser$document$que;
    const cards = (_browser$document$que = browser.document.querySelector('.news-feed > div.mg-grid__row')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.childNodes;
    if (!cards) {
      return;
    }
    [...cards].forEach(card => {
      if (card.querySelector('div[class*="_type_native"] > div[id]')) {
        hideViaDisplayProperty(card);
      }
    });
    const underStoryBanners = browser.querySelectorAll('div.mg-grid__col > article.mg-story + div, .mg-grid__col > div.mg-grid__row > div.mg-grid__col > div[class]');
    [...underStoryBanners].forEach(underStoryBanner => {
      if (underStoryBanner.className.includes('_type_partner') || underStoryBanner.className.includes('banger')) {
        hideViaDisplayProperty(underStoryBanner);
      }
    });
  };
  const hideMobileGridAds = () => {
    if (navigator.userAgent.match('Mobile')) {
      var _browser$document$que2;
      const mobileCards = (_browser$document$que2 = browser.document.querySelector('.mg-layout')) === null || _browser$document$que2 === void 0 ? void 0 : _browser$document$que2.childNodes;
      if (!mobileCards) {
        return;
      }
      [...mobileCards].forEach(card => {
        if (card.className.includes('_banner_')) {
          hideViaPositionProperty(card);
        }
      });
    }
  };
  const hideRubricAds = () => {
    const banners = browser.document.querySelectorAll('[class*="_type_native"]:not([class*="news-feed__"])');
    if (!banners) {
      return;
    }
    [...banners].forEach(banner => {
      hideViaDisplayProperty(banner);
    });
    const headers = browser.document.querySelectorAll('.news-top-rubric-heading');
    [...headers].forEach(header => {
      const span = header.querySelector('span');
      if (span && span.innerText === 'Реклама') {
        hideViaDisplayProperty(header);
      }
    });
  };
  const mobileDirect = () => {
    if (navigator.userAgent.match('Mobile')) {
      const mobileAds = browser.querySelectorAll('.mg-layout > div[class][data-log-id]');
      [...mobileAds].forEach(mobileAd => {
        if (mobileAd.querySelector('div[style*="width: 100%"]') || !mobileAd.querySelector('h1.mg-story__title')) {
          hideViaPositionProperty(mobileAd);
        }
      });
    }
  };
  const hideYaDirectAds = () => {
    const containers = document.querySelectorAll('.root123');
    containers.forEach(el => {
      if (el.parentNode.tagName !== 'BODY') {
        hideViaDisplayProperty(el);
      }
    });
  };
  observeDomChanges(() => {
    hideSidebarAds();
    hideRubricAds();
    hideGridAds();
    hideMobileGridAds();
    mobileDirect();
    hideYaDirectAds();
  });
}if (isMatchingHostnames('mail.yandex.ru', 'mail.yandex.kz', 'mail.yandex.by', 'mail.yandex.ua', 'mail.yandex.md', 'mail.yandex.com.tr', 'mail.yandex.com', 'mail.yandex.fr', 'mail.yandex.ee', 'mail.yandex.kg', 'mail.yandex.lv', 'mail.yandex.lt')) {
  const removeHeaderAds = () => {
    const infolineBox = browser.document.querySelector('.ns-view-infoline-box');
    if (!infolineBox) {
      return;
    }
    const adsBox = infolineBox.nextElementSibling;
    if (adsBox && adsBox.nextElementSibling && adsBox.nextElementSibling.classList[0] === 'ns-view-right-box') {
      hideViaPositionProperty(adsBox);
    }
  };
  const removeMailAds = function removeMailAds() {
    [...browser.document.styleSheets].forEach(sheet => {
      if (!sheet.href || browser.location.hostname !== new URL(sheet.href).hostname) {
        return;
      }
      const rules = [...safeGetStylesheetRules(sheet)];
      if (rules.length > 60) {
        return;
      }
      rules.forEach(rule => {
        if (rule.selectorText && /^\..[a-zA-Z0-9_]{5,}$/.test(rule.selectorText) && rule.style.display !== 'none') {
          rule.style.display = 'none';
          const rightHeader = browser.querySelector('div.PSHeader');
          if (rightHeader) {
            rightHeader.style.top = '0';
          }
        }
      });
    });
  };
  const removeSiderbarAds = () => {
    var _adsIframe$parentNode;
    const adsIframe = document.querySelector('.mail-Layout-Aside iframe');
    if (!adsIframe) {
      return;
    }
    const adsContainer = (_adsIframe$parentNode = adsIframe.parentNode) === null || _adsIframe$parentNode === void 0 ? void 0 : _adsIframe$parentNode.parentNode;
    if (adsContainer && adsContainer.classList.length > 0 && !adsContainer.classList[0].startsWith('ns-view-')) {
      hideViaPositionProperty(adsContainer);
    }
  };
  const leftSiderbarAds = () => {
    const elementsLeftSidebar = browser.document.querySelectorAll('.mail-Layout-Aside .mail-Layout-Aside-Inner-Box > div[class^="ns-view-"]');
    if (elementsLeftSidebar) {
      [...elementsLeftSidebar].forEach(element => {
        if (element
        && !element.querySelector('a[href]')
        && element.querySelector('div[style*="width: 100%"]')) {
          removeNode(element);
        }
        if (element && (element !== null && element !== void 0 && element.textContent.includes('Отключить рекламу') || element !== null && element !== void 0 && element.textContent.includes('Скрыть рекламу'))) {
          removeNode(element === null || element === void 0 ? void 0 : element.nextElementSibling);
        }
      });
    }
    const directPostSendWindow = browser.document.querySelector('.ComposeDoneDirect');
    if (directPostSendWindow) {
      hideViaPositionProperty(directPostSendWindow);
    }
  };
  observeDomChanges(() => {
    removeMailAds();
    removeHeaderAds();
    removeSiderbarAds();
    leftSiderbarAds();
  });
}if (isMatchingHostnames('afisha.yandex.ru', 'afisha.yandex.kz', 'afisha.yandex.by', 'afisha.yandex.ua', 'afisha.yandex.md')) {
  const isNoindex = element => {
    if (!element) {
      return false;
    }
    return !!(element.previousSibling && element.nextSibling && element.previousSibling.textContent === 'noindex' && element.nextSibling.textContent === '/noindex');
  };
  const hideTopBanner = () => {
    try {
      const topBanner = browser.document.querySelector('div[class*="grid_adaptive"] > div.i-background').nextElementSibling.firstElementChild;
      if (isNoindex(topBanner)) {
        hideViaPositionProperty(topBanner);
      }
    } catch (_unused) {}
  };
  const hideBannerAfterHeader = () => {
    try {
      const container = browser.document.querySelector('header + .page-content').firstElementChild.firstElementChild;
      [...container.children].forEach(childItem => {
        if (isNoindex(childItem.firstElementChild)) {
          hideViaPositionProperty(childItem);
        }
      });
    } catch (_unused2) {}
  };
  const hideSidebarAds = () => {
    try {
      const sidebarAds = browser.document.querySelector('aside > .sidebar');
      [...sidebarAds.children].forEach(siderbarItem => {
        if (isNoindex(siderbarItem.firstElementChild)) {
          hideViaPositionProperty(siderbarItem);
        }
      });
    } catch (_unused3) {}
  };
  const hideEventsAds = () => {
    try {
      const eventAttributes = browser.document.querySelector('.event-attributes').parentNode;
      [...eventAttributes.children].forEach(item => {
        if (isNoindex(item)) {
          hideViaPositionProperty(item);
        }
      });
    } catch (_unused4) {}
  };
  const hideEventsBanner = () => {
    try {
      [...browser.document.querySelectorAll('.events-list__list')].forEach(eventList => {
        [...eventList.children].forEach(eventItem => {
          if (isNoindex(eventItem.firstElementChild)) {
            hideViaPositionProperty(eventItem);
          }
        });
      });
    } catch (_unused5) {}
  };
  const hideFooterAds = () => {
    try {
      const footerAdsContainer = browser.document.querySelector('.viewed-events-loader').previousElementSibling;
      if (isNoindex(footerAdsContainer)) {
        hideViaPositionProperty(footerAdsContainer);
      }
    } catch (_unused6) {}
  };
  const hideFooterBanner = () => {
    try {
      const footerBanner = browser.document.querySelector('[class$="__foot-wrapper"] > .grid__inner').firstElementChild;
      if (isNoindex(footerBanner)) {
        hideViaPositionProperty(footerBanner);
      }
    } catch (_unused7) {}
  };
  const footerBannerMobile = () => {
    if (navigator.userAgent.match('Mobile')) {
      try {
        var _browser$document$que;
        const footerBanner = (_browser$document$que = browser.document.querySelector('.page-content + div[class]')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.firstElementChild;
        if (isNoindex(footerBanner)) {
          hideViaPositionProperty(footerBanner);
        }
        const suspectItems = browser.querySelectorAll('span[data-component] > div[class^="Item-"]');
        [...suspectItems].forEach(suspectItem => {
          if (suspectItem.querySelector('div[data-banner-id]')) {
            hideViaPositionProperty(suspectItem);
          }
        });
      } catch (_unused8) {}
    }
  };
  const hideAnotherAds = () => {
    const anotherTopBanner = browser.querySelector('div[data-bem*="widget-promo-"] > div.grid__inner > div[class]');
    if (isNoindex(anotherTopBanner)) {
      hideViaPositionProperty(anotherTopBanner);
    }
    const anotherFooterBanner = browser.querySelector('div[class*="event-content-react"][data-bem*="props"] + div[class][id]');
    if (isNoindex(anotherFooterBanner)) {
      hideViaPositionProperty(anotherFooterBanner);
    }
  };
  observeDomChanges(() => {
    hideTopBanner();
    hideBannerAfterHeader();
    hideSidebarAds();
    hideEventsAds();
    hideEventsBanner();
    hideFooterAds();
    hideFooterBanner();
    footerBannerMobile();
    hideAnotherAds();
  });
}if (isMatchingHostnames('tv.yandex.ru', 'tv.yandex.kz', 'tv.yandex.by', 'tv.yandex.ua', 'tv.yandex.md')) {
  const hideSimilarAds = adsBlock => {
    var _adsBlock$firstElemen;
    const adsClassNames = adsBlock === null || adsBlock === void 0 ? void 0 : (_adsBlock$firstElemen = adsBlock.firstElementChild) === null || _adsBlock$firstElemen === void 0 ? void 0 : _adsBlock$firstElemen.classList;
    if (!adsClassNames) {
      return;
    }
    [...adsClassNames].forEach(className => {
      if (className.endsWith('__wrapper')) {
        const adsElements = browser.document.getElementsByClassName(className);
        [...adsElements].forEach(ads => {
          hideViaPositionProperty(ads);
        });
      }
    });
  };
  const hideHeaderBanner = () => {
    var _adsContainer$firstEl;
    const header = browser.document.querySelector('header');
    const adsContainer = header === null || header === void 0 ? void 0 : header.previousElementSibling;
    if (adsContainer !== null && adsContainer !== void 0 && (_adsContainer$firstEl = adsContainer.firstElementChild) !== null && _adsContainer$firstEl !== void 0 && _adsContainer$firstEl.className.endsWith('__wrapper')) {
      hideViaPositionProperty(adsContainer);
    }
  };
  const hidePageBanner = () => {
    var _ads$style;
    const contentHeader = browser.document.querySelector('.content__header');
    const ads = contentHeader === null || contentHeader === void 0 ? void 0 : contentHeader.previousElementSibling;
    if (ads !== null && ads !== void 0 && (_ads$style = ads.style) !== null && _ads$style !== void 0 && _ads$style.backgroundImage && ads !== null && ads !== void 0 && ads.querySelector('a[target="_blank"]')) {
      hideViaPositionProperty(ads);
    }
  };
  const hideGridAds = () => {
    try {
      const grid = browser.document.querySelectorAll('[class^="grid__"]');
      const adGrid = [...grid].filter(elem => getComputedStyle(elem)['grid-row-start'] === 'adv' || getComputedStyle(elem)['grid-row-start'] === 'wide');
      [...adGrid].forEach(ad => {
        hideViaPositionProperty(ad);
        hideSimilarAds(ad);
      });
    } catch (_unused) {}
  };
  const hideChannelPageAds = () => {
    const stickyAd = browser.querySelectorAll('div[class*="channel-controller__"] > div[class]:not([class*="channel"]) > div[class][id]');
    if (stickyAd.length === 1) {
      hideViaPositionProperty(stickyAd[0]);
    }
    const bottomBanner = browser.querySelectorAll('div[class^="content__"] > div[class$="__wrapper"] > div[class][id]');
    if (bottomBanner.length === 1) {
      hideViaPositionProperty(bottomBanner[0]);
    }
  };
  const hideProgramPageAds = () => {
    const stickyAd = browser.querySelectorAll('div[class^="content__"] > div[class*="__wrapper"] > div[class][id]');
    if (stickyAd.length === 2) {
      hideViaPositionProperty(stickyAd[0]);
    }
  };
  observeDomChanges(() => {
    hideGridAds();
    hideHeaderBanner();
    hidePageBanner();
    hideChannelPageAds();
    hideProgramPageAds();
  });
}const removeMailAdsOverride = () => {
  if (typeof unsafeWindow === 'undefined') {
    return;
  }
  const magic = generateRandomString();
  Object.defineProperty(unsafeWindow.Object.prototype, 'componentWillMount', {
    get: function get() {
      const v = this[magic];
      if (typeof v !== 'function' || v.toString().indexOf('getDerivedStateFromProps') >= 0) {
        return v;
      }
      return function () {
        this.items = [];
      };
    },
    set: function set(v) {
      this[magic] = v;
    }
  });
};
const hideLeftSidebarAds = () => {
  const n = 3;
  [...browser.document.styleSheets].forEach(sheet => {
    [...safeGetStylesheetRules(sheet)].forEach(rule => {
      if (rule.selectorText && rule.selectorText.includes(', .b-layout__col_1_2')) {
        try {
          const leftSidebar = [...browser.document.querySelectorAll(rule.selectorText)];
          const ads = leftSidebar[leftSidebar.length - 1].children;
          for (let i = ads.length - n; i < ads.length; i += 1) {
            hideViaDisplayProperty(ads[i]);
          }
        } catch (_unused) {}
      }
    });
  });
};
const hideGridAds = () => {
  const adsItems = browser.document.querySelectorAll('span.pl_cs');
  if (!adsItems) {
    return;
  }
  [...adsItems].forEach(ads => {
    const adsContainer = ads.parentNode.parentNode.parentNode.parentNode.parentNode;
    if (adsContainer && ads.innerText === 'Реклама' && adsContainer.id.startsWith('_pcard')) {
      hideViaDisplayProperty(adsContainer);
    }
  });
};
const hideAdsOldInterface = () => {
  const adsLeftColumn = browser.querySelector('#b-nav_fileSearch + div');
  if (adsLeftColumn) {
    hideViaPositionProperty(adsLeftColumn);
  }
  const adTopLetters = browser.querySelector('#adman-line');
  const adTopLettersParent = adTopLetters === null || adTopLetters === void 0 ? void 0 : adTopLetters.parentNode;
  if (adTopLettersParent) {
    hideViaPositionProperty(adTopLettersParent);
  }
};
const rightSidebardAds = () => {
  const column = browser.querySelector('div[class$="__layout_main"] > span > div:nth-last-child(2)');
  if (column && column.querySelector('[style="top: 0px;"]')) {
    removeNode(column);
  }
};
const adAboveLettersFeed = () => {
  var _column$querySelector;
  const column = browser.querySelector('div[class$="__layout_main"] > span > div:nth-child(2)');
  const listItems = column === null || column === void 0 ? void 0 : (_column$querySelector = column.querySelector('div[style^="height:"][style$="padding-top: 0px;"]')) === null || _column$querySelector === void 0 ? void 0 : _column$querySelector.childNodes;
  if (!listItems) {
    return;
  }
  [...listItems].forEach(item => {
    if (!item.querySelector('a') && !item.classList.contains('js-letter-list-item')) {
      hideViaPositionProperty(item);
    }
  });
};
const hideAtom = () => {
  const usefulElements = browser.document.querySelectorAll('.tabs ~ div[class] > div[class]');
  if (usefulElements) {
    [...usefulElements].forEach(element => {
      if (element && element.querySelector('a[href^="https://r.mail.ru/redir/"]')) {
        hideViaPositionProperty(element);
      }
    });
  }
};
const hideAdAbovePulse = () => {
  const suspectedAds = browser.document.querySelectorAll('.tabs-content ~ div[class]');
  if (suspectedAds) {
    [...suspectedAds].forEach(suspectedAd => {
      if (suspectedAd && !suspectedAd.querySelector('.tabs-content__item')) {
        hideViaPositionProperty(suspectedAd);
      }
    });
  }
};
const hideAdRightColumn = () => {
  const rightColumnDiv = browser.querySelector('div[class^="layout__main"] > div[class^="layout__col"]:last-child');
  if (rightColumnDiv && (rightColumnDiv === null || rightColumnDiv === void 0 ? void 0 : rightColumnDiv.innerText.indexOf('Реклама')) > 0) {
    hideViaPositionProperty(rightColumnDiv);
  }
};
const hideAnswersBanner = () => {
  const banner = browser.querySelector('div[class^="list_"] > div[class^="layoutBlock_"] > div[class^="wrapper_"] > div[class^="wrapper__inner_"] + div[class]');
  if (banner && banner.classList.length === 1 && banner.innerText.includes('Реклама')) {
    hideViaPositionProperty(banner);
  }
};
const isOldInterface = () => browser.location.pathname.indexOf('/messages/') === 0;
if (isMatchingHostnames('e.mail.ru')) {
  if (isOldInterface()) {
    removeMailAdsOverride();
  }
  observeDomChanges(() => {
    adAboveLettersFeed();
    rightSidebardAds();
    hideCssRulesBySelectorText(', .layout__column_right');
    hideCssRulesBySelectorText('.layer-sent-page__banner');
    if (isOldInterface()) {
      hideAdsOldInterface();
      hideLeftSidebarAds();
      hideCssRulesBySelectorText(', .b-datalist__head__item_rb');
    }
  });
}
if (isMatchingHostnames('octavius.mail.ru')) {
  observeDomChanges(() => {
    adAboveLettersFeed();
    rightSidebardAds();
    hideCssRulesBySelectorText(', .layout__column_right');
    hideCssRulesBySelectorText('.layer-sent-page__banner');
  });
}
if (isMatchingHostnames('mail.ru')) {
  observeDomChanges(() => {
    hideCssRulesBySelectorText('.rectangle-banner');
    hideGridAds();
  });
}
if (isMatchingHostnames('mail.ru') && browser.location.pathname === '/') {
  observeDomChanges(() => {
    hideAtom();
    hideAdAbovePulse();
  });
}
if (isMatchingHostnames('otvet.mail.ru')) {
  observeDomChanges(() => {
    hideAdRightColumn();
    hideAnswersBanner();
  });
}const isAdsStyle = rules => {
  if (rules.length <= 10) {
    let result = true;
    [...rules].forEach(rule => {
      if (rule.style && (!rule.style.backgroundImage || rule.style.backgroundImage.endsWith('.png")') || rule.style.backgroundImage.endsWith('.svg")'))) {
        result = false;
      }
    });
    return result;
  }
  return false;
};
const hideAdsByBackgroundImage = () => {
  const pulseLenta = browser.querySelector('.pulse-lenta');
  const styles = browser.document.querySelectorAll('style');
  [...styles].forEach(style => {
    const rules = safeGetStylesheetRules(style.sheet);
    if (isAdsStyle(rules)) {
      [...rules].forEach(rule => {
        var _adsImage$parentNode, _adsImage$parentNode$;
        const adsImage = browser.querySelector(rule.selectorText);
        if (pulseLenta && pulseLenta.contains(adsImage)) {
          return;
        }
        const adsBlock = adsImage === null || adsImage === void 0 ? void 0 : (_adsImage$parentNode = adsImage.parentNode) === null || _adsImage$parentNode === void 0 ? void 0 : (_adsImage$parentNode$ = _adsImage$parentNode.parentNode) === null || _adsImage$parentNode$ === void 0 ? void 0 : _adsImage$parentNode$.parentNode;
        if (!adsBlock) {
          return;
        }
        hideViaDisplayProperty(adsBlock);
      });
    }
  });
};
const hideSmallAdsNearArticle = () => {
  if (navigator.userAgent.match('Mobile')) {
    const smallAds = browser.querySelectorAll('.wrapper_with-article-swipe-navigation > div[class]:not([style]), .wrapper_with-article-swipe-navigation > span');
    if (smallAds) {
      [...smallAds].forEach(smallAd => {
        if (smallAd
        && smallAd.__smokedElement === true) {
          hideViaPositionProperty(smallAd);
        }
      });
    }
  }
};
if (isMatchingHostnames('news.mail.ru')) {
  observeDomChanges(() => {
    hideCssRulesBySelectorText(/, \.p-directhack|\.cols_experiment-1|\.js-smoky-single/);
    hideAdsByBackgroundImage();
  });
}
if (isMatchingHostnames('mail.ru')) {
  observeDomChanges(() => {
    hideCssRulesBySelectorText(/\.spring_side|\.p-directhack|\.rb-direct-mimic_index|\.deti-slot_box|\.health-slot_box|\.spring|\.rb-direct-wrapper|\.rb_body|\.rb-direct-side|\.news-item__link|\.notify/);
  });
}
if (isMatchingHostnames('auto.mail.ru')) {
  observeDomChanges(() => {
    hideCssRulesBySelectorText(/\.rb_main-240x400|\.trg-banners|\.rb_hide_by_parallax/);
  });
}
if (isMatchingHostnames('sportmail.ru')) {
  observeDomChanges(() => {
    hideSmallAdsNearArticle();
    hideCssRulesBySelectorText(/\.cols_experiment-1|\.p-spring/);
    hideAdsByBackgroundImage();
  });
}
if (isMatchingHostnames('horo.mail.ru')) {
  observeDomChanges(() => {
    hideCssRulesBySelectorText(/\.incut_full|\.cols__column_sidebar/);
  });
}
if (isMatchingHostnames('hi-tech.mail.ru')) {
  observeDomChanges(() => {
    hideCssRulesBySelectorText(/\.sticky-springs__item|\.cols__column_asd|\.viewbox__side/);
    hideAdsByBackgroundImage();
  });
}
if (isMatchingHostnames('deti.mail.ru')) {
  observeDomChanges(() => {
    hideAdsByBackgroundImage();
  });
}
if (isMatchingHostnames('lady.mail.ru')) {
  observeDomChanges(() => {
    hideCssRulesBySelectorText('.cols_experiment-1');
  });
}if (isMatchingHostnames('music.yandex.ru', 'music.yandex.kz', 'music.yandex.by', 'music.yandex.ua', 'music.yandex.md')) {
  const removeHeaderAds = () => {
    var _browser$document$que;
    const headerAdsBlock = (_browser$document$que = browser.document.querySelector('.adfox-brick')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.previousElementSibling;
    if (headerAdsBlock && headerAdsBlock.querySelector('.d-overhead__close')) {
      hideViaPositionProperty(headerAdsBlock);
    }
  };
  observeDomChanges(() => {
    removeHeaderAds();
  });
}if (isMatchingHostnames('ok.ru')) {
  const mimicBannerSelectors = ['#RightColumnBannerInner', '#hook_Block_ViewportHeightAwareBanner'];
  const isMimicAdStyle = selectorText => {
    if (mimicBannerSelectors.some(mimicStyle => selectorText.includes(mimicStyle))) {
      return true;
    }
    return false;
  };
  const removeOkAds = () => {
    [...browser.document.styleSheets].forEach(sheet => {
      [...safeGetStylesheetRules(sheet)].forEach(rule => {
        if (rule.selectorText && isMimicAdStyle(rule.selectorText) && rule.style.display !== 'none') {
          rule.style.display = 'none';
        }
      });
    });
  };
  const removeOkFeedAds = () => {
    const feedItems = document.querySelectorAll('.feed-list > .feed-w > [data-feed-id]');
    feedItems.forEach(item => {
      if (item.style.display === 'none') {
        return;
      }
      const feedTopItems = item.querySelectorAll('.feed_top .feed_ava+div > div[class]');
      feedTopItems.forEach(topItem => {
        if (topItem.innerText === 'Реклама' || topItem.innerText === 'Ad') {
          item.style.display = 'none';
        }
      });
      const adMarker = item.querySelector('.feed_top .feed_count > div');
      if (!adMarker) {
        return;
      }
      if (adMarker.innerText === 'Реклама' || adMarker.innerText === 'Ad') {
        item.style.display = 'none';
      }
    });
  };
  observeDomChanges(() => {
    removeOkAds();
    removeOkFeedAds();
  });
}function isInsideCircumventionScript() {
  if (!document.currentScript || !document.currentScript.innerText) {
    return false;
  }
  const scriptText = document.currentScript.innerText;
  if (scriptText.length > 100000 && scriptText.indexOf('window.Adf') > 0 && scriptText.indexOf('checkAdPlace') > 0) {
    return true;
  }
  return false;
}
const hasSimilarAttributes = children => {
  if (children.length === 1) {
    return false;
  }
  for (let i = 1; i < children.length; i += 1) {
    var _children, _children$attributes$, _children$i, _children$i$attribute;
    if (((_children = children[i - 1]) === null || _children === void 0 ? void 0 : (_children$attributes$ = _children.attributes[0]) === null || _children$attributes$ === void 0 ? void 0 : _children$attributes$.value) !== ((_children$i = children[i]) === null || _children$i === void 0 ? void 0 : (_children$i$attribute = _children$i.attributes[0]) === null || _children$i$attribute === void 0 ? void 0 : _children$i$attribute.value)) {
      return false;
    }
  }
  return true;
};
const hideYandexDirectByLink = () => {
  const adsImg = browser.document.querySelectorAll('a[target="_blank"][style^="background-image: url(\'//"]');
  [...adsImg].forEach(img => {
    var _img$parentNode, _img$parentNode2, _img$parentNode2$pare;
    const adsBlockType1 = img === null || img === void 0 ? void 0 : (_img$parentNode = img.parentNode) === null || _img$parentNode === void 0 ? void 0 : _img$parentNode.parentNode;
    const adsBlockType2 = img === null || img === void 0 ? void 0 : (_img$parentNode2 = img.parentNode) === null || _img$parentNode2 === void 0 ? void 0 : (_img$parentNode2$pare = _img$parentNode2.parentNode) === null || _img$parentNode2$pare === void 0 ? void 0 : _img$parentNode2$pare.parentNode;
    if (hasSimilarAttributes(adsBlockType1 === null || adsBlockType1 === void 0 ? void 0 : adsBlockType1.children)) {
      hideViaDisplayProperty(adsBlockType1);
    }
    if (hasSimilarAttributes(adsBlockType2 === null || adsBlockType2 === void 0 ? void 0 : adsBlockType2.children)) {
      hideViaDisplayProperty(adsBlockType2);
    }
  });
};
const hideYandexDirectByStyle = () => {
  const styleSheets = browser.document.getElementsByTagName('style');
  [...styleSheets].forEach(styleSheet => {
    const rules = [...safeGetStylesheetRules(styleSheet.sheet)];
    const firstRule = rules[0];
    if (rules.length > 50 || !firstRule) {
      return;
    }
    if (firstRule.selectorText && /[a-zA-Z0-9]{2,8}\[[a-zA-Z0-9]{2,8}\*="[a-zA-Z0-9]{2,10}"]/.test(firstRule.selectorText)) {
      hideViaPositionProperty(firstRule);
    }
  });
};
const removeLeftoverBoxes = () => {
  const mainHorizontalContainers = browser.querySelectorAll('div.commercial-branding > div[class] > div[class^="rui__"]');
  const mainVertical = browser.querySelectorAll('#main > div.commercial-branding > div[class] div[style="height: 600px;"]');
  const mainVerticalContainers = [...mainVertical].map(element => getParent(element, 1));
  const articleHorizontalContainers = browser.querySelectorAll('div[data-blocks^="cluster_"] div[class^="rui__"]');
  const articleLeft = browser.querySelectorAll('div[data-blocks^="cluster_"] div[data-blocks]  div[id^="adfox-"]');
  const articleLeftContainers = [...articleLeft].map(element => getParent(element, 3));
  const articleRight = browser.querySelectorAll('div[data-marker-observer*="-dir1"] div[id^="adfox-"]');
  const articleRightContainers = [...articleRight].map(element => getParent(element, 4));
  const feedSquareContainers = browser.querySelectorAll('#rootWrapper > div[class] > div[style^="width:"]');
  const subVertical = browser.querySelectorAll('#rootWrapper div:not([data-marker-observer*="-dir1"]) > div[id^="adfox-"]');
  const subVerticalContainers = [...subVertical].map(element => getParent(element, 3));
  const allContainers = [...mainHorizontalContainers, ...mainVerticalContainers, ...articleHorizontalContainers, ...articleLeftContainers, ...articleRightContainers, ...feedSquareContainers, ...subVerticalContainers];
  allContainers.forEach(container => {
    hideViaDisplayProperty(container);
  });
  if (browser.location.hostname.startsWith('horoscopes')) {
    const horoscopeLeftovers = browser.querySelectorAll('#root > div div > div[style*="block"]');
    const horoscopePersistent = [...horoscopeLeftovers].map(element => getParent(element, 2));
    [...horoscopePersistent].forEach(container => {
      removeNode(container);
    });
  }
};
const removeAnnoyance = () => {
  const modalButton = browser.querySelector('button[data-cerber*="::adblock_screen::"]');
  const fixedBody = browser.querySelector('body[style]');
  if (modalButton) {
    const modal = getParent(modalButton, 4);
    removeNode(modal);
  } else if (fixedBody) {
    fixedBody.removeAttribute('style');
  }
};
const removeAdScript = () => {
  const scripts = browser.document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i += 1) {
    const script = scripts[i];
    if (script && script.innerText.indexOf('getYaPlaceIds') > 0) {
      removeNode(script);
    }
  }
};
if (isMatchingHostnames('rambler.ru', 'championat.com', 'gazeta.ru', 'lenta.ru', 'quto.ru', 'rns.online', 'passion.ru', 'wmj.ru', 'eda.ru')) {
  const realUA = navigator.userAgent;
  const getUserAgent = () => {
    if (isInsideCircumventionScript()) {
      return 'MSIE ';
    }
    return realUA;
  };
  Object.defineProperty(browser.window.navigator, 'userAgent', {
    get: getUserAgent
  });
  let realPromise = browser.window.Promise;
  Object.defineProperty(browser.window, 'Promise', {
    get: () => {
      if (isInsideCircumventionScript()) {
        throw new TypeError('Failed to fetch');
      }
      return realPromise;
    },
    set: value => {
      realPromise = value;
    }
  });
  observeDomChanges(() => {
    hideYandexDirectByLink();
    hideYandexDirectByStyle();
    removeAdScript();
    removeAnnoyance();
    removeLeftoverBoxes();
  });
}const hideTopBanner = () => {
  const container = browser.querySelector('body > div[class$="-body"] > div[class][data-role]');
  const script = container === null || container === void 0 ? void 0 : container.querySelector('div[class] > script');
  if (container && script && script.innerText.includes('adfox')) {
    hideViaPositionProperty(container);
  }
};
const hideMidBanner = () => {
  const carMidBanner = browser.document.querySelector('.js-page > div[class] > div[data-target][data-role] + div[class]');
  if (carMidBanner && carMidBanner.querySelector('div[class] > div[id] > div[class][id]')) {
    hideViaPositionProperty(carMidBanner);
  }
  const journalMidBanner = browser.document.querySelector('.js-page > div[class] > div[itemtype$="BlogPosting"] + div[class]');
  if (journalMidBanner && journalMidBanner.querySelector('div[class] > div[id] > div[class][id]')) {
    hideViaPositionProperty(journalMidBanner);
  }
};
const hideRightSticky = () => {
  var _commentSection;
  const commentsAnchor = browser.document.querySelector('span#comments.o-anchor');
  let commentSection = commentsAnchor === null || commentsAnchor === void 0 ? void 0 : commentsAnchor.parentNode;
  if (commentSection && !commentSection.nextElementSibling) {
    commentSection = getParent(commentsAnchor, 2);
  }
  const stickyBanner = (_commentSection = commentSection) === null || _commentSection === void 0 ? void 0 : _commentSection.nextElementSibling;
  if (stickyBanner && getComputedStyle(stickyBanner).width === '300px') {
    removeNode(stickyBanner);
  }
};
const hideMobileTopBanner = () => {
  if (navigator.userAgent.match('Mobile')) {
    const belowBanner = browser.document.querySelectorAll('div[itemtype$="Review"], .js-gallery');
    [...belowBanner].forEach(element => {
      const banner = element.previousElementSibling;
      const underBannerElement = banner === null || banner === void 0 ? void 0 : banner.previousElementSibling;
      if (banner && banner.querySelector('div[class] > div[id] > div[class][id]') && (underBannerElement.matches('[class$="--box"]') || underBannerElement.matches('.o-group'))) {
        removeNode(banner);
      }
    });
  }
};
const hideMobileMidBanners = () => {
  if (navigator.userAgent.match('Mobile')) {
    const carsForSale = browser.document.querySelector('.l-container > div[data-role][data-target]');
    const bannerUnder = carsForSale === null || carsForSale === void 0 ? void 0 : carsForSale.nextElementSibling;
    if (bannerUnder && bannerUnder.querySelector('div[class] > div[id] > div[class][id]')) {
      removeNode(bannerUnder);
    }
    const hiddenHeader = browser.document.querySelector('.l-container > h2[style="display: none;"]');
    const bannerAbove = hiddenHeader === null || hiddenHeader === void 0 ? void 0 : hiddenHeader.previousElementSibling;
    if (bannerAbove && bannerAbove.querySelector('div[class] > div[id] > div[class][id]')) {
      removeNode(bannerAbove);
    }
  }
};
const hideMobileBottomBanner = () => {
  if (navigator.userAgent.match('Mobile')) {
    var _commentSection2;
    const commentsAnchor = browser.document.querySelector('span#comments.o-anchor');
    let commentSection = getParent(commentsAnchor, 2);
    if (commentSection && !commentSection.nextElementSibling) {
      commentSection = getParent(commentsAnchor, 3);
    }
    const bottomBanner = (_commentSection2 = commentSection) === null || _commentSection2 === void 0 ? void 0 : _commentSection2.nextElementSibling;
    if (bottomBanner && !bottomBanner.nextElementSibling) {
      removeNode(bottomBanner);
    }
  }
};
if (isMatchingHostnames('drive2.ru', 'drive2.com')) {
  const xhrFilter = request => {
    if (request.responseURL.match(/drive2.ru\/.{1,50}\/*/) && request.withCredentials === true) {
      return true;
    }
    if (request.responseURL.includes('partner-code-bundles')) {
      return true;
    }
    return false;
  };
  preventXHR(xhrFilter);
  observeDomChanges(() => {
    hideTopBanner();
    hideMidBanner();
    hideRightSticky();
    hideMobileTopBanner();
    hideMobileMidBanners();
    hideMobileBottomBanner();
  });
}if (isMatchingHostnames('eda.ru')) {
  const areEqual = function areEqual() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    for (let i = 1; i < args.length; i += 1) {
      if (args[i] === null || args[i] !== args[i - 1]) {
        return false;
      }
    }
    return true;
  };
  const hideTopBanner = () => {
    try {
      const body = browser.document.querySelector('body');
      const bodyChildren = [...body.children];
      const pageWrapper = browser.document.querySelector('header').parentNode;
      const pageWrapperIndex = bodyChildren.indexOf(pageWrapper);
      if (pageWrapperIndex === -1) {
        return;
      }
      const elementsBeforePageWrapper = bodyChildren.slice(0, pageWrapperIndex);
      let lastScriptIndex;
      elementsBeforePageWrapper.forEach((element, index) => {
        if (element.tagName === 'SCRIPT') {
          lastScriptIndex = index;
        }
      });
      if (lastScriptIndex === 'undefined') {
        return;
      }
      for (let i = lastScriptIndex + 1; i < pageWrapperIndex; i += 1) {
        hideViaDisplayProperty(elementsBeforePageWrapper[i]);
      }
    } catch (_unused) {}
  };
  const hideFooterAds = () => {
    try {
      const footerAds = browser.document.querySelector('#superfooter').previousSibling;
      if (footerAds.children.length === 3 && areEqual(footerAds.children[0].attributes[0].textContent, footerAds.children[1].attributes[0].textContent, footerAds.children[2].attributes[0].textContent)) {
        hideViaDisplayProperty(footerAds);
      }
    } catch (_unused2) {}
  };
  observeDomChanges(() => {
    hideTopBanner();
    hideFooterAds();
  });
}const hideHeaderBanner = () => {
  const header = browser.document.querySelector('header');
  if (!header) {
    return;
  }
  const adsContainer = header.previousElementSibling;
  if (!adsContainer) {
    return;
  }
  const ignoredNodeTypes = ['DIV', 'SCRIPT', 'STYLE'];
  if (ignoredNodeTypes.find(nodeType => adsContainer.nodeName !== nodeType)) {
    hideViaDisplayProperty(adsContainer);
  }
};
const hideSidebarAds = () => {
  const layoutSidebar = browser.document.querySelector('.LayoutSidebar');
  if (!layoutSidebar) {
    return;
  }
  [...layoutSidebar.children].forEach(child => {
    if (child.className !== 'LayoutSidebar__content') {
      hideViaPositionProperty(child.firstElementChild);
    }
  });
};
const hideFilterBanner = () => {
  const priceRange = browser.document.querySelector('#priceRange');
  if (!priceRange) {
    return;
  }
  const filterBanner = priceRange.nextElementSibling;
  if (filterBanner && !filterBanner.className) {
    hideViaPositionProperty(filterBanner);
  }
};
const hideMiniBanner = () => {
  var _miniBannerLink$paren, _miniBannerLink$paren2;
  const miniBannerLink = browser.document.querySelector('a[target$="_blank"][href^="https://an.yandex.ru"]');
  if (!miniBannerLink) {
    return;
  }
  const miniBanner = miniBannerLink === null || miniBannerLink === void 0 ? void 0 : (_miniBannerLink$paren = miniBannerLink.parentNode) === null || _miniBannerLink$paren === void 0 ? void 0 : (_miniBannerLink$paren2 = _miniBannerLink$paren.parentNode) === null || _miniBannerLink$paren2 === void 0 ? void 0 : _miniBannerLink$paren2.parentNode;
  if (miniBanner && getComputedStyle(miniBanner).width === '240px') {
    hideViaPositionProperty(miniBanner);
  }
};
const hideYandexDirectByRemoveScript = () => {
  const adScript = browser.document.getElementsByTagName('script');
  for (let i = 0; i < adScript.length; i += 1) {
    const element = adScript[i];
    if (element && element.innerText.indexOf('onError') > 0 && element.innerText.indexOf('direct') > 0) {
      removeNode(element);
    }
  }
};
const hideVertisadsBanners = () => {
  const mainContainer = browser.querySelector('[class$="__content"] > [class$="container"]');
  const mainNodes = mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.children;
  if (mainNodes) {
    [...mainNodes].forEach(node => {
      if (node.tagName.includes('ADS-')) {
        removeNode(node);
      }
    });
  }
  const sideContainer = browser.querySelector('[class$="__sidebar"] > [class$="__sidebarStickyContent"]');
  const sideNodes = sideContainer === null || sideContainer === void 0 ? void 0 : sideContainer.children;
  if (sideNodes) {
    [...sideNodes].forEach(node => {
      if (node.tagName.includes('ADS-')) {
        removeNode(node);
      }
    });
  }
  const brandBanner = browser.querySelector('.Index  > .Index__block > [class$="place_brand"]');
  if (brandBanner && brandBanner.tagName.includes('ADS-BRAND')) {
    removeNode(brandBanner);
  }
};
if (isMatchingHostnames('media.auto.ru')) {
  observeDomChanges(() => {
    hideHeaderBanner();
  });
}
if (isMatchingHostnames('auto.ru')) {
  observeDomChanges(() => {
    hideFilterBanner();
    hideMiniBanner();
    hideHeaderBanner();
    hideSidebarAds();
    hideYandexDirectByRemoveScript();
    hideVertisadsBanners();
  });
}if (isMatchingHostnames('wp.pl')) {
  const hideAdsByStylesheet = () => {
    var _browser$querySelecto, _browser$querySelecto2;
    const adsSheetRules = (_browser$querySelecto = browser.querySelector('style[data-id=wpcss]')) === null || _browser$querySelecto === void 0 ? void 0 : (_browser$querySelecto2 = _browser$querySelecto.sheet) === null || _browser$querySelecto2 === void 0 ? void 0 : _browser$querySelecto2.cssRules;
    if (!adsSheetRules) {
      return;
    }
    [...adsSheetRules].forEach(rule => {
      var _rule$style, _rule$style2;
      if ((rule === null || rule === void 0 ? void 0 : (_rule$style = rule.style) === null || _rule$style === void 0 ? void 0 : _rule$style.width) === '320px' && (rule === null || rule === void 0 ? void 0 : (_rule$style2 = rule.style) === null || _rule$style2 === void 0 ? void 0 : _rule$style2.height) === '40px') {
        hideViaDisplayProperty(rule);
      }
    });
  };
  const hidePolecaneAds = () => {
    browser.querySelectorAll('span').forEach(element => {
      if ((element === null || element === void 0 ? void 0 : element.textContent) === 'REKLAMA') {
        hideViaDisplayProperty(element === null || element === void 0 ? void 0 : element.parentNode);
      }
    });
  };
  observeDomChanges(() => {
    hidePolecaneAds();
    hideAdsByStylesheet();
  });
}const hideSidebarAds$1 = () => {
  iterateCSSRules(rule => {
    if (rule.cssText.includes('{ content: url("data:image/jpeg;base64')) {
      var _adsImage$parentNode, _adsImage$parentNode$, _adsImage$parentNode$2, _adsImage$parentNode$3;
      const adsImage = browser.querySelector(rule.selectorText);
      const adsBlock = adsImage === null || adsImage === void 0 ? void 0 : (_adsImage$parentNode = adsImage.parentNode) === null || _adsImage$parentNode === void 0 ? void 0 : (_adsImage$parentNode$ = _adsImage$parentNode.parentNode) === null || _adsImage$parentNode$ === void 0 ? void 0 : (_adsImage$parentNode$2 = _adsImage$parentNode$.parentNode) === null || _adsImage$parentNode$2 === void 0 ? void 0 : (_adsImage$parentNode$3 = _adsImage$parentNode$2.parentNode) === null || _adsImage$parentNode$3 === void 0 ? void 0 : _adsImage$parentNode$3.parentNode;
      if (!adsBlock || adsBlock.children.length < 3) {
        return;
      }
      hideViaDisplayProperty(adsBlock);
    }
  });
};
if (isMatchingHostnames('minigames.mail.ru')) {
  observeDomChanges(() => {
    hideSidebarAds$1();
  });
}const hideSidebarAds$2 = () => {
  const spanElements = browser.querySelectorAll('span');
  [...spanElements].forEach(span => {
    if (span.innerText === 'PropellerAds') {
      var _span$parentNode, _span$parentNode$pare, _span$parentNode$pare2;
      const adsBlock = span === null || span === void 0 ? void 0 : (_span$parentNode = span.parentNode) === null || _span$parentNode === void 0 ? void 0 : (_span$parentNode$pare = _span$parentNode.parentNode) === null || _span$parentNode$pare === void 0 ? void 0 : (_span$parentNode$pare2 = _span$parentNode$pare.parentNode) === null || _span$parentNode$pare2 === void 0 ? void 0 : _span$parentNode$pare2.parentNode;
      hideViaPositionProperty(adsBlock);
    }
  });
};
if (isMatchingHostnames('vidstream.online')) {
  observeDomChanges(() => {
    hideSidebarAds$2();
  });
}const hideDirectAds = () => {
  const elementsWithAd = browser.querySelectorAll('header + div > div[class$="-direct"] > div[class], header + div > div[class]');
  [...elementsWithAd].forEach(elementWithAd => {
    var _elementWithAd$classL;
    if ((elementWithAd === null || elementWithAd === void 0 ? void 0 : (_elementWithAd$classL = elementWithAd.classList) === null || _elementWithAd$classL === void 0 ? void 0 : _elementWithAd$classL.length) >= 3
    && elementWithAd.querySelector('div[style*="width: 100%"]') && !elementWithAd.querySelector('.js-doc-page') && !elementWithAd.querySelector('input[type="number"]')) {
      hideViaPositionProperty(elementWithAd);
    }
  });
  const elementsWithAdBottom = browser.querySelectorAll('.js-doc-html > div[class]');
  [...elementsWithAdBottom].forEach(elementWithAdBottom => {
    var _elementWithAdBottom$;
    if ((elementWithAdBottom === null || elementWithAdBottom === void 0 ? void 0 : (_elementWithAdBottom$ = elementWithAdBottom.classList) === null || _elementWithAdBottom$ === void 0 ? void 0 : _elementWithAdBottom$.length) >= 3 && !(elementWithAdBottom !== null && elementWithAdBottom !== void 0 && elementWithAdBottom.className.startsWith('js-doc-page'))) {
      hideViaPositionProperty(elementWithAdBottom);
    }
  });
};
if (isMatchingHostnames('docviewer.yandex.ru', 'docviewer.yandex.kz', 'docviewer.yandex.by', 'docviewer.yandex.ua', 'docviewer.yandex.md', 'docviewer.yandex.com.tr', 'docviewer.yandex.com.am')) {
  observeDomChanges(() => {
    hideDirectAds();
  });
}const hideLiveDirectByStyle = () => {
  const styleSheets = browser.document.getElementsByTagName('style');
  [...styleSheets].forEach(styleSheet => {
    const rules = [...safeGetStylesheetRules(styleSheet.sheet)];
    const firstStyleRule = rules[0];
    if (rules.length > 50 || !firstStyleRule) {
      return;
    }
    if (firstStyleRule.selectorText && /\s*"[.a-z0-9]+"/.test(firstStyleRule.selectorText)) {
      hideViaPositionProperty(firstStyleRule);
    }
  });
};
const leftovers = () => {
  const remainBlocks = browser.querySelectorAll('.cat-widget__card-wrap');
  [...remainBlocks].forEach(remainBlock => {
    const leftover = remainBlock.firstElementChild;
    if (!leftover) {
      return;
    }
    if (leftover && /ngIf:\sdirective\./.test(leftover.innerHTML)) {
      hideViaPositionProperty(remainBlock);
    }
  });
};
if (isMatchingHostnames('livejournal.com')) {
  observeDomChanges(() => {
    hideLiveDirectByStyle();
    leftovers();
  });
}
if (isMatchingHostnames('varlamov.ru', 'lena-miro.ru', 'olegmakarenko.ru', 'periskop.su', 'levik.blog', 'vadimrazumov.ru')) {
  observeDomChanges(() => {
    hideLiveDirectByStyle();
  });
}const hideOtzovikAds = () => {
  const nodeElements = browser.querySelectorAll('div[id]');
  [...nodeElements].forEach(nodeElement => {
    var _nodeElement$parentNo, _nodeElement$parentNo2, _nodeElement$parentNo3, _nodeElement$previous, _nodeElement$previous2;
    const adElementTextContent = nodeElement === null || nodeElement === void 0 ? void 0 : (_nodeElement$parentNo = nodeElement.parentNode) === null || _nodeElement$parentNo === void 0 ? void 0 : (_nodeElement$parentNo2 = _nodeElement$parentNo.previousSibling) === null || _nodeElement$parentNo2 === void 0 ? void 0 : (_nodeElement$parentNo3 = _nodeElement$parentNo2.previousSibling) === null || _nodeElement$parentNo3 === void 0 ? void 0 : _nodeElement$parentNo3.textContent;
    const adElementTextContentWithoutParent = nodeElement === null || nodeElement === void 0 ? void 0 : (_nodeElement$previous = nodeElement.previousSibling) === null || _nodeElement$previous === void 0 ? void 0 : (_nodeElement$previous2 = _nodeElement$previous.previousSibling) === null || _nodeElement$previous2 === void 0 ? void 0 : _nodeElement$previous2.textContent;
    const regexAd = /Yandex\.|\.RTB|OTZOAD/;
    if (regexAd.test(adElementTextContent) || regexAd.test(adElementTextContentWithoutParent)) {
      hideViaPositionProperty(nodeElement);
    }
  });
};
if (isMatchingHostnames('otzovik.com')) {
  observeDomChanges(() => {
    hideOtzovikAds();
  });
}const TEST_PAGE = '/test.html';
const NEW_ISSUE_PAGE = '/new_issue.html';
const ADGUARD_HOSTNAMES = ['adguard.com'
];
const testExtra = () => {
  const testElement = browser.document.querySelector('.extra-test');
  hideViaDisplayProperty(testElement);
};
if (isMatchingHostnames(...ADGUARD_HOSTNAMES)) {
  if (browser.location.pathname.endsWith(TEST_PAGE) || browser.location.pathname.endsWith(NEW_ISSUE_PAGE)) {
    observeDomChanges(() => {
      testExtra();
    });
  }
}const changeLinks = () => {
  const buttons = document.querySelectorAll('.panel-footer > form[action] > button[link]');
  const forms = document.querySelectorAll('.panel-footer > form[action]');
  if (buttons.length === forms.length) {
    for (let a = 0; a < forms.length; a += 1) {
      const buttonsAttribute = buttons[a].getAttribute('link');
      forms[a].setAttribute('action', buttonsAttribute);
      forms[a].setAttribute('target', '_blank');
    }
  }
};
if (isMatchingHostnames('multiup.org')) {
  observeDomChanges(() => {
    changeLinks();
  });
}const hideLentaAds = () => {
  const feedTitles = browser.querySelectorAll('#lentaFeed > tr > td.newshead');
  for (let i = 0; i < feedTitles.length; i += 1) {
    const feedTitle = feedTitles[i];
    const adTopTitle = feedTitle === null || feedTitle === void 0 ? void 0 : feedTitle.parentNode;
    const adContent = adTopTitle === null || adTopTitle === void 0 ? void 0 : adTopTitle.nextElementSibling;
    const adBottomTitle = adContent === null || adContent === void 0 ? void 0 : adContent.nextElementSibling;
    if (feedTitle.querySelector('.rating-short-value') === null) {
      hideViaPositionProperty(adTopTitle);
      hideViaPositionProperty(adContent);
      hideViaPositionProperty(adBottomTitle);
    }
  }
};
if (isMatchingHostnames('yaplakal.com', 'yap.ru')) {
  observeDomChanges(() => {
    hideLentaAds();
  });
}if (isMatchingHostnames('pravda.com.ua', 'epravda.com.ua', 'glianec.com', 'ostro.org', 'nashamama.com', 'bilshe.com', 'zdorovia.com.ua', 'i.factor.ua', 'gismeteo.ua', '1777.ru', 'cn.ru', 'finance.i.ua', 'glavcom.ua', 'hvylya.net', 'kp.ua', 'love.i.ua', 'newsone.ua', 'peers.tv', 'radio.i.ua', 'real-vin.com', 'viks.bz', 'vsetv.com', 'gismeteo.ua', 'tv.ua', 'isport.ua', 'eurointegration.com.ua', 'u-news.com.ua', 'strana.ua', '4mama.ua', 'bigmir.net', 'dengi.ua', 'enovosty.com', 'facenews.ua', 'football24.ua', 'gorod.dp.ua', 'inforesist.org', 'kolobok.ua', 'liga.net', 'nnovosti.info', 'smak.ua', 'tochka.net', 'ukr.net', 'nv.ua', 'meteo.ua', 'besplatka.ua', 'lifedon.com.ua')) {
  disableScripts(/ShadowRoot|AdnetAttachScript|zmctrack/);
}if (isMatchingHostnames('sheee.co.il', 'walla.co.il')) {
  disableScripts(/function[\s\S]*?static[\s\S]*?switch/);
}if (isMatchingHostnames('sinoptik.ua')) {
  replaceScripts(/e&&\(o\(de\),n\(e\)\)/, '');
}if (isMatchingHostnames('kakprosto.ru')) {
  const xhrFilter = request => {
    if (request !== null && request !== void 0 && request.responseText.includes('isYandexPage')) {
      return true;
    }
    return false;
  };
  const removeLeftovers = () => {
    const links = browser.querySelectorAll('a[href*="advertising"]');
    [...links].forEach(element => {
      const leftover = element.closest('.block__content');
      hideViaPositionProperty(leftover);
    });
  };
  preventXHR(xhrFilter);
  observeDomChanges(() => {
    removeLeftovers();
  });
}const blockProperty = prop => {
  if (!prop) {
    return;
  }
  Object.defineProperty(browser.window, prop, {
    configurabe: false
  });
};
if (isMatchingHostnames('24smi.org')) {
  blockProperty('ya');
}if (isMatchingHostnames('youtube.com')) {
  const skipClick = () => {
    const skipButton = browser.querySelector('.ytp-ad-skip-button-slot');
    if (skipButton) {
      skipButton.click();
    }
  };
  const rewindAd = () => {
    const videoAd = browser.querySelector('div.ad-showing');
    const player = browser.querySelector('video.html5-main-video');
    if (videoAd && player && player.duration) {
      player.currentTime = player.duration;
      skipClick();
    }
  };
  observeDomChanges(() => {
    rewindAd();
  });
}if (isMatchingHostnames('echo.msk.ru')) {
  const xhrFilter = request => {
    const {
      responseURL,
      withCredentials
    } = request;
    if (responseURL !== null && responseURL !== void 0 && responseURL.match(/adfox|alfasense|securepubads|webvisor|watch|jstracer|static-mon|bidder.criteo/)) {
      return true;
    }
    if (responseURL !== null && responseURL !== void 0 && responseURL.match(/recostream.go|ad.outstream|rb.infox|kraken.rambler|cdn-plus.roxot-panel|.giraff|nativeroll|an.yandex.ru\/newscount/)) {
      return true;
    }
    if (responseURL !== null && responseURL !== void 0 && responseURL.match(/viadata.store|an.yandex.ru\/meta/)) {
      return true;
    }
    if (responseURL !== null && responseURL !== void 0 && responseURL.includes('echomsk.static-storage') && withCredentials === true) {
      return true;
    }
    return false;
  };
  const removeNakedAds = () => {
    const ads = browser.querySelectorAll('div.ad, div[id*="adfox"], div[id^="yandex_rtb_"], div[class^="y-dir-"], a[href^="https://relap.io"]');
    [...ads].forEach(ad => {
      removeNode(ad);
    });
  };
  const removeArticleTeaser = () => {
    const teaser = browser.querySelector('div[id^="under_article"]');
    if (teaser && teaser.querySelector('div[id^="smi_teaser"]')) {
      removeNode(teaser);
    }
  };
  preventXHR(xhrFilter);
  observeDomChanges(() => {
    removeNakedAds();
    removeArticleTeaser();
  });
}if (isMatchingHostnames('soft98.ir')) {
  const hideHeaderBanner = () => {
    const headerBanner = browser.querySelector('[id$="-header"]');
    if (headerBanner && headerBanner.querySelector('img[src^="https://redlini.ga/"]')) {
      hideViaPositionProperty(headerBanner);
    }
  };
  const hideMainBlock = () => {
    const namedContainers = browser.querySelectorAll('body > div.container[id]');
    [...namedContainers].forEach(container => {
      if (container.querySelector('img[src^="https://redlini.ga/"]')) {
        hideViaPositionProperty(container);
      }
    });
  };
  const hideSidebarAds = () => {
    const sidebars = browser.querySelectorAll('aside[id] > section.card, aside[id] > div#sidebar-sticky > section.card');
    [...sidebars].forEach(sidebar => {
      if (sidebar.querySelector('a > img[width][height], div[id] > center > iframe')) {
        hideViaPositionProperty(sidebar);
      }
    });
  };
  const hideInArticleFrame = () => {
    const container = browser.querySelector('main#main > div.text-center:not([id])');
    if (container && container.querySelector('iframe[src*="kaprila"]')) {
      hideViaPositionProperty(container);
    }
  };
  const hideForumBanner = () => {
    const banner = browser.querySelector('center > a > img[oncontextmenu]');
    hideViaPositionProperty(banner);
  };
  observeDomChanges(() => {
    hideHeaderBanner();
    hideMainBlock();
    hideSidebarAds();
    hideInArticleFrame();
    hideForumBanner();
  });
}let disabledVideo = null;
let originalVolume = 0;
let foundAdContainer = false;
let foundAdBanner = false;
let notifyAdsWatchedReloadNextTime = 0;
let twitchMainWorker = null;
function declareOptions(scope) {
  scope.OPT_MODE_MUTE_BLACK = false;
  scope.OPT_MODE_VIDEO_SWAP = false;
  scope.OPT_MODE_LOW_RES = false;
  scope.OPT_MODE_EMBED = false;
  scope.OPT_MODE_STRIP_AD_SEGMENTS = true;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED = true;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_INITIAL_ATTEMPTS = 0;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST = true;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_AND_RELOAD = false;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_EXPECTED_DURATION = 10000;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_MIN_REQUESTS = true;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT = false;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT_DELAY = 0;
  scope.OPT_MODE_PROXY_M3U8 = '';
  scope.OPT_MODE_PROXY_M3U8_OBFUSCATED = false;
  scope.OPT_MODE_PROXY_M3U8_FULL_URL = false;
  scope.OPT_MODE_PROXY_M3U8_PARTIAL_URL = false;
  scope.OPT_VIDEO_SWAP_PLAYER_TYPE = 'picture-by-picture';
  scope.OPT_BACKUP_PLAYER_TYPE = 'picture-by-picture';
  scope.OPT_REGULAR_PLAYER_TYPE = 'site';
  scope.OPT_INITIAL_M3U8_ATTEMPTS = 1;
  scope.OPT_ACCESS_TOKEN_PLAYER_TYPE = '';
  scope.OPT_ACCESS_TOKEN_TEMPLATE = true;
  scope.AD_SIGNIFIER = 'stitched-ad';
  scope.LIVE_SIGNIFIER = ',live';
  scope.CLIENT_ID = 'kimne78kx3ncx6brgo4mv6wki5h1ko';
  if (!scope.OPT_ACCESS_TOKEN_PLAYER_TYPE && scope.OPT_MODE_LOW_RES) {
    scope.OPT_ACCESS_TOKEN_PLAYER_TYPE = 'thunderdome';
  }
  if (!scope.OPT_ACCESS_TOKEN_PLAYER_TYPE && scope.OPT_MODE_EMBED) {
    scope.OPT_ACCESS_TOKEN_PLAYER_TYPE = 'embed';
  }
  if (scope.OPT_MODE_PROXY_M3U8 && scope.OPT_MODE_PROXY_M3U8_OBFUSCATED) {
    let newStr = '';
    scope.OPT_MODE_PROXY_M3U8 = atob(scope.OPT_MODE_PROXY_M3U8);
    for (let i = 0; i < scope.OPT_MODE_PROXY_M3U8.length; i += 1) {
      newStr += String.fromCharCode(scope.OPT_MODE_PROXY_M3U8.charCodeAt(i) ^ scope.CLIENT_ID.charCodeAt(i % scope.CLIENT_ID.length));
    }
    scope.OPT_MODE_PROXY_M3U8 = newStr;
  }
  scope.StreamInfos = [];
  scope.StreamInfosByUrl = [];
  scope.CurrentChannelNameFromM3U8 = null;
  scope.gql_device_id = null;
}
const getWasmWorkerUrl = twitchBlobUrl => {
  const req = new XMLHttpRequest();
  req.open('GET', twitchBlobUrl, false);
  req.send();
  return req.responseText.split("'")[1];
};
function parseAttributes(str) {
  return Object.fromEntries(str.split(/(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))/).filter(Boolean).map(x => {
    const idx = x.indexOf('=');
    const key = x.substring(0, idx);
    const value = x.substring(idx + 1);
    const num = Number(value);
    return [key, Number.isNaN(num) ? value.startsWith('"') ? JSON.parse(value) : value : num];
  }));
}
function getFinalSegUrl(lines) {
  for (let i = lines.length - 1; i >= 0; i -= 1) {
    if (lines[i].startsWith('http')) {
      return lines[i];
    }
  }
  return null;
}
function gqlRequest(body, realFetch) {
  const fetchFunc = realFetch || fetch;
  return fetchFunc('https://gql.twitch.tv/gql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'client-id': CLIENT_ID,
      'X-Device-Id': gql_device_id
    }
  });
}
function makeGraphQlPacket(event, radToken, payload) {
  return [{
    operationName: 'ClientSideAdEventHandling_RecordAdEvent',
    variables: {
      input: {
        eventName: event,
        eventPayload: JSON.stringify(payload),
        radToken
      }
    },
    extensions: {
      persistedQuery: {
        version: 1,
        sha256Hash: '7e6c69e6eb59f8ccb97ab73686f3d8b7d85a72a0298745ccd8bfc68e4054ca5b'
      }
    }
  }];
}
async function tryNotifyAdsWatchedM3U8(streamM3u8) {
  if (!streamM3u8.includes(AD_SIGNIFIER)) {
    return 1;
  }
  const matches = streamM3u8.match(/#EXT-X-DATERANGE:(ID="stitched-ad-[^\n]+)\n/);
  if (matches.length > 1) {
    const attrString = matches[1];
    const attr = parseAttributes(attrString);
    const podLength = parseInt(attr['X-TV-TWITCH-AD-POD-LENGTH'] ? attr['X-TV-TWITCH-AD-POD-LENGTH'] : '1', 10);
    const radToken = attr['X-TV-TWITCH-AD-RADS-TOKEN'];
    const rollType = attr['X-TV-TWITCH-AD-ROLL-TYPE'].toLowerCase();
    const baseData = {
      stitched: true,
      roll_type: rollType,
      player_mute: false,
      player_volume: 0.5,
      visible: true
    };
    for (let position = 0; position < podLength; position += 1) {
      if (OPT_MODE_NOTIFY_ADS_WATCHED_MIN_REQUESTS) {
        await gqlRequest(makeGraphQlPacket('video_ad_pod_complete', radToken, baseData));
      }
    }
  }
  return 0;
}
function getAccessToken(channelName, playerType, realFetch) {
  let body = null;
  if (OPT_ACCESS_TOKEN_TEMPLATE) {
    const templateQuery = 'query PlaybackAccessToken_Template($login: String!, $isLive: Boolean!, $vodID: ID!, $isVod: Boolean!, $playerType: String!) {  streamPlaybackAccessToken(channelName: $login, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isLive) {    value    signature    __typename  }  videoPlaybackAccessToken(id: $vodID, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isVod) {    value    signature    __typename  }}';
    body = {
      operationName: 'PlaybackAccessToken_Template',
      query: templateQuery,
      variables: {
        isLive: true,
        login: channelName,
        isVod: false,
        vodID: '',
        playerType
      }
    };
  } else {
    body = {
      operationName: 'PlaybackAccessToken',
      variables: {
        isLive: true,
        login: channelName,
        isVod: false,
        vodID: '',
        playerType
      },
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: '0828119ded1c13477966434e15800ff57ddacf13ba1911c129dc2200705b0712'
        }
      }
    };
  }
  return gqlRequest(body, realFetch);
}
function getSegmentInfosLines(streamInfo, lines) {
  const result = {
    segs: [],
    targetDuration: 0,
    elapsedSecs: 0,
    totalSecs: 0,
    hasPrefetch: false,
    hasLiveBeforeAd: true
  };
  let hasLive = false;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (line.startsWith('#EXT-X-TARGETDURATION')) {
      result.targetDuration = parseInt(line.split(':')[1], 10);
    }
    if (line.startsWith('#EXT-X-TWITCH-ELAPSED-SECS')) {
      result.elapsedSecs = line.split(':')[1];
    }
    if (line.startsWith('#EXT-X-TWITCH-TOTAL-SECS')) {
      result.totalSecs = line.split(':')[1];
    }
    if (line.startsWith('#EXT-X-DATERANGE')) {
      const attr = parseAttributes(line);
      if (attr.CLASS && attr.CLASS.includes('stitched-ad')) {
        streamInfo.IsMidroll = attr['X-TV-TWITCH-AD-ROLL-TYPE'] === 'MIDROLL';
      }
    }
    if (line.startsWith('http')) {
      const segInfo = {
        urlLineIndex: i,
        urlLine: lines[i],
        url: lines[i],
        isPrefetch: false
      };
      if (i >= 1 && lines[i - 1].startsWith('#EXTINF')) {
        const splitted = lines[i - 1].split(':')[1].split(',');
        segInfo.extInfLineIndex = i - 1;
        segInfo.extInfLine = lines[i - 1];
        segInfo.extInfLen = splitted[0];
        segInfo.extInfType = splitted[1].split('|')[0];
        segInfo.isAd = segInfo.extInfType !== 'live';
        if (segInfo.isAd && !hasLive && result.hasLiveBeforeAd) {
          result.hasLiveBeforeAd = false;
        }
        hasLive = !segInfo.isAd;
      } else if (i >= 2 && lines[i - 2].startsWith('#EXT-X-PROGRAM-DATE-TIME')) {
        segInfo.dateTimeLineIndex = i - 2;
        segInfo.dateTimeLine = lines[i - 2];
        segInfo.dateTime = new Date(lines[i - 2].substr(lines[i - 2].indexOf(':')));
      }
      result.segs.push(segInfo);
    }
    if (lines[i].startsWith('#EXT-X-TWITCH-PREFETCH:')) {
      const segInfo = {
        urlLineIndex: i,
        urlLine: lines[i],
        url: lines[i].substr(lines[i].indexOf(':') + 1),
        isPrefetch: true
      };
      result.hasPrefetch = true;
      result.segs.push(segInfo);
    }
  }
  return result;
}
function getSegmentInfos(streamInfo, lines, backupLines) {
  const result = {
    segs: [],
    main: getSegmentInfosLines(streamInfo, lines),
    backup: getSegmentInfosLines(streamInfo, backupLines)
  };
  for (let i = 0; i < result.backup.segs.length; i += 1) {
    const seg = {
      backup: result.backup.segs[i]
    };
    result.segs.push(seg);
  }
  for (let i = result.main.segs.length - 1, j = result.segs.length - 1; i >= 0 && j >= 0; i -= 1, j -= 1) {
    while (result.main.segs[i].isPrefetch) {
      if (result.segs[j].backup.isPrefetch) {
        result.segs[j].main = result.main.segs[i];
        j -= 1;
      }
      i -= 1;
    }
    if (!result.main.segs[i].isAd) {
      result.segs[j].main = result.main.segs[i];
    } else {
      break;
    }
  }
  streamInfo.SegmentCache.length = 0;
  for (let i = 0; i < result.segs.length; i += 1) {
    if (result.segs[i].main != null) {
      streamInfo.SegmentCache[result.segs[i].main.url] = result.segs[i];
    }
    if (result.segs[i].backup != null) {
      streamInfo.SegmentCache[result.segs[i].backup.url] = result.segs[i];
    }
  }
  return result;
}
async function processM3U8(url, textStr, realFetch) {
  const haveAdTags = textStr.includes(AD_SIGNIFIER);
  if (OPT_MODE_STRIP_AD_SEGMENTS) {
    const si = StreamInfosByUrl[url];
    if (si != null) {
      const lines = textStr.replace('\r', '').split('\n');
      for (let i = 0; i < lines.length; i += 1) {
        if (lines[i].startsWith('#EXT-X-MEDIA-SEQUENCE:')) {
          const oldRealSeq = si.RealSeqNumber;
          si.RealSeqNumber = parseInt(/#EXT-X-MEDIA-SEQUENCE:([0-9]*)/.exec(lines[i])[1], 10);
          if (!haveAdTags && si.FakeSeqNumber > 0) {
            const finalSegUrl = getFinalSegUrl(lines);
            if (finalSegUrl !== si.FinalSegUrl) {
              si.FinalSegUrl = finalSegUrl;
              const jump = Math.max(0, si.RealSeqNumber - oldRealSeq);
              if (jump <= 3) {
                si.FakeSeqNumber += Math.max(0, si.RealSeqNumber - oldRealSeq);
              } else if (jump > 0) {
                si.FakeSeqNumber += 1;
              }
            }
            lines[i] = `#EXT-X-MEDIA-SEQUENCE:${si.FakeSeqNumber}`;
            console.debug(`No ad, but modifying sequence realSeq:${si.RealSeqNumber} fakeSeq:${si.FakeSeqNumber}`);
          }
          break;
        }
      }
      textStr = lines.join('\n');
    }
  }
  if (haveAdTags) {
    const si = StreamInfosByUrl[url];
    if (OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST && si != null && !si.NotifyObservedNoAds) {
      let noAds = false;
      const encodingsM3u8Response = await realFetch(si.RootM3U8Url);
      if (encodingsM3u8Response.status === 200) {
        const encodingsM3u8 = await encodingsM3u8Response.text();
        const streamM3u8Url = encodingsM3u8.match(/^https:.*\.m3u8$/m)[0];
        const streamM3u8Response = await realFetch(streamM3u8Url);
        if (streamM3u8Response.status === 200) {
          noAds = (await tryNotifyAdsWatchedM3U8(await streamM3u8Response.text())) === 1;
          console.debug(`Notify ad watched. Response has ads: ${!noAds}`);
        }
      }
      if (si.NotifyFirstTime === 0) {
        si.NotifyFirstTime = Date.now();
      }
      if (noAds && !si.NotifyObservedNoAds && Date.now() >= si.NotifyFirstTime + OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_EXPECTED_DURATION) {
        si.NotifyObservedNoAds = true;
      }
      if (noAds && OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_AND_RELOAD && Date.now() >= si.NotifyFirstTime + OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_EXPECTED_DURATION) {
        console.debug('Reload player');
        postMessage({
          key: 'hideAdBanner'
        });
        postMessage({
          key: 'reloadPlayer'
        });
        return '';
      }
    }
    postMessage({
      key: 'foundAdSegment',
      hasLiveSeg: textStr.includes(LIVE_SIGNIFIER),
      streamM3u8: textStr
    });
  }
  if (!OPT_MODE_STRIP_AD_SEGMENTS) {
    return textStr;
  }
  if (haveAdTags) {
    const streamInfo = StreamInfosByUrl[url];
    if (streamInfo === null) {
      console.debug(`Unknown stream url ${url}`);
      postMessage({
        key: 'hideAdBanner'
      });
      return textStr;
    }
    if (!streamInfo.BackupFailed && streamInfo.BackupUrl === null) {
      streamInfo.BackupFailed = true;
      const accessTokenResponse = await getAccessToken(streamInfo.ChannelName, OPT_BACKUP_PLAYER_TYPE);
      if (accessTokenResponse.status === 200) {
        const accessToken = await accessTokenResponse.json();
        const urlInfo = new URL(`https://usher.ttvnw.net/api/channel/hls/${streamInfo.ChannelName}.m3u8${streamInfo.RootM3U8Params}`);
        urlInfo.searchParams.set('sig', accessToken.data.streamPlaybackAccessToken.signature);
        urlInfo.searchParams.set('token', accessToken.data.streamPlaybackAccessToken.value);
        const encodingsM3u8Response = await realFetch(urlInfo.href);
        if (encodingsM3u8Response.status === 200) {
          const encodingsM3u8 = await encodingsM3u8Response.text();
          const streamM3u8Url = encodingsM3u8.match(/^https:.*\.m3u8$/m)[0];
          const streamM3u8Response = await realFetch(streamM3u8Url);
          if (streamM3u8Response.status === 200) {
            streamInfo.BackupFailed = false;
            streamInfo.BackupUrl = streamM3u8Url;
            console.debug(`Fetched backup url: ${streamInfo.BackupUrl}`);
          } else {
            console.debug(`Backup url request (streamM3u8) failed with ${streamM3u8Response.status}`);
          }
        } else {
          console.debug(`Backup url request (encodingsM3u8) failed with ${encodingsM3u8Response.status}`);
        }
      } else {
        console.debug(`Backup url request (accessToken) failed with ${accessTokenResponse.status}`);
      }
    }
    let backupM3u8 = null;
    if (streamInfo.BackupUrl != null) {
      const backupM3u8Response = await realFetch(streamInfo.BackupUrl);
      if (backupM3u8Response.status === 200) {
        backupM3u8 = await backupM3u8Response.text();
      } else {
        console.debug(`Backup m3u8 failed with ${backupM3u8Response.status}`);
      }
    }
    const lines = textStr.replace('\r', '').split('\n');
    const newLines = [];
    if (backupM3u8 != null) {
      const backupLines = backupM3u8.replace('\r', '').split('\n');
      const segInfos = getSegmentInfos(streamInfo, lines, backupLines);
      newLines.push('#EXTM3U');
      newLines.push('#EXT-X-VERSION:3');
      newLines.push(`#EXT-X-TARGETDURATION:${segInfos.backup.targetDuration}`);
      newLines.push('');
      let pushedLiveSegs = 0;
      let pushedBackupSegs = 0;
      let pushedPrefetchSegs = 0;
      for (let i = 0; i < segInfos.segs.length; i += 1) {
        const seg = segInfos.segs[i];
        let segData = null;
        if (seg.main != null && !seg.main.isAd) {
          pushedLiveSegs += 1;
          segData = seg.main;
        } else if (seg.backup != null) {
          pushedBackupSegs += 1;
          segData = seg.backup;
        }
        if (segData != null) {
          if (segData.isPrefetch) {
            pushedPrefetchSegs += 1;
            newLines.push(segData.urlLine);
          } else {
            newLines.push(segData.extInfLine);
            newLines.push(segData.urlLine);
          }
        }
      }
      const finalSegUrl = getFinalSegUrl(newLines);
      if (finalSegUrl !== streamInfo.FinalSegUrl) {
        streamInfo.FinalSegUrl = finalSegUrl;
        streamInfo.FakeSeqNumber += 1;
      }
      newLines[3] = `#EXT-X-MEDIA-SEQUENCE:${streamInfo.FakeSeqNumber}`;
      if (pushedLiveSegs > 0 || pushedBackupSegs > 0) {
        console.debug(`liveSegs:${pushedLiveSegs} backupSegs:${pushedBackupSegs} prefetch:${pushedPrefetchSegs} realSeq:${streamInfo.RealSeqNumber} fakeSeq:${streamInfo.FakeSeqNumber}`);
      } else {
        console.debug('TODO: If theres no backup data then we need to provide our own .ts file, otherwise the player will spam m3u8 requests (denial-of-service)');
      }
    }
    textStr = newLines.length > 0 ? newLines.join('\n') : lines.join('\n');
  }
  return textStr;
}
function hookWorkerFetch() {
  const realFetch = fetch;
  fetch = async function fetch(url, options) {
    if (typeof url === 'string') {
      if (OPT_MODE_STRIP_AD_SEGMENTS && url.endsWith('.ts')) {
        let shownAdBanner = false;
        for (const [channelName, streamInfo] of Object.entries(StreamInfos)) {
          const seg = streamInfo.SegmentCache[url];
          if (seg && !seg.isPrefetch) {
            if (seg.main === null && seg.backup != null) {
              shownAdBanner = true;
              postMessage({
                key: 'showAdBanner',
                isMidroll: streamInfo.IsMidroll
              });
            }
            break;
          }
        }
        if (!shownAdBanner) {
          postMessage({
            key: 'hideAdBanner'
          });
        }
      }
      if (url.endsWith('m3u8')) {
        return new Promise((resolve, reject) => {
          const processAfter = async function processAfter(response) {
            const str = await processM3U8(url, await response.text(), realFetch);
            resolve(new Response(str));
          };
          const send = function send() {
            return realFetch(url, options).then(response => {
              processAfter(response);
            }).catch(err => {
              console.debug(`fetch hook err ${err}`);
              reject(err);
            });
          };
          send();
        });
      }
      if (url.includes('/api/channel/hls/') && !url.includes('picture-by-picture')) {
        const channelName = new URL(url).pathname.match(/([^/]+)(?=\.\w+$)/)[0];
        if (CurrentChannelNameFromM3U8 !== channelName) {
          postMessage({
            key: 'channelNameM3U8Changed',
            value: channelName
          });
        }
        CurrentChannelNameFromM3U8 = channelName;
        if (OPT_MODE_PROXY_M3U8) {
          if (OPT_MODE_PROXY_M3U8_FULL_URL || OPT_MODE_PROXY_M3U8_PARTIAL_URL) {
            if (OPT_MODE_PROXY_M3U8_FULL_URL) {
              url = OPT_MODE_PROXY_M3U8 + url;
            } else {
              url = OPT_MODE_PROXY_M3U8 + url.split('.m3u8')[0];
            }
            if (!OPT_MODE_PROXY_M3U8_OBFUSCATED) {
              console.debug(`proxy-m3u8: ${url}`);
            }
            const opt2 = {};
            opt2.headers = [];
            opt2.headers['Access-Control-Allow-Origin'] = '*';
            return realFetch(url, opt2);
          }
          url = OPT_MODE_PROXY_M3U8 + channelName;
          console.debug(`proxy-m3u8: ${url}`);
        } else if (OPT_MODE_STRIP_AD_SEGMENTS) {
          return new Promise(async resolve => {
            const maxAttempts = OPT_INITIAL_M3U8_ATTEMPTS <= 0 ? 1 : OPT_INITIAL_M3U8_ATTEMPTS;
            let attempts = 0;
            while (true) {
              const encodingsM3u8Response = await realFetch(url, options);
              if (encodingsM3u8Response.status === 200) {
                const encodingsM3u8 = await encodingsM3u8Response.text();
                const streamM3u8Url = encodingsM3u8.match(/^https:.*\.m3u8$/m)[0];
                const streamM3u8Response = await realFetch(streamM3u8Url);
                const streamM3u8 = await streamM3u8Response.text();
                if (!streamM3u8.includes(AD_SIGNIFIER) || ++attempts >= maxAttempts) {
                  if (maxAttempts > 1 && attempts >= maxAttempts) {
                    console.debug(`max skip ad attempts reached (attempt #${attempts})`);
                  }
                  let streamInfo = StreamInfos[channelName];
                  if (!streamInfo) {
                    StreamInfos[channelName] = streamInfo = {};
                  }
                  streamInfo.ChannelName = channelName;
                  streamInfo.Urls = [];
                  streamInfo.RootM3U8Url = url;
                  streamInfo.RootM3U8Params = new URL(url).search;
                  streamInfo.BackupUrl = null;
                  streamInfo.BackupFailed = false;
                  streamInfo.SegmentCache = [];
                  streamInfo.IsMidroll = false;
                  streamInfo.NotifyFirstTime = 0;
                  streamInfo.NotifyObservedNoAds = false;
                  streamInfo.RealSeqNumber = -1;
                  streamInfo.BackupSeqNumber = -1;
                  streamInfo.FakeSeqNumber = 0;
                  streamInfo.FinalSegUrl = null;
                  const lines = encodingsM3u8.replace('\r', '').split('\n');
                  for (let i = 0; i < lines.length; i += 1) {
                    if (!lines[i].startsWith('#') && lines[i].includes('.m3u8')) {
                      streamInfo.Urls.push(lines[i]);
                      StreamInfosByUrl[lines[i]] = streamInfo;
                    }
                  }
                  resolve(new Response(encodingsM3u8));
                  break;
                }
                console.debug(`attempt to skip ad (attempt #${attempts})`);
              } else {
                resolve(encodingsM3u8Response);
                break;
              }
            }
          });
        }
      }
    }
    return realFetch.apply(this, arguments);
  };
}
const tryNotifyAdsWatchedSigTok = async (realFetch, i, sig, token) => {
  const tokInfo = JSON.parse(token);
  const channelName = tokInfo.channel;
  const urlInfo = new URL(`https://usher.ttvnw.net/api/channel/hls/${channelName}.m3u8`);
  urlInfo.searchParams.set('sig', sig);
  urlInfo.searchParams.set('token', token);
  const encodingsM3u8Response = await realFetch(urlInfo.href);
  if (encodingsM3u8Response.status === 200) {
    const encodingsM3u8 = await encodingsM3u8Response.text();
    const streamM3u8Url = encodingsM3u8.match(/^https:.*\.m3u8$/m)[0];
    const streamM3u8Response = await realFetch(streamM3u8Url);
    const streamM3u8 = await streamM3u8Response.text();
    const res = await tryNotifyAdsWatchedM3U8(streamM3u8);
    if (i >= 0) {
      if (res === 1) {
        console.debug(`no ad at req ${i}`);
      } else {
        console.debug(`ad at req ${i}`);
      }
    }
    return res;
  }
  return 2;
};
const hookFetch = () => {
  const realFetch = browser.window.fetch;
  browser.window.fetch = function (url, init) {
    if (typeof url === 'string') {
      if (url.includes('/access_token') || url.includes('gql')) {
        if (OPT_ACCESS_TOKEN_PLAYER_TYPE) {
          if (url.includes('gql') && init && typeof init.body === 'string' && init.body.includes('PlaybackAccessToken')) {
            const newBody = JSON.parse(init.body);
            newBody.variables.playerType = OPT_ACCESS_TOKEN_PLAYER_TYPE;
            init.body = JSON.stringify(newBody);
          }
        }
        let deviceId = init.headers['X-Device-Id'];
        if (typeof deviceId !== 'string') {
          deviceId = init.headers['Device-ID'];
        }
        if (typeof deviceId === 'string') {
          gql_device_id = deviceId;
        }
        if (gql_device_id && twitchMainWorker) {
          twitchMainWorker.postMessage({
            key: 'updateDeviceId',
            value: gql_device_id
          });
        }
        if (OPT_MODE_NOTIFY_ADS_WATCHED && OPT_MODE_NOTIFY_ADS_WATCHED_INITIAL_ATTEMPTS > 0) {
          if (url.includes('gql') && init && typeof init.body === 'string' && init.body.includes('PlaybackAccessToken')) {
            return new Promise(async resolve => {
              const response = await realFetch(url, init);
              if (response.status === 200) {
                for (let i = 0; i < OPT_MODE_NOTIFY_ADS_WATCHED_INITIAL_ATTEMPTS; i += 1) {
                  const cloned = response.clone();
                  const responseStr = await cloned.text();
                  const responseData = JSON.parse(responseStr);
                  if (responseData && responseData.data && responseData.data.streamPlaybackAccessToken && responseData.data.streamPlaybackAccessToken.value && responseData.data.streamPlaybackAccessToken.signature) {
                    if ((await tryNotifyAdsWatchedSigTok(realFetch, i, responseData.data.streamPlaybackAccessToken.signature, responseData.data.streamPlaybackAccessToken.value)) === 1) {
                      resolve(new Response(responseStr));
                      return;
                    }
                  } else {
                    console.debug('malformed');
                    console.debug(responseData);
                    break;
                  }
                }
              }
              resolve(response);
            });
          }
        }
      }
    }
    return realFetch.apply(this, arguments);
  };
};
const reloadTwitchPlayer = isPausePlay => {
  const findReactNode = (root, constraint) => {
    if (root.stateNode && constraint(root.stateNode)) {
      return root.stateNode;
    }
    let node = root.child;
    while (node) {
      const result = findReactNode(node, constraint);
      if (result) {
        return result;
      }
      node = node.sibling;
    }
    return null;
  };
  let reactRootNode = null;
  const rootNode = document.querySelector('#root');
  if (rootNode && rootNode._reactRootContainer && rootNode._reactRootContainer._internalRoot && rootNode._reactRootContainer._internalRoot.current) {
    reactRootNode = rootNode._reactRootContainer._internalRoot.current;
  }
  if (!reactRootNode) {
    console.debug('Could not find react root');
    return;
  }
  let player = findReactNode(reactRootNode, node => node.setPlayerActive && node.props && node.props.mediaPlayerInstance);
  player = player && player.props && player.props.mediaPlayerInstance ? player.props.mediaPlayerInstance : null;
  const playerState = findReactNode(reactRootNode, node => node.setSrc && node.setInitialPlaybackSettings);
  if (!player) {
    console.debug('Could not find player');
    return;
  }
  if (!playerState) {
    console.debug('Could not find player state');
    return;
  }
  if (player.paused) {
    return;
  }
  if (isPausePlay) {
    player.pause();
    player.play();
    return;
  }
  const sink = player.mediaSinkManager || (player.core ? player.core.mediaSinkManager : null);
  if (sink && sink.video && sink.video._ffz_compressor) {
    const {
      video
    } = sink;
    const volume = video.volume ? video.volume : player.getVolume();
    const muted = player.isMuted();
    const newVideo = document.createElement('video');
    newVideo.volume = muted ? 0 : volume;
    newVideo.playsInline = true;
    video.replaceWith(newVideo);
    player.attachHTMLVideoElement(newVideo);
    setImmediate(() => {
      player.setVolume(volume);
      player.setMuted(muted);
    });
  }
  playerState.setSrc({
    isNewMediaPlayerInstance: true,
    refreshAccessToken: true
  });
};
const onFoundAd = (hasLiveSeg, streamM3u8) => {
  if (OPT_MODE_NOTIFY_ADS_WATCHED && OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT && Date.now() >= notifyAdsWatchedReloadNextTime) {
    console.debug('OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT');
    notifyAdsWatchedReloadNextTime = Date.now() + OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT_DELAY;
    if (streamM3u8) {
      tryNotifyAdsWatchedM3U8(streamM3u8);
    }
    reloadTwitchPlayer();
    return;
  }
  if (hasLiveSeg || !OPT_MODE_MUTE_BLACK && !OPT_MODE_VIDEO_SWAP || OPT_MODE_VIDEO_SWAP && typeof Hls === 'undefined') {
    return;
  }
  if (!foundAdContainer) {
    const adContainers = document.querySelectorAll('[data-test-selector="sad-overlay"]');
    for (let i = 0; i < adContainers.length; i += 1) {
      adContainers[i].style.display = 'none';
    }
    foundAdContainer = adContainers.length > 0;
  }
  if (disabledVideo) {
    disabledVideo.volume = 0;
  } else {
    let liveVid = document.getElementsByTagName('video');
    if (liveVid.length) {
      [disabledVideo] = liveVid;
      [liveVid] = liveVid;
      if (!disabledVideo) {
        return;
      }
      originalVolume = liveVid.volume;
      liveVid.volume = 0;
      liveVid.style.filter = 'brightness(0%)';
      if (OPT_MODE_VIDEO_SWAP) {
        const createTempStream = async () => {
          const channelName = window.location.pathname.substr(1);
          const accessTokenResponse = await getAccessToken(channelName, OPT_VIDEO_SWAP_PLAYER_TYPE);
          if (accessTokenResponse.status === 200) {
            const accessToken = await accessTokenResponse.json();
            const urlInfo = new URL(`https://usher.ttvnw.net/api/channel/hls/${channelName}.m3u8?allow_source=true`);
            urlInfo.searchParams.set('sig', accessToken.data.streamPlaybackAccessToken.signature);
            urlInfo.searchParams.set('token', accessToken.data.streamPlaybackAccessToken.value);
          } else {
            console.debug(`Backup url request (accessToken) failed with ${accessTokenResponse.status}`);
          }
        };
        createTempStream();
      }
    }
  }
};
const pollForAds = () => {
  const adBanner = document.querySelectorAll('span.tw-c-text-overlay');
  let foundAd = false;
  for (let i = 0; i < adBanner.length; i += 1) {
    if (adBanner[i].attributes['data-test-selector']) {
      foundAd = true;
      foundAdBanner = true;
      break;
    }
  }
  if (foundAd) {
    onFoundAd(false);
  } else if (foundAdBanner && disabledVideo) {
    disabledVideo.volume = originalVolume;
    disabledVideo.style.filter = '';
    disabledVideo = null;
    foundAdContainer = false;
    foundAdBanner = false;
  }
};
const pollForAdsObserver = () => {
  pollForAds();
  const vids = document.getElementsByClassName('video-player');
  for (let i = 0; i < vids.length; i += 1) {
    const observer = new MutationObserver(pollForAds);
    observer.observe(vids[i], {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false
    });
  }
};
const onContentLoaded = () => {
  if (!OPT_MODE_VIDEO_SWAP && !OPT_MODE_MUTE_BLACK) {
    return;
  }
  pollForAdsObserver();
};
const isWorkerIntact = () => {
  const iframe = browser.window.document.createElement('iframe');
  browser.window.document.body.append(iframe);
  const cleanWindow = iframe.contentWindow;
  if (cleanWindow.Worker.toString() === browser.window.Worker.toString()) {
    iframe.remove();
    return true;
  }
  iframe.remove();
  return false;
};
if (isMatchingHostnames('twitch.tv')) {
  browser.window.addEventListener('DOMContentLoaded', () => {
    if (!isWorkerIntact()) {
      return;
    }
    declareOptions(browser.window);
    const oldWorker = browser.window.Worker;
    browser.window.Worker = class Worker extends oldWorker {
      constructor(twitchBlobUrl) {
        if (twitchMainWorker) {
          super(twitchBlobUrl);
          return;
        }
        const jsURL = getWasmWorkerUrl(twitchBlobUrl);
        if (typeof jsURL !== 'string') {
          super(twitchBlobUrl);
          return;
        }
        const newBlobStr = `
                    ${processM3U8.toString()}
                    ${hookWorkerFetch.toString()}
                    ${gqlRequest.toString()}
                    ${tryNotifyAdsWatchedM3U8.toString()}
                    ${getSegmentInfos.toString()}
                    ${getSegmentInfosLines.toString()}
                    ${getFinalSegUrl.toString()}
                    ${declareOptions.toString()}
                    ${getAccessToken.toString()}
                    ${makeGraphQlPacket.toString()}
                    ${parseAttributes.toString()}
                    declareOptions(self);
                    self.addEventListener('message', function(e) {
                        if (e.data.key == 'updateDeviceId') {
                            gql_device_id = e.data.value;
                        }
                    });
                    hookWorkerFetch();
                    importScripts('${jsURL}');
                `;
        super(URL.createObjectURL(new Blob([newBlobStr])));
        twitchMainWorker = this;
        const getAdDiv = () => {
          const playerRootDiv = document.querySelector('.video-player');
          let adDiv = null;
          if (playerRootDiv != null) {
            adDiv = playerRootDiv.querySelector('.ubo-overlay');
            if (adDiv === null) {
              adDiv = document.createElement('div');
              adDiv.className = 'ubo-overlay';
              adDiv.innerHTML = '<div class="player-ad-notice" style="color: white; background-color: rgba(0, 0, 0, 0.8); position: absolute; top: 0px; left: 0px; padding: 10px;"><p></p></div>';
              adDiv.style.display = 'none';
              adDiv.P = adDiv.querySelector('p');
              playerRootDiv.appendChild(adDiv);
            }
          }
          return adDiv;
        };
        let adDiv = null;
        this.onmessage = e => {
          switch (e.data.key) {
            case 'showAdBanner':
              if (adDiv === null) {
                adDiv = getAdDiv();
              }
              adDiv.P.textContent = `Waiting for${e.data.isMidroll ? ' midroll' : ''} ads to finish...`;
              adDiv.style.display = 'block';
              break;
            case 'hideAdBanner':
              if (adDiv === null) {
                adDiv = getAdDiv();
              }
              adDiv.style.display = 'none';
              break;
            case 'foundAdSegment':
              onFoundAd(e.data.hasLiveSeg, e.data.streamM3u8);
              break;
            case 'channelNameM3U8Changed':
              notifyAdsWatchedReloadNextTime = 0;
              break;
            case 'reloadPlayer':
              reloadTwitchPlayer();
              break;
            case 'PauseResumePlayer':
              reloadTwitchPlayer(true);
              break;
          }
        };
      }
    };
    browser.window.reloadTwitchPlayer = reloadTwitchPlayer;
    hookFetch();
    onContentLoaded();
  });
}if (isMatchingHostnames('ppss.kr')) {
  const hideLeftSticky = () => {
    const banner = browser.document.getElementById('ppss_wing_banner_left');
    if (banner) {
      hideViaDisplayProperty(banner);
    }
  };
  const hideRightRecommended = () => {
    const banner = browser.document.getElementById('custom_html-3');
    const bannerTitle = banner === null || banner === void 0 ? void 0 : banner.querySelector('.widgettitle');
    if (bannerTitle && bannerTitle.innerText === 'RECOMMENDED') {
      hideViaDisplayProperty(banner);
    }
  };
  const hideRightSponsored = () => {
    const banner = browser.document.getElementById('custom_html-2');
    const bannerTitle = banner === null || banner === void 0 ? void 0 : banner.querySelector('.widgettitle');
    if (bannerTitle && bannerTitle.innerText === 'SPONSORED') {
      hideViaDisplayProperty(banner);
    }
  };
  const hideTopBanners = () => {
    const wrapper = browser.document.getElementById('genesis-content');
    const siblings = wrapper === null || wrapper === void 0 ? void 0 : wrapper.childNodes;
    if (!siblings) {
      return;
    }
    [...siblings].forEach(node => {
      if (node.nodeType === 1 && !node.matches('div.home-top') && !node.matches('.type-post') && !node.matches('.screen-reader-text')) {
        hideViaDisplayProperty(node);
      }
    });
  };
  observeDomChanges(() => {
    hideLeftSticky();
    hideRightRecommended();
    hideRightSponsored();
    hideTopBanners();
  });
}if (isMatchingHostnames('ygosu.com')) {
  const hideSidebarStickies = () => {
    const banners = browser.document.querySelectorAll('.left_ban, .right_ban');
    [...banners].forEach(banner => {
      if (getComputedStyle(banner).top !== 'auto' && getComputedStyle(banner).borderStyle === 'none' && getComputedStyle(banner).right !== 'auto') {
        hideViaDisplayProperty(banner);
      }
    });
  };
  const hideMainMiddleBanner = () => {
    const banner = browser.document.querySelector('.main_wrap > div.main_preview + div:not([class]):not([id])');
    if (banner) {
      hideViaDisplayProperty(banner);
    }
  };
  const hideMiddlePaired = () => {
    var _browser$document$que;
    const elements = (_browser$document$que = browser.document.querySelector('.board_body')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.childNodes;
    if (elements) {
      [...elements].forEach(el => {
        if (el.nodeType === 1 && !el.className.match(/board_top|container|option/)) {
          hideViaDisplayProperty(el);
        }
      });
    }
  };
  const hideMobileHeaderBanner = () => {
    if (navigator.userAgent.match('Mobile')) {
      var _browser$document$que2;
      const startElement = (_browser$document$que2 = browser.document.querySelector('body')) === null || _browser$document$que2 === void 0 ? void 0 : _browser$document$que2.children[0];
      if (!startElement) {
        return;
      }
      const dummies = [startElement];
      while (dummies[dummies.length - 1].nextElementSibling && !dummies[dummies.length - 1].nextElementSibling.classList.contains('navbar')) {
        dummies.push(dummies[dummies.length - 1].nextElementSibling);
      }
      [...dummies].forEach(el => {
        hideViaDisplayProperty(el);
      });
    }
  };
  const hideMobileLowerBanners = () => {
    if (navigator.userAgent.match('Mobile')) {
      const midBanner = browser.document.querySelector('.row-offcanvas-right > div.col-xs-12 + script + div:not([class][id])');
      if (midBanner) {
        hideViaDisplayProperty(midBanner);
      }
      const lowBanner = browser.document.querySelector('.row-offcanvas-right + div[style^="border-bottom"] + div:not([class][id])');
      if (lowBanner) {
        hideViaDisplayProperty(lowBanner);
      }
    }
  };
  observeDomChanges(() => {
    hideSidebarStickies();
    hideMainMiddleBanner();
    hideMiddlePaired();
    hideMobileHeaderBanner();
    hideMobileLowerBanners();
  });
}
