const NodeHelper = require('node_helper')
const Serialport = require("serialport");

module.exports = NodeHelper.create({

  start: function () {
  },

  socketNotificationReceived: function (notification, payload) {
    const self = this

    if (notification === 'CONFIG') {
      self.config = payload
      
    var serialport = new Serialport('/dev/ttyACM0', {   
		baudRate: 9600
		});

    var led = 0;

      serialport.open(function () {
        console.log('connect...');
        serialport.on('data', function(data) { // 아두이노로부터 전달된 데이터
          console.log('data received: ' + data);
        });
        
        if(this._isPushed==false)
        {
          serialport.write("0");
        }
        else if(this._isPushed==true)
        {
          serialport.write("1");
        }
      });
    }
  }, 
})
