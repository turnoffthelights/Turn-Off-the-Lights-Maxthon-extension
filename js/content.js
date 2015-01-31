//================================================
/*

Turn Off the Lights
The entire page will be fading to dark, so you can watch the video as if you were in the cinema.
Copyright (C) 2015 Stefan vd
www.stefanvd.net
www.turnoffthelights.com

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.


To view a copy of this license, visit http://creativecommons.org/licenses/GPL/2.0/

*/
//================================================

/* Maxthon setting lib */
var mxstorage = null;
var rt = window.external.mxGetRuntime();
mxstorage =
{
	getItem:function(key)
	{
		var value = rt.storage.getConfig(key);
		if(value == "")
		{
			return null;
		}
		return value;
	},
	setItem:function(key,value)
	{
		rt.storage.setConfig(key, value);
	}
}
// this to save the new value
//mxstorage.setItem('test',ys);
// this to get the current value
//mxstorage.getItem("test");
var browser = rt.create('mx.browser');

/* inject script for autoplay */
// try {
// var script = document.createElement("script");script.type = "text/javascript";script.src = "mxaddon-pkg://{d330b49d-e2f4-460c-9dc3-362a260d7457}/js/injected.js";document.getElementsByTagName("head")[0].appendChild(script);
// } catch(e) {}


// temp maxthon CSS added
var css = '@-webkit-keyframes totlbounceInDown{0%{-webkit-transform:translateY(-2000px)}60%{-webkit-transform:translateY(0px)}70%{-webkit-transform:translateY(-80px)}80%{-webkit-transform:translateY(0px)}90%{-webkit-transform:translateY(-10px)}100%{-webkit-transform:translateY(0)}}#stefanvdvivideffect{z-index:1000!important;overflow:hidden;pointer-events:none}.stefanvdlightareoff{position:fixed;top:0;left:0;width:100%;height:100%;z-index:999;opacity:0}#stefanvdlightcorner{border:20px solid rgba(0,122,255,0);position:fixed;z-index:5000}#stefanvdlightcorner:hover{border:20px solid rgba(0,122,255,0.3)}#stefanvdtheater{position:fixed!important;top:0!important;left:0!important;width:100%!important;height:100%!important;margin:0!important;z-index:998!important}@-webkit-keyframes slidedown{from{top:-100%;-webkit-animation-timing-function:ease-out}to{top:5px}}#stefanvdlightseye{-webkit-animation-name:slidedown;-webkit-animation-duration:.75s;position:fixed!important;top:5px!important;right:5px!important;background-color:rgba(0,0,0,.8)!important;color:#fff!important;border-radius:5px!important;padding:10px!important;border:1px solid gray!important;margin:0!important;z-index:5000!important}@-webkit-keyframes slideup{from{bottom:-100%;-webkit-animation-timing-function:ease-out}to{bottom:0}}#totlreaderbar{position:fixed!important;bottom:5px!important;right:5px!important;z-index:2147483647!important}#totlreaderbar,#__totl-tidbit-box,#__totl-wrapper,#__totl-wrapper img,#__totl-box-info,.__totl-box-msg{box-sizing:content-box!important}#__totl-tidbit-box,#__totl-wrapper,#__totl-box-info,#__totl-box-tidbits table{float:none!important;border-collapse:collapse!important;border-spacing:0!important;margin:0!important;padding:0!important;background-color:transparent!important;border:0!important}#__totl-tidbit-box,#__totl-wrapper,#__totl-box-info,#__totl-box-tidbits table td{vertical-align:middle!important;margin:0!important;padding:0!important;border:0!important;background-color:transparent!important}#__totl-tidbit-box,#__totl-wrapper,#__totl-box-info,#__totl-box-tidbits table tr:hover{background-color:transparent!important}#__totl-tidbit-box,#__totl-wrapper,#__totl-box-info,#__totl-box-tidbits img{margin:0!important;padding:0!important;border:0!important}#__totl-tidbit-box{display:block!important;position:fixed!important;z-index:2147483647!important;opacity:1!important;top:auto!important;bottom:0!important;left:auto!important;right:0!important;width:178px;min-width:0!important;max-width:178px!important;min-height:0!important;max-height:80px!important;margin:4px!important;padding:0!important;overflow:hidden!important;background-color:transparant!important;border:1px solid rgba(255,255,255,.5)!important;border-radius:3px!important}#__totl-wrapper{background-color:rgba(0,0,0,.4)!important;padding:4px 0 0!important}#__totl-wrapper img{margin:0!important}#__totl-min{width:14px!important;height:14px!important;position:absolute!important;right:5px!important;background-repeat:no-repeat!important;background-position:right top!important;cursor:pointer!important}#__totl-min:hover{width:14px!important;height:14px!important;position:absolute!important;right:5px!important;background-repeat:no-repeat!important;background-position:right top!important;cursor:pointer!important}#__totl-tidbit-box,#__totl-tidbit-box div,#__totl-tidbit-box span{float:none!important;color:#eee!important;font:menu;font-size:9pt!important;white-space:normal!important;letter-spacing:normal!important;word-spacing:normal!important;line-height:11pt!important;text-align:left!important;text-decoration:none!important;cursor:default!important}#__totl-tidbit-box,#__totl-tidbit-box div{-webkit-animation-name:slideup;-webkit-animation-duration:.75s}#__totl-tidbit-box div,#__totl-tidbit-box span{width:auto!important;-webkit-user-select:none!important}#__totl-box-info{display:block!important;min-height:18px!important;margin:0 0 0 4px !important;padding:0 0 2px 20px !important;background-repeat:no-repeat!important;background-position:left top!important}.__totl-box-title span{font-family:verdana 14px!important;font-weight:400!important}#__totl-box-tidbits{display:block!important}.__totl-box-msg{display:block!important;padding:4px 4px 0!important;margin:0!important;border-top:1px solid rgba(255,255,255,.5)!important;background:transparent!important}.__totl-box-msg input[type=range]{height:21px}#__totl-tidbit-box .__totl-box-tidbit:hover,#__totl-tidbit-box .__totl-box-tidbit:hover span{color:#ff8!important;cursor:pointer!important}.__totl-nowrap{white-space:nowrap!important}.__totl-icon{position:absolute!important;top:4px!important;left:4px!important;height:16px!important;width:16px!important}#totlgammaVal{width:26px!important;height:20px!important;margin-left:3px!important;margin-right:3px!important;padding:0!important;border:0!important;position:relative!important;background-color:transparent!important;color:#fff!important;font-size:12px!important;font-family:Verdana,Geneva,Tahoma,sans-serif!important}#totlrange{-webkit-appearance:slider-horizontal!important;padding:0!important;margin:2px!important;border:0!important;position:relative!important;background-color:transparent!important;color:#fff!important;font-size:12px!important;font-family:Verdana,Geneva,Tahoma,sans-serif!important}#stefanvddynamicbackground{pointer-events:none!important;z-index:1000!important;position:fixed!important;left:0!important;top:0!important;right:0!important;bottom:0!important;overflow:hidden!important}#stefanvddynamicbackground .stefanvddynamicbackgroundbubbleleft{height:100%;left:7px;position:fixed;top:0;width:200px}#stefanvddynamicbackground .stefanvddynamicbackgroundbubbleright{height:98%;right:127px;position:fixed;top:0;width:200px;-webkit-transform:scaleX(-1) rotate(-8deg)}#stefanvddynamicbackground .stefanvddynamicbackgroundbubblemid{height:100%;margin-left:auto;margin-right:auto;position:fixed;display:block;left:0;right:0;top:0;width:300px}#stefanvddynamicbackground .stefanvddynamicbackgroundbubbles{background-color:rgba(255,255,255,0.16);border:1px solid rgba(88,88,88,0.2);border-radius:100px 100px 100px 100px;position:absolute}#stefanvddynamicbackground .stefanvddynamicbubbles0{left:33px;bottom:0;height:17px;width:17px;-webkit-animation:totlbubbles0 10s 0 linear infinite}@-webkit-keyframes totlbubbles0{from{bottom:0;left:33px}50%{left:39px}to{bottom:100%;left:33px}}#stefanvddynamicbackground .stefanvddynamicbubbles1{left:35px;bottom:0;height:21px;width:21px;-webkit-animation:totlbubbles1 10s 0 linear infinite}@-webkit-keyframes totlbubbles1{from{bottom:0;left:50px}20%{bottom:18%;left:51px}37%{left:52px}59%{left:53px}to{bottom:100%;left:50px}}#stefanvddynamicbackground .stefanvddynamicbubbles2{left:70px;bottom:0;height:20px;width:20px;-webkit-animation:totlbubbles2 18s 0 linear infinite}@-webkit-keyframes totlbubbles2{from{bottom:0;left:70px}20%{bottom:18%;left:71px}37%{left:72px}59%{left:73px}to{bottom:100%;left:70px}}#stefanvddynamicbackground .stefanvddynamicbubbles3{left:135px;bottom:0;height:19px;width:19px;-webkit-animation:totlbubbles3 10s 0 linear infinite}@-webkit-keyframes totlbubbles3{from{bottom:0;left:135px}59%{left:132px;bottom:65%}to{bottom:100%;left:135px}}#stefanvddynamicbackground .stefanvddynamicbubbles4{left:155px;bottom:0;height:18px;width:18px;-webkit-animation:totlbubbles4 7s 0 linear infinite}@-webkit-keyframes totlbubbles4{from{bottom:0;left:155px}59%{left:152px}to{bottom:100%;left:155px}}#stefanvddynamicbackground .stefanvddynamicbubbles5{left:225px;bottom:0;height:20px;width:20px;-webkit-animation:totlbubbles5 10s 0 linear infinite}@-webkit-keyframes totlbubbles5{from{bottom:0;left:225px}29%{left:222px}to{bottom:100%;left:225px}}#stefanvddynamicbackground .stefanvddynamicbubbles6{left:135px;bottom:0;height:23px;width:23px;-webkit-animation:totlbubbles6 8s 0 linear infinite}@-webkit-keyframes totlbubbles6{from{bottom:0;left:135px}20%{left:132px;bottom:25%}to{bottom:100%;left:105px}}#stefanvddynamicbackground .stefanvddynamicbubbles7{left:155px;bottom:0;height:12px;width:12px;-webkit-animation:totlbubbles7 12s 0 linear infinite}@-webkit-keyframes totlbubbles7{from{bottom:0;left:165px}79%{left:167px}to{bottom:100%;left:165px}}#stefanvddynamicbackground .stefanvddynamicbubbles8{left:225px;bottom:0;height:20px;width:20px;-webkit-animation:totlbubbles8 10s 0 linear infinite}@-webkit-keyframes totlbubbles8{from{bottom:0;left:225px}88%{bottom:92%;left:222px}to{bottom:100%;left:225px}}#stefanvddynamicbackground .stefanvddynamicbubbles9{left:239px;bottom:0;height:20px;width:20px;-webkit-animation:totlbubbles9 11s 0 linear infinite}@-webkit-keyframes totlbubbles9{from{bottom:0;left:239px}42%{bottom:35%;left:245px}to{bottom:100%;left:248px}}#stefanvddynamicbackground .stefanvddynamicbubbles10{left:30px;bottom:0;height:20px;width:20px;-webkit-animation:totlbubbles10 15s 0 linear infinite}@-webkit-keyframes totlbubbles10{from{bottom:0;left:30px}62%{left:28px}to{bottom:100%;left:25px}}#stefanvddynamicbackground .stefanvddynamicbubbles11{left:30px;bottom:0;height:20px;width:20px;-webkit-animation:totlbubbles11 8s 0 linear infinite}@-webkit-keyframes totlbubbles11{from{bottom:0;left:48px}27%{left:45px}to{bottom:100%;left:45px}}#stefanvddynamicbackground .stefanvddynamicbubbles12{left:30px;bottom:0;height:20px;width:20px;-webkit-animation:totlbubbles12 16s 0 linear infinite}@-webkit-keyframes totlbubbles12{from{bottom:0;left:77px}18%{bottom:28%;left:76px}to{bottom:100%;left:75px}}#stefanvddynamicbackground .stefanvddynamicbubbles13{left:30px;bottom:0;height:20px;width:20px;-webkit-animation:totlbubbles13 12s 0 linear infinite}@-webkit-keyframes totlbubbles13{from{bottom:0;left:138px}58%{bottom:59%;left:135px}to{bottom:100%;left:135px}}#stefanvddynamicbackground .stefanvddynamicbubbles14{left:30px;bottom:0;height:20px;width:20px;-webkit-animation:totlbubbles14 21s 0 linear infinite}@-webkit-keyframes totlbubbles14{from{bottom:0;left:168px}38%{bottom:36%;left:167px}58%{bottom:60%;left:167px}to{bottom:100%;left:166px}}#stefanvddynamicbackground .stefanvddynamicbubbles15{left:30px;bottom:0;height:20px;width:20px;-webkit-animation:totlbubbles15 16s 0 linear infinite}@-webkit-keyframes totlbubbles15{from{bottom:0;left:208px}to{bottom:100%;left:206px}}#stefanvddynamicbackground .stefanvddynamicbubbles16{left:30px;bottom:0;height:20px;width:20px;-webkit-animation:totlbubbles16 10s 0 linear infinite}@-webkit-keyframes totlbubbles16{from{bottom:0;left:248px}5%{bottom:7%;left:232px}to{bottom:100%;left:236px}}#stefanvddynamicbackground .stefanvddynamicbackgroundblockleft{height:100%;left:7px;position:fixed;top:0;width:700px}#stefanvddynamicbackground .stefanvddynamicbackgroundblockright{height:100%;right:7px;position:fixed;top:0;width:700px;z-index:1000;-webkit-transform:scaleX(-1)}#stefanvddynamicbackground .stefanvddynamicbackgroundblocks{background-color:rgba(255,255,255,0.16);border:1px solid rgba(88,88,88,0.2);position:absolute}#stefanvddynamicbackground .stefanvddynamicblocks1{left:47px;top:60px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks1 6s 0 ease-out infinite}@-webkit-keyframes totlblocks1{70%{-webkit-transform:scale(0,0);opacity:0}80%{opacity:1}90%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks2{left:89px;top:60px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks2 6s 0 ease-out infinite}@-webkit-keyframes totlblocks2{50%{-webkit-transform:scale(0,0);opacity:0}60%{opacity:1}70%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks3{left:92px;top:503px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks3 6s 0 ease-out infinite}@-webkit-keyframes totlblocks3{20%{-webkit-transform:scale(0,0);opacity:0}30%{opacity:1}40%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks4{left:135px;top:228px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks4 6s 0 ease-out infinite}@-webkit-keyframes totlblocks4{80%{-webkit-transform:scale(0,0);opacity:0}90%{opacity:1}100%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks5{left:174px;top:267px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks5 6s 0 ease-out infinite}@-webkit-keyframes totlblocks5{65%{-webkit-transform:scale(0,0);opacity:0}75%{opacity:1}85%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks6{left:16px;top:331px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks6 6s 0 ease-out infinite}@-webkit-keyframes totlblocks6{10%{-webkit-transform:scale(0,0);opacity:0}20%{opacity:1}30%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks7{left:54px;top:368px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks7 6s 0 ease-out infinite}@-webkit-keyframes totlblocks7{70%{-webkit-transform:scale(0,0);opacity:0}80%{opacity:1}90%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks8{left:90px;top:330px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks8 6s 0 ease-out infinite}@-webkit-keyframes totlblocks8{40%{-webkit-transform:scale(0,0);opacity:0}50%{opacity:1}60%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks9{left:128px;top:368px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks9 6s 0 ease-out infinite}@-webkit-keyframes totlblocks9{0%{-webkit-transform:scale(0,0);opacity:0}10%{opacity:1}20%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks10{left:72px;top:785px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks10 6s 0 ease-out infinite}@-webkit-keyframes totlblocks10{50%{-webkit-transform:scale(0,0);opacity:0}60%{opacity:1}70%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks11{left:271px;top:471px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks11 6s 0 ease-out infinite}@-webkit-keyframes totlblocks11{3%{-webkit-transform:scale(0,0);opacity:0}13%{opacity:1}23%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks12{left:245px;top:85px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks12 6s 0 ease-out infinite}@-webkit-keyframes totlblocks12{24%{-webkit-transform:scale(0,0);opacity:0}34%{opacity:1}44%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks13{left:285px;top:13px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks13 6s 0 ease-out infinite}@-webkit-keyframes totlblocks13{68%{-webkit-transform:scale(0,0);opacity:0}78%{opacity:1}88%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks14{left:323px;top:51px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks14 6s 0 ease-out infinite}@-webkit-keyframes totlblocks14{55%{-webkit-transform:scale(0,0);opacity:0}65%{opacity:1}75%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks15{left:565px;top:167px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks15 6s 0 ease-out infinite}@-webkit-keyframes totlblocks15{69%{-webkit-transform:scale(0,0);opacity:0}79%{opacity:1}89%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks16{left:450px;top:426px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks16 6s 0 ease-out infinite}@-webkit-keyframes totlblocks16{23%{-webkit-transform:scale(0,0);opacity:0}33%{opacity:1}43%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks17{left:258px;top:695px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks17 6s 0 ease-out infinite}@-webkit-keyframes totlblocks17{1%{-webkit-transform:scale(0,0);opacity:0}11%{opacity:1}21%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks18{left:395px;top:795px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks18 6s 0 ease-out infinite}@-webkit-keyframes totlblocks18{31%{-webkit-transform:scale(0,0);opacity:0}41%{opacity:1}51%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks19{left:154px;top:695px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks19 6s 0 ease-out infinite}@-webkit-keyframes totlblocks19{56%{-webkit-transform:scale(0,0);opacity:0}66%{opacity:1}76%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks20{left:384px;top:643px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks20 6s 0 ease-out infinite}@-webkit-keyframes totlblocks20{72%{-webkit-transform:scale(0,0);opacity:0}82%{opacity:1}92%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks21{left:47px;top:19px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks21 6s 0 ease-out infinite}@-webkit-keyframes totlblocks21{0%{-webkit-transform:scale(0,0);opacity:0}10%{opacity:1}20%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks22{left:114px;top:128px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks22 6s 0 ease-out infinite}@-webkit-keyframes totlblocks22{32%{-webkit-transform:scale(0,0);opacity:0}42%{opacity:1}52%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks22{left:97px;top:144px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks22 6s 0 ease-out infinite}@-webkit-keyframes totlblocks22{54%{-webkit-transform:scale(0,0);opacity:0}64%{opacity:1}74%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks23{left:114px;top:203px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks23 6s 0 ease-out infinite}@-webkit-keyframes totlblocks23{80%{-webkit-transform:scale(0,0);opacity:0}90%{opacity:1}100%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks24{left:153px;top:165px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks24 6s 0 ease-out infinite}@-webkit-keyframes totlblocks24{80%{-webkit-transform:scale(0,0);opacity:0}90%{opacity:1}100%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks24{left:147px;top:164px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks24 6s 0 ease-out infinite}@-webkit-keyframes totlblocks24{3%{-webkit-transform:scale(0,0);opacity:0}13%{opacity:1}23%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks25{left:187px;top:202px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks24 6s 0 ease-out infinite}@-webkit-keyframes totlblocks25{33%{-webkit-transform:scale(0,0);opacity:0}43%{opacity:1}53%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks25{left:154px;top:482px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks25 6s 0 ease-out infinite}@-webkit-keyframes totlblocks25{49%{-webkit-transform:scale(0,0);opacity:0}59%{opacity:1}69%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks26{left:159px;top:591px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks26 6s 0 ease-out infinite}@-webkit-keyframes totlblocks26{15%{-webkit-transform:scale(0,0);opacity:0}25%{opacity:1}35%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks27{left:233px;top:311px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks27 6s 0 ease-out infinite}@-webkit-keyframes totlblocks27{61%{-webkit-transform:scale(0,0);opacity:0}71%{opacity:1}81%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks28{left:303px;top:235px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks28 6s 0 ease-out infinite}@-webkit-keyframes totlblocks28{8%{-webkit-transform:scale(0,0);opacity:0}18%{opacity:1}28%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks29{left:348px;top:278px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks29 6s 0 ease-out infinite}@-webkit-keyframes totlblocks29{12%{-webkit-transform:scale(0,0);opacity:0}22%{opacity:1}32%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks30{left:444px;top:40px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks30 6s 0 ease-out infinite}@-webkit-keyframes totlblocks30{34%{-webkit-transform:scale(0,0);opacity:0}44%{opacity:1}54%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks31{left:528px;top:82px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks31 6s 0 ease-out infinite}@-webkit-keyframes totlblocks31{36%{-webkit-transform:scale(0,0);opacity:0}46%{opacity:1}56%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks32{left:659px;top:44px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks32 6s 0 ease-out infinite}@-webkit-keyframes totlblocks32{16%{-webkit-transform:scale(0,0);opacity:0}26%{opacity:1}36%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks33{left:584px;top:464px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks33 6s 0 ease-out infinite}@-webkit-keyframes totlblocks33{15%{-webkit-transform:scale(0,0);opacity:0}25%{opacity:1}35%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks34{left:412px;top:387px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks34 6s 0 ease-out infinite}@-webkit-keyframes totlblocks34{80%{-webkit-transform:scale(0,0);opacity:0}90%{opacity:1}100%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks35{left:559px;top:299px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks35 6s 0 ease-out infinite}@-webkit-keyframes totlblocks35{68%{-webkit-transform:scale(0,0);opacity:0}78%{opacity:1}88%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks36{left:629px;top:699px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks36 6s 0 ease-out infinite}@-webkit-keyframes totlblocks36{58%{-webkit-transform:scale(0,0);opacity:0}68%{opacity:1}78%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks37{left:405px;top:82px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks37 6s 0 ease-out infinite}@-webkit-keyframes totlblocks37{53%{-webkit-transform:scale(0,0);opacity:0}63%{opacity:1}73%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks38{left:359px;top:83px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks38 6s 0 ease-out infinite}@-webkit-keyframes totlblocks38{62%{-webkit-transform:scale(0,0);opacity:0}72%{opacity:1}82%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks38{left:499px;top:593px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks38 6s 0 ease-out infinite}@-webkit-keyframes totlblocks38{4%{-webkit-transform:scale(0,0);opacity:0}14%{opacity:1}24%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks39{left:232px;top:433px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks39 6s 0 ease-out infinite}@-webkit-keyframes totlblocks39{4%{-webkit-transform:scale(0,0);opacity:0}14%{opacity:1}24%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks40{left:358px;top:843px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks40 6s 0 ease-out infinite}@-webkit-keyframes totlblocks40{4%{-webkit-transform:scale(0,0);opacity:0}14%{opacity:1}24%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks41{left:38px;top:843px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks41 6s 0 ease-out infinite}@-webkit-keyframes totlblocks41{24%{-webkit-transform:scale(0,0);opacity:0}34%{opacity:1}44%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicblocks42{left:3px;top:17px;opacity:0;height:37px;width:37px;-webkit-animation:totlblocks42 6s 0 ease-out infinite}@-webkit-keyframes totlblocks42{1%{-webkit-transform:scale(0,0);opacity:0}11%{opacity:1}21%{opacity:0;-webkit-transform:scale(1.2,1.2)}}#stefanvddynamicbackground .stefanvddynamicbackgroundraindrupsleft{height:100%;left:7px;position:absolute;top:0;width:200px}#stefanvddynamicbackground .stefanvddynamicbackgroundraindrupsright{height:100%;right:7px;position:fixed;top:0;width:700px;-webkit-transform:scaleX(-1)}#stefanvddynamicbackground .stefanvddynamicbackgroundraindrups{position:fixed;-webkit-transform:rotate(45deg);display:block;background:rgba(0,0,0,0.2);box-shadow:inset 1px 0 0 0 rgba(255,255,255,0.25),inset 0 1px 0 0 rgba(255,255,255,0.25),inset 1px 0 3px 0 rgba(255,255,255,0.25),inset 0 1px 3px 0 rgba(255,255,255,0.75),inset -1px 0 0 0 rgba(255,255,255,0.15),inset 0 -1px 0 0 rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.05)}@-webkit-keyframes drups{0%{top:0;opacity:0}5%{top:5%;opacity:1}95%{top:95%;opacity:1}100%{top:99%;opacity:0}}#stefanvddynamicbackground .b0{width:18px;height:18px;border-radius:9px 18px 18px 18px;left:33px;top:0;-webkit-animation:drups 15s 0 linear infinite}#stefanvddynamicbackground .b1{width:18px;height:18px;border-radius:9px 18px 18px 18px;left:93px;top:0;-webkit-animation:drups 12s 2s linear infinite}#stefanvddynamicbackground .b2{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:150px;top:0;-webkit-animation:drups 14s 3s linear infinite}#stefanvddynamicbackground .b3{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:183px;top:0;-webkit-animation:drups 9s 5s linear infinite}#stefanvddynamicbackground .b4{width:8px;height:8px;border-radius:4px 8px 8px 8px;left:222px;top:0;-webkit-animation:drups 11s 2s linear infinite}#stefanvddynamicbackground .b5{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:258px;top:0;-webkit-animation:drups 12s 1s linear infinite}#stefanvddynamicbackground .b6{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:301px;top:0;-webkit-animation:drups 15s 4s linear infinite}#stefanvddynamicbackground .b7{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:344px;top:0;-webkit-animation:drups 10s 0 linear infinite}#stefanvddynamicbackground .b8{width:8px;height:8px;border-radius:4px 8px 8px 8px;left:379px;top:0;-webkit-animation:drups 16s 3s linear infinite}#stefanvddynamicbackground .b9{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:409px;top:0;-webkit-animation:drups 15s 1s linear infinite}#stefanvddynamicbackground .b10{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:463px;top:0;-webkit-animation:drups 14s 0 linear infinite}#stefanvddynamicbackground .b11{width:18px;height:18px;border-radius:9px 18px 18px 18px;left:482px;top:0;-webkit-animation:drups 13s 0 linear infinite}#stefanvddynamicbackground .b12{width:18px;height:18px;border-radius:9px 18px 18px 18px;left:548px;top:0;-webkit-animation:drups 14s 1s linear infinite}#stefanvddynamicbackground .b13{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:582px;top:0;-webkit-animation:drups 12s 3s linear infinite}#stefanvddynamicbackground .b14{width:6px;height:6px;border-radius:3px 6px 6px 6px;left:604px;top:0;-webkit-animation:drups 15s 2s linear infinite}#stefanvddynamicbackground .b15{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:660px;top:0;-webkit-animation:drups 15s 0 linear infinite}#stefanvddynamicbackground .b16{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:13px;top:0;-webkit-animation:drups 13s 3s linear infinite}#stefanvddynamicbackground .b17{width:8px;height:8px;border-radius:4px 8px 8px 8px;left:56px;top:0;-webkit-animation:drups 14s 1s linear infinite}#stefanvddynamicbackground .b18{width:6px;height:6px;border-radius:3px 6px 6px 6px;left:100px;top:0;-webkit-animation:drups 10s 2s linear infinite}#stefanvddynamicbackground .b19{width:8px;height:8px;border-radius:4px 8px 8px 8px;left:153px;top:0;-webkit-animation:drups 17s 0 linear infinite}#stefanvddynamicbackground .b20{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:190px;top:0;-webkit-animation:drups 16s 7s linear infinite}#stefanvddynamicbackground .b21{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:253px;top:0;-webkit-animation:drups 15s 5s linear infinite}#stefanvddynamicbackground .b22{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:281px;top:0;-webkit-animation:drups 18s 0 linear infinite}#stefanvddynamicbackground .b23{width:8px;height:8px;border-radius:4px 8px 8px 8px;left:320px;top:0;-webkit-animation:drups 19s 0 linear infinite}#stefanvddynamicbackground .b24{width:8px;height:8px;border-radius:4px 8px 8px 8px;left:383px;top:0;-webkit-animation:drups 16s 4s linear infinite}#stefanvddynamicbackground .b25{width:6px;height:6px;border-radius:3px 6px 6px 6px;left:430px;top:0;-webkit-animation:drups 13s 3s linear infinite}#stefanvddynamicbackground .b26{width:8px;height:8px;border-radius:4px 8px 8px 8px;left:470px;top:0;-webkit-animation:drups 12s 0 linear infinite}#stefanvddynamicbackground .b27{width:18px;height:18px;border-radius:9px 18px 18px 18px;left:510px;top:0;-webkit-animation:drups 12s 1s linear infinite}#stefanvddynamicbackground .b28{width:8px;height:8px;border-radius:4px 8px 8px 8px;left:550px;top:0;-webkit-animation:drups 10s 0 linear infinite}#stefanvddynamicbackground .b29{width:12px;height:12px;border-radius:6px 12px 12px 12px;left:620px;top:0;-webkit-animation:drups 11s 2s linear infinite}#stefanvddynamicbackground .b30{width:18px;height:18px;border-radius:9px 18px 18px 18px;left:680px;top:0;-webkit-animation:drups 9s 4s linear infinite}#stefanvddynamicbackground #stefanvdworld{position:absolute;height:100%;width:100%;-webkit-transform-style:preserve-3d}#stefanvddynamicbackground #stefanvdworld div{-webkit-transform-style:preserve-3d}#stefanvddynamicbackground #stefanvdworld .stefanvdcloudBase{position:absolute;left:256px;top:256px;width:20px;height:20px;margin-left:-10px;margin-top:-10px}#stefanvddynamicbackground #stefanvdworld .stefanvdcloudLayer{position:absolute;left:50%;top:50%;width:256px;height:256px;margin-left:-128px;margin-top:-128px;-webkit-transition:opacity .5s ease-out;background-image:url(data:image/png;base64,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)}#stefanvddynamicbackground #stefanvddynamicspace div{position:absolute;-webkit-transform-style:preserve-3d}#stefanvddynamicbackground #stefanvddynamicspace{height:100%;width:100%;-webkit-perspective:700;background:-webkit-radial-gradient(rgba(119,106,127,0.15) 0,transparent 66%,rgba(127,18,148,0.2)98%);position:absolute;border-top-left-radius:5px 5px;border-top-right-radius:5px 5px;border-bottom-right-radius:0;border-bottom-left-radius:0}#stefanvddynamicbackground #stefanvddynamicspace b{position:absolute;height:2px;width:2px;background:#FFF;box-shadow:0 0 5px #FFF}@-webkit-keyframes totlspace{from{-webkit-transform:translateZ(-300px);opacity:0}50%{-webkit-transform:translateZ(00px);opacity:1}to{-webkit-transform:translateZ(300px);opacity:0}}#stefanvddynamicbackground #stefanvddynamicspace .s001{top:5%;left:92%;-webkit-animation:totlspace 6s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s002{top:26%;left:7%;-webkit-animation:totlspace 7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s003{top:89%;left:24%;-webkit-animation:totlspace 6.2s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s004{top:85%;left:87%;-webkit-animation:totlspace 5.8s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s005{top:26%;left:56%;-webkit-animation:totlspace 4.4s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s006{top:74%;left:32%;-webkit-animation:totlspace 7.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s007{top:15%;left:74%;-webkit-animation:totlspace 5.3s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s008{top:68%;left:51%;-webkit-animation:totlspace 5.8s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s009{top:21%;left:37%;-webkit-animation:totlspace 6.2s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s010{top:53%;left:41%;-webkit-animation:totlspace 6s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s011{top:33%;left:81%;-webkit-animation:totlspace 7.3s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s012{top:49%;left:64%;-webkit-animation:totlspace 3.2s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s013{top:24%;left:51%;-webkit-animation:totlspace 5.5s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s014{top:57%;left:22%;-webkit-animation:totlspace 6.8s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s015{top:19%;left:7%;-webkit-animation:totlspace 6s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s016{top:62%;left:42%;-webkit-animation:totlspace 4.7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s017{top:52%;left:63%;-webkit-animation:totlspace 3.9s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s018{top:43%;left:19%;-webkit-animation:totlspace 5.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s019{top:95%;left:28%;-webkit-animation:totlspace 7.3s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s020{top:5%;left:71%;-webkit-animation:totlspace 6.8s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s021{top:67%;left:53%;-webkit-animation:totlspace 7.9s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s022{top:32%;left:25%;-webkit-animation:totlspace 5.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s023{top:47%;left:38%;-webkit-animation:totlspace 5.8s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s024{top:19%;left:42%;-webkit-animation:totlspace 6.7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s025{top:11%;left:18%;-webkit-animation:totlspace 6.3s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s026{top:37%;left:29%;-webkit-animation:totlspace 8.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s027{top:64%;left:94%;-webkit-animation:totlspace 7.5s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s028{top:28%;left:82%;-webkit-animation:totlspace 7.7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s029{top:71%;left:99%;-webkit-animation:totlspace 6.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace .s030{top:94%;left:37%;-webkit-animation:totlspace 7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p01{top:0;left:0;height:25%;width:25%;-webkit-transform:rotate(182deg);-webkit-animation:totlspacepart 7.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p02{top:0;left:25%;height:25%;width:25%;-webkit-transform:rotate(179deg);-webkit-animation:totlspacepart 5.3s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p03{top:0;left:50%;height:25%;width:25%;-webkit-transform:rotate(185deg);-webkit-animation:totlspacepart 7.5s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p04{top:0;left:75%;height:25%;width:25%;-webkit-transform:rotate(183deg);-webkit-animation:totlspacepart 6.6s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p05{top:25%;left:0;height:25%;width:25%;-webkit-transform:rotate(174deg);-webkit-animation:totlspacepart 8.7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p06{top:25%;left:25%;height:25%;width:25%;-webkit-transform:rotate(178deg);-webkit-animation:totlspacepart 8.9s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p07{top:25%;left:50%;height:25%;width:25%;-webkit-transform:rotate(181deg);-webkit-animation:totlspacepart 7.2s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p08{top:25%;left:75%;height:25%;width:25%;-webkit-transform:rotate(177deg);-webkit-animation:totlspacepart 9.5s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p09{top:50%;left:0;height:25%;width:25%;-webkit-transform:rotate(186deg);-webkit-animation:totlspacepart 5.6s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p10{top:50%;left:25%;height:25%;width:25%;-webkit-transform:rotate(184deg);-webkit-animation:totlspacepart 6.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p11{top:50%;left:50%;height:25%;width:25%;-webkit-transform:rotate(180deg);-webkit-animation:totlspacepart 6.5s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p12{top:50%;left:75%;height:25%;width:25%;-webkit-transform:rotate(176deg);-webkit-animation:totlspacepart 5.9s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p13{top:75%;left:0;height:25%;width:25%;-webkit-transform:rotate(183deg);-webkit-animation:totlspacepart 7.6s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p14{top:75%;left:25%;height:25%;width:25%;-webkit-transform:rotate(177deg);-webkit-animation:totlspacepart 8.7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p15{top:75%;left:50%;height:25%;width:25%;-webkit-transform:rotate(181deg);-webkit-animation:totlspacepart 7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspace #p16{top:75%;left:75%;height:25%;width:25%;-webkit-transform:rotate(179deg);-webkit-animation:totlspacepart 5.4s 0 linear infinite}@-webkit-keyframes totlspacepart{from{-webkit-transform:translateZ(-300px);opacity:0}50%{-webkit-transform:translateZ(0px);opacity:1}to{-webkit-transform:translateZ(300px);opacity:0}}#stefanvddynamicbackground #stefanvddynamicspacenoflying div{position:absolute}#stefanvddynamicbackground #stefanvddynamicspacenoflying{height:100%;width:100%;-webkit-perspective:700;background:-webkit-radial-gradient(rgba(119,106,127,0.15) 0,transparent 66%,rgba(127,18,148,0.2)98%);position:absolute;border-top-left-radius:5px 5px;border-top-right-radius:5px 5px;border-bottom-right-radius:0;border-bottom-left-radius:0}#stefanvddynamicbackground #stefanvddynamicspacenoflying b{position:absolute;height:2px;width:2px;background:#FFF;box-shadow:0 0 5px #FFF}@-webkit-keyframes totlspacenoflying{from{-webkit-transform:translateZ(-300px);opacity:0}50%{-webkit-transform:translateZ(00px);opacity:1}to{-webkit-transform:translateZ(300px);opacity:0}}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns001{top:5%;left:92%;-webkit-animation:totlspacenoflying 6s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns002{top:26%;left:7%;-webkit-animation:totlspacenoflying 7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns003{top:89%;left:24%;-webkit-animation:totlspacenoflying 6.2s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns004{top:85%;left:87%;-webkit-animation:totlspacenoflying 5.8s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns005{top:26%;left:56%;-webkit-animation:totlspacenoflying 4.4s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns006{top:74%;left:32%;-webkit-animation:totlspacenoflying 7.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns007{top:15%;left:74%;-webkit-animation:totlspacenoflying 5.3s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns008{top:68%;left:51%;-webkit-animation:totlspacenoflying 5.8s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns009{top:21%;left:37%;-webkit-animation:totlspacenoflying 6.2s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns010{top:53%;left:41%;-webkit-animation:totlspacenoflying 6s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns011{top:33%;left:81%;-webkit-animation:totlspacenoflying 7.3s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns012{top:49%;left:64%;-webkit-animation:totlspacenoflying 3.2s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns013{top:24%;left:51%;-webkit-animation:totlspacenoflying 5.5s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns014{top:57%;left:22%;-webkit-animation:totlspacenoflying 6.8s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns015{top:19%;left:7%;-webkit-animation:totlspacenoflying 6s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns016{top:62%;left:42%;-webkit-animation:totlspacenoflying 4.7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns017{top:52%;left:63%;-webkit-animation:totlspacenoflying 3.9s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns018{top:43%;left:19%;-webkit-animation:totlspacenoflying 5.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns019{top:95%;left:28%;-webkit-animation:totlspacenoflying 7.3s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns020{top:5%;left:71%;-webkit-animation:totlspacenoflying 6.8s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns021{top:67%;left:53%;-webkit-animation:totlspacenoflying 7.9s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns022{top:32%;left:25%;-webkit-animation:totlspacenoflying 5.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns023{top:47%;left:38%;-webkit-animation:totlspacenoflying 5.8s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns024{top:19%;left:42%;-webkit-animation:totlspacenoflying 6.7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns025{top:11%;left:18%;-webkit-animation:totlspacenoflying 6.3s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns026{top:37%;left:29%;-webkit-animation:totlspacenoflying 8.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns027{top:64%;left:94%;-webkit-animation:totlspacenoflying 7.5s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns028{top:28%;left:82%;-webkit-animation:totlspacenoflying 7.7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns029{top:71%;left:99%;-webkit-animation:totlspacenoflying 6.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying .ns030{top:94%;left:37%;-webkit-animation:totlspacenoflying 7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np01{top:0;left:0;height:25%;width:25%;-webkit-transform:rotate(182deg);-webkit-animation:totlspacepartnoflying 7.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np02{top:0;left:25%;height:25%;width:25%;-webkit-transform:rotate(179deg);-webkit-animation:totlspacepartnoflying 5.3s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np03{top:0;left:50%;height:25%;width:25%;-webkit-transform:rotate(185deg);-webkit-animation:totlspacepartnoflying 7.5s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np04{top:0;left:75%;height:25%;width:25%;-webkit-transform:rotate(183deg);-webkit-animation:totlspacepartnoflying 6.6s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np05{top:25%;left:0;height:25%;width:25%;-webkit-transform:rotate(174deg);-webkit-animation:totlspacepartnoflying 8.7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np06{top:25%;left:25%;height:25%;width:25%;-webkit-transform:rotate(178deg);-webkit-animation:totlspacepartnoflying 8.9s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np07{top:25%;left:50%;height:25%;width:25%;-webkit-transform:rotate(181deg);-webkit-animation:totlspacepartnoflying 7.2s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np08{top:25%;left:75%;height:25%;width:25%;-webkit-transform:rotate(177deg);-webkit-animation:totlspacepartnoflying 9.5s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np09{top:50%;left:0;height:25%;width:25%;-webkit-transform:rotate(186deg);-webkit-animation:totlspacepartnoflying 5.6s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np10{top:50%;left:25%;height:25%;width:25%;-webkit-transform:rotate(184deg);-webkit-animation:totlspacepartnoflying 6.1s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np11{top:50%;left:50%;height:25%;width:25%;-webkit-transform:rotate(180deg);-webkit-animation:totlspacepartnoflying 6.5s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np12{top:50%;left:75%;height:25%;width:25%;-webkit-transform:rotate(176deg);-webkit-animation:totlspacepartnoflying 5.9s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np13{top:75%;left:0;height:25%;width:25%;-webkit-transform:rotate(183deg);-webkit-animation:totlspacepartnoflying 7.6s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np14{top:75%;left:25%;height:25%;width:25%;-webkit-transform:rotate(177deg);-webkit-animation:totlspacepartnoflying 8.7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np15{top:75%;left:50%;height:25%;width:25%;-webkit-transform:rotate(181deg);-webkit-animation:totlspacepartnoflying 7s 0 linear infinite}#stefanvddynamicbackground #stefanvddynamicspacenoflying #np16{top:75%;left:75%;height:25%;width:25%;-webkit-transform:rotate(179deg);-webkit-animation:totlspacepartnoflying 5.4s 0 linear infinite}@-webkit-keyframes totlspacepartnoflying{from{opacity:0}50%{opacity:1}to{opacity:0}}#stefanvdnighttheme{-webkit-transform:scale(0.7)!important;padding:0!important;margin:0!important;z-index:990!important;-moz-user-select:none!important;-webkit-user-select:none!important;user-select:none!important;background:#fff!important;border:1px solid #EBEBEB!important;box-shadow:#fff 0 0 10px;border-radius:5px!important;cursor:pointer!important;display:block!important;height:50px!important;margin:0!important;overflow:hidden!important;position:fixed!important;width:100px!important}#stefanvdnighttheme input{display:none!important}#stefanvdnighttheme input:checked + #stefanvdnightthemeslider{left:0!important}#stefanvdnighttheme #stefanvdnightthemeslider{left:-50px!important;position:absolute!important;top:0!important;-webkit-transition:left .25s ease-out;-moz-transition:left .25s ease-out;-o-transition:left .25s ease-out;-ms-transition:left .25s ease-out;transition:left .25s ease-out}#stefanvdnighttheme #sliderblock{font-family:"Times New Roman"!important;left:50px!important;display:block!important;position:absolute!important;width:50px;height:50px!important;border-radius:5px!important;text-align:center!important;background:#fafafa!important;color:#c2c2c2!important;font-size:40px!important;line-height:52px!important;font-weight:700!important;margin-top:50%!important;margin-right:50%!important;right:-5px!important;z-index:4!important;box-shadow:0 5px 10px -3px rgba(0,0,0,0.3)!important}#stefanvdnighttheme #stefanvdnighti{display:block!important;position:absolute!important;width:50px!important;height:50px!important;border-radius:5px;text-align:center!important;background:#fafafa!important;color:#c2c2c2!important;font-size:40px!important;line-height:52px!important;font-weight:700!important;top:-25px!important;margin-top:50%!important;margin-right:50%!important;z-index:4!important;box-shadow:0 5px 10px -3px rgba(0,0,0,0.3)!important}#stefanvdnighttheme #stefanvdnightin{display:block!important;position:absolute!important;width:50px;height:50px!important;border-radius:5px!important;text-align:center!important;background:#6D6D6D!important;color:#c2c2c2!important;font-size:40px!important;line-height:52px!important;font-weight:700!important;top:-25px!important;margin-top:50%!important;margin-right:50%!important;z-index:4!important;box-shadow:0 5px 10px -3px rgba(0,0,0,0.3)!important}#stefanvdnighttheme .night{left:100px!important;width:50px!important;height:45px!important;display:block!important;position:absolute!important;background:#3e6185!important;border-radius:5px!important;margin-top:50%!important;margin-left:50%!important;border-top:5px solid #194d60!important}#stefanvdnighttheme .night:before{content:" "!important;width:20px!important;height:20px!important;border-radius:10px!important;position:absolute!important;background:#fff!important;top:-15px!important;margin-top:50%!important;left:-10px!important;margin-left:50%!important}#stefanvdnighttheme .night:after{content:" "!important;width:15px!important;height:15px!important;border-radius:7.5px!important;background:#3e6185!important;position:absolute!important;top:-15px!important;margin-top:50%!important;left:-12px!important;margin-left:50%!important}#stefanvdnighttheme .night span{display:block!important;width:5px!important;height:5px!important;background:#9fb0c2!important;border-radius:2.5px!important;position:absolute!important;z-index:2!important;right:7px!important;top:4.5px!important}#stefanvdnighttheme .night span:before,.night span:after{content:" "!important;width:3px!important;height:3px!important;border-radius:1.5px!important;position:absolute!important;background:#9fb0c2!important;z-index:2!important;left:-26px!important;top:4px!important}#stefanvdnighttheme .night span:after{left:-2px!important;top:28px!important}#stefanvdnighttheme .sun{width:50px!important;height:45px!important;display:block!important;position:absolute!important;background:#E7F6FF!important;border-radius:5px!important;margin-top:50%!important;margin-left:13%!important;border-top:5px solid #CBEAFF!important}#stefanvdnighttheme .sun:before{content:" "!important;width:24px!important;height:24px!important;border-radius:12px!important;position:absolute!important;background:#FE0!important;box-shadow:0 0 30px rgba(255,220,0,1),0 0 10px rgba(255,220,0,1)!important;top:-20px!important;margin-top:50%!important;left:-10px!important;margin-left:50%!important}#stefanvdnighttheme .sun:after{content:" "!important;width:40px!important;height:20px!important;border-radius:10.5px!important;background:rgba(255,255,255,0.75)!important;position:absolute!important;top:-4px!important;margin-top:50%!important;left:-35px!important;margin-left:50%!important}#stefanvdspeechbox{position:fixed;top:0;left:0;height:120px;width:100%;background:#fff;box-shadow:rgba(0,0,0,0.5) 0 1px 3px;z-index:2147483647!important}#stefanvdspeechbox .stefanvdspeechbrand{position:absolute;top:50px;left:20px;font-size:24px;color:gray}#stefanvdspeechbox #stefanvdspeechsaidtext{position:absolute;top:50px;right:20px;font-size:24px;color:gray}.stefanvdspeechloading{color:#ccc;font-family:sans-serif;font-size:14px;width:100px;height:100px;line-height:100px;margin:10px auto;position:relative;box-sizing:border-box;text-align:center;z-index:0;text-transform:uppercase}.stefanvdspeechloading:before,.stefanvdspeechloading:after{opacity:0;box-sizing:border-box;content:"\0020";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100px;border:5px solid #1f94ed;box-shadow:0 0 50px #1f94ed,inset 0 0 50px #1f94ed}.stefanvdspeechloading:after{z-index:1;-webkit-animation:gogoloader 2s infinite 1s}.stefanvdspeechloading:before{z-index:2;-webkit-animation:gogoloader 2s infinite}@-webkit-keyframes gogoloader{0%{-webkit-transform:scale(0);opacity:0}50%{opacity:1}100%{-webkit-transform:scale(1);opacity:0}}.turnoffthelightsdrag{position:relative;cursor:hand;z-index:100}#stefanvdspeechbox .speechicon{-webkit-transform:scale(0.3);-webkit-transform:scale(0.3);display:inline-block;top:25px;position:absolute;left:25px}#stefanvdspeechbox ._Xu{height:87px;left:43px;pointer-events:none;position:absolute;top:47px;width:42px}#stefanvdspeechbox ._Kv{background-color:#666;border-radius:30px;height:46px;left:25px;pointer-events:none;position:absolute;width:24px}#stefanvdspeechbox ._kR{bottom:0;height:53px;left:11px;overflow:hidden;pointer-events:none;position:absolute;width:52px}#stefanvdspeechbox ._lw{background-color:#666;bottom:14px;height:14px;left:22px;pointer-events:none;position:absolute;width:9px;z-index:1}#stefanvdspeechbox ._ew{border:7px solid #666;border-radius:28px;bottom:27px;height:57px;left:0;pointer-events:none;position:absolute;width:38px;z-index:0}';
var style = document.createElement('style');
style.setAttribute('type', 'text/css');
style.appendChild(document.createTextNode(css));
document.getElementsByTagName('head')[0].appendChild(style);


if (window.top === window) {
document.addEventListener('DOMContentLoaded', function () {
// temp maxthon JV added
var jv = "(ytCinema={players:{objs:[],active:0},messageEvent:document.createEvent('Event'),playerStateChange:function(e){var t=document.getElementById('ytCinemaMessage'),n='playerStateChange:'.concat(e);if(t&&t.textContent!==n){t.textContent=n;t.dispatchEvent(ytCinema.messageEvent)}},initialize:function(){function e(e){var t=document.getElementById('movie_player')||null;var n=document.getElementsByTagName('video')||false;if(n&&n.length>0){var r=function(e){for(var t=0;t<e.length;t++){(function(e,t){var n={pause:function(){if(!t.ended){e.players.active-=1}if(e.players.active<1){e.playerStateChange(2)}},play:function(){e.players.active+=1;e.playerStateChange(1)},ended:function(){e.players.active-=1;if(e.players.active<1){e.playerStateChange(0)}}};t.removeEventListener('pause',n.pause);t.removeEventListener('play',n.play);t.removeEventListener('ended',n.ended);t.addEventListener('pause',n.pause);t.addEventListener('play',n.play);t.addEventListener('ended',n.ended);e.players.objs.push(t)})(this.ytCinema,n[t])}};r(n);(function(e){var t=function(){var t=document.getElementsByTagName('video')||null;if(t==null||t.length===0){e.players.active=0;if(e.players.active<1){e.playerStateChange(0)}return}e.players.active=0;for(var n=0;n<t.length;n++){if(!t[n].paused&&!t[n].ended){e.players.active+=1}}if(e.players.active<1){e.playerStateChange(0)}r(t)};var n=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(typeof n=='function'){var i=document.querySelector('body');var s=new n(function(e,n){t()});s.observe(i,{subtree:true,childList:true,characterData:false,attributes:false})}else{}})(this.ytCinema)}if(t!==null){var i=setInterval(function(){if(t.pause||t.pauseVideo){clearInterval(i);if(t.pauseVideo){t.addEventListener('onStateChange','ytCinema.playerStateChange')}}},10)}}this.messageEvent.initEvent('ytCinemaMessage',true,true);window.addEventListener('load',e,false);e()}}).initialize()";
var text = document.createElement('javascript');
text.setAttribute('type', 'text/javascript');            
text.appendChild(document.createTextNode(jv));
document.getElementsByTagName('head')[0].appendChild(text);
});
///////////

function $(id) { return document.getElementById(id); }
// settings
var autoplay = null, eastereggs = null, shortcutlight = null, eyen = null, eyea = null, eyealist = null, contextmenus = null, excludedDomains = null, nighttime = null, begintime = null, endtime = null, ambilight = null, ambilightrangeblurradius = null, ambilightrangespreadradius = null, ambilightfixcolor = null, ambilightvarcolor = null, ambilightcolorhex = null, ambilight4color = null, ambilight1colorhex = null, ambilight2colorhex = null, ambilight3colorhex = null, ambilight4colorhex = null, ecosavertime = null, ecosavertime = null, autoplayonly = null, autoplayDomains = null, interval = null, autowidthyoutube = null, customqualityyoutube = null, maxquality = null, atmosphereonly = null, atmosphereDomains = null, nighttheme = null, nightonly = null, nightDomains = null, nightenabletheme = null, autoplaydelay = null, autoplaydelaytime = null, atmosvivid = null, autoplaychecklistwhite = null, autoplaychecklistblack = null, nighthover = null, nmbegintime = null, nmendtime = null, nightmodechecklistblack = null, nightmodechecklistwhite = null, nmtopleft = null, nmtopright = null, nmbottomright = null, nmbottomleft = null, nmcustom = null, nmcustomx = null, nmcustomy = null, lampandnightmode = null, autostop = null, autostoponly = null, autostopDomains = null, autostopchecklistwhite = null, autostopchecklistblack = null, eyechecklistwhite = null, eyechecklistblack = null;

// Install on www.stefanvd.net
// Install on www.turnoffthelights.com
if (window.location.href.match(/http:\/\/(.*stefanvd\.net\/.*|www\.stefanvd\.net\/.*\/.*)/i)|| window.location.href.match(/http:\/\/(.*turnoffthelights\.com\/.*|www\.turnoffthelights\.com\/.*\/.*)/i)){
	if ($('turnoffthelights-maxthon-install-button')) {
		$('turnoffthelights-maxthon-install-button').style.display = 'none';
		$('turnoffthelights-maxthon-thanks-button').style.display = '';
	}
}
/* -------------------------------------------------- */

autoplay = mxstorage.getItem("autoplay");
eastereggs = mxstorage.getItem("eastereggs");
shortcutlight = mxstorage.getItem("shortcutlight");
eyea = mxstorage.getItem("eyea");
eyealist = mxstorage.getItem("eyealist");
contextmenus = mxstorage.getItem("contextmenus");
excludedDomains = mxstorage.getItem("excludedDomains");
nighttime = mxstorage.getItem("nighttime");;
begintime = mxstorage.getItem("begintime");
endtime = mxstorage.getItem("endtime");
ambilight = mxstorage.getItem("ambilight");
ambilightrangeblurradius = mxstorage.getItem("ambilightrangeblurradius");
ambilightrangespreadradius = mxstorage.getItem("ambilightrangespreadradius");
ambilightfixcolor = mxstorage.getItem("ambilightfixcolor");
ambilightvarcolor = mxstorage.getItem("ambilightvarcolor");
ambilightcolorhex = mxstorage.getItem("ambilightcolorhex");if(!ambilightcolorhex)ambilightcolorhex = '#47C2FF';
ambilight4color = mxstorage.getItem("ambilight4color");
ambilight1colorhex = mxstorage.getItem("ambilight1colorhex");if(!ambilight1colorhex)ambilight1colorhex = '#FF0000';
ambilight2colorhex = mxstorage.getItem("ambilight2colorhex");if(!ambilight2colorhex)ambilight2colorhex = '#FFEE00';
ambilight3colorhex = mxstorage.getItem("ambilight3colorhex");if(!ambilight3colorhex)ambilight3colorhex = '#00FF00';
ambilight4colorhex = mxstorage.getItem("ambilight4colorhex");if(!ambilight4colorhex)ambilight4colorhex = '#0000FF';
ecosaver = mxstorage.getItem("ecosaver");
ecosavertime = mxstorage.getItem("ecosavertime");
autoplayonly = mxstorage.getItem("autoplayonly");
autoplayDomains = mxstorage.getItem("autoplayDomains");
interval = mxstorage.getItem("interval");
maxquality = mxstorage.getItem("maxquality");
autowidthyoutube = mxstorage.getItem("autowidthyoutube");
customqualityyoutube = mxstorage.getItem("customqualityyoutube");
atmosphereonly = mxstorage.getItem("atmosphereonly");
atmosphereDomains = mxstorage.getItem("atmosphereDomains");
nighttheme = mxstorage.getItem("nighttheme");
nightonly = mxstorage.getItem("nightonly");
nightDomains = mxstorage.getItem("nightDomains");
nightenabletheme = mxstorage.getItem("nightenabletheme");
autoplaydelay = mxstorage.getItem("autoplaydelay");
autoplaydelaytime = mxstorage.getItem("autoplaydelaytime");
atmosvivid = mxstorage.getItem("atmosvivid");
autoplaychecklistwhite = mxstorage.getItem("autoplaychecklistwhite");
autoplaychecklistblack = mxstorage.getItem("autoplaychecklistblack");
nighthover = mxstorage.getItem("nighthover");
nightactivetime = mxstorage.getItem("nightactivetime");
nmbegintime = mxstorage.getItem("nmbegintime");
nmendtime = mxstorage.getItem("nmendtime");
nightmodechecklistblack = mxstorage.getItem("nightmodechecklistblack");
nightmodechecklistwhite = mxstorage.getItem("nightmodechecklistwhite");
nmtopleft = mxstorage.getItem("nmtopleft");
nmtopright = mxstorage.getItem("nmtopright");
nmbottomright = mxstorage.getItem("nmbottomright");
nmbottomleft = mxstorage.getItem("nmbottomleft");
nmcustom = mxstorage.getItem("nmcustom");
nmcustomx = mxstorage.getItem("nmcustomx");if(!nmcustomx)nmcustomx = '25px';
nmcustomy = mxstorage.getItem("nmcustomy");if(!nmcustomy)nmcustomy = '25px';
lampandnightmode = mxstorage.getItem("lampandnightmode");
autostop = mxstorage.getItem("autostop");
autostoponly = mxstorage.getItem("autostoponly");
autostopDomains = mxstorage.getItem("autostopDomains");
autostopchecklistwhite = mxstorage.getItem("autostopchecklistwhite");
autostopchecklistblack = mxstorage.getItem("autostopchecklistblack");
eyechecklistwhite = mxstorage.getItem("eyechecklistwhite");
eyechecklistblack = mxstorage.getItem("eyechecklistblack");

// observeDOM - dynamic check
var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if( MutationObserver ){
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer){
                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                    callback();
            });
            // have the observer observe foo for changes in children
            obs.observe( obj, { childList:true, subtree:true });
        }
        else if( eventListenerSupported ){
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    }
})();

// Shortcutlight
window.addEventListener('keydown', function(e) {
		if (e.which == 76 && e.ctrlKey && e.shiftKey && !e.altKey) {
		// Run code for CTRL+SHIFT+L
			// Shortcutlight
			if(shortcutlight == 'true'){
				browser.injectScriptFile("js/light.js");
			}
		}

		if (e.which == 119 && !e.ctrlKey && !e.shiftKey && e.altKey) {
		// Run code for Alt+F8
			// Shortcutlight
			if(shortcutlight == 'true'){
			if($('stefanvdlightareoff1')){
			//control opacity for all <div>
				var div = document.querySelectorAll('div.stefanvdlightareoff');
				for(var i = 0; i < div.length; i++ ){div[i].style.opacity = interval/100;}
			}
			}
		}
		
		if (e.which == 120 && !e.ctrlKey && !e.shiftKey && e.altKey) {
		// Run code for Alt+F9
			// Shortcutlight
			if(shortcutlight == 'true'){
			if($('stefanvdlightareoff1')){
				var F9saving = Math.round(($('stefanvdlightareoff1').style.opacity)*100);
				mxstorage.setItem('interval',F9saving);
			}
			}
		}
		
		if (e.which == 38 && !e.ctrlKey && !e.shiftKey && e.altKey) {
		// Run code for Alt+arrow up
			// Shortcutlight
			if(shortcutlight == 'true'){
			if($('stefanvdlightareoff1')){
				var shorcutcurrentopacity = $('stefanvdlightareoff1').style.opacity;
				shorcutcurrentopacity = (shorcutcurrentopacity*100 + 1)/100;
				// if higher then 1, stay 1
				if(shorcutcurrentopacity >= 1) { shorcutcurrentopacity = 1; }
				//control opacity for all <div>
				var div = document.querySelectorAll('div.stefanvdlightareoff');
				for(var i = 0; i < div.length; i++ ){div[i].style.opacity = shorcutcurrentopacity;}
			}
			}
		}

		if (e.which == 40 && !e.ctrlKey && !e.shiftKey && e.altKey) {
		// Run code for Alt+arrow down
			// Shortcutlight
			if(shortcutlight == 'true'){
			if($('stefanvdlightareoff1')){
				var shorcutcurrentopacity = $('stefanvdlightareoff1').style.opacity;
				shorcutcurrentopacity -= 0.01;
				// if zero
				if(shorcutcurrentopacity <= 0) {
					var stefanvdlightareoff1 = $('stefanvdlightareoff1');
					var stefanvdlightareoff2 = $('stefanvdlightareoff2');
					var stefanvdlightareoff3 = $('stefanvdlightareoff3');
					var stefanvdlightareoff4 = $('stefanvdlightareoff4');
					if(stefanvdlightareoff1) {document.body.removeChild(stefanvdlightareoff1);}
					if(stefanvdlightareoff2) {document.body.removeChild(stefanvdlightareoff2);}
					if(stefanvdlightareoff3) {document.body.removeChild(stefanvdlightareoff3);}
					if(stefanvdlightareoff4) {document.body.removeChild(stefanvdlightareoff4);}				
				} else {
				//control opacity for all <div>
				var div = document.querySelectorAll('div.stefanvdlightareoff');
				for(var i = 0; i < div.length; i++ ){div[i].style.opacity = shorcutcurrentopacity;}
				}
			}
			}
		}

		if (e.which == 106 && !e.ctrlKey && !e.shiftKey && e.altKey) {
		// Run code for Alt+*
			// Shortcutlight
			if(shortcutlight == 'true'){
			// all tabs lights off
            for (var i = 0; i < browser.tabs.length; i++) {
				browser.injectScriptFile("js/light.js",browser.tabs.getTab(i));
            }
			}
		}
		
		if (e.which == 121 && !e.ctrlKey && !e.shiftKey && e.altKey) {
		// Run code for Alt+F10
			// Shortcutlight
			if(shortcutlight == 'true'){
				var i18neyedivoff = "OFF";
				var i18neyedivon = "ON";
				var i18ntiteleye = "Eye Protection";
			
			// enable/disable the "Eye Protection" feature
			if(eyea == 'true'){var eyeoptionvalue = 'false';
			var stefanvdlightseye = $('stefanvdlightseye');
			if(stefanvdlightseye) {document.body.removeChild(stefanvdlightseye);} // remove it
			// create div on top page, and say this is OFF
				var neweyediv = document.createElement('div');
				neweyediv.setAttribute('id','stefanvdlightseye');
				neweyediv.textContent = "" + i18ntiteleye + " " + i18neyedivoff + "";
				document.body.appendChild(neweyediv);
				for (var i = 0; i < browser.tabs.length; i++) {
					browser.injectScriptFile("js/removelight.js",browser.tabs.getTab(i));
				}
				if(eyeoptionvalue == 'true'){mxstorage.setItem('eyea','true');mxstorage.setItem('eyen','false');}
				else{mxstorage.setItem('eyea','false');mxstorage.setItem('eyen','true');}
			}
			else{var eyeoptionvalue = 'true';	
			var stefanvdlightseye = $('stefanvdlightseye');
			if(stefanvdlightseye) {document.body.removeChild(stefanvdlightseye);} // remove it
			// create div on top page, and say this is ON
				var neweyediv = document.createElement('div');
				neweyediv.setAttribute('id','stefanvdlightseye');
				neweyediv.textContent = "" + i18ntiteleye + " " + i18neyedivon + "";
				document.body.appendChild(neweyediv);
				for (var i = 0; i < browser.tabs.length; i++) {
					browser.injectScriptFile("js/reloadlight.js",browser.tabs.getTab(i));
				}
				if(eyeoptionvalue == 'true'){mxstorage.setItem('eyea','true');mxstorage.setItem('eyen','false');}
				else{mxstorage.setItem('eyea','false');mxstorage.setItem('eyen','true');}
			}
			
			// remove div after 3s
			var myVar=setInterval(function(){
				var stefanvdlightseye = $('stefanvdlightseye');
				if(stefanvdlightseye) {document.body.removeChild(stefanvdlightseye);} // remove it
				clearInterval(myVar);
				document.location.reload(true); // reload current web page
			},3000);
			}
		}
		
}, false);
window.addEventListener('keypress', function(e) {
		if (e.which == 116) {
		gogotheater();
		}	
}, false);


if(autoplay == 'true'){
function autoplayfunction(){
var gracePeriod = 250, lastEvent = null, timeout = null;

			function trigger(data) {
				var that = this;
				if (gracePeriod > 0 && (lastEvent === null || String(lastEvent).split(":")[0] === String(data).split(":")[0])) {
					clearTimeout(timeout);
					timeout = setTimeout(function () {dispatch(data);}, gracePeriod);
				} else {
					dispatch(data);
				}
			}
			
			function dispatch(data) {
				if (data !== lastEvent) {
					lastEvent = data;
					data = String(data).split(":");
					switch (data[0]) {
						case "playerStateChange":
							//console.log("received playerStateChange", data[1]);
							if (data[1] === "2" || data[1] === "0" || data[1] === "-1") {
								shadesOff(this.player);
								if (data[1] === "0") {
									try {
									//playerReset(this.player);
									//playerStop(this.player);
									playerPause(this.player);
									} catch(e){};
								}
							} else {
								shadesOn(this.player);
							}
							break;
						default:
							//console.log("unknown event", data);
							break;
					}
				}
			}

	function playerPause(player) {
		if (player !== null) {
			if (typeof(player.pauseVideo) === "function") {
				player.pauseVideo();
			} else if (typeof(player.pause) === "function") {
				player.pause();
			}
		}
	}
	function playerReady(player) {
		this.player = player;
		//this.playerPause(player);
		//this.playerReset(player);
	}
	function playerReset(player) {
		if (player !== null) {
			if (typeof(player.seekTo) === "function") {
				player.seekTo(0, false);
			} else if (typeof(player.currentTime) !== "undefined") {
				player.currentTime = 0;
			}
		}
	}
	function playerStop(player) {
		if (player !== null) {
			if (typeof(player.stopVideo) === "function") {
				player.stopVideo();
			} else if (typeof(player.pause) === "function") {
				player.pause();
			}
		}
	}
	var godelay;
	function shadesOff(player) {
		if (player !== null) {
		var blackon = $('stefanvdlightareoff1');
			if(autoplaydelay == 'true'){
			var delaytime = autoplaydelaytime * 1000;
			godelay = window.setTimeout(function(){
				if (blackon) {browser.injectScriptFile("js/light.js");}
				else {} // do nothing
				window.clearTimeout(godelay);
			},delaytime);
			} else {
				if (blackon) {browser.injectScriptFile("js/light.js");}
				else {} // do nothing
			}
		}
	}
	function shadesOn(player) {
		if (player !== null) {
		var blackon = $('stefanvdlightareoff1');
			if (blackon) {} // do nothing
			else {browser.injectScriptFile("js/light.js");}		
			if(autoplaydelay == 'true'){
				try{window.clearTimeout(godelay);}catch(e){}
			}
		}
	}

		// player ready check
		var startautoplay = setInterval(function () {
		try {
			var youtubeplayer = $("movie_player") || null
			var htmlplayer = document.getElementsByTagName("video") || null;

			// check first for the HTML5 player
			// if nothing then try the flash for YouTube
			if (htmlplayer !== null) { // html5 video elements
				for(var j=0; j<htmlplayer.length; j++) {
	   				if (htmlplayer[j].pause) {playerReady(htmlplayer[j]);}
				}
			} else {
				if (youtubeplayer !== null) { // youtube video element
					if (youtubeplayer.pauseVideo) {playerReady(youtubeplayer);}
				} 
			}
		}
		catch(err) {} // I see nothing, that is good
		},1000); // 1000 refreshing it
		
var messagediv = $('ytCinemaMessage');
if(messagediv) {}
else {		
		// injected code messaging
		var message = document.createElement("div");
		var bt=document.getElementsByTagName("body");if(!bt.length)return;
		message.setAttribute("id", "ytCinemaMessage");
		message.style.display = "none";
		if(!bt.length)return;
		bt[0].appendChild(message);
		$(message.id).addEventListener(message.id, function (e) {
			var eventData = $(message.id).textContent;
			trigger(eventData);
  		}, false);
}
}

if(autoplayonly == 'true'){
var currenturl = location.protocol + '//' + location.host;
var blackrabbit = false;
if(typeof autoplayDomains == "string") {
	autoplayDomains = JSON.parse(autoplayDomains);
	var abuf = [];
	for(var domain in autoplayDomains)
		abuf.push(domain);
        abuf.sort();
		for(var i = 0; i < abuf.length; i++){
			if(autoplaychecklistwhite == 'true'){
				if(currenturl == abuf[i]){autoplayfunction();}
			}
			else if(autoplaychecklistblack == 'true'){
				if(currenturl == abuf[i]){blackrabbit=true;}
			}
		}
    }
	if(autoplaychecklistblack == 'true'){
		if(blackrabbit == false){autoplayfunction();blackrabbit = false;}
	}
} else {autoplayfunction();}

} // option autoplay on end

if(autostop == 'true'){

if(autostoponly == 'true'){
var currenturl = location.protocol + '//' + location.host;
var stoprabbit = false;
if(typeof autostopDomains == "string") {
	autostopDomains = JSON.parse(autostopDomains);
	var atbuf = [];
	for(var domain in autostopDomains)
		atbuf.push(domain);
        atbuf.sort();
		for(var i = 0; i < atbuf.length; i++){
			if(autostopchecklistwhite == 'true'){
				if(currenturl == atbuf[i]){autostopfunction();}
			}
			else if(autostopchecklistblack == 'true'){
				if(currenturl == atbuf[i]){stoprabbit=true;}
			}
		}
    }
	if(autoplaychecklistblack == 'true'){
		if(stoprabbit == false){autostopfunction();stoprabbit = false;}
	}
} else {autostopfunction();}

// Observe a specific DOM element:
if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
if(document.getElementById('movie_player')){ // from youtube website
observeDOM( document.getElementById('content') ,function(){
	autostopfunction();
});
}
}

function autostopvideo(video) {
	video.pause();
	video.oncanplay = null;
	video.onplay = null;
}
	
function autostopfunction(){
    var ytps = document.querySelector('.ytp-button-pause');
    if(ytps) { ytps.click();}
	else {
        var videos = document.querySelectorAll('video');
        for (var i=0; i<videos.length; i++) {
            video = videos[i];
            if (video && video.readyState == 4)
                autostopvideo(video);
            else {
                video.oncanplay = function() { autostopvideo(video); };
                video.onplay = function() { autostopvideo(video); };
            }
        }
    }
}

} // option autostop on end

// easter eggs
function gogotheater(){
if(eastereggs == 'true'){
// here the easter egg => movie theater
	var lightareoff = $('stefanvdlightareoff1');
	if (lightareoff != null) {
		// shortcut key T
		if ($('stefanvdtheater')){}
		else {
		window.alert("Do you like a real movie theater?");//chrome.i18n.getMessage("eastereggsquestion")
		var newimg = document.createElement('img');
		newimg.setAttribute('id','stefanvdtheater');
		newimg.src = 'mxaddon-pkg://{d330b49d-e2f4-460c-9dc3-362a260d7457}/images/theater.jpg';
		newimg.onclick = function() { document.body.removeChild(newimg); };
		document.body.appendChild(newimg);
		}
	}
} // end easter eggs
}

// eye protection
function eyeprotection(){
// normal use only enabled -> do nothing

// normal use -> only screensaver is enabled wirh a value for nighttime (true or false)
if((ecosaver == 'true') && (eyen == 'true')){chrome.extension.sendMessage({name: 'automatic'});}

if(eyea == 'true'){chrome.extension.sendMessage({name: 'automatic'});}
else if(eyealist == 'true'){
var currenturl = location.protocol + '//' + location.host;
var eyerabbit = false;
if(typeof excludedDomains == "string") {
	excludedDomains = JSON.parse(excludedDomains);
	var eyebuf = [];
	for(var domain in excludedDomains)
		eyebuf.push(domain);
        eyebuf.sort();
		for(var i = 0; i < eyebuf.length; i++){
			if(eyechecklistwhite == 'true'){
				if(currenturl == eyebuf[i]){browser.injectScriptFile("js/light.js");}
			}
			else if(eyechecklistblack == 'true'){
				if(currenturl == eyebuf[i]){eyerabbit=true;}
			}
		}
    }
	if(eyechecklistblack == 'true'){
		if(eyerabbit == false){browser.injectScriptFile("js/light.js");eyerabbit = false;}
	}
}
}

function eyedojob(){
if(ecosaver == 'true'){

document.onmousemove = (function() {
  var onmousestop = function() {
	var blackon = $('stefanvdlightareoff1');
	if(blackon){}else{eyeprotection();}
  }, thread;

  return function() {
    clearTimeout(thread);
    thread = setTimeout(onmousestop, ecosavertime * 1000);
  };
})();

} else {eyeprotection();}
}

// night time
if(nighttime == 'true'){ // yes night time
var now = new Date();var hours = now.getHours();var minutes = now.getMinutes();var gettime = hours + ":" + minutes;
var gettimesecond = gettime.split(":")[0] * 3600 + gettime.split(":")[1] * 60;

var time1 = begintime;var time2 = endtime;
var seconds1 = time1.split(":")[0] * 3600 + time1.split(":")[1] * 60;
var seconds2 = time2.split(":")[0] * 3600 + time2.split(":")[1] * 60;

// example
// if begintime set 10:00 but endtime is 18:00
// then do this
if(seconds1 <= seconds2){ // default for user
if((seconds1 <= gettimesecond) && (gettimesecond <= seconds2)){eyedojob();}
}
// example
else if (seconds1 > seconds2){
var getotherdaypart = 86400; // ... to 24:00 end
var getothernightpart = 0; // start from 0:00 to seconds2 (example 11:00) 

if((seconds1 <= gettimesecond) && (gettimesecond <= getotherdaypart)){ // 13 -> 24
eyedojob();
} else if((getothernightpart <= gettimesecond) && (gettimesecond <= seconds2)){ // 0 -> 11
eyedojob();
}
}

}
else{eyedojob();} // no night time

// context menu
if(contextmenus == 'true'){/*chrome.extension.sendMessage({name: 'contextmenuon'});*/}
else {/*chrome.extension.sendMessage({name: 'contextmenuoff'});*/}


// ambilight time
if(ambilight == 'true'){

if(atmosphereonly == 'true'){
var currenturl = location.protocol + '//' + location.host;
if(typeof atmosphereDomains == "string") {
	atmosphereDomains = JSON.parse(atmosphereDomains);
	var albuf = [];
	for(var domain in atmosphereDomains)
		albuf.push(domain);
        albuf.sort();
	for(var i = 0; i < albuf.length; i++)
		if(currenturl == albuf[i]){ambilightfunction();}
    }
} else {ambilightfunction();}

function ambilightfunction(){
		// yes show time
		var startambilight = setInterval(function () {
		try {
		var htmlplayer = document.getElementsByTagName("video") || null;
		var playerid = null, item = null;
		for(var j=0; j<htmlplayer.length; j++) {
			if (htmlplayer[j].play){playerid = htmlplayer[j]; item = j + 1; drawImage(playerid, item);}
		}
		
		// YouTube flash detect play
		if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
		var yttest = $("movie_player"); item = 1;
		
		/* temp fix watch7-video */
		var watch7video = $('watch7-video');
		if(watch7video)$('watch7-video').style.zIndex = 'auto';
		
		var playerapi = $('player-api');
		if(playerapi){$('player-api').style.overflow = 'visible';$('player-api').style.zIndex = 1001;$('player-api').style.visibility = 'visible';$('player-api').style.position = 'relative';}

		div = document.getElementsByTagName('div'); 
		for(var i = 0; i < div.length; i++ )
		{if(div[i].className == ('html5-video-player')) {div[i].style.overflow = 'visible';}}
		
		// fix 16 augustus 2013
		var playerapilegacy = $('player-api-legacy');
		if(playerapilegacy)$('player-api-legacy').style.overflow = 'visible';

		// fix 22 februari 2014
		var html5playermessages = $('html5-player-messages');
		if(html5playermessages)$('html5-player-messages').style.display = 'none';
		
		
		var youtubewatchplayershadow = $("watch-player"); // YouTube video page
		if(youtubewatchplayershadow){ youtubewatchplayershadow.style.overflow = "visible"; } // show the overflow out the video element
		var youtubevideoplayershadow = $("video-player"); // YouTube video page
		if(youtubevideoplayershadow){ youtubevideoplayershadow.style.overflow = "visible"; } // show the overflow out the video element
		var youtubewatchvideoshadow = $("watch-video"); // YouTube video page
		if(youtubewatchvideoshadow){ youtubewatchvideoshadow.style.overflow = "visible"; } // show the overflow out the video element	
		var youtubewindow = $("watch-player") || $("watch7-player") || $("player-api");
		if(youtubewindow){youtubewindow.style.zIndex = 1001;}
		var youtubemovieplayer = $("movie_player"); // YouTube video page
		if(youtubemovieplayer){ youtubemovieplayer.style.overflow = "visible"; youtubemovieplayer.style.zIndex = 1001; } // show the overflow out the video element
		
		if(yttest){
		if ($("movie_player").getPlayerState() == 1) {drawImage(youtubewindow, item);}
		else { drawImage(youtubewindow, item); }
		}
		}
		
		}
		catch(err) {} // i see nothing, that is good
		},20); // 20 refreshing it

// animation browser engine
window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback){
            window.setTimeout(callback, 1000 / 60);
        }
    );
}();

var countA = 0, countB = 0, countC = 0; // start from zero (blur spread) and size (left right top under) position

// ambilight draw code		
function drawImage(playerid, item){
try {
	if(playerid.paused || playerid.ended || $("movie_player").getPlayerState() == 0 || $("movie_player").getPlayerState() == 2){
	// animation go out
	countA=countA-1;if (countA <= 0){countA=0;}
	countB=countB-1;if (countB <= 0){countB=0;}
	countC=countC-1;if (countC <= 0){countC=0;}
	var textcountA = countA + "px";
	var textcountB = countB + "px";
	
var k = item;
	if(typeof k == "undefined") {
	return
	}
var canvas = $("totlCanvas" + k + "");
if(canvas){
	var context = canvas.getContext('2d');
	var imageData = context.getImageData(0, 0, 1, 1);
	var data = imageData.data;

	function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
	}

	var p1 = context.getImageData(0 , 0, 1, 1).data;
	var p2 = context.getImageData(1 , 0, 1, 1).data;
	var p3 = context.getImageData(2 , 0, 1, 1).data;
	var p4 = context.getImageData(3 , 0, 1, 1).data;
	var hex1 = "#" + ("000000" + rgbToHex(p1[0], p1[1], p1[2])).slice(-6);
	var hex2 = "#" + ("000000" + rgbToHex(p2[0], p2[1], p2[2])).slice(-6);
	var hex3 = "#" + ("000000" + rgbToHex(p3[0], p3[1], p3[2])).slice(-6);
	var hex4 = "#" + ("000000" + rgbToHex(p4[0], p4[1], p4[2])).slice(-6);
}
var downhex1 = hex1; if(!hex1){ hex1 = "#000000"; } // previous value
var downhex2 = hex2; if(!hex2){ hex2 = "#000000"; } // previous value
var downhex3 = hex3; if(!hex3){ hex3 = "#000000"; } // previous value
var downhex4 = hex4; if(!hex4){ hex4 = "#000000"; } // previous value
	// ----

	if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
		// var youtubewindow = $("watch-player") || $("watch7-player") || $("player-api");
		var youtubewindow = $("movie_player");
		if(ambilightvarcolor == 'true'){
			if(atmosvivid == 'true'){
				if($("stefanvdvivideffect")){
				var stefanvdvivideffect = $('stefanvdvivideffect');
				stefanvdvivideffect.parentNode.removeChild(stefanvdvivideffect);
				}
			} else {
				if(typeof downhex1 != "undefined" || typeof downhex2 != "undefined" || typeof downhex3 != "undefined" || typeof downhex4 != "undefined"){
					try{
					youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + downhex3 + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + downhex1 + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + downhex2 + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + downhex4 + "";
					}catch(e){}
				}
				else{
					youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + "";
				}
			}
		}
		else if(ambilightfixcolor == 'true'){
		youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + "";
		}
		else if(ambilight4color == 'true'){
		youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilight1colorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilight2colorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight3colorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight4colorhex + "";
		}
	}else{
		if(ambilightvarcolor == 'true'){
		playerid.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + downhex3 + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + downhex1 + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + downhex2 + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + downhex4 + ""; 
		}
		else if(ambilightfixcolor == 'true'){
		playerid.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + "";
		}
		else if(ambilight4color == 'true'){
		playerid.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilight1colorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilight2colorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight3colorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight4colorhex + "";
		}
	}
	
	return false;}
}catch(err) {}

try {
	var k = item;
	if(typeof k == "undefined") {
	return
	}
}catch(err) {}

    var totlshowtime = playerid;
	// var youtubewindow = $("watch-player") || $("watch7-player") || $("player-api");
	var youtubewindow = $("movie_player");
	var getblur = ambilightrangeblurradius + "px";
	var getspread = ambilightrangespreadradius + "px";
	
	// animate out and in
	if (countA < ambilightrangespreadradius){countA=countA+1;}
	if (countB < ambilightrangeblurradius){countB=countB+1;}
	if (countC < 20){countC=countC+.5;}
	var textcountA = countA + "px";
	var textcountB = countB + "px";
	
	if(ambilightvarcolor == 'true'){
	// Cross detection
	// if url is the same as the video source
	// then posible to play real ambilight
	var cross = null;
	
	// check for the current page URL
	var pageurl = location.protocol + '//' + location.host; // http://www.stefanvd.net
	var pageurllengt = pageurl.length; // lengte url

	function subDomain(url) {
	// IF THERE, REMOVE WHITE SPACE FROM BOTH ENDS
	url = url.replace(new RegExp(/^\s+/),""); // START
	url = url.replace(new RegExp(/\s+$/),""); // END
	// IF FOUND, CONVERT BACK SLASHES TO FORWARD SLASHES
	url = url.replace(new RegExp(/\\/g),"/");
	// IF THERE, REMOVES 'http://', 'https://' or 'ftp://' FROM THE START
	url = url.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i),"");
	// IF THERE, REMOVES 'www.' FROM THE START OF THE STRING
	url = url.replace(new RegExp(/^www\./i),"");
	// REMOVE COMPLETE STRING FROM FIRST FORWARD SLASH ON
	url = url.replace(new RegExp(/\/(.*)/),"");
	// REMOVES '.??.??' OR '.???.??' FROM END - e.g. '.CO.UK', '.COM.AU'
	if (url.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
		url = url.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i),"");
	// REMOVES '.??' or '.???' or '.????' FROM END - e.g. '.US', '.COM', '.INFO'
	} else if (url.match(new RegExp(/\.[a-z]{2,4}$/i))) {
		url = url.replace(new RegExp(/\.[a-z]{2,4}$/i),"");
	} 
	// CHECK TO SEE IF THERE IS A DOT '.' LEFT IN THE STRING
	var subDomain = (url.match(new RegExp(/\./g))) ? true : false;

	return(subDomain);
	}
	var yesornosubdomain = subDomain(pageurl);

	if (totlshowtime != typeof HTMLVideoElement !== "undefined" && totlshowtime instanceof HTMLVideoElement) {
		var insideitem = totlshowtime.src;
		var insideitemlengt = 0;
		if(insideitem){	var insideitemlengt = insideitem.length; } // lengte url
	} else { var insideitemlengt = "undefined"; }

	// mission controll
	if((insideitemlengt == 0) && (yesornosubdomain == false)){
		// check for video -> source URL
		var items = totlshowtime.getElementsByTagName("source");
		for(var i= 0; i < 1; i++){ // 1 source needed
			cross = items[i].getAttribute('src');
		}
		if(cross.substring(0, pageurllengt) == pageurl) {runreal();}
		else if(cross.substring(0, 2) == './') {runreal();}
		else if(cross.substring(0, 3) == '../') {runreal();}
		else if((cross.substring(0, 4) != 'http') && (cross.substring(0, 5) != 'https') && (cross.substring(0, 3) != 'ftp')) {runreal();}
		else {rundefault();}
	} else if ((insideitemlengt > 0) && (yesornosubdomain == false)) {
		if(insideitem.substring(0, pageurllengt) == pageurl) {runreal();}
		else if(insideitem.substring(0, 2) == './') {runreal();}
		else if(insideitem.substring(0, 3) == '../') {runreal();}
		else if((insideitem.substring(0, 4) != 'http') && (insideitem.substring(0, 5) != 'https') && (insideitem.substring(0, 3) != 'ftp')) {runreal();}
		else {rundefault();}
	} else {rundefault();}

function runreal(){
    var sourceWidth = totlshowtime.videoWidth;
    var sourceHeight = totlshowtime.videoHeight;
	
	var totlcheckcanvas = $("totlCanvas" + k + "");
	if(totlcheckcanvas){} else{
 	var totlnewcanvas = document.createElement("canvas");
	totlnewcanvas.setAttribute('id','totlCanvas' + k + '');
	totlnewcanvas.width = "4";
	totlnewcanvas.height = "1";
	totlnewcanvas.style.display = "none";
	document.body.appendChild(totlnewcanvas);
	}
	
var canvas = $("totlCanvas" + k + "");
var context = canvas.getContext('2d');

var colorlamp1X = (sourceWidth * 50) /100; // up midden
var colorlamp1Y = (sourceHeight * 95) /100;
var colorlamp2X = (sourceWidth * 95) /100; // right midden
var colorlamp2Y = (sourceHeight * 50) /100;
var colorlamp3X = (sourceWidth * 50) /100; // down midden
var colorlamp3Y = (sourceHeight * 5) /100;
var colorlamp4X = (sourceWidth * 5) /100; // left midden
var colorlamp4Y = (sourceHeight * 50) /100;

	context.drawImage(totlshowtime, colorlamp1X, colorlamp1Y, 1, 1, 0, 0, 1, 1);
	context.drawImage(totlshowtime, colorlamp2X, colorlamp2Y, 1, 1, 1, 0, 1, 1);
	context.drawImage(totlshowtime, colorlamp3X, colorlamp3Y, 1, 1, 2, 0, 1, 1);
	context.drawImage(totlshowtime, colorlamp4X, colorlamp4Y, 1, 1, 3, 0, 1, 1);

try{
	var imageData = context.getImageData(0, 0, 1, 1);
	var data = imageData.data;

	function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
	}

	var p1 = context.getImageData(0 , 0, 1, 1).data;
	var p2 = context.getImageData(1 , 0, 1, 1).data;
	var p3 = context.getImageData(2 , 0, 1, 1).data;
	var p4 = context.getImageData(3 , 0, 1, 1).data;
	var hex1 = "#" + ("000000" + rgbToHex(p1[0], p1[1], p1[2])).slice(-6);
	var hex2 = "#" + ("000000" + rgbToHex(p2[0], p2[1], p2[2])).slice(-6);
	var hex3 = "#" + ("000000" + rgbToHex(p3[0], p3[1], p3[2])).slice(-6);
	var hex4 = "#" + ("000000" + rgbToHex(p4[0], p4[1], p4[2])).slice(-6);

	if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
		if(atmosvivid == 'true'){
			var calcvividscale = 1+(ambilightrangespreadradius/100);
			var html5videoplayer = document.querySelector('video');
				if($("stefanvdvivideffect")){
				var stefanvdvivideffect = $('stefanvdvivideffect');
					if((stefanvdvivideffect.style.height != totlshowtime.style.height) && (totlshowtime.style.height != "")){
					stefanvdvivideffect.style.height = html5videoplayer.style.height;
					stefanvdvivideffect.style.width = html5videoplayer.style.width;
					}
				var vividctx = stefanvdvivideffect.getContext('2d');
				vividctx.drawImage(totlshowtime, 0, 0,totlshowtime.offsetWidth*1,totlshowtime.offsetHeight*1);
				} else{
				var newvivid = document.createElement("canvas");
				newvivid.setAttribute('id','stefanvdvivideffect');
				newvivid.style.webkitTransform = "scale("+calcvividscale+")";
				newvivid.style.webkitFilter = "blur("+ambilightrangeblurradius+"px)";
				newvivid.setAttribute('width',totlshowtime.offsetWidth);
				newvivid.setAttribute('height',totlshowtime.offsetHeight);
				newvivid.style.opacity = .88;
				newvivid.style.position = "absolute";
				newvivid.style.top = "0px";
				newvivid.style.left = "0px";
				$("player-api").appendChild(newvivid);
				}
		} else {
		youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + hex3 + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + hex1 + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + hex2 + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + hex4 + "";
		}
	}
	else { totlshowtime.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + hex3 + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + hex1 + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + hex2 + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + hex4 + ""; }

}catch(e) {rundefault();}
}

		// if catch error in URL
		function rundefault(){
		if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){ youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ""; }
		else { totlshowtime.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ""; }
		}
	} else if(ambilightfixcolor == 'true'){
		if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){ youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ""; }
		else { totlshowtime.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ""; }
	} else if (ambilight4color == 'true'){
		if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){ youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilight1colorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilight2colorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight3colorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight4colorhex + ""; }
		else { totlshowtime.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilight1colorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilight2colorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight3colorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight4colorhex + ""; }
	}
	
	window.requestAnimFrame(drawImage);	
}
}

} // end ambilight

var isitdark = false;
// Observe a specific DOM element:
if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
if(document.getElementById('content')){ // from youtube website
observeDOM( document.getElementById('content') ,function(){
		if(isitdark == true){
			sun = true; gogonightmode(); // make it dark
			
			var i, frames;
			frames = document.getElementsByTagName("iframe");
			for (i = 0; i < frames.length; ++i)
			{
				frames[i].onload = function(){
					sun = true; gogonightmode(); // make it dark
				}
			}
		}
});
}
}

// Night Theme feature
var sun = true;
var oldbackgroundImage = document.body.style.backgroundImage
var oldbackgroundColor = document.body.style.backgroundColor;
var oldbackground = document.body.style.background;

// gogo night mode
function gogonightmode(){
    if (sun == true) {
        sun = false; isitdark = true;
        if ($("stefanvdnighti")) {
            $("stefanvdnighti").setAttribute("id", "stefanvdnightin"); // change day background button
        }
		if ($("stefanvdnightthemecheckbox")){$("stefanvdnightthemecheckbox").checked = true;}
		
        document.body.style.backgroundColor = "black";
        document.body.style.background = "black";

		if (window.location.href.match("^http(|s)://([a-z.]*).google.[a-z.]*/")){
		var gb = document.querySelectorAll('div.gb_gb');
		for(var i = 0; i < gb.length; i++ ){gb[i].style.background = "black";} //#f1f1f1
		var gbhb = document.querySelectorAll('div.gb_hb');
		for(var i = 0; i < gbhb.length; i++ ){gbhb[i].style.background = "black";} //#f1f1f1
		var gbib = document.querySelectorAll('div.gb_ib');
		for(var i = 0; i < gbib.length; i++ ){gbib[i].style.background = "black";} //#f1f1f1
		var fbar = document.querySelectorAll('div.fbar');
		for(var i = 0; i < fbar.length; i++ ){fbar[i].style.background = "black";} //#f2f2f2
		if($("appbar")){$("appbar").style.background = "black";} //#fff
		if($("hdtb")){$("hdtb").style.background = "black";} //#fff
		if($("hdtbSum")){$("hdtbSum").style.background = "black";} //#fff
		if($("hdtbMenus")){$("hdtbMenus").style.background = "black";} //#fff
		var gbvb = document.querySelectorAll('div.gb_Vb');
		for(var i = 0; i < gbvb.length; i++ ){gbvb[i].style.background = "black";} //#f1f1f1
		if($("fbar")){$("fbar").style.background = "black";} //#f2f2f2
		}
		else if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
		if($("logo")){$("logo").style.cssText = "-webkit-filter: grayscale(100%) brightness(100%) contrast(100%);";}
		if($("watch7-action-buttons")){$("watch7-action-buttons").style.cssText = "-webkit-filter: grayscale(0%) brightness(100%) contrast(0%);";}
		if($("watch7-content")){$("watch7-content").style.background = "black";} //#fff
		if($("yt-masthead-container")){$("yt-masthead-container").style.background = "black";} //#f1f1f1
		if($("watch7-sidebar")){$("watch7-sidebar").style.background = "black";} //#fff
		if($("watch7-headline")){$("watch7-headline").style.background = "black";} //#fff
		if($("watch7-user-header")){$("watch7-user-header").style.background = "black";} //#fff
		if($("footer-container")){$("footer-container").style.background = "black";} //#f2f2f2
		if($("c4-shelves-container")){$("c4-shelves-container").style.background = "black";} //#fff
		if($("watch7-creator-bar")){$("watch7-creator-bar").style.background = "black";} //#fff
		if($("non-appbar-vm-video-actions-bar")){$("non-appbar-vm-video-actions-bar").style.background = "black";} //#fff
		if($("masthead-search-terms")){$("masthead-search-terms").style.background = "black";} //#fff
		if($("watch7-action-panel-footer")){$("watch7-action-panel-footer").style.background = "black";} //#fff
		var ytbranddiv = document.querySelectorAll('div.branded-page-v2-primary-col');
		for(var i = 0; i < ytbranddiv.length; i++ ){ytbranddiv[i].style.background = "black";} //#fff
		var ytheaddiv = document.querySelectorAll('div.secondary-header-contents');
		for(var i = 0; i < ytheaddiv.length; i++ ){ytheaddiv[i].style.background = "black";} //#fff
		var ytmastersearchtermdiv = document.querySelectorAll('div.masthead-search-terms-border');
		for(var i = 0; i < ytmastersearchtermdiv.length; i++ ){ytmastersearchtermdiv[i].style.border = "1px solid #414141";} //#414141
		var ytuixbuttondiv = document.querySelectorAll('button.yt-uix-button-default');
		for(var i = 0; i < ytuixbuttondiv.length; i++ ){ytuixbuttondiv[i].style.background = "#333333";ytuixbuttondiv[i].style.color = "#fff";ytuixbuttondiv[i].style.borderColor = "#5E5E5E";}
		var ytuixbuttondiv = document.querySelectorAll('a.yt-uix-button-default');
		for(var i = 0; i < ytuixbuttondiv.length; i++ ){ytuixbuttondiv[i].style.background = "#333333";ytuixbuttondiv[i].style.color = "#fff";ytuixbuttondiv[i].style.borderColor = "#5E5E5E";}
		var ytuploadlidiv = document.querySelectorAll('li.vm-video-item');
		for(var i = 0; i < ytuploadlidiv.length; i++ ){ytuploadlidiv[i].style.background = "black";}
		var ytuploadmetrixdiv = document.querySelectorAll('div.vm-video-metrics');
		for(var i = 0; i < ytuploadmetrixdiv.length; i++ ){ytuploadmetrixdiv[i].style.backgroundImage = "linear-gradient(to right,#000000 0,#000 11px)";}
		var ytmetadatadiv = document.querySelectorAll('button.metadata-inline');
		for(var i = 0; i < ytmetadatadiv.length; i++ ){ytmetadatadiv[i].style.background = "black";}
		if($("watch7-container")){$("watch7-container").style.background = "black";} //#fff
		if($("masthead-appbar")){$("masthead-appbar").style.background = "black";} //#fff
		if($("gh-activityfeed")){$("gh-activityfeed").style.background = "black";} //#fff
		if($("appbar-guide-menu")){$("appbar-guide-menu").style.background = "black";} //#fff
		if($("gh-overviewtab")){$("gh-overviewtab").style.background = "black";} //#fff
		if($("c4-primary-header-contents")){$("c4-primary-header-contents").style.background = "black";} //#fff
		if($("channel-subheader")){$("channel-subheader").style.background = "black";} //#fff
		if($("eow-title")){$("eow-title").style.color = "#7C7C7C";}
		var ytcard = document.querySelectorAll('.yt-card');
		for(var i = 0; i < ytcard.length; i++ ){ytcard[i].style.background = "black";}
		// update 11 may 2014
		var ytguideitem = document.querySelectorAll('a.guide-item');
		for(var i = 0; i < ytguideitem.length; i++ ){ytguideitem[i].style.color = "#999";}
		var ytuiellipsis = document.querySelectorAll('a.yt-ui-ellipsis');
		for(var i = 0; i < ytuiellipsis.length; i++ ){ytuiellipsis[i].style.background = "black";}
		var ytnbc = document.querySelectorAll('div.nbc');
		for(var i = 0; i < ytnbc.length; i++ ){ytnbc[i].style.backgroundColor = "black";}
		if ($("watch-description-clip")) { $("watch-description-clip").style.color = "#999"; }
		if ($("masthead-expanded-container")) { $("masthead-expanded-container").style.background = "black"; }
		// update 12 june 2014
		var ytselectedguideitem = document.querySelectorAll('a.guide-item-selected');
		for(var i = 0; i < ytselectedguideitem.length; i++ ){ytselectedguideitem[i].style.color = "#999";}
		if ($("masthead-search-term")) { $("masthead-search-term").style.color = "white"; }
		var ytuiellipsisdv = document.querySelectorAll('div.yt-ui-ellipsis');
		for(var i = 0; i < ytuiellipsisdv.length; i++ ){ytuiellipsisdv[i].style.background = "black";}
		var ytgssbmtable = document.querySelectorAll('table.gssb_m');
		for(var i = 0; i < ytgssbmtable.length; i++ ){ytgssbmtable[i].style.background = "black";ytgssbmtable[i].style.color = "white";}
		var ytdivytuixexpander = document.querySelectorAll('div.yt-uix-expander-ellipsis');
		for(var i = 0; i < ytdivytuixexpander.length; i++ ){ytdivytuixexpander[i].style.background = "black";}

		browser.injectScriptFile("js/youtubedark.js");
		}
//-----
    } else {
        sun = true; isitdark = false;
        if ($("stefanvdnightin")) {
            $("stefanvdnightin").setAttribute("id", "stefanvdnighti"); // change night background button
        }
		if ($("stefanvdnightthemecheckbox")){$("stefanvdnightthemecheckbox").checked = false;}
        document.body.style.backgroundImage = oldbackgroundImage;
        document.body.style.backgroundColor = oldbackgroundColor;
        document.body.style.backgroundColor = oldbackground;

        if (window.location.href.match("^http(|s)://([a-z.]*).google.[a-z.]*/")) {
            var gb = document.querySelectorAll('div.gb_gb');
            for (var i = 0; i < gb.length; i++) { gb[i].style.background = "#f1f1f1"; } //#f1f1f1
            var gbhb = document.querySelectorAll('div.gb_hb');
            for (var i = 0; i < gbhb.length; i++) { gbhb[i].style.background = "#f1f1f1"; } //#f1f1f1
            var gbib = document.querySelectorAll('div.gb_ib');
            for (var i = 0; i < gbib.length; i++) { gbib[i].style.background = "#f1f1f1"; } //#f1f1f1
            var fbar = document.querySelectorAll('div.fbar');
            for (var i = 0; i < fbar.length; i++) { fbar[i].style.background = "#f2f2f2"; } //#f2f2f2
            if ($("appbar")) { $("appbar").style.background = "#fff"; } //#fff
            if ($("hdtb")) { $("hdtb").style.background = "#fff"; } //#fff
            if ($("hdtbSum")) { $("hdtbSum").style.background = "#fff"; } //#fff
            if ($("hdtbMenus")) { $("hdtbMenus").style.background = "#fff"; } //#fff
			var gbvb = document.querySelectorAll('div.gb_Vb');
			for(var i = 0; i < gbvb.length; i++ ){gbvb[i].style.background = "#f1f1f1";} //#f1f1f1
			if($("fbar")){$("fbar").style.background = "#f2f2f2";} //#f2f2f2
        }
        else if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)) {
            if ($("logo")) { $("logo").style.cssText = ""; }
            if ($("watch7-action-buttons")) { $("watch7-action-buttons").style.cssText = ""; }
            if ($("watch7-content")) { $("watch7-content").style.background = "#fff"; } //#fff
            if ($("yt-masthead-container")) { $("yt-masthead-container").style.background = "#f1f1f1"; } //#f1f1f1
            if ($("watch7-sidebar")) { $("watch7-sidebar").style.background = "#fff"; } //#fff
            if ($("watch7-headline")) { $("watch7-headline").style.background = "#fff"; } //#fff
            if ($("watch7-user-header")) { $("watch7-user-header").style.background = "#fff"; } //#fff
            if ($("footer-container")) { $("footer-container").style.background = "#f2f2f2"; } //#f2f2f2
            if ($("c4-shelves-container")) { $("c4-shelves-container").style.background = "#fff"; } //#fff
            if ($("watch7-creator-bar")) { $("watch7-creator-bar").style.background = "#fff"; } //#fff
            if ($("masthead-search-terms")) { $("masthead-search-terms").style.background = "#fff"; } //#fff
            if ($("non-appbar-vm-video-actions-bar")) { $("non-appbar-vm-video-actions-bar").style.background = "#fff"; } //#fff
            if ($("watch7-action-panel-footer")) { $("watch7-action-panel-footer").style.background = "#fff"; } //#fff
            var ytbranddiv = document.querySelectorAll('div.branded-page-v2-primary-col');
            for (var i = 0; i < ytbranddiv.length; i++) { ytbranddiv[i].style.background = "#fff"; } //#fff
            var ytheaddiv = document.querySelectorAll('div.secondary-header-contents');
            for (var i = 0; i < ytheaddiv.length; i++) { ytheaddiv[i].style.background = "#fff"; } //#fff
            var ytmastersearchtermdiv = document.querySelectorAll('div.masthead-search-terms-border');
            for (var i = 0; i < ytmastersearchtermdiv.length; i++) { ytmastersearchtermdiv[i].style.border = "1px solid #b9b9b9"; } //#b9b9b9
            var ytuixbuttondiv = document.querySelectorAll('button.yt-uix-button-default');
            for (var i = 0; i < ytuixbuttondiv.length; i++) { ytuixbuttondiv[i].style.background = "#f8f8f8"; ytuixbuttondiv[i].style.color = "#333"; ytuixbuttondiv[i].style.borderColor = "#d3d3d3"; }
            var ytuixbuttondiv = document.querySelectorAll('a.yt-uix-button-default');
            for (var i = 0; i < ytuixbuttondiv.length; i++) { ytuixbuttondiv[i].style.background = "#f8f8f8"; ytuixbuttondiv[i].style.color = "#333"; ytuixbuttondiv[i].style.borderColor = "#d3d3d3"; }
            var ytuploadlidiv = document.querySelectorAll('li.vm-video-item');
            for (var i = 0; i < ytuploadlidiv.length; i++) { ytuploadlidiv[i].style.background = "#fff"; }
            var ytuploadmetrixdiv = document.querySelectorAll('div.vm-video-metrics');
            for (var i = 0; i < ytuploadmetrixdiv.length; i++) { ytuploadmetrixdiv[i].style.backgroundImage = "linear-gradient(to right,#f9f9f9 0,#FFF 11px)"; }
            var ytmetadatadiv = document.querySelectorAll('button.metadata-inline');
            for (var i = 0; i < ytmetadatadiv.length; i++) { ytmetadatadiv[i].style.background = "#fff"; }
            if ($("watch7-container")) { $("watch7-container").style.background = "#fff"; } //#fff
            if ($("masthead-appbar")) { $("masthead-appbar").style.background = "#fff"; } //#fff
            if ($("gh-activityfeed")) { $("gh-activityfeed").style.background = "#fff"; } //#fff
            if ($("appbar-guide-menu")) { $("appbar-guide-menu").style.background = "#fff"; } //#fff
            if ($("gh-overviewtab")) { $("gh-overviewtab").style.background = "#fff"; } //#fff
            if ($("c4-primary-header-contents")) { $("c4-primary-header-contents").style.background = "#fff"; } //#fff
            if ($("channel-subheader")) { $("channel-subheader").style.background = "#fff"; } //#fff
            if ($("eow-title")) { $("eow-title").style.color = "black"; }
            var ytcard = document.querySelectorAll('.yt-card');
            for (var i = 0; i < ytcard.length; i++) { ytcard[i].style.background = "#fff"; }
			// update 11 may 2014
			var ytguideitem = document.querySelectorAll('a.guide-item');
			for(var i = 0; i < ytguideitem.length; i++ ){ytguideitem[i].style.color = "#222";}
			var ytuiellipsis = document.querySelectorAll('a.yt-ui-ellipsis');
			for(var i = 0; i < ytuiellipsis.length; i++ ){ytuiellipsis[i].style.background = "white";}
			var ytnbc = document.querySelectorAll('div.nbc');
			for(var i = 0; i < ytnbc.length; i++ ){ytnbc[i].style.backgroundColor = "white";}
			if ($("watch-description-clip")) { $("watch-description-clip").style.color = "#333"; }
			if ($("masthead-expanded-container")) { $("masthead-expanded-container").style.background = "white"; }
			// update 12 june 2014
			var ytselectedguideitem = document.querySelectorAll('a.guide-item-selected');
			for(var i = 0; i < ytselectedguideitem.length; i++ ){ytselectedguideitem[i].style.color = "white";}
			if ($("masthead-search-term")) { $("masthead-search-term").style.color = "black"; }
			var ytuiellipsisdv = document.querySelectorAll('div.yt-ui-ellipsis');
			for(var i = 0; i < ytuiellipsisdv.length; i++ ){ytuiellipsisdv[i].style.background = "white";}
			var ytgssbmtable = document.querySelectorAll('table.gssb_m');
			for(var i = 0; i < ytgssbmtable.length; i++ ){ytgssbmtable[i].style.background = "white";ytgssbmtable[i].style.color = "black";}
			var ytdivytuixexpander = document.querySelectorAll('div.yt-uix-expander-ellipsis');
			for(var i = 0; i < ytdivytuixexpander.length; i++ ){ytdivytuixexpander[i].style.background = "white";}
		
			browser.injectScriptFile("js/youtubewhite.js");
		}
	}
}
	   
function nightfunction(){
	if($('stefanvdnighttheme')){}else{
		var newnight = document.createElement('label');
		newnight.setAttribute('id','stefanvdnighttheme');
		document.body.appendChild(newnight);
		if(nighthover == 'true'){
			newnight.style.opacity = '.2';
			var item = document.getElementById("stefanvdnighttheme");
			item.addEventListener("mouseover", function(){item.style.opacity = "1"}, false);
			item.addEventListener("mouseout", function(){item.style.opacity = ".2"}, false);
		}
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
		if(nmcustom == 'true'){newnight.style.left = nmcustomx;newnight.style.bottom = nmcustomy;}
		else if(nmtopleft == 'true'){newnight.style.left = "25px";newnight.style.top = "25px";}
		else if(nmtopright == 'true'){newnight.style.right = "25px";newnight.style.top = "25px";}
		else if(nmbottomright == 'true'){newnight.style.right = "25px";newnight.style.bottom = "25px";}
		else if(nmbottomleft == 'true'){newnight.style.left = "25px";newnight.style.bottom = "25px";}
		
		var newnightinput = document.createElement('input');
		newnightinput.setAttribute('type','checkbox');
		newnightinput.setAttribute('id','stefanvdnightthemecheckbox');
		if (nightenabletheme == 'true'){ newnightinput.setAttribute('checked','true'); }
		newnight.appendChild(newnightinput);

		var newnightspan = document.createElement('span');
		newnightspan.setAttribute('id','stefanvdnightthemeslider');
		newnight.appendChild(newnightspan);

		var newnightspansun = document.createElement('span');
		newnightspansun.setAttribute('class','sun');
		newnightspan.appendChild(newnightspansun);
		var newnightspansunspan = document.createElement('span');
		newnightspansun.appendChild(newnightspansunspan);
	
		var newnightspannight = document.createElement('span');
		newnightspannight.setAttribute('class','night');
		newnightspan.appendChild(newnightspannight);
		var newnightspannightspan = document.createElement('span');
		newnightspannight.appendChild(newnightspannightspan);

		var newnightspanblock = document.createElement('span');
		newnightspanblock.setAttribute('id','sliderblock');
		newnightspan.appendChild(newnightspanblock);
		var newnightspanblockspan = document.createElement('span');
		newnightspanblockspan.setAttribute('id','stefanvdnighti');
		newnightspanblockspan.setAttribute('class','turnoffthelightsdrag');
		newnightspanblockspan.textContent = '≡';
		newnightspanblock.appendChild(newnightspanblockspan);

		$("stefanvdnighttheme").addEventListener('change', function(e) { gogonightmode(); }, false);
	}
}

// tricker the switch
function showswitchtricker(){
		if(nightactivetime == 'true'){
			var now = new Date();var hours = now.getHours();var minutes = now.getMinutes();var gettime = hours + ":" + minutes;
			var gettimesecond = gettime.split(":")[0] * 3600 + gettime.split(":")[1] * 60;

			var time1 = nmbegintime;var time2 = nmendtime;
			var seconds1 = time1.split(":")[0] * 3600 + time1.split(":")[1] * 60;
			var seconds2 = time2.split(":")[0] * 3600 + time2.split(":")[1] * 60;

			// example
			// if begintime set 10:00 but endtime is 18:00
			// then do this
			if(seconds1 <= seconds2){ // default for user
			if((seconds1 <= gettimesecond) && (gettimesecond <= seconds2)){nightfunction();}
			}
			// example
			else if (seconds1 > seconds2){
			var getotherdaypart = 86400; // ... to 24:00 end
			var getothernightpart = 0; // start from 0:00 to seconds2 (example 11:00) 

			if((seconds1 <= gettimesecond) && (gettimesecond <= getotherdaypart)){ // 13 -> 24
			nightfunction();
			} else if((getothernightpart <= gettimesecond) && (gettimesecond <= seconds2)){ // 0 -> 11
			nightfunction();
			}
			}
		}
		else{
			nightfunction();
		}
}

// show all options the night switch CSS
// but not the "only" websites
if (nighttheme == 'true'){
	if(nightonly != 'true'){
		showswitchtricker()
	}
}

function timergonighttricker(){
	if(nightactivetime == 'true'){
		var now = new Date();var hours = now.getHours();var minutes = now.getMinutes();var gettime = hours + ":" + minutes;
		var gettimesecond = gettime.split(":")[0] * 3600 + gettime.split(":")[1] * 60;
		
		var time1 = nmbegintime;var time2 = nmendtime;
		var seconds1 = time1.split(":")[0] * 3600 + time1.split(":")[1] * 60;
		var seconds2 = time2.split(":")[0] * 3600 + time2.split(":")[1] * 60;

		// example
		// if begintime set 10:00 but endtime is 18:00
		// then do this
		if(seconds1 <= seconds2){ // default for user
		if((seconds1 <= gettimesecond) && (gettimesecond <= seconds2)){gogonightmode();}
		}
		// example
		else if (seconds1 > seconds2){
		var getotherdaypart = 86400; // ... to 24:00 end
		var getothernightpart = 0; // start from 0:00 to seconds2 (example 11:00) 

		if((seconds1 <= gettimesecond) && (gettimesecond <= getotherdaypart)){ // 13 -> 24
			gogonightmode();
		} else if((getothernightpart <= gettimesecond) && (gettimesecond <= seconds2)){ // 0 -> 11
			gogonightmode();
		}
	}
	}
	else{
	gogonightmode();
	}
}

if(nightonly == 'true'){
	var currenturl = location.protocol + '//' + location.host;
	var nightrabbit = false;
	if(typeof nightDomains == "string") {
		nightDomains = JSON.parse(nightDomains);
		var nbuf = [];
		for(var domain in nightDomains)
			nbuf.push(domain);
			nbuf.sort();
		for(var i = 0; i < nbuf.length; i++){
			if(nightmodechecklistwhite == 'true'){
				if(currenturl == nbuf[i]){
					if (nighttheme == 'true'){ showswitchtricker(); }
					if (nightenabletheme == 'true'){
						timergonighttricker();
					}
				}
			}
			else if(nightmodechecklistblack == 'true'){
				if(currenturl == nbuf[i]){nightrabbit=true;}
			}
		}
	}
	if(nightmodechecklistblack == 'true'){
		if(nightrabbit == false){showswitchtricker();timergonighttricker();nightrabbit = false;}
	}
}else{
	if (nightenabletheme == 'true'){
		timergonighttricker();
	} // auto the night mode
}

// draggable object for the Night Mode feature switch
if($('stefanvdnighttheme')){
if(nmcustom == 'true'){
var dragobject = { z: 0, x: 0, y: 0, offsetx : null, offsety : null, targetobj : null, dragapproved : 0,
initialize:function(){
document.onmousedown = this.drag;
document.onmouseup = function(){ this.dragapproved = 0;
// save the x and y value
if(nmcustom == 'true'){
var getnmcx = $('stefanvdnighttheme').style.left;
var getnmcy = $('stefanvdnighttheme').style.bottom;
chrome.extension.sendMessage({'name' : 'nmcustomx', 'value' : getnmcx});
chrome.extension.sendMessage({'name' : 'nmcustomy', 'value' : getnmcy});
}
}
},
drag:function(e){
var evtobj = window.event? window.event : e;
this.targetobj = window.event? event.srcElement : e.target;
if (this.targetobj.className == "turnoffthelightsdrag"){
this.dragapproved = 1;
$('stefanvdnighttheme').offsetx = parseInt($('stefanvdnighttheme').style.left);
$('stefanvdnighttheme').offsety = parseInt($('stefanvdnighttheme').style.bottom);
$('stefanvdnighttheme').x = evtobj.clientX; $('stefanvdnighttheme').y = evtobj.clientY;
if (evtobj.preventDefault)evtobj.preventDefault();
document.onmousemove = dragobject.moveit;
}
},
moveit:function(e){
var evtobj = window.event? window.event : e;
if (this.dragapproved == 1){
	if(nmcustom == 'true' || nmbottomleft == 'true'){
		$('stefanvdnighttheme').style.left = $('stefanvdnighttheme').offsetx + evtobj.clientX - $('stefanvdnighttheme').x + "px";
		$('stefanvdnighttheme').style.bottom = $('stefanvdnighttheme').offsety - evtobj.clientY + $('stefanvdnighttheme').y + "px";
	}
	else if(nmtopleft == 'true'){
		$('stefanvdnighttheme').style.left = $('stefanvdnighttheme').offsetx + evtobj.clientX - $('stefanvdnighttheme').x + "px";
		$('stefanvdnighttheme').style.top = $('stefanvdnighttheme').offsety - evtobj.clientY + $('stefanvdnighttheme').y + "px";
	}
	else if(nmtopright == 'true'){
		$('stefanvdnighttheme').style.right = $('stefanvdnighttheme').offsetx + evtobj.clientX - $('stefanvdnighttheme').x + "px";
		$('stefanvdnighttheme').style.top = $('stefanvdnighttheme').offsety - evtobj.clientY + $('stefanvdnighttheme').y + "px";
	}
	else if(nmbottomright == 'true'){
		$('stefanvdnighttheme').style.left = $('stefanvdnighttheme').offsetx + evtobj.clientX - $('stefanvdnighttheme').x + "px";
		$('stefanvdnighttheme').style.bottom = $('stefanvdnighttheme').offsety - evtobj.clientY + $('stefanvdnighttheme').y + "px";
	}
return false;
}
}
}

dragobject.initialize();
}
}

// lamp and night mode active with one click
if(lampandnightmode == 'true'){
	// Observe a specific DOM element:
	if(document.body){
	observeDOM( document.body ,function(){	
		if(isitdark == false){
			if(document.getElementById('stefanvdlightareoff1')){ sun = true; gogonightmode(); } // make it dark
		}else{if(document.getElementById('stefanvdlightareoff1')){}else{sun = false; gogonightmode();}}
	});
	}
}

// YouTube auto width the video player content
// URL control for YouTube only
if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){

// new YouTube october 2013
var mastheadpositioner = $('masthead-positioner');
if(mastheadpositioner){$('masthead-positioner').style.zIndex = '10';}

var appbarguidemenu = $('appbar-guide-menu');
if(appbarguidemenu){$('appbar-guide-menu').style.zIndex = '10';}

var appbarguideiframemask = $('appbar-guide-iframe-mask');
if(appbarguideiframemask){$('appbar-guide-iframe-mask').style.zIndex = '-1';}

// fix self YouTube.com outline to none
var fixselfyoutubeplayeroutline = $('movie_player');
if(fixselfyoutubeplayeroutline){$('movie_player').style.outline = 'none';}

if (autowidthyoutube == 'true'){
var donesetquality = false;
var yt = yt;
yt = yt || {};
yt.playerConfig = {"player_wide": 1};
document.cookie = "wide=1; domain=.youtube.com";
function $(a) {return document.getElementById(a);}
// $("watch7-container").className = "watch-wide";
// with playlist hide
$("watch7-container").className = "watch-wide watch-playlist-collapsed";
}

if (customqualityyoutube == 'true') {
//see http://code.google.com/apis/youtube/flash_api_reference.html#setPlaybackQuality
// one of "highres", "hd1080", "hd720", "large", "medium", "small" or "default" to let youtube pick

var ythdinit = function onYouTubePlayerReady(player) {
  try{
      mplayer = player;
      if(typeof mplayer == "string"){
    	  mplayer = document.getElementById(mplayer);
      }
      if(typeof movie_player != 'undefined'){
    	  mplayer = movie_player;
      }
      mplayer.addEventListener("onStateChange", "onytplayerStateChange");
	  updateQuality();
      //setTimeout(updateQuality,3000);
	  donesetquality = false;
  }
  catch(e){
  }
}

var ythdstatechange = function onytplayerStateChange(newState) {
	try{
		if(newState == 1 && !donesetquality){
			//mplayer.setPlaybackQuality(maxquality);
			// updateQuality();
			donesetquality = true;
		}
	}
	catch(e){}
}

var ythduq = function updateQuality(){
	var aq = mplayer.getAvailableQualityLevels();
	//console.log("Available qualities: " + aq);
	if(aq.indexOf(maxquality) == -1){
		//console.log("Set to highest available level: " + aq[0]);
		mplayer.setPlaybackQuality(aq[0]);
	}
	else{
		//console.log("Set to " + maxquality + " in accordance with user settings");
		mplayer.setPlaybackQuality(maxquality);
	}
}

function injectScript(codetext){
  var ythdscript = document.createElement("script");
  ythdscript.textContent = codetext;
  document.head.appendChild(ythdscript);
}

var codetext = "var maxquality = '" + maxquality + "';\n";
codetext += (ythdinit.toString() +"\n");
codetext += (ythdstatechange.toString() + "\n");
codetext += (ythduq.toString() + "\n");
injectScript(codetext);

}

} // end check youtube.com website
}