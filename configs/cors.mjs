import cors from 'cors';
export const allowedOrigins = [
	'https://lokkerroom-d7516.web.app',
	'http://127.0.0.1:5173',
	'http://localhost:5173',
];
export const corsOptions = {
	origin: (origin, callback) => {
		if (!origin || allowedOrigins.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	credentials: true,
	methods: ['GET', 'POST', 'DELETE', 'PATCH'],
	allowedHeaders: ['Content-Type', 'Authorization', 'username'],
};

export const useCors = cors(corsOptions); 