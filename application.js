(function($){

    $(document).ready(function(){
        $('.box').click(function() {
            api_key = "5rotk2iss5zvtx24xexcl6o8";
            var terms_clothes=$(this).data('clr')+" clothing women";
            var terms_shoes=$(this).data('clr')+" shoes women";
            var terms_accessories=$(this).data('clr')+" accessories women";
                        
            etsyURL1 = "http://openapi.etsy.com/v2/listings/active.js?keywords="+
                terms_clothes+"&limit=5&includes=Images:1&api_key="+api_key;

            etsyURL2 = "http://openapi.etsy.com/v2/listings/active.js?keywords="+
                terms_shoes+"&limit=5&includes=Images:1&api_key="+api_key;

            etsyURL3 = "http://openapi.etsy.com/v2/listings/active.js?keywords="+
                terms_accessories+"&limit=5&includes=Images:1&api_key="+api_key;

            $('.etsyimages').empty();
            $('#noselection').css('display','none');
            

            $.ajax({
                url: etsyURL1,
                dataType: 'jsonp',
                success: function(data) {
                    if (data.ok) {
                        
                        if (data.count > 0) {
                            $.each(data.results, function(i,item) {
                                $("<img/>").attr("src", item.Images[0].url_75x75).appendTo(".clothes").wrap(
                                    "<a href='" + item.url + "' ></a>"
                                );
                            });
                        } 
                    } else {
                        $('.etsyimages').empty();
                        alert(data.error);
                    }
                }
            });

            $.ajax({
                url: etsyURL2,
                dataType: 'jsonp',
                success: function(data) {
                    if (data.ok) {
                        
                        if (data.count > 0) {
                            $.each(data.results, function(i,item) {
                                $("<img/>").attr("src", item.Images[0].url_75x75).appendTo(".shoes").wrap(
                                    "<a href='" + item.url + "'></a>"
                                );
                            });
                        } 
                    } else {
                        $('.etsyimages').empty();
                        alert(data.error);
                    }
                }
            });

            $.ajax({
                url: etsyURL3,
                dataType: 'jsonp',
                success: function(data) {
                    if (data.ok) {
                        
                        if (data.count > 0) {
                            $.each(data.results, function(i,item) {
                                $("<img/>").attr("src", item.Images[0].url_75x75).appendTo(".accessories").wrap(
                                    "<a href='" + item.url + "'></a>"
                                );
                            });
                        } 
                    } else {
                        $('.etsyimages').empty();
                        alert(data.error);
                    }
                }
            });

            return false;
        })
    });

})(jQuery);