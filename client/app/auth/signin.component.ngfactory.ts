/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './signin.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './auth.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/forms/src/directives/ng_form';
import * as import12 from '@angular/forms/src/directives/ng_control_status';
import * as import13 from '@angular/forms/src/directives/default_value_accessor';
import * as import14 from '@angular/forms/src/directives/validators';
import * as import15 from '@angular/forms/src/directives/ng_model';
import * as import16 from '../error-handling/error.component';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '../error-handling/error.component.ngfactory';
import * as import19 from '../error-handling/error.service';
import * as import20 from '@angular/forms/src/validators';
import * as import21 from '@angular/forms/src/directives/control_value_accessor';
import * as import22 from '@angular/forms/src/directives/ng_control';
import * as import23 from '@angular/forms/src/directives/control_container';
var renderType_SigninComponent_Host:import0.RenderComponentType = (null as any);
class _View_SigninComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _SigninComponent_0_4:import3.SigninComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SigninComponent_Host0,renderType_SigninComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-signin',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_SigninComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._SigninComponent_0_4 = new import3.SigninComponent(this.parentInjector.get(import8.AuthService));
    this._appEl_0.initComponent(this._SigninComponent_0_4,[],compView_0);
    compView_0.create(this._SigninComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.SigninComponent) && (0 === requestNodeIndex))) { return this._SigninComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_SigninComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_SigninComponent_Host === (null as any))) { (renderType_SigninComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_SigninComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const SigninComponentNgFactory:import10.ComponentFactory<import3.SigninComponent> = new import10.ComponentFactory<import3.SigninComponent>('app-signin',viewFactory_SigninComponent_Host0,import3.SigninComponent);
const styles_SigninComponent:any[] = [];
var renderType_SigninComponent:import0.RenderComponentType = (null as any);
class _View_SigninComponent0 extends import1.AppView<import3.SigninComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _NgForm_7_3:import11.NgForm;
  _ControlContainer_7_4:any;
  _NgControlStatusGroup_7_5:import12.NgControlStatusGroup;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _DefaultValueAccessor_16_3:import13.DefaultValueAccessor;
  _RequiredValidator_16_4:import14.RequiredValidator;
  _PatternValidator_16_5:import14.PatternValidator;
  _NG_VALIDATORS_16_6:any[];
  _NG_VALUE_ACCESSOR_16_7:any[];
  _NgModel_16_8:import15.NgModel;
  _NgControl_16_9:any;
  _NgControlStatus_16_10:import12.NgControlStatus;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  _DefaultValueAccessor_30_3:import13.DefaultValueAccessor;
  _RequiredValidator_30_4:import14.RequiredValidator;
  _NG_VALIDATORS_30_5:any[];
  _NG_VALUE_ACCESSOR_30_6:any[];
  _NgModel_30_7:import15.NgModel;
  _NgControl_30_8:any;
  _NgControlStatus_30_9:import12.NgControlStatus;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _text_34:any;
  _text_35:any;
  _text_36:any;
  _el_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _text_41:any;
  _text_42:any;
  _el_43:any;
  /*private*/ _appEl_43:import2.AppElement;
  _ErrorComponent_43_4:import16.ErrorComponent;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_22:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  /*private*/ _expr_28:any;
  /*private*/ _expr_29:any;
  /*private*/ _expr_30:any;
  /*private*/ _expr_31:any;
  /*private*/ _expr_32:any;
  /*private*/ _expr_33:any;
  /*private*/ _expr_34:any;
  /*private*/ _expr_35:any;
  /*private*/ _expr_36:any;
  /*private*/ _expr_37:any;
  /*private*/ _expr_38:any;
  /*private*/ _expr_39:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SigninComponent0,renderType_SigninComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','container');
    this._text_1 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','well col-xs-offset-3 col-xs-6');
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'h1',(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'Sign in',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n\n    ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_2,'form',(null as any));
    this._NgForm_7_3 = new import11.NgForm((null as any),(null as any));
    this._ControlContainer_7_4 = this._NgForm_7_3;
    this._NgControlStatusGroup_7_5 = new import12.NgControlStatusGroup(this._ControlContainer_7_4);
    this._text_8 = this.renderer.createText(this._el_7,'\n        ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'div',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','form-group row');
    this._text_10 = this.renderer.createText(this._el_9,'\n            ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_9,'label',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','col-xs-2 col-form-label');
    this.renderer.setElementAttribute(this._el_11,'for','email');
    this._text_12 = this.renderer.createText(this._el_11,'Email',(null as any));
    this._text_13 = this.renderer.createText(this._el_9,'\n            ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_9,'div',(null as any));
    this.renderer.setElementAttribute(this._el_14,'class','col-xs-10');
    this._text_15 = this.renderer.createText(this._el_14,'\n                ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_14,'input',(null as any));
    this.renderer.setElementAttribute(this._el_16,'class','form-control');
    this.renderer.setElementAttribute(this._el_16,'id','email');
    this.renderer.setElementAttribute(this._el_16,'name','email');
    this.renderer.setElementAttribute(this._el_16,'pattern','[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$');
    this.renderer.setElementAttribute(this._el_16,'required','');
    this.renderer.setElementAttribute(this._el_16,'type','email');
    this._DefaultValueAccessor_16_3 = new import13.DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_16));
    this._RequiredValidator_16_4 = new import14.RequiredValidator();
    this._PatternValidator_16_5 = new import14.PatternValidator();
    this._NG_VALIDATORS_16_6 = [
      this._RequiredValidator_16_4,
      this._PatternValidator_16_5
    ]
    ;
    this._NG_VALUE_ACCESSOR_16_7 = [this._DefaultValueAccessor_16_3];
    this._NgModel_16_8 = new import15.NgModel(this._ControlContainer_7_4,this._NG_VALIDATORS_16_6,(null as any),this._NG_VALUE_ACCESSOR_16_7);
    this._NgControl_16_9 = this._NgModel_16_8;
    this._NgControlStatus_16_10 = new import12.NgControlStatus(this._NgControl_16_9);
    this._text_17 = this.renderer.createText(this._el_14,'\n                ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_14,'div',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','data-validation-message');
    this._text_19 = this.renderer.createText(this._el_18,'Valid email is required',(null as any));
    this._text_20 = this.renderer.createText(this._el_14,'\n            ',(null as any));
    this._text_21 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._text_22 = this.renderer.createText(this._el_7,'\n\n        ',(null as any));
    this._el_23 = this.renderer.createElement(this._el_7,'div',(null as any));
    this.renderer.setElementAttribute(this._el_23,'class','form-group row');
    this._text_24 = this.renderer.createText(this._el_23,'\n            ',(null as any));
    this._el_25 = this.renderer.createElement(this._el_23,'label',(null as any));
    this.renderer.setElementAttribute(this._el_25,'class','col-xs-2 col-form-label');
    this.renderer.setElementAttribute(this._el_25,'for','password');
    this._text_26 = this.renderer.createText(this._el_25,'Password',(null as any));
    this._text_27 = this.renderer.createText(this._el_23,'\n            ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_23,'div',(null as any));
    this.renderer.setElementAttribute(this._el_28,'class','col-xs-10');
    this._text_29 = this.renderer.createText(this._el_28,'\n                ',(null as any));
    this._el_30 = this.renderer.createElement(this._el_28,'input',(null as any));
    this.renderer.setElementAttribute(this._el_30,'class','form-control');
    this.renderer.setElementAttribute(this._el_30,'id','password');
    this.renderer.setElementAttribute(this._el_30,'name','password');
    this.renderer.setElementAttribute(this._el_30,'required','');
    this.renderer.setElementAttribute(this._el_30,'type','password');
    this._DefaultValueAccessor_30_3 = new import13.DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_30));
    this._RequiredValidator_30_4 = new import14.RequiredValidator();
    this._NG_VALIDATORS_30_5 = [this._RequiredValidator_30_4];
    this._NG_VALUE_ACCESSOR_30_6 = [this._DefaultValueAccessor_30_3];
    this._NgModel_30_7 = new import15.NgModel(this._ControlContainer_7_4,this._NG_VALIDATORS_30_5,(null as any),this._NG_VALUE_ACCESSOR_30_6);
    this._NgControl_30_8 = this._NgModel_30_7;
    this._NgControlStatus_30_9 = new import12.NgControlStatus(this._NgControl_30_8);
    this._text_31 = this.renderer.createText(this._el_28,'\n                ',(null as any));
    this._el_32 = this.renderer.createElement(this._el_28,'div',(null as any));
    this.renderer.setElementAttribute(this._el_32,'class','data-validation-message');
    this._text_33 = this.renderer.createText(this._el_32,'Password is required',(null as any));
    this._text_34 = this.renderer.createText(this._el_28,'\n            ',(null as any));
    this._text_35 = this.renderer.createText(this._el_23,'\n        ',(null as any));
    this._text_36 = this.renderer.createText(this._el_7,'\n\n        ',(null as any));
    this._el_37 = this.renderer.createElement(this._el_7,'div',(null as any));
    this.renderer.setElementAttribute(this._el_37,'class','text-right');
    this._text_38 = this.renderer.createText(this._el_37,'\n            ',(null as any));
    this._el_39 = this.renderer.createElement(this._el_37,'button',(null as any));
    this.renderer.setElementAttribute(this._el_39,'class','btn btn-primary');
    this.renderer.setElementAttribute(this._el_39,'type','submit');
    this._text_40 = this.renderer.createText(this._el_39,'Sign in',(null as any));
    this._text_41 = this.renderer.createText(this._el_37,'\n        ',(null as any));
    this._text_42 = this.renderer.createText(this._el_7,'\n\n        ',(null as any));
    this._el_43 = this.renderer.createElement(this._el_7,'app-error',(null as any));
    this._appEl_43 = new import2.AppElement(43,7,this,this._el_43);
    var compView_43:any = import18.viewFactory_ErrorComponent0(this.viewUtils,this.injector(43),this._appEl_43);
    this._ErrorComponent_43_4 = new import16.ErrorComponent(this.parentInjector.get(import19.ErrorService));
    this._appEl_43.initComponent(this._ErrorComponent_43_4,[],compView_43);
    compView_43.create(this._ErrorComponent_43_4,[],(null as any));
    this._text_44 = this.renderer.createText(this._el_7,'\n    ',(null as any));
    this._text_45 = this.renderer.createText(this._el_2,'\n ',(null as any));
    this._text_46 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_7,'ngSubmit',this.eventHandler(this._handle_ngSubmit_7_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_7,'submit',this.eventHandler(this._handle_submit_7_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_7,'reset',this.eventHandler(this._handle_reset_7_2.bind(this)));
    const subscription_0:any = this._NgForm_7_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_7_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_16,'ngModelChange',this.eventHandler(this._handle_ngModelChange_16_0.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_16,'input',this.eventHandler(this._handle_input_16_1.bind(this)));
    var disposable_5:Function = this.renderer.listen(this._el_16,'blur',this.eventHandler(this._handle_blur_16_2.bind(this)));
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    const subscription_1:any = this._NgModel_16_8.update.subscribe(this.eventHandler(this._handle_ngModelChange_16_0.bind(this)));
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    this._expr_21 = import7.UNINITIALIZED;
    this._expr_22 = import7.UNINITIALIZED;
    this._expr_23 = import7.UNINITIALIZED;
    this._expr_24 = import7.UNINITIALIZED;
    var disposable_6:Function = this.renderer.listen(this._el_30,'ngModelChange',this.eventHandler(this._handle_ngModelChange_30_0.bind(this)));
    var disposable_7:Function = this.renderer.listen(this._el_30,'input',this.eventHandler(this._handle_input_30_1.bind(this)));
    var disposable_8:Function = this.renderer.listen(this._el_30,'blur',this.eventHandler(this._handle_blur_30_2.bind(this)));
    this._expr_28 = import7.UNINITIALIZED;
    this._expr_29 = import7.UNINITIALIZED;
    this._expr_30 = import7.UNINITIALIZED;
    this._expr_31 = import7.UNINITIALIZED;
    const subscription_2:any = this._NgModel_30_7.update.subscribe(this.eventHandler(this._handle_ngModelChange_30_0.bind(this)));
    this._expr_32 = import7.UNINITIALIZED;
    this._expr_33 = import7.UNINITIALIZED;
    this._expr_34 = import7.UNINITIALIZED;
    this._expr_35 = import7.UNINITIALIZED;
    this._expr_36 = import7.UNINITIALIZED;
    this._expr_37 = import7.UNINITIALIZED;
    this._expr_38 = import7.UNINITIALIZED;
    this._expr_39 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._text_34,
      this._text_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._text_41,
      this._text_42,
      this._el_43,
      this._text_44,
      this._text_45,
      this._text_46
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5,
      disposable_6,
      disposable_7,
      disposable_8
    ]
    ,[
      subscription_0,
      subscription_1,
      subscription_2
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.DefaultValueAccessor) && (16 === requestNodeIndex))) { return this._DefaultValueAccessor_16_3; }
    if (((token === import14.RequiredValidator) && (16 === requestNodeIndex))) { return this._RequiredValidator_16_4; }
    if (((token === import14.PatternValidator) && (16 === requestNodeIndex))) { return this._PatternValidator_16_5; }
    if (((token === import20.NG_VALIDATORS) && (16 === requestNodeIndex))) { return this._NG_VALIDATORS_16_6; }
    if (((token === import21.NG_VALUE_ACCESSOR) && (16 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_16_7; }
    if (((token === import15.NgModel) && (16 === requestNodeIndex))) { return this._NgModel_16_8; }
    if (((token === import22.NgControl) && (16 === requestNodeIndex))) { return this._NgControl_16_9; }
    if (((token === import12.NgControlStatus) && (16 === requestNodeIndex))) { return this._NgControlStatus_16_10; }
    if (((token === import13.DefaultValueAccessor) && (30 === requestNodeIndex))) { return this._DefaultValueAccessor_30_3; }
    if (((token === import14.RequiredValidator) && (30 === requestNodeIndex))) { return this._RequiredValidator_30_4; }
    if (((token === import20.NG_VALIDATORS) && (30 === requestNodeIndex))) { return this._NG_VALIDATORS_30_5; }
    if (((token === import21.NG_VALUE_ACCESSOR) && (30 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_30_6; }
    if (((token === import15.NgModel) && (30 === requestNodeIndex))) { return this._NgModel_30_7; }
    if (((token === import22.NgControl) && (30 === requestNodeIndex))) { return this._NgControl_30_8; }
    if (((token === import12.NgControlStatus) && (30 === requestNodeIndex))) { return this._NgControlStatus_30_9; }
    if (((token === import16.ErrorComponent) && (43 === requestNodeIndex))) { return this._ErrorComponent_43_4; }
    if (((token === import11.NgForm) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 44)))) { return this._NgForm_7_3; }
    if (((token === import23.ControlContainer) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 44)))) { return this._ControlContainer_7_4; }
    if (((token === import12.NgControlStatusGroup) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 44)))) { return this._NgControlStatusGroup_7_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_12:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._RequiredValidator_16_4.required = currVal_12;
      this._expr_12 = currVal_12;
    }
    changes = (null as any);
    const currVal_14:any = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$';
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this._PatternValidator_16_5.pattern = currVal_14;
      if ((changes === (null as any))) { (changes = {}); }
      changes['pattern'] = new import7.SimpleChange(this._expr_14,currVal_14);
      this._expr_14 = currVal_14;
    }
    if ((changes !== (null as any))) { this._PatternValidator_16_5.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_16:any = 'email';
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this._NgModel_16_8.name = currVal_16;
      if ((changes === (null as any))) { (changes = {}); }
      changes['name'] = new import7.SimpleChange(this._expr_16,currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this.context.user.email;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this._NgModel_16_8.model = currVal_17;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_17,currVal_17);
      this._expr_17 = currVal_17;
    }
    if ((changes !== (null as any))) { this._NgModel_16_8.ngOnChanges(changes); }
    const currVal_28:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_28,currVal_28)) {
      this._RequiredValidator_30_4.required = currVal_28;
      this._expr_28 = currVal_28;
    }
    changes = (null as any);
    const currVal_30:any = 'password';
    if (import4.checkBinding(throwOnChange,this._expr_30,currVal_30)) {
      this._NgModel_30_7.name = currVal_30;
      if ((changes === (null as any))) { (changes = {}); }
      changes['name'] = new import7.SimpleChange(this._expr_30,currVal_30);
      this._expr_30 = currVal_30;
    }
    const currVal_31:any = this.context.user.password;
    if (import4.checkBinding(throwOnChange,this._expr_31,currVal_31)) {
      this._NgModel_30_7.model = currVal_31;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_31,currVal_31);
      this._expr_31 = currVal_31;
    }
    if ((changes !== (null as any))) { this._NgModel_30_7.ngOnChanges(changes); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._ErrorComponent_43_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_3:any = this._NgControlStatusGroup_7_5.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_7,'ng-untouched',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this._NgControlStatusGroup_7_5.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_7,'ng-touched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatusGroup_7_5.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_7,'ng-pristine',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatusGroup_7_5.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_7,'ng-dirty',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatusGroup_7_5.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_7,'ng-valid',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatusGroup_7_5.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_7,'ng-invalid',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_13:any = (this._RequiredValidator_16_4.required? '': (null as any));
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementAttribute(this._el_16,'required',((currVal_13 == (null as any))? (null as any): currVal_13.toString()));
      this._expr_13 = currVal_13;
    }
    const currVal_15:any = (this._PatternValidator_16_5.pattern? this._PatternValidator_16_5.pattern: (null as any));
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementAttribute(this._el_16,'pattern',((currVal_15 == (null as any))? (null as any): currVal_15.toString()));
      this._expr_15 = currVal_15;
    }
    const currVal_18:any = this._NgControlStatus_16_10.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementClass(this._el_16,'ng-untouched',currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = this._NgControlStatus_16_10.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementClass(this._el_16,'ng-touched',currVal_19);
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = this._NgControlStatus_16_10.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementClass(this._el_16,'ng-pristine',currVal_20);
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = this._NgControlStatus_16_10.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementClass(this._el_16,'ng-dirty',currVal_21);
      this._expr_21 = currVal_21;
    }
    const currVal_22:any = this._NgControlStatus_16_10.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this.renderer.setElementClass(this._el_16,'ng-valid',currVal_22);
      this._expr_22 = currVal_22;
    }
    const currVal_23:any = this._NgControlStatus_16_10.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setElementClass(this._el_16,'ng-invalid',currVal_23);
      this._expr_23 = currVal_23;
    }
    const currVal_24:any = (this._NgModel_16_8.valid || this._NgModel_16_8.pristine);
    if (import4.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setElementProperty(this._el_18,'hidden',currVal_24);
      this._expr_24 = currVal_24;
    }
    const currVal_29:any = (this._RequiredValidator_30_4.required? '': (null as any));
    if (import4.checkBinding(throwOnChange,this._expr_29,currVal_29)) {
      this.renderer.setElementAttribute(this._el_30,'required',((currVal_29 == (null as any))? (null as any): currVal_29.toString()));
      this._expr_29 = currVal_29;
    }
    const currVal_32:any = this._NgControlStatus_30_9.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_32,currVal_32)) {
      this.renderer.setElementClass(this._el_30,'ng-untouched',currVal_32);
      this._expr_32 = currVal_32;
    }
    const currVal_33:any = this._NgControlStatus_30_9.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_33,currVal_33)) {
      this.renderer.setElementClass(this._el_30,'ng-touched',currVal_33);
      this._expr_33 = currVal_33;
    }
    const currVal_34:any = this._NgControlStatus_30_9.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_34,currVal_34)) {
      this.renderer.setElementClass(this._el_30,'ng-pristine',currVal_34);
      this._expr_34 = currVal_34;
    }
    const currVal_35:any = this._NgControlStatus_30_9.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_35,currVal_35)) {
      this.renderer.setElementClass(this._el_30,'ng-dirty',currVal_35);
      this._expr_35 = currVal_35;
    }
    const currVal_36:any = this._NgControlStatus_30_9.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_36,currVal_36)) {
      this.renderer.setElementClass(this._el_30,'ng-valid',currVal_36);
      this._expr_36 = currVal_36;
    }
    const currVal_37:any = this._NgControlStatus_30_9.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_37,currVal_37)) {
      this.renderer.setElementClass(this._el_30,'ng-invalid',currVal_37);
      this._expr_37 = currVal_37;
    }
    const currVal_38:any = (this._NgModel_30_7.valid || this._NgModel_30_7.pristine);
    if (import4.checkBinding(throwOnChange,this._expr_38,currVal_38)) {
      this.renderer.setElementProperty(this._el_32,'hidden',currVal_38);
      this._expr_38 = currVal_38;
    }
    const currVal_39:boolean = !this._NgForm_7_3.form.valid;
    if (import4.checkBinding(throwOnChange,this._expr_39,currVal_39)) {
      this.renderer.setElementProperty(this._el_39,'disabled',currVal_39);
      this._expr_39 = currVal_39;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_16_8.ngOnDestroy();
    this._NgModel_30_7.ngOnDestroy();
  }
  private _handle_ngSubmit_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onSubmit(this._NgForm_7_3)) !== false);
    return (true && pd_0);
  }
  private _handle_submit_7_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._NgForm_7_3.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_reset_7_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._NgForm_7_3.onReset()) !== false);
    return (true && pd_0);
  }
  private _handle_ngModelChange_16_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.user.email = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_input_16_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_16_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_16_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_16_3.onTouched()) !== false);
    return (true && pd_0);
  }
  private _handle_ngModelChange_30_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.user.password = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_input_30_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_30_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_30_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_30_3.onTouched()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_SigninComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.SigninComponent> {
  if ((renderType_SigninComponent === (null as any))) { (renderType_SigninComponent = viewUtils.createRenderComponentType('/Users/evisa/Thematicum/client/app/auth/signin.component.html',0,import9.ViewEncapsulation.None,styles_SigninComponent,{})); }
  return new _View_SigninComponent0(viewUtils,parentInjector,declarationEl);
}