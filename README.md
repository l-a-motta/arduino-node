# arduino-node

![Imagem](https://circuitdigest.com/fullimage?i=circuitdiagram_mic/Circuit-Diagram-for-Controlling-an-LED-using-Nodejs-and-Arduino.png)

> Controlando um Arduino UNO com a framework Node.js

---

### Sumário

- [Componentes](#componentes)
- [Como usar](#como-usar)
- [Referencias](#referencias)
- [Autores](#autores)

---

## Componentes

- Arduino UNO
- LED/ Sensor de temperatura/ Sensor de fotoluminosidade/ etc
- Resistores necessários para seus módulos

#### Tecnologias

- Arduino IDE: Para manusear o sketch na sua placa Arduino
- Node.js
- Firmata: É um protocolo para comunicação com diferentes microcontroladores a partir de software em um computador, smartphone, etc. O firmware Firmata pode ser carregado em qualquer placa microcontroladora (como Arduino) e é capaz de falar com qualquer laptop, PC ou smartphone. Já vem como padrão na Arduino IDE.
- OPCIONAL Johnny-five: Johnny-Five é a plataforma de robótica baseada em JavaScript e IoT usada para escrever códigos em JavaScript e usada para fazer uma ponte entre as placas do Arduino e o computador. (somente usado no blink_led.js)

[Voltar ao topo](#arduino-node)

---

## Como usar

#### Instalação

### Links úteis

Link para o circuito usando LED: https://www.tinkercad.com/things/dnzbB5Gwoep 

#### Código Javascript na página HTML

```html
 <script type="text/javascript">
                var socket = io.connect();
               
                socket.on('led', function (data) {
                        document.getElementById("inputSlider").value = data.value;
                        document.getElementById("outputText").innerHTML = data.value;
                });

                //aqui
               
                function showValue(newValue)
                {
                        document.getElementById("outputText").innerHTML=newValue;
                        socket.emit('led', { value: newValue });
                }
        </script>
```
[Voltar ao topo](#arduino-node)

---

## Referências
[Voltar ao topo](#arduino-node)

---

## Autores

- Twitter - [@jamesqquick](https://twitter.com/jamesqquick)
- Website - [James Q Quick](https://jamesqquick.com)

[Voltar ao topo](#arduino-node)
