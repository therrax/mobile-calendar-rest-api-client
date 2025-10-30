"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
/**
 * Invoice model with automatic field mapping
 */
var Invoice = /** @class */ (function () {
    function Invoice(data) {
        if (data === void 0) { data = {}; }
        var _this = this;
        this.invoiceId = null;
        this.invoiceNo = 0;
        this.invoiceFullNo = '';
        this.format = '';
        this.extraChar = '';
        //   Invoice type: 0=Standard Invoice, 1=VAT Invoice, 2=Pro Forma Invoice, 3=Advance Invoice, 4=Correction Invoice, 5=VAT Exempt Invoice, 6=Advance Receipt, 7=Correction Receipt
        this.invoiceType = 0;
        this.buyer = { companyName: '', address: '', taxId: '' };
        this.seller = { companyName: '', address: '', taxId: '' };
        this.receiver = null;
        this.invoiceItems = [];
        this.paymentType = 0;
        this.paymentStatus = 0;
        this.issueDate = '';
        this.saleDate = '';
        this.paymentDate = '';
        this.currency = '';
        Object.keys(data).forEach(function (key) {
            if (key in _this) {
                _this[key] = data[key];
            }
        });
    }
    return Invoice;
}());
exports.Invoice = Invoice;
