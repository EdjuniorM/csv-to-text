Claro, aqui está o README atualizado conforme solicitado:

## CSV to Text Converter

Este projeto é uma aplicação Node.js que lê um arquivo CSV contendo dados de pessoas, filtra aquelas que têm mais de 18 anos e cria um arquivo de texto com essa informação.

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/EdjuniorM/csv-to-text.git
   cd csv-to-text
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Uso

1. Coloque seu arquivo CSV em `src/csv/data.csv`.
2. Inicie o servidor:
   ```bash
   npm start
   ```
3. Acesse `http://localhost:3000/process-csv` no seu navegador para processar o arquivo CSV.
4. O resultado será salvo em `src/txt/adults.txt`.

### Funcionamento do Código

O código principal está em `src/app.js` e funciona da seguinte maneira:

1. Lê o arquivo CSV usando `csv-parser`.
2. Filtra as pessoas que têm mais de 18 anos.
3. Ordena as pessoas por nome em ordem alfabética.
4. Escreve as informações em um arquivo de texto.


### Referências

- [csv-parser](https://www.npmjs.com/package/csv-parser)
- [Node.js - Writing Files](https://nodejs.org/pt/learn/manipulating-files/writing-files-with-nodejs)
