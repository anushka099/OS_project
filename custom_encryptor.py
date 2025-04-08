import os

def xor_encrypt_decrypt(file_path, key):
	with open(file_path, "rb") as f:
		data = f.read()
	encrypted_data = bytes([b^key[i%len(key)] for i,b in enumerate(data)])
	enc_file = file_path + ".xor"
	with open(enc_file, "wb") as f:
		f.write(encrypted_data)
	os.remove(file_path)
	print(f"Encrypted: {file_path} -> {enc_file}")

def xor_decrypt(file_path, key):

	decrypted_path = "/mnt/persistant/decrypted/" + os.path.basename(file_path).replace(".xor","")

	with open(file_path, "rb") as f:
		data = f.read()
	decrypted_data = bytes([b^key[i%len(key)] for i, b in enumerate(data)])
	with open(decrypted_path, "wb") as f:
		f.write(decrypted_data)

	os.remove(file_path)
	print(f"Decrypted: {file_path} -> {decrypted_path}")

if __name__ == "__main__":
	import sys
	if len(sys.argv) != 3:
		print("Usage: python3 custom_encryptor.py <encrypt/decrypt> <file_name>")
		sys.exit(1)
	action, file_path = sys.argv[1], sys.argv[2]
	key = b"thisismykey"

	if action == "encrypt":
		xor_encrypt_decrypt(file_path, key)
	elif action == "decrypt":
		xor_decrypt(file_path, key)
	else:
		print("Invalid action. Use 'encrypt' or 'decrypt'.")
