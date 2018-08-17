/* $(document).ready(function(){
    var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
    $.getJSON(url,function(data){
        var currentQuote = '';
        var quotes = data.hits;
        $('.read').on('click',function(){
            currentQuote = quotes[Math.floor(Math.random() * quotes.length)]
            console.log(currentQuote);
            $('.quoteBody').html(currentQuote.title);
            $('.quoteAuthor').html(currentQuote.author);

            $('.tweetQuote').attr('href','https://twitter.com/intent/tweet?text='+ currentQuote.title + ' - ' + currentQuote.author
            ).attr('target','_blank').attr('disabled',false);
            $('.read').html('show me one more');
        });
        console.log(quotes[0].title);
        console.log(data);
    });
}); */

// now rather than changing the title we will make it in form of a link so people can actually can click it and go there and read the actuall article

$(document).ready(function(){
    var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
    $.getJSON(url,function(data){
        var currentQuote = '';
        var quotes = data.hits;
        $('.read').on('click',function(){
            currentQuote = quotes[Math.floor(Math.random() * quotes.length)]
            console.log(currentQuote);
            $('.quoteBody').hide()
            $('.quoteBodyLink').html(currentQuote.title);
            $('.quoteBodyLink').attr('href',currentQuote.url).attr('target','_blank');
            $('.quoteAuthor').html(currentQuote.author);

            $('.tweetQuote').attr('href','https://twitter.com/intent/tweet?text='+ currentQuote.title + ' - ' + currentQuote.author
            ).attr('target','_blank').attr('disabled',false);
            $('.read').html('show me one more');
        });
        console.log(quotes[0].title);
        console.log(data);
    });
});