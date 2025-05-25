# Jitsi Meeting App&#x20;

## Overview

This is a web-based video conferencing application built with **Angular** for the frontend and **Java Spring Boot** for the backend. It leverages **Jitsi Meet** for handling video conferencing. The application allows users to:

* Start a new Jitsi meeting with a unique room ID
* Join the meeting within the same application using an embedded `iframe`
* View a responsive and attractive interface with Bootstrap
* Create new meetings using the Spring Boot backend integrated with the Jitsi server
* Connected to a self-hosted **Jitsi server on AWS EC2** instance

---

## Features Implemented

### 1. **Navbar**

* Responsive navigation bar
* Bootstrap 5-powered toggle functionality
* Dark theme with branding

### 2. **Hero Section**

* Central focus area to start a meeting
* Uses Angular structural directives (`*ngIf`) to toggle between states
* Button to start a meeting
* Responsive design using Bootstrap grid and utility classes

### 3. **Meeting Area**

* Upon clicking the start button, a unique Jitsi room URL is generated
* The user can join the meeting directly via an embedded `iframe`
* Shows an info alert about refreshing to get a new room ID
* Allows camera, microphone, fullscreen, and display capture

### 4. **Backend Integration (Spring Boot)**

* REST APIs to handle meeting creation and user management
* Logic to generate and serve unique meeting room IDs pointing to the Jitsi server
* Spring Web for backend logic
* CORS enabled to allow Angular frontend to communicate with backend

### 5. **Jitsi Server Hosting**

* A dedicated **Jitsi server is hosted on an AWS EC2 instance**
* The frontend application generates room URLs pointing to the EC2-hosted Jitsi instance
* Spring Boot backend is responsible for dynamically constructing valid meeting URLs
* Ensures secure and scalable video conferencing without relying on public Jitsi servers

---

## Technologies Used

* **Angular** (latest version)
* **Bootstrap 5.3.3**
* **Spring Boot** (Java)
* **Jitsi Meet Embed API** (via iframe) (api geted from backend)
* **AWS EC2** (self-hosted Jitsi server)
* **Render** (backend hosting)

---

## UI Highlights

* Clean and modern UI using Bootstrap components
* Shadowed container for better focus on the hero section
* Fully responsive design for mobile and desktop
* Info alert with flex layout and friendly UX messages
* Enhanced buttons and spacing for professional appearance

---

## Author

Developed by Sandip Raju Rathod 🚀
