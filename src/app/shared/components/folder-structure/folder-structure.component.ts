import {Component, effect, inject, input, OnInit, Signal} from "@angular/core";
import {FolderStructureModel} from "@shared/components/folder-structure/models/folder-structure.model";
import {FolderComponent} from "@shared/components/folder-structure/components/folder/folder.component";

@Component({
	selector: "folder-structure",
	imports: [FolderComponent],
	templateUrl: "./folder-structure.component.html",
	styleUrl: "./folder-structure.component.scss",
})
export class FolderStructureComponent {
	/* Inputs */
	folderStructure = input.required<Signal<FolderStructureModel>>();
}
