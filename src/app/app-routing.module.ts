import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CorpsComponent } from "./corps/corps.component";
import { EpilationComponent } from "./epilation/epilation.component";
import { HomeComponent } from "./home/home.component";
import { InfosComponent } from "./infos/infos.component";
import { MainsComponent } from "./mains/mains.component";
import { MassageComponent } from "./massage/massage.component";
import { RegardComponent } from "./regard/regard.component";
import { VisageComponent } from "./visage/visage.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "visage", component: VisageComponent },
  { path: "corps", component: CorpsComponent },
  { path: "massage", component: MassageComponent },
  { path: "epilation", component: EpilationComponent },
  { path: "regard", component: RegardComponent },
  { path: "info", component: InfosComponent },
  {path: "mains", component: MainsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
