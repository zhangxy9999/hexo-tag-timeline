# hexo-tag-timeline

## Description
Embed timeline block in your Hexo blogs! This plugin is powered by [Timeline.js](https://timeline.knightlab.com/) from [Knight Lab](https://knightlab.northwestern.edu/)

## Usage
1. Clone this repo to your `./blog/node_module/` folder by:
<br/><pre><code>git clone https://github.com/zhangxy9999/hexo-tag-timeline.git</code></pre>
2. Add following dependency to the `./blog/package.json` file:
<br/><pre><code>"dependencies": {
            ..
            ..
            ..
            "hexo-tag-timeline": "1.0.0"
        }</code></pre>
3. Rebuild project with `npm install`
4. In your blog post, embed Timeline block with following tag:
<br/><pre><code>{% timeline [Google Sheet Code] [height] [language] [font] %}</code></pre>
    Example: `{% timeline 1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI 650 en Georgia-Helvetica %}`
5. Parameters:
    * height: number in pixel
    * language: [ISO 639-1 Code List](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
    * font: 
        * Default
        * Abril -DroidSans
        * Amatic-Andika
        * Bevan-PontanoSans
        * Bitter-Raleway
        * Danci ng- Ledger
        * FjaIIa-Average
        * Georgia-Helvetica
        * Lustria-Lato
        * OpenSans
        * PI ayfair-FaunaOne
        * Rufina -Sintony
        * UnicaOne-VoI Ikorn
6. More instructions on how to use Google Spreadsheet template, please refers to [https://timeline.knightlab.com/](https://timeline.knightlab.com/)