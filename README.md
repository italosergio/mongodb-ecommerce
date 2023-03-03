# Boas-vindas ao repositório do meu projeto MongoDB Commerce!

  Nesse projeto, trabalho com o banco de dados `commerce`, que contém dados do cardápio do **McDonald's**, como ingredientes, valores nutricionais e dados fictícios de vendas. As instruções de como restaurar o banco podem ser lidas a seguir.

<details>
  <summary>
    <strong>🎛 Linter</strong>
  </summary><br>

  Para fazer a análise estática do código neste projeto, utilizei o linter [ESLint](https://eslint.org/). Assim o código está alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção!

  - Para poder rodar o `ESLint` basta:

  - Executar o comando `npm install` dentro do projeto e depois `npm run lint`.

  - Se a análise do `ESLint` encontrar problemas no código, eles serão mostrados no seu terminal.
   
  - Se não houver problema no código, nada será impresso no seu terminal.

  - Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

</details>

<details>
  <summary>
    <strong>🛠 Testes</strong>
  </summary><br>

  - Para executar localmente os testes, é preciso estar na raiz do diretório do projeto e escrever o seguinte no seu terminal,:

  ```sh
  ./scripts/evaluate.sh
  ```

  👀 **De olho na dica**: esse script vai imprimir um relatório indicando se o teste passou ou não para cada desafio. Como a execução do script envolve restauração da base de dados `commerce` de um teste para outro, recomenda-se esperar pela sua execução completa.

  - Para executar somente o teste de um desafio, execute o comando abaixo substituindo N pelo número do desafio

  ```sh
  ./scripts/evaluate.sh desafioN
  ```

  ⚠️**Importante**: o banco de dados `commerce` é restaurado de um teste para outro.
 </details>

<details>
  <summary>
    <strong>🐳 Como usar o Docker para este projeto</strong>
  </summary><br>

  - Para quem não possui o MongoDB instalado e está utilizando o docker, é necessário executar os testes localmente usando os seguintes passos:

  1. Acesse o terminal na raiz da pasta do projeto;
  2. Crie um container com um volume apontando para a pasta do projeto `docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo`;
  3. Com o container em execução, acesse o terminal do container `docker exec -it nomeDoContainer bash`;
  4. No terminal do container acesse o diretório mapeado no volume (no exemplo acima `/app`);
  5. Por fim, execute o script de testes do projeto: `./scripts/evaluate.sh`.
  Se por algum motivo a execução do container for finalizada, basta iniciá-lo novamente com o comando `docker start nomeDoContainer` e seguir a partir do passo 3.

</details>

<details>
  <summary>
    <strong>♻️ Restaurando o banco de dados `commerce`</strong>
  </summary><br>

  1. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro como **_Connection refused_**, tente reiniciar sua instância.

  2. Quando sua instância estiver no ar e você estiver conectado a ela, digite `exit`. Com isso, você voltará ao terminal para iniciar a importação dos dados.

  3. Na raiz do diretório do projeto, execute o seguinte comando para restaurar a base de dados `commerce`:
    
  ```bash
    DBNAME=commerce ./scripts/resetdb.sh assets/produtos
  ```

  - A execução desse script criará um banco de dados chamado `commerce` e importará os dados para a coleção `produtos`.

  ⚠️ **Importante**: tanto o script executado anteriormente quanto o script de execução local dos testes, restauram a base de dados `commerce`. ⚠️

</details>

## Execução

1 - Retorna a quantidade de documentos inseridos na coleção `produtos`

2 - Ordena a coleção `produtos` pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o `nome` e a quantidade de lanches `vendidos`

3 - Retorna o lanche mais vendido, mostrando apenas o `nome` e a quantidade do lanche mais vendido

4 - Retorna os lanches que tiveram vendas maiores que `50` e menores que `100`, mostrando apenas o nome e a quantidade de lanches `vendidos` em ordem crescente

5 - Retorna o `nome`, as `curtidas` e `vendidos` dos lanches que tiveram quantidade de `curtidas` igual a `36` ou tenham a quantidade de vendas igual a `85`

6 - Retorna o `nome` e as `curtidas` dos lanches que tiveram curtidas maiores que `10` e menores que `100`

7 - Retorna o `nome` e `vendidos` dos lanches que tenham sido `vendidos` com uma quantidade diferente de `50` e em que o campo `tags` não exista

8 - Deleta os lanches com menos de `50` `curtidas` e Retorna o `nome` dos lanches que restaram no banco

9 - Retorna o `nome` de todos os lanches que possuam `calorias` abaixo de `500`

10 - Retorna o `nome` de todos os lanches que tenham o percentual de `proteínas` maior ou igual a `30` e menor ou igual a `40`

11 - Retorna o `nome` do produto, a quantidade de `curtidas` e quantos itens foram `vendidos` dos produtos que não sejam iguais a `Big Mac` e `McChicken`

12 - Adiciona `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`

13 - Inclui o campo `criadoPor` em todos os documentos, colocando `Ronald McDonald` no valor desse campo

14 - Query que Retorna todos os lanches que possuem *picles* em seus ingredientes e mostra apenas os `3` primeiros itens contidos no array `valoresNutricionais`

15 - Adiciona o campo `avaliacao` em todos os documentos da coleção e efetua alterações nesse campo

16 - Adiciona o campo `ultimaModificacao` com a data corrente somente no sanduíche `Big Mac`

17 - Retorna a quantidade total de produtos em uma nova coleção chamada `resumoProdutos`

18 - Inclui `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`

19 - Remove o item `cebola` de todos os sanduíches

20 - Remove o primeiro `ingrediente` do sanduíche `Quarteirão com Queijo`

21 - Remove o último `ingrediente` do sanduíche `Cheddar McMelt`

22 - Adiciona a quantidade de vendas dos sanduíches por dia da semana

23 - Insire os valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z)

24 - Ordena em todos os documentos os valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente

25 - Adiciona o valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`

26 - Adiciona o valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`

27 - Conta quantos produtos contém `Mc` no nome, sem considerar letras maiúsculas ou minúsculas

28 - Conta quantos produtos têm `4` ingredientes

29 - Renomeia o campo `descricao` para `descricaoSite` em todos os documentos

30 - Remove o campo `curtidas` do item `Big Mac`

31 - Retorna o `nome` dos sanduíches em que o número de `curtidas` é maior que o número de sanduíches `vendidos`

32 - Retorna o `nome` e a quantidade de vendas (`vendidos`) dos sanduíches em que o número de vendas é múltiplo de `5`
