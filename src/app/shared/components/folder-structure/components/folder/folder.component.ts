import {Component, inject, input, OnInit} from "@angular/core";
import {NgClass} from "@angular/common";
import {
	FolderOrFile,
	FolderStructureModel,
} from "@shared/components/folder-structure/models/folder-structure.model";

@Component({
	selector: "folder",
	imports: [NgClass],
	templateUrl: "./folder.component.html",
	styleUrl: "./folder.component.scss",
})
export class FolderComponent implements OnInit {
	/* Inputs */
	folder = input.required<FolderStructureModel>();
	inputPath = input<string>("");

	/* Variables */
	path = "";
	isOpen: boolean = true;

	ngOnInit() {
		if (this.inputPath()) {
			this.path = this.inputPath() + "/";
		}
	}

	closeFolder() {
		this.isOpen = false;
	}

	openFolder() {
		this.isOpen = true;
	}

	onElementClick(ff: FolderOrFile) {
		if (ff.interaction) {
			ff.interaction();
		}
	}
}
