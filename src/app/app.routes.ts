import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CategoriesComponent } from "./common/display/categories/categories.component";
import { UserlistComponent } from "./common/display/userlist/userlist.component";
import { UserdetailsComponent } from "./common/display/userdetails/userdetails.component";


export const routes: Routes = [
    { path: '', redirectTo: '/beginop/categories', pathMatch: 'full' },
    {
        path: 'beginop',
        children: [
            { path: 'categories', component: CategoriesComponent, data: { active: 'categories' } },
            { path: 'userdetail/:id', component: UserdetailsComponent },
            { path: 'users', component: UserlistComponent }
        ]
    },
  
  ];