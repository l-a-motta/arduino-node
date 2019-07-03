// Use a biblioteca firmata para comunicar o arduino com seu server/computador
#include <Firmata.h>

void setup()
{
    Serial.begin(9600);
    // Coloque aqui os pins que vai usar
    pinMode(5, OUTPUT);

}
void loop()
{
  while(!Serial.available()); 
    // Coloque aqui os write/read que seu programa ira fazer com o node
    analogWrite(5, Serial.read());
}
