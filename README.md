# arduino-node
> Controlando um Arduino UNO com a framework Node.js

---

### Sumário

- [Componentes](#componentes)
- [Como usar](#como-usar)
- [Referencias](#referencias)
- [Autores](#autores)

---

## Componentes

#### Peças

- Arduino UNO
- LED/ Sensor de temperatura/ Sensor de fotoluminosidade/ etc
- Resistores necessários para seus módulos

#### Tecnologias

- Arduino IDE: Para manusear o sketch na sua placa Arduino
- Node.js: Framework necessária para manusear o programa em javascript
- Firmata: É um protocolo para comunicação com diferentes microcontroladores a partir de software em um computador, smartphone, etc. O firmware Firmata pode ser carregado em qualquer placa microcontroladora (como Arduino) e é capaz de falar com qualquer laptop, PC ou smartphone. Já vem como padrão na Arduino IDE.
- OPCIONAL Johnny-five: Johnny-Five é a plataforma de robótica baseada em JavaScript e IoT usada para escrever códigos em JavaScript e usada para fazer uma ponte entre as placas do Arduino e o computador. (somente usado no blink_led.js)

[Voltar ao topo](#arduino-node)

---

## Como usar

### Instalação

Antes de iniciar a codificação e o desenvolvimento, o Node.js deve ser baixado e configurado. Para fazer o download do ambiente Node.js, basta seguir etapas simples:

- Passo 1: Faça o download do arquivo .exe do Node.js em seu site oficial.

- Passo 2: Execute o .exe e siga as instruções dadas no instalador.

- Passo 3: Reinicie seu computador como é recomendado no documento Node.js e também para usar todos os recursos do Node.js

- Passo 4: Para verificar se o Node.js foi instalado, abra o Prompt de Comando e digite Node –v

- Passo 5: Instale também as bibliotecas necessárias usadas para controlar o brilho do LED. Existem três bibliotecas usadas aqui:

    - express: wrapper do servidor HTTP
    
    - socket.io: biblioteca de WebSockets
    
    - serialport: invólucro de porta serial
 
- Passo 6: Execute os comandos abaixo no CMD, um por um, para instalar essas três bibliotecas:

```html
npm install express
npm install socket.io
npm install serialport
```

Agora, para executar o programa, siga as etapas abaixo:

- Abrir o prompt de comando

- Localize a pasta "LED_Control" seguindo o comando "cd"

- Execute o comando "Node led_blink.js". Se executado com sucesso, mostrará "LED começou a piscar!"

#### Links úteis

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

#### Código NODE

Inicializando as bibliotecas necessárias

```javascript
var express = require('express');
app = express();
server = require('http').createServer(app);
io = require('socket.io').listen(server);
var SerialPort = require("serialport")
var serialPort = new SerialPort("/COM3", { baudRate: 9600 });
```

Fazendo as conexões

```javascript
server.listen(8080);// Coloque aqui o IP desejado para comunicação servidor/arduino/usuario

app.use(express.static('public'));// Não tenho certeza se usar public pode causar um risco de segurança, a biblioteca express não tinha documentação boa sobre isso       
 
var send = 0;// O valor inicial que será "mandado" para o arduino
```

Ouvindo o html para enviar dados no socket

```javascript
io.sockets.on('connection', function (socket) {
        socket.on('led', function (data) {
                send = data.value;

                var buf = new Buffer.alloc(1);
                buf.writeUInt8(send);
                serialPort.write(buf);
               
                io.sockets.emit('led', {value: send});   
        });
       
        socket.emit('led', {value: send});
});
```

OPCIONAL: recebendo informações do socket para enviar para o html

```javascript
var read = 0;// O valor inicial do que será "recebido" do arduino
io.sockets.on('connection', function (socket) {
        socket.on('led', function (data) {
                read = io.sockets.receive('led', {value: get});

                var buf = new Buffer.alloc(1);
                buf.writeUInt8(read);
                console.log(buf);  
        });
});
```

[Voltar ao topo](#arduino-node)

---

## Referências

https://nodejs.org/dist/latest-v10.x/docs/api/

https://www.youtube.com/watch?v=eVGEea7adDM

https://github.com/simoesusp/Eletronica-para-Computacao

[Voltar ao topo](#arduino-node)

---

## Autores

- Diogo Castanho Emídio
- Leonardo Antonetti da Motta
- Jorge

[Voltar ao topo](#arduino-node)
