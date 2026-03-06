import {inject, Injectable, signal} from "@angular/core";
import {Router} from "@angular/router";
import {Chapter, ChapterTDE, CoursesInstance} from "@app/core/constants/chapters.constants";

@Injectable({
	providedIn: "root",
})
export class ChapterNavigationService {
	private _router: Router = inject(Router);

	currentCategory = signal<ChapterTDE | null>(null);
	currentIndex = signal<number | null>(null);
	currentChapterName = signal<string | null>(null);

	previousChapter = signal<number | null>(null);
	previousChapterName = signal<string | null>(null);
	nextChapter = signal<number | null>(null);
	nextChapterName = signal<string | null>(null);

	constructor() {
		this.checkPage();
		this._router.events.subscribe(() => {
			this.checkPage();
		});
	}

	checkPage() {
		const url = this._router.url.split("/");
		const category: string = url[1];

		if (category in ChapterTDE) {
			this.currentCategory.set(ChapterTDE[category as keyof typeof ChapterTDE]);

			url[2] = url[2].split("?")[0]; // remove query params

			const currIndex = Number(url[2]);
			this.currentIndex.set(currIndex);

			if (currIndex != null) {
				this.currentChapterName.set(CoursesInstance.chapterOrder[currIndex].name || null);

				const prevChap = this.checkPreviousChapter();
				this.previousChapter.set(prevChap?.index != null ? prevChap.index : null);
				this.previousChapterName.set(prevChap?.chap.name || null);

				const nextChap = this.checkNextChapter();
				this.nextChapter.set(nextChap?.index || null);
				this.nextChapterName.set(nextChap?.chap.name || null);
			}
		}
	}

	private checkPreviousChapter(): {chap: Chapter; index: number} | null {
		const currIndex = this.currentIndex();

		if (!currIndex) {
			return null;
		} else if (currIndex <= 0) {
			return null;
		} else {
			return {
				chap: CoursesInstance.chapterOrder[currIndex - 1],
				index: currIndex - 1,
			};
		}
	}

	private checkNextChapter(): {chap: Chapter; index: number} | null {
		const currIndex = this.currentIndex();

		if (currIndex == null) {
			return null;
		} else if (currIndex >= CoursesInstance.chapterOrder.length - 1) {
			return null;
		} else {
			return {
				chap: CoursesInstance.chapterOrder[currIndex + 1],
				index: currIndex + 1,
			};
		}
	}
}
