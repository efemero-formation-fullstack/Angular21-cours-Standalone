import {
	FolderOrFile,
	FolderStructureModel,
} from "@shared/components/folder-structure/models/folder-structure.model";

export const findWithPath = (
	folderStructure: FolderStructureModel,
	path: string,
) => {
	// split the path into an array of folder names
	const pathArray = path.split("/");

	// get the current folder
	let currentFolder: FolderStructureModel | undefined = folderStructure;

	let ffFound: FolderOrFile | null = null;

	if (pathArray.length === 1 && pathArray[0] === currentFolder.name) {
		return currentFolder;
	}

	// iterate over the path array
	for (let i = 1; i < pathArray.length; i++) {
		if (i !== pathArray.length - 1) {
			// get the current folder name
			const ffName = pathArray[i];

			// get the current folder or file
			currentFolder = currentFolder.children?.find(
				item => item.name === ffName,
			);

			if (!currentFolder) {
				throw new Error("Folder or file not found with path: " + path);
			}
		} else {
			// check if the current folder is the last one in the path array (exemple: looking for the first folder of the structure)
			if (i === 0 && currentFolder.name === pathArray[i]) {
				ffFound = currentFolder;
			}

			if (!ffFound) {
				// check if the current folderOrFile we are looking is a child of the current folder
				ffFound = currentFolder.children?.find(
					item => item.name === pathArray[i],
				) as FolderOrFile;

				if (!ffFound) {
					// check if the current folderOrFile we are looking is a file of the current folder
					ffFound = currentFolder.files.find(
						item => item.name === pathArray[i],
					) as FolderOrFile;

					if (!ffFound) {
						throw new Error(
							"Folder or file not found with path: " + path,
						);
					}
				}
			}
		}
	}
	return ffFound as FolderOrFile;
};

export const deselectAll = (folderStructure: FolderStructureModel) => {
	deselectAllRecursive(folderStructure);
	return folderStructure;
};

const deselectAllRecursive = (folder: FolderStructureModel) => {
	folder.isSelected = false;
	folder.files.forEach(f => {
		f.isSelected = false;
	});

	folder.children?.forEach(child => {
		deselectAllRecursive(child);
	});
};
