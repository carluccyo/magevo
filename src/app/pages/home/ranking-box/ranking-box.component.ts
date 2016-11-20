import { Component, Injectable, OnInit } from '@angular/core';
import { Logger } from 'angular2-logger/core';




export class Team {
    id: number;
    name: string;
    description: string;
    points: number;
}

export class RankingList {
    teams: Team[];
}

@Injectable()
export class RankingBoxService {

    constructor(private logger: Logger) { }

}


@Component({
    selector: 'ranking-box',
    templateUrl: 'ranking-box.component.html',
    styleUrls: ['ranking-box.component.scss']
})
export class RankingBoxComponent implements OnInit {

    constructor(private logger: Logger, private rankingBoxService: RankingBoxService) { }

    ngOnInit() {
        this.logger.info('RankingBoxComponent init.........');
    }

}