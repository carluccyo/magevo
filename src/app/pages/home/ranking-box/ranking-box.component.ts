import { Component, Injectable, OnInit } from '@angular/core';
import { Logger } from 'angular2-logger/core';

export const RANKING : RankingList = {

    teams: [
        {
            id: 1,
            name: 'Napoli',
            points: 33, 
            ranking: 1

        },
        {
            id: 2,
            name: 'Juventus',
            points: 23, 
            ranking: 2
        },
        {
            id: 3,
            name: 'Milan',
            points: 13, 
            ranking: 3
        }
    ]

}



export class Team {
    id: number;
    name: string;
    points: number;
    ranking: number;
}

export class RankingList {
    teams: Team[];
}

@Injectable()
export class RankingBoxService {

    constructor(private logger: Logger) { }

    getRankingList() {
        return Promise.resolve(RANKING);
    }

}


@Component({
    selector: 'ranking-box',
    templateUrl: 'ranking-box.component.html',
    styleUrls: ['ranking-box.component.scss']
})
export class RankingBoxComponent implements OnInit {

    constructor(private logger: Logger, private rankingBoxService: RankingBoxService) { }

    rankingList : RankingList;

    ngOnInit() {
        this.logger.info('RankingBoxComponent init.........');
        this.rankingBoxService.getRankingList().then(rankingList => this.rankingList = rankingList);
    }

}