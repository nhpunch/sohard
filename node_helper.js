const NodeHelper = require('node_helper')
const Serialport = require("serialport");

module.exports = NodeHelper.create({

  start: function () {
  },

  socketNotificationReceived: function (notification, payload) {

    if (notification === 'CONFIG') {
      const self = this;
      self.config = payload;
    }
    else if(notification === 'BUTTON_PRESSED')
    {
    var serialport = new Serialport('/dev/ttyACM0', {   
		baudRate: 9600
		});

    var led = 0;

      serialport.open(function () {
        console.log('connect...');
        serialport.on('data', function(data) { // 아두이노로부터 전달된 데이터
          console.log('data received: ' + data);
        });
        
        if(this.isPushed == false)
        {
        setInterval(() => { // 2초마다 아두이노에게 문자열을 전송하는 예
          led = !led;
          serialport.write(led==true ? "1" : "0", function(err, result){
            if(err){
             console.log(err);
            }
          });
        }, 5000);
      }
    });
  }
}, 
})
