## API

API - Application Programming Interface é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias.
- Intermediador para troca de informações.

## REST
Transferencia de dados, geralmente, usando o protocolo HTTP
REST - Reprensational State Transfer (Transferencia de estado representativo)

O rest delimita algumas obrigações nessas transferências de dados.

Resourses seriam então, uma entidade, um objeto.

### 6 necessidades (constraints) para ser RESTful

- _Client-server_: Separação do cliente é do armazenamento de dados, dessa forma. poderemos ter uma portabilidade do nosso sitema;

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder;

- _Cacheble_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente;

- _Layred System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida;

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.

## RESTFUL

RESTful, é a aplicação dos padrões REST.

## BOAS PRATICAS

Plural ou singular? Use um padrão.

Não utilizar barras no fim de um endpoint.

Nunca deixar o cliente sem resposta;

## VERBOS HTTP

-GET: Receber dados de um resourse;
-POST: Enviar dados para serem processados por um resourse;
-PUT: Atualizar as informações de um resourse;
-DELETE: Apaga um resourse.

### STATUS DAS RESPOSTAS

- 1xx: Informação
- 2xx: Sucesso
  - 200: OK
  - 201: Created
  - 204: Não tem conteúdo PUT, POST, DELETE
- 3xx: Redirect
- 4xx: Client error
  - 400: Bad request
  - 404: Not Found
- 5xx: Server Error
  - 500: Internal Server Error

