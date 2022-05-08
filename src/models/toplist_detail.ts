 export interface TopListDetail {
	// subscribers: any[];
	// subscribed?: any;
	// creator?: any;
	// artists?: any;
	// tracks: TopListDetailTracks[];
	// updateFrequency: string;
	// backgroundCoverId: number;
	// backgroundCoverUrl?: any;
	// titleImage: number;
	// titleImageUrl?: any;
	// englishTitle?: any;
	// opRecommend: boolean;
	// recommendInfo?: any;
	// subscribedCount: number;
	// cloudTrackCount: number;
	// userId: number;
	// highQuality: boolean;
	// createTime: number;
	// specialType: number;
	// coverImgId: number;
	// newImported: boolean;
	// anonimous: boolean;
	// updateTime: number;
	// trackCount: number;
	// coverImgUrl: string;
	// commentThreadId: string;
	// trackUpdateTime: number;
	// totalDuration: number;
	// privacy: number;
	// playCount: number;
	// trackNumberUpdateTime: number;
	// adType: number;
	// description: string;
	// ordered: boolean;
	// tags: any[];
	// status: number;
	// name: string;
	// id: number;
	// coverImgId_str: string;
	// ToplistType: string;
	 title: string;
	 list: TopListItem[];
}
 export interface TopListDetailTracks {
	first: string;
	second: string;
}
export interface TopListItem {
	value: number,
	topId: number,
	label: string,
	intro?: string,
	period: string,
	updateTime: string,
	listenNum: number,
	picUrl: string,
	song?: TopListSongPreview[];
}
export interface TopListSongPreview {
	"rank": number,
	"rankType": number,
	"rankValue": string,
	"recType": number,
	"songId": number,
	"vid": string,
	"albumMid": string,
	"title": string,
	"singerName": string,
	"singerMid": string,
	"songType": number,
	"uuidCnt": number,
	"cover": string,
	"mvid": number
}