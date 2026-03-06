import {Component} from "@angular/core";
import {HighlightJsDirective} from "ngx-highlight-js";
import {TheoryHeaderComponent} from "../../components/layout/theory-header/theory-header.component";

@Component({
	selector: "theory-composant",
	imports: [HighlightJsDirective, TheoryHeaderComponent],
	templateUrl: "./theory-composant.component.html",
	styleUrl: "./theory-composant.component.scss",
})
export class TheoryComposantComponent {
	imageUrlAppComponentFiles = "assets/theory/composant/app-component-files.png";
}
