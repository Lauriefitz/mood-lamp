//This function takes in 6 inputs. The output is depended on the msg.payload.
//If a 'mood switch' is turned on it will overwrite the 'temporary' output, i.e the temperature readings and LED value

context.temp = context.temp || 0.0;
context.switchH = context.switchH || false;
context.switchS = context.switchS || false;
context.switchA = context.switchA || false;
context.switchC = context.switchC || false;
context.switchL = context.switchL || false;

if (msg.signal === 'happy') {
  context.switchH= msg.payload;
}
if (msg.signal === 'sad') {
  context.switchS= msg.payload;
}
if (msg.signal === 'angry') {
  context.switchA= msg.payload;
}
if (msg.signal === 'calm') {
  context.switchC= msg.payload;
}
if (msg.signal === 'loved') {
  context.switchL= msg.payload;
}else {
  context.temp = msg.payload;
}

console.log(context.temp);
 if (context.switchH==1) {
     return {topic: 'state', payload: 22};
 }

 if (context.switchS==1) {
     return {topic: 'state', payload: 18};
 }

if (context.switchA==1) {
    return {topic: 'state', payload: 27};
}

if (context.switchC==1) {
    return {topic: 'state', payload: 31};
}
if (context.switchL==1) {
    return {topic: 'state', payload: 32};
}
return {topic: 'state', payload: context.temp};

