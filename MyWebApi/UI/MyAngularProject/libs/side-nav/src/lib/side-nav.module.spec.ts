import { async, TestBed } from '@angular/core/testing';
import { SideNavModule } from './side-nav.module';

describe('SideNavModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SideNavModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SideNavModule).toBeDefined();
  });
});
