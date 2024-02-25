export default function addScript(): void {
  const existingScriptEl = document.querySelector(
    '[src="https://w.behold.so/widget.js"]'
  );
  if (existingScriptEl || customElements.get('behold-widget')) return;

  const scriptEl = document.createElement('script');
  scriptEl.src = 'https://w.behold.so/widget.js';
  scriptEl.type = 'module';
  document.body.appendChild(scriptEl);
}
