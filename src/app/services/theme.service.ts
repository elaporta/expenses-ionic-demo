import { Injectable, RendererFactory2, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {

	renderer: Renderer2;
	public darkMode: boolean = false;

	constructor(
		rendererFactory: RendererFactory2,
		@Inject(DOCUMENT) private document: Document
	){
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	setDarkMode(option: boolean){
		this.darkMode = option;

		if(option){
			this.renderer.addClass(this.document.body, 'dark-theme');
		}
		else{
			this.renderer.removeClass(this.document.body, 'dark-theme');
		}
	}
}
