import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-best-project',
  templateUrl: './best-project.component.html',
  styleUrls: ['./best-project.component.scss']
})
export class BestProjectComponent implements OnInit {
  bestProject = [{ h2: 'Vinyl Record', div: 'Mockup', img: { url: 'assets/images/portfolio-7-sm.jpg' }  },
  { h2: 'Vinyl Record', div: 'Mockup', img: { url: 'assets/images/portfolio-4-sm.jpg' } },
  { h2: 'Vinyl Record', div: 'Mockup', img: { url: 'assets/images/portfolio-5-sm.jpg' }  },
  { h2: 'Vinyl Record', div: 'Mocku', img: { url: 'assets/images/portfolio-9-sm.jpg' }  },
  { h2: 'Vinyl Record', div: 'Mockp', img: { url: 'assets/images/portfolio-3-sm.jpg' }  },
  { h2: 'Vinyl Record', div: 'Mokup', img: { url: 'assets/images/portfolio-8-sm.jpg' }  },
  { h2: 'Vinyl Record', div: 'Mckup', img: { url: 'assets/images/portfolio-2-sm.jpg' }  },
  { h2: 'Vinyl Record', div: 'ockup', img: { url: 'assets/images/portfolio-6-sm.jpg' }  },
  { h2: 'Vinyl Record', div: 'Mockup', img: { url: 'assets/images/portfolio-12-sm.jpg' }  }
  ];
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getBackgroundImage(project) {
    const url = project && project.img ? 'url(/' + project.img.url + ')' : '';
    return this.sanitizer.bypassSecurityTrustStyle(url);
    // return {
    //   backgroundImage: url,
    // };
  }

}
