
import { initializeApp, cert } from 'firebase-admin/app'

export function initFirebaseApp() {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const serviceAccount = {
		clientEmail: process.env.CLIENT_EMAIL,
		projectId: process.env.PROJECT_ID,
		privateKey: process.env.PRIVATE_KEY
	}

	initializeApp({
		credential: cert(serviceAccount)
	})
}