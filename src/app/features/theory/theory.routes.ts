import {Routes} from "@angular/router";
import {ChapterName, CoursesInstance} from "@core/constants/chapters.constants";

export const routes: Routes = [
	{
		path: CoursesInstance.getChapterId(ChapterName.Intro).toString(),
		loadComponent: () =>
			import("@app/features/theory/pages/theory-intro/theory-intro.component").then(
				c => c.TheoryIntroComponent,
			),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Infrastructure).toString(),
		loadComponent: () =>
			import("@app/features/theory/pages/theory-infrastructure/theory-infrastructure.component").then(
				c => c.TheoryInfrastructureComponent,
			),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Composant).toString(),
		loadComponent: () =>
			import("@app/features/theory/pages/theory-composant/theory-composant.component").then(
				c => c.TheoryComposantComponent,
			),
	},
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.BaseRouting).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-base-routing/theory-base-routing.component").then(
	// 			c => c.TheoryBaseRoutingComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.BaseNavigation).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-base-navigation/theory-base-navigation.component").then(
	// 			c => c.TheoryBaseNavigationComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.Binding).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-binding/theory-binding.component").then(
	// 			c => c.TheoryBindingComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.Signal).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-signal/theory-signal.component").then(
	// 			c => c.TheorySignalComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.CycleDeVie).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-cycle-de-vie/theory-cycle-de-vie.component").then(
	// 			c => c.TheoryCycleDeVieComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.Pipe).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-pipe/theory-pipe.component").then(
	// 			c => c.TheoryPipeComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.Directive).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-directive/theory-directive.component").then(
	// 			c => c.TheoryDirectiveComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.InputOutput).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-input-output/theory-input-output.component").then(
	// 			c => c.TheoryInputOutputComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.ServiceInjection).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-service-injection/theory-service-injection.component").then(
	// 			c => c.TheoryServiceInjectionComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.Formulaire).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-formulaire/theory-formulaire.component").then(
	// 			c => c.TheoryFormulaireComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.RouterOutlet).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-router-outlet/theory-router-outlet.component").then(
	// 			c => c.TheoryRouterOutletComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.Navigation).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-navigation/theory-navigation.component").then(
	// 			c => c.TheoryNavigationComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.Guard).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-guard/theory-guard.component").then(
	// 			c => c.TheoryGuardComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.Storage).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-storage/theory-storage.component").then(
	// 			c => c.TheoryStorageComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.Observable).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-observable/theory-observable.component").then(
	// 			c => c.TheoryObservableComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.HttpClient).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-http-client/theory-http-client.component").then(
	// 			c => c.TheoryHttpClientComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.HttpInterceptor).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-http-interceptor/theory-http-interceptor.component").then(
	// 			c => c.TheoryHttpInterceptorComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.Resolver).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-resolver/theory-resolver.component").then(
	// 			c => c.TheoryResolverComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.NgContent).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-ng-content/theory-ng-content.component").then(
	// 			c => c.TheoryNgContentComponent,
	// 		),
	// },
	// {
	// 	path: CoursesInstance.getChapterId(ChapterName.HttpResource).toString(),
	// 	loadComponent: () =>
	// 		import("@app/features/theory/pages/theory-http-resource/theory-http-resource.component").then(
	// 			c => c.TheoryHttpResourceComponent,
	// 		),
	// },
];
