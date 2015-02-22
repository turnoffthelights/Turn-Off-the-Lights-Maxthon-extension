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


// TODO => Bug in Maxthon browser:
// + (important) autoplay -> work sometime 
// + background page analytics
// + CSS run in file
// + image load not well
// + all tabs lights off (master tab)
// + Speech and camera
// + Night Mode inject in iframe YouTube
// + option.js version number def.json

function init(){
var browser = rt.create('mx.browser');
if ((mxstorage.getItem("firstRun")!="false") && (mxstorage.getItem("firstRun")!=false)){
  browser.tabs.newTab({url:"http://www.turnoffthelights.com/extension/maxthonguide.html",position:"afterCurrrent"});
  browser.tabs.newTab({url:"http://www.turnoffthelights.com/extension/maxthonwelcome.html",position:"afterCurrrent"});
  mxstorage.setItem('firstRun',false);
  mxstorage.setItem('version',"3.1");
}
else if (mxstorage.getItem("version")=="2.1"){
  browser.tabs.newTab({url:"http://www.turnoffthelights.com/extension/maxthonupgrade.html",position:"afterCurrrent"});
  mxstorage.setItem('version',"3.1");
}
}

init()