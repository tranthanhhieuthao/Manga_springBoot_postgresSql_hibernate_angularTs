import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMangaComponent } from './header-manga.component';

describe('HeaderMangaComponent', () => {
  let component: HeaderMangaComponent;
  let fixture: ComponentFixture<HeaderMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
