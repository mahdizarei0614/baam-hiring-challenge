"use strict";(self.webpackChunkbaam_hiring_challenge=self.webpackChunkbaam_hiring_challenge||[]).push([[496],{5496:(st,C,r)=>{r.r(C),r.d(C,{AuthModule:()=>at});var p=r(6895),A=r(9197),F=r(4892),d=r(4006),E=r(2869),t=r(4650),w=r(263),v=r(8184),h=r(4080),y=r(3238),g=r(4859),f=r(7579),D=r(3353),I=r(5698),O=r(2722),m=r(7340),b=r(2687),S=r(2289);function Z(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"div",2)(1,"button",3),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.action())}),t._uU(2),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(2),t.Oqu(e.data.action)}}function P(a,o){}const M=new t.OlP("MatSnackBarData");class _{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}const j=Math.pow(2,31)-1;class k{constructor(o,e){this._overlayRef=e,this._afterDismissed=new f.x,this._afterOpened=new f.x,this._onAction=new f.x,this._dismissedByAction=!1,this.containerInstance=o,o._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(o){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(o,j))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}}let Y=(()=>{class a{constructor(e,n){this.snackBarRef=e,this.data=n}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(k),t.Y36(M))},a.\u0275cmp=t.Xpm({type:a,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-simple-snackbar"],decls:3,vars:2,consts:[[1,"mat-simple-snack-bar-content"],["class","mat-simple-snackbar-action",4,"ngIf"],[1,"mat-simple-snackbar-action"],["mat-button","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"span",0),t._uU(1),t.qZA(),t.YNc(2,Z,3,1,"div",1)),2&e&&(t.xp6(1),t.Oqu(n.data.message),t.xp6(1),t.Q6J("ngIf",n.hasAction))},dependencies:[p.O5,g.lW],styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}.mat-simple-snack-bar-content{overflow:hidden;text-overflow:ellipsis}"],encapsulation:2,changeDetection:0}),a})();const z={snackBarState:(0,m.X$)("state",[(0,m.SB)("void, hidden",(0,m.oB)({transform:"scale(0.8)",opacity:0})),(0,m.SB)("visible",(0,m.oB)({transform:"scale(1)",opacity:1})),(0,m.eR)("* => visible",(0,m.jt)("150ms cubic-bezier(0, 0, 0.2, 1)")),(0,m.eR)("* => void, * => hidden",(0,m.jt)("75ms cubic-bezier(0.4, 0.0, 1, 1)",(0,m.oB)({opacity:0})))])};let N=(()=>{class a extends h.en{constructor(e,n,i,s,c){super(),this._ngZone=e,this._elementRef=n,this._changeDetectorRef=i,this._platform=s,this.snackBarConfig=c,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new f.x,this._onExit=new f.x,this._onEnter=new f.x,this._animationState="void",this.attachDomPortal=l=>{this._assertNotAttached();const u=this._portalOutlet.attachDomPortal(l);return this._afterPortalAttached(),u},this._live="assertive"!==c.politeness||c.announcementMessage?"off"===c.politeness?"off":"polite":"assertive",this._platform.FIREFOX&&("polite"===this._live&&(this._role="status"),"assertive"===this._live&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();const n=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),n}attachTemplatePortal(e){this._assertNotAttached();const n=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),n}onAnimationEnd(e){const{fromState:n,toState:i}=e;if(("void"===i&&"void"!==n||"hidden"===i)&&this._completeExit(),"visible"===i){const s=this._onEnter;this._ngZone.run(()=>{s.next(),s.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.pipe((0,I.q)(1)).subscribe(()=>{this._ngZone.run(()=>{this._onExit.next(),this._onExit.complete()})})}_afterPortalAttached(){const e=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(i=>e.classList.add(i)):e.classList.add(n))}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{const e=this._elementRef.nativeElement.querySelector("[aria-hidden]"),n=this._elementRef.nativeElement.querySelector("[aria-live]");if(e&&n){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(i=document.activeElement),e.removeAttribute("aria-hidden"),n.appendChild(e),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(D.t4),t.Y36(_))},a.\u0275dir=t.lG2({type:a,viewQuery:function(e,n){if(1&e&&t.Gf(h.Pl,7),2&e){let i;t.iGM(i=t.CRH())&&(n._portalOutlet=i.first)}},features:[t.qOj]}),a})(),U=(()=>{class a extends N{_afterPortalAttached(){super._afterPortalAttached(),"center"===this.snackBarConfig.horizontalPosition&&this._elementRef.nativeElement.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&this._elementRef.nativeElement.classList.add("mat-snack-bar-top")}}return a.\u0275fac=function(){let o;return function(n){return(o||(o=t.n5z(a)))(n||a)}}(),a.\u0275cmp=t.Xpm({type:a,selectors:[["snack-bar-container"]],hostAttrs:[1,"mat-snack-bar-container"],hostVars:1,hostBindings:function(e,n){1&e&&t.WFA("@state.done",function(s){return n.onAnimationEnd(s)}),2&e&&t.d8E("@state",n._animationState)},features:[t.qOj],decls:3,vars:2,consts:[["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,P,0,0,"ng-template",1),t.qZA(),t._UZ(2,"div")),2&e&&(t.xp6(2),t.uIk("aria-live",n._live)("role",n._role))},dependencies:[h.Pl],styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}"],encapsulation:2,data:{animation:[z.snackBarState]}}),a})(),x=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[v.U8,h.eL,p.ez,g.ot,y.BQ,y.BQ]}),a})();const R=new t.OlP("mat-snack-bar-default-options",{providedIn:"root",factory:function J(){return new _}});let G=(()=>{class a{constructor(e,n,i,s,c,l){this._overlay=e,this._live=n,this._injector=i,this._breakpointObserver=s,this._parentSnackBar=c,this._defaultConfig=l,this._snackBarRefAtThisLevel=null}get _openedSnackBarRef(){const e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,n){return this._attach(e,n)}openFromTemplate(e,n){return this._attach(e,n)}open(e,n="",i){const s={...this._defaultConfig,...i};return s.data={message:e,action:n},s.announcementMessage===e&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,n){const s=t.zs3.create({parent:n&&n.viewContainerRef&&n.viewContainerRef.injector||this._injector,providers:[{provide:_,useValue:n}]}),c=new h.C5(this.snackBarContainerComponent,n.viewContainerRef,s),l=e.attach(c);return l.instance.snackBarConfig=n,l.instance}_attach(e,n){const i={...new _,...this._defaultConfig,...n},s=this._createOverlay(i),c=this._attachSnackBarContainer(s,i),l=new k(c,s);if(e instanceof t.Rgc){const u=new h.UE(e,null,{$implicit:i.data,snackBarRef:l});l.instance=c.attachTemplatePortal(u)}else{const u=this._createInjector(i,l),it=new h.C5(e,void 0,u),ot=c.attachComponentPortal(it);l.instance=ot.instance}return this._breakpointObserver.observe(S.u3.HandsetPortrait).pipe((0,O.R)(s.detachments())).subscribe(u=>{s.overlayElement.classList.toggle(this.handsetCssClass,u.matches)}),i.announcementMessage&&c._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(l,i),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(e,n){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter(),n.duration&&n.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(n.duration))}_createOverlay(e){const n=new v.X_;n.direction=e.direction;let i=this._overlay.position().global();const s="rtl"===e.direction,c="left"===e.horizontalPosition||"start"===e.horizontalPosition&&!s||"end"===e.horizontalPosition&&s,l=!c&&"center"!==e.horizontalPosition;return c?i.left("0"):l?i.right("0"):i.centerHorizontally(),"top"===e.verticalPosition?i.top("0"):i.bottom("0"),n.positionStrategy=i,this._overlay.create(n)}_createInjector(e,n){return t.zs3.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:k,useValue:n},{provide:M,useValue:e.data}]})}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(v.aV),t.LFG(b.Kd),t.LFG(t.zs3),t.LFG(S.Yg),t.LFG(a,12),t.LFG(R))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})(),Q=(()=>{class a extends G{constructor(e,n,i,s,c,l){super(e,n,i,s,c,l),this.simpleSnackBarComponent=Y,this.snackBarContainerComponent=U,this.handsetCssClass="mat-snack-bar-handset"}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(v.aV),t.LFG(b.Kd),t.LFG(t.zs3),t.LFG(S.Yg),t.LFG(a,12),t.LFG(R))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:x}),a})();var H=r(8613),X=r(9160),B=r(9549),T=r(4144),L=r(4463);function K(a,o){1&a&&t._UZ(0,"div",11)}function W(a,o){1&a&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"emailInvalidError")," "))}function V(a,o){1&a&&(t._UZ(0,"mat-error",12),t.ALo(1,"translate")),2&a&&t.Q6J("innerHTML",t.lcZ(1,1,"emailRequiredError"),t.oJD)}function $(a,o){1&a&&(t._UZ(0,"mat-error",12),t.ALo(1,"translate")),2&a&&t.Q6J("innerHTML",t.lcZ(1,1,"passwordRequiredError"),t.oJD)}const q=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class a{constructor(e,n,i,s){this.authService=e,this._snackBar=n,this.userService=i,this.router=s,this.isDesktopRef=F.nI,this.emailFormControl=new d.NI("",[d.kI.required,d.kI.email]),this.passwordFormControl=new d.NI("",[d.kI.required])}ngOnInit(){this.authService.isLoggedIn()&&this.router.navigate(["","landing"])}login(e){e.preventDefault(),this.authService.authenticate(String(this.emailFormControl.value),String(E.V.init(this.passwordFormControl.value))).subscribe(n=>{this.userService.setUser(n.user),localStorage?.setItem("isLogin","true"),this.router.navigate([""])},n=>{this._snackBar.open(String(n.errorMessage))._dismissAfter(5e3)})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(w.e),t.Y36(Q),t.Y36(H.K),t.Y36(A.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-login"]],decls:21,vars:18,consts:[[1,"bg-black","login-bg","fixed","inset-0","w-full","h-full","bg-contain","sm:bg-cover","bg-top","sm:bg-center","bg-no-repeat","flex","flex-col","justify-center","items-center"],["class","w-full illustration-spacer shrink-0",4,"ngIf"],[1,"form-container","p-8","w-full","sm:w-80","rounded-md"],[1,"w-full","flex","flex-col","items-center",3,"ngSubmit"],["appearance","fill",1,"w-full"],["name","email","type","email","matInput","","placeholder","johndoe@example.com",3,"formControl"],[4,"ngIf"],[3,"innerHTML",4,"ngIf"],["name","password","type","password","matInput","","placeholder","Password",3,"formControl"],["mat-flat-button","","type","submit","color","primary",3,"disabled"],[1,"absolute","top-4","right-4"],[1,"w-full","illustration-spacer","shrink-0"],[3,"innerHTML"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,K,1,0,"div",1),t.TgZ(2,"div",2)(3,"form",3),t.NdJ("ngSubmit",function(s){return n.login(s)}),t.TgZ(4,"mat-form-field",4)(5,"mat-label"),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._UZ(8,"input",5),t.YNc(9,W,3,3,"mat-error",6),t.YNc(10,V,2,3,"mat-error",7),t.qZA(),t.TgZ(11,"mat-form-field",4)(12,"mat-label"),t._uU(13),t.ALo(14,"translate"),t.qZA(),t._UZ(15,"input",8),t.YNc(16,$,2,3,"mat-error",7),t.qZA(),t.TgZ(17,"button",9),t._uU(18),t.ALo(19,"translate"),t.qZA()()(),t._UZ(20,"app-lang-switch",10),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",!n.isDesktopRef.value),t.xp6(1),t.ekj("grow",!n.isDesktopRef.value),t.xp6(4),t.Oqu(t.lcZ(7,12,"emailLabel")),t.xp6(2),t.Q6J("formControl",n.emailFormControl),t.xp6(1),t.Q6J("ngIf",n.emailFormControl.hasError("email")&&!n.emailFormControl.hasError("required")),t.xp6(1),t.Q6J("ngIf",n.emailFormControl.hasError("required")),t.xp6(3),t.Oqu(t.lcZ(14,14,"passwordLabel")),t.xp6(2),t.Q6J("formControl",n.passwordFormControl),t.xp6(1),t.Q6J("ngIf",n.passwordFormControl.hasError("required")),t.xp6(1),t.Q6J("disabled",n.passwordFormControl.invalid||n.emailFormControl.invalid),t.xp6(1),t.hij(" ",t.lcZ(19,16,"loginButtonText")," "))},dependencies:[p.O5,X.u,d._Y,d.Fj,d.JJ,d.JL,d.F,B.TO,B.KE,B.hX,d.oH,g.lW,T.Nt,L.X$],styles:[".login-bg[_ngcontent-%COMP%]{background-image:url(marvel-illustration.bb46c2b47bb08291.jpg)}.illustration-spacer[_ngcontent-%COMP%]{height:56.4971751412vw}.form-container[_ngcontent-%COMP%]{background-color:#000000d9}"]}),a})()}];let tt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[A.Bz.forChild(q),A.Bz]}),a})();var et=r(400),nt=r(3546);let at=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.ez,tt,et.I,d.u5,nt.QW,B.lN,d.UX,g.ot,T.c,x,L.aw]}),a})()}}]);