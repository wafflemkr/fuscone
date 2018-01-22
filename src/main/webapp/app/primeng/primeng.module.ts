
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FusconeButtonDemoModule } from './buttons/button/buttondemo.module';
import { FusconeSplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { FusconeDialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { FusconeConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';
import { FusconeLightboxDemoModule } from './overlay/lightbox/lightboxdemo.module';
import { FusconeTooltipDemoModule } from './overlay/tooltip/tooltipdemo.module';
import { FusconeOverlayPanelDemoModule } from './overlay/overlaypanel/overlaypaneldemo.module';
import { FusconeSideBarDemoModule } from './overlay/sidebar/sidebardemo.module';

import { FusconeInputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { FusconeInputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { FusconeInputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';
import { FusconeCalendarDemoModule } from './inputs/calendar/calendardemo.module';
import { FusconeCheckboxDemoModule } from './inputs/checkbox/checkboxdemo.module';
import { FusconeChipsDemoModule } from './inputs/chips/chipsdemo.module';
import { FusconeColorPickerDemoModule } from './inputs/colorpicker/colorpickerdemo.module';
import { FusconeInputMaskDemoModule } from './inputs/inputmask/inputmaskdemo.module';
import { FusconeInputSwitchDemoModule } from './inputs/inputswitch/inputswitchdemo.module';
import { FusconePasswordIndicatorDemoModule } from './inputs/passwordindicator/passwordindicatordemo.module';
import { FusconeAutoCompleteDemoModule } from './inputs/autocomplete/autocompletedemo.module';
import { FusconeSliderDemoModule } from './inputs/slider/sliderdemo.module';
import { FusconeSpinnerDemoModule } from './inputs/spinner/spinnerdemo.module';
import { FusconeRatingDemoModule } from './inputs/rating/ratingdemo.module';
import { FusconeSelectDemoModule } from './inputs/select/selectdemo.module';
import { FusconeSelectButtonDemoModule } from './inputs/selectbutton/selectbuttondemo.module';
import { FusconeListboxDemoModule } from './inputs/listbox/listboxdemo.module';
import { FusconeRadioButtonDemoModule } from './inputs/radiobutton/radiobuttondemo.module';
import { FusconeToggleButtonDemoModule } from './inputs/togglebutton/togglebuttondemo.module';
import { FusconeEditorDemoModule } from './inputs/editor/editordemo.module';

import { FusconeGrowlDemoModule } from './messages/growl/growldemo.module';
import { FusconeMessagesDemoModule } from './messages/messages/messagesdemo.module';
import { FusconeGalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { FusconeFileUploadDemoModule } from './fileupload/fileupload/fileuploaddemo.module';

import { FusconeAccordionDemoModule } from './panel/accordion/accordiondemo.module';
import { FusconePanelDemoModule } from './panel/panel/paneldemo.module';
import { FusconeTabViewDemoModule } from './panel/tabview/tabviewdemo.module';
import { FusconeFieldsetDemoModule } from './panel/fieldset/fieldsetdemo.module';
import { FusconeToolbarDemoModule } from './panel/toolbar/toolbardemo.module';
import { FusconeGridDemoModule } from './panel/grid/griddemo.module';

import { FusconeDataTableDemoModule } from './data/datatable/datatabledemo.module';
import { FusconeDataGridDemoModule } from './data/datagrid/datagriddemo.module';
import { FusconeDataListDemoModule } from './data/datalist/datalistdemo.module';
import { FusconeDataScrollerDemoModule } from './data/datascroller/datascrollerdemo.module';
import { FusconePickListDemoModule } from './data/picklist/picklistdemo.module';
import { FusconeOrderListDemoModule } from './data/orderlist/orderlistdemo.module';
import { FusconeScheduleDemoModule } from './data/schedule/scheduledemo.module';
import { FusconeTreeDemoModule } from './data/tree/treedemo.module';
import { FusconeTreeTableDemoModule } from './data/treetable/treetabledemo.module';
import { FusconePaginatorDemoModule } from './data/paginator/paginatordemo.module';
import { FusconeGmapDemoModule } from './data/gmap/gmapdemo.module';
import { FusconeOrgChartDemoModule } from './data/orgchart/orgchartdemo.module';
import { FusconeCarouselDemoModule } from './data/carousel/carouseldemo.module';

import { FusconeBarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { FusconeDoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { FusconeLinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { FusconePiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { FusconePolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { FusconeRadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

import { FusconeDragDropDemoModule } from './dragdrop/dragdrop/dragdropdemo.module';

import { FusconeMenuDemoModule } from './menu/menu/menudemo.module';
import { FusconeContextMenuDemoModule } from './menu/contextmenu/contextmenudemo.module';
import { FusconePanelMenuDemoModule } from './menu/panelmenu/panelmenudemo.module';
import { FusconeStepsDemoModule } from './menu/steps/stepsdemo.module';
import { FusconeTieredMenuDemoModule } from './menu/tieredmenu/tieredmenudemo.module';
import { FusconeBreadcrumbDemoModule } from './menu/breadcrumb/breadcrumbdemo.module';
import { FusconeMegaMenuDemoModule } from './menu/megamenu/megamenudemo.module';
import { FusconeMenuBarDemoModule } from './menu/menubar/menubardemo.module';
import { FusconeSlideMenuDemoModule } from './menu/slidemenu/slidemenudemo.module';
import { FusconeTabMenuDemoModule } from './menu/tabmenu/tabmenudemo.module';

import { FusconeBlockUIDemoModule } from './misc/blockui/blockuidemo.module';
import { FusconeCaptchaDemoModule } from './misc/captcha/captchademo.module';
import { FusconeDeferDemoModule } from './misc/defer/deferdemo.module';
import { FusconeInplaceDemoModule } from './misc/inplace/inplacedemo.module';
import { FusconeProgressBarDemoModule } from './misc/progressbar/progressbardemo.module';
import { FusconeRTLDemoModule } from './misc/rtl/rtldemo.module';
import { FusconeTerminalDemoModule } from './misc/terminal/terminaldemo.module';
import { FusconeValidationDemoModule } from './misc/validation/validationdemo.module';
import { FusconeProgressSpinnerDemoModule } from './misc/progressspinner/progressspinnerdemo.module';

@NgModule({
    imports: [

        FusconeMenuDemoModule,
        FusconeContextMenuDemoModule,
        FusconePanelMenuDemoModule,
        FusconeStepsDemoModule,
        FusconeTieredMenuDemoModule,
        FusconeBreadcrumbDemoModule,
        FusconeMegaMenuDemoModule,
        FusconeMenuBarDemoModule,
        FusconeSlideMenuDemoModule,
        FusconeTabMenuDemoModule,

        FusconeBlockUIDemoModule,
        FusconeCaptchaDemoModule,
        FusconeDeferDemoModule,
        FusconeInplaceDemoModule,
        FusconeProgressBarDemoModule,
        FusconeInputMaskDemoModule,
        FusconeRTLDemoModule,
        FusconeTerminalDemoModule,
        FusconeValidationDemoModule,

        FusconeButtonDemoModule,
        FusconeSplitbuttonDemoModule,

        FusconeInputTextDemoModule,
        FusconeInputTextAreaDemoModule,
        FusconeInputGroupDemoModule,
        FusconeCalendarDemoModule,
        FusconeChipsDemoModule,
        FusconeInputMaskDemoModule,
        FusconeInputSwitchDemoModule,
        FusconePasswordIndicatorDemoModule,
        FusconeAutoCompleteDemoModule,
        FusconeSliderDemoModule,
        FusconeSpinnerDemoModule,
        FusconeRatingDemoModule,
        FusconeSelectDemoModule,
        FusconeSelectButtonDemoModule,
        FusconeListboxDemoModule,
        FusconeRadioButtonDemoModule,
        FusconeToggleButtonDemoModule,
        FusconeEditorDemoModule,
        FusconeColorPickerDemoModule,
        FusconeCheckboxDemoModule,

        FusconeGrowlDemoModule,
        FusconeMessagesDemoModule,
        FusconeGalleriaDemoModule,

        FusconeFileUploadDemoModule,

        FusconeAccordionDemoModule,
        FusconePanelDemoModule,
        FusconeTabViewDemoModule,
        FusconeFieldsetDemoModule,
        FusconeToolbarDemoModule,
        FusconeGridDemoModule,

        FusconeBarchartDemoModule,
        FusconeDoughnutchartDemoModule,
        FusconeLinechartDemoModule,
        FusconePiechartDemoModule,
        FusconePolarareachartDemoModule,
        FusconeRadarchartDemoModule,

        FusconeDragDropDemoModule,

        FusconeDialogDemoModule,
        FusconeConfirmDialogDemoModule,
        FusconeLightboxDemoModule,
        FusconeTooltipDemoModule,
        FusconeOverlayPanelDemoModule,
        FusconeSideBarDemoModule,

        FusconeDataTableDemoModule,
        FusconeDataGridDemoModule,
        FusconeDataListDemoModule,
        FusconeDataScrollerDemoModule,
        FusconeScheduleDemoModule,
        FusconeOrderListDemoModule,
        FusconePickListDemoModule,
        FusconeTreeDemoModule,
        FusconeTreeTableDemoModule,
        FusconePaginatorDemoModule,
        FusconeOrgChartDemoModule,
        FusconeGmapDemoModule,
        FusconeCarouselDemoModule,
        FusconeProgressSpinnerDemoModule

    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FusconeprimengModule {}
