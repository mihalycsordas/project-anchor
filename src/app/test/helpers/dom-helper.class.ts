import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Type } from '@angular/core';

export class DomHelperClass<T> {
  private fixture: ComponentFixture<T>;

  constructor(fixture: ComponentFixture<T>) {
    this.fixture = fixture;
  }

  singleText(tagName: string): void {
    const h2Ele = this.fixture.debugElement.query(By.css(tagName));
    if (h2Ele) {
      return h2Ele.nativeElement.textContent;
    }
  }

  count(tagName: string): number {
    const elements = this.fixture.debugElement.queryAll(By.css(tagName));
    return elements.length;
  }

  countText(tagName: string, text: string): number {
    const elements = this.fixture.debugElement.queryAll(By.css(tagName));
    return elements.filter((element) => element.nativeElement.textContent === text).length;
  }

  clickButton(buttonText: string): void {
    this.findAll('button').forEach((button) => {
      const buttonElement: HTMLButtonElement = button.nativeElement;
      if (buttonElement.textContent === buttonText) {
        buttonElement.click();
      }
    });
  }

  clickLink(linkText: string): void {
    this.findAll('a').forEach((a) => {
      const linkElement: HTMLLinkElement = a.nativeElement;
      if (linkElement.textContent === linkText) {
        linkElement.click();
      }
    });
  }

  clickLinkWithClass(className: string): void {
    this.findAll('a.' + className).forEach((a) => {
      a.nativeElement.click();
    });
  }

  writeToInput(selector: string, text: string): void {
    const input = this.fixture.debugElement.query(By.css(selector)).nativeElement as HTMLInputElement;
    input.value = text;
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('change'));
  }

  findByCss(css: string): DebugElement {
    return this.fixture.debugElement.query(By.css(css));
  }

  findById(tagName: string): DebugElement {
    return this.fixture.debugElement.query(By.css(`#${tagName}`));
  }

  findAll(tagName: string): Array<DebugElement> {
    return this.fixture.debugElement.queryAll(By.css(tagName));
  }

  find(tagName: string): DebugElement {
    return this.fixture.debugElement.query(By.css(tagName));
  }

  findComponent<R>(component: Type<R>): DebugElement {
    return this.fixture.debugElement.query(By.directive(component));
  }
}
