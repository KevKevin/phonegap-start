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
 
 function poiue() 
 {
    document.getElementById("dialog").dialog({
      autoOpen: false
    });

    document.getElementById("opener").click(function poiue() {
       document.getElementById("dialog").dialog( "open" );
    });
  };
 var cont=0;
 function myFunction()
  {
	//if(cont%2==0)
	//{
	//for(var i=1; i<0; i++)
	//{
	var cont=0;
		if(cont%2==0)
		{
			document.getElementById("body").style.background="black";
			cont=cont++;
		}
		setInterval(5);
		if(cont%2==1)
		{
			document.getElementById("body").style.background="white";.
			cont=cont++;
		}
	//}
		document.getElementById("bot").style.color="green";
		document.getElementById("bu").style.visibility="visible";
		document.getElementById("ye").style.margin="50px 10px 20px 30px";
		document.getElementById("yo").style.margin="500px 100px 200x 300px";
		cont=cont++;
	//}
/*else
	{
	
		document.getElementById("bot").style.color="red";
		document.getElementById("bu").style.visibility="hidden";
		document.getElementById("bu").style.background="green";
		document.getElementById("bu").style.margin="auto";
		//cont=0;
	}*/
	
 };
  
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
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
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
