//toDegrees takes the value(s) from the thermistor and 
//puts it through this function to return the equivalent degree Celcius value

var Vo;
var R1 = 10000;
var logR2;
var R2;
var T;
var c1 = 1.009249522e-03; 
var c2 = 2.378405444e-04;
var c3 = 2.019202697e-07;

  Vo = msg.payload;
  R2 = R1 * (1441.0 / Vo - 1.0);
  logR2 = Math.log(R2);
  T = (1.0 / (c1 + c2*logR2 + c3*logR2*logR2*logR2));
  T = T - 273.15;

return T;
