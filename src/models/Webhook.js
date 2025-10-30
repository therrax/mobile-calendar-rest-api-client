"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhook = void 0;
/**
 * Klasa reprezentująca webhook
 */
var Webhook = /** @class */ (function () {
    function Webhook(webhookId, url, events, status, createdAt, updatedAt, secret) {
        this.webhookId = webhookId;
        this.url = url;
        this.events = events;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.secret = secret;
    }
    /**
     * Sprawdza czy webhook jest aktywny
     */
    Webhook.prototype.isActive = function () {
        return this.status === 'ACTIVE';
    };
    /**
     * Sprawdza czy webhook nasłuchuje określonego zdarzenia
     */
    Webhook.prototype.listensToEvent = function (event) {
        return this.events.includes(event);
    };
    /**
     * Sprawdza czy webhook ma skonfigurowany sekret
     */
    Webhook.prototype.hasSecret = function () {
        return !!this.secret;
    };
    return Webhook;
}());
exports.Webhook = Webhook;
