/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
		if(!app.total){
			app.total = true;
			var chushi = setTimeout(function(){
			    app.objs.route = new app.routers();	
			    app.onDeviceReady();
               // debugger;
			},100);
		}
		
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        Backbone.history.start({pushState : true});
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        $("#deviceready").show();
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
    }
};
var resizeArry = {}
var scrollArry = {}
$(window).scroll(function(){
	if(scrollArry){
		var x = $(window).scrollLeft();
		var y = $(window).scrollTop();
		$.each(scrollArry,function(i,n){
			n(x,y);
			})
		}
	})
$(window).resize(function(){
	if(resizeArry){
		var w = $(window).width()
		var h = $(window).height()
		$.each(resizeArry,function(i,n){
			n(w,h);
			})
		}
	})

var $_GET = function(){
  var url = window.document.location.href.toString();
  var u = url.split("?");
  if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
		$.each(u,function(o,p){
			var j = p.split("=");
			get[j[0]] = j[1];
			})
        return get;
    }else{
       return {};
    }
};

app.models = {};
app.collections = {};
app.apis = {};
app.views = {};
app.objs = {};
app.fns = {};

