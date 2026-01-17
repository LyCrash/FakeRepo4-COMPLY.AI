export function createUser(user) {
  console.log("User email:", user.email); // ❌ PII log

  return {
    id: Date.now(),
    email: user.email,
    created_at: new Date()
  };
}
