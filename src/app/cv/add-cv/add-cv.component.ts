import { Component, inject } from "@angular/core";
import {
  Validators,
  AbstractControlOptions,
  FormBuilder,
  AbstractControl,
} from "@angular/forms";
import { Cv } from "../model/cv.model";
import { catchError, EMPTY, filter, tap } from "rxjs";
import { Router } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { CvService } from "../service/cv.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-add-cv",
  templateUrl: "./add-cv.component.html",
  styleUrls: ["./add-cv.component.css"],
})
export class AddCvComponent {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  router = inject(Router);
  toastr = inject(ToastrService);
  form = this.formBuilder.group(
    {
      name: ["", Validators.required],
      firstname: ["", Validators.required],
      path: [""],
      job: ["", Validators.required],
      cin: [
        "",
        {
          validators: [Validators.required, Validators.pattern("[0-9]{8}")],
          asyncValidators: [],
        },
      ],
      age: [
        0,
        {
          validators: [Validators.required],
          updateOn: "change",
        },
      ],
    },
    {
      validators: [],
      asyncValidators: [],
      updateOn: "change",
    }
  );
  constructor() {}
  addCv() {
    // this.cvService.addCv(this.form.value as Cv).subscribe({
    //   next: (cv) => {
    //     this.router.navigate([APP_ROUTES.cv]);
    //     this.toastr.success(`Le cv ${cv.firstname} ${cv.name}`);
    //   },
    //   error: (err) => {
    //     this.toastr.error(`Une erreur s'est produite, Veuillez contacter l'admin`);
    //   },
    // });
  }

  get name(): AbstractControl {
    return this.form.get("name")!;
  }
  get firstname() {
    return this.form.get("firstname");
  }
  get age(): AbstractControl {
    return this.form.get("age")!;
  }
  get job() {
    return this.form.get("job");
  }
  get path() {
    return this.form.get("path");
  }
  get cin(): AbstractControl {
    return this.form.get("cin")!;
  }
}
