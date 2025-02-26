import { test, expect } from '@playwright/test';

const BASE_URL = "http://localhost:3000"; // Docker Compose miatt 'api' a hostnév

test('GET /users visszaadja a felhasználókat', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/users`);
  expect(response.status()).toBe(200);

  const users = await response.json();
  expect(users.length).toBeGreaterThan(0);
});

test('POST /users létrehoz egy új felhasználót', async ({ request }) => {
  const newUser = { name: "Jane Doe" };

  const response = await request.post(`${BASE_URL}/users`, {
    data: newUser
  });

  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  expect(responseBody.name).toBe(newUser.name);
});