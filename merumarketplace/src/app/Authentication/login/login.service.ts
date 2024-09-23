import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class Login {

  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) {}

  async login(email: string, password: string): Promise<any> {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (!user) {
        throw new Error('Login failed. User not found.');
      }

      // Optionally, retrieve additional user data from Firestore if needed
      const userDoc = await this.firestore.collection('users').doc(user.uid).get().toPromise();
      return userDoc?.data();
    } catch (error: unknown) {
      let errorMessage = 'Login failed. Please try again.';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      console.error('Error during login:', errorMessage);
      throw new Error(errorMessage);
    }
  }
}
