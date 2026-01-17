# INTENTIONALLY INSECURE AUTH MODULE

API_KEY = "sk_live_SECRET_123456"

def register_user(email, password):
    # ❌ Plaintext password
    user = {
        "email": email,
        "password": password
    }

    print("Password:", password)  # ❌ logged password

    return user
