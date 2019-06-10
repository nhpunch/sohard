int led = 13;

void setup() {
  Serial.begin(9600);
  pinMode(led, OUTPUT);
  Serial.println(“hello”);
}

void loop() {
  static int incomingValue = 0; // nodeJS에서 보낸값

  if ( Serial.available() > 0 ) { // 뭔가 입력값이 있다면
    incomingValue = Serial.read();
    Serial.println(incomingValue);
  }
  
  if ( incomingValue == 49 ) { // 값이 ‘1’ 이면
  digitalWrite(13, HIGH); // LED를 켠다.
  }
  if ( incomingValue == 48 ) { // 값이 ‘0’ 이면
  digitalWrite(13, LOW); // LED를 끈다.
  }
  deayl(2000);
}
