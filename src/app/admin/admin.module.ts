import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination' ;

import { MaterialModule } from '../shared/material.module';

/*
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
*/
import { ListAddressLivraisonComponent } from './list-address-livraison/list-address-livraison.component';
import { ListAddressClientComponent } from './list-address-client/list-address-client.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { AddScategoryComponent } from './scategory/add-scategory/add-scategory.component';
import { ListScategoryComponent } from './scategory/list-scategory/list-scategory.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { ListLigneCommandeComponent } from './list-ligne-commande/list-ligne-commande.component';
import { ListNoteArticleComponent } from './list-note-article/list-note-article.component';

import { AddUtilisateurComponent } from './utilisateur/add-utilisateur/add-utilisateur.component';
import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { UpdateScategoryComponent } from './scategory/update-scategory/update-scategory.component';
import { UpdateArtileComponent } from './article/update-artile/update-artile.component';
import { UpdateFournisseurComponent } from './fournisseur/update-fournisseur/update-fournisseur.component';
import { UpdateUtilisateurComponent } from './utilisateur/update-utilisateur/update-utilisateur.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { AdminComponent } from './admin/admin.component';
import { BackendHeaderComponent } from './backend-header/backend-header.component';
import { BackendSidebarComponent } from './backend-sidebar/backend-sidebar.component';
import { BackendFooterComponent } from './backend-footer/backend-footer.component';
import { TopLeftComponent } from './top-left/top-left.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { SeConnecterComponent } from './authentication/se-connecter/se-connecter.component';
import { SuccessSignUpComponent } from './authentication/success-sign-up/success-sign-up.component';



@NgModule({
  declarations: [
    ListAddressLivraisonComponent,
    ListAddressClientComponent,
    ListArticleComponent,
    AddArticleComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    AddScategoryComponent,
    ListScategoryComponent,
    ListFournisseurComponent,
    AddFournisseurComponent,
    ListClientComponent,
    ListCommandeComponent,
    ListLigneCommandeComponent,
    ListNoteArticleComponent,
    AddUtilisateurComponent,
    ListUtilisateurComponent,
    UpdateCategoryComponent,
    UpdateScategoryComponent,
    UpdateArtileComponent,
    UpdateFournisseurComponent,
    UpdateUtilisateurComponent,
    PageNotfoundComponent,
    AdminComponent,
    BackendHeaderComponent,
    BackendSidebarComponent,
    BackendFooterComponent,
    TopLeftComponent,
    DashboardComponent,
    SignUpComponent,
    SeConnecterComponent,
    SuccessSignUpComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule,

    MatPaginatorModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
/*
    NgbModalModule,
    ModalModule,
*/
  ],
  providers: [
    DatePipe,
  ],
})
export class AdminModule { }
