
import { pgTable, serial, text, varchar, date, boolean, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
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