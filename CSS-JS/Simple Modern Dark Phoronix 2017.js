// ==UserScript==
// @name          Simple Modern Dark Phoronix 2017
// @namespace     http://userstyles.org
// @description	  Use my tool to optimize and tweak Windows: <br>
// @author        Zex
// @homepage      https://userstyles.org/styles/146982
// @include       http://phoronix.com/*
// @include       https://phoronix.com/*
// @include       http://*.phoronix.com/*
// @include       https://*.phoronix.com/*
// @run-at        document-start
// @version       0.20170902065353
// ==/UserScript==
(function() {var css = [
	"/*Simple Modern Dark Phoronix userstyle v1.1",
	"https://userstyles.org/styles/146982/simple-modern-dark-phoronix",
	"Made by Zex*/",
	"body {",
	"	filter: invert(100%);",
	"	background: #000;",
	"}",
	"img,",
	"object,",
	"twitterwidget,",
	"#player {",
	"	filter: invert(100%);",
	"}",
	"a {",
	"	color: #9d328b !important;",
	"}",
	"#header,",
	"#menuwrap,",
	"#search input[type=\'submit\'],",
	"#channel-subtabbar,",
	"#channel-tabbar,",
	"#channel-tabbar .channel-tabbar-list li a,",
	"#footer-tabbar {",
	"	background: #c387ce !important;",
	"}",
	"#categories-content a:hover,",
	"#linklist li.menulink a.linknode:hover,",
	"li.menulink span:hover {",
	"	background: #db7bc1 !important;",
	"}",
	"#headerwrap {",
	"	background: #fff;",
	"}",
	".extra-info header {",
	"	color: #000;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
