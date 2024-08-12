
# Web Scraper com Puppeteer

Este projeto é um script de Web Scraping que utiliza Puppeteer para extrair títulos de notícias e seus respectivos URLs de um site de notícias e salva esses dados em um arquivo CSV.

## Funcionalidades

- Abre um navegador de forma automatizada usando Puppeteer.
- Navega até um site de notícias (no exemplo, a BBC News).
- Extrai os títulos das notícias e seus URLs da página.
- Salva os dados extraídos em um arquivo CSV (`news_data.csv`).

## Requisitos

- Node.js (versão 12 ou superior)
- npm (Node Package Manager)

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

## Como Usar

1. **Execute o script**:

   Para executar o script e capturar os dados:

   ```bash
   node scrape.js
   ```

2. **Verifique os resultados**:

   Após a execução do script, os dados capturados serão salvos no arquivo `news_data.csv` no diretório do projeto. Abra este arquivo para visualizar os títulos e URLs das notícias extraídas.

## Customização

### Alterar o site de notícias

Se você deseja extrair dados de um site diferente, altere a URL no seguinte trecho do código:

```javascript
const url = 'https://www.bbc.com/news';
```

### Ajustar os seletores

Dependendo da estrutura HTML do site, você pode precisar ajustar os seletores que identificam os títulos e URLs das notícias. Isso pode ser feito modificando o seguinte trecho:

```javascript
const items = document.querySelectorAll('a[href*="/news"]');
```

## Problemas Comuns

### CSV com Cabeçalhos Vazio

Se o arquivo CSV gerado contém apenas os cabeçalhos (`Title, URL`), é provável que o seletor usado no script não esteja correto ou que o site tenha uma estrutura HTML diferente. Use as ferramentas de desenvolvedor do navegador para inspecionar os elementos HTML e ajustar os seletores no código.

### Navegador não Abre

Certifique-se de que o Puppeteer está instalado corretamente e que seu ambiente Node.js está configurado corretamente. Caso o navegador não abra, você pode tentar rodar o Puppeteer em modo não-headless para depurar visualmente.

## Contribuições

Sinta-se à vontade para abrir issues ou pull requests para melhorias ou correções.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
