import {
  Component,
  Input,
  Output,
  EventEmitter,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

@Component({
  selector: 'ngx-behold-widget',
  standalone: true,
  template: `<behold-widget
    [attr.feed-id]="feedId"
    (load)="onLoad()"
  ></behold-widget>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BeholdWidgetComponent {
  @Input() feedId = '';
  @Output() load = new EventEmitter<void>();

  onLoad() {
    this.load.emit();
  }

  ngOnInit() {
    const existingScriptEl = document.querySelector(
      '[src*="https://w.behold.so/widget.js"]'
    );
    if (existingScriptEl || customElements.get('behold-widget')) return;

    const scriptEl = document.createElement('script');
    scriptEl.src = 'https://w.behold.so/widget.js';
    scriptEl.type = 'module';
    document.body.appendChild(scriptEl);
  }
}
