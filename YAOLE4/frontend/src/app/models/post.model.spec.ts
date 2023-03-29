import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsModel } from './post.model';

describe('PostsModel', () => {
  let component: PostsModel;
  let fixture: ComponentFixture<PostsModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsModel ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});