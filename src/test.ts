import {getTestBed} from '@angular/core/testing';
import {NgModule, provideExperimentalZonelessChangeDetection,} from '@angular/core';
import {BrowserTestingModule, platformBrowserTesting,} from '@angular/platform-browser/testing';

@NgModule({
  providers: [
    provideExperimentalZonelessChangeDetection(),
  ],
})
export class ZonelessTestModule {}

getTestBed().initTestEnvironment(
  [BrowserTestingModule, ZonelessTestModule],
  platformBrowserTesting(),
);
