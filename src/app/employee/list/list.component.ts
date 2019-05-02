import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { EmployeeService } from '../shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  titles = ['Foto', 'Nombre', 'Categoría', 'Interno/Externo', 'Número de empleado', 'Fecha de nacimiento'];
  listEmployee;
  categories;

  constructor(private employeeService: EmployeeService, private route: Router) { }

  ngOnInit() {
    this.setDataEmployees();
  }

  setDataEmployees() {
    const categories$ = this.employeeService.getListCategories();
    const employees$ = this.employeeService.getListEmployee();

    forkJoin(categories$, employees$).subscribe(data => {
      this.categories = data[0];
      this.listEmployee = data[1];

      this.listEmployee = this.listEmployee.map(employee => {
        return {
          ...employee,
          category: this.categories[employee.category].value
        };
      });
    });
  }

}
