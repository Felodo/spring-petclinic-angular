import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettypeAddComponent } from './pettype-add.component';
import {SpecialtyService} from "../../specialties/specialty.service";
import {Specialty} from "../../specialties/specialty";
import Spy = jasmine.Spy;
import {PetTypeService} from "../pettype.service";
import {PetType} from "../pettype";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedRouteStub, RouterStub} from "../../testing/router-stubs";
import {FormsModule} from "@angular/forms";
import {Observable} from "rxjs/Rx";
import {of} from "rxjs/index";

class PetTypeServiceStub {
  addPetType(petType: PetType): Observable<PetType> {
    return of();
  }
}

describe('PettypeAddComponent', () => {
  let component: PettypeAddComponent;
  let fixture: ComponentFixture<PettypeAddComponent>;
  let pettypeService: PetTypeService;
  let spy: Spy;
  let testPettype: PetType;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettypeAddComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule],
      providers: [
        {provide: PetTypeService, useClass: PetTypeServiceStub},
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettypeAddComponent);
    component = fixture.componentInstance;
    testPettype = {
      id: 1,
      name: 'test'
    };

    pettypeService = fixture.debugElement.injector.get(PetTypeService);
    spy = spyOn(pettypeService, 'addPetType')
      .and.returnValue(Observable.of(testPettype));

    fixture.detectChanges();
  });

  it('should create PettypeAddComponent', () => {
    expect(component).toBeTruthy();
  });
});
