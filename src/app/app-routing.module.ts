import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, data: { animation: "Home" } },
  {
    path: "about",
    component: AboutmeComponent,
    data: { animation: "About" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
