import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jobs = new BehaviorSubject<any>(
    ["TOPIC: Setting up VPN, VENUE:Training Room-02, DATE: 5/01/2019, TUTOR: Mwesige ", "TOPIC: RestApis, VENUE: Training Room-02, DATE: 5/01/2019, TUTOR: Ssempijja "
,"TOPIC: SoapApis, VENUE:Training Room-02, DATE: 12/01/2019, TUTOR: Mbaalu ","TOPIC: Nodejs , VENUE:Training Room-02, DATE: 12/01/2019, TUTOR: Semanda "
,"TOPIC:......... , VENUE:Training Room-02, DATE: 19/01/2019, TUTOR: Mwesige ","TOPIC:...... , VENUE:Training Room-02, DATE: 19/01/2019, TUTOR: Semanda "
,"TOPIC:....... , VENUE:Training Room-02, DATE: 19/01/2019, TUTOR: Mbaalu ","TOPIC:........ , VENUE:Training Room-02, DATE: 19/01/2019, TUTOR: Jesse "
    ]
    );
  job = this.jobs.asObservable();

  constructor() { }

  changeJob(job) {
    this.jobs.next(job)
  }
}

