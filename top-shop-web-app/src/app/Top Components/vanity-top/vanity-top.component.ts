import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';
import { SinkService } from 'src/app/service/sink.service';
import { TopsService } from 'src/app/service/tops.service';
import { SinkType } from 'src/Classes/sinkType';
import { Tops } from 'src/Classes/tops';

@Component({
  selector: 'app-vanity-top',
  templateUrl: './vanity-top.component.html',
  styleUrls: ['./vanity-top.component.css']
})
export class VanityTopComponent implements OnInit {

  topIds!:number[];

  submitted = false;
  submitEnabled = false;
  vanityTopGroup!: FormGroup;
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
    this.commonService.getTopId().subscribe(res => this.topIds = res)

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

  get lengthControl() { return this.vanityTopGroup.get('lengthControl'); }

  get depthControl() { return this.vanityTopGroup.get('depthControl'); }

  get lSideControl() { return this.vanityTopGroup.get('lSideControl'); }

  get rSideControl() { return this.vanityTopGroup.get('rSideControl'); }

  get sinkTypeControl() { return this.vanityTopGroup.get('sinkTypeControl'); }

  get sinkMeasureControl() { return this.vanityTopGroup.get('sinkMeasureControl'); }

  get sinkSideControl() { return this.vanityTopGroup.get('sinkSideControl'); }

  selectLSide(event: Event) {
    this.vanityTopGroup.patchValue({
      lSideControl: (event.target as HTMLInputElement).value
    });
  }

  selectRSide(event: Event) {
    this.vanityTopGroup.patchValue({
      rSideControl: (event.target as HTMLInputElement).value
    });
  }

  selectSinkType(event: Event) {
    this.vanityTopGroup.patchValue({
      sinkTypeControl: (event.target as HTMLInputElement).value
    });

    if ((event.target as HTMLInputElement).value == "1" || (event.target as HTMLInputElement).value == null) {
      this.sinkShow = false
      this.sinkSideControl?.setValue('From the left')
      this.sinkMeasureControl?.setValue('0')
      this.vanityTopGroup.get('sinkMeasureControl')?.clearValidators;
      this.vanityTopGroup.get('sinkSideControl')?.clearValidators;
    } else {
      this.sinkShow = true
      this.vanityTopGroup.get('sinkMeasureControl')?.setValidators([Validators.required, Validators.pattern("^\\d{1,3}(-*\\d{1,2}\\/\\d{1,2}){0,1}")]);
      this.vanityTopGroup.get('sinkSideControl')?.setValidators(Validators.required);
    }
  }

  selectSinkSide(event: Event) {
    this.vanityTopGroup.patchValue({
      sinkSideControl: (event.target as HTMLInputElement).value
    });
  }

  onSubmit() {
    
    this.commonService.changeData(1);
    this.submitted = true;
    console.log(this.vanityTopGroup.invalid)

    if(this.vanityTopGroup.invalid)
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

      //this.vanityTopGroup.reset(this.vanityTopGroup.value)

      // this.topService.saveTop(this.model).subscribe(
      //   (response: Tops) => {
      //     this.model = response;
      //   }
      // )
    
  }

  initializeForm(): void {
    this.vanityTopGroup = this.fb.group({
      lengthControl: ['', [Validators.required, Validators.pattern("^\\d{1,3}(-*\\d{1,2}\\/\\d{1,2}){0,1}")]],
      depthControl: ['', [Validators.required, Validators.pattern("\\d{1,2}")]],
      lSideControl: ['RAW'],
      rSideControl: ['RAW'],
      sinkTypeControl: ['1'],
      sinkMeasureControl: ['0'],
      sinkSideControl: ['From the left']
    });
  }

  fieldCheck(field: string) {
      let control = this.vanityTopGroup.get(field);
      return (this.submitted && control?.invalid)
  }

  requiredControl(field: string) {
    // @ts-ignore: Object is possibly 'null'.
    return this.vanityTopGroup.get(field)?.errors?.required;
  }

  patternedControl(field: string) {
    // @ts-ignore: Object is possibly 'null'
    return this.vanityTopGroup.get(field)?.errors?.pattern;
  }
}