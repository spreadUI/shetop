;(function(obj){
	/*发送验证码*/
	var returnObj = {} ;
	returnObj.sendCode = function(data,fn,err){
		var data = {"phone" : 18293849339/*手机号*/};
		var dataReturn = {"code" : 1/*0发送错误，1发送成功*/};
		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*登录*/
	returnObj.login = function(data,fn,err){
		var data = {
				  "phone" : 1324435546,/*手机号*/
				  "idCode" : "string"/*验证码*/
				};
		var dataReturn = {"code" : 1/*0验证错误，1验证成功*/};
		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	}
	/*商品类型*/
	returnObj.kind = function(data,fn,err){
		var data = null;
		var dataReturn = {
						"code" : 1,/*0查询失败，1查询成功*/
						"data" : [{
						   "name" : "string",/*类型名*/
							"id" : "001"/*类型编号*/
						}]
						};
		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		}
	}
	returnObj.shop = function(data,fn,err){
		var data = null;
		var dataReturn = {
						"code":1,/*0查询失败，1查询成功*/
						"data":[{
						   "name":"string",/*类型名*/
							"id":"001"/*类型编号*/
						}]
						};

		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		}
	};
	/*商品列表*/
	returnObj.goodList = function(data,fn,err){
		var data = {
				 "time":new Date().getTime(),/*请求时间*/
				  "page":0,/*页数,当页数为0时获取最新商品，当页数不为0时忽略比请求时间新的商品,*/
				  "number":10,/*条数*/
				  "order":0,/*筛选0销量，1价格*/
				  "type":0,/*0全部,1清仓,2新品,3热销*/
				  "kind":"0",/*类型编号,0为全类型*/
				  "shop":"0",/*品牌编号,0为全部*/
				};
		var dataReturn = {
						 "code":1,/*0查询错误，1查询成功*/
						"data":[{
							"id":"001",/*编号*/
							"name":"string",/*名称*/
							"number":"string",/*货号*/
							"price":10086,/*价格*/
							"clear":true,/*true清仓*/
							"newGood": true,/*true新品*/
							"hot":true,/*热销*/
							"kind":"string",/*类型编号*/
							"shop":"string",/*品牌编号*/
							"price":12349,/*本店售价*/
							"marketPrice":327829,/*市场售价*/
							"sell":true,/*true促销*/
							"sellPrice":323333,/*促销价*/
							"sellStart":0,/*促销开始时间*/
							"sellEnd":new Date().getTime()+1008611,/*促销结束时间*/
							"images":[
							   "http://","http://","http://"
								],
							"smallImages":[
							   "http://","http://","http://"/*缩略图url*/
								]
							},
							{
							"id":"002",/*编号*/
							"name":"string",/*名称*/
							"number":"string",/*货号*/
							"price":10086,/*价格*/
							"clear":true,/*true清仓*/
							"newGood": true,/*true新品*/
							"hot":true,/*热销*/
							"kind":"string",/*类型编号*/
							"shop":"string",/*品牌编号*/
							"price":12349,/*本店售价*/
							"marketPrice":327829,/*市场售价*/
							"sell":true,/*true促销*/
							"sellPrice":323333,/*促销价*/
							"sellStart":0,/*促销开始时间*/
							"sellEnd":new Date().getTime()+1008611,/*促销结束时间*/
							"images":[
							   "http://","http://","http://"
								],
							"smallImages":[
							   "http://","http://","http://"/*缩略图url*/
								]
							},
							{
							"id":"003",/*编号*/
							"name":"string",/*名称*/
							"number":"string",/*货号*/
							"price":10086,/*价格*/
							"clear":true,/*true清仓*/
							"newGood": true,/*true新品*/
							"hot":true,/*热销*/
							"kind":"string",/*类型编号*/
							"shop":"string",/*品牌编号*/
							"price":12349,/*本店售价*/
							"marketPrice":327829,/*市场售价*/
							"sell":true,/*true促销*/
							"sellPrice":323333,/*促销价*/
							"sellStart":0,/*促销开始时间*/
							"sellEnd":new Date().getTime()+1008611,/*促销结束时间*/
							"images":[
							   "http://","http://","http://"
								],
							"smallImages":[
							   "http://","http://","http://"/*缩略图url*/
								]
							}
							]
						};


		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*上品详情*/
	returnObj.goodDetail = function(data,fn,err){
		var data = {
				 "id":"001",/*商品编号*/
				};

		var dataReturn = {"code":1,/*0查找错误，1查找正确*/
						"data": {
						"id":"001",/*编号*/
						"name":"string",/*名称*/
						"number":"string",/*货号*/
						"price":2344,/*价格*/
						"clear":true,/*true清仓*/
						"newGood": true,/*true新品*/
						"hot":true,/*热销*/
						"kind":"string",/*类型编号*/
						"shop":"string",/*品牌编号*/
						"price":33435,/*本店售价*/
						"marketPrice":33335,/*市场售价*/
						"sell":true,/*true促销*/
						"sellPrice":483948,/*促销价*/
						"sellStart":464775,/*促销开始时间*/
						"sellEnd":3546467,/*促销结束时间*/
						"images":[
						   "http://","http://","http://","http://"/*大图url*/
						],
						"smallImages":[
						   "http://","http://","http://","http://"/*缩略图url*/
						],
						"datail":"string",/*详细描述html*/
						"other":{/*其他信息*/
						   "weight":23424,/*
						   “weightType”:number,/*0克,1千克*/
						   "stock":24,/*存量*/
						   "freeTransportation":true,/*true免运费*/
						   "description":"string",/*描述*/
						   "remark":"string"/*备注*/
						},
						"attribute":{/*商品属性*/
						  "kind":"string",/*鞋头款式*/
						  "material":"string",/*材质*/
						  "size":[9,10,23,33],/*尺码*/
						  "color":["#fff","red","blue","#000"],/*颜色*/
						  "height":"99cm",/*跟高*/
						  "backMaterial":"string",/*鞋底材质*/
						  "inMateral":"string",/*里材质*/
						  "style":"srting",/*风格*/
						}
					}};
		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*促销列表*/
	returnObj.sellList = function(data,fn,err){
		var data = {
				"time":new Date().getTime(),/*请求时间，规则同商品列表*/
				"page":0,/*页数，规则同商品列表*/
				"number":10/*条数,规则同商品列表*/
				};

		var dataReturn = {
						"code":1,/*0查询失败，1查询成功*/
						"data":[{
						   "id":"001",/*促销编号*/
						   "name":"string",/*优惠名*/
						   "strat":0,/*开始时间*/
						   "end":new Date().getTime()+1008611,/*结束时间*/
						  "maxNumber":1000,/*金额上限*/
						  "minNumber":10,/*金额下限*/
						},
						{
						   "id":"002",/*促销编号*/
						   "name":"string",/*优惠名*/
						   "strat":0,/*开始时间*/
						   "end":new Date().getTime()+1008611,/*结束时间*/
						  "maxNumber":1000,/*金额上限*/
						  "minNumber":10,/*金额下限*/
						},
						{
						   "id":"003",/*促销编号*/
						   "name":"string",/*优惠名*/
						   "strat":0,/*开始时间*/
						   "end":new Date().getTime()+1008611,/*结束时间*/
						  "maxNumber":1000,/*金额上限*/
						  "minNumber":10,/*金额下限*/
						},
						{
						   "id":"004",/*促销编号*/
						   "name":"string",/*优惠名*/
						   "strat":0,/*开始时间*/
						   "end":new Date().getTime()+1008611,/*结束时间*/
						  "maxNumber":1000,/*金额上限*/
						  "minNumber":10,/*金额下限*/
						},
						{
						   "id":"005",/*促销编号*/
						   "name":"string",/*优惠名*/
						   "strat":0,/*开始时间*/
						   "end":new Date().getTime()+1008611,/*结束时间*/
						  "maxNumber":1000,/*金额上限*/
						  "minNumber":10,/*金额下限*/
						}]
						};

		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		}
	};
	returnObj.orderList = function(data,fn,err){
		var data = {
			"time":new Date().getTime(),/*请求时间，规则同商品列表*/
			"page":0,/*页数，规则同商品列表*/
			"number":10/*条数,规则同商品列表*/

		};
		var dataReturn = {
			"code":1,/*0查询失败，1查询成功*/
			"data":[{
			   "id":"001",/*订单编号*/
			   "time":new Date().getTime(),/*下单时间*/
			   "receipt":"收货信息",/*收货信息*/
			  "total":3342,/*总金额*/
			  "pay":24353535,/*应付金额*/
			  "state":4/*0取消，1未确认，2已确认，3已付款，4已发货*/
			},
			{
			   "id":"002",/*订单编号*/
			   "time":new Date().getTime(),/*下单时间*/
			   "receipt":"收货信息",/*收货信息*/
			  "total":3342,/*总金额*/
			  "pay":24353535,/*应付金额*/
			  "state":4/*0取消，1未确认，2已确认，3已付款，4已发货*/
			},
			{
			   "id":"003",/*订单编号*/
			   "time":new Date().getTime(),/*下单时间*/
			   "receipt":"收货信息",/*收货信息*/
			  "total":3342,/*总金额*/
			  "pay":24353535,/*应付金额*/
			  "state":4/*0取消，1未确认，2已确认，3已付款，4已发货*/
			}]

		};
		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*广告位列表*/
	returnObj.adPlace = function(data,fn,err){
		var data = null;
		var dataReturn = {"code":1,/*0查询失败，1查询成功*/
						"data":[{
						   "id":"001",/*位置编号*/
						   "name":"string"/*位置名称*/
						}]
						};
		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*广告列表*/
	returnObj.ad = function(data,fn,err){
		var data = null;
		var dataReturn = {"code":number,/*0查询失败，1查询成功*/
						"data":[{
						   "id":"001",/*广告编号*/
						   "place":"001",/*位置编号*/
						   "name":"string",/*广告名*/
						   "image":"http://",/*图片url*/
						   "url":"http://",/*连接*/
						},{
						   "id":"002",/*广告编号*/
						   "place":"001",/*位置编号*/
						   "name":"string",/*广告名*/
						   "image":"http://",/*图片url*/
						   "url":"http://",/*连接*/
						}]
						};
		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*地址列表*/
	returnObj.placeList = function(data,fn,err){
		var data = {"phone":"243254356"/*手机号*/};

		var dataReturn = {
					"code":number,/*0查询失败，1查询成功*/
					"data":[{
					   "id":"001",/*地址编号*/
					   "name":"string",/*收件人*/
					   "phone":"23454455",/*联系手机*/
					   "place":"string"/*收件地址*/
					},
					{
					   "id":"002",/*地址编号*/
					   "name":"string",/*收件人*/
					   "phone":"23454455",/*联系手机*/
					   "place":"string"/*收件地址*/
					},
					{
					   "id":"003",/*地址编号*/
					   "name":"string",/*收件人*/
					   "phone":"23454455",/*联系手机*/
					   "place":"string"/*收件地址*/
					}]
					};
		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*历史纪录*/
	returnObj.history = function(data,fn,err){
		var data = {"phone":"34545435"/*手机号*/};
		var dataReturn = {"code":1,/*0查询失败，1查询成功*/
						"data":[{
						   "id":"001",/*订单号*/
						}]
						};
		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*结算*/
	returnObj.pay = function(data,fn,err){
		var data = {"phone":"3243353"/*手机号*/,
					"pay":["001","002","003"/*商品id*/],
					"place":"001"/*地址id*/
					};
		var dataReturn = {
			"code":1,/*0查询失败，1查询成功*/
		};
		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*添加收货地址*/
	returnObj.addPlace = function(data,fn,err){
		var data = {"phone":"2434355435"/*手机号*/,
				"name":["string","string","string"/*收货人*/],
				"place":"001"/*地址id*/};

		var dataReturn = {
			"code":1/*0添加失败，1添加成功*/
		};
		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*文章*/
	returnObj.article = function(data,fn,err){
		var data = {"article_id": 1 /*文章编号*/};
		var dataReturn = {
						"article_id": 1 /*文章编号*/,
						"title":"string"/*文章题目*/,
						"description":"string"/*文章描述*/,
						"content": "text",/* 文章内容*/
						"content": 1233445/* 添加时间*/
						};

		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*文章分类列表*/
	returnObj.articleType = function(data,fn,err){
		var data = {"cat_id": 1 /*文章分类编号*/};
		var dataReturn = {
						"cat_name":"string"/*文章分类名称*/,
						"cat_desc":"string"/*文章分类说明文字*/,
						};

		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*购物车列表*/
	returnObj.shopList = function(data,fn,err){
		var data = null;
		var dataReturn = {
						"goods_id":1/*商品的ID */,
						"goods_sn":"3234g"/*商品的货号*/,
						"goods_name":"string"/*商品名称*/,
						"goods_price":2445/*商品的本店价*/,
						"goods_number":333/*商品的购买数量*/,
						"goods_attr":/*商品的扩展属性*/
						{
						"Color":"red"/*颜色*/,
						"Size":"2"/*尺码*/
						}
						};

		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*商品收藏表*/
	returnObj.collectionList = function(data,fn,err){
		var data = { "user_id" : "1244546467" };
		var dataReturn = {
						"rec_id":1/*收藏记录编号*/,
						"goods_id": 23/*收藏的商品id */,
						"add_time":0/*收藏时间*/,
						};

		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*评论表*/
	returnObj.discussList = function(data,fn,err){
		var data = {
					"id_value":0,/*用户评论的类型;0评论的是商品,1评论的是文章*/
					"comment_type":1/*文章或者商品的id*/ 
					};

		var dataReturn = {
						"content": "text", /*评论的内容*/
						"comment_rank":3 ,/*该文章或者商品的重星级;只有1到5星;由数字代替;其中5代表5星*/
						"add_time":0 /*评论的时间*/

						};


		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*全国地区表*/
	returnObj.city = function(data,fn,err){
		var data = {};
		var returnObj = {
						"region_id": 2 ,/*地区编号*/
						"parent_id":2 ,/*该地区父节点的地区编号*/
						"region_name":"string" /*地区名*/
						};

		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*配送方式*/
	returnObj.distributionType = function(data,fn,err){
		var data = {};
		var returnObj = {
						"shipping_id": 1 ,/*配送方式编号（自增id号）*/
						"shipping_name":"string", /*配送方式名称*/
						"insure":"string" /*保价费用，单位元*/

						};

		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*支付方式*/
	returnObj.payType = function(data,fn,err){
		var data = {};
		var returnObj = {
						"pay_id": 1, /*已安装的支付方式编号（自增id）*/
						"pay_name":"string" /*支付方式名称*/
						};

		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*导航栏目*/
	returnObj.navList = function(data,fn,err){
		var data = {
			"type":"top" /*处于导航栏的位置，top为顶部；middle为中间；bottom,为底部*/
		};
		var dataReturn = {"id": 1, /*导航配置编号（自增id）*/
		"name":"string" /*导航栏名称*/
	};
		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		};
	};
	/*相关商品*/
	returnObj.linkGoodList = function(data,fn,err){
		var data = {
				"link_goods_id":1 /*被关联的商品编号*/
				};

		var dataReturn = {
				"goods_id": 1 ,/*商品编号*/
				"goods_name":"string" /*商品名称*/

		};
		if(dataReturn && dataReturn.code == 1){
			fn(dataReturn.data);
		}else{
			err();
		}
	}
	obj.run = function(name,data,fn,err){
		if(returnObj[name]){
			returnObj[name](data,fn,err);
		};
	}
	

})(app.apis);
