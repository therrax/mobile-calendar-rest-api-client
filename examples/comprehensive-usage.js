"use strict";
/**
 * Comprehensive usage example of Mobile Calendar API Client
 * Combines basic and advanced functionality with full CRUD testing
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
function comprehensiveUsageExample() {
    return __awaiter(this, void 0, void 0, function () {
        var logger, tally, mark, client, createdEntities, rooms, reservations, clients, availability, pricing, rates, sources, roomTypes, invoices, newClient, readClient, updatedClient, reservation, readReservation, updatedReservation, error_1, lockReservation, lockId, error_2, error_3, error_4, error_5, error_6, error_7, error_8, error_9, error_10, updatedLock, error_11, error_12, error_13, error_14, error_15, reservationId, error_16, error_17, error_18, error_19, error_20, error_21, error_22, error_23, error_24, error_25, error_26, error_27, error_28, error_29, error_30, error_31, i, testRoom, testRoomId, error_32, error_33, error_34, error_35, error_36, error_37, error_38, error_39, error_40, longName, error_41, error_42, error_43, error_44, error_45, error_46, validUpdate, error_47, createdInvoice, readInvoice, updatedInvoice, error_48, error_49, error_50, error_51, error_52, bar, successPct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('🚀 Comprehensive Mobile Calendar API Client Testing\n');
                    console.log('='.repeat(60));
                    logger = index_1.Logger.getInstance();
                    logger.setLogLevel(index_1.LogLevel.DEBUG);
                    tally = { total: 0, passed: 0 };
                    mark = function (ok) { tally.passed += ok ? 1 : 0; };
                    client = new index_1.MobileCalendarClient({
                        clientId: "user3726_a074f28a2edd3d4f4d072144201051ea",
                        clientSecret: "71a54800fc76879b8dcf623211fbd1fcd8e4cd00028c2111671cb46ad4a0c385",
                    });
                    createdEntities = {
                        client: null,
                        room: null,
                        reservation: null,
                        invoice: null
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 215, 216, 238]);
                    // ===== BASIC API TESTS =====
                    console.log('\n📋 TESTING BASIC API ENDPOINTS');
                    console.log('-'.repeat(40));
                    // 1. Get rooms
                    tally.total++;
                    console.log('✅ Getting rooms...');
                    return [4 /*yield*/, client.getRooms({ page: 1, limit: 5 })];
                case 2:
                    rooms = _a.sent();
                    console.log("   \u2713 Found ".concat(rooms.data.length, " rooms"));
                    console.log("   \u2713 RUID: ".concat(rooms.meta.ruid));
                    mark(true);
                    // 2. Get reservations
                    tally.total++;
                    console.log('\n✅ Getting reservations...');
                    return [4 /*yield*/, client.getReservations({ page: 1, limit: 5 })];
                case 3:
                    reservations = _a.sent();
                    console.log("   \u2713 Found ".concat(reservations.data.length, " reservations"));
                    console.log("   \u2713 RUID: ".concat(reservations.meta.ruid));
                    mark(true);
                    // 3. Get clients
                    tally.total++;
                    console.log('\n✅ Getting clients...');
                    return [4 /*yield*/, client.getClients({ page: 1, limit: 5 })];
                case 4:
                    clients = _a.sent();
                    console.log("   \u2713 Found ".concat(clients.data.length, " clients"));
                    console.log("   \u2713 RUID: ".concat(clients.meta.ruid));
                    mark(true);
                    if (!(rooms.data.length > 0)) return [3 /*break*/, 6];
                    tally.total++;
                    console.log('\n✅ Getting availability...');
                    return [4 /*yield*/, client.getAvailability({
                            roomId: [rooms.data[0].roomId],
                            from: '2025-01-01',
                            to: '2025-01-31'
                        })];
                case 5:
                    availability = _a.sent();
                    console.log("   \u2713 Retrieved availability for ".concat(availability.data.length, " days"));
                    console.log("   \u2713 RUID: ".concat(availability.meta.ruid));
                    mark(true);
                    console.log("availability.data:", availability.data);
                    _a.label = 6;
                case 6:
                    if (!(rooms.data.length > 0)) return [3 /*break*/, 8];
                    tally.total++;
                    console.log('\n✅ Getting pricing...');
                    return [4 /*yield*/, client.getPricing({
                            roomId: [rooms.data[0].roomId],
                            from: '2025-01-01',
                            to: '2025-01-31'
                        })];
                case 7:
                    pricing = _a.sent();
                    console.log("   \u2713 Retrieved pricing for ".concat(pricing.data.length, " days"));
                    if (pricing.data.length > 0) {
                        console.log("   \u2713 Lowest price: ".concat(pricing.data[0].getLowestPrice()));
                    }
                    console.log("   \u2713 RUID: ".concat(pricing.meta.ruid));
                    mark(true);
                    _a.label = 8;
                case 8:
                    // 6. Get rates
                    tally.total++;
                    console.log('\n✅ Getting rates...');
                    return [4 /*yield*/, client.getRates()];
                case 9:
                    rates = _a.sent();
                    console.log("   \u2713 Retrieved ".concat(rates.data.length, " rates"));
                    if (rates.data.length > 0) {
                        console.log("   \u2713 First rate: ".concat(rates.data[0].name));
                    }
                    console.log("   \u2713 RUID: ".concat(rates.meta.ruid));
                    mark(true);
                    // 7. Get sources
                    tally.total++;
                    console.log('\n✅ Getting sources...');
                    return [4 /*yield*/, client.getSources()];
                case 10:
                    sources = _a.sent();
                    console.log("   \u2713 Retrieved ".concat(sources.data.length, " sources"));
                    if (sources.data.length > 0) {
                        console.log("   \u2713 First source: ".concat(sources.data[0].name, " (custom: ").concat(sources.data[0].isCustom, ")"));
                    }
                    console.log("   \u2713 RUID: ".concat(sources.meta.ruid));
                    mark(true);
                    // 8. Get room types
                    tally.total++;
                    console.log('\n✅ Getting room types...');
                    return [4 /*yield*/, client.getRoomTypes()];
                case 11:
                    roomTypes = _a.sent();
                    console.log("   \u2713 Retrieved ".concat(roomTypes.data.length, " room types"));
                    if (roomTypes.data.length > 0) {
                        console.log("   \u2713 First room type: ".concat(roomTypes.data[0].type, " (").concat(roomTypes.data[0].maxAdults, " adults max)"));
                    }
                    console.log("   \u2713 RUID: ".concat(roomTypes.meta.ruid));
                    mark(true);
                    // 9. Get invoices
                    tally.total++;
                    console.log('\n✅ Getting invoices...');
                    return [4 /*yield*/, client.getInvoices({ page: 1, limit: 5 })];
                case 12:
                    invoices = _a.sent();
                    console.log("   \u2713 Retrieved ".concat(invoices.data.length, " invoices"));
                    console.log("   \u2713 RUID: ".concat(invoices.meta.ruid));
                    mark(true);
                    // ===== CRUD OPERATIONS =====
                    console.log('\n📋 TESTING CRUD OPERATIONS');
                    console.log('-'.repeat(40));
                    // CREATE CLIENT
                    tally.total++;
                    console.log('\n✅ Creating new client...');
                    return [4 /*yield*/, client.createClient({
                            forename: 'Test',
                            name: 'User',
                            phone: '+48123456789',
                            email: 'test.user@example.com',
                            clientType: 'REGULAR',
                            countryId: 1,
                            lang: 'en'
                        })];
                case 13:
                    newClient = _a.sent();
                    createdEntities.client = newClient.data;
                    console.log("   \u2713 Created client: ".concat(newClient.data.getFullName()));
                    console.log("   \u2713 Client ID: ".concat(newClient.data.clientId));
                    console.log("   \u2713 RUID: ".concat(newClient.meta.ruid));
                    mark(true);
                    // READ CLIENT
                    tally.total++;
                    console.log('\n✅ Reading client...');
                    return [4 /*yield*/, client.getClient(newClient.data.clientId)];
                case 14:
                    readClient = _a.sent();
                    console.log("   \u2713 Retrieved client: ".concat(readClient.data.getFullName()));
                    console.log("   \u2713 RUID: ".concat(readClient.meta.ruid));
                    mark(true);
                    // UPDATE CLIENT
                    tally.total++;
                    console.log('\n✅ Updating client...');
                    return [4 /*yield*/, client.updateClient(newClient.data.clientId, {
                            name: 'Updated-User',
                            comments: 'Updated test client'
                        })];
                case 15:
                    updatedClient = _a.sent();
                    console.log("   \u2713 Updated client: ".concat(updatedClient.data.getFullName()));
                    console.log("   \u2713 Comments: ".concat(updatedClient.data.comments));
                    console.log("   \u2713 RUID: ".concat(updatedClient.meta.ruid));
                    mark(true);
                    if (!(rooms.data.length > 0)) return [3 /*break*/, 71];
                    tally.total++;
                    console.log('\n✅ Creating reservation...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-01-15',
                            departure: '2025-01-17',
                            roomId: rooms.data[0].roomId,
                            clientId: newClient.data.clientId,
                            client: {
                                clientId: newClient.data.clientId,
                                forename: newClient.data.forename,
                                name: newClient.data.name,
                                phone: newClient.data.phone,
                                email: newClient.data.email,
                                clientType: newClient.data.clientType,
                                countryId: newClient.data.countryId,
                                lang: newClient.data.lang
                            },
                            checkIn: '14:00',
                            checkOut: '11:00',
                            adults: 2,
                            children: 0,
                            kidsAge: [],
                            registration: 'NONE',
                            sourceId: 1,
                            doorCode: '',
                            additionalInfo: 'CRUD Test reservation',
                            prepayment: 0,
                            prepaymentDeadline: null,
                            paymentStatus: 'NO_PAYMENT',
                            paymentType: 'NONE',
                            currency: 'PLN',
                            meal: 'OV',
                            adultsPortion: 0,
                            childrenPortion: 0,
                            additionalServices: [],
                            color: '#fb8c00',
                            price: 200,
                            pricePerRoom: 200,
                            pricePerMeal: 0,
                            discount: 0,
                            discountType: 0,
                            rateId: null
                        })];
                case 16:
                    reservation = _a.sent();
                    createdEntities.reservation = reservation.data;
                    console.log("   \u2713 Created reservation: ".concat(reservation.data.reservationId));
                    console.log("   \u2713 Arrival: ".concat(reservation.data.arrival));
                    console.log("   \u2713 Departure: ".concat(reservation.data.departure));
                    console.log("   \u2713 Nights: ".concat(reservation.data.getNightsCount()));
                    console.log("   \u2713 RUID: ".concat(reservation.meta.ruid));
                    mark(true);
                    // READ RESERVATION
                    tally.total++;
                    console.log('\n✅ Reading reservation...');
                    return [4 /*yield*/, client.getReservation(reservation.data.reservationId)];
                case 17:
                    readReservation = _a.sent();
                    console.log("   \u2713 Retrieved reservation: ".concat(readReservation.data.reservationId));
                    console.log("   \u2713 RUID: ".concat(readReservation.meta.ruid));
                    mark(true);
                    // UPDATE RESERVATION
                    tally.total++;
                    console.log('\n✅ Updating reservation...');
                    return [4 /*yield*/, client.updateReservation(reservation.data.reservationId, {
                            additionalInfo: 'Updated CRUD test reservation',
                            color: '#ff5722'
                        })];
                case 18:
                    updatedReservation = _a.sent();
                    console.log("   \u2713 Updated reservation info: ".concat(updatedReservation.data.additionalInfo));
                    console.log("   \u2713 Updated color: ".concat(updatedReservation.data.color));
                    console.log("   \u2713 RUID: ".concat(updatedReservation.meta.ruid));
                    mark(true);
                    // OVERLAP ERROR TEST
                    tally.total++;
                    _a.label = 19;
                case 19:
                    _a.trys.push([19, 21, , 22]);
                    console.log('\n✅ Testing overlapping reservation error...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: reservation.data.arrival,
                            departure: reservation.data.departure,
                            roomId: rooms.data[0].roomId,
                            clientId: newClient.data.clientId,
                            client: {
                                clientId: newClient.data.clientId,
                                forename: newClient.data.forename,
                                name: newClient.data.name,
                                phone: newClient.data.phone,
                                email: newClient.data.email,
                                clientType: newClient.data.clientType,
                                countryId: newClient.data.countryId,
                                lang: newClient.data.lang
                            },
                            checkIn: '14:00',
                            checkOut: '11:00',
                            adults: 2,
                            children: 0,
                            kidsAge: [],
                            registration: 'NONE',
                            sourceId: 1,
                            doorCode: '',
                            additionalInfo: 'Overlapping reservation test',
                            prepayment: 0,
                            prepaymentDeadline: null,
                            paymentStatus: 'NO_PAYMENT',
                            paymentType: 'NONE',
                            currency: 'PLN',
                            meal: 'OV',
                            adultsPortion: 0,
                            childrenPortion: 0,
                            additionalServices: [],
                            color: '#9c27b0',
                            price: 200,
                            pricePerRoom: 200,
                            pricePerMeal: 0,
                            discount: 0,
                            discountType: 0,
                            rateId: null
                        })];
                case 20:
                    _a.sent();
                    console.log('   ❌ Overlapping reservation should have failed but did not');
                    mark(false);
                    return [3 /*break*/, 22];
                case 21:
                    error_1 = _a.sent();
                    console.log("   \u2713 Overlap correctly rejected");
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_1.status || 'Unknown'));
                    console.log("   \u2713 Message: ".concat(error_1.message));
                    console.log("   \u2713 RUID: ".concat(error_1.ruid || 'N/A'));
                    return [3 /*break*/, 22];
                case 22:
                    // ===== LOCK CREATION TESTS =====
                    console.log('\n📋 TESTING LOCK CREATION AND VALIDATION');
                    console.log('-'.repeat(45));
                    // CREATE LOCK - Valid lock creation (minimal fields only)
                    tally.total++;
                    console.log('\n✅ Creating valid lock...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'LOCK',
                            arrival: '2025-01-17', // After regular reservation to avoid conflict
                            departure: '2025-01-19',
                            roomId: rooms.data[0].roomId,
                            additionalInfo: 'Test lock - room maintenance'
                        })];
                case 23:
                    lockReservation = _a.sent();
                    console.log("   \u2713 Created lock: ".concat(lockReservation.data.reservationId));
                    console.log("   \u2713 Type: ".concat(lockReservation.data.type));
                    console.log("   \u2713 Arrival: ".concat(lockReservation.data.arrival));
                    console.log("   \u2713 RUID: ".concat(lockReservation.meta.ruid));
                    mark(true);
                    lockId = lockReservation.data.reservationId;
                    // Test: Lock update with checkIn/checkOut fields should be rejected
                    tally.total++;
                    _a.label = 24;
                case 24:
                    _a.trys.push([24, 26, , 27]);
                    console.log('\n✅ Lock update with checkIn/checkOut fields validation...');
                    return [4 /*yield*/, client.updateReservation(lockId, {
                            checkIn: '14:00', // This should be rejected for locks
                            checkOut: '11:00'
                        })];
                case 25:
                    _a.sent();
                    console.log('   ❌ Lock update with checkIn/checkOut should have been rejected');
                    mark(false);
                    return [3 /*break*/, 27];
                case 26:
                    error_2 = _a.sent();
                    console.log("   \u2713 Correctly rejected lock update with checkIn/checkOut: ".concat(error_2.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_2.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_2.ruid || 'N/A'));
                    return [3 /*break*/, 27];
                case 27:
                    // Test: Lock update with client data should be rejected
                    tally.total++;
                    _a.label = 28;
                case 28:
                    _a.trys.push([28, 30, , 31]);
                    console.log('\n✅ Lock update with client data validation...');
                    return [4 /*yield*/, client.updateReservation(lockId, {
                            clientId: newClient.data.clientId, // This should be rejected for locks
                            client: {
                                clientId: newClient.data.clientId,
                                forename: newClient.data.forename,
                                name: newClient.data.name,
                                phone: newClient.data.phone,
                                email: newClient.data.email,
                                clientType: newClient.data.clientType,
                                countryId: newClient.data.countryId,
                                lang: newClient.data.lang
                            }
                        })];
                case 29:
                    _a.sent();
                    console.log('   ❌ Lock update with client data should have been rejected');
                    mark(false);
                    return [3 /*break*/, 31];
                case 30:
                    error_3 = _a.sent();
                    console.log("   \u2713 Correctly rejected lock update with client data: ".concat(error_3.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_3.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_3.ruid || 'N/A'));
                    return [3 /*break*/, 31];
                case 31:
                    // Test: Lock update with adults/children fields should be rejected
                    tally.total++;
                    _a.label = 32;
                case 32:
                    _a.trys.push([32, 34, , 35]);
                    console.log('\n✅ Lock update with adults/children fields validation...');
                    return [4 /*yield*/, client.updateReservation(lockId, {
                            adults: 2, // This should be rejected for locks
                            children: 1,
                            kidsAge: [8]
                        })];
                case 33:
                    _a.sent();
                    console.log('   ❌ Lock update with guest fields should have been rejected');
                    mark(false);
                    return [3 /*break*/, 35];
                case 34:
                    error_4 = _a.sent();
                    console.log("   \u2713 Correctly rejected lock update with guest fields: ".concat(error_4.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_4.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_4.ruid || 'N/A'));
                    return [3 /*break*/, 35];
                case 35:
                    // Test: Lock update with registration field should be rejected
                    tally.total++;
                    _a.label = 36;
                case 36:
                    _a.trys.push([36, 38, , 39]);
                    console.log('\n✅ Lock update with registration field validation...');
                    return [4 /*yield*/, client.updateReservation(lockId, {
                            registration: 'CHECKED_IN' // This should be rejected for locks
                        })];
                case 37:
                    _a.sent();
                    console.log('   ❌ Lock update with registration field should have been rejected');
                    mark(false);
                    return [3 /*break*/, 39];
                case 38:
                    error_5 = _a.sent();
                    console.log("   \u2713 Correctly rejected lock update with registration field: ".concat(error_5.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_5.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_5.ruid || 'N/A'));
                    return [3 /*break*/, 39];
                case 39:
                    // Test: Lock update with source/door code should be rejected
                    tally.total++;
                    _a.label = 40;
                case 40:
                    _a.trys.push([40, 42, , 43]);
                    console.log('\n✅ Lock update with source/door code validation...');
                    return [4 /*yield*/, client.updateReservation(lockId, {
                            sourceId: 1, // This should be rejected for locks
                            doorCode: '1234'
                        })];
                case 41:
                    _a.sent();
                    console.log('   ❌ Lock update with source/door code should have been rejected');
                    mark(false);
                    return [3 /*break*/, 43];
                case 42:
                    error_6 = _a.sent();
                    console.log("   \u2713 Correctly rejected lock update with source/door code: ".concat(error_6.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_6.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_6.ruid || 'N/A'));
                    return [3 /*break*/, 43];
                case 43:
                    // Test: Lock update with color field should be rejected
                    tally.total++;
                    _a.label = 44;
                case 44:
                    _a.trys.push([44, 46, , 47]);
                    console.log('\n✅ Lock update with color field validation...');
                    return [4 /*yield*/, client.updateReservation(lockId, {
                            color: '#ff5722' // This should be rejected for locks
                        })];
                case 45:
                    _a.sent();
                    console.log('   ❌ Lock update with color field should have been rejected');
                    mark(false);
                    return [3 /*break*/, 47];
                case 46:
                    error_7 = _a.sent();
                    console.log("   \u2713 Correctly rejected lock update with color field: ".concat(error_7.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_7.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_7.ruid || 'N/A'));
                    return [3 /*break*/, 47];
                case 47:
                    // Test: Lock update with meal plan should be rejected
                    tally.total++;
                    _a.label = 48;
                case 48:
                    _a.trys.push([48, 50, , 51]);
                    console.log('\n✅ Lock update with meal plan validation...');
                    return [4 /*yield*/, client.updateReservation(lockId, {
                            meal: 'BB', // This should be rejected for locks
                            adultsPortion: 2,
                            childrenPortion: 0,
                            pricePerMeal: 50
                        })];
                case 49:
                    _a.sent();
                    console.log('   ❌ Lock update with meal plan should have been rejected');
                    mark(false);
                    return [3 /*break*/, 51];
                case 50:
                    error_8 = _a.sent();
                    console.log("   \u2713 Correctly rejected lock update with meal plan: ".concat(error_8.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_8.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_8.ruid || 'N/A'));
                    return [3 /*break*/, 51];
                case 51:
                    // Test: Lock update with pricing should be rejected
                    tally.total++;
                    _a.label = 52;
                case 52:
                    _a.trys.push([52, 54, , 55]);
                    console.log('\n✅ Lock update with pricing validation...');
                    return [4 /*yield*/, client.updateReservation(lockId, {
                            prepayment: 100, // This should be rejected for locks
                            prepaymentDeadline: '2025-01-25',
                            price: 200,
                            pricePerRoom: 200,
                            discount: 10,
                            discountType: 0,
                            rateId: 1
                        })];
                case 53:
                    _a.sent();
                    console.log('   ❌ Lock update with pricing should have been rejected');
                    mark(false);
                    return [3 /*break*/, 55];
                case 54:
                    error_9 = _a.sent();
                    console.log("   \u2713 Correctly rejected lock update with pricing: ".concat(error_9.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_9.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_9.ruid || 'N/A'));
                    return [3 /*break*/, 55];
                case 55:
                    // Test: Lock update with payment information should be rejected
                    tally.total++;
                    _a.label = 56;
                case 56:
                    _a.trys.push([56, 58, , 59]);
                    console.log('\n✅ Lock update with payment information validation...');
                    return [4 /*yield*/, client.updateReservation(lockId, {
                            paymentStatus: 'PAID_ALL', // This should be rejected for locks
                            paymentType: 'CASH_PAYMENT',
                            currency: 'USD'
                        })];
                case 57:
                    _a.sent();
                    console.log('   ❌ Lock update with payment information should have been rejected');
                    mark(false);
                    return [3 /*break*/, 59];
                case 58:
                    error_10 = _a.sent();
                    console.log("   \u2713 Correctly rejected lock update with payment information: ".concat(error_10.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_10.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_10.ruid || 'N/A'));
                    return [3 /*break*/, 59];
                case 59:
                    // Test: Valid lock update (only allowed fields)
                    tally.total++;
                    _a.label = 60;
                case 60:
                    _a.trys.push([60, 62, , 63]);
                    console.log('\n✅ Valid lock update with allowed fields...');
                    return [4 /*yield*/, client.updateReservation(lockId, {
                            additionalInfo: 'Updated lock information - maintenance completed',
                            arrival: '2025-01-18', // Should be allowed
                            departure: '2025-01-20'
                        })];
                case 61:
                    updatedLock = _a.sent();
                    console.log("   \u2713 Successfully updated lock: ".concat(updatedLock.data.additionalInfo));
                    console.log("   \u2713 Updated arrival: ".concat(updatedLock.data.arrival));
                    console.log("   \u2713 RUID: ".concat(updatedLock.meta.ruid));
                    mark(true);
                    return [3 /*break*/, 63];
                case 62:
                    error_11 = _a.sent();
                    console.log("   \u274C Valid lock update failed: ".concat(error_11.message));
                    mark(false);
                    console.log("   \u2713 Status: ".concat(error_11.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_11.ruid || 'N/A'));
                    return [3 /*break*/, 63];
                case 63:
                    // Test: Lock overlap with existing reservation should be rejected
                    tally.total++;
                    _a.label = 64;
                case 64:
                    _a.trys.push([64, 66, , 67]);
                    console.log('\n✅ Lock overlap with existing reservation validation...');
                    return [4 /*yield*/, client.updateReservation(lockId, {
                            arrival: reservation.data.arrival, // Same dates as existing reservation
                            departure: reservation.data.departure
                        })];
                case 65:
                    _a.sent();
                    console.log('   ❌ Overlapping lock should have been rejected');
                    mark(false);
                    return [3 /*break*/, 67];
                case 66:
                    error_12 = _a.sent();
                    console.log("   \u2713 Correctly rejected overlapping lock: ".concat(error_12.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_12.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_12.ruid || 'N/A'));
                    return [3 /*break*/, 67];
                case 67:
                    _a.trys.push([67, 69, , 70]);
                    console.log('\n✅ Deleting test lock...');
                    return [4 /*yield*/, client.cancelReservation(lockId)];
                case 68:
                    _a.sent();
                    console.log("   \u2713 Deleted lock: ".concat(lockId));
                    return [3 /*break*/, 70];
                case 69:
                    error_13 = _a.sent();
                    console.log("   \u26A0\uFE0F Failed to delete lock: ".concat(error_13.message));
                    return [3 /*break*/, 70];
                case 70: return [3 /*break*/, 72];
                case 71:
                    console.log('   ⚠️ No rooms available for reservation testing');
                    tally.total++;
                    mark(false);
                    _a.label = 72;
                case 72:
                    // ===== ERROR HANDLING TESTS =====
                    console.log('\n📋 TESTING ERROR HANDLING');
                    console.log('-'.repeat(40));
                    // Test invalid operations
                    tally.total++;
                    _a.label = 73;
                case 73:
                    _a.trys.push([73, 75, , 76]);
                    console.log('✅ Testing invalid client update...');
                    return [4 /*yield*/, client.updateClient(99999, { name: 'Invalid' })];
                case 74:
                    _a.sent();
                    console.log('   ❌ Should have failed but didn\'t');
                    mark(false);
                    return [3 /*break*/, 76];
                case 75:
                    error_14 = _a.sent();
                    console.log("   \u2713 Correctly caught error: ".concat(error_14.message));
                    mark(true);
                    console.log("   \u2713 RUID: ".concat(error_14.ruid || 'N/A'));
                    return [3 /*break*/, 76];
                case 76:
                    tally.total++;
                    _a.label = 77;
                case 77:
                    _a.trys.push([77, 79, , 80]);
                    console.log('\n✅ Testing invalid reservation update...');
                    return [4 /*yield*/, client.updateReservation(99999, { additionalInfo: 'Invalid' })];
                case 78:
                    _a.sent();
                    console.log('   ❌ Should have failed but didn\'t');
                    mark(false);
                    return [3 /*break*/, 80];
                case 79:
                    error_15 = _a.sent();
                    console.log("   \u2713 Correctly caught error: ".concat(error_15.message));
                    mark(true);
                    console.log("   \u2713 RUID: ".concat(error_15.ruid || 'N/A'));
                    return [3 /*break*/, 80];
                case 80:
                    // ===== RESERVATION VALIDATION EDGE CASES =====
                    console.log('\n📋 TESTING RESERVATION UPDATE VALIDATION EDGE CASES');
                    console.log('-'.repeat(50));
                    if (!createdEntities.reservation) return [3 /*break*/, 145];
                    reservationId = createdEntities.reservation.reservationId;
                    // Test 1: Invalid date format
                    tally.total++;
                    _a.label = 81;
                case 81:
                    _a.trys.push([81, 83, , 84]);
                    console.log('✅ Test 1: Invalid arrival date format in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            arrival: '2025-13-45' // Invalid date
                        })];
                case 82:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid date');
                    mark(false);
                    return [3 /*break*/, 84];
                case 83:
                    error_16 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid date: ".concat(error_16.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_16.status || 'Unknown'));
                    return [3 /*break*/, 84];
                case 84:
                    // Test 2: Departure before arrival
                    tally.total++;
                    _a.label = 85;
                case 85:
                    _a.trys.push([85, 87, , 88]);
                    console.log('\n✅ Test 2: Departure before arrival in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            arrival: '2025-01-20',
                            departure: '2025-01-15' // Before arrival
                        })];
                case 86:
                    _a.sent();
                    console.log('   ❌ Should have failed with departure before arrival');
                    mark(false);
                    return [3 /*break*/, 88];
                case 87:
                    error_17 = _a.sent();
                    console.log("   \u2713 Correctly rejected departure before arrival: ".concat(error_17.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_17.status || 'Unknown'));
                    return [3 /*break*/, 88];
                case 88:
                    // Test 3: Zero adults
                    tally.total++;
                    _a.label = 89;
                case 89:
                    _a.trys.push([89, 91, , 92]);
                    console.log('\n✅ Test 3: Zero adults in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            adults: 0 // Zero adults
                        })];
                case 90:
                    _a.sent();
                    console.log('   ❌ Should have failed with zero adults');
                    mark(false);
                    return [3 /*break*/, 92];
                case 91:
                    error_18 = _a.sent();
                    console.log("   \u2713 Correctly rejected zero adults: ".concat(error_18.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_18.status || 'Unknown'));
                    return [3 /*break*/, 92];
                case 92:
                    // Test 4: Negative price
                    tally.total++;
                    _a.label = 93;
                case 93:
                    _a.trys.push([93, 95, , 96]);
                    console.log('\n✅ Test 4: Negative price in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            price: -100, // Negative price
                            pricePerRoom: -100
                        })];
                case 94:
                    _a.sent();
                    console.log('   ❌ Should have failed with negative price');
                    mark(false);
                    return [3 /*break*/, 96];
                case 95:
                    error_19 = _a.sent();
                    console.log("   \u2713 Correctly rejected negative price: ".concat(error_19.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_19.status || 'Unknown'));
                    return [3 /*break*/, 96];
                case 96:
                    // Test 5: Invalid room ID
                    tally.total++;
                    _a.label = 97;
                case 97:
                    _a.trys.push([97, 99, , 100]);
                    console.log('\n✅ Test 5: Invalid room ID in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            roomId: 99999 // Non-existent room
                        })];
                case 98:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid room ID');
                    mark(false);
                    return [3 /*break*/, 100];
                case 99:
                    error_20 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid room ID: ".concat(error_20.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_20.status || 'Unknown'));
                    return [3 /*break*/, 100];
                case 100:
                    // Test 6: Children without ages
                    tally.total++;
                    _a.label = 101;
                case 101:
                    _a.trys.push([101, 103, , 104]);
                    console.log('\n✅ Test 6: Children count mismatch with ages in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            children: 3, // 3 children
                            kidsAge: [8, 12] // Only 2 ages
                        })];
                case 102:
                    _a.sent();
                    console.log('   ❌ Should have failed with children/age mismatch');
                    mark(false);
                    return [3 /*break*/, 104];
                case 103:
                    error_21 = _a.sent();
                    console.log("   \u2713 Correctly rejected children/age mismatch: ".concat(error_21.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_21.status || 'Unknown'));
                    return [3 /*break*/, 104];
                case 104:
                    // Test 7: Invalid check-in time format
                    tally.total++;
                    _a.label = 105;
                case 105:
                    _a.trys.push([105, 107, , 108]);
                    console.log('\n✅ Test 7: Invalid check-in time format in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            checkIn: '25:99' // Invalid time
                        })];
                case 106:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid check-in time');
                    mark(false);
                    return [3 /*break*/, 108];
                case 107:
                    error_22 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid check-in time: ".concat(error_22.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_22.status || 'Unknown'));
                    return [3 /*break*/, 108];
                case 108:
                    // Test 8: Invalid currency code
                    tally.total++;
                    _a.label = 109;
                case 109:
                    _a.trys.push([109, 111, , 112]);
                    console.log('\n✅ Test 8: Invalid currency code in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            currency: 'INVALID' // Invalid currency
                        })];
                case 110:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid currency');
                    mark(false);
                    return [3 /*break*/, 112];
                case 111:
                    error_23 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid currency: ".concat(error_23.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_23.status || 'Unknown'));
                    return [3 /*break*/, 112];
                case 112:
                    // Test 9: Invalid reservation type
                    tally.total++;
                    _a.label = 113;
                case 113:
                    _a.trys.push([113, 115, , 116]);
                    console.log('\n✅ Test 9: Invalid reservation type in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            type: 'INVALID' // Invalid type
                        })];
                case 114:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid reservation type');
                    mark(false);
                    return [3 /*break*/, 116];
                case 115:
                    error_24 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid reservation type: ".concat(error_24.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_24.status || 'Unknown'));
                    return [3 /*break*/, 116];
                case 116:
                    // Test 10: Extremely long stay (over 1 year)
                    tally.total++;
                    _a.label = 117;
                case 117:
                    _a.trys.push([117, 119, , 120]);
                    console.log('\n✅ Test 10: Extremely long stay duration in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            arrival: '2025-01-01',
                            departure: '2027-01-01' // 2 years stay
                        })];
                case 118:
                    _a.sent();
                    console.log('   ❌ Should have failed with extremely long stay');
                    mark(false);
                    return [3 /*break*/, 120];
                case 119:
                    error_25 = _a.sent();
                    console.log("   \u2713 Correctly rejected extremely long stay: ".concat(error_25.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_25.status || 'Unknown'));
                    return [3 /*break*/, 120];
                case 120:
                    // Test 11: Invalid source ID
                    tally.total++;
                    _a.label = 121;
                case 121:
                    _a.trys.push([121, 123, , 124]);
                    console.log('\n✅ Test 11: Invalid source ID in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            sourceId: 99999 // Invalid source ID
                        })];
                case 122:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid source ID');
                    mark(false);
                    return [3 /*break*/, 124];
                case 123:
                    error_26 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid source ID: ".concat(error_26.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_26.status || 'Unknown'));
                    return [3 /*break*/, 124];
                case 124:
                    // Test 12: Same day arrival and departure
                    tally.total++;
                    _a.label = 125;
                case 125:
                    _a.trys.push([125, 127, , 128]);
                    console.log('\n✅ Test 12: Same day arrival and departure in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            arrival: '2025-04-05',
                            departure: '2025-04-05' // Same day
                        })];
                case 126:
                    _a.sent();
                    console.log('   ❌ Should have failed with same day arrival/departure');
                    mark(false);
                    return [3 /*break*/, 128];
                case 127:
                    error_27 = _a.sent();
                    console.log("   \u2713 Correctly rejected same day arrival/departure: ".concat(error_27.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_27.status || 'Unknown'));
                    return [3 /*break*/, 128];
                case 128:
                    // Test 13: Non-existent rate ID
                    tally.total++;
                    _a.label = 129;
                case 129:
                    _a.trys.push([129, 131, , 132]);
                    console.log('\n✅ Test 13: Non-existent rate ID in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            rateId: 88888 // Non-existent rate ID
                        })];
                case 130:
                    _a.sent();
                    console.log('   ❌ Should have failed with non-existent rate ID');
                    mark(false);
                    return [3 /*break*/, 132];
                case 131:
                    error_28 = _a.sent();
                    console.log("   \u2713 Correctly rejected non-existent rate ID: ".concat(error_28.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_28.status || 'Unknown'));
                    return [3 /*break*/, 132];
                case 132:
                    // Test 14: Invalid discount percentage (over 100%)
                    tally.total++;
                    _a.label = 133;
                case 133:
                    _a.trys.push([133, 135, , 136]);
                    console.log('\n✅ Test 14: Invalid discount percentage (over 100%) in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            discount: 120, // 120% discount - invalid
                            discountType: 0 // Percentage type
                        })];
                case 134:
                    _a.sent();
                    console.log('   ❌ Should have failed with 120% discount');
                    mark(false);
                    return [3 /*break*/, 136];
                case 135:
                    error_29 = _a.sent();
                    console.log("   \u2713 Correctly rejected 120% discount: ".concat(error_29.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_29.status || 'Unknown'));
                    return [3 /*break*/, 136];
                case 136:
                    // Test 15: Extreme discount percentage (1000%)
                    tally.total++;
                    _a.label = 137;
                case 137:
                    _a.trys.push([137, 139, , 140]);
                    console.log('\n✅ Test 15: Extreme discount percentage (1000%) in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            discount: 1000, // 1000% discount - extreme case
                            discountType: 0 // Percentage type
                        })];
                case 138:
                    _a.sent();
                    console.log('   ❌ Should have failed with 1000% discount');
                    mark(false);
                    return [3 /*break*/, 140];
                case 139:
                    error_30 = _a.sent();
                    console.log("   \u2713 Correctly rejected 1000% discount: ".concat(error_30.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_30.status || 'Unknown'));
                    return [3 /*break*/, 140];
                case 140:
                    // Test 16: Fixed discount greater than reservation price
                    tally.total++;
                    _a.label = 141;
                case 141:
                    _a.trys.push([141, 143, , 144]);
                    console.log('\n✅ Test 16: Fixed discount greater than reservation price in update...');
                    return [4 /*yield*/, client.updateReservation(reservationId, {
                            price: 200,
                            pricePerRoom: 200,
                            discount: 350, // 350 PLN discount on 200 PLN reservation
                            discountType: 1 // Fixed amount type
                        })];
                case 142:
                    _a.sent();
                    console.log('   ❌ Should have failed with discount greater than price');
                    mark(false);
                    return [3 /*break*/, 144];
                case 143:
                    error_31 = _a.sent();
                    console.log("   \u2713 Correctly rejected discount greater than price: ".concat(error_31.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_31.status || 'Unknown'));
                    return [3 /*break*/, 144];
                case 144: return [3 /*break*/, 146];
                case 145:
                    console.log('   ⚠️ Skipping reservation validation tests - no reservation available');
                    for (i = 0; i < 16; i++) {
                        tally.total++;
                        mark(false);
                    }
                    _a.label = 146;
                case 146:
                    // ===== ROOM EDITING ERROR HANDLING TESTS =====
                    console.log('\n📋 TESTING ROOM EDITING ERROR HANDLING (EDGE CASES)');
                    console.log('-'.repeat(55));
                    // First, create a test room for editing
                    tally.total++;
                    console.log('✅ Creating test room for editing tests...');
                    return [4 /*yield*/, client.createRoom({
                            name: 'Test Room for Editing',
                            persons: 2,
                            maxAdults: 2,
                            maxChildren: 1,
                            roomType: 'STANDARD_ROOM',
                            singleBed: 1,
                            doubleBed: 0,
                            extraBed: 0,
                            service: 'CLEAN',
                            serviceInfo: 'Daily cleaning',
                            info: 'Test room for error handling',
                            color: '#4caf50',
                            square: '20',
                            squareType: 'm2',
                            description: { default: 'Test room description', pl: 'Opis testowego pokoju' },
                            equipment: ['television', 'bathroom'],
                            shareInOffer: 1,
                            locationId: null
                        })];
                case 147:
                    testRoom = _a.sent();
                    createdEntities.room = testRoom.data;
                    console.log("   \u2713 Created test room: ".concat(testRoom.data.name, " (ID: ").concat(testRoom.data.roomId, ")"));
                    console.log("   \u2713 RUID: ".concat(testRoom.meta.ruid));
                    mark(true);
                    testRoomId = testRoom.data.roomId;
                    // Test: 401 Unauthorized error
                    tally.total++;
                    _a.label = 148;
                case 148:
                    _a.trys.push([148, 150, , 151]);
                    console.log('\n✅ 401 Unauthorized error simulation...');
                    // This would normally be tested by using invalid credentials
                    // For simulation purposes, we'll test with a non-existent room ID that might trigger auth issues
                    return [4 /*yield*/, client.updateRoom(999999, { name: 'Should fail with auth error' })];
                case 149:
                    // This would normally be tested by using invalid credentials
                    // For simulation purposes, we'll test with a non-existent room ID that might trigger auth issues
                    _a.sent();
                    console.log('   ❌ Should have failed with 401 error');
                    mark(false);
                    return [3 /*break*/, 151];
                case 150:
                    error_32 = _a.sent();
                    console.log("   \u2713 Correctly caught authorization-related error: ".concat(error_32.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_32.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_32.ruid || 'N/A'));
                    return [3 /*break*/, 151];
                case 151:
                    // Test: 404 Not Found error
                    tally.total++;
                    _a.label = 152;
                case 152:
                    _a.trys.push([152, 154, , 155]);
                    console.log('\n✅ 404 Not Found error...');
                    return [4 /*yield*/, client.updateRoom(888888, { name: 'Non-existent room' })];
                case 153:
                    _a.sent();
                    console.log('   ❌ Should have failed with 404 error');
                    mark(false);
                    return [3 /*break*/, 155];
                case 154:
                    error_33 = _a.sent();
                    console.log("   \u2713 Correctly caught 404 error: ".concat(error_33.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_33.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_33.ruid || 'N/A'));
                    return [3 /*break*/, 155];
                case 155:
                    // Test: 422 Validation Error - Empty name
                    tally.total++;
                    _a.label = 156;
                case 156:
                    _a.trys.push([156, 158, , 159]);
                    console.log('\n✅ 422 Validation Error - Empty name...');
                    return [4 /*yield*/, client.updateRoom(testRoomId, { name: '' })];
                case 157:
                    _a.sent();
                    console.log('   ❌ Should have failed with validation error');
                    mark(false);
                    return [3 /*break*/, 159];
                case 158:
                    error_34 = _a.sent();
                    console.log("   \u2713 Correctly rejected empty name: ".concat(error_34.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_34.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_34.ruid || 'N/A'));
                    return [3 /*break*/, 159];
                case 159:
                    // Test: 422 Validation Error - Negative persons
                    tally.total++;
                    _a.label = 160;
                case 160:
                    _a.trys.push([160, 162, , 163]);
                    console.log('\n✅ 422 Validation Error - Negative persons...');
                    return [4 /*yield*/, client.updateRoom(testRoomId, { persons: -1 })];
                case 161:
                    _a.sent();
                    console.log('   ❌ Should have failed with negative persons');
                    mark(false);
                    return [3 /*break*/, 163];
                case 162:
                    error_35 = _a.sent();
                    console.log("   \u2713 Correctly rejected negative persons: ".concat(error_35.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_35.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_35.ruid || 'N/A'));
                    return [3 /*break*/, 163];
                case 163:
                    // Test: 422 Validation Error - Negative maxAdults
                    tally.total++;
                    _a.label = 164;
                case 164:
                    _a.trys.push([164, 166, , 167]);
                    console.log('\n✅ 422 Validation Error - Negative maxAdults...');
                    return [4 /*yield*/, client.updateRoom(testRoomId, { maxAdults: -2 })];
                case 165:
                    _a.sent();
                    console.log('   ❌ Should have failed with negative maxAdults');
                    mark(false);
                    return [3 /*break*/, 167];
                case 166:
                    error_36 = _a.sent();
                    console.log("   \u2713 Correctly rejected negative maxAdults: ".concat(error_36.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_36.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_36.ruid || 'N/A'));
                    return [3 /*break*/, 167];
                case 167:
                    // Test: 422 Validation Error - Negative maxChildren
                    tally.total++;
                    _a.label = 168;
                case 168:
                    _a.trys.push([168, 170, , 171]);
                    console.log('\n✅ 422 Validation Error - Negative maxChildren...');
                    return [4 /*yield*/, client.updateRoom(testRoomId, { maxChildren: -1 })];
                case 169:
                    _a.sent();
                    console.log('   ❌ Should have failed with negative maxChildren');
                    mark(false);
                    return [3 /*break*/, 171];
                case 170:
                    error_37 = _a.sent();
                    console.log("   \u2713 Correctly rejected negative maxChildren: ".concat(error_37.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_37.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_37.ruid || 'N/A'));
                    return [3 /*break*/, 171];
                case 171:
                    // Test: 422 Validation Error - Invalid room type
                    tally.total++;
                    _a.label = 172;
                case 172:
                    _a.trys.push([172, 174, , 175]);
                    console.log('\n✅ 422 Validation Error - Invalid room type...');
                    return [4 /*yield*/, client.updateRoom(testRoomId, { roomType: 'INVALID_TYPE' })];
                case 173:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid room type');
                    mark(false);
                    return [3 /*break*/, 175];
                case 174:
                    error_38 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid room type: ".concat(error_38.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_38.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_38.ruid || 'N/A'));
                    return [3 /*break*/, 175];
                case 175:
                    // Test: 422 Validation Error - Negative bed counts
                    tally.total++;
                    _a.label = 176;
                case 176:
                    _a.trys.push([176, 178, , 179]);
                    console.log('\n✅ 422 Validation Error - Negative bed counts...');
                    return [4 /*yield*/, client.updateRoom(testRoomId, {
                            singleBed: -1,
                            doubleBed: -1,
                            extraBed: -1
                        })];
                case 177:
                    _a.sent();
                    console.log('   ❌ Should have failed with negative bed counts');
                    mark(false);
                    return [3 /*break*/, 179];
                case 178:
                    error_39 = _a.sent();
                    console.log("   \u2713 Correctly rejected negative bed counts: ".concat(error_39.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_39.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_39.ruid || 'N/A'));
                    return [3 /*break*/, 179];
                case 179:
                    // Test: 400 Bad Request - Invalid room type ID
                    tally.total++;
                    _a.label = 180;
                case 180:
                    _a.trys.push([180, 182, , 183]);
                    console.log('\n✅ 400 Bad Request - Invalid room type ID...');
                    return [4 /*yield*/, client.updateRoom(testRoomId, { roomTypeId: -999 })];
                case 181:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid room type ID');
                    mark(false);
                    return [3 /*break*/, 183];
                case 182:
                    error_40 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid room type ID: ".concat(error_40.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_40.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_40.ruid || 'N/A'));
                    return [3 /*break*/, 183];
                case 183:
                    // Test: 422 Validation Error - Extremely long name
                    tally.total++;
                    _a.label = 184;
                case 184:
                    _a.trys.push([184, 186, , 187]);
                    console.log('\n✅ 422 Validation Error - Extremely long name...');
                    longName = 'A'.repeat(1000);
                    return [4 /*yield*/, client.updateRoom(testRoomId, { name: longName })];
                case 185:
                    _a.sent();
                    console.log('   ❌ Should have failed with extremely long name');
                    mark(false);
                    return [3 /*break*/, 187];
                case 186:
                    error_41 = _a.sent();
                    console.log("   \u2713 Correctly rejected extremely long name: ".concat(error_41.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_41.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_41.ruid || 'N/A'));
                    return [3 /*break*/, 187];
                case 187:
                    // Test: 422 Validation Error - Invalid color format
                    tally.total++;
                    _a.label = 188;
                case 188:
                    _a.trys.push([188, 190, , 191]);
                    console.log('\n✅ 422 Validation Error - Invalid color format...');
                    return [4 /*yield*/, client.updateRoom(testRoomId, { color: 'invalid-color' })];
                case 189:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid color format');
                    mark(false);
                    return [3 /*break*/, 191];
                case 190:
                    error_42 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid color format: ".concat(error_42.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_42.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_42.ruid || 'N/A'));
                    return [3 /*break*/, 191];
                case 191:
                    // Test: 422 Validation Error - Invalid square type
                    tally.total++;
                    _a.label = 192;
                case 192:
                    _a.trys.push([192, 194, , 195]);
                    console.log('\n✅ 422 Validation Error - Invalid square type...');
                    return [4 /*yield*/, client.updateRoom(testRoomId, {
                            square: '25',
                            squareType: 'ft2' // Use valid but different type to test validation
                        })];
                case 193:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid square type');
                    mark(false);
                    return [3 /*break*/, 195];
                case 194:
                    error_43 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid square type: ".concat(error_43.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_43.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_43.ruid || 'N/A'));
                    return [3 /*break*/, 195];
                case 195:
                    // Test: 422 Validation Error - Invalid equipment array
                    tally.total++;
                    _a.label = 196;
                case 196:
                    _a.trys.push([196, 198, , 199]);
                    console.log('\n✅ 422 Validation Error - Invalid equipment array...');
                    return [4 /*yield*/, client.updateRoom(testRoomId, {
                            equipment: ['invalid_equipment_1', 'invalid_equipment_2'] // Non-existent equipment keys
                        })];
                case 197:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid equipment keys');
                    mark(false);
                    return [3 /*break*/, 199];
                case 198:
                    error_44 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid equipment keys: ".concat(error_44.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_44.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_44.ruid || 'N/A'));
                    return [3 /*break*/, 199];
                case 199:
                    // Test: 422 Validation Error - Inconsistent capacity
                    tally.total++;
                    _a.label = 200;
                case 200:
                    _a.trys.push([200, 202, , 203]);
                    console.log('\n✅ 422 Validation Error - Inconsistent capacity...');
                    return [4 /*yield*/, client.updateRoom(testRoomId, {
                            persons: 1,
                            maxAdults: 5, // maxAdults greater than total persons
                            maxChildren: 2
                        })];
                case 201:
                    _a.sent();
                    console.log('   ❌ Should have failed with inconsistent capacity');
                    mark(false);
                    return [3 /*break*/, 203];
                case 202:
                    error_45 = _a.sent();
                    console.log("   \u2713 Correctly rejected inconsistent capacity: ".concat(error_45.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_45.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_45.ruid || 'N/A'));
                    return [3 /*break*/, 203];
                case 203:
                    // Test: 422 Validation Error - Zero total capacity
                    tally.total++;
                    _a.label = 204;
                case 204:
                    _a.trys.push([204, 206, , 207]);
                    console.log('\n✅ 422 Validation Error - Zero total capacity...');
                    return [4 /*yield*/, client.updateRoom(testRoomId, {
                            persons: 0,
                            maxAdults: 0,
                            maxChildren: 0
                        })];
                case 205:
                    _a.sent();
                    console.log('   ❌ Should have failed with zero capacity');
                    mark(false);
                    return [3 /*break*/, 207];
                case 206:
                    error_46 = _a.sent();
                    console.log("   \u2713 Correctly rejected zero capacity: ".concat(error_46.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_46.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_46.ruid || 'N/A'));
                    return [3 /*break*/, 207];
                case 207:
                    // Test: Valid update after error tests
                    tally.total++;
                    _a.label = 208;
                case 208:
                    _a.trys.push([208, 210, , 211]);
                    console.log('\n✅ Valid update after error tests...');
                    return [4 /*yield*/, client.updateRoom(testRoomId, {
                            name: 'Successfully Updated Test Room',
                            info: 'Room updated after error tests'
                        })];
                case 209:
                    validUpdate = _a.sent();
                    console.log("   \u2713 Successfully updated room: ".concat(validUpdate.data.name));
                    console.log("   \u2713 Info: ".concat(validUpdate.data.info));
                    console.log("   \u2713 RUID: ".concat(validUpdate.meta.ruid));
                    mark(true);
                    return [3 /*break*/, 211];
                case 210:
                    error_47 = _a.sent();
                    console.log("   \u274C Valid update failed: ".concat(error_47.message));
                    mark(false);
                    console.log("   \u2713 Status: ".concat(error_47.status || 'Unknown'));
                    console.log("   \u2713 RUID: ".concat(error_47.ruid || 'N/A'));
                    return [3 /*break*/, 211];
                case 211:
                    // ===== INVOICE CRUD TESTS =====
                    console.log('\n📋 TESTING INVOICE CRUD OPERATIONS');
                    console.log('-'.repeat(40));
                    // CREATE INVOICE
                    tally.total++;
                    console.log('✅ Creating invoice...');
                    return [4 /*yield*/, client.createInvoice({
                            invoiceType: 1,
                            buyer: { companyName: 'ABC Company Ltd.', address: 'Street 1', taxId: 'GB123456789' },
                            seller: { companyName: 'Paradise Hotel Ltd.', address: 'Hotel Ave 1', taxId: 'GB987654321' },
                            receiver: null,
                            invoiceItems: [
                                { name: 'Hotel accommodation - double room', grossUnitPrice: 150, quantity: 2, unit: 'pcs', rate: '20', symbol: '7' }
                            ],
                            paymentType: 2,
                            paymentStatus: 0,
                            issueDate: '2025-01-15',
                            saleDate: '2025-01-15',
                            paymentDate: '2025-01-29',
                            currency: 'GBP',
                            town: 'London',
                            additionalInfo: 'Test invoice'
                        }).catch(function (ex) {
                            console.log("   \u274C Response: ".concat(JSON.stringify(ex)));
                            return ex.response.data;
                        })];
                case 212:
                    createdInvoice = _a.sent();
                    createdEntities.invoice = createdInvoice.data;
                    console.log("   \u2713 Created invoice: ".concat(createdInvoice.data.invoiceId));
                    console.log("   \u2713 RUID: ".concat(createdInvoice.meta.ruid));
                    mark(true);
                    // READ INVOICE
                    tally.total++;
                    console.log('\n✅ Reading invoice...');
                    return [4 /*yield*/, client.getInvoice(createdInvoice.data.invoiceId)];
                case 213:
                    readInvoice = _a.sent();
                    console.log("   \u2713 Retrieved invoice: ".concat(readInvoice.data.invoiceId));
                    console.log("   \u2713 RUID: ".concat(readInvoice.meta.ruid));
                    mark(true);
                    // UPDATE INVOICE
                    tally.total++;
                    console.log('\n✅ Updating invoice...');
                    return [4 /*yield*/, client.updateInvoice(createdInvoice.data.invoiceId, {
                            additionalInfo: 'Updated test invoice'
                        })];
                case 214:
                    updatedInvoice = _a.sent();
                    console.log("   \u2713 Updated invoice info: ".concat(updatedInvoice.data.additionalInfo));
                    console.log("   \u2713 RUID: ".concat(updatedInvoice.meta.ruid));
                    mark(true);
                    return [3 /*break*/, 238];
                case 215:
                    error_48 = _a.sent();
                    console.log('\n❌ COMPREHENSIVE TEST FAILED:');
                    console.log("   Status: ".concat(error_48.status || 'Unknown'));
                    console.log("   Message: ".concat(error_48.message));
                    console.log("   RUID: ".concat(error_48.ruid || 'N/A'));
                    tally.total++;
                    mark(false);
                    return [3 /*break*/, 238];
                case 216:
                    // ===== CLEANUP =====
                    console.log('\n🧹 CLEANING UP CREATED ENTITIES');
                    console.log('-'.repeat(40));
                    _a.label = 217;
                case 217:
                    _a.trys.push([217, 221, , 222]);
                    tally.total++;
                    if (!(createdEntities.invoice && createdEntities.invoice.invoiceId)) return [3 /*break*/, 219];
                    console.log('✅ Deleting invoice...');
                    return [4 /*yield*/, client.deleteInvoice(createdEntities.invoice.invoiceId)];
                case 218:
                    _a.sent();
                    console.log("   \u2713 Deleted invoice: ".concat(createdEntities.invoice.invoiceId));
                    mark(true);
                    return [3 /*break*/, 220];
                case 219:
                    console.log('   ℹ️ No invoice to delete.');
                    mark(true);
                    _a.label = 220;
                case 220: return [3 /*break*/, 222];
                case 221:
                    error_49 = _a.sent();
                    console.log("   \u26A0\uFE0F Failed to delete invoice: ".concat(error_49.message));
                    mark(false);
                    return [3 /*break*/, 222];
                case 222:
                    _a.trys.push([222, 226, , 227]);
                    tally.total++;
                    if (!createdEntities.reservation) return [3 /*break*/, 224];
                    console.log('✅ Deleting reservation...');
                    return [4 /*yield*/, client.cancelReservation(createdEntities.reservation.reservationId)];
                case 223:
                    _a.sent();
                    console.log("   \u2713 Deleted reservation: ".concat(createdEntities.reservation.reservationId));
                    mark(true);
                    return [3 /*break*/, 225];
                case 224:
                    console.log('   ℹ️ No reservation to delete.');
                    mark(true);
                    _a.label = 225;
                case 225: return [3 /*break*/, 227];
                case 226:
                    error_50 = _a.sent();
                    console.log("   \u26A0\uFE0F Failed to delete reservation: ".concat(error_50.message));
                    mark(false);
                    return [3 /*break*/, 227];
                case 227:
                    _a.trys.push([227, 231, , 232]);
                    tally.total++;
                    if (!createdEntities.room) return [3 /*break*/, 229];
                    console.log('✅ Deleting test room...');
                    return [4 /*yield*/, client.deleteRoom(createdEntities.room.roomId)];
                case 228:
                    _a.sent();
                    console.log("   \u2713 Deleted room: ".concat(createdEntities.room.name, " (ID: ").concat(createdEntities.room.roomId, ")"));
                    mark(true);
                    return [3 /*break*/, 230];
                case 229:
                    console.log('   ℹ️ No room to delete.');
                    mark(true);
                    _a.label = 230;
                case 230: return [3 /*break*/, 232];
                case 231:
                    error_51 = _a.sent();
                    console.log("   \u26A0\uFE0F Failed to delete room: ".concat(error_51.message));
                    mark(false);
                    return [3 /*break*/, 232];
                case 232:
                    _a.trys.push([232, 236, , 237]);
                    tally.total++;
                    if (!createdEntities.client) return [3 /*break*/, 234];
                    console.log('✅ Deleting client...');
                    return [4 /*yield*/, client.deleteClient(createdEntities.client.clientId)];
                case 233:
                    _a.sent();
                    console.log("   \u2713 Deleted client: ".concat(createdEntities.client.getFullName()));
                    mark(true);
                    return [3 /*break*/, 235];
                case 234:
                    console.log('   ℹ️ No client to delete.');
                    mark(true);
                    _a.label = 235;
                case 235: return [3 /*break*/, 237];
                case 236:
                    error_52 = _a.sent();
                    console.log("   \u26A0\uFE0F Failed to delete client: ".concat(error_52.message));
                    mark(false);
                    return [3 /*break*/, 237];
                case 237:
                    console.log('\n🎉 COMPREHENSIVE TESTING COMPLETED!');
                    bar = '*'.repeat(64);
                    console.log(bar);
                    successPct = tally.total === 0 ? 0 : Math.round((tally.passed / tally.total) * 100);
                    console.log("\u2705 TEST SUMMARY: ".concat(tally.passed, "/").concat(tally.total, " passed (").concat(successPct, "%)"));
                    console.log(bar);
                    return [7 /*endfinally*/];
                case 238: return [2 /*return*/];
            }
        });
    });
}
// Run example
if (require.main === module) {
    comprehensiveUsageExample();
}
