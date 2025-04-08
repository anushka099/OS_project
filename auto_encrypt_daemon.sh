#!/bin/bash

WATCH_DIR="/mnt/persistant/protected"
KEY="thisismykey"

echo "Watching $WATCH_DIR for new files..."

inotifywait -m -e close_write --format "%w%f" "$WATCH_DIR" | while read NEWFILE
do
	if [[ ! $NEWFILE == *.xor ]]; then
		echo "Encrypting $NEWFILE..."
		python3 /mnt/persistant/custom_encryptor.py encrypt "$NEWFILE"
	fi
done
