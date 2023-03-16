import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ApiService} from "../api.service";

@Directive({
  selector: '[appRoles]'
})
export class RolesDirective implements OnInit{

  //TERMINAR DE IMPLEMENTAR DIRECTIVAS PARA GESTIONAR SUPER USUARIO

  // private currentUser: RoleUser;
  private permissions = [''];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  @Input()
  set appRoles(val: Array<string>){
    console.log('***', val);
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.permissions = val;
    this.updateView();
  }

  private updateView(): void{
    this.viewContainer.clear();
    if(this.checkPermission()){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private checkPermission(): boolean{
  //   let hasPermission = false;
  //   if (this.currentUser && this.currentUser.scopes){
  //
  //   }
    return true;
  }
}
