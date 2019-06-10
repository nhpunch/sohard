Module.register('MMM-Serial-Notifications', {
  defaults: {
	  notifName: 'BUTTON_PRESSED',
  },

  _isPushed: false,

  getScripts: function() {
		return ["modules/MMM-Serial-Notifications/js/jquery.js"];
	},
	getStyles: function() {
		return ["mm-MMM-Serial-Notifications-style.css"];
	},
  start: function () {
    Log.info("Starting module: " + this.name);
	this.sendSocketNotification('CONFIG', this.config)
	this.sendSocketNotification('BUNTTON_PRESSED', this._isPushed)
  },	
  socketNotificationReceived: function (notification, payload) {	
  },

	getDom: function() {
		var wrapper = document.createElement("div");
		var button = document.createElement("div");
		var text = document.createElement("span");
		var overlay = document.createElement("div");
		var hidden = true;

		overlay.className = "paint-it-black";
		button.className = "hide-toggle";
		button.appendChild(text);
		text.innerHTML = "ON";

    	wrapper.appendChild(button);
		wrapper.appendChild(overlay);
		
		button.addEventListener('click', ()=> {
   	
				if(self.hidden){
					Log.log("button pushed 'on' ")
					self.hidden = false;  
					self._isPushed = false;
				}else{
					Log.log("button pushed 'off' ")
					self.hidden = true;
					self._isPushed = true;
				}
			});
			return wrapper;
	}
});
