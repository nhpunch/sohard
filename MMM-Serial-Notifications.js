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
		
		$(button).on("click", function(){
			if(hidden){
				$(overlay).fadeIn(1000);
				$(button).fadeTo(1000, 0.3);
				$(text).html('OFF');
				hidden = false;  
				this._isPushed = false;
			}else{
				$(overlay).fadeOut(1000);
				$(button).fadeTo(1000, 1);  
				$(text).html('ON');
				hidden = true;
				this._isPushed = true;
			}
		});
		return wrapper;

		this.sendNotification('CONFIG', button);
	}
});
