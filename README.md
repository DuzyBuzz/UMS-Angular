<<<<<<< HEAD
# User Management System
Angular-based application with Firebase integration for user authentication and management

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

## Features
- User registration with email/password
- Secure login/logout functionality
- User profile management (CRUD operations)
- Admin dashboard with user management
- Password reset functionality
- Real-time data synchronization with Firestore

## Prerequisites
- Node.js (v16+)
- Angular CLI (v15+)
- Firebase account
- Modern web browser with ES6+ support

## Installation
```bash
git clone https://github.com/elevatechdev/ums.git
cd ums
npm install
```

## Configuration
1. Create Firebase project at https://console.firebase.google.com
2. Enable Authentication methods (Email/Password, Google)
3. Create Firestore database in production mode
4. Update `src/environments/environment.ts` with your Firebase config:
```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
  }
};
```

## Running the Application
```bash
ng serve
```
Navigate to `http://localhost:4200`

## Testing
```bash
# Unit tests
ng test

# End-to-end tests
ng e2e
```

## Deployment
```bash
# Build for production
ng build --configuration production

# Deploy to Firebase Hosting
firebase deploy
```

## Built With
- Angular 15+
- Firebase Authentication
- Cloud Firestore
- Firebase Hosting
- Angular Material UI
- RxJS
- Jasmine/Karma

## License
MIT License

## Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments
- Firebase team for comprehensive documentation
- Angular team for powerful framework
- Material Design team for UI components

=======
# Ums

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
>>>>>>> ecea6a4 (Pushed Angular UMS project)
