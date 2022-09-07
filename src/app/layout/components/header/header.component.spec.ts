import {ComponentFixture, TestBed} from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import {RouterTestingModule} from "@angular/router/testing";
import {DomHelperClass} from "@app/test/helpers/dom-helper.class";
import {Router} from "@angular/router";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let dh: DomHelperClass<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    dh = new DomHelperClass(fixture);
  });

  describe('#Simple HTML', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('Should create', () => {
      expect(component).toBeTruthy();
    });

    it('Should show the brand logo', () => {
      expect(dh.count('a img')).toBe(1);
    });

    it('Should show navigation', () => {
      expect(dh.count('ul')).toBe(1);
    });
  });
});
