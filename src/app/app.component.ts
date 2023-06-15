import { Component } from '@angular/core';
//import {MatTableModule} from '@angular/material/table';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class AppComponent {  
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['environment', 'may01', 'may02', 'may03','may04','may05','may06','may07','may08','may09'];
  isotopeColumnsToDisplay = ['environment', 'may01', 'may02', 'may03','may04','may05','may06','may07','may08','may09'];
  expandedElements: PeriodicElement[] = [];

  toggleExpansion(row: PeriodicElement): void {
    const index = this.expandedElements.indexOf(row);
    if (index >= 0) {
      this.expandedElements.splice(index, 1);
    } else {
      this.expandedElements.push(row);
    }
  }
  
  isRowExpanded(row: PeriodicElement): boolean {
    return this.expandedElements.includes(row);
  }

  doSomething(element: any) {
    // Perform the desired action here, using the 'element' data if needed
    console.log('Button clicked for element:', element);
  }
}

export interface PeriodicElement {
  environment: string;
  may01: boolean;
  may02: boolean;
  may03: boolean;
  may04: boolean;
  may05: boolean;
  may06: boolean;
  may07: boolean;
  may08: boolean;
  may09: boolean;
  isotopes: Isotope[];
}

export interface Isotope{
  environment: string;
  may01: boolean;
  may02: boolean;
  may03: boolean;
  may04: boolean;
  may05: boolean;
  may06: boolean;
  may07: boolean;
  may08: boolean;
  may09: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    environment: "PYLON", 
    may01:true, 
    may02:true, 
    may03:true, 
    may04:true, 
    may05:true, 
    may06:true, 
    may07:true, 
    may08:true,
    may09:true,
    isotopes: [
      {
        environment: "LGW : Production", 
        may01: true, 
        may02: true, 
        may03: false, 
        may04: true, 
        may05: true, 
        may06: false, 
        may07: true, 
        may08: true,
        may09: true,
      },
      {
        environment: "LGW : Integration US ", 
        may01: true, 
        may02: true, 
        may03: false, 
        may04: true, 
        may05: true, 
        may06: false, 
        may07: true, 
        may08: true,
        may09: true,
      },
      {
        environment: "LGW : Integration AU", 
        may01: true, 
        may02: true, 
        may03: true, 
        may04: false, 
        may05: false, 
        may06: true, 
        may07: true, 
        may08: false,
        may09: true,
      },
      {
        environment: "LGW : Integration JP", 
        may01: true, 
        may02: true, 
        may03: false, 
        may04: true, 
        may05: true, 
        may06: false, 
        may07: true, 
        may08: true,
        may09: true
      },
      {
        environment: "SGW : Production", 
        may01: true, 
        may02: false, 
        may03: true, 
        may04: true, 
        may05: true, 
        may06: false, 
        may07: true, 
        may08: true,
        may09: false
      },
      {
        environment: "SGW : Integration US ", 
        may01: true, 
        may02: true, 
        may03: false, 
        may04: true, 
        may05: true, 
        may06: false, 
        may07: true, 
        may08: true,
        may09: true,
      },
      {
        environment: "SGW : Integration AU", 
        may01: true, 
        may02: true, 
        may03: true, 
        may04: false, 
        may05: false, 
        may06: true, 
        may07: true, 
        may08: false,
        may09: true,
      },
      {
        environment: "SGW : Integration JP", 
        may01: true, 
        may02: true, 
        may03: false, 
        may04: true, 
        may05: true, 
        may06: false, 
        may07: true, 
        may08: true,
        may09: true
      }
    ]
  },
  {
    environment: "MOBIUS", 
    may01:true, 
    may02:true, 
    may03:true, 
    may04:true, 
    may05:true, 
    may06:true, 
    may07:true, 
    may08:true,
    may09:true,
    isotopes: [
      {
        environment: "Production", 
        may01: true, 
        may02: true, 
        may03: true, 
        may04: false, 
        may05: false, 
        may06: true, 
        may07: true, 
        may08: false,
        may09: true,
      },
      {
        environment: "Integration US", 
        may01: true, 
        may02: true, 
        may03: true, 
        may04: false, 
        may05: false, 
        may06: true, 
        may07: true, 
        may08: false,
        may09: true,
      },
      {
        environment: "Integration AU", 
        may01: true, 
        may02: true, 
        may03: true, 
        may04: false, 
        may05: false, 
        may06: true, 
        may07: true, 
        may08: false,
        may09: true,
      },
      {
        environment: "Integration JP", 
        may01: true, 
        may02: true, 
        may03: false, 
        may04: true, 
        may05: true, 
        may06: false, 
        may07: true, 
        may08: true,
        may09: true
      }
    ]
  },
  {
    environment: "LEXUS", 
    may01:true, 
    may02:true, 
    may03:true, 
    may04:true, 
    may05:true, 
    may06:true, 
    may07:true, 
    may08:true,
    may09:true,
    isotopes: [
      {
        environment: "Production", 
        may01: true, 
        may02: true, 
        may03: false, 
        may04: true, 
        may05: true, 
        may06: false, 
        may07: true, 
        may08: true,
        may09: true
      },
      {
        environment: "Integration US", 
        may01: true, 
        may02: true, 
        may03: true, 
        may04: false, 
        may05: false, 
        may06: true, 
        may07: true, 
        may08: false,
        may09: true,
      },
      {
        environment: "Integration AU", 
        may01: true, 
        may02: true, 
        may03: true, 
        may04: false, 
        may05: false, 
        may06: true, 
        may07: true, 
        may08: false,
        may09: true,
      },
      {
        environment: "Integration JP", 
        may01: true, 
        may02: true, 
        may03: false, 
        may04: true, 
        may05: true, 
        may06: false, 
        may07: true, 
        may08: true,
        may09: true
      }
    ]
  },
];

ELEMENT_DATA.forEach((element) => {
  if (element.environment === "PYLON" || element.environment === "MOBIUS" || element.environment === "LEXUS") {
    element.isotopes.forEach((isotope) => {
      element["may01"] = element["may01"] && isotope.may01;
      element["may02"] = element["may02"] && isotope.may02;
      element["may03"] = element["may03"] && isotope.may03;
      element["may04"] = element["may04"] && isotope.may04;
      element["may05"] = element["may05"] && isotope.may05;
      element["may06"] = element["may06"] && isotope.may06;
      element["may07"] = element["may07"] && isotope.may07;
      element["may08"] = element["may08"] && isotope.may08;
      element["may09"] = element["may09"] && isotope.may09;
    });
  }
});


/**
 * @title Basic use of `<table mat-table>`
 */



