/*

{% timeline [Google Sheet Code] [height] [language] [font] %}

*/

hexo.extend.tag.register('timeline', function (args) {
    var googleSheetCode = args[0];

    var timeline = '<iframe src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=' + googleSheetCode +
                   '&font=' + args[3] +
                   '&lang=' + args[2] +
                   '&initial_zoom=2&height=' + args[1] +
                   '" width="100%" height="' + args[1] +
                   '" frameborder="0"></iframe>';

    return '<div class="timeline-container">' + timeline + '</div>';
});