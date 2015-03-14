;(function(obj){
	/*头部*/
	var head=function(){
			this.el=".header";
			this.type=1;/*0首页1其它*/
			this.data="";
			this.render=function(){
				if(this.type==1){
					$(this.el).html('<div class="headTitle">'+this.data+'</div>');
				}else{
					$(this.el).html('<img class="shopName" src="css/images/logo.gif"/>'+
			    	'<div class="manuButton">'+
			        	'<div></div>'+
			            '<div></div>'+
			            '<div></div>'+
			        '</div>'+
			    	'<div class="menu">'+
			        	'<a href="" class="crazySale">疯狂秒杀</a>'+
			            '<a href="" class="sale">内部清仓</a>'+
			            '<a style="border:none" href="" class="shop">品牌速递</a>'+
			        '</div>');
					$(this.el).find(".manuButton").click(function(){
						$(".menu").toggle().animate(slow);
						})
					$(this.el).find(".crazySale").unbind("click").bind("click",function(e){
							app.fns.get("stopBubble")(e);
							app.objs.route.navigate("?page=crazySale",{trigger: true});
					});
					$(this.el).find(".sale").unbind("click").bind("click",function(e){
							app.fns.get("stopBubble")(e);
							app.objs.route.navigate("?page=sale",{trigger: true});
					})
					$(this.el).find(".shop").unbind("click").bind("click",function(e){
							app.fns.get("stopBubble")(e);
							app.objs.route.navigate("?page=shop",{trigger: true});
					})
				}
				
			}
		}
	/*脚部*/
	var foot=function(){
		this.el=".footer";
		this.type=1;/*0购物,1普通*/
		this.data={};
		this.render=function(){
			if(this.type==1){
				$(this.el).html('<img class="phoneIcon" src="css/images/phone.gif"/>'+
    				'<div class="phoneNumber">4006-520-250</div>'+
    				'<div class="ICP">粤ICP备14086763号—1</div>')
				$(this.el).addClass("default");
				$(this.el).removeClass("shopping");
			}else{
				$(this.el).html('<div class="choose choose_0"></div>'+
			       '<div class="selectAll">全选</div>'+
			       '<div class="countPrice">￥656-￥50=</div>'+
			       '<div class="totalPrice">￥606元</div>'+
			       '<div class="goToPay">去结算</div>'+
			       '<div class="clear"></div>');
				$(this.el).addClass("shopping");
				$(this.el).removeClass("default");
				$(this.el).find(".goToPay").unbind("click").bind("click",function(){
					app.objs.route.navigate("?page=pay",{trigger: true});
				})
			}
		}
	}

	/*滚动图*/
	var banner=function(){
		this.el=".main";
		this.type=1;/*1首页,0商品详情*/
		this.data={};
		this.render=function(){
			if(this.type==1){
				var newBanner=$('<div class="banner">'+
						    		'<ul class="bannerCenter">'+
						    			'<img class="bannerPoint" src="css/images/banner00.gif"/>'+
						    			'<img class="bannerPoint" src="css/images/banner01.gif"/>'+
						    			'<img class="bannerPoint" src="css/images/banner00.gif"/>'+
						    			'<div class="clear"></div>'+
						    		'</ul>'+
						    		'<div class="bannerCount bannerCount0 hl"></div>'+
						    		'<div class="bannerCount bannerCount1"></div>'+
						    		'<div class="bannerCount bannerCount2"></div>'+
						    		'<button class="bannerLeft"></button>'+
						    		'<button class="bannerRight"></button>'+
						    	'</div>').appendTo($(this.el));
				newBanner.find(".bannerCenter").data("rollNum",0);
				var args={
							    iniL:30,//X方向滑动的最小距离
							    iniT:50,//Y方向滑动的最大距离
							    eCallback:function(tPoint){
							    	console.log(tPoint);
							        switch(tPoint.direction){
							            case "left":
							                console.log("left");
							                if($(".bannerCenter").data("rollNum")!=2){
							                	$(".bannerCenter").data("rollNum",$(".bannerCenter").data("rollNum")+1);
							                }
							                break;
							            case "right":
							                console.log("right");
							                if($(".bannerCenter").data("rollNum")!=0){
							                	$(".bannerCenter").data("rollNum",$(".bannerCenter").data("rollNum")-1);
							                }
							        }
							        $(".bannerCenter").animate({"left":-1*app.fns.get("px2rem")($(".bannerCenter").data("rollNum")*$(window).width())+"rem"})
							        $(".bannerCount").removeClass("hl");
							        $(".bannerCount"+$(".bannerCenter").data("rollNum")).addClass("hl");
							       resizeArry.banner=function(){
							       	$(".bannerCenter").css("left",-1*app.fns.get("px2rem")($(".bannerCenter").data("rollNum")*$(window).width())+"rem");
							       }
							    }
							}
				newBanner.find(".bannerCenter").Swipe(args);

			}else{
				var newBanner=$('<div class="goodDetailBanner">'+
					                '<ul class="goodDetailBannerCenter">'+
					                    '<img class="goodDetailBannerPoint" src="css/images/banner00.gif"/>'+
					                    '<img class="goodDetailBannerPoint" src="css/images/banner01.gif"/>'+
					                    '<img class="goodDetailBannerPoint" src="css/images/banner00.gif"/>'+
					                    '<img class="goodDetailBannerPoint" src="css/images/banner01.gif"/>'+
					                    '<div class="clear"></div>'+
					                '</ul>'+
					                '<div class="goodDetailBannerCount goodDetailBannerCount0 hl"></div>'+
					                '<div class="goodDetailBannerCount goodDetailBannerCount1"></div>'+
					                '<div class="goodDetailBannerCount goodDetailBannerCount2"></div>'+
					                '<div class="goodDetailBannerCount goodDetailBannerCount3"></div>'+
					                '<div class="clear"></div>'+
					            '</div>').appendTo($(this.el));

				newBanner.find(".goodDetailBannerCenter").data("rollNum",0);
				var args={
							    iniL:30,//X方向滑动的最小距离
							    iniT:50,//Y方向滑动的最大距离
							    eCallback:function(tPoint){
							    	console.log(tPoint);
							        switch(tPoint.direction){
							            case "left":
							                console.log("left");
							                if($(".goodDetailBannerCenter").data("rollNum")!=3){
							                	$(".goodDetailBannerCenter").data("rollNum",$(".goodDetailBannerCenter").data("rollNum")+1);
							                }
							                break;
							            case "right":
							                console.log("right");
							                if($(".goodDetailBannerCenter").data("rollNum")!=0){
							                	$(".goodDetailBannerCenter").data("rollNum",$(".goodDetailBannerCenter").data("rollNum")-1);
							                }
							        }
							        $(".goodDetailBannerCenter").animate({"left":-1*app.fns.get("px2rem")($(".goodDetailBannerCenter").data("rollNum")*$(window).width())+"rem"})
							        $(".goodDetailBannerCount").removeClass("hl");
							        $(".goodDetailBannerCount"+$(".goodDetailBannerCenter").data("rollNum")).addClass("hl");
							       resizeArry.banner=function(){
							       	$(".goodDetailBannerCenter").css("left",-1*app.fns.get("px2rem")($(".goodDetailBannerCenter").data("rollNum")*$(window).width())+"rem");
							       }
							    }
							}
				newBanner.find(".goodDetailBannerCenter").Swipe(args);

			}
		}
	}
	/*商品列表*/
	var goodList=function(){
		this.el=".main";
		this.data=[];
		this.type=1;/*0首页,1其它页(双列)*/
		this.render=function(){
			var that=this;
			if(this.type==1){
				var newGoodList=$('<div class="doubleGoodList"></div>').appendTo($(this.el));
				$.each(this.data,function(index,value){
					var newPoint=$('<div class="doubleGoodPoint even">'+
				                '<img class="doubleGoodImage" src="'+value.image+'"/>'+
				                '<div class="doubleGoodName">'+value.name+'</div>'+
				                '<div class="clear"></div>'+
				                '<div class="doubleGoodPrice">'+value.price+'</div>'+
				                '<div class="doubleGoodCostPrice">'+value.costPrice+'</div>'+
				                '<div class="doubleGoodPay">立即抢购</div>'+
				                '<div class="clear"></div>'+
				            '</div>').appendTo(newGoodList);
					newPoint.unbind("click").bind("click",function(){
						app.objs.route.navigate("?page=goodDetail",{trigger: true});
					});
				});
				
			}else{
				var newGoodList=$('<ul class="goodList"></ul>').appendTo($(this.el));
				$.each(this.data,function(index,value){
					var newPoint=$('<li class="goodPoint">'+
						    			'<img class="image" src="'+value.image+'"/>'+
						    			'<div class="description">'+value.des+'</div>'+
						    			'<div class="clear"></div>'+
						    			'<div class="price">'+value.price+'</div>'+
						    			'<div class="costPrice">'+value.costPrice+'</div>'+
						    			'<button class="pay">立即抢购</button>'+
						    			'<div class="clear"></div>'+
						    		'</li>').appendTo(newGoodList)
					newPoint.unbind("click").bind("click",function(){
						app.objs.route.navigate("?page=goodDetail",{trigger: true});
					});

				})
			}

		}
	}
	/*购买列表*/
	var shoppingList=function(){
		this.el=".main";
		this.type=1/*0购物车1结算2成交纪录3待付款*/;
		this.data={};
		this.render=function(){
			var choose="";
			var remove="";
			var count="";
			var sale="";
			if(this.type==0){
				choose='<div class="choose choose_0"></div>';
				remove='<img class="shoppingPointRemove" src="css/images/false.gif"/>';
				count='<div class="shoppingPointCount">'+
					    					'<div class="shoppingPointAdd">+</div>'+
					    					'<div class="shoppingPointNum">1</div>'+
					    					'<div class="shoppingPointSub">-</div>'+
					    					'<div class="clear"></div>'+
					    				'</div>'
			}
			if(this.data.sale){
				sale='<div class="clear"></div>'+
						    		'<div class="shoppingListTap">'+
						    			this.data.sale+
						    		'</div>'+
						    		'<div class="clear"></div>'
			}
			var newShoppingList=$('<div class="shoppingList">'+
						    		'<div class="shoppingListHeadFream">'+
						    			'<div class="shoppingListHead">'+
							    			choose+
							    			'<div class="shoppingListTitle"> '+this.data.title+'</div>'+
							    			'<div class="clear"></div>'+
						    			'</div>'+
						    		'</div>'+
						    		sale+
					    		'</div>').appendTo(this.el);
			$.each(this.data.point,function(index,value){
				var newPoint=$('<div class="shoppingPoint">'+
					    			choose+
					    			'<img class="shoppingPointIcon" src="'+value.image+'"/>'+
					    			'<div class="shoppingPointRight">'+
					    				'<div class="shoppingPointTitle">'+value.name+'</div>'+
					    				'<div class="shoppingPointType">颜色分类:'+value.color+'</div>'+
					    				'<div class="shoppingPointSize">尺寸:'+value.size+'</div>'+
					    				'<div class="clear"></div>'+
					    				'<div class="shoppingPointPrice">'+value.price+'</div>'+
					    				'<div class="shoppingPointCostPrice">'+value.costPrice+'</div>'+
					    				'<div class="clear"></div>'+
					    				remove+
					    				count+
					    			'</div>'+
					    			'<div class="clear"></div>'+
					    		'</div>').appendTo(newShoppingList)
			})
    		if(this.type==3){
    			var pointFoot=$('<div class="shoppingListFootFream">'+
					                '<div class="shoppingListHead">'+
					                    '<div class="footCountPay">￥656-￥50=</div>'+ 
					                    '<div class="footTotalPay">￥606</div>'+
					                    '<div class="footPayButton">付款</div>'+
					                    '<div class="footCancelButton">取消</div>'+           
					                    '<div class="clear"></div>'+
					                '</div>'+
					            '</div>').appendTo(newShoppingList)
    		}
    		if(this.type==1){
    			var pointFoot=$('<div class="shoppingListFootFream">'+
					                '<div class="shoppingListHead">'+
					                    '<div class="footCountPay">￥656-￥50=</div>'+ 
					                    '<div class="footTotalPay">￥606</div>'+         
					                    '<div class="clear"></div>'+
					                '</div>'+
					            '</div>').appendTo(newShoppingList)
    		}
    		$(this.el).find(".choose").unbind("click").bind("click",function(){
    			if($(this).data("choose")){
    				$(this).data("choose",false)
    				$(this).removeClass("choose_1")
    				$(this).addClass("choose_0")
    			}else{
    				$(this).data("choose",true)
    				$(this).removeClass("choose_0")
    				$(this).addClass("choose_1")
    			}
    		})
    		$(this.el).find(".shoppingPointRemove").unbind("click").bind("click",function(){
    			$(this).parents(".shoppingPoint").remove();
    		})
    		$(this.el).find(".shoppingPointAdd").unbind("click").bind("click",function(){
    			var value=Number($(this).parent().find(".shoppingPointNum").html());
    			$(this).parent().find(".shoppingPointNum").html(value+1)
    		})
    		$(this.el).find(".shoppingPointSub").unbind("click").bind("click",function(){
    			var value=Number($(this).parent().find(".shoppingPointNum").html());
    			if(value!=1){
    				$(this).parent().find(".shoppingPointNum").html(value-1)
    			}
    		})
    		$(this.el).find(".footPayButton").unbind("click").bind("click",function(){
    			app.objs.route.navigate("?page=pay",{trigger: true});
    		})
		};
	}
	/*地址列表*/
	var placeList=function(){
		this.el=".main";
		this.type=1;/*0没修改按钮1有修改按钮*/
		this.data=[];
		this.render=function(){
			var button='<div class="editPlace">修改</div>'
			var newPlaceList=$('<div class="placeList"></div>').appendTo($(this.el));
			$.each(this.data,function(index,value){
				var newPoint=$('<div class="placePoint">'+
					                '<div class="clear"></div>'+
					                '<div class="choose choose_0"></div>'+
					                '<div class="defaultPlace">设为默认收件地址</div>'+
					                '<div class="clear"></div>'+
					                '<div class="placeName">'+value.name+'</div>'+
					                '<div class="placePhone">'+value.phone+'</div>'+
					                '<div class="clear"></div>'+
					                '<div class="placeDetail">'+
					                    value.place+
					                '</div>'+
					            '</div>').appendTo(newPlaceList);
				newPoint.find(".choose").unbind("click").bind("click",function(){
					if($(this).data("choose")){
						$(this).data("choose",false);
						$(this).removeClass("choose_1");
						$(this).addClass("choose_0");
					}else{
						$(this).data("choose",true);
						$(this).removeClass("choose_0");
						$(this).addClass("choose_1");
					}
				})
				newPoint.find(".editPlace").unbind("click").bind("click",function(){
					app.objs.route.navigate("?page=addPlace",{trigger: true});
				})
			})
		}
	}
	/*公司信息*/
	var companyList=function(){
		this.el=".main";
		this.data=[];
		this.render=function(){
			var newCompanyList=$('<div class="companyList"></div>').appendTo($(this.el));
			$.each(this.data,function(index,value){
				var newPoint=$('<div class="companyPoint">'+
					                '<div class="companyHead">'+
					                    '<div class="companyTitle">'+value.title+'</div>'+
					                    '<div class="companyEn">'+value.enTitle+'</div>'+
					                    '<div class="companyToggle close">＞</div>'+
					                    '<div class="clear"></div>'+
					                '</div>'+
					                '<div class="companyBottom">'+
					                    value.main+
					                '</div>'+
					            '</div>').appendTo(newCompanyList);
				newPoint.find(".companyHead").unbind("click").bind("click",function(){
					if($(this).data("open")){
						$(this).data("open",false)
							$(this).parents(".companyPoint").find(".companyBottom").hide();
							$(this).find(".companyToggle").text("＞")
					}else{
						$(this).data("open",true);
							$(this).parents(".companyPoint").find(".companyBottom").show();
							$(this).find(".companyToggle").text("∨")
					}
				})
			})
		}
	}
	
	var returnObj = {
		/*首页*/
		"index":Backbone.View.extend({
			el:".main",
			data:{},
			render:function(){
				$(".main").empty();
				var newHead = new head();
				newHead.type=0;
				newHead.render();
				var newFoot = new foot();
				newFoot.render();
				var newBanner = new banner();
				newBanner.render();
				var newType=$('<div class="typeArea">'+
						    		'<button class="typePoint new">'+
						    			'<img class="icon" src="css/images/new_lo.gif"/>'+
						    			'<div class="name">夏季新品</div>'+
						    		'</button>'+
						    		'<div class="typeLine"></div>'+
						    		'<button class="typePoint sale">'+
						    			'<img class="icon" src="css/images/sale.gif"/>'+
						    			'<div class="name">断码清仓</div>'+
						    		'</button>'+
						    		'<div class="typeLine"></div>'+
						    		'<button class="typePoint hot">'+
						    			'<img class="icon" src="css/images/guan.gif"/>'+
						    			'<div class="name">热销推荐</div>'+
						    		'</button>'+
						    		'<div class="clear"></div>'+
						    	'</div>').appendTo($(this.el));
				$(".typePoint.new").unbind("click").bind("click",function(){
					app.objs.route.navigate("?page=newGood",{trigger: true});
				});
				$(".typePoint.sale").unbind("click").bind("click",function(){
					app.objs.route.navigate("?page=sale",{trigger: true});
				});
				$(".typePoint.hot").unbind("click").bind("click",function(){
					app.objs.route.navigate("?page=hot",{trigger: true});
				});
				var newGoodList=new goodList();
				newGoodList.type=0;
				newGoodList.data=this.data.goodList;
				newGoodList.render();
			}
		}),
		/*登录*/
		"login":Backbone.View.extend({
			el:".main",
			data:{},
			render:function(){
				$(".main").empty();
				var newHead = new head();
				newHead.data="登录";
				newHead.render();
				var newFoot = new foot();
				newFoot.render();
				var loginMain=$(
				'<input class="login_input" value="输入手机号">'+
            '<button class="login_botton">获取验证码</button>'+
            '<input class="login_input01" value="填写验证码">'+
            '<div class="recip">有效验证时间：180秒</div>'+
            '<button class="login_botton01">登录</button>'+	
            '<div class="zheng">'+
                '<img src="images/zheng_01.gif">'+
                '<img src="images/zheng_02.gif">'+
                '<img src="images/zheng_03.gif">'+
            '</div>').appendTo($(this.el))
			}
		}),
		/*个人中心*/
		"center":Backbone.View.extend({
			el:".main",
			data:{},
			render:function(){
				var that=this;
				$(".main").empty();
				var newHead = new head();
				newHead.data="个人中心";
				newHead.render();
				var newFoot = new foot();
				newFoot.render();
				var centerHead=$('<div class="centerHead">'+
									'<img class="centerIcon" src="http://"/>'+
									'<div class="centerName">用户:12345554</div>'+
									'<div class="centerTapArea">'+
										'<div class="centerTap notPay">待付款订单</div>'+
										'<div class="centerTap place">地址管理</div>'+
										'<div class="centerTap old">成交纪录</div>'+
									'</div>'+
								'</div><div class="centerBottom"></div>').appendTo($(this.el))
				$(".centerTap.notPay").unbind("click").bind("click",function(){
					$(".centerTap").removeClass("hl");
					$(this).addClass("hl");
					$(".centerBottom").empty();
					$.each(that.data.notPay.shoppingList,function(index,value){
						var newShoppingList = new shoppingList();
					newShoppingList.el=".centerBottom";
					newShoppingList.type=3;
					newShoppingList.data=value;
					newShoppingList.render();
					});
					
				})
				$(".centerTap.place").unbind("click").bind("click",function(){
					$(".centerTap").removeClass("hl");
					$(this).addClass("hl");
					$(".centerBottom").empty();
					var newPlaceList=new placeList();
					newPlaceList.type=0;
					newPlaceList.el=".centerBottom";
					newPlaceList.data=that.data.place.placeList;
					newPlaceList.render();
				})
				$(".centerTap.old").unbind("click").bind("click",function(){
					$(".centerTap").removeClass("hl");
					$(this).addClass("hl");
					$(".centerBottom").empty();
					$.each(that.data.notPay.shoppingList,function(index,value){
						var newShoppingList = new shoppingList();
					newShoppingList.el=".centerBottom";
					newShoppingList.type=2;
					newShoppingList.data=value;
					newShoppingList.render();
					});
				})
				$(".centerTap.notPay").click();
			}
		}),
		/*简介*/
		"summary":Backbone.View.extend({
			el:".main",
			data:{},
			render:function(){
				$(".main").empty();
				var newHead = new head();
				newHead.type=0;
				newHead.render();
				var newFoot = new foot();
				newFoot.render();
				var newCompanyList=new companyList();
				newCompanyList.data=this.data;
				newCompanyList.render();
			}
		}),
		/*购物车*/
		"shoppingList":Backbone.View.extend({
			el:".main",
			data:{},
			render:function(){
				$(".main").empty();
				var newHead = new head();
				newHead.data="购物车";
				newHead.render();
				var newFoot = new foot();
				newFoot.type=0;
				newFoot.render();
				$.each(this.data.shoppingList,function(index,value){
					var newShopList=new shoppingList();
				newShopList.type=0;
				newShopList.data=value;
				newShopList.render();
				})
				
			}
		}),
		/*支付*/
		"pay":Backbone.View.extend({
			el:".main",
			data:{},
			render:function(){
				$(".main").empty();
				var newHead = new head();
				newHead.data="结算";
				newHead.render();
				$(".footer").empty();
				$.each(this.data.shoppingList,function(index,value){
					var newShopList=new shoppingList();
				newShopList.type=1;
				newShopList.data=value;
				newShopList.render();
				})
			}
		}),
		/*品牌*/
		"shop":Backbone.View.extend({
			el:".main",
			data:{},
			render:function(){
				$(".main").empty();
				var newHead = new head();
				newHead.data="品牌速递";
				newHead.render();
				var newFoot = new foot();
				newFoot.render();
				
				var pinPai=$('<div class="sudi">'+
    		'<div>'+
            	'<a><img src="css/images/shetop_00.gif"></a>'+
            '</div>'+
            '<div>'+
            	'<a><img src="css/images/shetop_01.gif"></a>'+
            '</div>'+
            '<div>'+
            	'<a><img src="css/images/shetop_02.gif"></a>'+
            '</div>'+
            '<div>'+
            	'<a><img src="css/images/shetop_03.gif"></a>'+
            '</div>').appendTo($(this.el))
			}
		}),
		/*商品列表*/
		"goodList":Backbone.View.extend({
			el:".main",
			type:0,
			data:{},
			render:function(){
				$(".main").empty();
				var newHead = new head();
				newHead.data=this.data.title;
				newHead.render();
				var newFoot = new foot();
				newFoot.render();
				var newBanner = new banner();
				newBanner.render();
				var newGoodList = new goodList();
				newGoodList.data=this.data.goodList;
				newGoodList.render();
			}
		}),
		/*商品详情*/
		"goodDetail":Backbone.View.extend({
			el:".main",
			data:{},
			render:function(){
				$(".main").empty();
				var newHead = new head();
				newHead.data="商品信息";
				newHead.render();
				var newFoot = new foot();
				newFoot.render();
				
				var newDetail=$('<div class="goodDetailHead">'+  
        '</div>'+
        '<div class="goodDetailAttrList">'+
            '<div class="goodDetailAttrPoint">'+
                '<div class="goodDetailAttrLeft">选择颜色:</div>'+
                '<div class="goodDetailAttrRight">'+
                    '<div class="goodDetailAttrColor hl">'+
                        '<div class="goodDetailAttrColorPoint" style="background-color:red"></div>'+
                    '</div>'+
                    '<div class="goodDetailAttrColor">'+
                        '<div class="goodDetailAttrColorPoint" style="background-color:black"></div>'+
                    '</div>'+
                    '<div class="clear"></div>'+
                '</div>'+
                '<div class="clear"></div>'+
            '</div>'+
            '<div class="goodDetailAttrPoint">'+
                '<div class="goodDetailAttrLeft">选择尺寸:</div>'+
                '<div class="goodDetailAttrRight">'+
                    '<div class="goodDetailAttrSize hl">34</div>'+
                    '<div class="goodDetailAttrSize">35</div>'+
                    '<div class="goodDetailAttrSize">36</div>'+
                    '<div class="clear"></div>'+
                '</div>'+
                '<div class="clear"></div>'+
            '</div>'+
            '<div class="goodDetailAttrPoint">'+
                '<div class="goodDetailAttrLeft">选择数量:</div>'+
                '<div class="goodDetailAttrRight">'+
                    '<div class="goodDetailAttrAdd">+</div>'+
                    '<div class="goodDetailAttrCount">1</div>'+
                    '<div class="goodDetailAttrSub">-</div>'+
                    '<div class="clear"></div>'+
                '</div>'+
                '<div class="clear"></div>'+
            '</div>'+
        '</div>'+
        '<img class="goodDetailPic" src="http://"/>'+
        '<img class="goodDetailPic" src="http://"/>'+
        '<img class="goodDetailPic" src="http://"/>'+
        '<img class="goodDetailPic" src="http://"/>').appendTo($(this.el));
		$(".goodDetailAttrColor").unbind("click").bind("click",function(){
			$(".goodDetailAttrColor").removeClass("hl");
			$(this).addClass("hl");
		})
		$(".goodDetailAttrSize").unbind("click").bind("click",function(){
			$(".goodDetailAttrSize").removeClass("hl");
			$(this).addClass("hl");
		})
		$(".goodDetailAttrAdd").unbind("click").bind("click",function(){
			$(this).parent().find(".goodDetailAttrCount").html(Number($(this).parent().find(".goodDetailAttrCount").html())+1)
		})
		$(".goodDetailAttrSub").unbind("click").bind("click",function(){
			if($(this).parent().find(".goodDetailAttrCount").html()!="1"){
				$(this).parent().find(".goodDetailAttrCount").html(Number($(this).parent().find(".goodDetailAttrCount").html())-1)
			}
			
		})
		var newBanner= new banner();
				newBanner.el=".goodDetailHead";
				newBanner.type= 0;
				newBanner.render();
			$('<div class="goodDetailName">复古优雅尖头羊皮女鞋S2112-02OS</div>'+
            '<div class="goodDetailbottom">'+
                '<div class="goodDetailPrice">￥769</div>'+
                '<div class="goodDetailCountPrice">市场价:2130.00</div>'+
                '<div class="clear"></div>'+
            '</div>').appendTo($(".goodDetailHead"))
			}
		}),
		/*添加地址*/
		"addPlace":Backbone.View.extend({
			el:".main",
			data:{},
			render:function(){
				$(".main").empty();
				var newHead = new head();
				newHead.data="添加收货地址";
				newHead.render();
				$(".footer").empty();
				$('<div class="messageList">'+
		    		'<div class="messagePoint">'+
		    			'<div class="messageLabel">手机号：</div>'+
		    			'<div class="messageMeain">'+
		    				'<input class="messageInput inputM" placeholder="请输入手机号码"/>'+
		    			'</div>'+
		    			'<div class="clear"></div>'+
		    		'</div>'+
		    		'<div class="messagePoint">'+
		    			'<div class="messageLabel">收货人：</div>'+
		    			'<div class="messageMeain">'+
		    				'<input class="messageInput inputM" placeholder="请输入姓名"/>'+
		    			'</div>'+
		    			'<div class="clear"></div>'+
		    		'</div>'+
		    		'<div class="messagePoint">'+
		    			'<div class="messageLabel">收货地址：</div>'+
		    			'<div class="messageMeain">'+
		    			
		    				'<div class="messageSelect">'+
		    					'<div class="messageSelectLabel">北京</div>'+
		    					'<div class="messageSelectButton">∨</div>'+
		    					'<div class="clear"></div>'+
								'<select>'+
			    					'<option value="a">a</option>'+
			    					'<option value="b">b</option>'+
			    				'</select>'+
		    				'</div>'+
		    				'<div class="messageWord">省</div>'+
		    				'<div class="messageSelect">'+
		    					'<div class="messageSelectLabel">北京</div>'+
		    					'<div class="messageSelectButton">∨</div>'+
		    					'<div class="clear"></div>'+
								'<select>'+
			    					'<option value="a">a</option>'+
			    					'<option value="b">b</option>'+
			    				'</select>'+
		    				'</div>'+
		    				'<div class="messageWord">市</div>'+
		    				'<div class="messageSelect">'+
		    					'<div class="messageSelectLabel">北京</div>'+
		    					'<div class="messageSelectButton">∨</div>'+
		    					'<div class="clear"></div>'+
								'<select>'+
			    					'<option value="a">a</option>'+
			    					'<option value="b">b</option>'+
			    				'</select>'+
		    				'</div>'+
		    				'<div class="messageWord">区</div>'+
		    				
		    				
		    			'</div>'+
		    			'<div class="clear"></div>'+
		    		'</div>'+
		    		'<div class="messagePoint">'+
		    			'<div class="messageLabel">街道地址：</div>'+
		    			'<div class="messageMeain">'+
		    				'<input class="messageInput inputL"/>'+
		    			'</div>'+
		    			'<div class="clear"></div>'+
		    		'</div>'+
		    		'<div class="messagePoint">'+
		    			'<div class="messageLabel">发票信息：</div>'+
		    			'<div class="messageMeain">'+
		    				'<input class="messageInput inputL" placeholder="可不填写"/>'+
		    			'</div>'+
		    			'<div class="clear"></div>'+
		    		'</div>'+
		    		'<div class="messagePoint">'+
		    			'<div class="messageLabel">订单备注：</div>'+
		    			'<div class="messageMeain">'+
		    				'<input class="messageInput inputL"/>'+
		    			'</div>'+
		    			'<div class="clear"></div>'+
		    		'</div>'+
		    		'<div class="clear"></div>'+
		    		'<div class="choose choose_0"></div>'+
		    		'<div class="messageBottomWord">设为默认收件地址</div>'+
		    		'<div class="clear"></div>'+
		    	'</div>').appendTo($(this.el))
				$(".choose").unbind("click").bind("click",function(){
					if($(this).data("choose")){
						$(this).data("choose",false);
						$(this).removeClass("choose_1");
						$(this).addClass("choose_0");
					}else{
						$(this).data("choose",true);
						$(this).removeClass("choose_0");
						$(this).addClass("choose_1");
					}
				})
				$(".messageSelect").find("select").unbind("change").bind("change",function(){
					$(this).parents(".messageSelect").find(".messageSelectLabel").html($(this).find("option:selected").text())
				})
				$("<div class='messageSendButton'>完成</div>").appendTo($(this.el))
			}
		})
	};
	obj.get = function(name){
		if(returnObj[name]){
			return returnObj[name];
		};
	};
})(app.views);