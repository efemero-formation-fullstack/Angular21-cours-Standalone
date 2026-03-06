import {Component} from "@angular/core";

@Component({
	selector: "go-top",
	imports: [],
	templateUrl: "./go-top.component.html",
	styleUrl: "./go-top.component.scss",
})
export class GoTopComponent {
	goTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}
}
