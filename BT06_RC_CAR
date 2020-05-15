#include <SoftwareSerial.h> //시리얼 통신 라이브러리 호출
 
int blueTx=2;   //Tx (보내는핀 설정)
int blueRx=3;   //Rx (받는핀 설정)
SoftwareSerial mySerial(blueTx, blueRx);  //시리얼 통신을 위한 객체선언
String myString=""; //받는 문자열

int dcA1Pin = 8, dcA2Pin = 9, dcB1Pin = 10, dcB2Pin = 11;
 
void setup() {
  Serial.begin(9600);   //시리얼모니터 
  mySerial.begin(9600); //블루투스 시리얼 개방
  pinMode(dcA1Pin,OUTPUT); pinMode(dcA2Pin,OUTPUT);
  pinMode(dcB1Pin,OUTPUT); pinMode(dcB2Pin,OUTPUT);
 
}
 
void loop() {
 testingBluetooth();
 delay(5);
 if(!myString.equals(""))  //myString 값이 있다면
  {
    Serial.println("input value: "+myString); //시리얼모니터에 myString값 출력
    if(myString.equals("A")){
      motors_forward();
    }else if(myString.equals("B")){
      motors_backward();
    }else if(myString.equals("T")){
       motors_stop();
    }else if(myString.equals("R")){
       motors_right();
    }else if(myString.equals("L")){
       motors_left();
    }else{
       motors_stop();
    }
    myString="";  //myString 변수값 초기화
  }
}

/*블루투스 테스트*/
void testingBluetooth(){
 // if(mySerial.available()) Serial.write(mySerial.read()); //bluetooth시리얼 값 읽기
 // if(Serial.available()) mySerial.write(Serial.read());  //일반 시리얼

 while(mySerial.available())  //mySerial에 전송된 값이 있으면
  {
    char myChar = (char)mySerial.read();  //mySerial int 값을 char 형식으로 변환
    myString+=myChar;   //수신되는 문자를 myString에 모두 붙임 (1바이트씩 전송되는 것을 연결)
    delay(5);           //수신 문자열 끊김 방지
  }
  
}

/*DC모터 테스트*/
void testingDc(){
  digitalWrite(dcA1Pin,HIGH); digitalWrite(dcA2Pin,LOW);
  digitalWrite(dcB1Pin,LOW); digitalWrite(dcB2Pin,HIGH);
  delay(3000);
  digitalWrite(dcA1Pin,LOW); digitalWrite(dcA2Pin,HIGH);
  digitalWrite(dcB1Pin,HIGH); digitalWrite(dcB2Pin,LOW);
  delay(3000);
}

void motors_stop(){
  Serial.print("Stop!!!");
  digitalWrite(dcA1Pin,LOW); digitalWrite(dcA2Pin,LOW);
  digitalWrite(dcB1Pin,LOW); digitalWrite(dcB2Pin,LOW
  );
  delay(500);
}


void motors_forward(){
  Serial.print("Forward!!!!");
  digitalWrite(dcA1Pin,HIGH); digitalWrite(dcA2Pin,LOW);
  digitalWrite(dcB1Pin,LOW); digitalWrite(dcB2Pin,HIGH);
  delay(500);
}

void motors_left(){
  Serial.print("Left!!!!");
  digitalWrite(dcA1Pin,LOW); digitalWrite(dcA2Pin,HIGH);
  digitalWrite(dcB1Pin,LOW); digitalWrite(dcB2Pin,HIGH);
  delay(500);
}

void motors_right(){
  Serial.print("Left!!!!");
  digitalWrite(dcA1Pin,HIGH); digitalWrite(dcA2Pin,LOW);
  digitalWrite(dcB1Pin,HIGH); digitalWrite(dcB2Pin,LOW);
  delay(500);
}


void motors_backward(){
  Serial.print("Backward!!!!");
  digitalWrite(dcA1Pin,LOW); digitalWrite(dcA2Pin,LOW);
  digitalWrite(dcB1Pin,LOW); digitalWrite(dcB2Pin,LOW);
  delay(1000); //잠시 정지 후 후진
  digitalWrite(dcA1Pin,LOW); digitalWrite(dcA2Pin,HIGH);
  digitalWrite(dcB1Pin,HIGH); digitalWrite(dcB2Pin,LOW);
  delay(1000);
  
}
