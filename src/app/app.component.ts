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
  expandedElement: PeriodicElement | null = null;

  toggleExpansion(row: PeriodicElement): void {
    this.expandedElement = this.expandedElement === row ? null : row;
    //row.expandedElement = !row.expandedElement;
  }

  isRowExpanded(row: PeriodicElement): boolean {
    return this.expandedElement === row;
  }

  doSomething(element: any) {
    // Perform the desired action here, using the 'element' data if needed
    console.log('Button clicked for element:', element);
  }
}

export interface PeriodicElement {
  environment: string;
  may01: number;
  may02: number;
  may03: number;
  may04: number;
  may05: number;
  may06: number;
  may07: number;
  may08: number;
  may09: number;
  isotopes: Isotope[];
}

export interface Isotope{
  environment: string;
  may01: number;
  may02: number;
  may03: number;
  may04: number;
  may05: number;
  may06: number;
  may07: number;
  may08: number;
  may09: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    environment: "PYLON", 
    may01:0, 
    may02:0, 
    may03:0, 
    may04:0, 
    may05:0, 
    may06:0, 
    may07:0, 
    may08:0,
    may09:0,
    isotopes: [
      {
        environment: "LGW", 
        may01: 98, 
        may02: 81, 
        may03: 99, 
        may04:100, 
        may05:89, 
        may06: 94, 
        may07:98, 
        may08:79,
        may09:98
      },
      {
        environment: "SGW", 
        may01: 89, 
        may02: 99, 
        may03: 87, 
        may04: 92, 
        may05: 90, 
        may06:100, 
        may07:89, 
        may08:99,
        may09:98
      }
    ]
  },
  {
    environment: "MOBIUS", 
    may01:0, 
    may02:0, 
    may03:0, 
    may04:0, 
    may05:0, 
    may06:0, 
    may07:0, 
    may08:0,
    may09:0,
    isotopes: [
      {
        environment: "Production", 
        may01: 96, 
        may02: 99, 
        may03: 100, 
        may04:89, 
        may05:87, 
        may06: 99, 
        may07:100, 
        may08:95,
        may09:94,
      },
      {
        environment: "Integration", 
        may01: 100, 
        may02: 98, 
        may03: 89, 
        may04:100, 
        may05:98, 
        may06: 90, 
        may07:100, 
        may08:83,
        may09:99,
      }
    ]
  },
  {
    environment: "LEXUS", 
    may01:0, 
    may02:0, 
    may03:0, 
    may04:0, 
    may05:0, 
    may06:0, 
    may07:0, 
    may08:0,
    may09:0,
    isotopes: [
      {
        environment: "Production", 
        may01: 99, 
        may02: 98, 
        may03: 82, 
        may04:93, 
        may05:99, 
        may06: 97, 
        may07:93, 
        may08:97,
        may09:91,
      },
      {
        environment: "Integration", 
        may01: 89, 
        may02: 89, 
        may03: 100, 
        may04:99, 
        may05:100, 
        may06: 91, 
        may07:98, 
        may08:100,
        may09:90,
      }
    ]
  },
];

ELEMENT_DATA.forEach((element) => {
  if (element.environment === "PYLON" || element.environment === "MOBIUS" || element.environment === "LEXUS") {
    element.isotopes.forEach((isotope) => {
      element["may01"] += isotope.may01;
      element["may02"] += isotope.may02;
      element["may03"] += isotope.may03;
      element["may04"] += isotope.may04;
      element["may05"] += isotope.may05;
      element["may06"] += isotope.may06;
      element["may07"] += isotope.may07;
      element["may08"] += isotope.may08;
      element["may09"] += isotope.may09;
    });
  }
});


/**
 * @title Basic use of `<table mat-table>`
 */



