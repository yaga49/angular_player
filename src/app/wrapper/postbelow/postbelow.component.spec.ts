import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbelowComponent } from './postbelow.component';

describe('PostbelowComponent', () => {
  let component: PostbelowComponent;
  let fixture: ComponentFixture<PostbelowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostbelowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
