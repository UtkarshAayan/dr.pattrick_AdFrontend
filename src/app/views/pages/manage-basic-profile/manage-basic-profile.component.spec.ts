import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBasicProfileComponent } from './manage-basic-profile.component';

describe('ManageBasicProfileComponent', () => {
  let component: ManageBasicProfileComponent;
  let fixture: ComponentFixture<ManageBasicProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBasicProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBasicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
