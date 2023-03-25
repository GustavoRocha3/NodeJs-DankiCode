const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;

//CRIAR NOVO ARQUIVO
// fs.writeFile('danki.txt', 'teste danki code', (err) => {
//     if(err) throw err;
//     console.log('O arquivo foi criado com sucesso');
// })

//CRIA NOVO ARQUIVO OU INSERE O CONTEÚDO AONDE EXISTE



function addFile() {
    fs.appendFile('danki.txt', '\nOutro conteúdo', (err) =>{
        if(err) throw err;
        console.log('Salvo novamente com sucesso');
    });
}

const server = http.createServer((req,res) => {

    if(req.url == '/danki'){

        fs.readFile('index.html', function(err, data){

            addFile();

            res.writeHead(200, {'CVontent-Type':'text/html'});
            res.write(data);
            return res.end();
        });
        
    }else{
        return res.end()
    }

    

});


server.listen(port,hostname, () => {
    console.log("Servidor está rodando!");
})