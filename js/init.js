$(window).load(function(){

    $(".loader-onb").hide();
    $("div.main").show(1000);
    $("header, section, footer").show();

    $(function(){
        var current = -1;
        var r = Raphael('map', 630, 430),
            attrs = {
                fill: '#fff',
                select: '#C93724',
                stroke: '#abcdef',
                'stroke-width': 1,
            },
            arr = new Array();
        nms = new Array();
        alt = new Array();
        for (var region in paths) {
            var obj = r.path(paths[region].path);
            obj.attr(attrs);
            arr[obj.id] = region;
            nms.push(paths[region].name);
            alt.push(paths[region].alt);
            obj.hover(function(){
                $("#nms").html(nms[this.id]);
                $("#nms").addClass("ani");
            }, function(){
                $("#nms").removeClass("ani");
            })
                .click(function(){
                    $("#alt").html(alt[this.id]);
                    $("#alt").addClass("altAni");
                    current = this.id;
                    $("path").attr("fill", "#fff");
                    this.animate({
                        fill: attrs.select
                    }, 100);
                });
        }

        /*license open*/
        $(".menu").click(function() {
            $(".license-wrap").show();
            $(".popup-dark").addClass("open");
            $(".license").addClass("open");
        });
        $(".pa-close").click(function () {
            $(".popup-dark").removeClass("open");
            $(".license").removeClass("open");
            $(".license-wrap").hide();
        })
    });

    function find() {
        var i=0;
        for (var region in paths) {
            var a = $("#i1").val();
            a= a.toUpperCase();
            if( ((paths[region].alt).indexOf(a)) > 0 ) {

                $("#alt").html(paths[region].alt);
                $("#alt").addClass("altAni");

                $("path").attr("fill", "#fff");
                $("path:nth-child("+(i+3)+")").attr("fill", "#C93724");
            }
            i++;
        }
    }

});