/* JavaScript Document*/
app.objs.routeTable = {
	/*首页*/
	"index":{
			fn:function(data){
				var template=app.views.get("index");
				var index = new template();
				index.data={goodList:[{"image":"css/images/good.gif","des":"枪灰色布纹羊反绒_猪皮粉橙色布纹黑白点布透明材质","price":"￥598","costPrice":"￥1299"},
										{"image":"css/images/good.gif","des":"枪灰色布纹羊反绒_猪皮粉橙色布纹黑白点布透明材质","price":"￥598","costPrice":"￥1299"},
										{"image":"css/images/good.gif","des":"枪灰色布纹羊反绒_猪皮粉橙色布纹黑白点布透明材质","price":"￥598","costPrice":"￥1299"},
										{"image":"css/images/good.gif","des":"枪灰色布纹羊反绒_猪皮粉橙色布纹黑白点布透明材质","price":"￥598","costPrice":"￥1299"},
										{"image":"css/images/good.gif","des":"枪灰色布纹羊反绒_猪皮粉橙色布纹黑白点布透明材质","price":"￥598","costPrice":"￥1299"}
					]}
				index.render();
			}
		},
	/*登录*/
	"login":{
			fn:function(data){
				var template=app.views.get("login")
				var login = new template();
				login.render();
			}
		},
	/*个人中心*/
	"center":{
			fn:function(data){
				var template=app.views.get("center")
				var center = new template();
				center.data={};
				center.data.notPay={shoppingList:[
					{
						title:"only",
						sale:"满50减10",
						point:[{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"}
						]
					},
					{
						title:"notonly",
						sale:null,
						point:[{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"}
						]
					}
					]}
				center.data.old={shoppingList:[
					{
						title:"only",
						sale:"满50减10",
						point:[{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"}
						]
					},
					{
						title:"notonly",
						sale:null,
						point:[{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"}
						]
					}
					]}
				center.data.place={placeList:[{name:"康熙",phone:"15101611111",place:"北京市东城区故宫大厦保和殿第二宫门右拐三个胡同进门左转传达室"},
												{name:"康熙",phone:"15101611111",place:"北京市东城区故宫大厦保和殿第二宫门右拐三个胡同进门左转传达室"},
												{name:"康熙",phone:"15101611111",place:"北京市东城区故宫大厦保和殿第二宫门右拐三个胡同进门左转传达室"},
												{name:"康熙",phone:"15101611111",place:"北京市东城区故宫大厦保和殿第二宫门右拐三个胡同进门左转传达室"},
												{name:"康熙",phone:"15101611111",place:"北京市东城区故宫大厦保和殿第二宫门右拐三个胡同进门左转传达室"}
				]}
				center.render();
			}
		},
	/*简介*/
	"summary":{
			fn:function(data){
				var template=app.views.get("summary")
				var summary = new template();
				summary.data=[{title:"使用帮助",enTitle:"HELP",main:"诉讼法司法三fefesssgssfs高低杠fegrhfsfsgggdg 打算腹股沟地方官个人溽热高低杠地方官单鹄寡凫"},
								{title:"联系我们",enTitle:"CONTACT",main:"诉讼法司法三fefesssgssfs高低杠fegrhfsfsgggdg 打算腹股沟地方官个人溽热高低杠地方官单鹄寡凫"},
								{title:"企业文化",enTitle:"COMPANY",main:"诉讼法司法三fefesssgssfs高低杠fegrhfsfsgggdg 打算腹股沟地方官个人溽热高低杠地方官单鹄寡凫"},
								{title:"公司简介",enTitle:"ABOUT US",main:"诉讼法司法三fefesssgssfs高低杠fegrhfsfsgggdg 打算腹股沟地方官个人溽热高低杠地方官单鹄寡凫"},
								{title:"用户协议",enTitle:"PROTOCOL",main:"诉讼法司法三fefesssgssfs高低杠fegrhfsfsgggdg 打算腹股沟地方官个人溽热高低杠地方官单鹄寡凫"}
				]
				summary.render();
			}
		},
	/*购物车*/
	"shoppingList":{
			fn:function(data){
				var template=app.views.get("shoppingList")
				var shoppingList = new template();
				shoppingList.data={
					shoppingList:[
					{
						title:"only",
						sale:"满50减10",
						point:[{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"}
						]
					},
					{
						title:"notonly",
						sale:null,
						point:[{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"}
						]
					}
					]
			
				}
				shoppingList.render();
			}
		},
	/*支付*/
	"pay":{
			fn:function(data){
				var template=app.views.get("pay")
				var pay = new template();
				pay.data={
					shoppingList:[
					{
						title:"only",
						sale:"满50减10",
						point:[{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"}
						]
					},
					{
						title:"notonly",
						sale:null,
						point:[{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"},
								{image:"http://",name:"肉色潮流时尚羽绒外套肉色潮流时尚羽绒外套",color:"黄色",size:"L码",price:"￥328",costPrice:"￥1206"}
						]
					}
					]
			
				}
				pay.render();
			}
		},
	/*品牌速递*/
	"shop":{
			fn:function(data){
				var template=app.views.get("shop")
				var shop = new template();
				shop.render();
			}
		},
	/*商品列表*/
	"goodDetail":{
			fn:function(data){
				var template=app.views.get("goodDetail")
				var goodList = new template();
				goodList.render();
			}
		},
	/*新品推荐*/
	"newGood":{
			fn:function(data){
				var template=app.views.get("goodList");
				var goodDetail = new template();
				goodDetail.data={title:"新品推荐",
						goodList:[{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"}
						]}
				goodDetail.render();
			}
		},
	/*断码清仓*/
	"crazySale":{
			fn:function(data){
				var template=app.views.get("goodList")
				var goodDetail = new template();
				goodDetail.data={title:"疯狂清仓",
						goodList:[{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"}
						]}
				goodDetail.render();
			}
		},
	/*断码清仓*/
	"sale":{
			fn:function(data){
				var template=app.views.get("goodList")
				var goodDetail = new template();
				goodDetail.data={title:"断码清仓",
						goodList:[{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"}
						]}
				goodDetail.render();
			}
		},
	/*热销推荐*/
	"hot":{
			fn:function(data){
				var template=app.views.get("goodList")
				var goodDetail = new template();
				goodDetail.data={title:"热销推荐",
						goodList:[{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"},
									{image:"http://",name:"粉蓝色水晶_灰紫色水晶黑白色羊皮",price:"￥598",costPrice:"￥1299"}
						]}
				goodDetail.render();
			}
		},
	/*添加地址*/
	"addPlace":{
			fn:function(data){
				var template=app.views.get("addPlace")
				var addPlace = new template();
				addPlace.render();
			}
		}
	};
app.routers=Backbone.Router.extend({
	"routes":{
		"*action":"changePage"
    },
	"changePage":function(){
		var get = $_GET();
		if(!get.page){
			get.page = "index"
			};	
		app.objs.routeTable[get.page].fn(get);
		suit()
		}
	});