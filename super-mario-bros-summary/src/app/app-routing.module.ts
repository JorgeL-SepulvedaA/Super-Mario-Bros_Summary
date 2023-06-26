import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cover',
    loadChildren: () => import('./cover/cover.module').then( m => m.CoverPageModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'best-moments',
    loadChildren: () => import('./best-moments/best-moments.module').then( m => m.BestMomentsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'contact-me',
    loadChildren: () => import('./contact-me/contact-me.module').then( m => m.ContactMePageModule)
  },
  {
    path: 'characters1',
    loadChildren: () => import('./characters1/characters1.module').then( m => m.Characters1PageModule)
  },
  {
    path: 'characters2',
    loadChildren: () => import('./characters2/characters2.module').then( m => m.Characters2PageModule)
  },
  {
    path: 'characters3',
    loadChildren: () => import('./characters3/characters3.module').then( m => m.Characters3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
