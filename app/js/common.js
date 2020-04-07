$(document).ready(function () {
    var swiper = new Swiper('.forcustomer-awards-slider', {
        slidesPerView: "auto",
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: '.forcustomer-awards-next',
            prevEl: '.forcustomer-awards-prev',
        },
    });
    var swiper = new Swiper('.slider', {
        effect: 'coverflow',
        centeredSlides: true,
        centeredSlidesBounds: true,
        setWrapperSize: true,
        slidesPerView: 1.5,
        loop: true,
        speed: 1000,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 190,
            modifier: 2,
            slideShadows : false
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },

    });

    $('.masters-arrow-prev').on('click', function() {
        swiper.slidePrev();
    });
    $('.masters-arrow-next').on('click', function() {
        swiper.slideNext();
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
        if (window.matchMedia("(max-width: 991px)").matches) {
            if ( $(".header-right-item").hasClass('active')){
                $(".overlay").addClass('active');
                $.scrollLock(true);
            } else {
                $(".overlay").removeClass('active');
                $.scrollLock(false);
            }
        }
    });
    $(".overlay").on("click", function (e) {
        $(this).removeClass('active');
        $(".header-right-item").removeClass('active').removeClass('active-settings');
        $(".home__catalog-btn").removeClass('open');
        $(".home__catalog-shadow").removeClass('active');
        $(".home__catalog__wrap").removeClass('active');
        $.scrollLock(false);
    });
    $(".header-akk-img, .header-akk-link").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".header-right-item").toggleClass('active').siblings().removeClass('active').removeClass('active-settings');
        if (window.matchMedia("(max-width: 767px)").matches) {
            if ( $(".header-right-item").hasClass('active')){
                $.scrollLock(true);
            } else {
                $.scrollLock(false);
            }
        }
        if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) {
            if ( $(".header-right-item").hasClass('active')){
                $.scrollLock(true);
                $(".overlay").addClass('active');
            } else {
                $.scrollLock(false);
                $(".overlay").removeClass('active');
            }
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
    $("[js-popup-video]").magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
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
    $(".tariff-base").hover(function () {
        $(this).removeClass('active', 300);
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
        $(".balance-select").mouseover(function () {
            $(this).closest(".balance-select").find(".balance-drop").addClass('active');
        });
        $(".balance-select").mouseout(function () {
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
    productsHTML(getProductsListRange(products, 1, 5), 1, 10);
});
$(document).ready(function () {

    //TASK LIST MASTER
    $(".sorting-row").on("click", function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $(".sorting-drop").slideUp(300);
        $(".sorting-item").removeClass('active');
    });
    $(".dropdown-lv2-item, .dropdown-lv3-back").on("click", function () {
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
            max: 300,
            slide: function( event, ui ) {
                $( ".amount" ).val(ui.value);
            }
        });
        $( ".amount" ).val($( ".range" ).slider( "value" ));
    } );
    $(".amount").keyup(function() {
        $(".range").slider('value', $(this).val());
    });

    $(".range-slider-row input, .amount").on("click", function () {
        $(this).val('');
    });
    $( function() {
        $( ".range-slider" ).slider({
            range: true,
            min: 0,
            max: 999,
            values: [ 100, 400 ],
            slide: function( event, ui ) {
                $( ".amount1" ).val(ui.values[ 0 ]);
                $( ".amount2" ).val(ui.values[ 1 ]);
            }
        });
        $( ".amount1" ).val( $( ".range-slider" ).slider( "values", 0 ));
        $( ".amount2" ).val($( ".range-slider" ).slider( "values", 1 ));
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
    //MESSAGES
    $(".header__user-panel__messages").click(function () {
        $.scrollLock(true);
        if ($(".messages").hasClass("active")) {
            $(".messages").removeClass("active");
            $(".header__user-panel__messages").removeClass("active");
            if ($(window).width() <= 500) {
                $("body, html").css("overflow", "auto");
            }
        } else {
            $(".messages").addClass("active");
            $(".header__user-panel__messages").addClass("active");
            if ($(window).width() <= 500) {
                $("body, html").css("overflow", "hidden");
            }
        }
    });
    $(".messages__close").click(function () {
        $.scrollLock(false);
        $(".messages").removeClass("active");
        $(".overlay").removeClass('active');
        $(".header__user-panel__messages").removeClass("active");
        if ($(window).width() <= 500) {
            $("body, html").css("overflow", "auto");
        }
    });
    $(document).mouseup(function (e) {
        var div = $(".messages-container");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0 && !$(".header__user-panel__messages svg").is(e.target) &&
            $(".header__user-panel__messages svg").has(e.target).length === 0) {
            $(".messages").removeClass("active");
            $(".header__user-panel__messages").removeClass("active");
        }
    });
    var custom2 = new Scrollbot(".messages-content__chats__list");
    var custom3 = new Scrollbot(".messages-content__user-chat-bar");
    custom3.refresh();
    $(".messages-content__chats__item").hide();
    for (var i = 1; i <= 8; i++) {
        $(".messages-content__chats__list__items .messages-content__chats__item:nth-child(" + i + ")").show();
    }
    $(".messages-content__chats__show-all span").click(function () {
        $(".messages-content__chats__show-all").hide();
        $(".messages-content__chats__list__items .messages-content__chats__item").show();
        $(".messages-content__chats__list").css("height", "calc(100% - 45px)");
        custom2.refresh();
    });
    $(".messages-content__user-chat__panel__back").click(function () {
        $(".messages-content").removeClass("active");
    });
    $(".messages-content__chats__item").click(function (e) {
        var div = $(".messages-content__user-chat__panel__menu-drop");
        if (!$(".messages-content__chats__item__nickname").is(e.target) &&
            !$(".messages-content__chats__item__project").is(e.target)) {
            /*-----
            Перебиваю переход по ссылке,
            по необходимости отключить
            -----*/
            event.preventDefault();
            $(".messages-content").addClass("active");
            custom3.refresh();
        }
    });
    $(".messages-content__user-chat__panel__menu").click(function () {
        if ($(".messages-content__user-chat__panel__menu").hasClass("active")) {
            $(".messages-content__user-chat__panel__menu").removeClass("active");
            $(".messages-content__user-chat__panel__menu-drop").slideUp(300);
        } else {
            $(".messages-content__user-chat__panel__menu").addClass("active");
            $(".messages-content__user-chat__panel__menu-drop").slideDown(300);
        }
    });
    $(document).mouseup(function (e) {
        var div = $(".messages-content__user-chat__panel__menu-drop");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0 && !$(".messages-content__user-chat__panel__menu").is(e.target) &&
            $(".messages-content__user-chat__panel__menu").has(e.target).length === 0) {
            div.slideUp(300);
            $(".messages-content__user-chat__panel__menu").removeClass("active");
        }
    });
    //WHAT`S NEW
    var custom4 = new Scrollbot(".whats-new__content");
    custom4.refresh();
    $(".user-panel__whats-new").click(function () {
        $(".whats-new").addClass("active");
        custom4.refresh();
        $.scrollLock(true);

    });
    $(".whats-new__close").click(function () {
        $(".whats-new").removeClass("active");
        $.scrollLock(false);
    });
    $(document).mouseup(function (e) {
        var div = $(".whats-new__container");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $(".whats-new").removeClass("active");
            // $.scrollLock(false);
        }
    });
});
$(document).ready(function () {
    //FEEDBACK
    $(".feedback-close").on("click", function () {
        $(this).closest(".feedback-block").hide();
    });

    //HOME catalog
    $(".home__catalog-btn").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $(".overlay").toggleClass('active');
        $(".home__catalog__wrap").toggleClass('active');
        $(".home__catalog-shadow").toggleClass('active');

        if ($(this).hasClass('open')) {
            $(".header").css("position", "inherit");
            $("html, body").animate({scrollTop:$(".home__catalog").offset().top},{duration:500});
            setTimeout(function () {
                $.scrollLock(true);
            },500)

        } else {
            $(".header").css("position", "sticky");
            $.scrollLock(false);
        }
    });
    if (window.matchMedia("(min-width: 768px)").matches) {
        $(".home__catalog-left li").hover(function () {
            $(this).addClass('active').siblings().removeClass('active');
            let index = $(this).index();
            $(".home__catalog-services").eq(index).addClass('active').siblings().removeClass('active');
        });
    } else {
        $(".home__catalog-left li").click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            let index = $(this).index();
            $(".home__catalog-services").eq(index).addClass('active').siblings().removeClass('active');
        });


            $(".home__catalog-left li").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                let index = $(this).index();
                $(".home__catalog-services").eq(index).addClass('active').siblings().removeClass('active');
                let thisItem =  $(this).closest(".home__catalog__wrap");
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
            $(".home__back").click(function () {
                let thisItem =  $(this).closest(".home__catalog__wrap");
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


    }

    $(".home__task-list, .home__review .customer-review").scroll(function () {
        if (this.scrollHeight - this.scrollTop === this.clientHeight) {
            $(".home__task").addClass('active');
            $(".home__review-overlay").addClass('active');
        } else {
            $(".home__task").removeClass('active');
            $(".home__review-overlay").removeClass('active');
        }
    });
    $(".home__catalog-drop").click(function (e) {
        e.preventDefault();
        $(this).hide();
        $(".home__catalog-list li").addClass('active');
    });
});
$(document).ready(function () {
    var waypoint = new Waypoint({
        element: document.getElementById('animate-text'),
        handler: function() {
            setTimeout(function () {
                //SEO PAGE
                $(".seo-sixth .seo-form-input").attr("placeholder", "");
                $(".seo-sixth .text").addClass('active');

                //HOME PAGE
                $(".home__master-form .seo-form-input").attr("placeholder", "");
                $(".home__master-form .text").addClass('active');
            },1000);
            setTimeout(function () {
                //SEO PAGE
                $(".seo-sixth .text").removeClass('active');
                $(".seo-sixth .seo-form-input").attr("placeholder", "Начните вводить название услуги...");
            }, 5000);
            setTimeout(function () {
                //HOME PAGE
                $(".home__master-form .text").removeClass('active');
                $(".home__master-form .seo-form-input").attr("placeholder", "Начните вводить здесь");
            }, 4000);
            this.destroy();
        },
        offset: '70%'
    });
});
