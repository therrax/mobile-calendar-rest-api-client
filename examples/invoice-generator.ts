import { MobileCalendarClient } from '../src/client/MobileCalendarClient';
import { ConfigManager } from '../src/utils/ConfigManager';
import { Logger } from '../src/utils/Logger';

/**
 * Invoice Generator - Creates 2000 invoices with 50ms delay between each
 * This is a stress test for the invoice creation endpoint
 */

async function generateInvoices() {
  const logger = Logger.getInstance();
  const configManager = ConfigManager.getInstance();
  
  // Initialize client
  const client = new MobileCalendarClient({
    clientId: "user3719_82f1975f4ad23facf91860a3e826f51b",
    clientSecret: "f2c615b0102e200e7c4f23f108db27982f3e23cf87ef03a82309d6779f0be1b8"
  });
  
  logger.info('🚀 Starting Invoice Generator...');
  logger.info('📊 Target: 2000 invoices');
  logger.info('⏱️  Delay: 50ms between requests');
  logger.info('='.repeat(50));
  
  const startTime = Date.now();
  let successCount = 0;
  let errorCount = 0;
  const totalInvoices = 2000;
  
  // Invoice template data from comprehensive-usage.ts
  const invoiceTemplate = {
    invoiceType: 1,
    buyer: { 
      companyName: 'ABC Company Ltd.', 
      address: 'Street 1', 
      taxId: 'GB123456789' 
    },
    seller: { 
      companyName: 'Paradise Hotel Ltd.', 
      address: 'Hotel Ave 1', 
      taxId: 'GB987654321' 
    },
    receiver: null,
    invoiceItems: [
      { 
        name: 'Hotel accommodation - double room', 
        grossUnitPrice: 150, 
        quantity: 2, 
        unit: 'pcs', 
        rate: '20', 
        symbol: '7' 
      }
    ],
    paymentType: 2,
    paymentStatus: 0,
    issueDate: '2025-01-15',
    saleDate: '2025-01-15',
    paymentDate: '2025-01-29',
    currency: 'GBP',
    town: 'London',
    additionalInfo: 'Test invoice'
  };
  
  for (let i = 1; i <= totalInvoices; i++) {
    try {
      // Create unique invoice data for each iteration
      const invoiceData:any = {
        ...invoiceTemplate,
        additionalInfo: `Test invoice #${i}`,
        issueDate: new Date().toISOString().split('T')[0], // Current date
        saleDate: new Date().toISOString().split('T')[0],
        paymentDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // 14 days from now
      };
      
      const response = await client.createInvoice(invoiceData);
      
      if (response.data && response.data.invoiceId) {
        successCount++;
        if (i % 100 === 0) {
          logger.info(`✅ Progress: ${i}/${totalInvoices} invoices created (${successCount} success, ${errorCount} errors)`);
        }
      } else {
        errorCount++;
        logger.warn(`⚠️  Invoice ${i}: No invoiceId returned`);
      }
      
    } catch (error: any) {
      errorCount++;
      logger.error(`❌ Invoice ${i} failed:`, error.message || error);
      
      // Log detailed error for first few failures
      if (errorCount <= 5) {
        logger.debug(`   Status: ${error.response?.status}`);
        logger.debug(`   Message: ${error.response?.data?.message || error.response?.data?.detail || 'Unknown error'}`);
        if (error.response?.data?.meta?.ruid) {
          logger.debug(`   RUID: ${error.response.data.meta.ruid}`);
        }
      }
    }
    
    // 50ms delay between requests
    if (i < totalInvoices) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }
  
  const endTime = Date.now();
  const totalTime = (endTime - startTime) / 1000; // seconds
  const avgTimePerInvoice = totalTime / totalInvoices;
  
  logger.info('='.repeat(50));
  logger.info('📊 INVOICE GENERATOR RESULTS');
  logger.info('='.repeat(50));
  logger.info(`🎯 Target: ${totalInvoices} invoices`);
  logger.info(`✅ Successful: ${successCount} (${((successCount / totalInvoices) * 100).toFixed(1)}%)`);
  logger.info(`❌ Failed: ${errorCount} (${((errorCount / totalInvoices) * 100).toFixed(1)}%)`);
  logger.info(`⏱️  Total Time: ${totalTime.toFixed(2)} seconds`);
  logger.info(`⚡ Average: ${avgTimePerInvoice.toFixed(3)}s per invoice`);
  logger.info(`🚀 Rate: ${(totalInvoices / totalTime).toFixed(2)} invoices/second`);
  logger.info('='.repeat(50));
  
  if (successCount === totalInvoices) {
    logger.info('🎉 ALL INVOICES CREATED SUCCESSFULLY!');
  } else if (successCount > 0) {
    logger.info(`⚠️  PARTIAL SUCCESS: ${successCount}/${totalInvoices} invoices created`);
  } else {
    logger.error('💥 NO INVOICES WERE CREATED!');
  }
}

// Run the generator
generateInvoices().catch((error) => {
  console.error('💥 Generator failed:', error);
  process.exit(1);
});
