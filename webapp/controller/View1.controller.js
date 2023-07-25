sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
            */  
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("pricingworkflow.controller.View1", {
            onInit: function () {

            },

            onChangeFilters: function(oEvent){
                debugger
                let selectedStatus = oEvent.getSource().getSelectedKey()
                
                var oFilter = new Filter(
                    "Status",
                    FilterOperator.Contains,
                    selectedStatus
                );

                this.byId("ApprovalTable").getBinding("items").filter([oFilter])
            
            }   

        });
    });
