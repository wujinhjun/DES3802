#include<SoftwareSerial.h>

SoftwareSerial softSerial(5,6);
// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  softSerial.begin(115200);
  // make the pushbutton's pin an input:
  pinMode(13,OUTPUT);
  softSerial.listen();
}

// the loop routine runs over and over again forever:
void loop() {
//  char str='';
  if (Serial.available()>0){
    char str = Serial.read();
    Serial.println("aaa");
    if (str=='a'){
      digitalWrite(13, HIGH);
      delay(1000);
      digitalWrite(13, LOW);
    }
  }

  if (softSerial.available()>0) {
    String str = softSerial.readStringUntil('a');
    if (str.compareTo("GO")==0){
      digitalWrite(12, HIGH);
    delay(1000);
    digitalWrite(12, LOW);
    }
    softSerial.println(str);
  }
}
