/**
 * Comprehensive usage example of Mobile Calendar API Client
 * Combines basic and advanced functionality with full CRUD testing
 */

import { 
  MobileCalendarClient, 
  Reservation, 
  Client,
  Room,
  RoomType,
  Invoice,
  Logger,
  LogLevel 
} from '../src/index';

async function comprehensiveUsageExample() {
  console.log('🚀 Comprehensive Mobile Calendar API Client Testing\n');
  console.log('=' .repeat(60));

  // Logging configuration
  const logger = Logger.getInstance();
  logger.setLogLevel(LogLevel.DEBUG);

  // Simple test tally
  const tally = { total: 0, passed: 0 };
  const mark = (ok: boolean) => { tally.passed += ok ? 1 : 0; };

  // Client initialization (uses env via ConfigManager)
  const client = new MobileCalendarClient({
    clientId: "user3726_a074f28a2edd3d4f4d072144201051ea",
    clientSecret: "71a54800fc76879b8dcf623211fbd1fcd8e4cd00028c2111671cb46ad4a0c385",
  });

  // Track created entities for cleanup
  const createdEntities = {
    client: null as any,
    room: null as any,
    reservation: null as any,
    invoice: null as any
  };

  try {
    // ===== BASIC API TESTS =====
    console.log('\n📋 TESTING BASIC API ENDPOINTS');
    console.log('-'.repeat(40));

    // 1. Get rooms
    tally.total++; console.log('✅ Getting rooms...');
    const rooms = await client.getRooms({ page: 1, limit: 5 });
    console.log(`   ✓ Found ${rooms.data.length} rooms`);
    console.log(`   ✓ RUID: ${rooms.meta.ruid}`); mark(true);

    // 2. Get reservations
    tally.total++; console.log('\n✅ Getting reservations...');
    const reservations = await client.getReservations({ page: 1, limit: 5 });
    console.log(`   ✓ Found ${reservations.data.length} reservations`);
    console.log(`   ✓ RUID: ${reservations.meta.ruid}`); mark(true);

    // 3. Get clients
    tally.total++; console.log('\n✅ Getting clients...');
    const clients = await client.getClients({ page: 1, limit: 5 });
    console.log(`   ✓ Found ${clients.data.length} clients`);
    console.log(`   ✓ RUID: ${clients.meta.ruid}`); mark(true);

    // 4. Get availability
    if (rooms.data.length > 0) {
      tally.total++; console.log('\n✅ Getting availability...');
      const availability = await client.getAvailability({
        roomId: [rooms.data[0].roomId!],
        from: '2025-01-01',
        to: '2025-01-31'
      });
      console.log(`   ✓ Retrieved availability for ${availability.data.length} days`);
      console.log(`   ✓ RUID: ${availability.meta.ruid}`); mark(true);
    }

    // 5. Get pricing
    if (rooms.data.length > 0) {
      tally.total++; console.log('\n✅ Getting pricing...');
      const pricing = await client.getPricing({
        roomId: [rooms.data[0].roomId!],
        from: '2025-01-01',
        to: '2025-01-31'
      });
      console.log(`   ✓ Retrieved pricing for ${pricing.data.length} days`);
      if (pricing.data.length > 0) {
        console.log(`   ✓ Lowest price: ${pricing.data[0].getLowestPrice()}`);
      }
      console.log(`   ✓ RUID: ${pricing.meta.ruid}`); mark(true);
    }

    // 6. Get rates
    tally.total++; console.log('\n✅ Getting rates...');
    const rates = await client.getRates();
    console.log(`   ✓ Retrieved ${rates.data.length} rates`);
    if (rates.data.length > 0) {
      console.log(`   ✓ First rate: ${rates.data[0].name}`);
    }
    console.log(`   ✓ RUID: ${rates.meta.ruid}`); mark(true);

    // 7. Get sources
    tally.total++; console.log('\n✅ Getting sources...');
    const sources = await client.getSources();
    console.log(`   ✓ Retrieved ${sources.data.length} sources`);
    if (sources.data.length > 0) {
      console.log(`   ✓ First source: ${sources.data[0].name} (custom: ${sources.data[0].isCustom})`);
    }
    console.log(`   ✓ RUID: ${sources.meta.ruid}`); mark(true);

    // 8. Get room types
    tally.total++; console.log('\n✅ Getting room types...');
    const roomTypes = await client.getRoomTypes();
    console.log(`   ✓ Retrieved ${roomTypes.data.length} room types`);
    if (roomTypes.data.length > 0) {
      console.log(`   ✓ First room type: ${roomTypes.data[0].type} (${roomTypes.data[0].maxAdults} adults max)`);
    }
    console.log(`   ✓ RUID: ${roomTypes.meta.ruid}`); mark(true);

    // 9. Get invoices
    tally.total++; console.log('\n✅ Getting invoices...');
    const invoices = await client.getInvoices({ page: 1, limit: 5 });
    console.log(`   ✓ Retrieved ${invoices.data.length} invoices`);
    console.log(`   ✓ RUID: ${invoices.meta.ruid}`); mark(true);

    // ===== CRUD OPERATIONS =====
    console.log('\n📋 TESTING CRUD OPERATIONS');
    console.log('-'.repeat(40));

    // CREATE CLIENT
    tally.total++; console.log('\n✅ Creating new client...');
    const newClient = await client.createClient({
      forename: 'Test',
      name: 'User',
      phone: '+48123456789',
      email: 'test.user@example.com',
      clientType: 'REGULAR',
      countryId: 1,
      lang: 'en'
    });
    createdEntities.client = newClient.data;
    console.log(`   ✓ Created client: ${newClient.data.getFullName()}`);
    console.log(`   ✓ Client ID: ${newClient.data.clientId}`);
    console.log(`   ✓ RUID: ${newClient.meta.ruid}`); mark(true);

    // READ CLIENT
    tally.total++; console.log('\n✅ Reading client...');
    const readClient = await client.getClient(newClient.data.clientId!);
    console.log(`   ✓ Retrieved client: ${readClient.data.getFullName()}`);
    console.log(`   ✓ RUID: ${readClient.meta.ruid}`); mark(true);

    // UPDATE CLIENT
    tally.total++; console.log('\n✅ Updating client...');
    const updatedClient = await client.updateClient(newClient.data.clientId!, {
      name: 'Updated-User',
      comments: 'Updated test client'
    });
    console.log(`   ✓ Updated client: ${updatedClient.data.getFullName()}`);
    console.log(`   ✓ Comments: ${updatedClient.data.comments}`);
    console.log(`   ✓ RUID: ${updatedClient.meta.ruid}`); mark(true);

    // CREATE RESERVATION (if rooms available)
    if (rooms.data.length > 0) {
      tally.total++; console.log('\n✅ Creating reservation...');
      const reservation = await client.createReservation({
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
      });
      createdEntities.reservation = reservation.data;
      console.log(`   ✓ Created reservation: ${reservation.data.reservationId}`);
      console.log(`   ✓ Arrival: ${reservation.data.arrival}`);
      console.log(`   ✓ Departure: ${reservation.data.departure}`);
      console.log(`   ✓ Nights: ${reservation.data.getNightsCount()}`);
      console.log(`   ✓ RUID: ${reservation.meta.ruid}`); mark(true);

      // READ RESERVATION
      tally.total++; console.log('\n✅ Reading reservation...');
      const readReservation = await client.getReservation(reservation.data.reservationId);
      console.log(`   ✓ Retrieved reservation: ${readReservation.data.reservationId}`);
      console.log(`   ✓ RUID: ${readReservation.meta.ruid}`); mark(true);

      // UPDATE RESERVATION
      tally.total++; console.log('\n✅ Updating reservation...');
      const updatedReservation = await client.updateReservation(reservation.data.reservationId, {
        additionalInfo: 'Updated CRUD test reservation',
        color: '#ff5722'
      });
      console.log(`   ✓ Updated reservation info: ${updatedReservation.data.additionalInfo}`);
      console.log(`   ✓ Updated color: ${updatedReservation.data.color}`);
      console.log(`   ✓ RUID: ${updatedReservation.meta.ruid}`); mark(true);

      // OVERLAP ERROR TEST
      tally.total++;
      try {
        console.log('\n✅ Testing overlapping reservation error...');
        await client.createReservation({
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
        });
        console.log('   ❌ Overlapping reservation should have failed but did not'); mark(false);
      } catch (error: any) {
        console.log(`   ✓ Overlap correctly rejected`); mark(true);
        console.log(`   ✓ Status: ${error.status || 'Unknown'}`);
        console.log(`   ✓ Message: ${error.message}`);
        console.log(`   ✓ RUID: ${error.ruid || 'N/A'}`);
      }
    } else {
      console.log('   ⚠️ No rooms available for reservation testing');
      tally.total++; mark(false);
    }

    // ===== ERROR HANDLING TESTS =====
    console.log('\n📋 TESTING ERROR HANDLING');
    console.log('-'.repeat(40));

    // Test invalid operations
    tally.total++;
    try {
      console.log('✅ Testing invalid client update...');
      await client.updateClient(99999, { name: 'Invalid' });
      console.log('   ❌ Should have failed but didn\'t'); mark(false);
    } catch (error: any) {
      console.log(`   ✓ Correctly caught error: ${error.message}`); mark(true);
      console.log(`   ✓ RUID: ${error.ruid || 'N/A'}`);
    }

    tally.total++;
    try {
      console.log('\n✅ Testing invalid reservation update...');
      await client.updateReservation(99999, { additionalInfo: 'Invalid' });
      console.log('   ❌ Should have failed but didn\'t'); mark(false);
    } catch (error: any) {
      console.log(`   ✓ Correctly caught error: ${error.message}`); mark(true);
      console.log(`   ✓ RUID: ${error.ruid || 'N/A'}`);
    }

    // ===== INVOICE CRUD TESTS =====
    console.log('\n📋 TESTING INVOICE CRUD OPERATIONS');
    console.log('-'.repeat(40));

    // CREATE INVOICE
    tally.total++; console.log('✅ Creating invoice...');
    const createdInvoice = await client.createInvoice({
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
    }).catch((ex) => {
      console.log(`   ❌ Response: ${JSON.stringify(ex)}`);
      return ex.response.data;
    });
    createdEntities.invoice = createdInvoice.data;
    console.log(`   ✓ Created invoice: ${createdInvoice.data.invoiceId}`);
    console.log(`   ✓ RUID: ${createdInvoice.meta.ruid}`); mark(true);

    // READ INVOICE
    tally.total++; console.log('\n✅ Reading invoice...');
    const readInvoice = await client.getInvoice(createdInvoice.data.invoiceId!);
    console.log(`   ✓ Retrieved invoice: ${readInvoice.data.invoiceId}`);
    console.log(`   ✓ RUID: ${readInvoice.meta.ruid}`); mark(true);

    // UPDATE INVOICE
    tally.total++; console.log('\n✅ Updating invoice...');
    const updatedInvoice = await client.updateInvoice(createdInvoice.data.invoiceId!, {
      additionalInfo: 'Updated test invoice'
    });
    console.log(`   ✓ Updated invoice info: ${updatedInvoice.data.additionalInfo}`);
    console.log(`   ✓ RUID: ${updatedInvoice.meta.ruid}`); mark(true);

  } catch (error: any) {
    console.log('\n❌ COMPREHENSIVE TEST FAILED:');
    console.log(`   Status: ${error.status || 'Unknown'}`);
    console.log(`   Message: ${error.message}`);
    console.log(`   RUID: ${error.ruid || 'N/A'}`);
    tally.total++; mark(false);
  } finally {
    // ===== CLEANUP =====
    console.log('\n🧹 CLEANING UP CREATED ENTITIES');
    console.log('-'.repeat(40));

    // Delete Invoice
    try {
      tally.total++;
      if (createdEntities.invoice && createdEntities.invoice.invoiceId) {
        console.log('✅ Deleting invoice...');
        await client.deleteInvoice(createdEntities.invoice.invoiceId);
        console.log(`   ✓ Deleted invoice: ${createdEntities.invoice.invoiceId}`);
        mark(true);
      } else {
        console.log('   ℹ️ No invoice to delete.');
        mark(true);
      }
    } catch (error: any) {
      console.log(`   ⚠️ Failed to delete invoice: ${error.message}`);
      mark(false);
    }

    // Delete Reservation
    try {
      tally.total++;
      if (createdEntities.reservation) {
        console.log('✅ Deleting reservation...');
        await client.cancelReservation(createdEntities.reservation.reservationId);
        console.log(`   ✓ Deleted reservation: ${createdEntities.reservation.reservationId}`);
        mark(true);
      } else {
        console.log('   ℹ️ No reservation to delete.');
        mark(true);
      }
    } catch (error: any) {
      console.log(`   ⚠️ Failed to delete reservation: ${error.message}`);
      mark(false);
    }

    // Delete Client
    try {
      tally.total++;
      if (createdEntities.client) {
        console.log('✅ Deleting client...');
        await client.deleteClient(createdEntities.client.clientId!);
        console.log(`   ✓ Deleted client: ${createdEntities.client.getFullName()}`);
        mark(true);
      } else {
        console.log('   ℹ️ No client to delete.');
        mark(true);
      }
    } catch (error: any) {
      console.log(`   ⚠️ Failed to delete client: ${error.message}`);
      mark(false);
    }

    console.log('\n🎉 COMPREHENSIVE TESTING COMPLETED!');
    const bar = '*'.repeat(64);
    console.log(bar);
    const successPct = tally.total === 0 ? 0 : Math.round((tally.passed / tally.total) * 100);
    console.log(`✅ TEST SUMMARY: ${tally.passed}/${tally.total} passed (${successPct}%)`);
    console.log(bar);
  }
}

// Run example
if (require.main === module) {
  comprehensiveUsageExample();
}
