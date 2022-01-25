$(function(){

    $(".menuResponsive").click(function(){
        let el = $(this).find('i.fa');

        if(el.hasClass('fa-times')){
            el.remove();
            $(this).html("<i class='fa fa-bars' aria-hidden='true'></i>")
        } else {
            el.remove();
            $(this).html("<i class='fa fa-times' aria-hidden='true'></i>")
        }

        $(".menu").find("ul").slideToggle();
    })


    $.ajax({
        url: 'https://api.themoviedb.org/3/discover/movie/?api_key=263cc4e66b027ef750b83fee5c627a39',
        method:'GET',
        dataType: 'json',
        success: function(response){

            $.each(response.results, function(index, items){
                $("#app").append(`
                <div class="card__movie">
                    <div class="card__movie__img">
                        <img src="http://image.tmdb.org/t/p/w500/${items.poster_path}" alt="${items.title}">
                    </div>
                    <div class="card__movie__description">
                        <h2>${items.title}</h2>
                        <p>${items.overview}</p>
                    </div>

                    <div class="card__movie__actions flex">
                        <div class="card__movie__actions__stars">
                            <i class="fa fa-star" aria-hidden="true"></i> ${items.vote_average}
                        </div>
                        <div class="card__movie__actions__buttons">
                            <span class="heart"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                            <span class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>
                `);
            })
                
        }
    });

    $(document).on('click', '.heart', function(){
        let el = $(this).find('i.fa');

        if(el.hasClass('fa-heart')){
            el.remove();
            $(this).html("<i class='fa fa-heart-o' aria-hidden='true'></i>")
        } else {
            el.remove();
            $(this).html("<i class='fa fa-heart' aria-hidden='true'></i>")
        }
    });
});