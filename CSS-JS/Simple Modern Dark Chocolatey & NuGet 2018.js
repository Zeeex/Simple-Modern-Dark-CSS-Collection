// ==UserScript==
// @name          Simple Modern Dark Chocolatey & NuGet 2018
// @namespace     http://userstyles.org
// @description	  <style>
// @author        Zex
// @homepage      https://userstyles.org/styles/139542
// @include       http://chocolatey.org/*
// @include       https://chocolatey.org/*
// @include       http://*.chocolatey.org/*
// @include       https://*.chocolatey.org/*
// @include       http://nuget.org/*
// @include       https://nuget.org/*
// @include       http://*.nuget.org/*
// @include       https://*.nuget.org/*
// @run-at        document-start
// @version       0.20180326193656
// ==/UserScript==
(function() {var css = [
	"/* Simple Modern Dark Chocolatey & NuGet 2018",
	"https://userstyles.org/styles/139542/",
	"Check out my tool for optimizing Windows: ",
	"https://xtrtoolbox.blogspot.com */",
	"#content-wrapper,",
	"html,",
	"#layout-footer,",
	"#outer-wrapper,",
	".list-packages .package .package-details",
	"{",
	"	color: #fff !important;",
	"	background: rgba(0, 0, 0, 0) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEUaGhohISElJSUh9lebAAAB20lEQVRIx4XWuZXDMAwE0C0SAQtggIIYoAAEU+aKOHhYojTrYP2+QfOW/5QIJOih/q8HwF/pb3EX+UPIveYcQGgEHiu9hI+ihEc5Jz5KBIlRRRaJ1JtoSAl5Hw96hLB1/up1tnIXOck5jZQy+3iU2hAOKSH1JvwxHsp+5TLF5MOl1/MQXsVs1miXc+KDbYydyMeUgpPQreZ7fWidbNhkXNJSeAhc6qHmHD8AYovunYyEACWEbyIhNeB9fRrH3hFi0bGPLuEW7xCNaohw1vAlS805nfsrTspclB/hVdoqusg53eH7FWot+wjYpOViX8KbFFKTwlnzvj65P9H/vD0/hibYBGhPwlPO8TmxRsaxsNnrUmUXpNhirlJMPr6Hqq9k5Xn/8iYQHYIuQsWFC6Z87IOxLxHphSY4SpuiU87xJnJr5axfeRd+lnMExXpEWPpuZ1v7qZdNBOjiHzDREHX5fs5Zz9p6X0vVKbKKchlSl5rv+3p//FJ/PYvoKryI8vs+2G9lzRmnEKkh+BU8yDk515jDj/HAswu7CCz6U/Mxb/PnC9N41ndpU4hUU7JGk/C9PmP/M2xZYdvBW2PObyf1IUiIzoHmHW9yTncliYs9A9tVNppdShfgQaTLMf+j3X723tLeHgAAAABJRU5ErkJggg==) !important;",
	"}",
	"",
	"body",
	"{",
	"	color: #fff !important;",
	"	background: #000 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEUaGhohISElJSUh9lebAAAB20lEQVRIx4XWuZXDMAwE0C0SAQtggIIYoAAEU+aKOHhYojTrYP2+QfOW/5QIJOih/q8HwF/pb3EX+UPIveYcQGgEHiu9hI+ihEc5Jz5KBIlRRRaJ1JtoSAl5Hw96hLB1/up1tnIXOck5jZQy+3iU2hAOKSH1JvwxHsp+5TLF5MOl1/MQXsVs1miXc+KDbYydyMeUgpPQreZ7fWidbNhkXNJSeAhc6qHmHD8AYovunYyEACWEbyIhNeB9fRrH3hFi0bGPLuEW7xCNaohw1vAlS805nfsrTspclB/hVdoqusg53eH7FWot+wjYpOViX8KbFFKTwlnzvj65P9H/vD0/hibYBGhPwlPO8TmxRsaxsNnrUmUXpNhirlJMPr6Hqq9k5Xn/8iYQHYIuQsWFC6Z87IOxLxHphSY4SpuiU87xJnJr5axfeRd+lnMExXpEWPpuZ1v7qZdNBOjiHzDREHX5fs5Zz9p6X0vVKbKKchlSl5rv+3p//FJ/PYvoKryI8vs+2G9lzRmnEKkh+BU8yDk515jDj/HAswu7CCz6U/Mxb/PnC9N41ndpU4hUU7JGk/C9PmP/M2xZYdvBW2PObyf1IUiIzoHmHW9yTncliYs9A9tVNppdShfgQaTLMf+j3X723tLeHgAAAABJRU5ErkJggg==) !important;",
	"}",
	"",
	".tab-conversation.active > a,",
	".post-content .post-message p:last-child,",
	"pre,",
	"pre .keyword,",
	".docs > aside,",
	"header nav,",
	".button-bar > *,",
	".button:hover",
	"{",
	"	color: #fff !important;",
	"	background: #000;",
	"}",
	"",
	"p,",
	"h1,",
	"h2,",
	"h3,",
	".package-list li,",
	".list-packages .package .package-header .package-by",
	"{",
	"	color: #fff !important;",
	"}",
	"",
	".syntaxhighlighter .plain,",
	".syntaxhighlighter .plain a,",
	".syntaxhighlighter .gutter .line,",
	".syntaxhighlighter table td.code .line,",
	".syntaxhighlighter .gutter,",
	"td.gutter,",
	".syntaxhighlighter .line,",
	".syntaxhighlighter .line.alt1,",
	".syntaxhighlighter .line.alt2",
	"{",
	"	color: #000 !important;",
	"}",
	"",
	".content,",
	".header,",
	"article.box,",
	".content article,",
	"footer,",
	".content article:first-child,",
	".package.unknown-status,",
	".package.waiting,",
	".featured,",
	".block,",
	"#register-policies",
	"{",
	"	background: rgba(0, 0, 0, 0) !important;",
	"}",
	"",
	".form-control,",
	".warning,",
	".approved,",
	".message,",
	"pre > code,",
	"code,",
	"select#moderatorQueue,",
	"select#prerelease,",
	"select#sortOrder,",
	".form-field textarea,",
	".form-field input[type=\"email\"],",
	".form-field input[type=\"text\"],",
	".form-field input[type=\"file\"],",
	".form-field input[type=\"url\"],",
	".form-field input[type=\"password\"],",
	".content .archive,",
	".alert-info,",
	".page-package-details .install-tabs .tab-content .tab-pane .alert",
	"{",
	"	background: #000 !important;",
	"	color: #fff !important;",
	"}",
	"",
	"nav.main ul li.current a",
	"{",
	"	background-color: #6b6b6b;",
	"	border: 1px solid #848383;",
	"	border-top: 1px solid #848383;",
	"	border-bottom: 1px solid #848383;",
	"}",
	"",
	"a,",
	".publisher-anchor-color a,",
	".notices",
	"{",
	"	color: #88f9b1 !important;",
	"}",
	"",
	".sexy-table tbody tr:hover",
	"{",
	"	background-color: #464646;",
	"}",
	"",
	".navbar-inverse",
	"{",
	"	background-color: #00804b;",
	"	border-color: #004d1b;",
	"}",
	"",
	"td,",
	".page-status .status-up,",
	".tag,",
	".page-package-details .install-tabs .nav-tabs > li > a",
	"{",
	"	background-color: #000000;",
	"}",
	"",
	"",
	"/* JUNK */",
	".banner.banner-notice,",
	".footer",
	"{",
	"	display: none !important;",
	"}",
	"",
	".page-package-details .install-tabs .tab-content .tab-pane .install-script,",
	".page-package-details .install-tabs .nav-tabs > li.active > a",
	"{",
	"	background-color: #004022;",
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
