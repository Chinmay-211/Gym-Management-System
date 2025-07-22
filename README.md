# 💪 Gym Management System

A complete Gym Management System with Firebase integration, enabling Admins to manage members, billing, packages, notifications, and supplements, while members and users can view details, bills, and notifications.

## 🔧 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase Firestore (NoSQL Database)
- **Authentication**: Firebase Auth
- **Deployment**: Firebase Hosting

---

## 👥 User Roles

### 🔐 Admin

- Login with email/password
- Add new members (creates Firebase Auth account + Firestore record)
- Update/Delete existing members
- Create and manage billing records
- Assign fee packages
- Send monthly notifications
- Export reports
- Manage supplement store
- Add/view diet details

### 🙍 Member

- Login using registered credentials
- View personal bill receipts
- View gym notifications
- Logout securely

### 👤 User

- Login
- View member details
- Search billing records

---

## 🗃 Firebase Structure

### 🔒 Authentication
- Admin and members are created via Firebase Auth.

### 🗃 Firestore Collections

```bash
members/
  └── {memberId}
        - Name
        - Email
        - Phone
        - Payment
        └── notifications/
              - message
              - sentAt

bills/
  - Package
  - Amount
  - BillDate
  - Status
  - MemberUID
  - Timestamp
