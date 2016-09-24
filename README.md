# hexo-tag-timeline

## Description
Embed timeline block in to your Hexo blogs!

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