// ==UserScript==
// @name         Bypass Rojadirecta
// @version      1.0
// @description  Bypasses rojadirecta  redirection page  and load the stream  websites directly
// @include      *it.rojadirecta.eu/goto/*
// @icon http://www.rojadirecta.me/static/roja.jpg
// @copyright    GNU General Public License v3.0
// @run-at       document-body
// @author       Bahha 
// ==/UserScript==

//retreive the redirection page url
var redirectionPageLink = window.location.href ;
// retreive the actual url for the stream website 
var directLink = redirectionPageLink.slice(redirectionPageLink.indexOf("goto/") + 5);
//create the link to the page
var linkToPage = document.createElement("a");
//add the link to <a> tag
linkToPage.href = "http://"+ directLink ;
//add a class to <a> tag to make sure we select the correct link .
linkToPage.className = "goToStream";  
//function to click the link
function goToStream() {
    //append the link to the page
    document.body.appendChild(linkToPage);
    //select the link we appended to the page 
    var goToPage = document.getElementsByClassName("goToStream");
    //Go to the page 
    goToPage[0].click();
 
}
 //calling the function  
 goToStream();
