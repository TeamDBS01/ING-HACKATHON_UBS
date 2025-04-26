
import { pgTable, serial, text, varchar, date, boolean, timestamp, doublePrecision, integer, numeric } from "drizzle-orm/pg-core";

export const bankCustomers = pgTable('bank_customers', {
  //  customer_id: integer('customer_id').primaryKey(), //  Use serial for auto-increment, or define as non-auto-incrementing.
  customerId: text('customer_id').primaryKey(), // Auto-incrementing primary key
  regionCode: text('region_code'),
  citizenRefId: text('citizen_ref_id'),
  kycStatus: text('kyc_status'), //  e.g., "APPROVED", "PENDING", "REJECTED"
  kycScore: doublePrecision('kyc_score'),
  riskFlag: boolean('risk_flag'),
});


export const citizens = pgTable('citizens', {
  citizenId: text('citizen_id'),
  uuid: text('uuid'),
  regionCode: varchar('region_code', { length: 256 }),
  fullName: varchar('full_name', { length: 256 }),
  dob: date('dob'),
  gender: varchar('gender', { length: 256 }),
  address: text('address'),
  faceIdHash: text('face_id_hash'),
  aadhaarId: varchar('aadhaar_id', { length: 256 }),
  panId: varchar('pan_id', { length: 256 }),
  pincode: varchar('pincode', { length: 256 }),
  ssn: varchar('ssn', { length: 256 }),
  driverLicenseId: varchar('driver_license_id', { length: 256 }),
  state: varchar('state', { length: 256 }),
  zipCode: varchar('zip_code', { length: 256 }),
  bsn: varchar('bsn', { length: 256 }),
  city: varchar('city', { length: 256 }),
  postalCode: varchar('postal_code', { length: 256 }),
  residencePermit: boolean('residence_permit'),
  sourceTable: varchar('source_table', { length: 256 }),
  createdAt: timestamp('created_at'),
});

export const bankAccounts = pgTable('bank_accounts', {
  accountId: integer('account_id').primaryKey(), //  Or serial, if it's auto-increment
  customerId: integer('customer_id').notNull(), //  Foreign key to bank_customers
  bankId: integer('bank_id').notNull(),       //  Foreign key to a banks table
  accountNumber: text('account_number').notNull(),
  accountType: text('account_type').notNull(),     // e.g., "SAVINGS", "CHECKING"
  currency: text('currency').notNull(),
  balance: numeric('balance', { precision: 12, scale: 2 }).notNull(), //  Adjust precision/scale as needed
});