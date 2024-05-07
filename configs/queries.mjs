import { executeQuery } from './database.mjs';

export async function findUserIdByUsername(username) {
	const result = await executeQuery(
		'SELECT user_id FROM "User" where username = $1',
		[username]
	);
	if (result.length === 0) {
		return null;
	}
	return result[0].user_id;
}

export async function findUsernameByUserId(userID) {
	const result = await executeQuery(
		'SELECT username FROM "User" where user_id = $1',
		[userID]
	);
	if (result.length === 0) {
		return null;
	}
	return result[0].username;
}

export async function findEmail(email) {
	const result = await executeQuery(
		'SELECT email FROM "User" where email = $1',
		[email]
	);
	if (result.length === 0) {
		return null;
	}
	return result[0].email;
}

export async function findUserId(user_id) {
	const result = await executeQuery(
		'SELECT user_id FROM "User" where user_id = $1',
		[user_id]
	);
	if (result.length === 0) {
		return null;
	}
	return result[0].user_id;
}

export async function findUsername(username) {
	const result = await executeQuery(
		'SELECT username FROM "User" where username = $1',
		[username]
	);
	if (result.length === 0) {
		return null;
	}
	return result[0].username;
}

export async function findGroupId(group_id) {
	const result = await executeQuery(
		'SELECT group_id FROM "Group" where group_id = $1',
		[group_id]
	);
	if (result.length === 0) {
		return null;
	}
	return result[0].group_id;
}

export async function findMessageId(group_id, message_id) {
	const result = await executeQuery(
		'SELECT message_id FROM Message where message_id = $1 AND group_id = $2',
		[message_id, group_id]
	);
	if (result.length === 0) {
		return null;
	}
	return result[0].message_id;
}

export async function isAdmin(group_admin) {
	const admin = await executeQuery(
		'SELECT group_admin FROM "Group" where group_admin = $1',
		[group_admin]
	);
	if (admin.length === 0) {
		return null;
	}
	return admin[0].group_admin;
}
