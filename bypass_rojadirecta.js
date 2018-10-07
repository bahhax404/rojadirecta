// ==UserScript==
// @name         Bypass Rojadirecta
// @version      1.0
// @description  Bypasses rojadirecta  redirection page  and load the stream  websites directly
// @include      *it.rojadirecta.eu/goto/*
// @include      *.rojadirecta.cat/goto/* 
// @icon http://www.rojadirecta.me/static/roja.jpg
// @copyright    GNU General Public License v3.0
// @run-at       document-body
// @author       Bahha 
// ==/UserScript==

    var goto = "goto"
    //retreive all the urls on the page
    var links = document.getElementsByTagName("a");
    // retrieve urls with goto word and replace them with the actual stream link. 
   
    for (var i = 0; i < links.length; i++) {

      if (links[i].href.match(goto)) {
      link = links[i].href.slice(links[i].href.indexOf("goto/") + 5);
      links[i].href = "http://" + link;
    
      }

    }
//that's it :)
