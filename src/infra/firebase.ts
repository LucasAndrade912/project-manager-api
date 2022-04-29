
import { initializeApp, cert } from 'firebase-admin/app'

export function initiFirebaseApp() {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const serviceAccount = require('../../serviceAccountKey.json')

	initializeApp({
		credential: cert(serviceAccount)
	})
}