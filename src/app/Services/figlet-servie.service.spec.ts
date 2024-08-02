import { TestBed } from '@angular/core/testing';

import { FigletServieService } from './figlet-servie.service';
// import { Http2SecureServer } from 'http2';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FigletServieService', () => {
  let service: FigletServieService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FigletServieService);
    httpMock = TestBed.inject(HttpTestingController)
  });
  afterEach(() => {
    httpMock.verify();
  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Should be called function with stylish text", () => {
    let styledText = "Stylized Text";
    let text = "Hello World";
    service.stylizeText(text).subscribe((res) => {
      expect(res).toBe(styledText)
    })
    let req = httpMock.expectOne('http://localhost:3000/stylize');
    expect(req.request.method).toBe('POST');
    req.flush(styledText);
  })
});
