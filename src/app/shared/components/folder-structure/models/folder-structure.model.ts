export interface FolderOrFile {
	name: string;
	bootstrapIcon?: string;
	interaction?: () => void;
	isSelected?: boolean;
}

export interface FolderStructureModel extends FolderOrFile {
	files: FolderOrFile[];
	children?: FolderStructureModel[];
}
