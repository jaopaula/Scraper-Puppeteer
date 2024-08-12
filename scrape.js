const puppeteer = require('puppeteer'); 
const createCsvWriter = require('csv-writer').createObjectCsvWriter; 

(async () => { 
    
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage(); 
    
   
    const url = 'https://www.bbc.com/news'; 
    await page.goto(url, { waitUntil: 'networkidle2' }); 
    
   
    const newsItems = await page.evaluate(() => { 
        const headlines = []; 
        const items = document.querySelectorAll('a[href*="/news"]'); // Seleciona todos os elementos <a> cujo atributo href contém "/news". Ajuste o seletor conforme necessário.
        
        items.forEach(item => { 
            const title = item.textContent.trim(); 
            const url = item.href; 
            
            if (title && url) {
                headlines.push({ title, url });
            } 
        }); 

        console.log('Headlines:', headlines); 
        return headlines; 
    });

   
    await browser.close(); 
    
    const csvWriter = createCsvWriter({ 
        path: 'news_data.csv',
        header: [
            { id: 'title', title: 'Title' },
            { id: 'url', title: 'URL' }
        ]
    });

   
    csvWriter.writeRecords(newsItems) 
        .then(() => { 
            console.log('Dados salvos em news_data.csv');
        })
        .catch(error => { 
            console.error('Erro ao salvar dados em CSV:', error);
        });
})();
