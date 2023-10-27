# Introdução PHP

## Instalação do PHP

## Alterando entre versões do PHP
Caso você possua varias versões do PHP instaladas na maquina e deseje escolher uma principal você pode:

sudo update-alternatives --config php

Ou, você também pode alterar o alias do ambiente Linux para o comando php. Para visualizar seus alias execute:

alias

Para definir um alias para o PHP execute algo como o exemplo:

alias meu_php="/usr/bin/php"

É importante que você se certifique-se que este é o diretório de sua instalação do PHP. A partir desse momento ao chamar o alias meu_php será chamado a execução do cliente do PHP.


## Servidor Local PHP

```
php -S localhost:8000 -t public
```
Onde
php: Faz messão a linguagem de programação
-S: É o servidor nativo da linguaguem
localhost: É referente ao local da máquina
:8080: É referente a porta
-t: Eu ainda não sei
public: È ferente a pasta onde o arquivo está