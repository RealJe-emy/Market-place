import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) {}

  async register(email: string, password: string, username: string, role: string, location: string): Promise<any> {
    try {
      // Create user in Firebase Authentication
      const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
  
      if (!user) {
        throw new Error('User credential is null');
      }
  
      // Create userData object with userId
      const userData = {
        username,    // User's name
        email,       // User's email
        role,        // User's role (e.g., admin, customer)
        location,    // User's location (optional field)
        userId: user.uid // Use uid from Firebase and assign it to userId
      };
  
      // Save user data to Firestore under 'users' collection using userId as the document ID
      await this.firestore.collection('users').doc(user.uid).set(userData);
      return userData; // Return user data after successful registration
    } catch (error: unknown) {
      // Handle the error safely
      let errorMessage = 'Registration failed. Please try again.';
  
      if (error instanceof Error) {
        errorMessage = error.message; // Access the error message
      }
  
      console.error('Error during registration:', errorMessage); // Log error details for debugging
      throw new Error(errorMessage); // Rethrow the error with a user-friendly message
    }
  }
}
