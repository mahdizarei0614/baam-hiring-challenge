"use strict";(self.webpackChunkbaam_hiring_challenge=self.webpackChunkbaam_hiring_challenge||[]).push([[926],{4926:(ye,I,l)=>{l.r(I),l.d(I,{AuthModule:()=>ve});var x=l(6895),M=l(9197),b=l(4892),d=l(4006),Z=l(2869),t=l(4650),j=l(263),C=l(8184),p=l(4080),_=l(3238),A=l(4859),m=l(7579),g=l(3353),Y=l(5698),U=l(2722),u=l(7340),F=l(2687),S=l(2289);function V(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"button",3),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.action())}),t._uU(2),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.data.action)}}function G(n,a){}const L=new t.OlP("MatSnackBarData");class k{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}const J=Math.pow(2,31)-1;class E{constructor(a,e){this._overlayRef=e,this._afterDismissed=new m.x,this._afterOpened=new m.x,this._onAction=new m.x,this._dismissedByAction=!1,this.containerInstance=a,a._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(a){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(a,J))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}}let q=(()=>{class n{constructor(e,i){this.snackBarRef=e,this.data=i}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(E),t.Y36(L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-simple-snackbar"],decls:3,vars:2,consts:[[1,"mat-simple-snack-bar-content"],["class","mat-simple-snackbar-action",4,"ngIf"],[1,"mat-simple-snackbar-action"],["mat-button","",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"span",0),t._uU(1),t.qZA(),t.YNc(2,V,3,1,"div",1)),2&e&&(t.xp6(1),t.Oqu(i.data.message),t.xp6(1),t.Q6J("ngIf",i.hasAction))},dependencies:[x.O5,A.lW],styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}.mat-simple-snack-bar-content{overflow:hidden;text-overflow:ellipsis}"],encapsulation:2,changeDetection:0}),n})();const Q={snackBarState:(0,u.X$)("state",[(0,u.SB)("void, hidden",(0,u.oB)({transform:"scale(0.8)",opacity:0})),(0,u.SB)("visible",(0,u.oB)({transform:"scale(1)",opacity:1})),(0,u.eR)("* => visible",(0,u.jt)("150ms cubic-bezier(0, 0, 0.2, 1)")),(0,u.eR)("* => void, * => hidden",(0,u.jt)("75ms cubic-bezier(0.4, 0.0, 1, 1)",(0,u.oB)({opacity:0})))])};let K=(()=>{class n extends p.en{constructor(e,i,s,o,r){super(),this._ngZone=e,this._elementRef=i,this._changeDetectorRef=s,this._platform=o,this.snackBarConfig=r,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new m.x,this._onExit=new m.x,this._onEnter=new m.x,this._animationState="void",this.attachDomPortal=c=>{this._assertNotAttached();const h=this._portalOutlet.attachDomPortal(c);return this._afterPortalAttached(),h},this._live="assertive"!==r.politeness||r.announcementMessage?"off"===r.politeness?"off":"polite":"assertive",this._platform.FIREFOX&&("polite"===this._live&&(this._role="status"),"assertive"===this._live&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();const i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();const i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}onAnimationEnd(e){const{fromState:i,toState:s}=e;if(("void"===s&&"void"!==i||"hidden"===s)&&this._completeExit(),"visible"===s){const o=this._onEnter;this._ngZone.run(()=>{o.next(),o.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.pipe((0,Y.q)(1)).subscribe(()=>{this._ngZone.run(()=>{this._onExit.next(),this._onExit.complete()})})}_afterPortalAttached(){const e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(s=>e.classList.add(s)):e.classList.add(i))}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{const e=this._elementRef.nativeElement.querySelector("[aria-hidden]"),i=this._elementRef.nativeElement.querySelector("[aria-live]");if(e&&i){let s=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(s=document.activeElement),e.removeAttribute("aria-hidden"),i.appendChild(e),s?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(g.t4),t.Y36(k))},n.\u0275dir=t.lG2({type:n,viewQuery:function(e,i){if(1&e&&t.Gf(p.Pl,7),2&e){let s;t.iGM(s=t.CRH())&&(i._portalOutlet=s.first)}},features:[t.qOj]}),n})(),W=(()=>{class n extends K{_afterPortalAttached(){super._afterPortalAttached(),"center"===this.snackBarConfig.horizontalPosition&&this._elementRef.nativeElement.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&this._elementRef.nativeElement.classList.add("mat-snack-bar-top")}}return n.\u0275fac=function(){let a;return function(i){return(a||(a=t.n5z(n)))(i||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["snack-bar-container"]],hostAttrs:[1,"mat-snack-bar-container"],hostVars:1,hostBindings:function(e,i){1&e&&t.WFA("@state.done",function(o){return i.onAnimationEnd(o)}),2&e&&t.d8E("@state",i._animationState)},features:[t.qOj],decls:3,vars:2,consts:[["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,G,0,0,"ng-template",1),t.qZA(),t._UZ(2,"div")),2&e&&(t.xp6(2),t.uIk("aria-live",i._live)("role",i._role))},dependencies:[p.Pl],styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}"],encapsulation:2,data:{animation:[Q.snackBarState]}}),n})(),D=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[C.U8,p.eL,x.ez,A.ot,_.BQ,_.BQ]}),n})();const H=new t.OlP("mat-snack-bar-default-options",{providedIn:"root",factory:function X(){return new k}});let $=(()=>{class n{constructor(e,i,s,o,r,c){this._overlay=e,this._live=i,this._injector=s,this._breakpointObserver=o,this._parentSnackBar=r,this._defaultConfig=c,this._snackBarRefAtThisLevel=null}get _openedSnackBarRef(){const e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",s){const o={...this._defaultConfig,...s};return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){const o=t.zs3.create({parent:i&&i.viewContainerRef&&i.viewContainerRef.injector||this._injector,providers:[{provide:k,useValue:i}]}),r=new p.C5(this.snackBarContainerComponent,i.viewContainerRef,o),c=e.attach(r);return c.instance.snackBarConfig=i,c.instance}_attach(e,i){const s={...new k,...this._defaultConfig,...i},o=this._createOverlay(s),r=this._attachSnackBarContainer(o,s),c=new E(r,o);if(e instanceof t.Rgc){const h=new p.UE(e,null,{$implicit:s.data,snackBarRef:c});c.instance=r.attachTemplatePortal(h)}else{const h=this._createInjector(s,c),B=new p.C5(e,void 0,h),R=r.attachComponentPortal(B);c.instance=R.instance}return this._breakpointObserver.observe(S.u3.HandsetPortrait).pipe((0,U.R)(o.detachments())).subscribe(h=>{o.overlayElement.classList.toggle(this.handsetCssClass,h.matches)}),s.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(s.announcementMessage,s.politeness)}),this._animateSnackBar(c,s),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter(),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration))}_createOverlay(e){const i=new C.X_;i.direction=e.direction;let s=this._overlay.position().global();const o="rtl"===e.direction,r="left"===e.horizontalPosition||"start"===e.horizontalPosition&&!o||"end"===e.horizontalPosition&&o,c=!r&&"center"!==e.horizontalPosition;return r?s.left("0"):c?s.right("0"):s.centerHorizontally(),"top"===e.verticalPosition?s.top("0"):s.bottom("0"),i.positionStrategy=s,this._overlay.create(i)}_createInjector(e,i){return t.zs3.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:E,useValue:i},{provide:L,useValue:e.data}]})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(C.aV),t.LFG(F.Kd),t.LFG(t.zs3),t.LFG(S.Yg),t.LFG(n,12),t.LFG(H))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),ee=(()=>{class n extends ${constructor(e,i,s,o,r,c){super(e,i,s,o,r,c),this.simpleSnackBarComponent=q,this.snackBarContainerComponent=W,this.handsetCssClass="mat-snack-bar-handset"}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(C.aV),t.LFG(F.Kd),t.LFG(t.zs3),t.LFG(S.Yg),t.LFG(n,12),t.LFG(H))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:D}),n})();var te=l(8613),f=l(9549),v=l(1281),ie=l(515);const O=(0,g.i$)({passive:!0});let ne=(()=>{class n{constructor(e,i){this._platform=e,this._ngZone=i,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return ie.E;const i=(0,v.fI)(e),s=this._monitoredElements.get(i);if(s)return s.subject;const o=new m.x,r="cdk-text-field-autofilled",c=h=>{"cdk-text-field-autofill-start"!==h.animationName||i.classList.contains(r)?"cdk-text-field-autofill-end"===h.animationName&&i.classList.contains(r)&&(i.classList.remove(r),this._ngZone.run(()=>o.next({target:h.target,isAutofilled:!1}))):(i.classList.add(r),this._ngZone.run(()=>o.next({target:h.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{i.addEventListener("animationstart",c,O),i.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(i,{subject:o,unlisten:()=>{i.removeEventListener("animationstart",c,O)}}),o}stopMonitoring(e){const i=(0,v.fI)(e),s=this._monitoredElements.get(i);s&&(s.unlisten(),s.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(g.t4),t.LFG(t.R0b))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();const se=new t.OlP("MAT_INPUT_VALUE_ACCESSOR"),ae=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let oe=0;const re=(0,_.FD)(class{constructor(n,a,e,i){this._defaultErrorStateMatcher=n,this._parentForm=a,this._parentFormGroup=e,this.ngControl=i,this.stateChanges=new m.x}});let le=(()=>{class n extends re{constructor(e,i,s,o,r,c,h,B,R,N){super(c,o,r,s),this._elementRef=e,this._platform=i,this._autofillMonitor=B,this._formField=N,this._uid="mat-input-"+oe++,this.focused=!1,this.stateChanges=new m.x,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(w=>(0,g.qK)().has(w)),this._iOSKeyupListener=w=>{const y=w.target;!y.value&&0===y.selectionStart&&0===y.selectionEnd&&(y.setSelectionRange(1,1),y.setSelectionRange(0,0))};const T=this._elementRef.nativeElement,z=T.nodeName.toLowerCase();this._inputValueAccessor=h||T,this._previousNativeValue=this.value,this.id=this.id,i.IOS&&R.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===z,this._isTextarea="textarea"===z,this._isInFormField=!!N,this._isNativeSelect&&(this.controlType=T.multiple?"mat-native-select-multiple":"mat-native-select")}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=(0,v.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(d.kI.required)??!1}set required(e){this._required=(0,v.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,g.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,v.Ig)(e)}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckPlaceholder(){const e=this._formField,i=e&&"legacy"===e.appearance&&!e._hasLabel?.()?null:this.placeholder;if(i!==this._previousPlaceholder){const s=this._elementRef.nativeElement;this._previousPlaceholder=i,i?s.setAttribute("placeholder",i):s.removeAttribute("placeholder")}}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_validateType(){ae.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(g.t4),t.Y36(d.a5,10),t.Y36(d.F,8),t.Y36(d.sg,8),t.Y36(_.rD),t.Y36(se,10),t.Y36(ne),t.Y36(t.R0b),t.Y36(f.G_,8))},n.\u0275dir=t.lG2({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:12,hostBindings:function(e,i){1&e&&t.NdJ("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),2&e&&(t.Ikx("disabled",i.disabled)("required",i.required),t.uIk("id",i.id)("data-placeholder",i.placeholder)("name",i.name||null)("readonly",i.readonly&&!i._isNativeSelect||null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required),t.ekj("mat-input-server",i._isServer)("mat-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],features:[t._Bn([{provide:f.Eo,useExisting:n}]),t.qOj,t.TTD]}),n})(),ce=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[_.rD],imports:[P,f.lN,_.BQ,P,f.lN]}),n})();function de(n,a){1&n&&t._UZ(0,"div",9)}function he(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function ue(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Email is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function me(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Password is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}const fe=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class n{constructor(e,i,s,o){this.authService=e,this._snackBar=i,this.userService=s,this.router=o,this.isDesktopRef=b.nI,this.emailFormControl=new d.NI("",[d.kI.required,d.kI.email]),this.passwordFormControl=new d.NI("",[d.kI.required])}ngOnInit(){this.authService.isLoggedIn()&&this.router.navigate(["","landing"])}login(e){e.preventDefault(),this.authService.authenticate(String(this.emailFormControl.value),String(Z.V.init(this.passwordFormControl.value))).subscribe(i=>{this.userService.setUser(i.user),localStorage?.setItem("isLogin","true"),(0,b.Jj)()&&((0,b.Jj)().location.href="/")},i=>{this._snackBar.open(String(i.errorMessage))._dismissAfter(5e3)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(j.e),t.Y36(ee),t.Y36(te.K),t.Y36(M.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:17,vars:9,consts:[[1,"bg-black","login-bg","fixed","inset-0","w-full","h-full","bg-contain","sm:bg-cover","bg-top","sm:bg-center","bg-no-repeat","flex","flex-col","justify-center","items-center"],["class","w-full illustration-spacer shrink-0",4,"ngIf"],[1,"form-container","p-8","w-full","sm:w-80","rounded-md"],[1,"w-full","flex","flex-col","items-center",3,"ngSubmit"],["appearance","fill",1,"w-full"],["name","email","type","email","matInput","","placeholder","joundoe@example.com",3,"formControl"],[4,"ngIf"],["name","password","type","email","matInput","","placeholder","Password",3,"formControl"],["mat-flat-button","","type","submit","color","primary",3,"disabled"],[1,"w-full","illustration-spacer","shrink-0"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,de,1,0,"div",1),t.TgZ(2,"div",2)(3,"form",3),t.NdJ("ngSubmit",function(o){return i.login(o)}),t.TgZ(4,"mat-form-field",4)(5,"mat-label"),t._uU(6,"Email"),t.qZA(),t._UZ(7,"input",5),t.YNc(8,he,2,0,"mat-error",6),t.YNc(9,ue,4,0,"mat-error",6),t.qZA(),t.TgZ(10,"mat-form-field",4)(11,"mat-label"),t._uU(12,"Password"),t.qZA(),t._UZ(13,"input",7),t.YNc(14,me,4,0,"mat-error",6),t.qZA(),t.TgZ(15,"button",8),t._uU(16,"Login"),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",!i.isDesktopRef.value),t.xp6(1),t.ekj("grow",!i.isDesktopRef.value),t.xp6(5),t.Q6J("formControl",i.emailFormControl),t.xp6(1),t.Q6J("ngIf",i.emailFormControl.hasError("email")&&!i.emailFormControl.hasError("required")),t.xp6(1),t.Q6J("ngIf",i.emailFormControl.hasError("required")),t.xp6(4),t.Q6J("formControl",i.passwordFormControl),t.xp6(1),t.Q6J("ngIf",i.passwordFormControl.hasError("required")),t.xp6(1),t.Q6J("disabled",i.passwordFormControl.invalid||i.emailFormControl.invalid))},dependencies:[x.O5,d._Y,d.Fj,d.JJ,d.JL,d.F,f.TO,f.KE,f.hX,d.oH,A.lW,le],styles:[".login-bg[_ngcontent-%COMP%]{background-image:url(marvel-illustration.bb46c2b47bb08291.jpg)}.illustration-spacer[_ngcontent-%COMP%]{height:56.4971751412vw}.form-container[_ngcontent-%COMP%]{background-color:#000000d9}"]}),n})()}];let pe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[M.Bz.forChild(fe),M.Bz]}),n})();var _e=l(400),ge=l(3546);let ve=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[x.ez,pe,_e.I,d.u5,ge.QW,f.lN,d.UX,A.ot,ce,D]}),n})()}}]);