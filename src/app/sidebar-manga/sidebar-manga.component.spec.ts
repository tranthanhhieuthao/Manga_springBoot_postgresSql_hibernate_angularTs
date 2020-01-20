import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMangaComponent } from './sidebar-manga.component';

describe('SidebarMangaComponent', () => {
  let component: SidebarMangaComponent;
  let fixture: ComponentFixture<SidebarMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
