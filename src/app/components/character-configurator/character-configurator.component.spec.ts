import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterConfiguratorComponent } from './character-configurator.component';

describe('CharacterConfiguratorComponent', () => {
  let component: CharacterConfiguratorComponent;
  let fixture: ComponentFixture<CharacterConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
