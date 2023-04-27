const USER_ROLE = "User";
const MERCHANT_ROLE = "Merchant";

const RECIEVER_ROLE = "Reciever";
const SENDER_ROLE = "Sender";
const ADMIN_ROLE = "Admin";
const API_URL = "http://localhost:5000/api/v1";

const GENERAL_ROLES = [RECIEVER_ROLE, SENDER_ROLE];
const ALL_ROLES = [RECIEVER_ROLE, SENDER_ROLE, ADMIN_ROLE];

const FIELD_ONLY_UPDATEABLE_BY_ADMIN_EVENTS = ["title", "image", "location"];

const SHIPMENT_STATUSES = ["Pending", "Delivered", "OnTheWay"];

module.exports = {
  ADMIN_ROLE,
  USER_ROLE,
  ALL_ROLES,
  MERCHANT_ROLE,
  FIELD_ONLY_UPDATEABLE_BY_ADMIN_EVENTS,
  SENDER_ROLE,
  RECIEVER_ROLE,
  SHIPMENT_STATUSES,
};
