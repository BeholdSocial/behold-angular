import { Component } from '@angular/core';
import addScript from './addScript';

@Component({
  selector: 'behold-widget',
  standalone: true,
  template: `<div
    class="behold-sdk-angular-widget-placeholder"
    [attr.data-feedid]="feedId"
  ></div>`,
})
export class BeholdWidgetComponent {
  feedId = '';

  ngOnInit() {
    addScript();

    const placeholderEls = document.querySelectorAll(
      '.behold-sdk-angular-widget-placeholder'
    );

    placeholderEls.forEach((placeholderEl) => {
      if (placeholderEl instanceof HTMLElement) {
        const widgetEl = document.createElement('behold-widget');
        widgetEl.setAttribute('feed-id', placeholderEl.dataset['feedid'] || '');
        placeholderEl.replaceWith(widgetEl);
      }
    });
  }
}
