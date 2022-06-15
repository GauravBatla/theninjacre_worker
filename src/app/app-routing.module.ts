import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'oppertunities',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/verify/verify.module').then(m => m.VerifyPageModule)
  },
  {
    path: 'oppertunities', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/oppertunities/oppertunities.module').then(m => m.OppertunitiesPageModule)
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'job-history',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/job-history/job-history.module').then(m => m.JobHistoryPageModule)
  },
  {
    path: 'leave-request',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/leave-request/leave-request.module').then(m => m.LeaveRequestPageModule)
  },
  {
    path: 'cancel',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cancel/cancel.module').then(m => m.CancelPageModule)
  },
  {
    path: 'edit-profile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'notification',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'share-apps',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/share-apps/share-apps.module').then(m => m.ShareAppsPageModule)
  },  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then( m => m.WalletPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
