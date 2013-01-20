/*!
 * Flying Table Head jQuery plugin v1.0.2
 * http://www.enjoyphp.com/
 *
 * Copyright 2012, Wang Shuai
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date: 2012-09-30
 */
(function($){
	$.fn.extend({
		flying_table_head:function(options){
			var i=1;
			var opts = $.extend({}, $.fn.flying_table_head.defaults, options);
			return this.each(function() {
				var flying_table_head_table = $(this);
				var flying_table_head_tr = flying_table_head_table.find(opts.element);
                if(flying_table_head_tr.size()){
                    flying_table_head_table.data("flying_table_head_id",i);
                    flying_table_head_table.flying_table_head_fixeder(options);
                    var flying_table_head_fixed = $("#flying_table_head_" + i);
                    i++;
                    var scrollAct=function(){
                        var a = $(document).scrollTop();
                        var b = flying_table_head_tr.offset().top;
                        var c = flying_table_head_table.offset().top+flying_table_head_table.outerHeight();
                        var d = $(document).scrollLeft();
                        var e = flying_table_head_fixed.outerHeight();
                        flying_table_head_fixed.css("left",flying_table_head_tr.offset().left-d);
                        if((a>b) && (a<c-e)){
                            flying_table_head_fixed.show();
                        }else{
                            flying_table_head_fixed.hide();
                        }
                        return true;
                    }
                    $(window).scroll(scrollAct).resize(function(){
                        flying_table_head_table.flying_table_head_fixeder(options);
                        return true;
                    });

                }
                return true;
			});
		},
		flying_table_head_fixeder:function(options){
			var opts = $.extend({}, $.fn.flying_table_head.defaults, options);
			var flying_table_head_table = $(this);
			var flying_table_head_tr = flying_table_head_table.find(opts.element);
			var i=flying_table_head_table.data("flying_table_head_id");


			var flying_table_head_fixed= $("#flying_table_head_" + i);
			var table_offset = flying_table_head_table.offset();
			var table_top = table_offset.top;
			var table_left = table_offset.left;
			var table_border = flying_table_head_table.attr("border");
			table_border = (table_border==undefined ||table_border.length==0)?0:parseInt(table_border);
			var cellspacing = flying_table_head_table.attr("cellspacing");
			cellspacing = (cellspacing==undefined ||cellspacing.length==0)?0:parseInt(cellspacing);


			if(flying_table_head_tr.size()>0){
				var tr_height=0;
				if(flying_table_head_table.find("tr:first").is(opts.element)){
					prev_height=0;
				}else{
					var prev_height= flying_table_head_tr.offset().top-flying_table_head_table.children(":first").offset().top;
				}
                if(flying_table_head_fixed.size()==0){
                    flying_table_head_fixed = $("<div class='flying_table_head_div' id='flying_table_head_"+i+"'></div>");
                    flying_table_head_fixed.appendTo("body");

                }else{
                    flying_table_head_fixed.show().empty();
                }
				flying_table_head_fixed.css({
						"width":flying_table_head_tr.outerWidth(),
						"position":'fixed',
						"left":flying_table_head_tr.offset().left,
						"top":opts.top+"px"
				});
				flying_table_head_tr.each(function(){
					tr_height+=$(this).outerHeight()+cellspacing;
					$(this).children().each(function(){
						var $this = $(this);
						var this_offset = $this.offset();
						var this_top = this_offset.top-table_top-prev_height-table_border-1;
						var this_left = this_offset.left-table_left-table_border-1;
						var innerDiv=$("<div>"+$this.html()+"</div>").css({
                            "padding":$this.css("padding"),
							"font-weight":$this.css("font-weight"),
							"font-size":$this.css("font-size"),
							"text-align":$this.css("text-align")
                        });
						var subDiv=$("<div class='flying_table_head_subdiv'></div>").css({
							"float":"left",
							"position":"absolute",
							"left":this_left+"px",
							"top":this_top+"px",
							"width":$this.innerWidth(),
							"height":$this.innerHeight()

						}).appendTo(flying_table_head_fixed).append(innerDiv);
						var marginTop = (subDiv.innerHeight()-innerDiv.innerHeight()-$this.css("padding").replace("px",""))/2;
						innerDiv.css({
                            "margin-top":marginTop+"px"
                        });
                        return true;
					});
                    return true;
				});
				flying_table_head_fixed.css("height",tr_height+cellspacing);
				flying_table_head_fixed.hide();
				if(cellspacing+table_border==1){
					flying_table_head_fixed.css({"border":"none"});
				}
			}

			return true;
		}

	});
	$.fn.flying_table_head.defaults = {
		element: ".flying_table_head",
		top:0
	};

})(jQuery);
