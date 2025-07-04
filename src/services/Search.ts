import { OneMap } from '../OneMap';
import { ApiRes } from '../types';
import { Service } from '.';

export interface SearchReq {
  searchVal: string;
  returnGeom: boolean;
  getAddrDetails: boolean;
  pageNum?: number;
}
export interface SearchRes extends ApiRes {
  found: number;
  totalNumPages: number;
  pageNum: number;
  results: {
    SEARCHVAL: string;
    BLK_NO: string;
    ROAD_NAME: string;
    BUILDING: string;
    ADDRESS: string;
    POSTAL: string;
    X: number;
    Y: number;
    LATITUDE: number;
    LONGITUDE: number;
  }[];
}

export class Search extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'common/elastic/search', true);
  }

  async search(req: SearchReq): Promise<SearchRes> {
    return this.fetch('', req);
  }

}
