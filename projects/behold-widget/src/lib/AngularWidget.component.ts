import { Component, Input, Output, EventEmitter } from '@angular/core';
import addScript from './addScript';

@Component({
  selector: 'ngx-behold-widget',
  standalone: true,
  template: `<div
    class="behold-sdk-angular-widget-placeholder"
    [attr.data-feedid]="feedId"
  ></div>`,
})
export class BeholdWidgetComponent {
  @Input() feedId = '';
  @Output() load = new EventEmitter<void>();

  ngOnInit() {
    addScript();

    const placeholderEls = document.querySelectorAll(
      '.behold-sdk-angular-widget-placeholder'
    );

    placeholderEls.forEach((placeholderEl) => {
      if (placeholderEl instanceof HTMLElement) {
        const widgetEl = document.createElement('behold-widget');
        widgetEl.setAttribute('feed-id', placeholderEl.dataset['feedid'] || '');
        widgetEl.addEventListener('load', () => {
          this.load.emit();
        });
        placeholderEl.replaceWith(widgetEl);
      }
    });
  }
}
