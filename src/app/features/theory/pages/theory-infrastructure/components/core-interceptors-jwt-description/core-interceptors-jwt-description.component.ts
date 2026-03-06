import {Component} from "@angular/core";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "core-interceptors-jwt-description",
	imports: [HighlightJsDirective],
	templateUrl: "./core-interceptors-jwt-description.component.html",
	styleUrl: "./core-interceptors-jwt-description.component.scss",
})
export class CoreInterceptorsJwtDescriptionComponent {}
