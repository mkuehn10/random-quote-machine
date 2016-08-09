$(function() {



var APIKey = 'AbccMAolPsmshhbCdxo4RX5qj501p1PWKlhjsn8vsHum3EkRhU';



var ViewModel = function() {
    var self = this;

    self.$quotation = $('#quotation');
    self.$author = $('#author');

    self.quotation = ko.observable('');
    self.author = ko.observable('');

    self.twitter = ko.observable('');

    self.twitterHref = function() {
        return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(self.twitter());
    }

    self.getRandomQuote = function() {
        $.ajax({
                url: 'https://andruxnet-random-famous-quotes.p.mashape.com/famous',
                headers: {
                    'X-Mashape-Key': APIKey,
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .done(function(data) {
                var response = JSON.parse(data);
                console.log(response.quote)
                self.quotation(response.quote);
                self.author(response.author);
                self.twitter('"' + response.quote + '" ' + response.author);
            });
    };

    self.getRandomQuote();
};

ko.applyBindings(new ViewModel());

});