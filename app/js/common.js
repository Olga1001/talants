$(document).ready(function () {
    $('.slider')
        .on('init', () => {
            $('.slick-slide[data-slick-index="-2"]').addClass('lt2');
            $('.slick-slide[data-slick-index="-1"]').addClass('lt1');
            $('.slick-slide[data-slick-index="1"]').addClass('gt1');
            $('.slick-slide[data-slick-index="2"]').addClass('gt2');
        })
        .slick({
            infinite: true,
            centerMode: true,
            // autoplay: true,
            // autoplaySpeed: 3000,
            // centerPadding: 0,
            variableWidth: true,
            slidesToShow: 3,
            dots: false,
            arrows: true,
            slideToScroll: 1,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        dots: true,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                }

            ]
        }).on('beforeChange', (event, slick, current, next) => {
        $('.slick-slide.gt2').removeClass('gt2');
        $('.slick-slide.gt1').removeClass('gt1');
        $('.slick-slide.lt1').removeClass('lt1');
        $('.slick-slide.lt2').removeClass('lt2');

        const lt2 = (current < next && current > 0) ? current - 1 : next - 2;
        const lt1 = (current < next && current > 0) ? current : next - 1;
        const gt1 = (current < next || next === 0) ? next + 1 : current;
        const gt2 = (current < next || next === 0) ? next + 2 : current + 1;

        $(`.slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
        $(`.slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
        $(`.slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
        $(`.slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

        // Clone processing when moving from 5 to 0
        if (current === 5 && next === 0) {
            $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
            $(`.slick-slide[data-slick-index="${current}"]`).addClass('lt1');
            $(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
            $(`.slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
        }

        // Clone processing when moving from 0 to 5
        if (current === 0 && next === 5) {
            $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
            $(`.slick-slide[data-slick-index="${current}"]`).addClass('gt1');
            $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
            $(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
        }
    });
    $(".forcustomer-awards-slider").slick({
        infinite: true,
        slidesToShow: 3,
        dots: false,
        arrows: true,
        slideToScroll: 1,
        focusOnSelect: true,
        variableWidth: true,
        prevArrow: $(".forcustomer-awards-prev"),
        nextArrow: $(".forcustomer-awards-next"),
    });
    $('.masters-arrow-prev').on('click', function() {
        $('.slider').slick('slickPrev');
    });
    $('.masters-arrow-next').on('click', function() {
        $('.slider').slick('slickNext');
    });

    $(".seo-form-field").mouseover(function () {
        $(this).find(".seo-h1").hide();
    });
    $(".masters-search-field").mouseover(function () {
        $(this).find(".masters-h2").hide();
    });

    $(".attachments").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".price-card").find(".price-attachments").slideToggle(300);
        let attachmentsImgLength =  $(this).closest(".price-card").find(".price-img").length;
        let text = $(this).text();
        $(this).text(text == "(показать " + attachmentsImgLength + " вложения)" ? "Скрыть" : "(показать " + attachmentsImgLength + " вложения)");
    });

    $(".questions-item").on("click", function () {
        $(this).toggleClass('active').closest(".questions-card").siblings().find(".questions-item").removeClass('active');
        $(this).closest(".questions-card").find(".text-14").slideToggle(300).closest(".questions-card").siblings().find(".text-14").slideUp(300);
    });

    $(".burger").on("click", function () {
        $(this).toggleClass('active');
        $(".header-nav").toggleClass('active');
        if($(".header-nav").hasClass('active')){
            $.scrollLock(true);
        } else {
            $.scrollLock(false);
        }
    });
    $(".header-menu, .header-top, .video-container video, .header-right-item, .header-akk-drop, .feedback-filter").on("click",function (e) {
        e.stopPropagation();
    });
    $('html').on("click",function (e) {
        $(".header-right-item").removeClass('active').removeClass('active-settings');
    });
    $(".header-nav").on("click",function (e) {
        $(".burger").removeClass('active');
        $(".header-nav").removeClass('active');
        $.scrollLock(false);
    });

    if (window.matchMedia("(max-width: 767px)").matches) {
        $(".task .btn-orange").text("Ответить на 5 вопросов");
    } else {
        $(".task .btn-orange").text("Создать задание");
    }

    $(".seo-card-item").mouseover(function () {
        $(".seo-card-inside").removeClass('active');
        $(this).find(".seo-card-inside").addClass('border');
    });

    $(".seo-card-item").mouseout(function () {
        $(".seo-card-inside").removeClass('border');
        $(".seo-card-inside").addClass('active');
    });

    $(".btn-up").click(function () {
       $("html, body").animate({scrollTop:$("html").offset().top},{duration:1E3});
    });

    let selected,
        selected2;
    $('select').mousedown( function(){
        if( $( this ).val() != selected ) {
            selected = $( this ).val();
            selected2=null;
            $(".select").addClass('active');
        } else {
            selected=null;
            $(".select").removeClass('active');
        }
    }).blur(function(){
        if (selected2==selected) {
            selected=null;
            selected2=null;
            $(".select").removeClass('active');
        }
    }).mouseup(function(){
        if( $(this).val() != selected || $(this).val() == selected2 ) {
            selected=null;
            selected2=null;
            $(".select").removeClass('active');
        }
        else {
            selected2=$( this ).val();
            $(".select").addClass('active');
        }
    });

    //notification
    let lengthNotification = $(".notifications-list").length;
    $(".notifications-more-show").text("Показать ещё (" + lengthNotification + ")");

    function hidetail() {
        $(".notifications-container").removeClass("scroll");
        $(".notifications-list").removeClass("notifications-list-last");
        if (lengthNotification > 6) {
            $(".notifications-list").hide();
            for (var i = 1; i <= 6; i++) {
                $(".notifications-list:nth-child(" + i + ")").show();
            }
            $(".notifications-list:nth-child(" + 6 + ")").addClass("notifications-list-last");
        }
    }
    hidetail();
    $(".notifications-more span").click(function () {
        if ($(this).hasClass("notifications-more-show")) {
            $(".notifications-more").addClass("active");
            $(".notifications-container").addClass("scroll");
            $(".notifications-list").removeClass("notifications-list-last");
            $(".notifications-list").show();
        } else {
            if ($(this).hasClass("notifications-more-hide")) {
                $(".notifications-more").removeClass("active");
                hidetail();
            }
        }
    });

    $(".header-right-link").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".header-right-item").toggleClass('active').siblings().removeClass('active').removeClass('active-settings');
    });
    $(".header-akk-img, .header-akk-link").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".header-right-item").toggleClass('active').siblings().removeClass('active').removeClass('active-settings');
        if (window.matchMedia("(max-width: 767)").matches) {
            $(".overlay").addClass('active');
            $.scrollLock(true);
        }
    });

    $(".notifications-setting").on("click", function (e) {
        e.preventDefault();
        $(".header-right-item").removeClass('active');
        $(this).closest(".header-right-item").addClass('active-settings');
    });
    $(".header-settings .back-gray").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".header-right-item").addClass('active');
        $(".header-right-item").removeClass('active-settings');
    });

    $(".seo-form-search .seo-form-input").on("click", function () {
        $(this).closest(".seo-form-search").find("h1.text").hide();
    });
    $(".masters-search-input").on("click", function () {
        $(this).closest(".masters-search").find("h2.text").hide();
    });

    //review
    let lengthReview = $(".review-item").length;
    let lengthHistoryOperations = $(".history-li").length;
    let lengthReviewFilter = $(".filter .text").length;
    let lengthFeedbackServices = $(".finance-feedback-col").length;
    function hidetailReview() {
        if (lengthReview > 3) {
            $(".review .review-item").hide();
            for (var i = 1; i <= 3; i++) {
                $(".review .review-item:nth-child(" + i + ")").show();
            }
        }
        if (lengthReview > 6) {
            $(".customer-review .review-item").hide();
            for (var i = 1; i <= 6; i++) {
                $(".customer-review .review-item:nth-child(" + i + ")").show();
            }
        }
        if (lengthReviewFilter >4) {
            $(".filter .text").hide();
            for (var i = 1; i <= 4; i++) {
                $(".filter .text:nth-child(" + i + ")").show();
            }
        }
        if (lengthFeedbackServices >2) {
            $(".finance-feedback-col").hide();
            for (var i = 1; i <= 2; i++) {
                $(".finance-feedback-col:nth-child(" + i + ")").show();
            }
        }
    }
    hidetailReview();

    $(".finance-feedback .btn-orange").on("click", function (e) {
        e.preventDefault();
        $(".finance-feedback-col").show().removeClass("finance-feedback-last");
        $(this).hide();
    });
    $(".masters-content .btn-orange span").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("btn-show")) {
            $(this).closest(".masters-content").find(".btn-orange").addClass('active');
            $(this).closest(".masters-content").find(".review-item").show();
        } else {
            if ($(this).hasClass("btn-hide")) {
                $(".masters-content .btn-orange").removeClass('active');
                hidetailReview();
            }
        }
    });

    $(".review-more").on("click", function (e) {
        e.preventDefault();
        $(this).slideUp();
        $(".customer-review .review-item").slideDown(300);
    });
    $('.gallery').magnificPopup({
        delegate: "a",
        type: "image",
        mainClass: "popup-buble",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    $('.forcustomer-awards-slider').magnificPopup({
        delegate: "a",
        type: "image",
        mainClass: "popup-buble",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    $('.video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    //user panel
    $(".type-account__title__master").click(function () {
        $(this).parent().removeClass("type-account_customer");
        $(this).parent().addClass("type-account_master");
    });
    $(".type-account__title__customer").click(function () {
        $(this).parent().addClass("type-account_customer");
        $(this).parent().removeClass("type-account_master");
    });
    $(".type-account .type-account__switch").click(function () {
        if ($(this).parent().hasClass("type-account_customer")) {
            $(this).parent().removeClass("type-account_customer");
            $(this).parent().addClass("type-account_master");
        } else {
            $(this).parent().addClass("type-account_customer");
            $(this).parent().removeClass("type-account_master");
        }
    });

    $(".close, .header-akk-container").on("click", function () {
        $(".header-right-item").removeClass('active');
        $.scrollLock(false);
    });
    $(".forcustomer-more").on("click", function (e) {
        e.preventDefault();
        $(this).slideUp(300);
        $(this).siblings().find(".forcustomer-more-drop").slideDown(300);
        $(this).parent().find(".forcustomer-info-content").addClass('active', 300);
    });

    $(".select-item").on("click", function () {
        $(this).closest(".select").toggleClass('active').find(".select-drop").slideToggle(300);
    });
    $(".select-option").on("click", function () {
        let text = $(this).find("p").text();
        let item = $(this).closest(".select").find(".select-item");
        item.text(text);
        $(this).closest(".select").removeClass('active').find(".select-drop").slideUp(300);
    });
    $(".filter .text").on("click", function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
    $(".filter .text.blue").on("click", function (e) {
        e.preventDefault();
        let btn = $(this);
        $(".filter .text").show();
        $(".filter .text").eq(0).addClass('active');
        btn.hide();
    });
    $(".review-next").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".review-row").find(".review-comment").addClass('active', 300);
        $(this).hide();
    });
    $(".review-item .text-small").on("click", function (e) {
        e.preventDefault();
        $(this).hide();
        $(this).closest(".review-item").find(".review-row:last-child").slideToggle(200);
    });

    $("#your-files").on("change", function (evt) {
        let files = evt.target.files; // FileList object
        for (let i = 0, f; f = files[i]; i++) {
            // Only process image files.
            if (!f.type.match('image.*')) {
                alert("Только изображения....");
            }
            let reader = new FileReader();
            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                return function(e) {
                    $(".load .form-input").val(theFile.name);
                };
            })(f);
            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
        return false;
    });

    //status for customer
    $(".forcustomer-busy .text-14").on("click", function () {
        $(".forcustomer-busy").toggleClass('active');
        $(this).find("span").removeClass('green, red');
    });
    $(".forcustomer-busy-drop p").on("click", function () {
        $(".forcustomer-busy span").removeClass('green');
        $(".forcustomer-busy span").removeClass('red');
        let text = $(this).text()
        let textSpan = $(".forcustomer-busy .text-14 span").text();
        $(".forcustomer-busy .text-14 span").text(text);
        $(this).text(textSpan);
        if ($(".forcustomer-busy .text-14 span").text() == "Свободен"){
            $(".forcustomer-busy .text-14 span").addClass('green');
        } else {
            $(".forcustomer-busy .text-14 span").addClass('red');
        }
        $(".forcustomer-busy").removeClass('active');
    });

    $(".tariff").hover(function () {
        $(this).toggleClass('active', 300);
    });
    $(".category-accordion").on("click", function () {
        $(this).toggleClass('active').closest(".category-row").siblings().find(".category-accordion").removeClass('active');
        $(this).closest(".category-row").find(".category-drop").slideToggle(300).closest(".category-row").siblings().find(".category-drop").slideUp(300);
    });

    $(".category-btn").on("click", function () {
        $(this).toggleClass('active');
        if ($(this).text() == "Выбрать"){
            $(this).text('Выбрано');
        } else {
            $(this).text('Выбрать');
        }
    });
    $(".tariff-btn .btn-orange").on("click", function (e) {
        e.preventDefault();
        $(".category").slideDown(300);
        let heightHeader = $(".header").height();
        $("html, body").animate({scrollTop: $(".category").offset().top - heightHeader + "px"}, {duration:1E3});
    });
    $(".category .blue").on("click", function (e) {
        e.preventDefault();
        $(".category").slideUp(300);
    });

    if (window.matchMedia("(max-width: 991px)").matches){
        $(".balance-select-item .text-14").text("Способ пополнения");
    } else {
        $(".balance-select-item .text-14").text("Выберите способ пополнения");
    }


    $(".balance-list").on("click", function () {
        let text = $(this).find(".text-14").text();
        $(this).closest(".balance-select").find(".balance-select-item .text-14").text(text);
        $(this).closest(".balance-select").find(".balance-drop").removeClass('active');
    });

    $(".popular-item").on("click", function (e) {
        e.preventDefault();
        $(this).find(".popular-plus").toggleClass('active').closest(".popular-li").siblings().find(".popular-plus").removeClass('active');
        $(this).parent().find(".popular-drop").slideToggle(300).closest(".popular-li").siblings().find(".popular-drop").slideUp(300);
    });
    if (window.matchMedia("(max-width: 767px)").matches){
        $(".balance-select").on("click", function (e) {
            e.preventDefault();
            $(this).toggleClass('active').closest(".balance").siblings().find(".balance-select").removeClass('active');
        });
    } else {
        $(".balance-select").onmouseover(function () {
            $(this).closest(".balance-select").find(".balance-drop").addClass('active');
        });
        $(".balance-select").onmouseout(function () {
            $(this).closest(".balance-select").find(".balance-drop").removeClass('active');
        });
    }
});
$(document).ready(function () {
    var ul = document.getElementById('history-ul');
    docfrag = document.createDocumentFragment();

    var products = [];

    function generateProducts (cout) {
        var newArr = [];
        for (var i = 0; i < cout; i++) {
            newArr.push({
                id: i
                ,   type: 'Пополнить счет'
                ,   remark: 'Зачисление по счету №35447' + i
                ,   price: 100 + (i * 2)
                ,   category: i * 4
            });
        }
        return newArr;
    }

    products = generateProducts(52);

    function getProductsListRange (products, from, to) {
        var template = [];
        var e, a;

        if (products.length <= to) { to = products.length;}

        for (var i = from; i < to; i++) {
            e = products[i]; // i объект продукта
            a = document.createElement("li");
            a.className = "history-li";
            a.innerHTML = '<div class="history-row"><div class="history-row-item"><p class="text">'+ e.type +'</p><p class="text">' + e.remark + '</p></div><div class="history-row-item"><p class="text">14.09.2018.</p><p class="text change">900 р.</p></div></div>';
            template.push(a);
        }

        if (products.length > to) {
            var btn = document.createElement('a');
            btn.innerHTML = 'Показать ещё (10)';
            btn.addEventListener('click', function () {
                productsHTML(getProductsListRange(products, to, to + 10), to, to + 10);
                this.parentElement.removeChild(this);
            });
            template.push(btn);
        }

        return template;
    }

    function productsHTML(list, from, to) {
        var listHtml = list;

        function viewProducts (list) {
            for (var i = 0; i < list.length; i++) {
                docfrag.appendChild(list[i]);
            }
            ul.appendChild(docfrag);
        }

        viewProducts(listHtml);
    }

    productsHTML(getProductsListRange(products, 0, 5), 0, 10);
});
$(document).ready(function () {
    //TASK LIST MASTER
    $(".dropdown-lv2-item, .dropdown-lv3-back").click(function () {
        let thisItem =  $(this).closest(".dropdown-lv2-categories");
        let index = $(this).index();
        $(".dropdown-lv3").eq(index).addClass('active').siblings().removeClass('active');
        let maxscroll = thisItem[0].scrollWidth;
        if(thisItem.scrollLeft() != 0){
            thisItem.animate({
                scrollLeft: -1 * maxscroll
            }, 500);
        }else {
            thisItem.animate({
                scrollLeft: maxscroll
            }, 500);
        }
    });
    if (window.matchMedia("(min-width: 768px)").matches) {
        $(".master-filter-main").on("click", function () {
            $(this).toggleClass('active');
            $(".dropdown").slideToggle(300);
        });
    }
    $(".dropdown-item").on("click", function () {
        $(this).toggleClass('active');
        $(this).closest(".dropdown-list").find(".dropdown-lv2").slideToggle(300);
    });
    $(".delete, .master-close").on("click", function () {
        $(this).parent().remove();
    });
    $( function() {
        $( ".range" ).slider({
            range: "min",
            value: 37,
            min: 1,
            max: 200,
            slide: function( event, ui ) {
                $( ".amount" ).val(ui.value);
            }
        });
        $( ".amount" ).val($( ".range" ).slider( "value" ));
    } );
    $(".dropdown-row input").keyup(function(){
        var value1=$(".amount").val();
        $(".range").slider("value" , value1);
    });
    $( function() {
        $( ".range-slider" ).slider({
            range: true,
            min: 0,
            max: 9000,
            values: [ 500, 5000 ],
            slide: function( event, ui ) {
                $( ".amount1" ).val( ui.values[ 0 ]);
                $( ".amount2" ).val( ui.values[ 1 ]);
            }
        });
        $( ".amount1" ).val( $( ".range-slider" ).slider( "values", 0 ));
        $( ".amount2" ).val( $( ".range-slider" ).slider( "values", 1 ));
    });
    $(".amount1").keyup(function() {
        $(".range-slider").slider('values',0,$(this).val());
    });
    $(".amount2").keyup(function() {
        $(".range-slider").slider('values',1,$(this).val());
    });

    $(".sorting-item").on("click", function () {
        $(this).toggleClass('active').closest(".sorting-select").siblings().find(".sorting-item").removeClass('active');
        $(this).parent().find(".sorting-drop").slideToggle(300).closest(".sorting-select").siblings().find(".sorting-drop").slideUp(300);
    });
    $("body, html").on("click", function () {
        $(".sorting-item").removeClass('active');
        $(".select").removeClass('active');
        $(".sorting-drop").slideUp(300);
        $(".select-drop").slideUp(300);
    });
    $(".sorting-select, .text-small, .card-mid, .master-filter, .select").on("click", function (e) {
        e.stopPropagation();
    });

    $(".card").on("click", function (e) {
        e.preventDefault();
        let card = $(this);
        card.toggleClass('active').siblings().removeClass('active');
        card.find(".card-mid").slideToggle(300).closest(".card").siblings().find(".card-mid").slideUp(300);
        card.find(".card-bottom").toggleClass('active').closest(".card").siblings().find(".card-bottom").removeClass('active');
        if (window.matchMedia("(max-width: 767px)").matches){
            card.find(".card-name").slideToggle(300).closest(".card").siblings().find(".card-name").slideUp(300);
        }
    });
    if (window.matchMedia("(max-width: 767px)").matches){
        $(".master-sticky, .master-filter-main .dropdown-plus, .feedback-filter-close").on("click", function () {
            $(".master-sticky").removeClass('active');
            $.scrollLock(false);
        });
    }

    $(".master-btns-filter").on("click", function () {
        $(".master-sticky").addClass('active');
        $.scrollLock(true);
    });

    //map
    $(".map-expand").on("click", function () {
        $(".master-top, .master-right").toggleClass('active');
        if (window.matchMedia("(max-width: 767px)").matches){
            $(".master-right-map").toggleClass('active');
            $("html, body").animate({scrollTop:$(".master-right-map").offset().top - 40 + "px"}, {duration:1E3});
        }
    });
    $(".master-btns-map").on("click", function () {
        $(".master-right-map").slideToggle(300);
    });
});
$(document).ready(function () {
    //FEEDBACK
    $(".feedback-close").on("click", function () {
        $(this).closest(".feedback-block").hide();
    });
});
$(document).ready(function () {
    var waypoint = new Waypoint({
        element: document.getElementById('seo-sixth'),
        handler: function() {
            setTimeout(function () {
                $(".seo-sixth .seo-form-input").attr("placeholder", "");
                $(".seo-sixth .text").addClass('active');

            },1000);
            setTimeout(function () {
                $(".seo-sixth .text").removeClass('active');
                $(".seo-sixth .seo-form-input").attr("placeholder", "Начните вводить название услуги...");
            }, 5000);
            this.destroy();
        },
        offset: '70%'
    });
});
