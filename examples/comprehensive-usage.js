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
        var logger, tally, mark, client, createdEntities, rooms, reservations, clients, availability, pricing, rates, sources, roomTypes, invoices, newClient, readClient, updatedClient, reservation, readReservation, updatedReservation, error_1, error_2, error_3, error_4, error_5, error_6, error_7, error_8, error_9, error_10, error_11, error_12, error_13, error_14, error_15, error_16, error_17, error_18, error_19, i, createdInvoice, readInvoice, updatedInvoice, error_20, error_21, error_22, error_23, bar, successPct;
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
                    _a.trys.push([1, 102, 103, 120]);
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
                    if (!(rooms.data.length > 0)) return [3 /*break*/, 23];
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
                case 22: return [3 /*break*/, 24];
                case 23:
                    console.log('   ⚠️ No rooms available for reservation testing');
                    tally.total++;
                    mark(false);
                    _a.label = 24;
                case 24:
                    // ===== ERROR HANDLING TESTS =====
                    console.log('\n📋 TESTING ERROR HANDLING');
                    console.log('-'.repeat(40));
                    // Test invalid operations
                    tally.total++;
                    _a.label = 25;
                case 25:
                    _a.trys.push([25, 27, , 28]);
                    console.log('✅ Testing invalid client update...');
                    return [4 /*yield*/, client.updateClient(99999, { name: 'Invalid' })];
                case 26:
                    _a.sent();
                    console.log('   ❌ Should have failed but didn\'t');
                    mark(false);
                    return [3 /*break*/, 28];
                case 27:
                    error_2 = _a.sent();
                    console.log("   \u2713 Correctly caught error: ".concat(error_2.message));
                    mark(true);
                    console.log("   \u2713 RUID: ".concat(error_2.ruid || 'N/A'));
                    return [3 /*break*/, 28];
                case 28:
                    tally.total++;
                    _a.label = 29;
                case 29:
                    _a.trys.push([29, 31, , 32]);
                    console.log('\n✅ Testing invalid reservation update...');
                    return [4 /*yield*/, client.updateReservation(99999, { additionalInfo: 'Invalid' })];
                case 30:
                    _a.sent();
                    console.log('   ❌ Should have failed but didn\'t');
                    mark(false);
                    return [3 /*break*/, 32];
                case 31:
                    error_3 = _a.sent();
                    console.log("   \u2713 Correctly caught error: ".concat(error_3.message));
                    mark(true);
                    console.log("   \u2713 RUID: ".concat(error_3.ruid || 'N/A'));
                    return [3 /*break*/, 32];
                case 32:
                    // ===== RESERVATION VALIDATION EDGE CASES =====
                    console.log('\n📋 TESTING RESERVATION VALIDATION EDGE CASES');
                    console.log('-'.repeat(50));
                    if (!(rooms.data.length > 0 && newClient.data)) return [3 /*break*/, 97];
                    // Test 1: Invalid date format
                    tally.total++;
                    _a.label = 33;
                case 33:
                    _a.trys.push([33, 35, , 36]);
                    console.log('✅ Test 1: Invalid arrival date format...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-13-45', // Invalid date
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
                            additionalInfo: 'Invalid date test',
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
                case 34:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid date');
                    mark(false);
                    return [3 /*break*/, 36];
                case 35:
                    error_4 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid date: ".concat(error_4.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_4.status || 'Unknown'));
                    return [3 /*break*/, 36];
                case 36:
                    // Test 2: Departure before arrival
                    tally.total++;
                    _a.label = 37;
                case 37:
                    _a.trys.push([37, 39, , 40]);
                    console.log('\n✅ Test 2: Departure before arrival...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-01-20',
                            departure: '2025-01-15', // Before arrival
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
                            additionalInfo: 'Logic error test',
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
                case 38:
                    _a.sent();
                    console.log('   ❌ Should have failed with departure before arrival');
                    mark(false);
                    return [3 /*break*/, 40];
                case 39:
                    error_5 = _a.sent();
                    console.log("   \u2713 Correctly rejected departure before arrival: ".concat(error_5.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_5.status || 'Unknown'));
                    return [3 /*break*/, 40];
                case 40:
                    // Test 3: Zero adults
                    tally.total++;
                    _a.label = 41;
                case 41:
                    _a.trys.push([41, 43, , 44]);
                    console.log('\n✅ Test 3: Zero adults...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-02-15',
                            departure: '2025-02-17',
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
                            adults: 0, // Zero adults
                            children: 2,
                            kidsAge: [8, 12],
                            registration: 'NONE',
                            sourceId: 1,
                            doorCode: '',
                            additionalInfo: 'Zero adults test',
                            prepayment: 0,
                            prepaymentDeadline: null,
                            paymentStatus: 'NO_PAYMENT',
                            paymentType: 'NONE',
                            currency: 'PLN',
                            meal: 'OV',
                            adultsPortion: 0,
                            childrenPortion: 2,
                            additionalServices: [],
                            color: '#fb8c00',
                            price: 150,
                            pricePerRoom: 150,
                            pricePerMeal: 0,
                            discount: 0,
                            discountType: 0,
                            rateId: null
                        })];
                case 42:
                    _a.sent();
                    console.log('   ❌ Should have failed with zero adults');
                    mark(false);
                    return [3 /*break*/, 44];
                case 43:
                    error_6 = _a.sent();
                    console.log("   \u2713 Correctly rejected zero adults: ".concat(error_6.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_6.status || 'Unknown'));
                    return [3 /*break*/, 44];
                case 44:
                    // Test 4: Negative price
                    tally.total++;
                    _a.label = 45;
                case 45:
                    _a.trys.push([45, 47, , 48]);
                    console.log('\n✅ Test 4: Negative price...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-02-20',
                            departure: '2025-02-22',
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
                            additionalInfo: 'Negative price test',
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
                            price: -100, // Negative price
                            pricePerRoom: -100,
                            pricePerMeal: 0,
                            discount: 0,
                            discountType: 0,
                            rateId: null
                        })];
                case 46:
                    _a.sent();
                    console.log('   ❌ Should have failed with negative price');
                    mark(false);
                    return [3 /*break*/, 48];
                case 47:
                    error_7 = _a.sent();
                    console.log("   \u2713 Correctly rejected negative price: ".concat(error_7.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_7.status || 'Unknown'));
                    return [3 /*break*/, 48];
                case 48:
                    // Test 5: Invalid room ID
                    tally.total++;
                    _a.label = 49;
                case 49:
                    _a.trys.push([49, 51, , 52]);
                    console.log('\n✅ Test 5: Invalid room ID...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-02-25',
                            departure: '2025-02-27',
                            roomId: 99999, // Non-existent room
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
                            additionalInfo: 'Invalid room test',
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
                case 50:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid room ID');
                    mark(false);
                    return [3 /*break*/, 52];
                case 51:
                    error_8 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid room ID: ".concat(error_8.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_8.status || 'Unknown'));
                    return [3 /*break*/, 52];
                case 52:
                    // Test 6: Children without ages
                    tally.total++;
                    _a.label = 53;
                case 53:
                    _a.trys.push([53, 55, , 56]);
                    console.log('\n✅ Test 6: Children count mismatch with ages...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-03-01',
                            departure: '2025-03-03',
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
                            children: 3, // 3 children
                            kidsAge: [8, 12], // Only 2 ages
                            registration: 'NONE',
                            sourceId: 1,
                            doorCode: '',
                            additionalInfo: 'Children age mismatch test',
                            prepayment: 0,
                            prepaymentDeadline: null,
                            paymentStatus: 'NO_PAYMENT',
                            paymentType: 'NONE',
                            currency: 'PLN',
                            meal: 'OV',
                            adultsPortion: 0,
                            childrenPortion: 3,
                            additionalServices: [],
                            color: '#fb8c00',
                            price: 180,
                            pricePerRoom: 180,
                            pricePerMeal: 0,
                            discount: 0,
                            discountType: 0,
                            rateId: null
                        })];
                case 54:
                    _a.sent();
                    console.log('   ❌ Should have failed with children/age mismatch');
                    mark(false);
                    return [3 /*break*/, 56];
                case 55:
                    error_9 = _a.sent();
                    console.log("   \u2713 Correctly rejected children/age mismatch: ".concat(error_9.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_9.status || 'Unknown'));
                    return [3 /*break*/, 56];
                case 56:
                    // Test 7: Invalid check-in time format
                    tally.total++;
                    _a.label = 57;
                case 57:
                    _a.trys.push([57, 59, , 60]);
                    console.log('\n✅ Test 7: Invalid check-in time format...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-03-05',
                            departure: '2025-03-07',
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
                            checkIn: '25:99', // Invalid time
                            checkOut: '11:00',
                            adults: 2,
                            children: 0,
                            kidsAge: [],
                            registration: 'NONE',
                            sourceId: 1,
                            doorCode: '',
                            additionalInfo: 'Invalid check-in time test',
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
                case 58:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid check-in time');
                    mark(false);
                    return [3 /*break*/, 60];
                case 59:
                    error_10 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid check-in time: ".concat(error_10.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_10.status || 'Unknown'));
                    return [3 /*break*/, 60];
                case 60:
                    // Test 8: Invalid currency code
                    tally.total++;
                    _a.label = 61;
                case 61:
                    _a.trys.push([61, 63, , 64]);
                    console.log('\n✅ Test 8: Invalid currency code...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-03-10',
                            departure: '2025-03-12',
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
                            additionalInfo: 'Invalid currency test',
                            prepayment: 0,
                            prepaymentDeadline: null,
                            paymentStatus: 'NO_PAYMENT',
                            paymentType: 'NONE',
                            currency: 'INVALID', // Invalid currency
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
                case 62:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid currency');
                    mark(false);
                    return [3 /*break*/, 64];
                case 63:
                    error_11 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid currency: ".concat(error_11.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_11.status || 'Unknown'));
                    return [3 /*break*/, 64];
                case 64:
                    // Test 9: Invalid reservation type
                    tally.total++;
                    _a.label = 65;
                case 65:
                    _a.trys.push([65, 67, , 68]);
                    console.log('\n✅ Test 9: Invalid reservation type...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'INVALID', // Invalid type
                            arrival: '2025-03-15',
                            departure: '2025-03-17',
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
                            additionalInfo: 'Invalid type test',
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
                case 66:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid reservation type');
                    mark(false);
                    return [3 /*break*/, 68];
                case 67:
                    error_12 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid reservation type: ".concat(error_12.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_12.status || 'Unknown'));
                    return [3 /*break*/, 68];
                case 68:
                    // Test 10: Extremely long stay (over 1 year)
                    tally.total++;
                    _a.label = 69;
                case 69:
                    _a.trys.push([69, 71, , 72]);
                    console.log('\n✅ Test 10: Extremely long stay duration...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-01-01',
                            departure: '2027-01-01', // 2 years stay
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
                            additionalInfo: 'Extreme duration test',
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
                            price: 365000, // Extreme price for long stay
                            pricePerRoom: 365000,
                            pricePerMeal: 0,
                            discount: 0,
                            discountType: 0,
                            rateId: null
                        })];
                case 70:
                    _a.sent();
                    console.log('   ❌ Should have failed with extremely long stay');
                    mark(false);
                    return [3 /*break*/, 72];
                case 71:
                    error_13 = _a.sent();
                    console.log("   \u2713 Correctly rejected extremely long stay: ".concat(error_13.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_13.status || 'Unknown'));
                    return [3 /*break*/, 72];
                case 72:
                    // Test 11: Invalid source ID
                    tally.total++;
                    _a.label = 73;
                case 73:
                    _a.trys.push([73, 75, , 76]);
                    console.log('\n✅ Test 11: Invalid source ID...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-04-01',
                            departure: '2025-04-03',
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
                            sourceId: 99999, // Invalid source ID
                            doorCode: '',
                            additionalInfo: 'Invalid source test',
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
                case 74:
                    _a.sent();
                    console.log('   ❌ Should have failed with invalid source ID');
                    mark(false);
                    return [3 /*break*/, 76];
                case 75:
                    error_14 = _a.sent();
                    console.log("   \u2713 Correctly rejected invalid source ID: ".concat(error_14.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_14.status || 'Unknown'));
                    return [3 /*break*/, 76];
                case 76:
                    // Test 12: Same day arrival and departure
                    tally.total++;
                    _a.label = 77;
                case 77:
                    _a.trys.push([77, 79, , 80]);
                    console.log('\n✅ Test 12: Same day arrival and departure...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-04-05',
                            departure: '2025-04-05', // Same day
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
                            additionalInfo: 'Same day test',
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
                case 78:
                    _a.sent();
                    console.log('   ❌ Should have failed with same day arrival/departure');
                    mark(false);
                    return [3 /*break*/, 80];
                case 79:
                    error_15 = _a.sent();
                    console.log("   \u2713 Correctly rejected same day arrival/departure: ".concat(error_15.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_15.status || 'Unknown'));
                    return [3 /*break*/, 80];
                case 80:
                    // Test 13: Non-existent rate ID
                    tally.total++;
                    _a.label = 81;
                case 81:
                    _a.trys.push([81, 83, , 84]);
                    console.log('\n✅ Test 13: Non-existent rate ID...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-04-10',
                            departure: '2025-04-12',
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
                            additionalInfo: 'Invalid rate test',
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
                            rateId: 88888 // Non-existent rate ID
                        })];
                case 82:
                    _a.sent();
                    console.log('   ❌ Should have failed with non-existent rate ID');
                    mark(false);
                    return [3 /*break*/, 84];
                case 83:
                    error_16 = _a.sent();
                    console.log("   \u2713 Correctly rejected non-existent rate ID: ".concat(error_16.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_16.status || 'Unknown'));
                    return [3 /*break*/, 84];
                case 84:
                    // Test 14: Invalid discount percentage (over 100%)
                    tally.total++;
                    _a.label = 85;
                case 85:
                    _a.trys.push([85, 87, , 88]);
                    console.log('\n✅ Test 14: Invalid discount percentage (over 100%)...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-04-15',
                            departure: '2025-04-17',
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
                            additionalInfo: 'Invalid discount test',
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
                            discount: 120, // 120% discount - invalid
                            discountType: 0, // Percentage type
                            rateId: null
                        })];
                case 86:
                    _a.sent();
                    console.log('   ❌ Should have failed with 120% discount');
                    mark(false);
                    return [3 /*break*/, 88];
                case 87:
                    error_17 = _a.sent();
                    console.log("   \u2713 Correctly rejected 120% discount: ".concat(error_17.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_17.status || 'Unknown'));
                    return [3 /*break*/, 88];
                case 88:
                    // Test 15: Extreme discount percentage (1000%)
                    tally.total++;
                    _a.label = 89;
                case 89:
                    _a.trys.push([89, 91, , 92]);
                    console.log('\n✅ Test 15: Extreme discount percentage (1000%)...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-04-20',
                            departure: '2025-04-22',
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
                            additionalInfo: 'Extreme discount test',
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
                            discount: 1000, // 1000% discount - extreme case
                            discountType: 0, // Percentage type
                            rateId: null
                        })];
                case 90:
                    _a.sent();
                    console.log('   ❌ Should have failed with 1000% discount');
                    mark(false);
                    return [3 /*break*/, 92];
                case 91:
                    error_18 = _a.sent();
                    console.log("   \u2713 Correctly rejected 1000% discount: ".concat(error_18.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_18.status || 'Unknown'));
                    return [3 /*break*/, 92];
                case 92:
                    // Test 16: Fixed discount greater than reservation price
                    tally.total++;
                    _a.label = 93;
                case 93:
                    _a.trys.push([93, 95, , 96]);
                    console.log('\n✅ Test 16: Fixed discount greater than reservation price...');
                    return [4 /*yield*/, client.createReservation({
                            type: 'SINGLE',
                            arrival: '2025-04-25',
                            departure: '2025-04-27',
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
                            additionalInfo: 'Fixed discount greater than price test',
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
                            discount: 350, // 350 PLN discount on 200 PLN reservation
                            discountType: 1, // Fixed amount type
                            rateId: null
                        })];
                case 94:
                    _a.sent();
                    console.log('   ❌ Should have failed with discount greater than price');
                    mark(false);
                    return [3 /*break*/, 96];
                case 95:
                    error_19 = _a.sent();
                    console.log("   \u2713 Correctly rejected discount greater than price: ".concat(error_19.message));
                    mark(true);
                    console.log("   \u2713 Status: ".concat(error_19.status || 'Unknown'));
                    return [3 /*break*/, 96];
                case 96: return [3 /*break*/, 98];
                case 97:
                    console.log('   ⚠️ Skipping reservation validation tests - no rooms or client available');
                    for (i = 0; i < 16; i++) {
                        tally.total++;
                        mark(false);
                    }
                    _a.label = 98;
                case 98:
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
                case 99:
                    createdInvoice = _a.sent();
                    createdEntities.invoice = createdInvoice.data;
                    console.log("   \u2713 Created invoice: ".concat(createdInvoice.data.invoiceId));
                    console.log("   \u2713 RUID: ".concat(createdInvoice.meta.ruid));
                    mark(true);
                    // READ INVOICE
                    tally.total++;
                    console.log('\n✅ Reading invoice...');
                    return [4 /*yield*/, client.getInvoice(createdInvoice.data.invoiceId)];
                case 100:
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
                case 101:
                    updatedInvoice = _a.sent();
                    console.log("   \u2713 Updated invoice info: ".concat(updatedInvoice.data.additionalInfo));
                    console.log("   \u2713 RUID: ".concat(updatedInvoice.meta.ruid));
                    mark(true);
                    return [3 /*break*/, 120];
                case 102:
                    error_20 = _a.sent();
                    console.log('\n❌ COMPREHENSIVE TEST FAILED:');
                    console.log("   Status: ".concat(error_20.status || 'Unknown'));
                    console.log("   Message: ".concat(error_20.message));
                    console.log("   RUID: ".concat(error_20.ruid || 'N/A'));
                    tally.total++;
                    mark(false);
                    return [3 /*break*/, 120];
                case 103:
                    // ===== CLEANUP =====
                    console.log('\n🧹 CLEANING UP CREATED ENTITIES');
                    console.log('-'.repeat(40));
                    _a.label = 104;
                case 104:
                    _a.trys.push([104, 108, , 109]);
                    tally.total++;
                    if (!(createdEntities.invoice && createdEntities.invoice.invoiceId)) return [3 /*break*/, 106];
                    console.log('✅ Deleting invoice...');
                    return [4 /*yield*/, client.deleteInvoice(createdEntities.invoice.invoiceId)];
                case 105:
                    _a.sent();
                    console.log("   \u2713 Deleted invoice: ".concat(createdEntities.invoice.invoiceId));
                    mark(true);
                    return [3 /*break*/, 107];
                case 106:
                    console.log('   ℹ️ No invoice to delete.');
                    mark(true);
                    _a.label = 107;
                case 107: return [3 /*break*/, 109];
                case 108:
                    error_21 = _a.sent();
                    console.log("   \u26A0\uFE0F Failed to delete invoice: ".concat(error_21.message));
                    mark(false);
                    return [3 /*break*/, 109];
                case 109:
                    _a.trys.push([109, 113, , 114]);
                    tally.total++;
                    if (!createdEntities.reservation) return [3 /*break*/, 111];
                    console.log('✅ Deleting reservation...');
                    return [4 /*yield*/, client.cancelReservation(createdEntities.reservation.reservationId)];
                case 110:
                    _a.sent();
                    console.log("   \u2713 Deleted reservation: ".concat(createdEntities.reservation.reservationId));
                    mark(true);
                    return [3 /*break*/, 112];
                case 111:
                    console.log('   ℹ️ No reservation to delete.');
                    mark(true);
                    _a.label = 112;
                case 112: return [3 /*break*/, 114];
                case 113:
                    error_22 = _a.sent();
                    console.log("   \u26A0\uFE0F Failed to delete reservation: ".concat(error_22.message));
                    mark(false);
                    return [3 /*break*/, 114];
                case 114:
                    _a.trys.push([114, 118, , 119]);
                    tally.total++;
                    if (!createdEntities.client) return [3 /*break*/, 116];
                    console.log('✅ Deleting client...');
                    return [4 /*yield*/, client.deleteClient(createdEntities.client.clientId)];
                case 115:
                    _a.sent();
                    console.log("   \u2713 Deleted client: ".concat(createdEntities.client.getFullName()));
                    mark(true);
                    return [3 /*break*/, 117];
                case 116:
                    console.log('   ℹ️ No client to delete.');
                    mark(true);
                    _a.label = 117;
                case 117: return [3 /*break*/, 119];
                case 118:
                    error_23 = _a.sent();
                    console.log("   \u26A0\uFE0F Failed to delete client: ".concat(error_23.message));
                    mark(false);
                    return [3 /*break*/, 119];
                case 119:
                    console.log('\n🎉 COMPREHENSIVE TESTING COMPLETED!');
                    bar = '*'.repeat(64);
                    console.log(bar);
                    successPct = tally.total === 0 ? 0 : Math.round((tally.passed / tally.total) * 100);
                    console.log("\u2705 TEST SUMMARY: ".concat(tally.passed, "/").concat(tally.total, " passed (").concat(successPct, "%)"));
                    console.log(bar);
                    return [7 /*endfinally*/];
                case 120: return [2 /*return*/];
            }
        });
    });
}
// Run example
if (require.main === module) {
    comprehensiveUsageExample();
}
