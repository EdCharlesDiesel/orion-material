import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToolbarTopMenuComponent } from './layouts/toolbar/toolbar-top-menu/toolbar-top-menu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarTopMenuComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it(`should have as title 'Orion e-Commerce'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Orion e-Commerce');
  });
});
