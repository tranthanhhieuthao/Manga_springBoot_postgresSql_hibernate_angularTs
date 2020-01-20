import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMangaComponent } from './footer-manga.component';

describe('FooterMangaComponent', () => {
  let component: FooterMangaComponent;
  let fixture: ComponentFixture<FooterMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
