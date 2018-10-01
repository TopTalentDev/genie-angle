(function (server) {
	var payload = [
		{
			"siteId": "1",
			"pageId": "268dbafe-4fc5-4984-9867-03a3a34cedc4",
			"url": [
				"http://example.com/home",
				"http://example.com/index",
				"http://example.com"
			],
			"isDeleted": false,
			"isPromoted": true,
			"isAutoKeywords": true,
			"collectionName": "Pages",
			"name": "Home",
			"promotedKeywordsCount": 2
		},
		{
			"siteId": "1",
			"pageId": "268dbafe-4fc5-4984-9867-03a3a34cedc4",
			"url": [
				"http://example.com/home",
				"http://example.com/index",
				"http://example.com"
			],
			"isDeleted": false,
			"isPromoted": true,
			"isAutoKeywords": true,
			"collectionName": "Pages",
			"name": "Home",
			"promotedKeywordsCount": 2
		},
		{
			"siteId": "1",
			"pageId": "268dbafe-4fc5-4984-9867-03a3a34cedc4",
			"url": [
				"http://example.com/home",
				"http://example.com/index",
				"http://example.com"
			],
			"isDeleted": false,
			"isPromoted": true,
			"isAutoKeywords": true,
			"collectionName": "Pages",
			"name": "Home",
			"promotedKeywordsCount": 3
		},
		{
			"siteId": "1",
			"pageId": "268dbafe-4fc5-4984-9867-03a3a34cedc4",
			"url": [
				"http://example.com/home",
				"http://example.com/index",
				"http://example.com"
			],
			"isDeleted": false,
			"isPromoted": true,
			"isAutoKeywords": true,
			"collectionName": "Pages",
			"name": "Home",
			"promotedKeywordsCount": 1
		},
		{
			"siteId": "1",
			"pageId": "268dbafe-4fc5-4984-9867-03a3a34cedc4",
			"url": [
				"http://example.com/home",
				"http://example.com/index",
				"http://example.com"
			],
			"isDeleted": false,
			"isPromoted": true,
			"isAutoKeywords": true,
			"collectionName": "Pages",
			"name": "Home",
			"promotedKeywordsCount": 1
		},
		{
			"siteId": "1",
			"pageId": "268dbafe-4fc5-4984-9867-03a3a34cedc4",
			"url": [
				"http://example.com/home",
				"http://example.com/index",
				"http://example.com"
			],
			"isDeleted": false,
			"isPromoted": true,
			"isAutoKeywords": true,
			"collectionName": "Pages",
			"name": "Home",
			"promotedKeywordsCount": 1
		},
		{
			"siteId": "1",
			"pageId": "268dbafe-4fc5-4984-9867-03a3a34cedc4",
			"url": [
				"http://example.com/home",
				"http://example.com/index",
				"http://example.com"
			],
			"isDeleted": false,
			"isPromoted": true,
			"isAutoKeywords": true,
			"collectionName": "Pages",
			"name": "Home",
			"promotedKeywordsCount": 1
		}
	];

	var payload = [
        {id: 1, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/herbal-medicine', auto_keywords: 0, manual_keywords: 1, category: {default: false, promoted:true, monitored: true, forced: false}, violate: 1, ranking: 1, significance: 2, suitability: 3, assignedState: true, manual_promotion: false, auto_assign: true},
        {id: 2, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment1', auto_keywords: 5, manual_keywords: 2, category: {default: true, promoted:true, monitored: true, forced: true}, violate: 2, ranking: 2, significance: 3, suitability: 4, assignedState: true, manual_promotion: false, auto_assign: true},
        {id: 3, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/wwww', auto_keywords: 5, manual_keywords: 1, category: {default: true, promoted:false, monitored: false, forced: false}, violate: 2, ranking: 3, significance: 4, suitability: 1, assignedState: true, manual_promotion: false, auto_assign: true},
        {id: 4, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/d', auto_keywords: 3, manual_keywords: 2, category: {default: false, promoted:true, monitored: true, forced: true}, violate: 3, ranking: 4, significance: 1, suitability: 2, assignedState: true, manual_promotion: false, auto_assign: true},
        {id: 5, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/122', auto_keywords: 0, manual_keywords: 0, category: {default: false, promoted:false, monitored: false, forced: false}, violate: 1, ranking: 1, significance: 2, suitability: 3, assignedState: false, manual_promotion: false},
        {id: 6, pageUrl: 'http://www.umm.edu/health/medical/altmed/d', auto_keywords: 0, manual_keywords: 0, category: {default: true, promoted:true, monitored: true, forced: true}, violate: 1, ranking: 2, significance: 3, suitability: 4, assignedState: false, manual_promotion: false},
        {id: 7, pageUrl: 'http://www.umm.edu/login', auto_keywords: 0, manual_keywords: 0, category: {default: false, promoted:false, monitored: false, forced: false}, violate: 1, ranking: 3, significance: 2, suitability: 1, assignedState: false, manual_promotion: false},
        {id: 8, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/herbal-medicine', auto_keywords: 0, manual_keywords: 0, category: {default: true, promoted:true, monitored: true, forced: true}, violate: 4, ranking: 4, significance: 2, suitability: 3, assignedState: false, manual_promotion: false},
        {id: 9, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/herbal-medicine', auto_keywords: 0, manual_keywords: 1, category: {default: false, promoted:true, monitored: true, forced: false}, violate: 1, ranking: 1, significance: 2, suitability: 3, assignedState: true, manual_promotion: false},
        {id: 10, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment1', auto_keywords: 5, manual_keywords: 2, category: {default: true, promoted:true, monitored: true, forced: true}, violate: 2, ranking: 2, significance: 3, suitability: 4, assignedState: true, manual_promotion: false, auto_assign: true},
        {id: 11, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/wwww', auto_keywords: 5, manual_keywords: 1, category: {default: true, promoted:false, monitored: false, forced: false}, violate: 2, ranking: 3, significance: 4, suitability: 1, assignedState: true, manual_promotion: false, auto_assign: true},
        {id: 12, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/d', auto_keywords: 3, manual_keywords: 2, category: {default: false, promoted:true, monitored: true, forced: true}, violate: 3, ranking: 4, significance: 1, suitability: 2, assignedState: true, manual_promotion: false},
        {id: 13, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/122', auto_keywords: 0, manual_keywords: 0, category: {default: false, promoted:false, monitored: false, forced: false}, violate: 1, ranking: 1, significance: 2, suitability: 3, assignedState: false, manual_promotion: false},
        {id: 14, pageUrl: 'http://www.umm.edu/health/medical/altmed/d', auto_keywords: 0, manual_keywords: 0, category: {default: true, promoted:true, monitored: true, forced: true}, violate: 1, ranking: 2, significance: 3, suitability: 4, assignedState: false, manual_promotion: false},
        {id: 15, pageUrl: 'http://www.umm.edu/login', auto_keywords: 0, manual_keywords: 0, category: {default: false, promoted:false, monitored: false, forced: false}, violate: 1, ranking: 3, significance: 2, suitability: 1, assignedState: false, manual_promotion: false},
        {id: 16, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/herbal-medicine', auto_keywords: 0, manual_keywords: 0, category: {default: true, promoted:true, monitored: true, forced: true}, violate: 4, ranking: 4, significance: 2, suitability: 3, assignedState: false, manual_promotion: false},
        {id: 17, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/herbal-medicine', auto_keywords: 0, manual_keywords: 1, category: {default: false, promoted:true, monitored: true, forced: false}, violate: 1, ranking: 1, significance: 2, suitability: 3, assignedState: true, manual_promotion: false},
        {id: 18, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment1', auto_keywords: 5, manual_keywords: 2, category: {default: true, promoted:true, monitored: true, forced: true}, violate: 2, ranking: 2, significance: 3, suitability: 4, assignedState: true, manual_promotion: false},
        {id: 19, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/wwww', auto_keywords: 5, manual_keywords: 1, category: {default: true, promoted:false, monitored: false, forced: false}, violate: 2, ranking: 3, significance: 4, suitability: 1, assignedState: true, manual_promotion: false},
        {id: 20, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/d', auto_keywords: 3, manual_keywords: 2, category: {default: false, promoted:true, monitored: true, forced: true}, violate: 3, ranking: 4, significance: 1, suitability: 2, assignedState: true, manual_promotion: false},
        {id: 21, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/122', auto_keywords: 0, manual_keywords: 0, category: {default: false, promoted:false, monitored: false, forced: false}, violate: 1, ranking: 1, significance: 2, suitability: 3, assignedState: false, manual_promotion: false},
        {id: 22, pageUrl: 'http://www.umm.edu/health/medical/altmed/d', auto_keywords: 0, manual_keywords: 0, category: {default: true, promoted:true, monitored: true, forced: true}, violate: 1, ranking: 2, significance: 3, suitability: 4, assignedState: false, manual_promotion: false},
        {id: 23, pageUrl: 'http://www.umm.edu/login', auto_keywords: 0, manual_keywords: 0, category: {default: false, promoted:false, monitored: false, forced: false}, violate: 1, ranking: 3, significance: 2, suitability: 1, assignedState: false, manual_promotion: false},
        {id: 24, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/herbal-medicine', auto_keywords: 0, manual_keywords: 0, category: {default: true, promoted:true, monitored: true, forced: true}, violate: 4, ranking: 4, significance: 2, suitability: 3, assignedState: false, manual_promotion: false},
        {id: 25, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/herbal-medicine', auto_keywords: 0, manual_keywords: 1, category: {default: false, promoted:true, monitored: true, forced: false}, violate: 1, ranking: 1, significance: 2, suitability: 3, assignedState: true, manual_promotion: false},
        {id: 26, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment1', auto_keywords: 5, manual_keywords: 2, category: {default: true, promoted:true, monitored: true, forced: true}, violate: 2, ranking: 2, significance: 3, suitability: 4, assignedState: true, manual_promotion: false},
        {id: 27, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/wwww', auto_keywords: 5, manual_keywords: 1, category: {default: true, promoted:false, monitored: false, forced: false}, violate: 2, ranking: 3, significance: 4, suitability: 1, assignedState: true, manual_promotion: false},
        {id: 28, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/d', auto_keywords: 3, manual_keywords: 2, category: {default: false, promoted:true, monitored: true, forced: true}, violate: 3, ranking: 4, significance: 1, suitability: 2, assignedState: true, manual_promotion: false},
        {id: 29, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/122', auto_keywords: 0, manual_keywords: 0, category: {default: false, promoted:false, monitored: false, forced: false}, violate: 1, ranking: 1, significance: 2, suitability: 3, assignedState: false, manual_promotion: false},
        {id: 30, pageUrl: 'http://www.umm.edu/health/medical/altmed/d', auto_keywords: 0, manual_keywords: 0, category: {default: true, promoted:true, monitored: true, forced: true}, violate: 1, ranking: 2, significance: 3, suitability: 4, assignedState: false, manual_promotion: false},
        {id: 31, pageUrl: 'http://www.umm.edu/login', auto_keywords: 0, manual_keywords: 0, category: {default: false, promoted:false, monitored: false, forced: false}, violate: 1, ranking: 3, significance: 2, suitability: 1, assignedState: false, manual_promotion: false},
        {id: 32, pageUrl: 'http://www.umm.edu/health/medical/altmed/treatment/herbal-medicine', auto_keywords: 0, manual_keywords: 0, category: {default: true, promoted:true, monitored: true, forced: true}, violate: 4, ranking: 4, significance: 2, suitability: 3, assignedState: false, manual_promotion: false}
    ];
	server.add("/api/pages", payload, "GET", 200);
})(window.mockServer);