// ==UserScript==
// @name          Dark Simple Scrollbars [Chromium]
// @namespace     http://userstyles.org
// @description	  For Chromium/Webkit based browsers
// @author        Zex
// @homepage      https://userstyles.org/styles/149360
// @run-at        document-start
// @version       0.20171009153716
// ==/UserScript==
(function() {var css = [
	"::-webkit-scrollbar {",
	"	width: 11px !important;",
	"	height: 9px !important;",
	"}",
	"::-webkit-scrollbar-button {",
	"	display: none !important;",
	"}",
	"::-webkit-scrollbar-track {",
	"	background-color: transparent !important;",
	"}",
	"::-webkit-scrollbar-thumb {",
	"	background: rgba(55, 55, 55, 0.8) !important;",
	"	border: rgba(211, 218, 227, 0.8) solid 1px !important;",
	"	-webkit-border-radius: 20px !important;",
	"}",
	"::-webkit-scrollbar-thumb:active {",
	"	border: none !important;",
	"	background: #529922 !important;",
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
