/*

{% timeline [Google Sheet Code] [height] [language] [font] %}

*/

hexo.extend.tag.register('timeline', function (args) {
    var googleSheetCode = args[0];

    var timeline = '<iframe src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=' + googleSheetCode +
                   '&font=' + argv[3] +
                   '&lang=' + argv[2] +
                   '&initial_zoom=2&height=' + argv[1] +
                   '" width="100%" height="' + argv[1] +
                   '" frameborder="0"></iframe>';

    return '<div class="timeline-container">' + timeline + '</div>';
});