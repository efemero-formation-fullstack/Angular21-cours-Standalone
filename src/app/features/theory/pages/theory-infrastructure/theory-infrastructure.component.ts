import {Component, signal} from "@angular/core";
import {TheoryHeaderComponent} from "../../components/layout/theory-header/theory-header.component";
import {FolderStructureModel} from "@app/shared/components/folder-structure/models/folder-structure.model";
import {
	deselectAll,
	findWithPath,
} from "@app/shared/components/folder-structure/utils/folder-structure.utils";
import {FolderStructureComponent} from "@app/shared/components/folder-structure/folder-structure.component";
import {SrcDescriptionComponent} from "./components/src-description/src-description.component";
import {CoreDescriptionComponent} from "./components/core-description/core-description.component";
import {CoreModelsDescriptionComponent} from "./components/core-models-description/core-models-description.component";
import {CoreModelsUserDescriptionComponent} from "./components/core-models-user-description/core-models-user-description.component";
import {CoreConstantsDescriptionComponent} from "./components/core-constants-description/core-constants-description.component";
import {CoreConstantsApiDescriptionComponent} from "./components/core-constants-api-description/core-constants-api-description.component";
import {CoreInterceptorsDescriptionComponent} from "./components/core-interceptors-description/core-interceptors-description.component";
import {CoreInterceptorsJwtDescriptionComponent} from "./components/core-interceptors-jwt-description/core-interceptors-jwt-description.component";
import {CoreGuardsDescriptionComponent} from "./components/core-guards-description/core-guards-description.component";
import {CoreGuardsConnectedDescriptionComponent} from "./components/core-guards-connected-description/core-guards-connected-description.component";
import {CoreServicesDescriptionComponent} from "./components/core-services-description/core-services-description.component";
import {CoreServicesAuthDescriptionComponent} from "./components/core-services-auth-description/core-services-auth-description.component";

@Component({
	selector: "theory-infrastructure",
	imports: [
		TheoryHeaderComponent,
		FolderStructureComponent,
		SrcDescriptionComponent,
		CoreDescriptionComponent,
		CoreModelsDescriptionComponent,
		CoreModelsUserDescriptionComponent,
		CoreConstantsDescriptionComponent,
		CoreConstantsApiDescriptionComponent,
		CoreInterceptorsDescriptionComponent,
		CoreInterceptorsJwtDescriptionComponent,
		CoreGuardsDescriptionComponent,
		CoreGuardsConnectedDescriptionComponent,
		CoreServicesDescriptionComponent,
		CoreServicesAuthDescriptionComponent,
	],
	templateUrl: "./theory-infrastructure.component.html",
	styleUrl: "./theory-infrastructure.component.scss",
})
export class TheoryInfrastructureComponent {
	folderStructure = signal<FolderStructureModel>({
		name: "src",
		interaction: () => this.onElementOfFolderClick("src"),
		files: [],
		children: [
			{
				name: "app",
				interaction: () => this.onElementOfFolderClick("src/app"),
				files: [],
				children: [
					{
						name: "core",
						interaction: () => this.onElementOfFolderClick("src/app/core"),
						files: [],
						children: [
							{
								name: "models",
								interaction: () =>
									this.onElementOfFolderClick("src/app/core/models"),
								files: [
									{
										name: "user.model.ts",
										interaction: () =>
											this.onElementOfFolderClick(
												"src/app/core/models/user.model.ts",
											),
									},
									{
										name: "book.model.ts",
									},
								],
							},
							{
								name: "constants",
								interaction: () =>
									this.onElementOfFolderClick("src/app/core/constants"),
								files: [
									{
										name: "api.constants.ts",
										interaction: () =>
											this.onElementOfFolderClick(
												"src/app/core/constants/api.constants.ts",
											),
									},
								],
							},
							{
								name: "interceptors",
								interaction: () =>
									this.onElementOfFolderClick("src/app/core/interceptors"),
								files: [
									{
										name: "jwt.interceptor.ts",
										interaction: () =>
											this.onElementOfFolderClick(
												"src/app/core/interceptors/jwt.interceptor.ts",
											),
									},
								],
							},
							{
								name: "guards",
								interaction: () =>
									this.onElementOfFolderClick("src/app/core/guards"),
								files: [
									{
										name: "connected.guard.ts",
										interaction: () =>
											this.onElementOfFolderClick(
												"src/app/core/guards/connected.guard.ts",
											),
									},
								],
							},
							{
								name: "services",
								files: [],
								children: [
									{
										name: "auth",
										files: [
											{
												name: "auth.service.ts",
												interaction: () => {
													this.onElementOfFolderClick(
														"src/app/core/services/auth/auth.service.ts",
													);
												},
											},
										],
										children: [
											{
												name: "models",
												files: [
													{
														name: "login-credential.model.ts",
													},
													{
														name: "login-response.model.ts",
													},
													{
														name: "register.model.ts",
													},
												],
											},
										],
									},
								],
							},
							{name: "utils", files: [{name: "truc.utils.ts"}]},
						],
					},
					{
						name: "features",
						files: [],
						children: [
							{
								name: "auth",
								files: [
									{
										name: "auth.routes.ts",
									},
								],
								children: [
									{
										name: "pages",
										files: [],
										children: [
											{
												name: "auth-login",
												files: [
													{
														name: "auth-login.component.ts",
													},
													{
														name: "auth-login.component.html",
														bootstrapIcon: "bi-filetype-html",
													},
													{
														name: "auth-login.component.scss",
														bootstrapIcon: "bi-filetype-scss",
													},
												],
											},
											{
												name: "auth-register",
												files: [
													{
														name: "auth-register.component.ts",
													},
													{
														name: "auth-register.component.html",
														bootstrapIcon: "bi-filetype-html",
													},
													{
														name: "auth-register.component.scss",
														bootstrapIcon: "bi-filetype-scss",
													},
												],
											},
										],
									},
								],
							},
						],
					},
				],
			},
		],
	});

	interactingWith = signal<string>("");

	imgUrlHuh = "assets/memes/Cat-Huh.gif";

	onElementOfFolderClick(elementPath: string) {
		console.log(`TheoryInfrastructureComponent -> ${elementPath}`);
		this.interactingWith.set(elementPath);
		let fs = this.folderStructure();
		fs = deselectAll(fs);

		console.log(fs);

		const ff = findWithPath(fs, elementPath);
		ff.isSelected = true;

		console.log(fs);
		this.folderStructure.set({...fs});
	}
}
