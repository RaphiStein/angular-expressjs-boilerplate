import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";

export const routes: Route[] = [
  { path: "", pathMatch: "full", component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
