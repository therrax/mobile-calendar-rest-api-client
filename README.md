# Mobile Calendar API Client


## ⚠️ IMPORTANT NOTICE

**This repository was created for testing purposes only.** The Mobile Calendar REST API is currently in testing mode and there is no official release date for the production version yet. When the production version becomes available, this repository will be updated accordingly.

**Please note:** This library is intended for development and testing only. Do not use in production environments until the official API release.

Professional TypeScript/JavaScript client for the Mobile Calendar Public API. Fully compatible with TypeScript and plain JavaScript projects.

📚 **Official Documentation:** [https://mobile-calendar.gitbook.io/v1](https://mobile-calendar.gitbook.io/v1)

## 🔑 Getting API Access

To use this client, you need API credentials (clientId and clientSecret). According to the [official documentation](https://mobile-calendar.gitbook.io/v1/overview/create-credentials), you can create API credentials by:

1. **Log in** to your main account at app.mobile-calendar.com
2. Navigate to **Integrations > REST API**
3. Click **Add API Account**
4. Provide the required details and generate credentials

**⚠️ Current Status:** This option is currently disabled as the package has not been officially released yet. The API access creation feature will be enabled when the production version becomes available.

## 🚀 Installation

```bash
npm install mobile-calendar-rest-api-client
```

## 📋 Requirements

- Node.js >= 16.0.0
- TypeScript >= 4.0.0 (optional)

## ⚙️ Configuration

### Environment variables

Create a `.env` file in your project root:

```env
MC_CLIENT_ID=your_client_id_here
MC_CLIENT_SECRET=your_client_secret_here
MC_BASE_URL=https://apisandbox.mobile-calendar.com/v1/public
```

### Programmatic configuration

```typescript
import { MobileCalendarClient } from 'mobile-calendar-rest-api-client';

const client = new MobileCalendarClient({
  clientId: 'your_client_id',
  clientSecret: 'your_client_secret',
  baseURL: 'https://apisandbox.mobile-calendar.com/v1/public' // optional
});
```

## 🔧 Usage

### TypeScript

```typescript
import { 
  MobileCalendarClient, 
  Reservation, 
  Room, 
  Client,
  Rate,
  Pricing,
  Availability
} from 'mobile-calendar-rest-api-client';

const client = new MobileCalendarClient();

// Get reservations
const reservations = await client.getReservations();
console.log(reservations.data); // Reservation[]

// Create a reservation
const newReservation = await client.createReservation({
  type: 'SINGLE',
  arrival: '2025-01-01',
  departure: '2025-01-03',
  roomId: 1,
  client: {
    forename: 'John',
    name: 'Doe',
    phone: '+48123456789',
    email: 'john@example.com',
    clientType: 'REGULAR',
    countryId: 1,
    lang: 'en'
  },
  adults: 2,
  children: 0
});

// Get rooms
const rooms = await client.getRooms();
console.log(rooms.data); // Room[]

// Get clients
const clients = await client.getClients();
console.log(clients.data); // Client[]

// Get rates
const rates = await client.getRates();
console.log(rates.data); // Rate[]
```

### JavaScript

```javascript
const { MobileCalendarClient } = require('mobile-calendar-rest-api-client');

const client = new MobileCalendarClient();

// Get reservations
client.getReservations()
  .then(reservations => {
    console.log(reservations.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```

## 📚 API Reference

### Reservations

```typescript
// List reservations
const reservations = await client.getReservations(params);

// Get reservation by ID
const reservation = await client.getReservation(id);

// Create reservation
const created = await client.createReservation(data);

// Update reservation
const updated = await client.updateReservation(id, data);

// Cancel reservation
await client.cancelReservation(id);
```

### Rooms

```typescript
// List rooms
const rooms = await client.getRooms(params);

// Get room by ID
const room = await client.getRoom(id);

// Create room
const createdRoom = await client.createRoom(data);

// Update room
const updatedRoom = await client.updateRoom(id, data);

// Delete room
await client.deleteRoom(id);
```

### Clients

```typescript
// List clients
const clients = await client.getClients(params);

// Get client by ID
const singleClient = await client.getClient(id);

// Create client
const createdClient = await client.createClient(data);

// Update client
const updatedClient = await client.updateClient(id, data);

// Delete client
await client.deleteClient(id);
```

### Availability and Pricing

```typescript
// Get availability
const availability = await client.getAvailability(params);

// Get pricing
const pricing = await client.getPricing(params);

// Get rates
const rates = await client.getRates();
```

### Webhooks

```typescript
// Get webhooks
const webhooks = await client.getWebhooks();

// Create webhook
const newWebhook = await client.createWebhook(data);

// Delete webhook
await client.deleteWebhook(id);
```

## 🏗️ Data models

### Reservation

```typescript
const reservation = new Reservation({ ...data });

// Helpers
reservation.isActive();
reservation.getNightsCount();
reservation.isFuture();
```

### Room

```typescript
const room = new Room({ ...data });

// Helpers
room.canAccommodate(adults, children);
room.getDescription('en');
room.hasEquipment('balcony');
```

### Client

```typescript
const clientModel = new Client(
  1,
  'John',
  'Doe',
  '12345',
  '+48123456789',
  'john@example.com',
  'REGULAR',
  1,
  'en'
);

// Helpers
clientModel.getFullName();
clientModel.isCorporate();
clientModel.isVIP();
clientModel.hasCompleteContactInfo();
```

## 🧪 Testing

```bash
# Run tests
npx tsc examples/comprehensive-usage.ts --outDir dist --moduleResolution node --target es2020 --module commonjs

npx tsc examples/comprehensive-usage.ts --noEmit

npx tsc examples/comprehensive-usage.ts; node examples/comprehensive-usage.js
```

## 📦 Build

```bash
# Compile TypeScript
npm run build

# Watch mode
npm run dev

# Clean
npm run clean
```

## 🔒 Security

- Credentials are read from environment variables
- Automatic token refresh
- Authentication error handling
- Rate limiting logging

## 📄 License

MIT

## 🤝 Support

If you have issues or questions, please open a GitHub issue.

## 🔄 Changelog

See CHANGELOG.md.