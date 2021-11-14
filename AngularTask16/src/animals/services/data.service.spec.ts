import {HttpClientModule} from "@angular/common/http";
import {TestBed} from "@angular/core/testing";
import {DataService} from "./data.service";

let appService: DataService;
describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [DataService]
    });
    appService = TestBed.inject(DataService)
  });
})
