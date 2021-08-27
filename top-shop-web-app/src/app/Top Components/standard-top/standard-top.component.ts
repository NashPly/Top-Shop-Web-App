import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';
import { SinkService } from 'src/app/service/sink.service';
import { TopsService } from 'src/app/service/tops.service';
import { SinkType } from 'src/Classes/sinkType';
import { Tops } from 'src/Classes/tops';

@Component({
  selector: 'app-Standard-top',
  templateUrl: './standard-top.component.html',
  styleUrls: ['./standard-top.component.css']
})
export class StandardTopComponent implements OnInit {

  
  topId!:string;

  submitted = false;
  submitEnabled = false;
  standardTopGroup!: FormGroup;
  model!: Tops;
  showSubmit = true;
  capOptions: string[] = ["RAW", "CAP", "SPL"];
  sinkType: SinkType[] = [
    { "id": 1, "sink_type": "NONE" },
    { "id": 2, "sink_type": "SINGLE BOWL" },
    { "id": 3, "sink_type": "DOUBLE BOWL" }];
  sinkSide: string[] = ["From the left", "From the right"];
  sinkShow: boolean = false;


  constructor(private topService: TopsService, private sinkService: SinkService, private fb: FormBuilder, private commonService: CommonService) { }

  ngOnInit() {
    //Data service
    this.commonService.data$.subscribe(res => this.topId = res)

    this.topService.getBlankTop().subscribe(
      (response: Tops) => {
        this.model = response;
        this.initializeForm();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  get lengthControl() { return this.standardTopGroup.get('lengthControl'); }

  get depthControl() { return this.standardTopGroup.get('depthControl'); }

  get lSideControl() { return this.standardTopGroup.get('lSideControl'); }

  get rSideControl() { return this.standardTopGroup.get('rSideControl'); }

  get sinkTypeControl() { return this.standardTopGroup.get('sinkTypeControl'); }

  get sinkMeasureControl() { return this.standardTopGroup.get('sinkMeasureControl'); }

  get sinkSideControl() { return this.standardTopGroup.get('sinkSideControl'); }

  selectLSide(event: Event) {
    this.standardTopGroup.patchValue({
      lSideControl: (event.target as HTMLInputElement).value
    });
  }

  selectRSide(event: Event) {
    this.standardTopGroup.patchValue({
      rSideControl: (event.target as HTMLInputElement).value
    });
  }

  selectSinkType(event: Event) {
    this.standardTopGroup.patchValue({
      sinkTypeControl: (event.target as HTMLInputElement).value
    });

    if ((event.target as HTMLInputElement).value == "1" || (event.target as HTMLInputElement).value == null) {
      this.sinkShow = false
      this.sinkSideControl?.setValue('From the left')
      this.sinkMeasureControl?.setValue('0')
      this.standardTopGroup.get('sinkMeasureControl')?.clearValidators;
      this.standardTopGroup.get('sinkSideControl')?.clearValidators;
    } else {
      this.sinkShow = true
      this.standardTopGroup.get('sinkMeasureControl')?.setValidators([Validators.required, Validators.pattern("^\\d{1,3}(-*\\d{1,2}\\/\\d{1,2}){0,1}")]);
      this.standardTopGroup.get('sinkSideControl')?.setValidators(Validators.required);
    }
  }

  selectSinkSide(event: Event) {
    this.standardTopGroup.patchValue({
      sinkSideControl: (event.target as HTMLInputElement).value
    });
  }

  onSubmit() {
    
    this.commonService.changeData('1');
    this.submitted = true;
    console.log(this.standardTopGroup.invalid)

    if(this.standardTopGroup.invalid)
    { return; }
     
      this.model.length = this.lengthControl?.value;
      this.model.depth = this.depthControl?.value;
      this.model.lSide = this.lSideControl?.value;
      this.model.rSide = this.rSideControl?.value;
      this.model.sinkType = this.sinkTypeControl?.value;
      this.model.sinkMeasurement = this.sinkMeasureControl?.value;
      this.model.sinkSide = this.sinkTypeControl?.value;
      console.log("model ");
      console.log(this.model);

      //this.standardTopGroup.reset(this.standardTopGroup.value)

      // this.topService.saveTop(this.model).subscribe(
      //   (response: Tops) => {
      //     this.model = response;
      //   }
      // )
    
  }

  initializeForm(): void {
    this.standardTopGroup = this.fb.group({
      lengthControl: ['', [Validators.required, Validators.pattern("^\\d{1,3}(-*\\d{1,2}\\/\\d{1,2}){0,1}")]],
      depthControl: ['', [Validators.required, Validators.pattern("\\d{1,2}")]],
      lSideControl: ['RAW'],
      rSideControl: ['RAW'],
      sinkTypeControl: ['1'],
      sinkMeasureControl: ['0'],
      sinkSideControl: ['From the left']
    });
  }

  
  /*// initializeForm(): void {
  //   console.log(this.model);
  //   this.standardTopGroup = this.fb.group({
  //     lengthControl: [this.model.length, [Validators.required, Validators.pattern("[0-9]{1,3}(-*\d{1,2}\/\d{1,2}){0,1}")]],
  //           depthControl: [this.model.depth, [Validators.required, Validators.pattern("/d{2}")]],
  //           lSideControl: [this.model.lSide],
  //           rSideControl: [this.model.rSide],
  //           sinkTypeControl: [this.model.sinkType.id],
  //           sinkMeasureControl: [this.model.sinkMeasurement, Validators.pattern("[0-9]{1,3}(-*\d{1,2}\/\d{1,2}){0,1}")],
  //           sinkSideControl: this.model.sinkSide
  //         });
  
      // console.log(this.submitEnabled);
      // console.log(field);
      // console.log(control);
      // console.log("this.submitted");
      // console.log(this.submitted);
      // console.log("control?.invalid");
      // console.log(control?.invalid);
      // console.log("control?.dirty");
      // console.log(control?.dirty);
      // console.log("control?.touched");
      // console.log(control?.touched);
      
  // }*/

  fieldCheck(field: string) {
      let control = this.standardTopGroup.get(field);
      return (this.submitted && control?.invalid)
  }

  requiredControl(field: string) {
    // @ts-ignore: Object is possibly 'null'.
    return this.standardTopGroup.get(field)?.errors?.required;
  }

  patternedControl(field: string) {
    // @ts-ignore: Object is possibly 'null'
    return this.standardTopGroup.get(field)?.errors?.pattern;
  }
}