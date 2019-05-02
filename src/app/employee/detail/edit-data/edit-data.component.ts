import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {
  @Input() employee;

  categories;
  action;

  @Output() cancelEdit$: EventEmitter<boolean> = new EventEmitter();
  
  employeeForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    birthday: ['', Validators.required],
    num_employee: ['', Validators.required],
    category: ['', Validators.required],
    isInt: [false, Validators.required],
    url_photo: ['']
  });

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.action = this.employeeService.getActionButton();

    this.employeeService.getListCategories().subscribe(categories => {
      this.categories = categories;

      if (this.action === 'edit') {
        const categoryUser = this.categories.filter(category => {
          return category.value === this.employee.category;
        });

        this.employee = {
          ...this.employee,
          category: categoryUser[0].id
        };

        this.employeeForm.setValue(this.employee);
      }
    });
  }

  onSubmit() {
    if (this.action === 'new') {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe(employee => {
        this.router.navigate(['/employees']);
      });
    } else {
      this.employeeService.updateEmployee(this.employeeForm.value).subscribe(message => {
        this.cancelEdit();
      });
    }
  }

  cancelEdit() {
    this.cancelEdit$.emit(true);
  }
}
