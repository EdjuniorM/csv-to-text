const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const PORT = 3000;

app.get('/process-csv', (req, res) => {
    const results = [];


    fs.createReadStream('src/csv/data.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            const currentDate = new Date();
            const adults = results.filter(person => {
                const birthDate = new Date(person.birthday);
                const age = currentDate.getFullYear() - birthDate.getFullYear();
                const monthDifference = currentDate.getMonth() - birthDate.getMonth();
                const dayDifference = currentDate.getDate() - birthDate.getDate();
                return age > 18 || (age === 18 && (monthDifference > 0 || (monthDifference === 0 && dayDifference >= 0)));
            });


            adults.sort((a, b) => a.name.localeCompare(b.name));

            const txtContent = [`Existem ${adults.length} pessoas maiores de 18 anos`];
            adults.forEach(person => {
                const birthDate = new Date(person.birthday);
                const age = currentDate.getFullYear() - birthDate.getFullYear();
                const monthDifference = currentDate.getMonth() - birthDate.getMonth();
                const dayDifference = currentDate.getDate() - birthDate.getDate();
                const actualAge = monthDifference > 0 || (monthDifference === 0 && dayDifference >= 0) ? age : age - 1;
                txtContent.push(`${person.name} tem mais ${actualAge} anos`);
            });

            fs.writeFile('src/txt/adults.txt', txtContent.join('\n'), (error) => {
                if (error) {
                    return res.status(500).send(`Erro ao escrever o arquivo: ${error}`);
                }
                res.send('Arquivo processado e salvo em txt/adults.txt');
            });
        })
        .on('error', (error) => {
            console.error('Erro ao ler o arquivo CSV:', error);
            res.status(500).send('Erro ao ler o arquivo CSV');
        });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
