import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarbarMangaComponent } from './narbar-manga.component';

describe('NarbarMangaComponent', () => {
  let component: NarbarMangaComponent;
  let fixture: ComponentFixture<NarbarMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarbarMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarbarMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
