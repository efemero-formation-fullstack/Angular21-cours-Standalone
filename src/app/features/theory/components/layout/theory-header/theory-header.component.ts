import {Component, input} from "@angular/core";
import {ChapterNavigationComponent} from "@app/shared/components/chapter-navigation/chapter-navigation.component";
import {GoTopComponent} from "@app/shared/components/go-top/go-top.component";

@Component({
	selector: "theory-header",
	imports: [ChapterNavigationComponent, GoTopComponent],
	templateUrl: "./theory-header.component.html",
	styleUrl: "./theory-header.component.scss",
})
export class TheoryHeaderComponent {
	chapterName = input.required<string>();
}
