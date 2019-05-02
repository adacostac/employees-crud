import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { EmployeeService } from './shared/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  isEditData = false;

  employee;
  categories;

  id;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id === 'new') {
      this.isEditData = !this.isEditData;
      this.employeeService.setActionButton(this.id);
    } else {
      this.setDataEmployee(this.id);
      this.employeeService.setActionButton('edit');
    }
  }

  changeAction() {
    console.log('changeAction: ', this.id);
    this.isEditData = !this.isEditData;
    this.setDataEmployee(this.id);
  }

  setDataEmployee(id) {
    const categories$ = this.employeeService.getListCategories();
    const empl$ = this.employeeService.getEmployeeById(id);

    forkJoin(categories$, empl$).subscribe(data => {
      this.categories = data[0];
      const employee = data[1];

      this.employee = {
        ...employee,
        category: this.categories[employee.category].value
      };
    });
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employee.id).subscribe(message => {
      console.log(message);
      this.router.navigate(['/employees']);
    });
  }
}
