import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMangaComponent } from './home-manga.component';

describe('HomeMangaComponent', () => {
  let component: HomeMangaComponent;
  let fixture: ComponentFixture<HomeMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
