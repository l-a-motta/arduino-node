// Esse programa serve como exemplo do uso da biblioteca johnny-five
var led_pin=5;
var johnny_five=require("johnny-five"); 
var arduino_board=new johnny_five.Board(); 
arduino_board.on("ready", function() {  
   console.log("LED esta piscando!");  
   var led = new johnny_five.Led(led_pin);  
   led.blink(100);  
});